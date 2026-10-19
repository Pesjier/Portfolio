import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, {useState, useEffect, useRef} from 'react'

import { ScrollTrigger } from 'gsap/all';
import { BsLinkedin } from 'react-icons/bs';

gsap.registerPlugin(ScrollTrigger)

const idleFrames = [
  "PortfolioStuff/contactFella/ContactFella1.webp",
  "PortfolioStuff/contactFella/ContactFella2.webp",
  "PortfolioStuff/contactFella/ContactFella3.webp",
  "PortfolioStuff/contactFella/ContactFella4.webp",
  "PortfolioStuff/contactFella/ContactFella5.webp",
  "PortfolioStuff/contactFella/ContactFella6.webp",
  "PortfolioStuff/contactFella/ContactFella7.webp",
  "PortfolioStuff/contactFella/ContactFella8.webp",
  "PortfolioStuff/contactFella/ContactFella9.webp",
  "PortfolioStuff/contactFella/ContactFella10.webp",
  "PortfolioStuff/contactFella/ContactFella11.webp",
  "PortfolioStuff/contactFella/ContactFella12.webp",
  "PortfolioStuff/contactFella/ContactFella13.webp",
  "PortfolioStuff/contactFella/ContactFella14.webp",
  "PortfolioStuff/contactFella/ContactFella15.webp",
  "PortfolioStuff/contactFella/ContactFella16.webp",
  "PortfolioStuff/contactFella/ContactFella17.webp",
  "PortfolioStuff/contactFella/ContactFella18.webp",
];

