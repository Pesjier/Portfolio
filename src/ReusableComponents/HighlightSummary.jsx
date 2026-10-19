import React from 'react'
import {toolsAndLanguages} from "../Pages/AboutData.jsx"
import CategoryBar from './CategoryBar.jsx'
import { categories } from './CategoriesData.jsx'

const HighlightSummary = ({categoryIndex, tools, strengths, focuses, notableProjects, iconsTooltip, preview, 
  setHoveredIconText, onClick}) => {
  return (
    <div className='w-screen h-fit bg-DarkArea-50'>
        <div className='h-fit w-full'>
          <div className='items-center justify-center flex py-5'>
            <CategoryBar title={categories[categoryIndex].title} fillPercentage={1.0} icon={categories[categoryIndex].icon} 
            color={categories[categoryIndex].color} isActive={true} className="scale-[150%]"/>
          </div>
          {/* Funny content square */}
          <div className='items-center justify-center flex py-8 px-8'>
            <div className='w-full h-fit bg-UIBackground-50 outline outline-Borders-50 rounded-lg'>
              <div className='size-full grid lg:grid-cols-3 grid-cols-2 grid-rows-5 gap-5 px-3 py-4'>

                <div className='col-span-1 row-span-2 text-center'>
                    <h1 className='font-pixel text-MainText-50 text-[clamp(1rem,5vw,1.7rem)]'>
                      Notable Projects:
                    </h1>
                    {notableProjects.map((project, i) => {
                        return (
                        <div className={`hover:scale-110 duration-150 ${i % 2 == 0 ? 'hover:rotate-3' : 'hover:-rotate-3'}`}>
                          <a key={i} href={`#${project.toLowerCase()}`} target='_blank' rel="noopener noreferrer">
                          <h className="font-pixel text-SecondaryText-50 text-[clamp(0.6rem,3vw,1.35rem)]">
                          • {project}<br></br>
                          </h></a>
                        </div>)
                    })}
                </div>

                <div className='col-span-1 lg:row-span-3 row-span-4'>
                  {preview}
                </div>

                <div className='col-span-1 row-span-2'>
                  <div className='items-center justify-center flex'>
                    <h className="font-pixel text-MainText-50 text-[clamp(1rem,5vw,1.7rem)]">
                      What I've used:
                    </h>
                  </div>
                  <div className='items-center justify-center flex size-full'>
                    <div className='h-[70%] w-[90%] bg-SecondaryText-50 outline outline-Borders-50
                        grid grid-rows-2 grid-cols-3 lg:grid-cols-4 px-2 py-2 items-center'>
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

                <div className='col-span-1 row-span-1'>
                  <hr/>
                </div>
                <div className='col-span-1 row-span-1'>
                  <hr/>
                </div>

                <div className='order-1 lg:order-1 col-span-1 row-span-2 text-center'>
                    <h1 className='font-pixel text-MainText-50 text-[clamp(1rem,5vw,1.7rem)]'>
                      Strengths:
                    </h1>
                    {strengths.map((strength, i) => {
                        return (<div className={`hover:scale-110 duration-150 ${i % 2 == 0 ? 'hover:rotate-3' : 'hover:-rotate-3'}`}>
                        <h key={i} className="font-pixel text-SecondaryText-50 text-[clamp(0.6rem,3vw,1.35rem)]">
                        • {strength}<br></br>
                        </h>
                        </div>)
                    })}
                </div>

                <div className='order-3 lg:order-2 lg:col-span-1 col-span-2 row-span-1 size-full'>
                  <div className='size-full items-center justify-center flex'>
                    <button className='bg-SecondaryText-50 rounded-lg outline outline-Borders-50 px-4 py-2
                    hover:scale-110 duration-100' onClick={() => {
                      onClick()
                    }}>
                      <h1 className='font-pixel text-DarkArea-50 text-[clamp(1rem,5vw,1.7rem)]'>
                        See details!
                      </h1>
                    </button>
                  </div>
                </div>

                <div className='order-2 lg:order-3 col-span-1 row-span-2 text-center'>
                    <h1 className='font-pixel text-MainText-50 text-[clamp(1rem,5vw,1.7rem)]'>
                      Focus Areas:
                    </h1>
                    {focuses.map((focus, i) => {
                        return (<div className={`hover:scale-110 duration-150 ${i % 2 == 0 ? 'hover:rotate-3' : 'hover:-rotate-3'}`}>
                        <h key={i} className="font-pixel text-SecondaryText-50 text-[clamp(0.6rem,3vw,1.35rem)]">
                        • {focus}<br></br>
                        </h>
                        </div>)
                    })}
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default HighlightSummary
