import React, {useRef, useState} from 'react'
import MediaCrossfade from '../ReusableComponents/MediaCrossfade'
import ProjectSummary from '../ReusableComponents/ProjectSummary'
import Tooltip from '../ReusableComponents/Tooltip'
import CategoryBar from "../ReusableComponents/CategoryBar"
import {categories} from "../ReusableComponents/CategoriesData"

import {tonkaMedia} from "../ReusableComponents/MediaLists"
import VisibilityVideo from '../ReusableComponents/VisibilityVideo'
const TonkaTD = () => {
  const iconsTooltip = useRef(null);
  const [hoveredIconText, setHoveredIconText] = useState("uhh");

  return (
    <div>
      <div className='items-center justify-center flex py-5 px-5'>
        <div className='w-full h-fit'>
          <ProjectSummary title="Tonka TD" duration="7 months spare time (so far)" groupSize="Solo" genre="Tower Defense"
            experiences={["Designing and optimizing systems for mobile performance", "Created tools for designing waves", "Tick system to maintain gameplay across framerates"]}
            lessons={["Don't guess while designing, instead measure and plan", "Rewrite systems instead of adding features over time"]}
            tools={[0, 1, 2, 23, 24]}
            preview={<div className='bg-DarkArea-50 size-full overflow-hidden outline outline-Borders-50'><MediaCrossfade media={tonkaMedia} scaling={1.0}></MediaCrossfade></div>}
            iconsTooltip={iconsTooltip}
            setHoveredIconText={setHoveredIconText}>
            </ProjectSummary>
        </div>     
      </div>

      <div className='px-8 py-3'>
        {/* Content underneath here */}
        {/* Tools */}
        <CategoryBar title={categories[1].title} fillPercentage={0.82} icon={categories[1].icon} color={categories[1].color} isActive={true}/>
        <div className='grid grid-cols-2 h-fit gap-4'>
          <h1 className='font-pixel text-SecondaryText-50 text-[clamp(0.6rem,2.5vw,1.1rem)] py-5'>
            <b>Wave creation tool:</b> This is the most useful tool I made for this game so far. It allowed me to 
            create waves much easier and actually visualize them without having to play the game over and over.
            <br></br><br></br>
            On the right, you can see the <b><i>before</i> of creating waves.</b> Although I could plan them out and input
            it, it was many menus to open and keep track of. You also had to keep track of all runners, and I sometimes 
            forgot about some runners or forgot which one I had used (since the name is cut off).
            <br></br><br></br>
            I started by listing what I wanted from my tool and writing down problems with the current workflow etc. 
            Then I started designing the window piece by piece from the requirements. Once I had everything written down, I 
            imagined using the tool and gave myself feedback and updated the design until I felt happy with it.
            <br></br><br></br>
            Basically, I played the role of the designer/artist/user giving feedback and the developer at once, but the idea
            is to <b>make a design that the user can give feedback on quickly before developing the tool.</b> This could clear up 
            misconceptions, bring up industry-standards that I've missed or perhaps just highlight user-specific wishes. 
            (E.g a designer prefers sliders over input boxes or wants certain shortcuts supported)
            This also minimizes the potential refactoring needed on the tool. 
            <br></br><br></br>
            Underneath, you can see my design that I started with, and then the finished tool in action.
          </h1>  
          <div className='outline outline-Borders-50 overflow-hidden h-fit w-fit'>
            <img src="PortfolioStuff/img/Explanations/tonkaWavesBefore.webp">

            </img>
          </div>
          <div className='outline outline-Borders-50 overflow-hidden h-fit w-fit'>
            <img src="PortfolioStuff/img/Explanations/tonkaWavesDiagram.webp">

            </img>
          </div>
          <div className='outline outline-Borders-50 overflow-hidden h-fit'>
            <VisibilityVideo src="PortfolioStuff/videos/TonkaTD/TonkaTool4.webm"
            autoPlay loop>

            </VisibilityVideo>
          </div>
          <h1 className='font-pixel text-SecondaryText-50 text-[clamp(0.6rem,2.5vw,1.1rem)] py-5'>
            <b>Objectpool Registration:</b> I used this tool as a way to practice creating tools as separate editor-windows 
            in Unity. It is a tool for adding new prefabs that will be available in the objectpool.
            <br></br><br></br>
            It is mostly just another example of my workflow of creating a design and some sort of flow diagram to 
            understand the tool before developing it. (I do this for basically everything) I prefer combining the visual 
            design and the flow diagram because I get a good overview of the system while <b>keeping the focus on the visual reference 
            rather than a technical plan because the purpose is to create a tool that can be used the way a user wants it to.</b>
            <br></br><br></br>
            The next steps I would take for any larger tool or system would be to plan the system more in depth; <b>planning the system, 
            its architecture, identifying components</b> and finding which components already exist in the engine etc. 
            <br></br><br></br>
            However, this level of planning is usually enough for myself and these smaller tools, although I do a quick work breakdown structure 
            style write down before writing down tasks. Then I prioritize the general layout before implementing the less essential things 
            like the timeline or drag & drop.
            
          </h1>    
          <div className='outline outline-Borders-50 overflow-hidden h-fit w-fit'>
            <img src="PortfolioStuff/img/Explanations/tonkaObjectpoolDiagram.webp">

            </img>
          </div>
          <div className='outline outline-Borders-50 overflow-hidden h-fit'>
            <VisibilityVideo src="PortfolioStuff/videos/TonkaTD/TonkaTool1.webm"
            autoPlay loop>

            </VisibilityVideo>
          </div>
          <h1 className='font-pixel text-SecondaryText-50 text-[clamp(0.6rem,2.5vw,1.1rem)] py-5'>
            To the left, you can see the final implementation of the previous design in use. Although not 
            as useful as other tools, I still prefer having the prefab-previews and a specific menu entry for it. 
            Before, I had to go through the folders and find the data object before assigning prefabs by name. Now it 
            is much more straight forward and I don't need to remember folder-paths or prefab names.
            <br></br><br></br>
            It showed me that spending some time making these smaller tools and improvements can still be worth 
            it, saving a few second all the time but also <b>making it easier for users who didn't create the prefabs 
            or the data object</b> to use the tool.
          </h1> 
          <h1 className='font-pixel text-SecondaryText-50 text-[clamp(0.6rem,2.5vw,1.1rem)] py-5'>
            <b>Track Making:</b> What is essential for a game like this: an editor to create the tracks.
            <br></br><br></br>
            Since it was such an essential part of the game, I just solved it in any way I knew how, to create 
            it in Unity like any other game-system I make. Therefore it is played in the game, but with my new knowledge 
            of Unity editor windows, it would be implemented very similarly if I did it in an editor window.
            <br></br><br></br>
            I achieve the tracks by placing points, which become part of a path. These points can extend to new points, continuing 
            the path, <i>OR</i> lead to another path(s). Then each path can place new points or lead to new paths and so forth.
            When exporting the track, I fill the distance between points with smaller points to be used in the gameplay, this maintains
            distance between points which I need for my system.
            <br></br><br></br>
            To achieve curves without needing to place 300 points, I use simple trigonometry to change the positions calculated between 
            two points and then changing the amplitude to get wider curves. Think of it as putting a circle with X radius between the points
            and then walking along one edge or the other to get around it. Looking back, <b>I should've just researched Bezier-curves</b>, but as I said: 
            I needed it to work quickly to start working on the game at all.
          </h1> 
          <div className='flex flex-col'>
            <div className='outline outline-Borders-50 overflow-hidden h-fit'>
            <VisibilityVideo src="PortfolioStuff/videos/TonkaTD/tonkaTrack1.webm"
            autoPlay loop>

            </VisibilityVideo>
            </div>
            <div className='outline outline-Borders-50 overflow-hidden h-fit'>
            <VisibilityVideo src="PortfolioStuff/videos/TonkaTD/tonkaTrack2.webm"
            autoPlay loop>

            </VisibilityVideo>
            </div>
          </div>
          <div className='outline outline-Borders-50 overflow-hidden h-fit w-fit'>
            <img src="PortfolioStuff/img/Explanations/TowerGraph.webp">

            </img>
          </div>
          <h1 className='font-pixel text-SecondaryText-50 text-[clamp(0.6rem,2.5vw,1.1rem)] py-5'>
            <b>Tower Graph Idea:</b> After working for a while and implementing several different towers and their upgrades, I 
            have thought of a tool that could improve the workflow.
            <br></br><br></br>
            Currently, I am creating a class for each tower and using inheritance to share common functionality like shooting
            and basic tower features like upgrades. The upgrades are also objects that apply certain upgrades on towers. Although i've kept
            it generic and reusable, some upgrades and features are always going to be tower-specific. More importantly though, the upgrades
            need to be created and then connected to the tower which is a bit messy.
            <br></br><br></br>
            My idea is to create a <b>visual scripting graph for towers.</b> It could have sidepanels where you can add upgrade nodes, on-tick nodes
            or tick-interval nodes. It would also have a blackboard of variables. This would achieve a few things:<br></br>
            - <b>Designer could block out towers before "Effect" nodes are done.</b><br></br>
            - <b>Upgrades, towers and other things would be collected in one place.</b><br></br>
            - <b>Less tower-specific code and increased modularity / reusability.</b>
          </h1> 
        </div>

        {/* Gameplay */}
        <CategoryBar title={categories[0].title} fillPercentage={0.75} icon={categories[0].icon} color={categories[0].color} isActive={true}/>
        <div className='grid grid-cols-2 h-fit gap-4'>
          <h1 className='font-pixel text-SecondaryText-50 text-[clamp(0.6rem,2.5vw,1.1rem)] py-5'>
            <b>Tick system:</b> One of the main things I wanted to solve in this game was the fact that different framrates 
            could potentially result in different outcomes during the rounds.
            <br></br><br></br>
            The way I solved it was to create <b>my own tick-loop within Unitys update loop and doing my own collisions & logic</b> each 
            tick. It allowed me to easily implement the game speed button, but also was a huge help when debugging, because I 
            could lower the tick rate to something low like 5 ticks per second and see exactly what is happening.
          </h1>    
          <div className='outline outline-Borders-50 overflow-hidden h-fit'>
            <VisibilityVideo src="PortfolioStuff/videos/TonkaTD/tonkaSlowdownTicks.webm"
            autoPlay loop muted>

            </VisibilityVideo>
          </div>
          <div className='outline outline-Borders-50 overflow-hidden h-fit w-fit'>
            <img src="PortfolioStuff/img/Explanations/tonkaLOS.webp">

            </img>
          </div>
          <h1 className='font-pixel text-SecondaryText-50 text-[clamp(0.6rem,2.5vw,1.1rem)] py-5'>
            <b>Optimizing Gameplay:</b> The game was intended for phones as well, making optimizations important, especially with 
            my own collison code.
            <br></br><br></br>
            You can see an example above, with the yellow lines around projectiles, which indicate <b>an initial distance 
            check before running actual collision checks.</b> The hedge growing across the track also for example checks 
            the dot-product in the direction of runners to check if they're even along the direction of the hedge.
            <br></br><br></br>
            In the same sense, the runners are only updating a 'distance' float to move along the path. Then using that to sample 
            where they should be along a pre-calculated path. <b>Each bend in the road just changes the path and resets their distance.</b>
            <br></br><br></br>
            To the left you can also see that the towers have a line of sight. I implemented this by sampling the colliders on the track
            in <b>360 degrees around the tower, and caching the distance results.</b> Using the direction & distance towards the runner, we can 
            get the degree-direction the runner is in, and compare the distance against the cached distance. So it is only 
            doing collisions once.
          </h1> 
          <h1 className='font-pixel text-SecondaryText-50 text-[clamp(0.6rem,2.5vw,1.1rem)] py-5'>
            <b>Towers & Enemies:</b> Once the more important systems above were implemented, it was fairly straight forward to 
            implement the towers and enemies.
            <br></br><br></br>
            Enemies are a simple class that uses a provided <b>'RunnerType' to set its health, visuals, speed, spawnOnDeath and potential behavior</b>. 
            Then to create new enemies, I inherit from the 'RunnerType', although <b>many different enemies could be achieved with the basic variables.</b>
            <br></br><br></br>
            Projectiles follow the same pattern and I chose to do it this way because it was very easy to <b>keep the projectiles and enemies
            in object pools</b> this way, and it made sense because a majority of enemies and projectiles will be using the same data.
            <br></br><br></br>
            Towers on the other hand are prefabs that are instantiated. This is because they will change over time with upgrades etc. The base tower 
            class supported things like upgrades, range and an effect timer, which other towers then build upon with inheritance.
            <br></br><br></br>
            Quick example of developing a tower:<br></br>
            - <b>Implement timed-effect logic on EffectLogic(). E.g shooting on a timer</b><br></br>
            - <b>Implement additional behaviors on Tick(). E.g hedge growth</b><br></br>
            - <b>Expose events for visuals (if needed)</b><br></br>
            - <b>Create upgrades data, and potentially new upgrades if needed</b><br></br>
            - <b>Donezo</b><br></br><br></br>
            I would say that even though it is a couple of steps and I am not fully happy with it (see idea for tool in Tool-section), 
            I still manage to <b>create new towers in approximately one or two days,</b> depending on complexity. (Only code implementation)
            <br></br><br></br>
            <b>Live tweaking:</b> I made sure that basically every part of the gameplay was <b>tweakable live during
            gameplay.</b> This made it so much more easy to balance values, but also to debug features. You can see an example 
            of this on a Tower on the right where I change fire-rate, range and attack styles. It also works on enemies / 
            projectiles / waves (basically everything).
            <br></br><br></br>
            Some of these were automatic because of my design decisions on the systems with reading waves/enemies/projectiles when 
            they spawn, and the Towers were more effort as I decided to make their Init separated into one for 'one time' setup and one 
            for 'value-changes'. Then I use the 'value-changes' Init at start, when upgrading and when tweaking.
          </h1>     
          <div className='flex flex-col'>
            <div className='outline outline-Borders-50 overflow-hidden h-fit w-fit'>
            <img src="PortfolioStuff/img/Explanations/tonkaOverviewSystems.webp">

            </img>
          </div>
            <div className='outline outline-Borders-50 overflow-hidden h-fit w-fit'>
            <img src="PortfolioStuff/img/Explanations/tonkaTowerBlank.webp">

            </img>
          </div>   
          <div className='outline outline-Borders-50 overflow-hidden h-fit'>
            <VisibilityVideo src="PortfolioStuff/videos/TonkaTD/tonkaLiveTweakingReal.webm"
            autoPlay loop muted>

            </VisibilityVideo>
          </div>  
          </div>
        </div>

        {/* Design */}
        <CategoryBar title={categories[3].title} fillPercentage={0.71} icon={categories[3].icon} color={categories[3].color} isActive={true}/>
        <div className='grid grid-cols-2 h-fit gap-4'>
          <h1 className='font-pixel text-SecondaryText-50 text-[clamp(0.6rem,2.5vw,1.1rem)] py-5'>
            <b>Wave Design:</b> Although a lot of inspiration came from Bloons-TD, I still had some issues with creating waves myself
            that were different. Especially with adding new runners.
            <br></br><br></br>
            After trying to create some waves with simple planning and just imagining how it should work, I immediately
            ran into balancing problems and it was very hard to come up with something new all the time. 
            <br></br><br></br>
            My solution was to make each runner worth 1 point (sometimes higher for special runners). Then <b>also make 
            certain attributes worth points.</b> For example, being a magical/reinforced runner adds 2 points. Finally, 
            through recursively going through whatever a runner spawns on death, we can get a <b>final 'Design Value'.</b>
          </h1>    
          <div className='outline outline-Borders-50 overflow-hidden h-fit w-fit'>
            <img src="PortfolioStuff/img/Explanations/tonkaDesignValue.webp">

            </img>
          </div>
          <div className='outline outline-Borders-50 overflow-hidden h-fit'>
            <VisibilityVideo src="PortfolioStuff/videos/TonkaTD/TonkaTool2.webm"
            autoPlay loop>

            </VisibilityVideo>
          </div>
          <h1 className='font-pixel text-SecondaryText-50 text-[clamp(0.6rem,2.5vw,1.1rem)] py-5'>
            Now when I create new waves, I show the current desgin value of the wave (bottom right).
            Immediately, I just made each wave increase the design value exponentially and saw a huge difference.
            It was a much clearer progression in each wave and for the most part, waves were not too hard or too easy.
            <br></br><br></br>
            Now it is much easier to make the waves scale properly, and I can focus on introducing runner-types in a better
            way. Or focus on my towers like below! 
            <br></br><br></br>
            This experience has made me think of design from a different lens, and made me think about other ways of 
            measuring or visualizing values during design.
          </h1>   
          <div className='outline outline-Borders-50 overflow-hidden h-fit w-fit'>
            <img src="PortfolioStuff/img/Explanations/Dandelion.webp">

            </img>
          </div>   
          <h1 className='font-pixel text-SecondaryText-50 text-[clamp(0.6rem,2.5vw,1.1rem)] py-5'>
            <b>Tower Design:</b> This is an example of how I design my towers (or anything), although
            I make most of mine with pen and paper when working solo.
            <br></br><br></br>
            My general approach to the Towers, were to first of all: <b>make half of them pretty basic</b>, so people could always
            have something that would just shoot the runners without much thought. The rest could be more experimental or 
            require more thought, like the <b>'Living Hedge' that extends across the map, making placement very important.</b>
            <br></br><br></br>
            Secondly, have Towers share roles but excel at different things. E.g multiple towers should have explosive/magical
            damage but not attack the same way.
            <br></br><br></br>
            Then finally, make them all feel unique, preferably through gameplay or atleast visually.
          </h1>   
        </div>
        {/* Tech Art */}
        <CategoryBar title={categories[2].title} fillPercentage={0.45} icon={categories[2].icon} color={categories[2].color} isActive={true}/>
        <div className='grid grid-cols-2 h-fit gap-4'>
          <h1 className='font-pixel text-SecondaryText-50 text-[clamp(0.6rem,2.5vw,1.1rem)] py-5'>
            <b>Procedural Animations:</b> A tower that I over-developed a bit was the 'Living Hedge'. It can stretch in several directions 
            until it hits a collider, meaning it needs to be able to work at any length.<br></br><br></br>
            The hedge-part is a model that I am stretching, then I apply a <b>shader with triplanar mapping</b> to
            make the texture extend naturally. For this I also needed to make sure the texture looped. <br></br><br></br>
            The roots are several instances of short procedurally generated meshes with a shader that renders based on a 
            'growth' variable. The roots themselves are activated at certain progress points 
            of the main-hedge and then extend fully on their own. Same goes in reverse.
          </h1>    
          <div className='outline outline-Borders-50 overflow-hidden h-fit'>
            <VisibilityVideo src="PortfolioStuff/videos/TonkaTD/TonkaHedge.webm"
            autoPlay loop>

            </VisibilityVideo>
          </div>
          <h1 className='font-pixel text-SecondaryText-50 text-[clamp(0.6rem,2.5vw,1.1rem)] py-5'>
            The final combination of hedge + roots are then connected to a simple percentage of growth
            from the Tower, keeping the <b>visuals separate from the gameplay.</b> <br></br><br></br>
            Some other effects I worked on:<br></br>
            - <b>Runner shader (Shows health and speed bounce but also runner qualities like reinforced or magical.)</b><br></br>
            - <b>Track visualizer shader</b><br></br>
            - <b>Grass swaying vertex shader</b><br></br>
          </h1>   
          <div className='outline outline-Borders-50 overflow-hidden h-fit'>
            <VisibilityVideo src="PortfolioStuff/videos/TonkaTD/TonkaTool3.webm"
            autoPlay loop>

            </VisibilityVideo>
          </div>
          <div className='outline outline-Borders-50 overflow-hidden h-fit'>
            <div className='grid grid-rows-2 gap-3'>
              <VisibilityVideo className="outline outline-Borders-50" src="PortfolioStuff/videos/TonkaTD/grillMasterCloseup.webm"
                autoPlay loop muted>

              </VisibilityVideo>
              <VisibilityVideo className="outline outline-Borders-50" src="PortfolioStuff/videos/TonkaTD/grillMasterGameView.webm"
                autoPlay loop muted>

              </VisibilityVideo>
            </div>
          </div>
          <h1 className='font-pixel text-SecondaryText-50 text-[clamp(0.6rem,2.5vw,1.1rem)] py-5'>
            Here's another example of how I like to create procedural animations instead of using
            generic animations. The tower itself, has 'cookers' that get activated (hamburgers, hotdogs etc),
            these eventually add to a stack of shootable food. <br></br><br></br>
            On top of this, I have a script listening to those events and visualizing them. For example:<br></br>
            - <b>When adding 'cookers', start spawning food on the grill.</b><br></br>
            - <b>When a cooker adds shootable food, visualize the event by taking the oldest food on the grill, and 
              send it to the table.</b><br></br>
            - <b>Tower attacks, so remove top of stack on table. (smoke puff)</b><br></br>
            <br></br>
            The main idea I try to follow, is to be able to <b>implement the tower without caring about 
            the visuals, and vice versea.</b> The next step I will take with this, is to add animations to the gnome,
            and use something like an IK target to make the gnome flip the correct food.
            <br></br><br></br>
            <b>Skybox Shader:</b> Below you can also see my first attempt at making a skybox-shader that I created for my 
            main menu. I can sample a position for each pixel, which is equivalent to the view direction of that pixel. Then by 
            checking the y-value of that, I can create a horizon. The sun is defined as a certain direction and 'dot-product width'.
            I would need to spend some time to change the clouds to be at an actual world height, and use the view direction 
            to calculate how far away the cloud is at that pixel and use that for the noise. But this is good enough for my menu.
          </h1>   
          <div className='outline outline-Borders-50 overflow-hidden h-fit'>
            <VisibilityVideo src="PortfolioStuff/videos/TonkaTD/TonkaMenu.webm"
            autoPlay loop muted>

            </VisibilityVideo>
          </div>
          <div className='outline outline-Borders-50 overflow-hidden h-fit'>
            <VisibilityVideo src="PortfolioStuff/videos/TonkaTD/skyboxShader.webm"
            autoPlay loop muted>

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

export default TonkaTD
