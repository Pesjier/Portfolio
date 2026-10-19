import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react'
import gsap from 'gsap'
import { ScrambleTextPlugin, SplitText, ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrambleTextPlugin);
gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);

const multiplyColor = (rgb, factor) => {
  const [r, g, b] = rgb.match(/\d+/g).map(Number);

  return `rgb(${Math.min(255, r * factor)}, ${Math.min(255, g * factor)}, ${Math.min(255, b * factor)})`;
};

const CategoryBar = forwardRef(({title, fillPercentage, icon, color, isActive, className=""}, ref) => {
    
    useImperativeHandle(ref, () => ({
        show(newTitle, newPercentage, newColor) 
        { 
          animate2(newTitle, newPercentage, newColor);
        }
    }));

    const containerRef = useRef(null);
    const scrambleText = useRef(null);
    const barRef = useRef(null);
    const barBackgroundRef = useRef(null);
    const barBackgroundRef2 = useRef(null);
    const iconRef = useRef(null);

    const bgy = gsap.getProperty(barBackgroundRef2.current, "y");

    const animate2 = (newTitle, newPercentage, newColor) => {
        const masked = "*".repeat(newTitle.length);
        gsap.killTweensOf(scrambleText.current);
        gsap.killTweensOf(barRef.current);
        gsap.killTweensOf(iconRef.current);
        gsap.killTweensOf(barBackgroundRef.current);
        gsap.killTweensOf(barBackgroundRef2.current);

        gsap.set(scrambleText.current, {
            textContent: masked
        });
        const split = SplitText.create(scrambleText.current, {
            type: "chars"
        });

        const initialDuration = 0.3;
        const scrambleDuration = 1.3;

        gsap.to(iconRef.current,{
            opacity:1,
            duration:2
        })

        gsap.to(barBackgroundRef.current, 
            {
            opacity:1,
            y:0,
        });
        gsap.to(barBackgroundRef2.current, {
            opacity:1,
            y:0,
            duration: bgy / 25,
            onComplete: () =>
            {   
                gsap.to(barRef.current, {
                    width:`${newPercentage * 100}%`,
                    duration:1.5,
                    ease:'power2.inOut'
                })
            }            
        });

        gsap.to(barBackgroundRef2.current, {
            backgroundColor: multiplyColor(newColor, 0.2),
            duration:1.5
        })
        gsap.to(barRef.current, {
            backgroundColor: newColor,
            duration:1.5
        })

        gsap.to(scrambleText.current, {
                duration:scrambleDuration,
                scrambleText: {
                    text:newTitle,
                    chars:"lowerCase",
                    revealDelay:0.5,
                    speed:0.6,
                }
                })
    }

    const animate = () => {
        const masked = "*".repeat(title.length);
        gsap.killTweensOf(scrambleText.current);
        gsap.killTweensOf(barRef.current);
        gsap.killTweensOf(iconRef.current);
        gsap.killTweensOf(barBackgroundRef.current);
        gsap.killTweensOf(barBackgroundRef2.current);

        gsap.set(scrambleText.current, {
            textContent: masked
        });
        gsap.set(barRef.current, {
            width: "0.0%"
        });
        const split = SplitText.create(scrambleText.current, {
            type: "chars"
        });

        const initialDuration = 0.3;
        const scrambleDuration = 1.3;

        gsap.fromTo(iconRef.current, {
            opacity:0,
        },{
            opacity:1,
            duration:2
        })

        gsap.to(barBackgroundRef2.current, {
            backgroundColor: multiplyColor(color, 0.2),
            duration:1.5
        })
        gsap.to(barRef.current, {
            backgroundColor: color,
            duration:1.5
        })

        gsap.fromTo(barBackgroundRef.current, {
            opacity:0,
            y:25,
            },
            {
            opacity:1,
            y:0,
            duration: 1.0,
        });
        gsap.fromTo(barBackgroundRef2.current, {
            opacity:0,
            y:25,
            },
            {
            opacity:1,
            y:0,
            duration: 1.0,
            onComplete: () =>
            {   
                gsap.to(barRef.current, {
                    width:`${fillPercentage * 100}%`,
                    duration:1.5,
                    ease:'power2.inOut'
                })
            }            
        });

        gsap.from(split.chars, {
            opacity: 0,
            y:25,
            rotation:180,
            duration: initialDuration,
            stagger: 0.05,
            onComplete: () =>{
                gsap.to(scrambleText.current, {
                duration:scrambleDuration,
                scrambleText: {
                    text:title,
                    chars:"lowerCase",
                    revealDelay:0.5,
                    speed:0.6,
                }
                })
            }
        });
    }

    useEffect(() => {
    //Animate when tab opens
        if (isActive) {
        animate();
        }
    }, [isActive]);

    //Scroll animation
    useEffect(() => 
    {
        const trigger = ScrollTrigger.create({
            trigger: containerRef.current,
            toggleActions: "play none none reset",
            start: "top 100%", //when the element reaches 80% of the viewport
            onEnter: () => {
            animate();
            },
        });
    }, [])

    return (
    <div ref={containerRef} className={className}>
        <div className='flex items-center gap-3'>
            <div ref={iconRef}>
                {icon}
            </div>
            <h1 ref={scrambleText} id="ScrambleText" className='font-pixel text-SecondaryText-50 lg:text-xl md:text-xl text-base'>
                {title}
            </h1>
        </div>
      <div ref={barBackgroundRef} className=" rounded-xl w-32 lg:w-44 md:h-4 h-2
      items-center flex justify-center">
        <div ref={barBackgroundRef2} className="rounded-xl outline outline-Borders-50" 
        style={
            {
                backgroundColor:"rbg(155,155,155)",
                width:"90%",
                height:"90%",
            }}>
            <div ref={barRef} className='rounded-xl'
            style={
            {
                backgroundColor:"rbg(255,255,255)",
                height:"100%",
            }}>

            </div>
        </div>
      </div>
    </div>
  )
})

export default CategoryBar
