import React, {useState, useRef, useEffect} from 'react'
import { useWindowScroll } from 'react-use';
import RevealEffect from '../ReusableComponents/RevealEffect';

import gsap from 'gsap';
import FakeLighting from '../ReusableComponents/FakeLighting';

const navItems = ['Highlights', 'About', 'Projects', 'Contact']

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Navbar = ({categorys, setChosenCategory, chosenCategory, setFunModeEnabled, funModeEnabled}) => {

  //Choose category and whatever
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropDown = useRef(null);
  const chosenCategoryLight = useRef(null);

  const chosenCategoryColor = () => {
    if(chosenCategory == -1)
    {
      return "rgb(219,218,235)"
    }
    return categorys[chosenCategory].color;
  }

  const chosenCategoryName = () => {
    if(chosenCategory == -1)
    {
      return "Choose Category!"
    }
    return categorys[chosenCategory].title;
  }

  const handleClickCategory = () => {
    console.log("hmm");

    if(!dropDown.current)
      return;
    if(dropdownOpen)
    {
      dropDown.current.hide();
    }
    else
    {
      dropDown.current.show();
    }
    setDropdownOpen(!dropdownOpen);
  }

  useEffect(() => {
    gsap.to(chosenCategoryLight.current, {
      scale:1.2,
      duration:3,
      repeat:-1,
      yoyo:true,
    })
  }, [])

  //DUCKS
  const quack = useRef(new Audio("PortfolioStuff/sounds/quack.mp3"));

  const leftStaticDuck = useRef(null);
  const rightStaticDuck = useRef(null);
  const leftMovingDuck = useRef(null);
  const rightMovingDuck = useRef(null);

  const handleQuack = () => {
    const audio = quack.current;

    audio.pause();
    audio.currentTime = 0;
    audio.volume = 0.05;
    audio.play();
  };

  const handleDuckEnter = (staticDuck, movingDuck) => {
    gsap.set(staticDuck, {
      opacity:0,
    })
    gsap.set(movingDuck, {
      opacity:1,
    })
    gsap.to(movingDuck, {
      scale:1.2,
      duration:1.5,
    })
  }

  const handleDuckExit = (staticDuck, movingDuck) => {
    gsap.set(staticDuck, {
      opacity:1,
    })
    gsap.killTweensOf(movingDuck);
    gsap.set(movingDuck, {
      opacity:0,
      scale:1
    })
  }

  //BAR VISIBILITY


  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);

  const navContainerRef = useRef(null);

  const {y: currentScrollY } = useWindowScroll();

  useEffect(() => {
    if(!navContainerRef.current)
      return;
    if(currentScrollY === 0)
    {
        setIsNavVisible(true);
    }
    else if(currentScrollY > lastScrollY)
    {
        setIsNavVisible(false);
    }
    else if(currentScrollY < lastScrollY)
    {
        if(currentScrollY < screen.height)
        {
          setIsNavVisible(true);
        }
        else
        {
          setIsNavVisible(true);
        }
    }

    if (currentScrollY < window.innerHeight)
    {
      navContainerRef.current.classList.remove('floating-nav');
    }
    else
    {
      navContainerRef.current.classList.add('floating-nav');
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY])

  useEffect(() => {
      gsap.to(navContainerRef.current, {
          y: isNavVisible ? 0 : -100,
          opacity: isNavVisible ? 1: 0,
          duration: 0.2,
      })
  })

  return (
    <div className='fixed inset-x-0 top-4 z-50 h-12 sm:inset-x-6 flex
    items-center justify-center'>
      <div ref={navContainerRef} className='h-full w-fit
      border-none transition-all duration-700 rounded-lg hidden md:block'>
        {(currentScrollY >= window.innerHeight) && 
        (
          <div className='absolute size-full'>
            <div className='absolute left-0 w-[50px] -scale-x-100 bottom-2'
            onMouseEnter={() => {handleDuckEnter(leftStaticDuck.current, leftMovingDuck.current)}}
            onMouseLeave={() => {handleDuckExit(leftStaticDuck.current, leftMovingDuck.current)}}
            onClick={() => {handleQuack()}}>
              <img ref={leftStaticDuck} src="PortfolioStuff/img/DuckStatic.webp"
              className='absolute'>
              </img>
              <video ref={leftMovingDuck} src="PortfolioStuff/videos/DuckVid.webm" type="video/webm"
              loop autoPlay muted poster='PortfolioStuff/img/DuckStatic.webp'
              className='opacity-0'>
              </video>
            </div>
            <div className='absolute right-0 w-[50px] bottom-2'
            onMouseEnter={() => {handleDuckEnter(rightStaticDuck.current, rightMovingDuck.current)}}
            onMouseLeave={() => {handleDuckExit(rightStaticDuck.current, rightMovingDuck.current)}}
            onClick={() => {handleQuack()}}>
              <img ref={rightStaticDuck} src="PortfolioStuff/img/DuckStatic.webp"
              className='absolute'>
              </img>
              <video ref={rightMovingDuck} src="PortfolioStuff/videos/DuckVid.webm" type="video/webm"
              loop autoPlay muted poster='PortfolioStuff/img/DuckStatic.webp'
              className='opacity-0'>
              </video>
            </div>
          </div>
        )
        }

        {
          //Screen titles
        }
        <div className='flex h-full items-center justify-center px-10 lg:px-20'>
          <div className='hidden md:block'>
            {navItems.map((item, i) => (
            <a key={item}
             href={`#${item.toLowerCase()}`}
             className={`nav-hover-btn ${i==0 ? '' : 'ms-10'}`} onClick={(e) => {
      if (i === 0) {

        const trigger = ScrollTrigger.getById("highlightsTrigger");

        if (!trigger) {
          console.log("highlightsTrigger not found");
          return;
        }
        //Prevents href
        e.preventDefault();

        //Scroll to the actual highlight section of the scroll trigger
        const target = trigger.start + (trigger.end - trigger.start) * 0.75;

        window.scrollTo({
          top: target,
          behavior: "smooth",
        });
      }
      }}>
             {item}
             </a>
              ))}
          </div>
        </div>
      </div>

      {/* {
        //Fun mode toggle
      }
      <div className='absolute size-full hidden md:block -z-10'>
        <div className='absolute right-0 w-1/4 max-w-[225px] h-full justify-center items-center flex'>
          <label className='font-pixel text-xl text-MainText-50 cursor-pointer select-none'>
            <input
              type="checkbox"
              checked={funModeEnabled}
              onChange={(e) => setFunModeEnabled(e.target.checked)} className='cursor-pointer'/>
            Animations & Stuff
          </label>
        </div>
      </div> */}

      {
          //Choose thingy
      }
        {/* <div className='absolute size-full hidden md:block -z-10'>
          <div className='absolute right-0 w-1/4 max-w-[225px] h-full
          justify-center items-center flex'
          onClick={handleClickCategory}>
            <div className='relative size-[15px] left-2
              rounded-full outline outline-Borders-50 z-10'
              style={{
                backgroundColor:chosenCategoryColor(),
              }}>
              <div ref={chosenCategoryLight} className='size-full'>
                <FakeLighting  amount={5} opacity={2} lightExtension={15} rounded={true}
                  color={chosenCategoryColor()}/>
              </div>
            </div>
            <h1 className='relative ms-5 text-MainText-50 text-xs nav-hover-btn z-10'>
              {chosenCategoryName()}
            </h1>

            <RevealEffect ref={dropDown} childEffects={[
            {
              shown:
              {
                y:50,
                scale:1,
                rotate:0,
                duration:2,
                ease:'elastic.out(1,0.3)'
              },
              hidden:
              {
                y:0,
                scale:0,
                rotate:90,
                duration:0.5,
                ease:'power2.in'
              },
            }]}>
            <div className='absolute h-fit w-fit rounded-xl outline 
            outline-Borders-50 bg-UIBackground-50 flex flex-col gap-3'>
              <div key="no-category-option" className="w-full flex-1 flex flex-row"
              onClick={() => {
                setChosenCategory(-1)
              }}>

              <div className='relative size-[15px] left-2 top-2
                rounded-full outline outline-Borders-50'
                style={{
                  backgroundColor:"rgb(219,218,235)",
                }}>
              </div>
                <h1 className='relative ms-5 text-xs nav-hover-btn'>
                  No Preference
                </h1>

              </div>
              {
                categorys.map((category, i) => (
                  <div key={i} className="w-full flex-1 flex flex-row"
                  onClick={() => {
                    setChosenCategory(i)
                }}>

                  <div className='relative size-[15px] left-2 top-2
                    rounded-full outline outline-Borders-50'
                    style={{
                      backgroundColor:category.color,
                    }}>
                  </div>
                    <h1 className='relative ms-5 text-xs nav-hover-btn'>
                      {category.title}
                    </h1>
                  </div>
                ))
              }
              <p className='text-center text-SecondaryText-50 font-pixel text-2xl'>
                Work will be highlighted according to choice!
              </p>
            </div>
          </RevealEffect>
          </div>
        </div> */}
    </div>
  )
}

export default Navbar
