
import React, {
  forwardRef,
  useEffect,
  useRef,
  useState,
  useImperativeHandle,
} from "react";

const VisibilityVideo = forwardRef(function VisibilityVideo(
  {
    src,
    isActive = true,
    preload = "metadata",
    className = "",
    onLoadedData,
    onError,
    onEnded,
    ...props
  },
  forwardedRef
) {
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useImperativeHandle(forwardedRef, () => ({
    play: () => videoRef.current?.play(),
    pause: () => videoRef.current?.pause(),
    get element() {
      return videoRef.current;
    },
  }));

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.01 }
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  // Load a source only when this video is visible.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (!isVisible || !src) {
      video.pause();
      return;
    }

    if (video.dataset.currentSrc !== src) {
      video.dataset.currentSrc = src;
      setIsLoaded(false);
      video.src = src;
      video.load();
    }
  }, [isVisible, src]);

  // Only play when both visible and selected by the parent.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isVisible && isActive && src) {
      video.play().catch(() => {
        // Playback can be blocked by browser autoplay policies.
      });
    } else {
      video.pause();
    }
  }, [isVisible, isActive, src]);

  return (
    <video
      {...props}
      ref={videoRef}
      muted
      playsInline
      preload={preload}
      className={className}
      onLoadedData={(event) => {
        setIsLoaded(true);
        onLoadedData?.(event);
      }}
      onError={(event) => {
        setIsLoaded(false);
        onError?.(event);
      }}
      onEnded={onEnded}
    />
  );
});

export default VisibilityVideo;
