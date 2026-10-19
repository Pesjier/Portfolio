import React, { useState, useEffect, useRef } from 'react'
import MediaCrossfade from '../ReusableComponents/MediaCrossfade';
import gsap from 'gsap';
import HighlightEffect from '../ReusableComponents/HighlightEffect';
import FakeLighting from '../ReusableComponents/FakeLighting';
import CategoryBar from '../ReusableComponents/CategoryBar';
import RevealEffect from '../ReusableComponents/RevealEffect';
import { SiGodotengine, SiSteamworks } from 'react-icons/si';
import { BsSteam } from 'react-icons/bs';
import BarchOrigins from "../Projects/BarchOrigins"
import TonkaTD from "../Projects/TonkaTD"
import MagicSurvivor from "../Projects/MagicSurvivor"
import Popup from '../ReusableComponents/Popup';
import TechArtHighlight from '../Projects/TechArtHighlight';
import ToolsHighlight from '../Projects/ToolsHighlight';
import GameplayHighlight from '../Projects/GameplayHighlight';

import { techArtMedia, toolsMedia, gameplayMedia, wizardMedia, tonkaMedia, barchMedia } from '../ReusableComponents/MediaLists';

const HighlightOrbsData = [
  {
    Media:tonkaMedia,
    Name:"Tonka TD",
    Category:0,
    CategoryOrders: [1,0,3],
    CategoryValues: [0.82, 0.75, 0.71],
  },
    {
    Media:wizardMedia,
    Name:"Magic Survivor",
    Category:0,    
    CategoryOrders: [0,3,2],
    CategoryValues: [0.76, 0.72, 0.55],
  },
    {
    Media:gameplayMedia,
    Name:"Gameplay Overview",
    Category:1,
    CategoryOrders: [0,3,1],
    CategoryValues: [0.95, 0.2, 0.1],
  },
    {
    Media:barchMedia,
    Name:"Barch Origins",
    Category:3,
    CategoryOrders: [3,0,1],
    CategoryValues: [0.65, 0.63, 0.39],
  },
    {
    Media:toolsMedia,
    Name:"Tools Overview",
    Category:1,
    CategoryOrders: [1,2,3],
    CategoryValues: [0.94, 0.36, 0.27],
  },
      {
    Media:techArtMedia,
    Name:"Tech Art Overview",
    Category:2,
    CategoryOrders: [2,0,1],
    CategoryValues: [0.96, 0.25, 0.15],
  }
]

