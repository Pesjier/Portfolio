import React, { useRef, useEffect, useState, useLayoutEffect } from 'react'
import FakeLighting from '../ReusableComponents/FakeLighting'
import HighlightEffect from '../ReusableComponents/HighlightEffect'
import { useWindowScroll } from 'react-use';

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Highlights from './Highlights';

gsap.registerPlugin(ScrollTrigger);

//Vid to frame command
//ffmpeg -i testVid-4.mp4 -start_number 1 -q:v 1 ../scrollvideo/frame_%04d.jpg


//Sprite anims

const idleFrames = [
  "PortfolioStuff/transitionanimations/Idle_0000.webp",
  "PortfolioStuff/transitionanimations/Idle_0001.webp",
  "PortfolioStuff/transitionanimations/Idle_0002.webp",
  "PortfolioStuff/transitionanimations/Idle_0003.webp",
  "PortfolioStuff/transitionanimations/Idle_0004.webp",
  "PortfolioStuff/transitionanimations/Idle_0005.webp",
  "PortfolioStuff/transitionanimations/Idle_0006.webp",
  "PortfolioStuff/transitionanimations/Idle_0007.webp",
  "PortfolioStuff/transitionanimations/Idle_0008.webp",
  "PortfolioStuff/transitionanimations/Idle_0009.webp",
  "PortfolioStuff/transitionanimations/Idle_0010.webp",
  "PortfolioStuff/transitionanimations/Idle_0011.webp",
  "PortfolioStuff/transitionanimations/Idle_0012.webp",
  "PortfolioStuff/transitionanimations/Idle_0013.webp",
  "PortfolioStuff/transitionanimations/Idle_0014.webp",
  "PortfolioStuff/transitionanimations/Idle_0015.webp",
  "PortfolioStuff/transitionanimations/Idle_0016.webp",
  "PortfolioStuff/transitionanimations/Idle_0017.webp",
  "PortfolioStuff/transitionanimations/Idle_0018.webp",
  "PortfolioStuff/transitionanimations/Idle_0019.webp",
  "PortfolioStuff/transitionanimations/Idle_0020.webp",
  "PortfolioStuff/transitionanimations/Idle_0021.webp",
  "PortfolioStuff/transitionanimations/Idle_0022.webp",
  "PortfolioStuff/transitionanimations/Idle_0023.webp",
  "PortfolioStuff/transitionanimations/Idle_0024.webp",
];

const transitionFrames = [
  "PortfolioStuff/transitionanimations/Transition_0000.webp",
  "PortfolioStuff/transitionanimations/Transition_0001.webp",
  "PortfolioStuff/transitionanimations/Transition_0002.webp",
  "PortfolioStuff/transitionanimations/Transition_0003.webp",
  "PortfolioStuff/transitionanimations/Transition_0004.webp",
  "PortfolioStuff/transitionanimations/Transition_0005.webp",
  "PortfolioStuff/transitionanimations/Transition_0006.webp",
  "PortfolioStuff/transitionanimations/Transition_0007.webp",
  "PortfolioStuff/transitionanimations/Transition_0008.webp",
  "PortfolioStuff/transitionanimations/Transition_0009.webp",
  "PortfolioStuff/transitionanimations/Transition_0010.webp",
  "PortfolioStuff/transitionanimations/Transition_0011.webp",
  "PortfolioStuff/transitionanimations/Transition_0012.webp",
  "PortfolioStuff/transitionanimations/Transition_0013.webp",
  "PortfolioStuff/transitionanimations/Transition_0014.webp",
  "PortfolioStuff/transitionanimations/Transition_0015.webp",
  "PortfolioStuff/transitionanimations/Transition_0016.webp",
  "PortfolioStuff/transitionanimations/Transition_0017.webp",
  "PortfolioStuff/transitionanimations/Transition_0018.webp",
  "PortfolioStuff/transitionanimations/Transition_0019.webp",
  "PortfolioStuff/transitionanimations/Transition_0020.webp",
];


const TOTAL_FRAMES = 36;
const IDLE_CUTOFF = 0.15
const TERRAIN_IDLE_FRAMES = 3840

