import React, { useRef, useState } from 'react'
import ProjectSummary from '../ReusableComponents/ProjectSummary'
import TiltCard from '../ReusableComponents/TiltCard'
import MediaCrossfade from '../ReusableComponents/MediaCrossfade'
import AnimatedTitle from '../ReusableComponents/AnimatedTitle'
import Tooltip from "../ReusableComponents/Tooltip"
import Popup from "../ReusableComponents/Popup"
import { categories } from '../ReusableComponents/CategoriesData'

import BarchOrigins from "../Projects/BarchOrigins"
import Blomstertid from "../Projects/Blomstertid"
import CleanEscape from "../Projects/CleanEscape"
import MagicSurvivor from "../Projects/MagicSurvivor"
import SixteenLines from "../Projects/SixteenLines"
import SurvivingTheDeep from "../Projects/SurvivingTheDeep"
import TonkaTD from "../Projects/TonkaTD"
import TrainFriendslop from "../Projects/TrainFriendslop"
import TAPractice from '../Projects/TAPractice'
import CategoryBar from '../ReusableComponents/CategoryBar'

import {TAProjectMedia, tonkaMedia, slopMedia, surviveMedia, cleanMedia, sixteenMedia, blomsterMedia, barchMedia, wizardMedia} from "../ReusableComponents/MediaLists"

const PopupContent = [
  <TonkaTD/>,
  <Blomstertid/>,
  <BarchOrigins/>,
  <SixteenLines/>,
  <MagicSurvivor/>,
  <TrainFriendslop/>,
  <SurvivingTheDeep/>,
  <CleanEscape/>,
  <TAPractice/>,
]

