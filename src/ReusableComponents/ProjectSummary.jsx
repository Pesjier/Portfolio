import React from 'react'
import {toolsAndLanguages} from "../Pages/AboutData.jsx"

const ProjectSummary = ({title, titleLink, duration, genre, groupSize, experiences, lessons, tools, preview, className, 
    iconsTooltip, setHoveredIconText}) => {

    
  return (
    <div className={`size-full bg-UIBackground-50 relative ${className}`}>
      <div className='grid grid-cols-2 grid-rows-3 size-full px-5 py-3 gap-4'>
        <div className='col-span-1 row-span-1 '>
            <a href={titleLink} target='_blank' rel="noopener noreferrer"
            className="font-pixel text-MainText-50 text-[clamp(1rem,4vw,1.4rem)] underline">
                {title}
            </a>
            <div className={`hover:scale-110 duration-150 hover:rotate-3 w-fit`}>
                <h className="font-pixel text-SecondaryText-50 text-[clamp(0.6rem,2.5vw,1.1rem)]">
                    Duration: {duration}
                </h>
            </div>
            <div className={`hover:scale-110 duration-150 hover:-rotate-3 w-fit`}>
                <h className="font-pixel text-SecondaryText-50 text-[clamp(0.6rem,2.5vw,1.1rem)]">
                    Group Size: {groupSize}
                </h>
            </div>
            <div className={`hover:scale-110 duration-150 hover:rotate-3 w-fit`}>
                <h className="font-pixel text-SecondaryText-50 text-[clamp(0.6rem,2.5vw,1.1rem)]">
                    Genre: {genre}
                </h>
            </div>
        </div>

        <div className='col-span-1 row-span-2'>
            {preview}
        </div>

        <div className='col-span-1 row-span-1'>
            <h className="font-pixel text-MainText-50 text-[clamp(1rem,4vw,1.4rem)]">
                Experience Gained:
            </h>
            {experiences.map((experience, i) => {
            return (<div className={`hover:scale-110 duration-150 w-fit ${i % 2 == 0 ? 'hover:rotate-3' : 'hover:-rotate-3'}`}>
            <h key={i} className="font-pixel text-SecondaryText-50 text-[clamp(0.6rem,2.5vw,1.1rem)]">
                • {experience}
            </h>
            </div>)
            })}
        </div>

        <div className='col-span-1 row-span-1'>
                        <h className="font-pixel text-MainText-50 text-[clamp(1rem,4vw,1.4rem)]">
                Lessons Learned:
            </h>
            {lessons.map((lesson, i) => {
            return (<div className={`hover:scale-110 duration-150 w-fit ${i % 2 == 0 ? 'hover:rotate-3' : 'hover:-rotate-3'}`}>
            <h key={i} className="font-pixel text-SecondaryText-50 text-[clamp(0.6rem,2.5vw,1.1rem)]">
                • {lesson}
            </h>
            </div>)
            })}
        </div>

        <div className='col-span-1 row-span-1'>
            <div className='items-center justify-center flex'>
                <h className="font-pixel text-MainText-50 text-[clamp(1rem,4vw,1.4rem)]">
                    What I used:
                </h>
            </div>
            <div className='h-[70%] w-full bg-SecondaryText-50 outline outline-Borders-50
            grid grid-rows-2 grid-cols-4 px-2 py-2 items-center'>
                {tools.map((tool, i) => {
                return (<div key={i} className='col-span-1 row-span-1 hover:scale-110 duration-100 hover:rotate-12 size-fit'
                        onMouseEnter={(e) => {
                            iconsTooltip.current.show(e.clientX, e.clientY);
                            setHoveredIconText(toolsAndLanguages[tool].title);
                        }}
                        onMouseLeave={() => {
                            iconsTooltip.current.hide();
                        }}
                        onMouseMove={(e) => {
                            iconsTooltip.current.move(e.clientX, e.clientY);
                        }}>
                        {toolsAndLanguages[tool].icon}
                    </div>)
                })}
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectSummary
