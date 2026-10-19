import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import TiltCard from '../ReusableComponents/TiltCard'
import FakeLighting from '../ReusableComponents/FakeLighting'
import RevealEffect from '../ReusableComponents/RevealEffect'
import { CgArrowDown, CgChevronDoubleDown } from "react-icons/cg";
import MediaCrossfade from "../ReusableComponents/MediaCrossfade";

import { ScrollTrigger } from 'gsap/all';

import {backgroundVids} from "../ReusableComponents/MediaLists"

gsap.registerPlugin(ScrollTrigger)



const Landing = ({animsActive}) => {
  //MAIN CARD BELOW HERE
  const revealRef = useRef(null);
  const resizeRef = useRef(null); //Should just be a div that resizes

  const [revealSize, setRevealSize] = useState({width: 0,height: 0,});

  useEffect(() => {

    if (!resizeRef.current) return;

    const observer = new ResizeObserver((entries) => {
      setRevealSize({
        width: revealRef.current.width(),
        height: revealRef.current.height(),
      });
    });

    observer.observe(resizeRef.current);

    return () => observer.disconnect();
  }, []);

  const revealWidth = () => revealSize.width;
  const revealHeight = () => revealSize.height;


  //SCROLL ARROW BELOW HERE
  const scrollArrowRef = useRef(null);
  const arrowTimeline = useRef();

  const startArrowAnim = () => {    
    gsap.killTweensOf(scrollArrowRef.current);
    arrowTimeline.current?.kill();
    arrowTimeline.current = gsap.timeline({ onComplete: () => {
      gsap.set(scrollArrowRef.current, {
        y:-10,
        opacity:0,
      })
      arrowTimeline.current = gsap.timeline({ repeat:-1});

      arrowTimeline.current.to(scrollArrowRef.current, {
        opacity:1,
        y:10, 
        duration:0.5,
      }).to(scrollArrowRef.current, { //Add second anim
      opacity: 0,
      duration: 0.5,
      }).to({}, {
        duration:0.5,
      })
    } });

    arrowTimeline.current.to(scrollArrowRef.current, {
      opacity: 1,
      y: 10,
      duration: 0.25,
    })
    .to(scrollArrowRef.current, { //Add second anim
      opacity: 0,
      duration: 0.5,
    });
  }

  const stopArrowAnim = () => {
    gsap.killTweensOf(scrollArrowRef.current);
    arrowTimeline.current?.kill();
    gsap.to(scrollArrowRef.current, {
      opacity:1,
      y:0,
      duration:1,
    })
  }

  //SCROLL EFFECT
  const backgroundCircle = useRef(null);
  const backgroundLight = useRef(null);

  useGSAP(() => {
    if(animsActive)
    {
      gsap.set('#video-frame', {
      clipPath: 'circle(15% at 50% 50%)',
      borderRadius: '0 0 40% 10%',
    })
    gsap.set(backgroundCircle.current, {
      clipPath: 'circle(20% at 50% 50%)',
      borderRadius: '0 0 40% 10%',
      opacity:1
    })
    gsap.set(backgroundLight.current, {
      opacity:1
    })

    gsap.from('#video-frame', {
      clipPath: 'circle(75% at 50% 50%)',
      borderRadius: '0 0 0 0',
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '#video-frame',
        start: 'center center',
        end: 'bottom center',
        scrub: true,
      }
    })
    gsap.from(backgroundCircle.current, {
      clipPath: 'circle(75% at 50% 50%)',
      borderRadius: '0 0 0 0',
      ease: 'power1.inOut',
      opacity:0,
      scrollTrigger: {
        trigger: '#video-frame',
        start: 'center center',
        end: 'bottom center',
        scrub: true,
      }
    })
    gsap.from(backgroundLight.current, {
      ease: 'power1.inOut',
      opacity:0,
      scrollTrigger: {
        trigger: '#video-frame',
        start: 'center center',
        end: 'bottom center',
        scrub: true,
      }
    })
    }
    else
    {
      gsap.set('#video-frame', {
      clipPath: 'polygon(50% 8%, 88% 20%, 77% 70%, 51% 61%, 25% 69%, 8% 25%)',
      borderRadius: '0 0 40% 10%',
    })
    gsap.set(backgroundCircle.current, {
      clipPath: 'circle(20% at 50% 50%)',
      borderRadius: '0 0 40% 10%',
      opacity:0
    })
    gsap.set(backgroundLight.current, {
      opacity:0
    })

    gsap.from('#video-frame', {
      clipPath: 'polygon(49% 0%, 100% 0%, 100% 100%, 45% 100%, 0% 100%, 0% 0%)',
      borderRadius: '0 0 0 0',
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '#video-frame',
        start: 'center center',
        end: 'bottom center',
        scrub: true,
      }
    })
    gsap.from(backgroundCircle.current, {
      clipPath: 'circle(75% at 50% 50%)',
      borderRadius: '0 0 0 0',
      ease: 'power1.inOut',
      opacity:0,
      scrollTrigger: {
        trigger: '#video-frame',
        start: 'center center',
        end: 'bottom center',
        scrub: true,
      }
    })
    gsap.from(backgroundLight.current, {
      ease: 'power1.inOut',
      opacity:0,
      scrollTrigger: {
        trigger: '#video-frame',
        start: 'center center',
        end: 'bottom center',
        scrub: true,
      }
    })
    }
  },
  {
    dependencies: [animsActive],
    revertOnUpdate: true,
  })

  return (
    <div className="absolute h-dvh w-screen z-10">
      {//BackgroundVid
      }
      <div ref={backgroundLight} className="top-0 left-0 h-full w-full absolute
      items-center justify-center flex pointer-events-none">
        <div className="relative h-[45%] lg:h-[75%] md:h-[65%] aspect-square">
          <FakeLighting amount={10} opacity={0.05} 
          lightExtension={35} color="rgb(240,245,35)" 
          rounded={true}/>
        </div>
      </div>
      <div ref={backgroundCircle} className="top-0 left-0 
      h-full w-full 
      bg-yellow-400 absolute flex pointer-events-none">
      </div>
      

      <div
        id="video-frame"
        className="relative h-full w-full bg-DarkArea-50 pointer-events-none">
        <MediaCrossfade media={backgroundVids}
        onLoaded={() => {
          setLoaded(backgroundVid.current.currentVideoLoaded());
        }}>

        </MediaCrossfade>

        <div>
        {//Scroll indicator
        }
        <div className="absolute flex items-center justify-center inset-0 w-full h-[50%]
        top-[65%] z-10 pointer-events-auto">
          <div className="w-[10%] max-w-24 h-1/6 bg-slate-800 opacity-65
          rounded-lg flex items-center justify-center"
          onMouseEnter={startArrowAnim} onMouseLeave={stopArrowAnim}>
            <CgChevronDoubleDown ref={scrollArrowRef} className="h-1/2 w-1/2 text-SecondaryText-50"/>
          </div>
        </div>
        </div>
      </div>

      <div className="absolute flex items-center justify-center inset-0 w-full h-[50%]">
        {//Main Card "Jesper Lundkvist - game dev"
        }
        <TiltCard className="relative z-50 h-fit w-fit" 
        onMouseEnter={() => {
            revealRef.current.show();
          }}
        onMouseLeave={() => {
            revealRef.current.hide();
          }}
        mainCard={
          <div ref={resizeRef} className="h-fit w-fit bg-UIBackground-50 px-5 py-2 lg:py-8
          outline outline-Borders-50">
            <h1 className="text-MainText-50 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center
            pointer-events-none font-alfena">
              Jesper Lundkvist
            </h1>

            <h2 className="text-SecondaryText-50 text-xl sm:text-2xl md:text-3xl text-center
            pointer-events-none font-pixel">
              Gameplay • Tools • Tech Art
              <div className="items-center justify-center flex">
                <h3 className="lg:absolute bottom-0 text-SecondaryText-50 text-[14px]
              sm:text-[14px] md:text-[14px] lg:text-[22px] font-pixel cursor-pointer pointer-events-auto"
              onClick={(e) => {window.location.href ='mailto:jespdev@outlook.com';}}>
                jespdev@outlook.com
              </h3>
              </div>
            </h2>
          </div>}>

          {//Effects here
          }
          <FakeLighting amount={5} color="rgb(40,40,80)" 
          opacity={0.5} lightExtension={35} rounded={false}
          className="-z-20">
          </FakeLighting>

          <RevealEffect ref={revealRef}
            childEffects={[{
            shown:{
              y: revealHeight() * -0.6,
              x: revealWidth() * -0.15,
              scale:1,
              rotate:-25,
              duration: 2,
              ease:'elastic.out(0.8,0.3)',
            },
            hidden:{
              y:revealHeight() * 0.2,
              x:0,
              scale:0,
              rotate:0,
              duration: 0.5,
              ease:'power2.out'
            }
            },
            {
            shown:{
              y:revealHeight() * -0.95,
              x:revealWidth() * 0.3,
              scale:1,
              rotate:0,
              duration: 2,
              ease:'elastic.out(1,0.3)',
            },
            hidden:{
              y:0,
              x:revealWidth() * 0.3,
              scale:0,
              rotate:0,
              duration: 0.5,
              ease:'power2.out'
            }
            },{
            shown:{
              y:revealHeight() * -0.75,
              x:revealWidth() * 0.8,
              scale:1,
              rotate:35,
              duration: 2,
              ease:'elastic.out(0.7,0.2)',
            },
            hidden:{
              y:0,
              x:revealWidth() * 0.5,
              scale:0,
              rotate:0,
              duration: 0.5,
              ease:'power2.out'
            }
            },{
            shown:{
              y:revealHeight() * 0.6,
              x:revealWidth() * -0.15,
              scale:1,
              rotate:25,
              duration: 2,
              ease:'elastic.out(1,0.3)',
            },
            hidden:{
              y:0,
              x:revealWidth() * 0.35,
              scale:0,
              rotate:0,
              duration: 0.5,
              ease:'power2.out'
            }
            },{
            shown:{
              y:revealHeight() * 0.85,
              x:revealWidth() * 0.2,
              scale:1,
              rotate:0,
              duration: 2,
              ease:'elastic.out(0.5,0.3)',
            },
            hidden:{
              y:revealHeight() * 0.5,
              x:revealWidth() * 0.2,
              scale:0,
              rotate:0,
              duration: 0.5,
              ease:'power2.out'
            }
            },{
            shown:{
              y:revealHeight() * 0.45,
              x:revealWidth() * 0.65,
              scale:1,
              rotate:-8,
              duration: 2,
              ease:'elastic.out(0.5,0.3)',
            },
            hidden:{
              y:revealHeight() * 0.15,
              x:revealWidth() * 0.45,
              scale:0,
              rotate:5,
              duration: 0.5,
              ease:'power2.out'
            }
            },
          ]}>
            <div className="absolute -z-10 w-1/3">
              <img src="PortfolioStuff/img/LandingReveals/landingReveal-1.jpg"
              className="absolute -z-10 rounded-lg outline outline-Borders-50">
              </img>
            </div>

            <img src="PortfolioStuff/img/LandingReveals/landingReveal-2.jpg"
            className="absolute -z-10 w-1/3 rounded-lg outline outline-Borders-50">
            </img>
            <img src="PortfolioStuff/img/LandingReveals/landingReveal-3.jpg"
            className="absolute -z-10 w-1/3 rounded-lg outline outline-Borders-50">
            </img>
            <img src="PortfolioStuff/img/LandingReveals/landingReveal-4.jpg"
            className="absolute -z-10 w-1/3 rounded-lg outline outline-Borders-50">
            </img>
            <img src="PortfolioStuff/img/LandingReveals/landingReveal-5.webp"
            className="absolute -z-10 w-1/3 rounded-lg outline outline-Borders-50">
            </img>
            <img src="PortfolioStuff/img/LandingReveals/landingReveal-6.jpg"
            className="absolute -z-10 w-1/4 rounded-lg outline outline-Borders-50">
            </img>
          </RevealEffect>
        </TiltCard>
      </div>
    </div>
  );
};

export default Landing;