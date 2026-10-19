import React, {useRef, useState} from 'react'
import MediaCrossfade from '../ReusableComponents/MediaCrossfade'
import ProjectSummary from '../ReusableComponents/ProjectSummary'
import Tooltip from '../ReusableComponents/Tooltip'
import CategoryBar from "../ReusableComponents/CategoryBar"
import {categories} from "../ReusableComponents/CategoriesData"

import {cleanMedia} from "../ReusableComponents/MediaLists"
import VisibilityVideo from '../ReusableComponents/VisibilityVideo'
const CleanEscape = () => {
  const iconsTooltip = useRef(null);
  const [hoveredIconText, setHoveredIconText] = useState("uhh");

  return (
    <div>
      <div className='items-center justify-center flex py-5 px-5'>
        <div className='w-full h-fit'>
          <ProjectSummary title="Clean Escape" duration="3 days full time" groupSize="Solo" genre="Speedrun"
            experiences={["Leaderboard integration", "Creating Quest UI/List", "Basic 3D Modelling & Shader practice"]}
            lessons={["Real players will interact with your systems differently"]}
            tools={[0, 1, 18, 21]}
            preview={<div className='bg-DarkArea-50 size-full overflow-hidden outline outline-Borders-50'><MediaCrossfade media={cleanMedia} scaling={1.0}></MediaCrossfade></div>}
            iconsTooltip={iconsTooltip}
            setHoveredIconText={setHoveredIconText}
            titleLink="https://pesjier.itch.io/clean-escape">

            </ProjectSummary>
        </div>     
      </div>

      <div className='px-8 py-3'>
        {/* Content underneath here */}
        {/* Gameplay */}
        <div className='flex-row flex'>
        <CategoryBar title={categories[0].title} fillPercentage={0.63} icon={categories[0].icon} color={categories[0].color} isActive={true}/>
        <CategoryBar title={categories[3].title} fillPercentage={0.35} icon={categories[3].icon} color={categories[3].color} isActive={true}/>
        </div> 
        <div className='grid grid-cols-2 h-fit gap-4'>
          <h1 className='font-pixel text-SecondaryText-50 text-[clamp(0.6rem,2.5vw,1.1rem)] py-5'>
            <b>State Machine:</b> My idea for this game was to make very <b>simple player mechanics that I could then scale up</b> if I had the time.
            <br></br> <br></br>
            It ended up with the player being a <b>State-machine</b> that I could add states to and using a simple
            interact system to use items. I ended up with these states:<br></br>
            - <b>Idle (just waiting to transition to other states)</b><br></br>
            - <b>Interacting (checking for cancel / finish interaction)</b><br></br>
            - <b>Moving (when moving)</b><br></br>
            - <b>Carrying item (moving with an item, not able to interact)</b>
          </h1>
          <div className='outline outline-Borders-50 overflow-hidden h-fit w-fit'>
            <img src="PortfolioStuff/img/Explanations/cleanState.webp">
            </img>
          </div>
          <div className='outline outline-Borders-50 overflow-hidden h-fit w-fit'>
            <img src="PortfolioStuff/img/Explanations/cleanState2.webp">
            </img>
          </div>
          <h1 className='font-pixel text-SecondaryText-50 text-[clamp(0.6rem,2.5vw,1.1rem)] py-5'>
            Here's some examples of the transitions. The most important one is the Interact state and 
            the "finished" variable. When you start an interaction, you send along a lambda "onFinished".
            This is then called when an interaction is done, telling the state to transition. 
            <br></br><br></br>
            For example when aligning furniture correctly, doing the arrow-minigame, or instantly when interacting with pickups.
            <br></br><br></br>
            These are the core things that made the game both <b>easy to develop and expand</b> but also easy for players 
            to instantly understand and play.
          </h1>
          <h1 className='font-pixel text-SecondaryText-50 text-[clamp(0.6rem,2.5vw,1.1rem)] py-5'>
            <b>Improvements:</b> In a larger project I would've created a matrix of all states, and run the checks for transition 
            on the states themselves, to <b>avoid states having dependencies</b> of each other.<br></br><br></br>

            In my example below, states can obviously not transition to themselves, but Idle could transition to 
            any other state. Moving / Interacting / Carrying all know their conditions for transitioning, and
            we go through them one by one to check. <br></br><br></br>

            Then you could add things like priority on the different states in each column (Idle prefers to transition to Interacting over Moving, like in the code above),
            or checking that states are ready to transition before trying if they can.
          </h1>
          <div className='outline outline-Borders-50 overflow-hidden h-fit'>
            <VisibilityVideo src="PortfolioStuff/videos/CleanEscape/CleanTutorial1.webm"
            autoPlay loop>

            </VisibilityVideo>
          </div>
          <div className='outline outline-Borders-50 overflow-hidden h-fit w-fit'>
            <img src="PortfolioStuff/img/Explanations/cleanMatrix.webp">
            </img>
          </div>
          <div className='outline outline-Borders-50 overflow-hidden h-fit w-fit'>
            <img src="PortfolioStuff/img/Explanations/cleanPseudo.webp">
            </img>
          </div>
          <h1 className='font-pixel text-SecondaryText-50 text-[clamp(0.6rem,2.5vw,1.1rem)] py-5'>
            My idea seemed to work pretty good! I got a lot of positive feedback about how people liked the 
            minigames / tasks and controls. And from what I remember, I had a very easy time adding
            all the minigames / tasks, which gave me more time for the rest of the game.
          </h1>
          <div className='outline outline-Borders-50 overflow-hidden h-fit w-fit'>
            <img src="PortfolioStuff/img/ProjectSpecific/cleanScore.webp">
            </img>
          </div>
        </div>
        {/* Tech Art */}
        <CategoryBar title={categories[2].title} fillPercentage={0.3} icon={categories[2].icon} color={categories[2].color} isActive={true}/>
        <div className='grid grid-cols-2 h-fit gap-4'>
          <h1 className='font-pixel text-SecondaryText-50 text-[clamp(0.6rem,2.5vw,1.1rem)] py-5'>
            <b>Highlight Shader:</b> The only thing I did in terms of Tech-Art was a simple highlight shader. I used it to indicate where
            to put things, which seemed to work since I got no negative feedback about that.<br></br><br></br>

            I made it by fading out the texture over 0 - 1 UV-Y on a Box with transparency. Then, because the top/bottom would 
            also get the same pixel shader, I added a <b>dot-product check against the normal vector</b> to see if the
            surface was pointing up/down, and then setting it all to transparent if it did. <br></br><br></br>
            I first used world space but when I had wall-mounted stuff, it still pointed up, so I changed it to <b>object space.</b>
            Then I could rotate the box and use it in different orientations without it affecting the shader result. 
            <br></br><br></br>
            It wouldn't work on basically anthing with a real UV-map, but I imagine
            you can just use the object space y-coordinate instead of the UV-Y.
          </h1>    
          <div className='outline outline-Borders-50 overflow-hidden h-fit'>
            <VisibilityVideo src="PortfolioStuff/videos/CleanEscape/CleanGameplay4.webm"
            autoPlay loop>

            </VisibilityVideo>
          </div>
        </div>
      </div>

      <Tooltip ref={iconsTooltip}>
        <p className='text-SecondaryText-50 text-xl font-pixel'>
          {hoveredIconText}
        </p>
      </Tooltip>
    </div>
  )
}

export default CleanEscape
