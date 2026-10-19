import React, {useRef, useState} from 'react'
import MediaCrossfade from '../ReusableComponents/MediaCrossfade'
import ProjectSummary from '../ReusableComponents/ProjectSummary'
import Tooltip from '../ReusableComponents/Tooltip'
import CategoryBar from "../ReusableComponents/CategoryBar"
import {categories} from "../ReusableComponents/CategoriesData"

import {barchMedia} from "../ReusableComponents/MediaLists"
import VisibilityVideo from '../ReusableComponents/VisibilityVideo'
const weatherMedia = [
  {
    src:"PortfolioStuff/videos/BarchOrigins/BarchRain.webm"
  },
  {
    src:"PortfolioStuff/videos/BarchOrigins/BarchCloud.webm"
  },
    {
    src:"PortfolioStuff/videos/BarchOrigins/BarchHeavyRain.webm"
  },
]

const BarchOrigins = () => {
  const iconsTooltip = useRef(null);
  const [hoveredIconText, setHoveredIconText] = useState("uhh");

  return (
    <div>
      <div className='items-center justify-center flex py-5 px-5'>
        <div className='w-full h-fit'>
          <ProjectSummary title="Barch Origins" duration="2 months full time (ish)" groupSize="Solo" genre="Pokémon Adventure"
            experiences={["World / Progression designing", "Saving non-linear game progression", "Gameplay Events", "Improved Audio implementation"]}
            lessons={["Start with reference games, then tweak towards your goal", "Deliver and iterate instead of planning forever"]}
            tools={[0, 1, 18]}
            preview={<div className='bg-DarkArea-50 size-full overflow-hidden outline outline-Borders-50'><MediaCrossfade media={barchMedia} scaling={1.0}></MediaCrossfade></div>}
            iconsTooltip={iconsTooltip}
            setHoveredIconText={setHoveredIconText}
            titleLink="https://pesjier.itch.io/barch-origins">

            </ProjectSummary>
        </div>     
      </div>

      <div className='px-8 py-3'>
        {/* Content underneath here */}

        <div className='grid grid-cols-2 h-fit gap-4'>
          <h1 className='font-pixel text-SecondaryText-50 text-[clamp(0.6rem,2.5vw,1.1rem)] py-5'>
            <b>Heads up!</b>
            <br></br><br></br>
            A quick heads-up about this game: It is basically a bunch of <b>inside jokes and memes from my friend group
            packed inside a Pokémon clone.</b> The game was made for them to find it funny, but ended up being one of 
            my best projects!<br></br><br></br>
            It doesn't make sense and has a bunch of stolen characters, and that's the point :).
          </h1>
          <div className='outline outline-Borders-50 overflow-hidden h-fit'>
            <VisibilityVideo src="PortfolioStuff/videos/BarchOrigins/BarchDex.webm"
            autoPlay loop>

            </VisibilityVideo>
          </div>
        </div>
        

        {/* Design */}
        <CategoryBar title={categories[3].title} fillPercentage={0.65} icon={categories[3].icon} color={categories[3].color} isActive={true}/>
        <div className='grid grid-cols-2 h-fit gap-4'>
          <h1 className='font-pixel text-SecondaryText-50 text-[clamp(0.6rem,2.5vw,1.1rem)] py-5'>
            <b>World Design:</b> This is the biggest world I have designed and implemented in a game so far.
            Before, I had either only made small scale gameplay-focused 'arenas', or had a designer create the world. 
            (Or something procedurally generated)
            <br></br><br></br>

            My first challenge was to design the progression and flow of the world. I ended up defining 
            some zone and connection labels that I wanted to work with:<br></br>
            <b>P - Path</b>, Small zones that mainly takes you from one place to another with little content.<br></br>
            <b>L - Large Area</b>, Large zones that are often a hub of paths or filled with content.<br></br>
            <b>C - City</b>, A safezone for healing / shopping and more NPC interactions. Usually a hub for each progression-stage 
            of the game.<br></br>
            <b>BP - Blocked Path</b>, Connections that are blocked until you progress through required content like a gym or quest.<br></br>
            <b>B - Bonus</b>, A zone that provides some smaller non-essential extra content. This could be events, quests
            or rare items / minions. Rewarding players for exploring.<br></br>
            <b>G - Gym</b>, A Gym. Basically a major challenge needed for progression, the culmination of the current area.
          </h1>    
          <div className='outline outline-Borders-50 overflow-hidden h-fit w-fit'>
            <img src="PortfolioStuff/img/Explanations/BarchLayout.webp">

            </img>
          </div>
          <div className='outline outline-Borders-50 overflow-hidden h-fit'>
            <VisibilityVideo src="PortfolioStuff/videos/BarchOrigins/BarchMap.webm"
            autoPlay loop>

            </VisibilityVideo>
          </div>
          <h1 className='font-pixel text-SecondaryText-50 text-[clamp(0.6rem,2.5vw,1.1rem)] py-5'>
            After designing the progression and flow through the zones, I switched to determining what the different
            areas would thematically be like. This would be especially important if I had a team that would implement zones 
            in the same area at the same time. With the help of this, zones were a lot more straight forwards to implement. 
            Of course I had already planned a lot of it in my head during the initial idea of the game, so it was pretty
            easy but still important. 
            <br></br><br></br>
            To the left you can see the map in game too, which came out pretty similar to the inital design.
          </h1>  
          <h1 className='font-pixel text-SecondaryText-50 text-[clamp(0.6rem,2.5vw,1.1rem)] py-5'>
            <b>Zones Examples:</b> To the right you can see examples of a Path (top left), a City (top right) 
            and some Large zones (bottom two).<br></br><br></br>
            For example, the Path was planned between 'Barch Mountain' and 'Elwynn Forest', which <b>made it very natural
            to choose the tiles and features of the path.</b>
            <br></br><br></br>
            Another thing you will notice is that the Large Lake-area has 7 connections to other zones and around 18 events 
            or interactions compared to the Path that has 2 connections and 6 events.
            <br></br><br></br>
            The next, harder step was to balance the zones and make them scale with player levels. I tried just 
            steadily increasing the levels between large zones and important progression points. My way of making sure players 
            wouldn't get stuck, was both the Bonus areas with extra fights for XP, and just making sure to fill Large areas with 
            a lot of optional battles. This already worked pretty well because <b>you level pretty linearly since you get 
            more experience from higher level enemies.</b> At the same time, scaling XP gains avoided players getting too strong from doing <i>ALL</i> quests.
            
          </h1> 
          <div className='outline outline-Borders-50 overflow-hidden h-fit'>
            <div className='grid grid-cols-2 gap-3'>
              <img className="outline outline-Borders-50" src="PortfolioStuff/img/Explanations/barchPath.webp">
              </img>
              <img className="outline outline-Borders-50" src="PortfolioStuff/img/Explanations/barchCity.webp">
              </img>
              <img className="outline outline-Borders-50" src="PortfolioStuff/img/Explanations/barchLargeLake.webp">
              </img>
              <img className="outline outline-Borders-50" src="PortfolioStuff/img/Explanations/barchLargeMtBarch.webp">
              </img>
            </div>
          </div>
          <div className='outline outline-Borders-50 overflow-hidden h-fit'>
            <div className='grid grid-cols-2 gap-3'>
              <img className="outline outline-Borders-50 row-span-3" src="PortfolioStuff/img/Explanations/barchWitchking.webp">
              </img>
              <img className="outline outline-Borders-50" src="PortfolioStuff/img/Explanations/barchTypes.webp">
              </img>
              <img className="outline outline-Borders-50" src="PortfolioStuff/img/Explanations/barchStats.webp">
              </img>
              <img className="outline outline-Borders-50" src="PortfolioStuff/img/Explanations/barchAbilities.webp">
              </img>
              <VisibilityVideo className="outline outline-Borders-50 col-span-2" src="PortfolioStuff/videos/BarchOrigins/BarchGameplay4.webm"
                autoPlay loop muted>

                </VisibilityVideo>
            </div>
          </div>
          <h1 className='font-pixel text-SecondaryText-50 text-[clamp(0.6rem,2.5vw,1.1rem)] py-5'>
            <b>Minion Design:</b> Minions were defined by one or two Types, and then some stats for combat. Then they
            could evolve and grow stronger, just like early Pokémon games. The issue was avoiding making some 
            minions or types too strong or weak.
            <br></br><br></br>
            My first step was to make sure all types were strong & weak against the same amount of types, making sure no 
            type would be disproportionately strong.<br></br> (Barched = Super strong)
            <br></br><br></br>
            Then I defined stat-ranges for different minions; going from 
            around 100 stat points for a first evolution minion to around 240 for a third evolution minion. I also defined 
            some unique stat-ranges for rarer minions without evolution chains, or for especially powerful final-evolution minions
            like the 'Witchking of Angmar'.<br></br><br></br>
            Finally, I also defined strengths for abilities and similarly created ranges depending on which level a minion 
            would unlock the ability. <b>With stat and ability power ranges in place, I could create minions and abilities freely and they would already 
            be atleast somewhat balanced.</b><br></br><br></br>
            I made some important design choices with this in mind aswell:<br></br>
            <b>- The starter minions were slightly stronger than the others to make it easier for the player.</b><br></br>
            <b>- The first gym-type was a more 'neutral' Type to make all starter minions viable.</b><br></br>
            <b>- I discovered through testing that all minions needed atleast two ability Types at any time, 
              especially in the beginning. Otherwise it would be very frustrating and unfair against unfavored matchups.</b>
          </h1>  
          <h1 className='font-pixel text-SecondaryText-50 text-[clamp(0.6rem,2.5vw,1.1rem)] py-5'>
            <b>Audio Implementation:</b> I spent more time on audio than I had previously. Mainly on 
            setting it up more properly with different audio groups and snapshots. This made it easier to
            create better audio settings, but also to do transitions and generally making the audio feel 
            easier to design and implement.<br></br><br></br>
            Having ambience and zone-music added a lot of feeling to the different areas and differentiated them 
            from each other. The added rain sounds also made a large impact. <br></br><br></br>
            All in all, I learned that putting more time in the audio can really raise the perceieved quality a lot,
            which is something I hadn't thought about a lot since I usually focus on the gameplay.
          </h1>  
          <div className='outline outline-Borders-50 overflow-hidden h-fit w-fit'>
              <img src="PortfolioStuff/img/Explanations/barchAudioMixing.webp">

              </img>
            </div>
            <div className='outline outline-Borders-50 overflow-hidden h-fit'>
              <img src="PortfolioStuff/img/Explanations/barchAudioSettings.webp">

              </img>
            </div>
        </div>
        {/* Gameplay */}
        <CategoryBar title={categories[0].title} fillPercentage={0.63} icon={categories[0].icon} color={categories[0].color} isActive={true}/>
        <div className='grid grid-cols-2 h-fit gap-4'>
          <h1 className='font-pixel text-SecondaryText-50 text-[clamp(0.6rem,2.5vw,1.1rem)] py-5'>
            <b>Events system:</b> There are many <b>popup-events in this game that drive the gameplay.</b> Therefore my gameplay 
            loop is centered around that. To the right, you can see pseudo code for the gameplay loop. <br></br><br></br>
            The main idea is to have <b>a queue of events that can be triggered from the world, and need to be resolved 
            before the player is allowed to move and interact again.</b>
            <br></br><br></br>
            These events are then added to the queue by other scripts, which allowed me to easily add several events, but also 
            to handle them separately without dependencies or overlaps.
          </h1>
          <div className='outline outline-Borders-50 overflow-hidden h-fit w-fit'>
            <img src="PortfolioStuff/img/Explanations/barchGameLoop.webp">

            </img>
          </div>
          
          <div className='outline outline-Borders-50 overflow-hidden h-fit'>
            <div className='grid grid-cols-2 gap-3'>
              <VisibilityVideo className="outline outline-Borders-50" src="PortfolioStuff/videos/BarchOrigins/BarchEvent1.webm"
                autoPlay loop muted>
              </VisibilityVideo>
              <VisibilityVideo className="outline outline-Borders-50" src="PortfolioStuff/videos/BarchOrigins/BarchEvent2.webm"
                autoPlay loop muted>
              </VisibilityVideo>
              <VisibilityVideo className="outline outline-Borders-50" src="PortfolioStuff/videos/BarchOrigins/BarchEvent3.webm"
                autoPlay loop muted>
              </VisibilityVideo>
              <VisibilityVideo className="outline outline-Borders-50" src="PortfolioStuff/videos/BarchOrigins/BarchEvent4.webm"
                autoPlay loop muted>
              </VisibilityVideo>
            </div>
          </div>
          <h1 className='font-pixel text-SecondaryText-50 text-[clamp(0.6rem,2.5vw,1.1rem)] py-5'>
            To the left you can see some examples of these events:<br></br>
            - <b>A dialogue (Top left)</b>, that moves the player away.<br></br>
            - <b>An encounter (Top right)</b>, in this case from a trainer, but can also be when walking 
            through grass.<br></br>
            - <b>Minion learning an ability (Bottom left)</b><br></br>
            - <b>Recieving items (Bottom right)</b><br></br><br></br>
            So the gameplay loop is basically just the player moving, and triggering events that 
            are handled in their own script(s).
          </h1>
          <h1 className='font-pixel text-SecondaryText-50 text-[clamp(0.6rem,2.5vw,1.1rem)] py-5'>
            <b>World Saving & Progression:</b> To save the progress in the world without having to add new code for saving
            stuff, I decided to use a <b>blackboard for saving all the different values.</b> Then, when changing the blackboard,
            I immediately save the progress to avoid 'cheating' or accidentally getting stuck.
            <br></br><br></br>
            One instance where this was very useful was when picking up items in zones. I use a combination of the zone name and 
            the item index to create a <b>unique identifier for each item.</b> Then by setting a bool to true for that identifier, it will 
            determine if I spawn that item during loading. Things like this made the <b>saving a one-time implementation</b> which was 
            very useful for adding new content and zones.
            <br></br><br></br>
            Then I also used this blackboard to track the progress in quests or gyms etc. For example: <b>Npcs can show 
            different dialogues, or determine if they spawn, depending on blackboard values</b> and they can also set blackboard values to save 
            quest progress.
          </h1>  
          <div className='flex flex-col'>
            <div className='outline outline-Borders-50 overflow-hidden h-fit w-fit'>
              <img src="PortfolioStuff/img/Explanations/barchSave.webp">

              </img>

            </div>
            <h1 className='font-pixel text-SecondaryText-50 text-[clamp(0.6rem,2.5vw,1.1rem)] py-5'>
              Above is an example of a save file, displaying zone & weather you last saved in, your minions and your currency etc.
            </h1>
          </div>
          
          <h1 className='font-pixel text-SecondaryText-50 text-[clamp(0.6rem,2.5vw,1.1rem)] py-5'>
            <b>Ledge Movement:</b> Apart from the default movement, I decide to also have the ledge-jumping that is 
            common in Pokémon.
            <br></br><br></br>
            I decided to implement it by having a <b>grid with tile-data for movement.</b> So first of all, 'open' and 'blocked', which
            I use to move around at all and also avoid having more complicated collisions than necessary. Then I added <b>a 'ledge' 
            tile, but for every direction.</b>
            <br></br><br></br>
            When moving, I would now first check if the tiles were open, to move normally. If they were not, the player would 
            also check if there were ledges, and that we were moving in the direction of the ledge. If moving into a ledge, 
            I would start a different state of the player which just slowly moved the player past the ledge and <b>faked a jump by moving the player 
            up and scaling them up and down.</b>
            <br></br><br></br>
            There were however some extra considerations, like allowing the ledge to be a dynamic length of tiles in that direction, 
            and also verifying that the ledge eventually ended up on an open tile, so the player wouldn't get stuck. 
            <br></br><br></br>
            Another benefit of using a grid with tiles, is that <b>my A* pathfinding could interpret the ledges as walkable</b> tiles,
            making my NPCs automatically jump ledges when it was optimal, which also meant I could use it during dialouges / events like 
            you can see to the right.
          </h1>   
          <div className='flex flex-col'>
            <div className='outline outline-Borders-50 overflow-hidden h-fit'>
            <VisibilityVideo src="PortfolioStuff/videos/BarchOrigins/BarchJumping.webm"
            autoPlay loop muted>

            </VisibilityVideo>
          </div>
          <div className='outline outline-Borders-50 overflow-hidden h-fit'>
            <VisibilityVideo src="PortfolioStuff/videos/BarchOrigins/BarchJumpingInDialog.webm"
            autoPlay loop muted>

            </VisibilityVideo>
          </div>
          </div>
        </div>
        {/* Tools */}
        <CategoryBar title={categories[1].title} fillPercentage={0.39} icon={categories[1].icon} color={categories[1].color} isActive={true}/>
        <div className='grid grid-cols-2 h-fit gap-4'>
          <h1 className='font-pixel text-SecondaryText-50 text-[clamp(0.6rem,2.5vw,1.1rem)] py-5'>
            <b>Level Editor:</b> When I started to create this game, I wanted to use a tool to speed up my level creation 
            but also to avoid setting it up in a ton of scenes. I had previously used Tiled in other projects, but decided to 
            create my own editor to have more control. <b>I also ended up reusing this in my Magic-Survivor game for a while, which worked very well.</b>
            <br></br><br></br>

            The editor is made up of several layers of data;<br></br>
            - <b>Base Grid-art</b><br></br>
            - <b>Overlay Grid-art</b><br></br>
            - <b>Overlay Free-art</b><br></br>
            - <b>Several gameplay layers. E.g NPCs, Prefabs and Room connections</b><br></br><br></br>
            Grid-art means they are tied to a grid position and Free-art means they can be placed anywhere.
          </h1>    
          <div className='outline outline-Borders-50 overflow-hidden h-fit'>
            <VisibilityVideo src="PortfolioStuff/videos/BarchOrigins/barchTool.webm"
            autoPlay loop muted>

            </VisibilityVideo>
          </div>
          <div className='outline outline-Borders-50 overflow-hidden h-fit'>
            <VisibilityVideo src="PortfolioStuff/videos/BarchOrigins/barchTool2.webm"
            autoPlay loop muted>

            </VisibilityVideo>
          </div>
          <h1 className='font-pixel text-SecondaryText-50 text-[clamp(0.6rem,2.5vw,1.1rem)] py-5'>
            Creating new layers was very easy since it was one main-script that had a list of reused scripts for 
            each layer. So you could just <b>add another editor to that list, but change the data being placed and stored</b> in it.
            <br></br><br></br>
            The reason I separated a lot of gameplay into layers was because NPCs or Room-connections require a bit more
            setup than a prefab. For example, NPCs were one prefab that got Init:ed with the NPC data. I preferred this 
            over having a prefab for each NPC.
            <br></br><br></br>
            On the left here, you can see me <b>go through the layers very quickly and easily.</b> I created keybinds for everything 
            because I felt like it was easier to work with and I was the only user so I didn't spend a lot of time making the 
            UX better.
          </h1>
        </div>
        {/* Tech Art */}
        <CategoryBar title={categories[2].title} fillPercentage={0.25} icon={categories[2].icon} color={categories[2].color} isActive={true}/>
        <div className='grid grid-cols-2 h-fit gap-4'>
          <h1 className='font-pixel text-SecondaryText-50 text-[clamp(0.6rem,2.5vw,1.1rem)] py-5'>
            <b>Shaders:</b> I spent very little time on shaders and effects in this game but still ended up
            making some.
            <br></br><br></br>
            The main ones are:<br></br>
            - <b>Encounter effect</b><br></br>
            Shader applies rotation and dissolve effect. Goes from fully dissolved and rotated to normal 
            sprite view. Then scaled the sprite until it covers the screen as a make-shift fade to black. 
            Intended to hint at the enemy before entering combat.<br></br>
            - <b>Battle Background:</b><br></br>
            Simple background effect with overlapped gradients moving horizontally and diagonally respectively. Then 
            theres a noise overlayed on that background. The colors of the noise <b>represent the Type of the minion</b>, 
            which was intended to help players understand which Types they were fighting.<br></br>
            - <b>Moving grass when player walks through it.</b><br></br>
            - <b>Shiny minions & Legendary indicators</b>
          </h1>    
          <div className='outline outline-Borders-50 overflow-hidden h-fit'>
            <VisibilityVideo src="PortfolioStuff/videos/BarchOrigins/BarchGameplay1.webm"
            autoPlay loop muted>

            </VisibilityVideo>
          </div>
          <div className='outline outline-Borders-50 overflow-hidden h-[40dvh]'>
            <MediaCrossfade media={weatherMedia} scaling={1.0}/>
          </div>
          <h1 className='font-pixel text-SecondaryText-50 text-[clamp(0.6rem,2.5vw,1.1rem)] py-5'>
            <b>Weather Effects:</b> There's also some weather effects. They are comprised of:<br></br>
            - <b>Rain particle system (& splash subemitter)</b><br></br>
            - <b>Cloud particle system</b><br></br>
            - <b>Changing ambient light amount</b> <br></br><br></br>
            The different weather are then defined as <b>different configurations on these particles and the ambient light. </b>The
            weather-system then picks a random weather, transitions to it over some time, and then stays for a random time 
            before repeating.<br></br><br></br>
            Although simple effects; together with the weather audio, I feel like they <b>do a lot for the vibe</b> in the game 
            and I am happy with them.
          </h1>   
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

export default BarchOrigins
