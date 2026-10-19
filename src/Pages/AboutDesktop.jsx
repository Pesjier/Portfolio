import React, {useRef, useState, useEffect, useLayoutEffect, forwardRef} from 'react'

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import WavingFlag from "../ReusableComponents/WavingFlag"
import RevealEffect from '../ReusableComponents/RevealEffect';
import Tooltip from "../ReusableComponents/Tooltip"
import {projects, milestones, toolsAndLanguages, learnings} from "./AboutData"
import FakeLighting from "../ReusableComponents/FakeLighting"

gsap.registerPlugin(ScrollTrigger);

const ProjectFlag = forwardRef(({project}, ref) => 
{
    const tooltip = useRef(null);

    return(
        <div>
            <RevealEffect ref={ref} childEffects={[
        {
            shown:{
                y:-65,
                scale:1,
                rotate:-25,  
                duration:0.5,
                ease:"power2.inOut"
            },
            hidden:{
                y:-25,
                scale:0,
                rotate:-125,
                duration: 1.5,
                ease:"power2.inOut"
            },
        }
    ]
                    
    }>
        <div className='absolute w-[50px] h-[50px] 
        -z-[1] origin-bottom-left'
        style={{
            left:project.distance * timelineWidth,
        }}>
            <div className='absolute w-[7.5px] h-[80px]
            bg-MainText-50 rounded-md'>
            </div>
            <WavingFlag>
                <a href={project.link} target='_blank' rel="noopener noreferrer">
                <div className='absolute w-[45px] h-[25px] 
                bg-UIBackground-50 left-[-80%] rounded-lg outline outline-Borders-50
                hover:scale-125 duration-100 cursor-pointer'
                onMouseEnter={(e) => {
                    tooltip.current.show(e.clientX, e.clientY); handleHover(true);}}
                onMouseMove={(e) => {tooltip.current.move(e.clientX, e.clientY)}}
                onMouseLeave={() => {tooltip.current.hide(); handleHover(false);}}>
                    <img className='size-full'
                    src={project.imgSrc}>
                    </img>
                </div>
                </a>
            </WavingFlag>
        </div>

    </RevealEffect>
        <Tooltip ref={tooltip}>
            <h1 className='text-MainText-50 font-pixel text-xl'>
                {project.type}:<br/>
                {project.title}
            </h1>
        </Tooltip>
    </div>
    )
})


const Milestone = forwardRef(({milestone}, ref) => {
    return(
        <div>
            <RevealEffect ref={ref} childEffects={[
        {
            shown:{
                y:-140,
                xPercent:-50,
                scale:1,
                opacity:1,
                rotate:0,  
                duration:0.5,
                ease:"power2.inOut"
            },
            hidden:{
                y:-100,
                xPercent:-50,
                scale:1,
                opacity:0,
                rotate:0,
                duration: 0.5,
                ease:"power2.inOut"
            },
        }
    ]
                    
    }>
        <div className='absolute w-fit h-fit
        px-2 py-2 rounded-xl outline outline-SecondaryAccent-50
        -z-[0] origin-bottom-left bg-SecondaryText-50'
        style={{
            left:milestone.distance * timelineWidth,
        }}>
            <h1 className='text-UIBackground-50 text-xl font-pixel'>
                {milestone.title}
            </h1>
            <p className='text-UIBackground-50 text-lg font-pixel'>
                {milestone.description}
            </p>
            <FakeLighting amount = {5} opacity={0.03} lightExtension={1} rounded={true} color="rgb(255, 255, 255)"
            className='-z-10'/>
        </div>
    </RevealEffect>
        
        <div className='bg-SecondaryAccent-50
            w-5 h-5 absolute rounded-full items-center
            justify-center flex' 
            style={{
            left:milestone.distance * timelineWidth,
            top:-25,
            }}>
            <p className='absolute text-xs text-SecondaryAccent-50 font-pixeldown'
            style={{
                top:-20,
            }}>
                {milestone.date}
            </p>

        </div>

    </div>
    )
})