const QuickOther = () => {
  const iconsTooltip = useRef(null);
  const [hoveredIconText, setHoveredIconText] = useState("uhh");
  const [popupOpen, setPopupOpen] = useState(false);
  const [contentIndex, setContentIndex] = useState(0);

  return (
    <div id="projects">
      <div className='w-screen h-[5dvh] bg-DarkArea-50'>
      </div>
      <div className='items-center justify-center flex bg-DarkArea-50'>
        <AnimatedTitle title="Projects">
        </AnimatedTitle>
      </div>
      <div className='items-center justify-center flex bg-DarkArea-50'>
        <h className="text-MainText-50 font-pixel text-3xl">
            Click projects to see more!
        </h>
      </div>
      

      <div className='w-screen h-fit bg-DarkArea-50'>
        <div className='h-fit w-full grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1
        px-8 py-5 gap-10'>
          <TiltCard mainCard={
            <ProjectSummary title="Tonka TD" duration="7 months spare time (so far)" groupSize="Solo" genre="Tower Defense"
            experiences={["Designing and optimizing systems for mobile performance", "Created tools for designing waves", "Tick system to maintain gameplay across framerates"]}
            lessons={["Don't guess while designing, instead measure and plan", "Rewrite systems instead of adding features over time"]}
            tools={[0, 1, 2, 23, 24]}
            preview={<div id="tonka td" className='bg-DarkArea-50 size-full overflow-hidden outline outline-Borders-50'><MediaCrossfade media={tonkaMedia} scaling={1.0}></MediaCrossfade></div>}
            iconsTooltip={iconsTooltip}
            setHoveredIconText={setHoveredIconText}>

            </ProjectSummary>} className='col-span-1 row-span-1 cursor-pointer'
            onClick={() => {
              setPopupOpen(true);
              setContentIndex(0);
            }}>
          </TiltCard>
          
          <TiltCard mainCard={
            <ProjectSummary title="Blomstertid" duration="9 weeks full time" groupSize="14" genre="3D Platformer"
            experiences={["Graphics Programming", "Engine Tools & Development", "Cross discipline teamwork", "CMake Project"]}
            lessons={["Prioritizing enabling others", "Making quick-fixes will hurt further on", "Define better, more detailed qualities for determining when systems are done."]}
            tools={[5, 6, 8, 10, 11, 13, 14, 15]}
            preview={<div id="blomstertid" className='bg-DarkArea-50 size-full overflow-hidden outline outline-Borders-50'><MediaCrossfade media={blomsterMedia} scaling={1.0}></MediaCrossfade></div>}
            iconsTooltip={iconsTooltip}
            setHoveredIconText={setHoveredIconText}
            titleLink="https://ssugames.itch.io/blomstertid">

            </ProjectSummary>} className='col-span-1 row-span-1 cursor-pointer'
            onClick={() => {
              setPopupOpen(true);
              setContentIndex(1);
            }}>
          
          </TiltCard>

          <TiltCard mainCard={
            <ProjectSummary title="Barch Origins" duration="2 months full time (ish)" groupSize="Solo" genre="Pokémon Adventure"
            experiences={["World / Progression designing", "Saving non-linear game progression", "Gameplay Events", "Improved Audio implementation"]}
            lessons={["Start with reference games, then tweak towards your goal", "Deliver and iterate instead of planning forever"]}
            tools={[0, 1, 18]}
            preview={<div id="barch origins" className='bg-DarkArea-50 size-full overflow-hidden outline outline-Borders-50'><MediaCrossfade media={barchMedia} scaling={1.0}></MediaCrossfade></div>}
            iconsTooltip={iconsTooltip}
            setHoveredIconText={setHoveredIconText}
            titleLink="https://pesjier.itch.io/barch-origins">

            </ProjectSummary>} className='col-span-1 row-span-1 cursor-pointer'
            onClick={() => {
              setPopupOpen(true);
              setContentIndex(2);
            }}>
          </TiltCard>

          <TiltCard mainCard={
            <ProjectSummary title="Effects Practice" duration="1 week spare time" groupSize="Solo" genre="Practice"
            experiences={["Decals", "3D Particles", "Unity URP (Scriptable Renderer / Pass)"]}
            lessons={["Take more time to just learn new techniques and tricks in general instead of just when it is needed."]}
            tools={[0, 1, 23]}
            preview={<div id="effects practice" className='bg-DarkArea-50 size-full overflow-hidden outline outline-Borders-50'><MediaCrossfade media={TAProjectMedia} scaling={1.0}></MediaCrossfade></div>}
            iconsTooltip={iconsTooltip}
            setHoveredIconText={setHoveredIconText}
            titleLink="">

            </ProjectSummary>} className='col-span-1 row-span-1 cursor-pointer'
            onClick={() => {
              setPopupOpen(true);
              setContentIndex(8);
            }}>
          </TiltCard>

          <TiltCard mainCard={
            <ProjectSummary title="16 Lines" duration="9 days full time" groupSize="Solo" genre="Rhythm Game"
            experiences={["Reading custom levels / songs", "Designing rhythm tracks", "Dynamic tutorials fit to any song"]}
            lessons={["Make sure to research genre-specific controls and formats", "Quality over quantity in terms of levels"]}
            tools={[0, 1]}
            preview={<div id="16 lines" className='bg-DarkArea-50 size-full overflow-hidden outline outline-Borders-50'><MediaCrossfade media={sixteenMedia} scaling={1.0}></MediaCrossfade></div>}
            iconsTooltip={iconsTooltip}
            setHoveredIconText={setHoveredIconText}
            titleLink="https://pesjier.itch.io/16-lines">

            </ProjectSummary>} className='col-span-1 row-span-1 cursor-pointer'
            onClick={() => {
              setPopupOpen(true);
              setContentIndex(3);
            }}>
          </TiltCard>

          <TiltCard mainCard={
            <ProjectSummary title="Magic Survivor" duration="1 year spare time (so far)" groupSize="Solo" genre="Survivor"
            experiences={["Designing Player abilities and combos", "Creating reusable targeting and effect systems to easily create spells", "Planning a project more in detail"]}
            lessons={["Iterate over early demos and change the idea until it feels right"]}
            tools={[0, 1, 18]}
            preview={<div id="magic survivor" className='bg-DarkArea-50 size-full overflow-hidden outline outline-Borders-50'><MediaCrossfade media={wizardMedia} scaling={1.0}></MediaCrossfade></div>}
            iconsTooltip={iconsTooltip}
            setHoveredIconText={setHoveredIconText}>

            </ProjectSummary>} className='col-span-1 row-span-1 cursor-pointer'
            onClick={() => {
              setPopupOpen(true);
              setContentIndex(4);
            }}>
          </TiltCard>

          <TiltCard mainCard={
            <ProjectSummary title="Train Friendslop" duration="1 month spare time" groupSize="3" genre="Friendslop"
            experiences={["Godot Development", "Networking systems", "Steamworks integration", "Setting up Animated Ragdoll"]}
            lessons={["Think about systems from a network perspective", "Ragdolls take a lot of effort to setup"]}
            tools={[4, 6, 16, 20, 23, 28]}
            preview={<div id="train friendslop" className='bg-DarkArea-50 size-full overflow-hidden outline outline-Borders-50'><MediaCrossfade media={slopMedia} scaling={1.0}></MediaCrossfade></div>}
            iconsTooltip={iconsTooltip}
            setHoveredIconText={setHoveredIconText}>

            </ProjectSummary>} className='col-span-1 row-span-1 cursor-pointer'
            onClick={() => {
              setPopupOpen(true);
              setContentIndex(5);
            }}>
          </TiltCard>

          <TiltCard mainCard={
            <ProjectSummary title="Surviving The Deep" duration="7 days full time" groupSize="Solo" genre="Endless Survivor"
            experiences={["Unity Shader Graph workflow", "Leaderboard integration", "Using visuals to show gameplay mechanics"]}
            lessons={["The game needs to be more friendly towards all skill-levels"]}
            tools={[0, 1, 2]}
            preview={<div id="surviving the deep" className='bg-DarkArea-50 size-full overflow-hidden outline outline-Borders-50'><MediaCrossfade media={surviveMedia} scaling={1.0}></MediaCrossfade></div>}
            iconsTooltip={iconsTooltip}
            setHoveredIconText={setHoveredIconText}
            titleLink="https://pesjier.itch.io/surviving-the-deep">

            </ProjectSummary>} className='col-span-1 row-span-1 cursor-pointer'
            onClick={() => {
              setPopupOpen(true);
              setContentIndex(6);
            }}>
          </TiltCard>

          <TiltCard mainCard={
            <ProjectSummary title="Clean Escape" duration="3 days full time" groupSize="Solo" genre="Speedrun"
            experiences={["Leaderboard integration", "Creating Quest UI/List", "Basic 3D Modelling & Shader practice"]}
            lessons={["Real players will interact with your systems differently"]}
            tools={[0, 1, 18, 21]}
            preview={<div id="clean escape" className='bg-DarkArea-50 size-full overflow-hidden outline outline-Borders-50'><MediaCrossfade media={cleanMedia} scaling={1.0}></MediaCrossfade></div>}
            iconsTooltip={iconsTooltip}
            setHoveredIconText={setHoveredIconText}
            titleLink="https://pesjier.itch.io/clean-escape">

            </ProjectSummary>} className='col-span-1 row-span-1 cursor-pointer'
            onClick={() => {
              setPopupOpen(true);
              setContentIndex(7);
            }}>
          </TiltCard>
        </div>
      </div>
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

export default QuickOther