const HighlightOrb = ({
  angle,
  mymedia,
  selected,
  index,
  categoryChosen,
  onStartHover,
  onStopHover,
  onClicked,
}) => {
  const orbRef = useRef(null);
  const fadeRef = useRef(null);
  const contentRef = useRef(null);

  const radians = angle * (Math.PI / 180);

  const radius = 50;

  const x = Math.cos(radians) * radius;
  const y = -Math.sin(radians) * radius;

  const [hovered, setHovered] = useState(false);
  
  const revealRef = useRef(null);

  const [isShown, setIsShown] = useState(false);

  useEffect(() => {

    if(selected && !isShown)
    {
      setIsShown(true);
      revealRef.current.show();
    }
    else if(!selected && isShown)
    {
      setIsShown(false);
      revealRef.current.hide();
    }

    if(selected || hovered)
    {
      gsap.to(orbRef.current, {
            scale: 1.2,
            duration: 0.1,
            ease: "power2.inOut",
          });

          gsap.to(fadeRef.current, {
            opacity: 0,
            duration: 0.1,
            ease: "power2.inOut",
          });
    }
    else
    {
      gsap.to(orbRef.current, {
            scale: 1,
            duration: 0.1,
            ease: "power2.inOut",
          });

          gsap.to(fadeRef.current, {
            opacity: 0.35,
            duration: 0.1,
            ease: "power2.inOut",
          });
    }

  }, [selected, hovered])

  const handlePointer = (event) => {
  const allImages = event.currentTarget.querySelectorAll("img");

  const elements = document.elementsFromPoint(
    event.clientX,
    event.clientY
  );

  const hoveredImages = new Set(
    elements.filter((element) => element.tagName === "IMG")
  );

  allImages.forEach((img) => {
    if(!gsap.isTweening(img))
    {
      if(hoveredImages.has(img))
      {
        if(gsap.getProperty(img, "scale") < 1.01)
        {
          gsap.to(img, {
          scale: 1.25,
          duration: 0.5,
          ease: "elastic.out(1,0.5)",
          });
        }
      }
      else
      {
        if(gsap.getProperty(img, "scale") > 1.24)
        {
          gsap.to(img, {
          scale: 1.0,
          duration: 0.25,
          });
        }
      }
    }
  });
};


  return (
    <div
      className="absolute h-[25%] aspect-square z-50"
      style={{
        left: `${50 + x}%`,
        top: `${50 + y}%`,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div
        ref={orbRef}
        className="relative size-full rounded-full bg-PrimaryAccent-50 outline outline-Borders-50 overflow-visible"
        onMouseEnter={() => {
          onStartHover();

          setHovered(true);
        }}
        onMouseLeave={() => {
          onStopHover();
          setHovered(false);
        }}
        onClick={() => {
          onClicked();
        }}
      >
        <div className="absolute inset-0 rounded-full overflow-hidden">
          <div
            ref={contentRef}
            className="absolute inset-0 pointer-events-none"
          >
            <MediaCrossfade media={mymedia} />

            <div
              ref={fadeRef}
              className="size-full bg-black opacity-35"
            />
          </div>
        </div>

        {categoryChosen && (
          <>
            <FakeLighting
              lightExtension={5}
              amount={4}
              color="rgb(230,200,106)"
              opacity={0.1}
              rounded={true}
              className="overflow-visible -z-[1]"
            />

            <div className="absolute size-full scale-125 overflow-visible">
              <HighlightEffect particleAmount={50} />
            </div>
          </>
        )}

        <div className='-z-10'>
          {index == 0 &&
          <RevealEffect ref={revealRef}
          childEffects={[
            {
            shown:{
              y:"-15%",
              x:"225%",
              scale:1,
              rotate:25,
              duration: 2,
              ease:'elastic.out(1,0.5)',
            },
            hidden:{
              y:0,
              x:0,
              scale:0,
              rotate:0,
              duration: 0.5,
              ease:'power2.out'
            }
          },
          {
            shown:{
              y:"15%",
              x:"-65%",
              scale:1,
              rotate:5,
              duration: 2,
              ease:'elastic.out(1,0.5)',
            },
            hidden:{
              y:0,
              x:0,
              scale:0,
              rotate:0,
              duration: 0.5,
              ease:'power2.out'
            }
          },
          {
            shown:{
              y:"35%",
              x:"185%",
              scale:1,
              rotate:25,
              duration: 2,
              ease:'elastic.out(1,1)',
            },
            hidden:{
              y:0,
              x:0,
              scale:0,
              rotate:0,
              duration: 0.5,
              ease:'power2.out'
            }
          },
          {
            shown:{
              y:"35%",
              x:"505%",
              scale:1,
              rotate:125,
              duration: 2,
              ease:'elastic.out(1,1)',
            },
            hidden:{
              y:0,
              x:0,
              scale:0,
              rotate:0,
              duration: 0.5,
              ease:'power2.out'
            }
          },
          {
            shown:{
              y:"75%",
              x:"565%",
              scale:1,
              rotate:-15,
              duration: 2,
              ease:'elastic.out(1,1)',
            },
            hidden:{
              y:0,
              x:0,
              scale:0,
              rotate:0,
              duration: 0.5,
              ease:'power2.out'
            }
          },
          {
            shown:{
              y:"-35%",
              x:"-30%",
              scale:1,
              rotate:-15,
              duration: 2,
              ease:'elastic.out(1,0.3)',
            },
            hidden:{
              y:0,
              x:0,
              scale:0,
              rotate:0,
              duration: 0.5,
              ease:'power2.out'
            }
          },
          {
            shown:{
              y:"180%",
              x:"-55%",
              scale:1,
              rotate:-25,
              duration: 2,
              ease:'elastic.out(1,0.4)',
            },
            hidden:{
              y:0,
              x:0,
              scale:0,
              rotate:0,
              duration: 0.5,
              ease:'power2.out'
            }
          },
          {
            shown:{
              y:"95%",
              x:"150%",
              scale:1,
              rotate:35,
              duration: 2,
              ease:'elastic.out(1,0.6)',
            },
            hidden:{
              y:0,
              x:0,
              scale:0,
              rotate:0,
              duration: 0.5,
              ease:'power2.out'
            }
          },
          ]} className="-z-10" onMouseFirst={(e) => {
            handlePointer(e);
          }}>
            <img src="PortfolioStuff/img/HighlightReveals/TonkaBlob.png"
            className="absolute -z-10 w-1/3 select-none">
            </img>
            <img src="PortfolioStuff/img/HighlightReveals/TonkaBubble.png"
            className="absolute -z-10 w-1/2 select-none">
            </img>
            <img src="PortfolioStuff/img/HighlightReveals/TonkaGrill.png"
            className="absolute -z-10 w-1/2 select-none">
            </img>
            <img src="PortfolioStuff/img/HighlightReveals/TonkaBurger.png"
            className="absolute -z-10 w-1/4 select-none">
            </img>
            <img src="PortfolioStuff/img/HighlightReveals/TonkaSkewer.png"
            className="absolute -z-10 w-1/4 select-none">
            </img>
            <img src="PortfolioStuff/img/HighlightReveals/TonkaGunner.png"
            className="absolute -z-10 w-1/2 select-none">
            </img>
            <img src="PortfolioStuff/img/HighlightReveals/TonkaMagic.png"
            className="absolute -z-10 w-1/3 select-none">
            </img>
            <img src="PortfolioStuff/img/HighlightReveals/TonkaPelter.png"
            className="absolute -z-10 w-1/2 select-none">
            </img>
          </RevealEffect>}
        {index == 1 &&
          <RevealEffect ref={revealRef}
          childEffects={[
            {
            shown:{
              y:"-15%",
              x:"140%",
              scale:1,
              rotate:25,
              duration: 2,
              ease:'elastic.out(1,0.6)',
            },
            hidden:{
              y:0,
              x:0,
              scale:0,
              rotate:0,
              duration: 0.5,
              ease:'power2.out'
            }
          },
          {
            shown:{
              y:"-35%",
              x:"-45%",
              scale:1,
              rotate:20,
              duration: 2,
              ease:'elastic.out(0.8,0.3)',
            },
            hidden:{
              y:0,
              x:0,
              scale:0,
              rotate:0,
              duration: 0.5,
              ease:'power2.out'
            }
          },
          {
            shown:{
              y:"80%",
              x:"175%",
              scale:1,
              rotate:25,
              duration: 2,
              ease:'elastic.out(1,0.3)',
            },
            hidden:{
              y:"55%",
              x:"100%",
              scale:0,
              rotate:0,
              duration: 0.5,
              ease:'power2.out'
            }
          },
          {
            shown:{
              y:"75%",
              x:"-65%",
              scale:1,
              rotate:0,
              duration: 2,
              ease:'elastic.out(0.9,0.3)',
            },
            hidden:{
              y:"75%",
              x:0,
              scale:0,
              rotate:0,
              duration: 0.5,
              ease:'power2.out'
            }
          },
          {
            shown:{
              y:"10%",
              x:"275%",
              scale:1,
              rotate:25,
              duration: 2,
              ease:'elastic.out(0.8,0.3)',
            },
            hidden:{
              y:0,
              x:"100%",
              scale:0,
              rotate:0,
              duration: 0.5,
              ease:'power2.out'
            }
          },
          {
            shown:{
              y:"185%",
              x:"-45%",
              scale:1,
              rotate:-25,
              duration: 2,
              ease:'elastic.out(1,0.3)',
            },
            hidden:{
              y:"150%",
              x:0,
              scale:0,
              rotate:0,
              duration: 0.5,
              ease:'power2.out'
            }
          },
          ]} className="-z-10" onMouseFirst={(e) => {
            handlePointer(e);
          }}>
            <img src="PortfolioStuff/img/HighlightReveals/MagicDoor.png"
            className="absolute -z-10 w-1/2 select-none"
            style={{imageRendering: "pixelated",
              }}>
            </img>
            <img src="PortfolioStuff/img/HighlightReveals/MagicElements.png"
            className="absolute -z-10 w-full select-none"
            style={{imageRendering: "pixelated",
              }}>
            </img>
            <img src="PortfolioStuff/img/HighlightReveals/MagicPiano.png"
            className="absolute -z-10 w-1/2 select-none"
            style={{imageRendering: "pixelated",
              }}>
            </img>
            <img src="PortfolioStuff/img/HighlightReveals/MagicSkeleton.png"
            className="absolute -z-10 w-1/3 select-none"
            style={{imageRendering: "pixelated",
              }}>
            </img>
            <img src="PortfolioStuff/img/HighlightReveals/MagicStaff.png"
            className="absolute -z-10 w-1/3 select-none"
            style={{imageRendering: "pixelated",
              }}>
            </img>
            <img src="PortfolioStuff/img/HighlightReveals/MagicWizard.png"
            className="absolute -z-10 w-1/3 select-none"
            style={{imageRendering: "pixelated",
              }}>
            </img>
            
          </RevealEffect>}
        {index == 2 &&
          <RevealEffect ref={revealRef}
          childEffects={[
            {
            shown:{
              y:"-55%",
              x:"65%",
              scale:1,
              rotate:30,
              duration: 2,
              ease:'elastic.out(1,0.3)',
            },
            hidden:{
              y:0,
              x:0,
              scale:0,
              rotate:0,
              duration: 0.5,
              ease:'power2.out'
            }
          },
                      {
            shown:{
              y:"75%",
              x:"-65%",
              scale:1,
              rotate:-15,
              duration: 2,
              ease:'elastic.out(1,0.3)',
            },
            hidden:{
              y:"75%",
              x:0,
              scale:0,
              rotate:0,
              duration: 0.5,
              ease:'power2.out'
            }
          },
                      {
            shown:{
              y:"95%",
              x:"225%",
              scale:1,
              rotate:25,
              duration: 2,
              ease:'elastic.out(1,0.3)',
            },
            hidden:{
              y:0,
              x:0,
              scale:0,
              rotate:0,
              duration: 0.5,
              ease:'power2.out'
            }
          },
                      {
            shown:{
              y:"-35%",
              x:"-35%",
              scale:1,
              rotate:0,
              duration: 2,
              ease:'elastic.out(1,0.3)',
            },
            hidden:{
              y:0,
              x:0,
              scale:0,
              rotate:0,
              duration: 0.5,
              ease:'power2.out'
            }
          },
          ]} className="-z-10" onMouseFirst={(e) => {
            handlePointer(e);
          }}>
            {/* 
            Add icon of godot : )
            Maybe some steamworks or something
            */}
            <img src="PortfolioStuff/img/HighlightReveals/SlopOverview.png"
            className="absolute -z-10 w-[80%] select-none outline rounded-lg outline-Borders-50">
            </img>
            <img src="PortfolioStuff/img/HighlightReveals/SlopGnome.png"
            className="absolute -z-10 w-[80%] select-none outline rounded-lg outline-Borders-50">
            </img>
            <SiGodotengine size={["8vh"]} color='rgb(59,125,220)' className='absolute -z-10 select-none'>

            </SiGodotengine>
            <BsSteam size={["8vh"]} color='rgb(45,45,45)' className='absolute -z-10 select-none'>

            </BsSteam>
          </RevealEffect>}
        {index == 3 &&
          <RevealEffect ref={revealRef}
          childEffects={[
            {
            shown:{
              y:"-30%",
              x:"145%",
              scale:1,
              rotate:45,
              duration: 2,
              ease:'elastic.out(1,0.6)',
            },
            hidden:{
              y:0,
              x:0,
              scale:0,
              rotate:0,
              duration: 0.5,
              ease:'power2.out'
            }
          },
          {
            shown:{
              y:"5%",
              x:"115%",
              scale:1,
              rotate:5,
              duration: 2,
              ease:'elastic.out(1,0.3)',
            },
            hidden:{
              y:0,
              x:0,
              scale:0,
              rotate:0,
              duration: 0.5,
              ease:'power2.out'
            }
          },
          {
            shown:{
              y:"95%",
              x:"365%",
              scale:1,
              rotate:15,
              duration: 2,
              ease:'elastic.out(0.7,0.3)',
            },
            hidden:{
              y:0,
              x:0,
              scale:0,
              rotate:0,
              duration: 0.5,
              ease:'power2.out'
            }
          },
          {
            shown:{
              y:"80%",
              x:"-40%",
              scale:1,
              rotate:-45,
              duration: 2,
              ease:'elastic.out(1,0.3)',
            },
            hidden:{
              y:0,
              x:0,
              scale:0,
              rotate:0,
              duration: 0.5,
              ease:'power2.out'
            }
          },
          {
            shown:{
              y:"-65%",
              x:"30%",
              scale:1,
              rotate:0,
              duration: 2,
              ease:'elastic.out(0.6,0.8)',
            },
            hidden:{
              y:0,
              x:0,
              scale:0,
              rotate:0,
              duration: 0.5,
              ease:'power2.out'
            }
          },
          {
            shown:{
              y:"-75%",
              x:"-45%",
              scale:1,
              rotate:-30,
              duration: 2,
              ease:'elastic.out(1,0.3)',
            },
            hidden:{
              y:0,
              x:0,
              scale:0,
              rotate:0,
              duration: 0.5,
              ease:'power2.out'
            }
          },
          {
            shown:{
              y:"-25%",
              x:"-85%",
              scale:1,
              rotate:0,
              duration: 2,
              ease:'elastic.out(0.7,0.4)',
            },
            hidden:{
              y:0,
              x:0,
              scale:0,
              rotate:0,
              duration: 0.5,
              ease:'power2.out'
            }
          },
          {
            shown:{
              y:"-115%",
              x:"205%",
              scale:1,
              rotate:-15,
              duration: 2,
              ease:'elastic.out(1,0.3)',
            },
            hidden:{
              y:"50%",
              x:0,
              scale:0,
              rotate:0,
              duration: 0.5,
              ease:'power2.out'
            }
          },
          {
            shown:{
              y:"65%",
              x:"-75%",
              scale:1,
              rotate:-15,
              duration: 2,
              ease:'elastic.out(1,0.3)',
            },
            hidden:{
              y:0,
              x:0,
              scale:0,
              rotate:0,
              duration: 0.5,
              ease:'power2.out'
            }
          },
          {
            shown:{
              y:"-15%",
              x:"-45%",
              scale:1,
              rotate:-15,
              duration: 2,
              ease:'elastic.out(1,0.3)',
            },
            hidden:{
              y:0,
              x:0,
              scale:0,
              rotate:0,
              duration: 0.5,
              ease:'power2.out'
            }
          },
          {
            shown:{
              y:"15%",
              x:"-95%",
              scale:1,
              rotate:0,
              duration: 2,
              ease:'elastic.out(0.7,0.3)',
            },
            hidden:{
              y:0,
              x:0,
              scale:0,
              rotate:0,
              duration: 0.5,
              ease:'power2.out'
            }
          },
          ]} className="-z-10" onMouseFirst={(e) => {
            handlePointer(e);
          }}>
            <img src="PortfolioStuff/img/HighlightReveals/BarchBall.png"
            className="absolute -z-10 w-1/2 select-none">
            </img>
            <img src="PortfolioStuff/img/HighlightReveals/BarchChicken.png"
            className="absolute -z-10 w-[70%] select-none">
            </img>
            <img src="PortfolioStuff/img/HighlightReveals/BarchCultist.png"
            className="absolute -z-10 w-1/4 select-none"
            style={{imageRendering: "pixelated",
              }}>
            </img>
            <img src="PortfolioStuff/img/HighlightReveals/BarchFNAF.png"
            className="absolute -z-10 w-[70%] select-none">
            </img>
            <img src="PortfolioStuff/img/HighlightReveals/BarchGeese.png"
            className="absolute -z-10 w-[70%] select-none">
            </img>
            <img src="PortfolioStuff/img/HighlightReveals/BarchKermit.png"
            className="absolute -z-10 w-[70%] select-none">
            </img>
            <img src="PortfolioStuff/img/HighlightReveals/BarchLink.png"
            className="absolute -z-10 w-[70%] select-none">
            </img>
            <img src="PortfolioStuff/img/HighlightReveals/BarchPalla.png"
            className="absolute -z-10 w-[50%] select-none">
            </img>
            <img src="PortfolioStuff/img/HighlightReveals/BarchPlayer.png"
            className="absolute -z-10 w-1/4 select-none"
            style={{imageRendering: "pixelated",
              }}>
            </img>
            <img src="PortfolioStuff/img/HighlightReveals/BarchSangheili.png"
            className="absolute -z-10 w-[70%] select-none">
            </img>
            <img src="PortfolioStuff/img/HighlightReveals/BarchSquid.png"
            className="absolute -z-10 w-[70%] select-none">
            </img>
          </RevealEffect>}
        {index == 4 &&
          <RevealEffect ref={revealRef}
          childEffects={[
          {
            shown:{
              y:"-95%",
              x:"-85%",
              scale:1,
              rotate:0,
              duration: 2,
              ease:'elastic.out(1,0.3)',
            },
            hidden:{
              y:0,
              x:0,
              scale:0,
              rotate:0,
              duration: 0.5,
              ease:'power2.out'
            }
          },
          
          {
            shown:{
              y:"-75%",
              x:"5%",
              scale:1,
              rotate:0,
              duration: 2,
              ease:'elastic.out(1,0.3)',
            },
            hidden:{
              y:0,
              x:0,
              scale:0,
              rotate:0,
              duration: 0.5,
              ease:'power2.out'
            }
          },
          {
            shown:{
              y:"-35%",
              x:"105%",
              scale:1,
              rotate:25,
              duration: 2,
              ease:'elastic.out(1,0.3)',
            },
            hidden:{
              y:0,
              x:0,
              scale:0,
              rotate:0,
              duration: 0.5,
              ease:'power2.out'
            }
          },
          {
            shown:{
              y:"235%",
              x:"25%",
              scale:1,
              rotate:0,
              duration: 2,
              ease:'elastic.out(1,0.3)',
            },
            hidden:{
              y:0,
              x:0,
              scale:0,
              rotate:0,
              duration: 0.5,
              ease:'power2.out'
            }
          },
          {
            shown:{
              y:"55%",
              x:"275%",
              scale:1,
              rotate:0,
              duration: 2,
              ease:'elastic.out(1,0.3)',
            },
            hidden:{
              y:0,
              x:0,
              scale:0,
              rotate:0,
              duration: 0.5,
              ease:'power2.out'
            }
          },
          {
            shown:{
              y:"0%",
              x:"-75%",
              scale:1,
              rotate:-15,
              duration: 2,
              ease:'elastic.out(1,0.3)',
            },
            hidden:{
              y:0,
              x:0,
              scale:0,
              rotate:0,
              duration: 0.5,
              ease:'power2.out'
            }
          },
          {
            shown:{
              y:"60%",
              x:"-50%",
              scale:1,
              rotate:-25,
              duration: 2,
              ease:'elastic.out(1,0.3)',
            },
            hidden:{
              y:0,
              x:0,
              scale:0,
              rotate:0,
              duration: 0.5,
              ease:'power2.out'
            }
          },
                    {
            shown:{
              y:"60%",
              x:"100%",
              scale:1,
              rotate:0,
              duration: 2,
              ease:'elastic.out(1,0.3)',
            },
            hidden:{
              y:0,
              x:0,
              scale:0,
              rotate:0,
              duration: 0.5,
              ease:'power2.out'
            }
          },
          ]} className="-z-10" onMouseFirst={(e) => {
            handlePointer(e);
          }}>
            {/* 
            Add icon of eggine
            */}
            <img src="PortfolioStuff/img/HighlightReveals/TGALogo.png"
            className="absolute -z-10 w-[70%] select-none">
            </img>
            <img src="PortfolioStuff/projectThumbnails/gorecoreThumbnail.webp"
            className="absolute -z-10 w-[80%] select-none outline outline-Borders-50 rounded-xl">
            </img>
            <img src="PortfolioStuff/img/HighlightReveals/TGABlomster.png"
            className="absolute -z-10 w-[70%] select-none outline outline-Borders-50 rounded-xl">
            </img>
            <img src="PortfolioStuff/projectThumbnails/driftwoodThumbnail.webp"
            className="absolute -z-10 w-[70%] select-none outline outline-Borders-50 rounded-xl">
            </img>
            <img src="PortfolioStuff/img/HighlightReveals/TGAPic.png"
            className="absolute -z-10 w-[35%] select-none outline outline-Borders-50 rounded-xl">
            </img>
            <img src="PortfolioStuff/img/HighlightReveals/TGARaider1.png"
            className="absolute -z-10 w-[70%] select-none outline outline-Borders-50 rounded-xl">
            </img>
            <img src="PortfolioStuff/icons/eggineIcon.webp"
            className="absolute -z-10 w-[70%] select-none">
            </img>
            <img src="PortfolioStuff/img/HighlightReveals/TGADerpDerp.png"
            className="absolute -z-10 w-[70%] select-none">
            </img>
          </RevealEffect>}
        {index == 5 &&
          <RevealEffect ref={revealRef}
          childEffects={[
            {
            shown:{
              y:"-45%",
              x:"110%",
              scale:1,
              rotate:25,
              duration: 2,
              ease:'elastic.out(1,0.3)',
            },
            hidden:{
              y:0,
              x:0,
              scale:0,
              rotate:0,
              duration: 0.5,
              ease:'power2.out'
            }
          },
                      {
            shown:{
              y:"55%",
              x:"150%",
              scale:1,
              rotate:0,
              duration: 2,
              ease:'elastic.out(1,0.3)',
            },
            hidden:{
              y:0,
              x:0,
              scale:0,
              rotate:0,
              duration: 0.5,
              ease:'power2.out'
            }
          },
                      {
            shown:{
              y:"55%",
              x:"-95%",
              scale:1,
              rotate:0,
              duration: 2,
              ease:'elastic.out(1,0.3)',
            },
            hidden:{
              y:0,
              x:0,
              scale:0,
              rotate:0,
              duration: 0.5,
              ease:'power2.out'
            }
          },
                      {
            shown:{
              y:"-45%",
              x:"-45%",
              scale:1,
              rotate:-15,
              duration: 2,
              ease:'elastic.out(1,0.3)',
            },
            hidden:{
              y:0,
              x:0,
              scale:0,
              rotate:0,
              duration: 0.5,
              ease:'power2.out'
            }
          },
                      {
            shown:{
              y:"185%",
              x:"-45%",
              scale:1,
              rotate:25,
              duration: 2,
              ease:'elastic.out(1,0.3)',
            },
            hidden:{
              y:0,
              x:0,
              scale:0,
              rotate:0,
              duration: 0.5,
              ease:'power2.out'
            }
          },
                      {
            shown:{
              y:"-75%",
              x:"25%",
              scale:1,
              rotate:0,
              duration: 2,
              ease:'elastic.out(1,0.3)',
            },
            hidden:{
              y:0,
              x:0,
              scale:0,
              rotate:0,
              duration: 0.5,
              ease:'power2.out'
            }
          },
          ]} className="-z-10" onMouseFirst={(e) => {
            handlePointer(e);
          }}>
            {/* 
            Add slopgnome för procedural
            */}
            <img src="PortfolioStuff/img/HighlightReveals/ProceduralFacehugger.png"
            className="absolute -z-10 w-[60%]  select-none outline outline-Borders-50 rounded-2xl">
            </img>
            <img src="PortfolioStuff/img/HighlightReveals/ProceduralGamejam.png"
            className="absolute -z-10 w-[60%]  select-none outline outline-Borders-50 rounded-2xl">
            </img>
            <img src="PortfolioStuff/img/HighlightReveals/ProceduralSunset.png"
            className="absolute -z-10 w-[60%]  select-none outline outline-Borders-50 rounded-2xl">
            </img>
            <img src="PortfolioStuff/img/HighlightReveals/ProceduralHedge.png"
            className="absolute -z-10 w-[60%]  select-none outline outline-Borders-50 rounded-2xl">
            </img>
            <img src="PortfolioStuff/img/HighlightReveals/ProceduralWeb.png"
            className="absolute -z-10 w-[60%]  select-none outline outline-Borders-50 rounded-2xl">
            </img>
            <img src="PortfolioStuff/img/HighlightReveals/SlopGnome.png"
            className="absolute -z-10 w-[60%]  select-none outline outline-Borders-50 rounded-2xl">
            </img>
          </RevealEffect>}
        </div>
      </div>
    </div>
  );
};


const PopupContent = [
  <TonkaTD/>,
  <MagicSurvivor/>,
  <GameplayHighlight/>,
  <BarchOrigins/>,
  <ToolsHighlight/>,
  <TechArtHighlight/>,
]


const Highlights = ({chosenCategory, categorys}) => {
  const [sinVal, setSinVal] = useState(0);
  const [rotSpeed, setRotSpeed] = useState(0.25);

  const firstCategory = useRef(null);
  const secondCategory = useRef(null);
  const thirdCategory = useRef(null);

  useEffect(() => {
      const interval = setInterval(() => {
        setSinVal(prev => (prev + rotSpeed) % 360);
      }, 15);
  
      return () => clearInterval(interval);
    }, [rotSpeed]);


  const [selectedHighlight, setSelectedHighlight] = useState(-1);

  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <div className='size-full flex items-center justify-center'>
      <div className='lg:h-[80%] sm:h-[65%] h-[50%] aspect-square relative'>
        {HighlightOrbsData.map((orb, i) => {
          return (
            <HighlightOrb key={i} index={i} mymedia={orb.Media} angle={sinVal + (i * (360 / HighlightOrbsData.length))}
            categoryChosen={orb.Category==chosenCategory && chosenCategory != -1}
            selected={selectedHighlight==i}
            onStartHover={() => {
              if(selectedHighlight == -1)
              {
                setRotSpeed(0.05)
              }
            }}
            onStopHover={() => {
              if(selectedHighlight == -1)
              {
                setRotSpeed(0.25)
              }
            }}
            onClicked={() => {
              if(selectedHighlight == i)
              {
                setSelectedHighlight(-1);
                setRotSpeed(0.05);
              }
              else
              {
                setSelectedHighlight(i);
                setRotSpeed(0);
                firstCategory.current.show(categorys[HighlightOrbsData[i].CategoryOrders[0]].title, 
                  HighlightOrbsData[i].CategoryValues[0], categorys[HighlightOrbsData[i].CategoryOrders[0]].color);
                secondCategory.current.show(categorys[HighlightOrbsData[i].CategoryOrders[1]].title, 
                  HighlightOrbsData[i].CategoryValues[1], categorys[HighlightOrbsData[i].CategoryOrders[1]].color);
                thirdCategory.current.show(categorys[HighlightOrbsData[i].CategoryOrders[2]].title, 
                  HighlightOrbsData[i].CategoryValues[2], categorys[HighlightOrbsData[i].CategoryOrders[2]].color);
              }
            }}>
                
            </HighlightOrb>)
        })}
      </div>
      {selectedHighlight == -1 && 
      <div className='absolute text-center'>
        <h1 className="text-MainText-50 font-adevas lg:text-4xl md:text-xl">
        Highlights
      </h1>
      <h1 className="text-MainText-50 font-adevas lg:text-2xl md:text-base">
        Click orbs to see more!
      </h1>
        </div>}

      {selectedHighlight != -1 && 
      <div className='lg:h-[40%] sm:h-[38%] h-[28%] w-full place-items-center absolute grid grid-cols-1 grid-rows-5 content-center'>
        <div>
          <h className="font-adevas text-MainText-50 lg:text-4xl md:text-2xl text-xl">
            {HighlightOrbsData[selectedHighlight].Name}
          </h>
        </div>
        <CategoryBar ref={firstCategory} title={categorys[HighlightOrbsData[selectedHighlight].CategoryOrders[0]].title} fillPercentage={HighlightOrbsData[selectedHighlight].CategoryValues[0]} 
        icon={categorys[HighlightOrbsData[selectedHighlight].CategoryOrders[0]].icon} color={categorys[HighlightOrbsData[selectedHighlight].CategoryOrders[0]].color} isActive={true}
        className='col-span-1 row-span-1'>

        </CategoryBar>
        <CategoryBar ref={secondCategory} title={categorys[HighlightOrbsData[selectedHighlight].CategoryOrders[1]].title} fillPercentage={HighlightOrbsData[selectedHighlight].CategoryValues[1]} 
        icon={categorys[HighlightOrbsData[selectedHighlight].CategoryOrders[1]].icon} color={categorys[HighlightOrbsData[selectedHighlight].CategoryOrders[1]].color} isActive={true}
        className='col-span-1 row-span-1'>

        </CategoryBar>
        <CategoryBar ref={thirdCategory} title={categorys[HighlightOrbsData[selectedHighlight].CategoryOrders[2]].title} fillPercentage={HighlightOrbsData[selectedHighlight].CategoryValues[2]} 
        icon={categorys[HighlightOrbsData[selectedHighlight].CategoryOrders[2]].icon} color={categorys[HighlightOrbsData[selectedHighlight].CategoryOrders[2]].color} isActive={true}
        className='col-span-1 row-span-1'>

        </CategoryBar>
        <button className='col-span-1 row-span-1 w-fit px-5 rounded-md bg-UIBackground-50
        outline outline-Borders-50 pointer-events-auto hover:scale-125 hover:duration-75'
        onClick={()=>{
            setPopupOpen(true);
          }}>
          <h className="font-pixel lg:text-xl md:text-base text-sm text-SecondaryText-50 pointer-events-none">
            See more!
          </h>
        </button>
      </div>}
      <Popup isOpen={popupOpen} onClose={setPopupOpen}>
          {PopupContent[selectedHighlight]}
      </Popup>
    </div>
  )
}

export default Highlights

