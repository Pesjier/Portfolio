import React, { useRef, useState } from 'react'
import MediaCrossfade from '../ReusableComponents/MediaCrossfade'
import AnimatedTitle from '../ReusableComponents/AnimatedTitle'
import Tooltip from "../ReusableComponents/Tooltip"
import Popup from "../ReusableComponents/Popup"
import GameplayHighlight from "../Projects/GameplayHighlight"
import TechArtHighlight from "../Projects/TechArtHighlight"
import ToolsHighlight from "../Projects/ToolsHighlight"

import HighlightSummary from '../ReusableComponents/HighlightSummary'

import { gameplayMedia, techArtMedia, toolsMedia } from '../ReusableComponents/MediaLists'


const PopupContent = [
  <GameplayHighlight/>,
  <TechArtHighlight/>,
  <ToolsHighlight/>
]

const QuickHighlights = () => {
  const iconsTooltip = useRef(null);
  const [hoveredIconText, setHoveredIconText] = useState("uhh");
  const [popupOpen, setPopupOpen] = useState(false);
  const [contentIndex, setContentIndex] = useState(0);

  return (
    <div id="highlights">
      <div className='w-screen h-[65dvh] bg-DarkArea-50'>
      </div>
      <div className='items-center justify-center flex bg-DarkArea-50'>
        <AnimatedTitle title="Highlights">
        </AnimatedTitle>
      </div>
      <div className='w-screen h-[5dvh] bg-DarkArea-50'>
      </div>
      
      <HighlightSummary categoryIndex={0} tools={[0, 1, 5, 14, 17, 20, 28]}
      strengths={["Quick and iterative worker, perfect for prototyping and exploring new ideas.", "Anticipating future use-cases and designing for expansion.", "Supporting in-game tweaking and easy design iterations.", "Make every part of a system standalone which can be easily reused or tested on their own."]}
      focuses={["Player controllers, movement and mechanics", "Procedurally generated content", "World systems like quests, saving or scripted events etc.", "Would like to work more with networking"]}
      notableProjects={["Tonka TD", "Wizard Survivor", "Barch Origins"]}
      iconsTooltip={iconsTooltip}
      setHoveredIconText={setHoveredIconText}
      onClick={() => {
        setContentIndex(0);
        setPopupOpen(true);
      }}
      preview={<div className='bg-DarkArea-50 size-full overflow-hidden outline outline-Borders-50'><MediaCrossfade media={gameplayMedia} scaling={1.0}></MediaCrossfade></div>}/>

      <HighlightSummary categoryIndex={2} tools={[0, 1, 5, 11, 14, 28, 23]}
      strengths={["Good at spotting where an effect is needed to convey gameplay mechanics, and how it could look.", "Uses a good base in math to break down effects into vectors or UV transformations etc to create effects.", "Good at recreating reference visuals and then tweaking them.", "I have a good understanding of the whole pipeline from model to engine."]}
      focuses={["3D/2D Shader effects", "Procedurally generated animations & visuals", "Attack / Mechanic indicators & impacts", "Looking to improve UI effects aswell."]}
      notableProjects={["Tonka TD", "Surviving The Deep", "Magic Survivor", "Effects Practice"]}
      iconsTooltip={iconsTooltip}
      setHoveredIconText={setHoveredIconText}
      onClick={() => {
        setContentIndex(1);
        setPopupOpen(true);
      }}
      preview={<div className='bg-DarkArea-50 size-full overflow-hidden outline outline-Borders-50'><MediaCrossfade media={techArtMedia} scaling={1.0}></MediaCrossfade></div>}/>

      <HighlightSummary categoryIndex={1} tools={[0, 1, 5, 6, 10, 14, 15, 17, 20]}
      strengths={["A wide area of interest in game dev, allowing me to more easily communicate with other disciplines.", "I design and draw tools first to get early feedback from users and spend less time coding", "Mainly a fast learner and the type of person you can put on implementing anything, and I'll make it happen."]}
      focuses={["Listening to and enabling artists / designers", "Level creation tools", "Visual scripting & Graphs"]}
      notableProjects={["Tonka TD", "Blomstertid", "Train Friendslop"]}
      iconsTooltip={iconsTooltip}
      setHoveredIconText={setHoveredIconText}
      onClick={() => {
        setContentIndex(2);
        setPopupOpen(true);
      }}
      preview={<div className='bg-DarkArea-50 size-full overflow-hidden outline outline-Borders-50'><MediaCrossfade media={toolsMedia} scaling={1.0}></MediaCrossfade></div>}/>

      <Tooltip ref={iconsTooltip}>
        <p className='text-SecondaryText-50 text-xl font-pixel'>
          {hoveredIconText}
        </p>
      </Tooltip>

      <Popup isOpen={popupOpen} onClose={setPopupOpen}>
          {PopupContent[contentIndex]}
      </Popup>
    </div>
  )
}

export default QuickHighlights