const LandingTransition = ({chosenCategory, categorys}) => {
  //Animations
  const [bgOpacity, setBgOpacity] = useState(1.0);
  const [frame, setFrame] = useState(0);

  const [transitionSource, setTransitionSource] = useState("PortfolioStuff/transitionanimations/Transition_0000.webp");
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame(prev => (prev + 1) % idleFrames.length);
    }, 120); // 12 FPS

    return () => clearInterval(interval);
  }, []);

  const [terrainFrame, setTerrainFrame] = useState(0);
  const [transitionFrame, setTransitionFrame] = useState(0);
  const [targetFrame, setTargetFrame] = useState(0);
  const [targetTransitionFrame, setTargetTransitionFrame] = useState(0);
  const [animationSpeed, setAnimationSpeed] = useState(5000);

  const getNextFrame = (current, target, frameCount, framesToJump) => 
  {
    const forwardDistance = (target - current + frameCount) % frameCount;
    const backwardDistance = (current - target + frameCount) % frameCount;

    if (forwardDistance <= backwardDistance) {
      return (current + Math.min(framesToJump, forwardDistance)) % frameCount;
    }

    return (current - Math.min(framesToJump, backwardDistance) + frameCount) % frameCount;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTerrainFrame(prev => {
        if (targetFrame !== null) {
          if (prev === targetFrame) 
            {
            return prev;
          }

          return getNextFrame(
            prev,
            targetFrame,
            TERRAIN_IDLE_FRAMES, Math.max(12 / animationSpeed, 1)
          );
        }

        //Normal idle animation
        return (prev + 1) % TERRAIN_IDLE_FRAMES;
      });
    }, animationSpeed);

    return () => clearInterval(interval);
  }, [targetFrame, animationSpeed]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (targetFrame == terrainFrame)
      {
        setTransitionFrame(prev => {
          if(targetTransitionFrame > prev)
          {
            return (prev + 1);
          }
          else if(targetTransitionFrame < prev)
          {
            return (prev - 1);
          }
          return prev;
        });
      }
    }, 12);

    return () => clearInterval(interval);
  }, [targetFrame, terrainFrame, targetTransitionFrame]);


  //Highlight Section
  const highlightRef = useRef(null);

  //Stars
  const starsRef = useRef(null);

  //ScrollVideo
  const pinRef = useRef(null);
  const containerRef = useRef(null);

  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  // Track viewport height
  useEffect(() => {
    const onResize = () => setWindowHeight(window.innerHeight);

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const [bgScale, setBGScale] = useState(1);

  //Create ScrollTrigger whenever duration or viewport height changes
  useLayoutEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    let raf;

    const trigger = ScrollTrigger.create({
      id: "highlightsTrigger",
      trigger: pinRef.current,
      start: "top top",
      end: () => `+=${windowHeight * 4}`,
      pin: true,
      scrub: true,
      invalidateOnRefresh: true,

      onUpdate(self) 
      {
        if(self.progress <= 0.5)
        {      
          setBGScale(1.0); 
          setTargetFrame(0);
          setAnimationSpeed(2);   
          const transitionProgress = self.progress / 0.5;
          if (transitionProgress > 0.1)
          {
            const imgIndex = Math.ceil(((transitionProgress - 0.1) / 0.9) * TOTAL_FRAMES)
            if (imgIndex > TOTAL_FRAMES)
            {
              setTargetTransitionFrame(TOTAL_FRAMES);
            }
            else if(imgIndex < 1)
            {
              setTargetTransitionFrame(0);
            }
            else
            {
              setTargetTransitionFrame(imgIndex - 1);
            }
          }

          gsap.set(highlightRef.current, {
              opacity: 0,
            });
          gsap.set(starsRef.current, {
            opacity: Math.min(transitionProgress / 0.6, 1),
          });

          setBgOpacity(Math.max(1.0 - (transitionProgress / 0.6), 0))

          if(transitionProgress >= IDLE_CUTOFF)
          {
              setIsTransitioning(true);

            if (transitionProgress - IDLE_CUTOFF <= 0.4)
            {
              const transitionFrameIndex = Math.floor(((transitionProgress - IDLE_CUTOFF) / 0.4) * transitionFrames.length)
              const finalIndex = Math.max(Math.min(transitionFrames.length - 1, transitionFrameIndex), 0);
              setTransitionSource(transitionFrames[finalIndex]);
            }
            else
            {
              setTransitionSource(transitionFrames[transitionFrames.length - 1]);
            }
          }
          else
          {
            setIsTransitioning(false);
          }
        }
        else
        {
          setTargetTransitionFrame(TOTAL_FRAMES);
          setTransitionFrame(TOTAL_FRAMES);
          setBgOpacity(0);
          setIsTransitioning(true);
          setTransitionSource(transitionFrames[transitionFrames.length - 1]);
          const highlightsProgress = (self.progress - 0.5) / 0.5;
          if(highlightsProgress < 0.25)
          {
            const firstTransitionPercentage = highlightsProgress / 0.25;
            if(self.direction === 0)
            {
              setTargetFrame(0);
              setAnimationSpeed(4);
            }
            else
            {
              setTargetFrame(null);
              setAnimationSpeed(firstTransitionPercentage > 0.25 ? firstTransitionPercentage > 0.5 ? 30 : 60 : 90);
            }
              gsap.set(starsRef.current, {
              opacity: 1,
            });

            gsap.set(highlightRef.current, {
              opacity: firstTransitionPercentage,
            });

            setBGScale(1.0);
          }
          else if(highlightsProgress <= 0.75)
          {            
            gsap.set(highlightRef.current, {
              opacity: 1,
            });
            setTargetFrame(null);
            setAnimationSpeed(12);
            gsap.set(starsRef.current, {
              opacity: 1,
            });
            setBGScale(1.0);
          }
          else if(highlightsProgress <= 1.0)
          {
            setTargetFrame(null);
            setAnimationSpeed(12);
            const lastTransitionPercentage = (highlightsProgress - 0.75) / 0.25;
            setBGScale(1.0 + lastTransitionPercentage * 0.5);

            gsap.set(starsRef.current, {
              opacity: 1.0 - lastTransitionPercentage,
            });
            gsap.set(highlightRef.current, {
              opacity: 1 - lastTransitionPercentage,
            });
          }
          else
          {
            setTargetFrame(null);
            setAnimationSpeed(12);
            setBGScale(1.0 + 0.5);

            gsap.set(starsRef.current, {
              opacity: 0,
            });
            gsap.set(highlightRef.current, {
              opacity: 0,
            });
          }
        }
      },

      onEnter() {
        setAnimationSpeed(12);
      },

      onLeave() {
        gsap.set(container, { opacity: 0 });
        setAnimationSpeed(5000);
      },

      onEnterBack() {
        gsap.set(container, { opacity: 1 });
        setAnimationSpeed(12);
      },
    });

    ScrollTrigger.refresh();

    return () => {
      cancelAnimationFrame(raf);
      trigger.kill();
    };
  }, [windowHeight]);

  return (
    <div className='relative left-0'>
      <div className='relative h-[500vh] w-screen'>
        <div ref={pinRef} className='absolute'>
          {/*
          Video of transition
          I am creating a relative that is 2 screens
          in height, then the video is 3 screens but
          absolute. In the highlight section, we will
          also use scrollTrigger and pin. But we need
          the video to transition into the highlight
          video perfectly which it now does.
          */}
          <div ref={starsRef}>
            <HighlightEffect particleAmount={50} scale={1.0}/>
          </div>

            {/*
            The highlight section
            */}

          <div ref={highlightRef} id="highlights" className='absolute size-full z-20 opacity-0 pointer-events-auto'>
              <Highlights chosenCategory={chosenCategory} categorys={categorys}/>
          </div>

          <div ref={containerRef} className='relative h-dvh w-screen overflow-hidden bg-custom-blue-75
          pointer-events-none -z-[1]'>
            <div className="-z-[1] relative top-0 h-screen w-full">

              <div className='-z-[1] absolute size-full bg-gradient-to-b from-black via-blue-800 to-blue-300'
              style={{
                opacity:bgOpacity
              }}>
              </div>

              <img
              src={terrainFrame == targetFrame ? `PortfolioStuff/transitionBG/BGTransition_${String(transitionFrame).padStart(4, "0")}.webp` 
              : `PortfolioStuff/transitionBG/HighlightsBGIdle_${String(terrainFrame).padStart(4, "0")}.webp`}
              className="absolute top-0 h-screen w-screen -z-[1]"
              style={{imageRendering: "pixelated",
                scale: bgScale,
              }}> 
              </img>

              {/*
                Decorations
              */}
            </div>
            <img className='-z-[1] absolute bottom-[15%] md:bottom-[8%] lg:bottom-[3%] w-screen'
                  src={isTransitioning ? transitionSource : idleFrames[frame]}
                  style={{imageRendering: "pixelated",}}>
            </img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingTransition
