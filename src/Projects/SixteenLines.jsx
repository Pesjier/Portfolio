import React, {useRef, useState} from 'react'
import MediaCrossfade from '../ReusableComponents/MediaCrossfade'
import ProjectSummary from '../ReusableComponents/ProjectSummary'
import Tooltip from '../ReusableComponents/Tooltip'
import CategoryBar from "../ReusableComponents/CategoryBar"
import {categories} from "../ReusableComponents/CategoriesData"

import {sixteenMedia} from "../ReusableComponents/MediaLists"
import VisibilityVideo from '../ReusableComponents/VisibilityVideo'
const SixteenLines = () => {
  const iconsTooltip = useRef(null);
  const [hoveredIconText, setHoveredIconText] = useState("uhh");

  return (
    <div>
      <div className='items-center justify-center flex py-5 px-5'>
        <div className='w-full h-fit'>
          <ProjectSummary title="16 Lines" duration="9 days full time" groupSize="Solo" genre="Rhythm Game"
            experiences={["Reading custom levels / songs", "Designing rhythm tracks", "Dynamic tutorials fit to any song"]}
            lessons={["Make sure to research genre-specific controls and formats", "Quality over quantity in terms of levels"]}
            tools={[0, 1]}
            preview={<div className='bg-DarkArea-50 size-full overflow-hidden outline outline-Borders-50'><MediaCrossfade media={sixteenMedia} scaling={1.0}></MediaCrossfade></div>}
            iconsTooltip={iconsTooltip}
            setHoveredIconText={setHoveredIconText}
            titleLink="https://pesjier.itch.io/16-lines">

            </ProjectSummary>
        </div>     
      </div>

      <div className='px-8 py-3'>
        {/* Content underneath here */}
        {/* Gameplay */}
        <CategoryBar title={categories[0].title} fillPercentage={0.42} icon={categories[0].icon} color={categories[0].color} isActive={true}/>
        <div className='grid grid-cols-2 h-fit gap-4'>
          <h1 className='font-pixel text-SecondaryText-50 text-[clamp(0.6rem,2.5vw,1.1rem)] py-5'>
            <b>Rhythm Game Basics:</b> What I focused on this game-jam, was to create a real base for a rhythm game. I created all 
            the typical parts like:<br></br> 
            <b>- Song-preview menu (With audio snippet)</b><br></br>
            <b>- Custom-song support</b><br></br>
            <b>- Generating visuals from song metadata</b><br></br>
            <b>- Straight forward controls</b><br></br>
            <b>- Highscores / Multipliers etc</b><br></br><br></br>
            My process was to take my experience from playing Guitar Hero and break it all 
            down on paper, basically creating a <b>work breakdown structure</b>. Then prioritize everything, starting 
            with creating the track from MIDI files, and then making it possible to hit notes etc.<br></br><br></br>
          </h1>   
          <div className='flex-col flex'>
            <div className='outline outline-Borders-50 overflow-hidden h-fit'>
            <VisibilityVideo src="PortfolioStuff/videos/SixteenLines/16LinesGameplay3.webm"
            autoPlay loop>

            </VisibilityVideo>
            </div>
            <div className='outline outline-Borders-50 overflow-hidden h-fit w-fit'>
            <img src="PortfolioStuff/img/Explanations/16LinesComment.webp">

            </img>
            </div>
          </div>

          <div className='outline outline-Borders-50 overflow-hidden h-fit w-fit'>
            <img src="PortfolioStuff/img/Explanations/16LinesExplanationRots.webp">

            </img>
          </div>
          <h1 className='font-pixel text-SecondaryText-50 text-[clamp(0.6rem,2.5vw,1.1rem)] py-5'>
            <b>Player Rotations:</b> One of the hardest challenges, was to handle the <b>rotation of the view</b>. It was a lot of testing back and forth,
            and fixing one thing and realizing there was another issue. To the left is a part of the final solution,
            which was to maintain the target rotation within 0 - 360, but updating the current rotation when you 
            start rotating. Instead of 270 to 360 and wrapping around (which caused annoying edge cases), current rot 270 
            is converted to -90 and rotates smoothly to 0. <br></br><br></br>

            The next step was to also always maintain a <b>'origin rotation'</b>, which is the rotation you stopped at 
            when you stopped locking your camera to follow the direction of the fret-board (See video below). These together made 
            the rotation always smooth, no matter how much you spammed buttons and rotations.
          </h1>
          <div className='outline outline-Borders-50 overflow-hidden h-fit w-fit'>
            <img src="PortfolioStuff/img/Explanations/16LinesExplanationClamp.webp">

            </img>
          </div>   
          <div className='outline outline-Borders-50 overflow-hidden h-fit'>
            <VisibilityVideo src="PortfolioStuff/videos/SixteenLines/16LinesExplanationRots.webm"
            autoPlay loop muted>

            </VisibilityVideo>
          </div>
          <h1 className='font-pixel text-SecondaryText-50 text-[clamp(0.6rem,2.5vw,1.1rem)] py-5'>
            <b>Dynamic Tutorial:</b> Another thing that came out great, was the tutorial!<br></br><br></br>

            I made it work for any song whatsoever, although it searched for a specific one. The tutorial itself, 
            is a <b>decorator</b> on top of the normal 'Board' class that handles any normal song.<br></br><br></br>

            The decorator stops the player from using certain controls before the tutorial has introduced them,
            and actively searches the next notes for a specific situation that I wanted to have in the tutorial.
            These were:<br></br>
            - <b>The first note, to teach the player how to hit them</b><br></br>
            - <b>The first rotation, to teach the player how to rotate</b><br></br>
            - <b>A certain percentage through the song, to teach the player how to lock their rotation</b><br></br>
            <br></br>
            I thought waiting a bit for the lock mechanic was good, to not throw everything at a player at once,
            but also to discourage people from only playing with the screen locked.
          </h1>
          <div className='outline outline-Borders-50 overflow-hidden h-fit'>
            <div className='grid grid-cols-2 gap-3'>
              <VisibilityVideo className="outline outline-Borders-50" src="PortfolioStuff/videos/SixteenLines/16LinesTut1.webm"
                autoPlay loop muted>

              </VisibilityVideo>
              <VisibilityVideo className="outline outline-Borders-50" src="PortfolioStuff/videos/SixteenLines/16LinesTut3.webm"
                autoPlay loop muted>

              </VisibilityVideo>
              <VisibilityVideo className="col-span-2 outline outline-Borders-50" src="PortfolioStuff/videos/SixteenLines/16LinesTut2.webm"
                autoPlay loop muted>

              </VisibilityVideo>
            </div>
          </div>
        </div>
        {/* Design */}
        <CategoryBar title={categories[3].title} fillPercentage={0.35} icon={categories[3].icon} color={categories[3].color} isActive={true}/>
        <div className='grid grid-cols-2 h-fit gap-4'>
          <h1 className='font-pixel text-SecondaryText-50 text-[clamp(0.6rem,2.5vw,1.1rem)] py-5'>
            <b>Track Design:</b> I had never created Rhythm-game tracks before, but I have played some before. With the help 
            of my interest in music, I tried to create something recogniseable but still my own thing.
            <br></br><br></br>
            My process revolved around pretending it was a real song, and <b>creating patterns for the patterns
            in the song.</b> Then I would rotate the patterns or even split them up over different rotations.
            This made the first interaction a way to learn the pattern, and then challenging the player when 
            they had learned it. <br></br><br></br>

            In some songs, I also started introducing the back-track on top of the pattern. Almost as if you
            were playing several instruments. But the idea was still to <b>teach a pattern, then escalate.</b>
          </h1>   
          <div className='outline outline-Borders-50 overflow-hidden h-fit w-fit'>
            <img src="PortfolioStuff/img/ProjectSpecific/16Score.webp">

            </img>
          </div>
          <div className='outline outline-Borders-50 overflow-hidden h-fit'>
            <VisibilityVideo src="PortfolioStuff/videos/SixteenLines/16LinesGameplay2.webm"
            autoPlay loop>

            </VisibilityVideo>
          </div>
          <h1 className='font-pixel text-SecondaryText-50 text-[clamp(0.6rem,2.5vw,1.1rem)] py-5'>
            The most difficult thing was to keep track of the rotation and make sure the patterns flowed
            into each other during active playing. I didn't want to player to get lost or not see notes. 
            <br></br><br></br>
            I decided to keep rotations primarily left/right during melodies and continous playing,
            and only do 180 - rotations during slower moments or specific patterns. This was mainly saved for the more
            difficult songs though.
            <br></br><br></br>
            <b>Automatic Difficulty Rating:</b> Another thing that helped designing songs in different difficulties, was the <b>automatic difficulty rating. </b>
            It uses the spins and notes per second, along with the length to generate a difficulty score. This made it easy 
            to see that I was creating too difficult songs at first. (It also works on custom songs!)
          </h1>   
        </div>
        {/* Tech Art */}
        <CategoryBar title={categories[2].title} fillPercentage={0.3} icon={categories[2].icon} color={categories[2].color} isActive={true}/>
        <div className='grid grid-cols-2 h-fit gap-4'>
          <h1 className='font-pixel text-SecondaryText-50 text-[clamp(0.6rem,2.5vw,1.1rem)] py-5'>
            I created no assets for this game-jam, instead relying on shaders to create it all.
            Every note for example, is a shader taking the distance to (0, 0) and only drawing it X-distance away
            and in Y-angle direction. Then the angle is gotten from the track the notes are in, and the distance updated
            over time. That is also why they automatically shrink when getting closer. <br></br><br></br>
            
            The same goes for the lanes that pop when indicating spawns or when hitting notes. It's just drawing everything
            in a certain angle from (0, 0).
          </h1>   
          <div className='outline outline-Borders-50 overflow-hidden h-fit'>
            <img src="PortfolioStuff/img/Explanations/16LinesExplanationShader.webp">

            </img>
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

export default SixteenLines