const Learning = forwardRef(({learning}, ref) => {
    return(
        <div>
            <RevealEffect ref={ref} childEffects={[
        {
            shown:{
                y:-480,
                xPercent:-50,
                scale:1,
                opacity:1,
                rotate:0,  
                duration:0.5,
                ease:"power2.inOut"
            },
            hidden:{
                y:-440,
                xPercent:-50,
                scale:1,
                opacity:0,
                rotate:0,
                duration: 0.5,
                ease:"power2.inOut"
            },
        }
    ]
                    
    }>
        <div className='absolute w-fit h-fit
        px-2 py-2 rounded-xl outline outline-SecondaryAccent-50
        -z-[0] origin-bottom-left bg-UIBackground-50'
        style={{
            left:learning.distance * timelineWidth,
        }}>        
            {learning.content}
        </div>

    </RevealEffect>
    </div>
    )
})

const timelineWidth = 7500;

const AboutDesktop = () => 
{
    //ToolsNLanguage
    const toolsRefs = useRef({});
    const toolsObjRefs = useRef({});

    const iconsTooltip = useRef(null);
    const [hoveredIconText, setHoveredIconText] = useState("Uhh");

    //Milestones
    const milestoneRefs = useRef({});

    //Learnings
    const learningsRef = useRef({});

    //Flags
    const flagRefs = useRef({});


    //Total projects
    const projectCount = useRef(0);
    const [totalProjects, setTotalProjects] = useState(0);
    const projectText = useRef(null);

    const projectCountPop = (increased) => {
        gsap.killTweensOf(projectText.current);

        if(increased)
        {
            gsap.to(projectText.current, {
                scale:1.5,
                rotate:15,
                color: "rgb(20,220,180)",
                duration:0.25,
                ease:"power2.inOut",
                onComplete:() => {
                    gsap.to(projectText.current, {
                        scale:1.0,
                        rotate:0,
                        color:"rgb(25,25,25)",
                        duration:0.5,
                    })
                }
            })
        }
        else
        {
            gsap.to(projectText.current, {
                scale:0.75,
                rotate:-15,
                color: "rgb(220,25,25)",
                duration:0.25,
                ease:"power2.inOut",
                onComplete:() => {
                    gsap.to(projectText.current, {
                        scale:1.0,
                        rotate:0,
                        color:"rgb(25,25,25)",
                        duration:0.5,
                    })
                }
            })
        }
    }

  //Duck marker
  const staticDuck = useRef(null);
  const movingDuck = useRef(null);

  const quack = useRef(new Audio("PortfolioStuff/sounds/quack.mp3"));
  
    const handleQuack = () => {
      const audio = quack.current;
  
      audio.pause();
      audio.currentTime = 0;
      audio.volume = 0.05;
      audio.play();
    };

  //ScrollStuff
  const containerRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const prevProgress = useRef(0);
  const [progress, setProgress] = useState(0);
  const [progressPixels, setProgressPixels] = useState(0);

  // Track viewport height
  useEffect(() => {
    const onResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  //Create ScrollTrigger whenever duration or viewport height changes
  useLayoutEffect(() => {
    const container = containerRef.current;

    toolsAndLanguages.forEach((toolOrLanguage, i) => {
        if(toolsObjRefs.current[i])
        {
            if (toolsRefs.current[i])
            {
                toolsObjRefs.current[i].classList.remove("hidden");
            }
        }
        else
        {
            toolsRefs.current[i] = false;
        }
    })
    
    if (!container) return;

    let raf;
    let idleTween;

    const trigger = ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: () => `+=${timelineWidth}`,
      pin: true,
      scrub: true,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        const currentDistance = self.progress * timelineWidth;

        const forward = self.progress > prevProgress.current;
        const backward = self.progress < prevProgress.current
        
        idleTween?.kill();

        if(forward)
        {
            gsap.set(staticDuck.current, {
                opacity:0,
                scaleX:1,
            })
            gsap.set(movingDuck.current, {
                opacity:1,
                scaleX:1,
            })
        }
        else if(backward)
        {
            gsap.set(staticDuck.current, {
                opacity:0,
                scaleX:-1,
            })
            gsap.set(movingDuck.current, {
                scaleX:-1,
                opacity:1,
            })
        }

        idleTween = gsap.delayedCall(0.3, () => {
            gsap.set(staticDuck.current, {
                opacity:1,
            })
            gsap.set(movingDuck.current, {
                opacity:0,
            })
        })

        projects.forEach((project, i) => {
            if(forward) //Scrolled forward
            {
                if(self.progress >= project.distance &&
                    prevProgress.current < project.distance
                )
                {
                    //Should show
                    flagRefs.current[i].show();
                    projectCount.current = projectCount.current + 1;
                    projectCountPop(true);
                }
            }
            else if(backward) //Scrolled backwards
            {
                if(self.progress < project.distance &&
                    prevProgress.current >= project.distance
                )
                {   
                    //Should hide
                    flagRefs.current[i].hide();
                    projectCount.current = projectCount.current - 1;
                    projectCountPop(false);
                }
            }
        })
        setTotalProjects(projectCount.current)


        milestones.forEach((milestone, i) => {
            if(forward) //Scrolled forward
            {
                if(self.progress >= milestone.distance &&
                    prevProgress.current < milestone.distance
                )
                {
                    //Should show
                    milestoneRefs.current[i].show();
                }
            }
            else if(backward) //Scrolled backwards
            {
                if(self.progress < milestone.distance &&
                    prevProgress.current >= milestone.distance
                )
                {   
                    //Should hide
                    milestoneRefs.current[i].hide();
                }
            }
        })

        learnings.forEach((learning, i) => {
            if(forward) //Scrolled forward
            {
                if(self.progress >= learning.distance &&
                    prevProgress.current < learning.distance
                )
                {
                    //Should show
                    learningsRef.current[i].show();
                }
            }
            else if(backward) //Scrolled backwards
            {
                if(self.progress < learning.distance &&
                    prevProgress.current >= learning.distance
                )
                {   
                    //Should hide
                    learningsRef.current[i].hide();
                }
            }
        })



        toolsAndLanguages.forEach((toolOrLanguage, i) => {
            if(forward) //Scrolled forward
            {
                if(self.progress >= toolOrLanguage.distance)
                {
                    //Should show
                    if(!toolsRefs.current[i])
                    {
                        toolsObjRefs.current[i].classList.remove("hidden");
                        gsap.fromTo(toolsObjRefs.current[i], 
                        {
                            opacity:0,
                            scale:0.5,
                            rotate:90,
                            hidden:false,
                        },
                        {
                            opacity:1,
                            scale:1.0,
                            hidden:true,
                            rotate:0,
                            duration:0.5,
                            ease:"power2.inOut",    
                        })
                    }
                    toolsRefs.current[i] = true;
                }
            }
            else if(backward) //Scrolled backwards
            {
                if(self.progress < toolOrLanguage.distance)
                {   
                    //Should hide
                    if(toolsRefs.current[i])
                    {
                        gsap.to(toolsObjRefs.current[i], 
                        {
                            opacity:0,
                            scale:0,
                            duration:0.5,
                            ease:"power2.inOut",
                            onComplete: () => {
                                toolsObjRefs.current[i].classList.add("hidden");
                            }
                        })
                    }
                    toolsRefs.current[i] = false;
                }
            }
        })


        prevProgress.current = self.progress
        setProgress(self.progress)
        setProgressPixels(currentDistance);
      },
    });

    ScrollTrigger.refresh();

    return () => {
      cancelAnimationFrame(raf);
      trigger.kill();
    };
  }, []);

  return (
    <div>
        <div id="about" ref={containerRef} className={` 
        h-screen bg-DarkArea-50`}
        style={{ width: `${timelineWidth + windowWidth * 0.4}px` }}>

                {
                    //Project counter
                    //Tools container etc
                    //Stuff that doesnt move
                }
            <div className='absolute rounded-xl bg-SecondaryText-50
            w-[20vw] min-w-[225px] h-fit grid-cols-5 lg:grid-cols-4 grid gap-5 py-2 top-5 left-1 outline
            outline-SecondaryAccent-50'>
                <div className='w-full col-span-full justify-center items-center flex'>
                    <p ref={projectText} className='text-DarkArea-50 font-pixeldown'>
                        Projects: {totalProjects}
                    </p>
                </div>
                
                <div className='w-full col-span-full justify-center items-center flex'>
                    <p className='text-DarkArea-50 text-xl underline font-pixel'>
                        Some of the stuff I worked with:
                    </p>
                </div>

                {toolsAndLanguages.map((toolOrLanguage, i) => {
                    return (<div key={i}
                        ref={el => {
                        toolsObjRefs.current[i] = el;}}
                        className={'hidden w-full flex col-span-1 row-span-1 items-center justify-center'}
                        onMouseEnter={(e) => {
                            iconsTooltip.current.show(e.clientX, e.clientY);
                            setHoveredIconText(toolOrLanguage.title);
                        }}
                        onMouseLeave={() => {
                            iconsTooltip.current.hide();
                        }}
                        onMouseMove={(e) => {
                            iconsTooltip.current.move(e.clientX, e.clientY);
                        }}>
                         
                        <div className='size-full flex items-center justify-center
                        hover:scale-110 duration-100 hover:rotate-12'>
                            {toolOrLanguage.icon}
                        </div>
                    </div>)
                })}
            </div>

            <Tooltip ref={iconsTooltip}>
                <p className='text-SecondaryText-50 text-xl font-pixel'>
                    {hoveredIconText}
                </p>
            </Tooltip>

            <div className={`absolute px-5 h-[40px] bottom-[5px]`}
            style={{ 
                width: `${timelineWidth + windowWidth * 0.4}px`,
                transform: `translateX(${Math.min(0, (-progress * timelineWidth) + windowWidth * 0.5)}px)`
                 }}>

                {
                    //Timeline Flags
                }
                {projects.map((project, i) => {
                    return <ProjectFlag key={i} project={project}
                    ref={el => {
                        flagRefs.current[i] = el;
                    }}/>
                })}

                {
                    //Timeline Reveals
                    //First milestones,
                    //Then 'learnings'
                }
                {milestones.map((milestone, i) => {
                    return <Milestone key={i} milestone={milestone}
                    ref={el => {
                        milestoneRefs.current[i] = el;
                    }}>

                    </Milestone>
                })}

                {learnings.map((learning, i) => {
                    return <Learning key={i} learning={learning}
                    ref={el => {
                        learningsRef.current[i] = el;
                    }}>

                    </Learning>
                })}

                
                {
                    //Timeline BG
                }
                <div className='absolute size-full
                bg-SecondaryText-50 rounded-lg'>
                </div>
            </div>

            {
                //Timeline Marker
            }
            <div className='absolute h-full'
            style={{
                transform:`translateX(${progressPixels > windowWidth*0.5 ? 
                    (progressPixels < (timelineWidth - windowWidth * 0.5) ? windowWidth*0.5 : 
                     Math.min(windowWidth*0.9, -(timelineWidth - progressPixels) + windowWidth)) : 
                    progressPixels}px)`
            }}
            onClick={() => {
                handleQuack();
            }}>
                <div className='absolute w-[50px] h-[50px] bottom-[0px]
                bg-MainText-50 rounded-xl outline outline-SecondaryAccent-50
                items-center justify-center flex'>
                    <img ref={staticDuck} src="PortfolioStuff/img/DuckStatic.webp"
                        className='absolute -top-2'>
                    </img>
                    <video ref={movingDuck} src="PortfolioStuff/videos/DuckVid.webm" type="video/webm"
                        loop autoPlay muted poster='PortfolioStuff/img/DuckStatic.webp' 
                        className='opacity-1 -top-2 absolute'>
                    </video>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutDesktop
