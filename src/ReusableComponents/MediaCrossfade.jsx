
import React, {
  forwardRef,
  useState,
  useRef,
  useEffect,
  useCallback,
  useImperativeHandle,
} from "react";

import gsap from "gsap";
import VisibilityVideo from "./VisibilityVideo";

const MediaCrossfade = forwardRef(function MediaCrossfade(
  {
    media = [],
    scaling = 1.05,
    fadeDuration = 0.8,
    fadeBeforeEnd = 1.0,
  },
  ref
) {
  const videoCount = media.length;

  const getSource = (index) => media[index]?.src ?? "";

  const initialIndices = [
    0,
    videoCount > 1 ? 1 : 0,
  ];

  const [playerSources, setPlayerSources] = useState(() =>
    initialIndices.map(getSource)
  );

  const [videosLoaded, setVideosLoaded] = useState([
    false,
    false,
  ]);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const containerRef = useRef(null);
  const vid1Ref = useRef(null);
  const vid2Ref = useRef(null);

  const activeIndexRef = useRef(0);
  const visibleRef = useRef(false);
  const transitioningRef = useRef(false);

  // The media index assigned to each player.
  const playerVideoIndex = useRef(initialIndices);

  const timelineRef = useRef(null);

  const players = () => [
    vid1Ref.current?.element,
    vid2Ref.current?.element,
  ];

  // Keep refs synchronized for callbacks that need the latest state.
  activeIndexRef.current = activeIndex;
  visibleRef.current = isVisible;
  transitioningRef.current = isTransitioning;

  const currentVideoLoaded = videosLoaded[activeIndex];

  useImperativeHandle(
    ref,
    () => ({
      currentVideoLoaded: () =>
        Boolean(videosLoaded[activeIndexRef.current]),
    }),
    [videosLoaded]
  );

  // Reset the assigned sources if the media list changes.
  useEffect(() => {
    const indices = [0, videoCount > 1 ? 1 : 0];

    playerVideoIndex.current = indices;
    setPlayerSources(indices.map(getSource));
    setVideosLoaded([false, false]);
    setActiveIndex(0);
    setIsTransitioning(false);

    activeIndexRef.current = 0;
    transitioningRef.current = false;

    const [first, second] = players();

    [first, second].forEach((video, index) => {
      if (!video) return;

      video.pause();
      video.style.opacity = index === 0 ? "1" : "0";
      gsap.set(video, { scale: 1 });
    });
  }, [media, videoCount]);

  // Observe the entire crossfade component.
  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting;

        visibleRef.current = visible;
        setIsVisible(visible);

        if (!visible) {
          const videos = players();

          videos.forEach((video) => video?.pause());

          timelineRef.current?.kill();
          timelineRef.current = null;

          transitioningRef.current = false;
          setIsTransitioning(false);

          // Restore a consistent visual state if we left
          // the viewport in the middle of a transition.
          const active = activeIndexRef.current;

          videos.forEach((video, index) => {
            if (!video) return;

            gsap.killTweensOf(video);

            gsap.set(video, {
              opacity: index === active ? 1 : 0,
            });
          });
        }
      },
      { threshold: 0.01 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  // Keep track of video loading.
  const updateLoading = useCallback((index, loaded) => {
    setVideosLoaded((previous) => {
      const next = [...previous];
      next[index] = loaded;
      return next;
    });
  }, []);

  // Wait until the next video has enough data to start playing.
  const waitUntilPlayable = useCallback((video) => {
    if (!video) {
      return Promise.reject(new Error("Video element not found"));
    }

    if (video.readyState >= 3) {
      return Promise.resolve();
    }

    return new Promise((resolve, reject) => {
      const cleanup = () => {
        video.removeEventListener("canplay", handleCanPlay);
        video.removeEventListener("error", handleError);
      };

      const handleCanPlay = () => {
        cleanup();
        resolve();
      };

      const handleError = () => {
        cleanup();
        reject(new Error("The next video could not be loaded"));
      };

      video.addEventListener("canplay", handleCanPlay, {
        once: true,
      });

      video.addEventListener("error", handleError, {
        once: true,
      });

      // Recheck in case the video became playable while
      // the event listeners were being registered.
      if (video.readyState >= 3) {
        cleanup();
        resolve();
      }
    });
  }, []);

  // Crossfade to the other player.
  const crossFade = useCallback(async () => {
    if (
      !visibleRef.current ||
      transitioningRef.current ||
      videoCount === 0
    ) {
      return;
    }

    const videos = players();
    const currentIndex = activeIndexRef.current;
    const nextIndex = currentIndex === 0 ? 1 : 0;

    const current = videos[currentIndex];
    const next = videos[nextIndex];

    if (!current || !next) return;

    transitioningRef.current = true;
    setIsTransitioning(true);

    try {
      // Make sure the incoming player's source is ready.
      await waitUntilPlayable(next);

      // The component may have left the viewport while loading.
      if (!visibleRef.current) {
        transitioningRef.current = false;
        setIsTransitioning(false);
        return;
      }

      next.currentTime = 0;

      // Update active state while allowing both players to run
      // during the crossfade.
      activeIndexRef.current = nextIndex;
      setActiveIndex(nextIndex);

      await next.play();

      if (!visibleRef.current) {
        next.pause();
        transitioningRef.current = false;
        setIsTransitioning(false);
        return;
      }

      // Animate the videos.
      timelineRef.current = gsap.timeline({
        onComplete: () => {
          current.pause();

          gsap.set(current, {
            opacity: 0,
            scale: 1,
          });

          gsap.set(next, {
            opacity: 1,
          });

          // Assign the next upcoming source to the old player.
          // With one video, reuse the same source.
          const upcomingVideo =
            videoCount > 1
              ? (playerVideoIndex.current[nextIndex] + 1) %
                videoCount
              : 0;

          playerVideoIndex.current[currentIndex] = upcomingVideo;

          setPlayerSources((previous) => {
            const updated = [...previous];
            updated[currentIndex] = getSource(upcomingVideo);
            return updated;
          });

          transitioningRef.current = false;
          setIsTransitioning(false);
          timelineRef.current = null;

          gsap.to(next, {
            scale: scaling,
            duration: next.duration || 1,
            ease: "none",
          });
        },
      });

      timelineRef.current
        .to(
          current,
          {
            opacity: 0,
            duration: fadeDuration,
            ease: "power2.inOut",
          },
          0
        )
        .to(
          next,
          {
            opacity: 1,
            duration: fadeDuration,
            ease: "power2.inOut",
          },
          0
        );
    } catch (error) {
      transitioningRef.current = false;
      setIsTransitioning(false);

      if (visibleRef.current) {
        console.error("Video crossfade failed:", error);
      }
    }
  }, [
    videoCount,
    fadeDuration,
    scaling,
    waitUntilPlayable,
    media,
  ]);

  // Trigger the crossfade shortly before the end, with an
  // ended event as a fallback for short videos or timing delays.
  const handleTimeUpdate = useCallback(
    (event) => {
      const video = event.currentTarget;

      if (
        !visibleRef.current ||
        transitioningRef.current ||
        video !== players()[activeIndexRef.current]
      ) {
        return;
      }

      if (
        Number.isFinite(video.duration) &&
        video.duration > 0 &&
        video.currentTime >= video.duration - fadeBeforeEnd
      ) {
        crossFade();
      }
    },
    [crossFade, fadeBeforeEnd]
  );

  const handleEnded = useCallback(
    (event) => {
      if (
        event.currentTarget === players()[activeIndexRef.current]
      ) {
        crossFade();
      }
    },
    [crossFade]
  );

  if (videoCount === 0) {
    return <div className="relative size-full" />;
  }

  return (
    <div
      ref={containerRef}
      className="relative size-full overflow-hidden"
    >
      {!currentVideoLoaded && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-black">
          <p className="text-white">Loading...</p>
        </div>
      )}

      <VisibilityVideo
        ref={vid1Ref}
        src={playerSources[0]}
        isActive={
          isVisible &&
          (activeIndex === 0 || isTransitioning)
        }
        preload="auto"
        onLoadStart={() => updateLoading(0, false)}
        onLoadedData={() => updateLoading(0, true)}
        onError={() => updateLoading(0, false)}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
        className="absolute inset-0 h-full w-full object-cover"
        style={{
          opacity: 1,
          transform: "scale(1)",
        }}
      />

      <VisibilityVideo
        ref={vid2Ref}
        src={playerSources[1]}
        isActive={
          isVisible &&
          (activeIndex === 1 || isTransitioning)
        }
        preload="auto"
        onLoadStart={() => updateLoading(1, false)}
        onLoadedData={() => updateLoading(1, true)}
        onError={() => updateLoading(1, false)}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
        className="absolute inset-0 h-full w-full object-cover"
        style={{
          opacity: 0,
          transform: "scale(1)",
        }}
      />

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle, transparent 45%, rgba(0,0,0,.85) 100%)",
        }}
      />
    </div>
  );
});

export default MediaCrossfade;
