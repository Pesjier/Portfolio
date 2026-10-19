import React, {useRef, useState} from 'react'


import CategoryBar from '../ReusableComponents/CategoryBar'
import { SiCplusplus, SiUnity } from 'react-icons/si'
import { TbBrandCSharp } from 'react-icons/tb'
import AnimatedTitle from "../ReusableComponents/AnimatedTitle"
import { Experience, Qualities, Skills, toolsAndLanguages } from './AboutData'
import Tooltip from '../ReusableComponents/Tooltip'
import MediaCrossfade from "../ReusableComponents/MediaCrossfade"

//Just do a stable timeline with boxes maybe
//Like scrolling down through the main reveal
//texts and highlight points etc.
//Maybe in the end summarize my project count and
//the languages/tools used etc

const AboutMobile = () => {
  const iconsTooltip = useRef(null);
  const [hoveredIconText, setHoveredIconText] = useState("Uhh");
  return (
    <div id="about" className='w-screen px-5 h-fit bg-DarkArea-50'>

      <div className='bg-DarkArea-50 h-[20dvh]'>

      </div>

      <div className='items-center justify-center flex'>
        <AnimatedTitle title="About"/>
      </div>

      <div className='grid grid-cols-2 h-fit w-full gap-28'>

        {/* Experience */}
        <div className='col-span-1 row-span-1 items-center text-left justify-center flex flex-col gap-5'>
          <Experience/>
        </div>

        {/* Skills */}
        <div className='col-span-1 row-span-1 items-center justify-center flex flex-col gap-5'>
          <Skills/>
        </div>

        {/* Key qualities */}
        <div className='col-span-2 md:col-span-1 row-span-1 items-center justify-center flex flex-col text-left gap-5'>
          <Qualities/>
        </div>

        {/* Tools & shit */}
        <div className='hidden md:block col-span-1 row-span-1'>
          <div className='hidden md:block'>
            <div className='w-[80%] h-fit grid grid-cols-4 bg-SecondaryText-50 outline outline-Borders-50'>
              <div className='w-full col-span-full justify-center items-center flex'>
              <p className='text-DarkArea-50 text-xl underline font-pixel'>
                 Some of the stuff I worked with:
              </p>
          </div>
          
          {toolsAndLanguages.map((toolOrLanguage, i) => {
            return (<div key={i}
              className={'w-full flex col-span-1 row-span-1 items-center justify-center size-fit'}
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
                </div>)})}
            </div>
          </div>  
        </div>

        
      </div>
      <Tooltip ref={iconsTooltip}>
        <p className='text-SecondaryText-50 text-xl font-pixel'>
        {hoveredIconText}
        </p>
      </Tooltip>

      <div className='bg-DarkArea-50 h-[20dvh]'>

      </div>
    </div>
  )
}

export default AboutMobile