const Contact = () => {
  const [frame, setFrame] = useState(0);
  const vidFrame = useRef(null);


  useGSAP(() => {
    gsap.set(vidFrame.current, {
      clipPath: 'polygon(15% 100%,8% 80%,12% 55%,20% 30%,35% 12%,50% 5%,68% 10%,82% 28%,91% 52%,88% 78%,80% 100%)',
      borderRadius: '0 0 40% 10%',
    })
    gsap.from(vidFrame.current, {
      clipPath: 'polygon(50% 50%,50% 50%,50% 50%,50% 50%,50% 50%,50% 50%,50% 50%,50% 50%,50% 50%,50% 50%,50% 50%)',
      borderRadius: '0 0 0 0',
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: vidFrame.current,
        start: 'top 50%',
        end: 'bottom 75%',
        scrub: true,
      }
    })
  }
)

  useEffect(() => {
      const interval = setInterval(() => {
        setFrame(prev => (prev + 1) % idleFrames.length);
      }, 180);
  
      return () => clearInterval(interval);
    }, []);

  return (
    <div id="contact" className='w-screen h-screen bg-DarkArea-50 overflow-hidden'>

      <div
        ref={vidFrame}
        className="relative h-full w-full bg-DarkArea-50">

      <div
        ref={vidFrame}
        className="relative h-full w-full bg-DarkArea-100 -z-10">
<div className="pointer-events-none left-1/2 top-1/2 z-10
      h-[45vh] w-[45vw] translate-x-[85%] translate-y-[95%]
      rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_70%)]
      blur-[80px]"/>
        </div>

      

    {/* Text */}
    <div className='absolute size-full top-[15%] items-center justify-center flex'>
      <div className='absolute size-1/2'>
        <h className="text-MainText-50 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-adevas pointer-events-none">
          Thanks for looking around!<br></br>
          Would love to hear from you c:
        </h>
          <h className="text-SecondaryText-50 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-pixel cursor-pointer"
          onClick={(e) => {window.location.href ='mailto:jespdev@outlook.com';}}>
            <br></br><br></br>jespdev@outlook.com
          </h>
        <div className='py-4 size-fit'>
          <a href='https://www.linkedin.com/in/jesper-lundkvist-391819436/'
          target='_blank' rel="noopener noreferrer"
          >
            <BsLinkedin size={32} color="rgb(115, 115, 255)" 
            className='hover:rotate-3 hover:scale-110 duration-150'>

            </BsLinkedin>
          </a>
        </div>
      </div>
    </div>



      <div className='flex items-center justify-center size-full'>
        <img src = {idleFrames[frame]}
          className='w-1/2 lg:w-1/3 bottom-[15%] lg:bottom-0 right-[10%] lg:right-[20%] absolute'
          style={{imageRendering: "pixelated",}}>
        </img>
      </div>
      <div>
        {/* Stalagmites */}
        <div className="absolute bottom-[13%] left-[76%] w-[130px] h-[1000px] bg-UIBackground-50"
        style={{
          clipPath:"polygon(0% 0%, 18% 0%,20% 12%,16% 25%,23% 38%,19% 50%,27% 63%,21% 75%,30% 88%,25% 100%,75% 100%,70% 88%,79% 75%,73% 63%,81% 50%,77% 38%,84% 25%,80% 12%,82% 0%)"
        }}>

        </div>

                <div className="absolute bottom-[0%] lg:bottom-[5%] left-[20%] w-[250px] h-[130px] bg-UIBackground-50"
        style={{
          clipPath:"polygon(0 100%, 11% 54%, 22% 74%, 36% 8%, 54% 73%, 76% 37%, 100% 100%, 65% 100%, 36% 100%)"
        }}>

        </div>

                <div className="absolute bottom-[-10%] lg:bottom-[5%] left-[45%] w-[230px] h-[200px] bg-UIBackground-50"
        style={{
          clipPath:"polygon(0 100%, 11% 54%, 22% 74%, 36% 8%, 54% 73%, 76% 37%, 100% 100%, 65% 100%, 36% 100%)"
        }}>

        </div>

                <div className="absolute bottom-[5%] left-[70%] w-[130px] h-[130px] bg-DarkArea-50"
        style={{
          clipPath:"polygon(16% 51%, 5% 61%, 0 80%, 1% 99%, 33% 100%, 38% 100%, 46% 100%, 57% 100%, 67% 100%, 98% 100%, 100% 64%, 81% 46%, 65% 68%, 54% 46%, 41% 57%, 26% 30%)"
        }}>

        </div>

                <div className="absolute top-[15%] left-[30%] w-[230px] h-[230px] bg-UIBackground-50"
        style={{
          clipPath:"polygon(0% 0%, 10% 78%, 23% 21%, 35% 67%, 50% 11%, 59% 32%, 74% 11%, 77% 55%, 88% 33%, 85% 9%, 93% 0)"
        }}>

        </div>

                <div className="absolute top-[9%] left-[45%] w-[130px] h-[130px] bg-DarkArea-50"
        style={{
          clipPath:"polygon(0 0, 13% 54%, 27% 82%, 28% 99%, 38% 74%, 49% 86%, 67% 35%, 72% 65%, 100% 1%)"
        }}>

        </div>

                <div className="absolute top-[9%] left-[55%] w-[130px] h-[190px] bg-UIBackground-50"
        style={{
          clipPath:"polygon(0% 0%, 10% 78%, 23% 21%, 35% 67%, 50% 11%, 59% 32%, 74% 11%, 77% 55%, 88% 33%, 85% 9%, 93% 0)"
        }}>

        </div>

                <div className="absolute bottom-[7%] left-[12%] lg:left-[18%] w-[80px] h-[800px] bg-DarkArea-50"
        style={{
          clipPath:"polygon(0% 0%,22% 0%,18% 8%,25% 16%,17% 25%,28% 34%,20% 43%,32% 52%,22% 61%,35% 70%,25% 80%,38% 90%,30% 100%,70% 100%,62% 90%,75% 80%,65% 70%,78% 61%,68% 52%,80% 43%,72% 34%,83% 25%,75% 16%,82% 8%,78% 0%)"
        }}>

        </div>

                <div className="absolute top-[20%] left-[70%] w-[130px] h-[130px] bg-UIBackground-50"
        style={{
          clipPath:"polygon(0 0, 13% 54%, 27% 82%, 28% 99%, 38% 74%, 49% 86%, 67% 35%, 72% 65%, 100% 1%)"
        }}>

        </div>
      </div>
    </div>
    </div>
  )
}

export default Contact
