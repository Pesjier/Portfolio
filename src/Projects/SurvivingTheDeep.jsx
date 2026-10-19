import React, {useRef, useState} from 'react'
import MediaCrossfade from '../ReusableComponents/MediaCrossfade'
import ProjectSummary from '../ReusableComponents/ProjectSummary'
import Tooltip from '../ReusableComponents/Tooltip'
import CategoryBar from "../ReusableComponents/CategoryBar"
import {categories} from "../ReusableComponents/CategoriesData"

import {surviveMedia} from "../ReusableComponents/MediaLists"
import VisibilityVideo from '../ReusableComponents/VisibilityVideo'
const SurvivingTheDeep = () => {
  const iconsTooltip = useRef(null);
  const [hoveredIconText, setHoveredIconText] = useState("uhh");

  return (
    <div>
      <div className='items-center justify-center flex py-5 px-5'>
        <div className='w-full h-fit'>
          <ProjectSummary title="Surviving The Deep" duration="7 days full time" groupSize="Solo" genre="Endless Survivor"
            experiences={["Unity Shader Graph workflow", "Leaderboard integration", "Using visuals to show gameplay mechanics"]}
            lessons={["The game needs to be more friendly towards all skill-levels"]}
            tools={[0, 1, 2]}
            preview={<div className='bg-DarkArea-50 size-full overflow-hidden outline outline-Borders-50'><MediaCrossfade media={surviveMedia} scaling={1.0}></MediaCrossfade></div>}
            iconsTooltip={iconsTooltip}
            setHoveredIconText={setHoveredIconText}
            titleLink="https://pesjier.itch.io/surviving-the-deep">

            </ProjectSummary>
        </div>     
      </div>

      <div className='px-8 py-3'>
        {/* Content underneath here */}
        {/* Tech Art */}
        <CategoryBar title={categories[2].title} fillPercentage={0.62} icon={categories[2].icon} color={categories[2].color} isActive={true}/>
        <div className='grid grid-cols-2 h-fit gap-4'>
          <h1 className='font-pixel text-SecondaryText-50 text-[clamp(0.6rem,2.5vw,1.1rem)] py-5'>
            I used this game-jam to get familiar with <b>shaders in Unity</b>, 
            having only previously used them in my engine at The Game Assembly.
            <br></br><br></br>
            <b>Shark Indicator:</b> The one I am most happy with is the indicator of the shark path.
            <br></br>
            It is just a sprite with a shader where I sample an arrow texture 
            with an interval and add time to the starting UV-X, 
            making the moving arrows effect.
            <br></br><br></br>
            A few problems I encountered, was that the sharks can come from both sides and
            from corner to corner, and the indicator was at first stretching from side to side instantly,
            but also stayed when the shark had already past. This cluttered the screen and made it hard to know 
            which order the sharks would come in.
          </h1>
          <div className='outline outline-Borders-50 overflow-hidden h-fit'>
            <VisibilityVideo src="PortfolioStuff/videos/SurvivingTheDeep/SurviveDeepGameplay3.webm"
            autoPlay loop>

          </VisibilityVideo>
          </div>
          <h1 className='font-pixel text-SecondaryText-50 text-[clamp(0.6rem,2.5vw,1.1rem)] py-5'>
            What felt the most simple was to keep the shader simple and not care about world direction etc, 
            and instead rotate and scale the sprite. This way, the UV-X will always be the direction of the 
            arrows, and by passing in the length of the sprite and scaling the UV-X with that, the arrows keep
            the same size.<br></br> <br></br>
            Then, to make the arrows move with the shark, I added the distance it has travelled
            to the UV-X (StartOffset), essentially updating the starting position as the shark moves, making it seamless.
          </h1>
          <div className='outline outline-Borders-50 overflow-hidden h-fit'>
            <img src="PortfolioStuff/img/Explanations/surviveExplanationShark.webp">
            </img>
          </div>
          <h1 className='font-pixel text-SecondaryText-50 text-[clamp(0.6rem,2.5vw,1.1rem)] py-5'>
            <b>Other Effects:</b> The other effects were more simple: <br></br>
            - <b>An outline shader on obstacles like trash and jellyfish.</b><br></br>
            Created by sampling X nearby pixels on the texture and checking alpha to determine if it is an outline pixel.
            <br></br>
            - <b>Movement on fish / jellyfish</b><br></br>
            Using a UV direction, take the UV from 0 - 1 and add more/less fin-wagging by using: Amp * sin(UV + time * freq). 
            <br></br>
            - <b>Underwater effect</b><br></br>
            Post processing shader that uses noise to distort pixels. Also adds a layer of white - black noise to create a 
            sense of depth behind the player / enemies.
          </h1>
          <div className='outline outline-Borders-50 overflow-hidden h-fit'>
            <VisibilityVideo src="PortfolioStuff/videos/SurvivingTheDeep/SurviveDeepGameplay1.webm"
            autoPlay loop>

            </VisibilityVideo>
          </div>
        </div>
        {/* Gameplay */}
        <div className='flex-row flex'>
        <CategoryBar title={categories[3].title} fillPercentage={0.45} icon={categories[3].icon} color={categories[3].color} isActive={true}/>
        <CategoryBar title={categories[0].title} fillPercentage={0.35} icon={categories[0].icon} color={categories[0].color} isActive={true}/>
        </div>    
        <div className='grid grid-cols-2 h-fit gap-4'>
          <h1 className='font-pixel text-SecondaryText-50 text-[clamp(0.6rem,2.5vw,1.1rem)] py-5'>
            There is nothing advanced about the gameplay systems or design in this game but my main goal
            is always to make the game fun over anything, <b>which I seem to have done!</b><br></br><br></br>
            Getting such a high score from over 900 entries was to me a very good score and I was very happy 
            with it. (My audio sucked though)
          </h1>
          <div className='outline outline-Borders-50 overflow-hidden h-fit w-fit'>
            <img src="PortfolioStuff/img/ProjectSpecific/surviveScore.webp">
            </img>
          </div>
          <div className='outline outline-Borders-50 overflow-hidden h-fit'>
            <img src="PortfolioStuff/img/Explanations/surviveExplanationSpawning.webp">
            </img>
          </div>
          <h1 className='font-pixel text-SecondaryText-50 text-[clamp(0.6rem,2.5vw,1.1rem)] py-5'>
            <b>Spawning Timeline:</b> The core of the game is the <b>spawn-timeline.</b> <br></br>
            At any time, any amount of spawners could be active and they were all very simple to set up.
            You assign a prefab(s), then fill in details like <b>how many of the prefab should spawn</b>, and <b>what
            interval they should spawn in</b> and from <b>which side of the screen.</b> These were always start / end pairs that scaled from the starting
            value to the ending value as the spawner lived. <br></br> <br></br>

            With this, I made different parts feel unique, but also introduced new fish / obstacles one at a time only 
            to combine them later.
          </h1>
          <div className='outline outline-Borders-50 overflow-hidden h-fit'>
            <VisibilityVideo src="PortfolioStuff/videos/SurvivingTheDeep/SurviveDeepTransition.webm"
            autoPlay loop>

            </VisibilityVideo>
          </div>
          <h1 className='font-pixel text-SecondaryText-50 text-[clamp(0.6rem,2.5vw,1.1rem)] py-5'>
            If I would change something:<br></br>
            - <b>I would make powerups more useful.</b><br></br>
            Currently the "Aimbot" powerup is poorly implemented and just aims towards enemies, 
            still being able to miss. It should be homing projectiles instead.
            Most importantly though, I would introduce a guaranteed Max-health at certain milestones like 
            the transition to dark screen, where there are no enemies spawning.<br></br>
            - <b>Force player to change playstyle more.</b> <br></br> 
            I got some feedback about how you only shoot all the time. Maybe some new weapon or enemy could 
            change that?
          </h1>
          <h1 className='font-pixel text-SecondaryText-50 text-[clamp(0.6rem,2.5vw,1.1rem)] py-5'>
            <b>Tutorial:</b> Also tried making an automatic type of tutorial, which was a good improvement from previous 
            game-jams where players had a hard time understanding the game. I would improve on this
            in my next game jams, but it was a start of trying to make tutorials that aren't 
            just text-overload or images.
          </h1>
          <div className='outline outline-Borders-50 overflow-hidden h-fit'>
            <VisibilityVideo src="PortfolioStuff/videos/SurvivingTheDeep/SurviveDeepTut.webm"
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

export default SurvivingTheDeep
