import React, {useRef, useState} from 'react'
import MediaCrossfade from '../ReusableComponents/MediaCrossfade'
import ProjectSummary from '../ReusableComponents/ProjectSummary'
import Tooltip from '../ReusableComponents/Tooltip'
import CategoryBar from "../ReusableComponents/CategoryBar"
import {categories} from "../ReusableComponents/CategoriesData"

import {wizardMedia} from "../ReusableComponents/MediaLists"
import VisibilityVideo from '../ReusableComponents/VisibilityVideo'
const MagicSurvivor = () => {
  const iconsTooltip = useRef(null);
  const [hoveredIconText, setHoveredIconText] = useState("uhh");

  return (
    <div>
      <div className='items-center justify-center flex py-5 px-5'>
        <div className='w-full h-fit'>
          <ProjectSummary title="Magic Survivor" duration="1 year spare time (so far)" groupSize="Solo" genre="Survivor"
            experiences={["Designing Player abilities and combos", "Creating reusable targeting and effect systems to easily create spells", "Planning a project more in detail"]}
            lessons={["Iterate over early demos and change the idea until it feels right"]}
            tools={[0, 1, 18]}
            preview={<div className='bg-DarkArea-50 size-full overflow-hidden outline outline-Borders-50'><MediaCrossfade media={wizardMedia} scaling={1.0}></MediaCrossfade></div>}
            iconsTooltip={iconsTooltip}
            setHoveredIconText={setHoveredIconText}>

            </ProjectSummary>
        </div>     
      </div>

      <div className='px-8 py-3'>
        {/* Content underneath here */}
        {/* Gameplay */}
        <CategoryBar title={categories[0].title} fillPercentage={0.76} icon={categories[0].icon} color={categories[0].color} isActive={true}/>
        <div className='grid grid-cols-2 h-fit gap-4'>
          <h1 className='font-pixel text-SecondaryText-50 text-[clamp(0.6rem,2.5vw,1.1rem)] py-5'>
            <b>Spell system:</b> The system for casting spells in this game goes through a few steps:<br></br>
            - <b>Choosing Elements</b><br></br>
            You select elements from a container, these are matched to the closest spell containing those elements 
            to select a spell.<br></br>
            - <b>Targeting (Input)</b><br></br>
            Casting the selected spell goes to a targeting script, this can be several types of targeting like 
            a circle following the mouse or an indicator of a direction. (See video on the right.)<br></br>
            - <b>Spell Casting</b><br></br>
            Once you fulfill the targeting (E.g Within range, click again or maybe it needs to be over a target etc.), then you actually
            do the spell effect. This can be a channeled spell or something that requires input over time, which is why it 
            is handled separately.<br></br>
            - <b>Reset Player</b><br></br>
            When the spell finishes (or the Targeting fails), we tell the player script it can start casting spells again.
            <br></br><br></br>
            This way, the process of adding spells is reduced to only adding a new spell functionality (if needed),
            and then just assigning which targeting it should use. Of course, you would sometimes need unique targeting but 
            that could atleast be reused from one spell to another.
          </h1>    
          <div className='flex flex-col'>
            <div className='outline outline-Borders-50 overflow-hidden h-fit'>
            <VisibilityVideo src="PortfolioStuff/videos/WizardSurvivor/wizardTargeting.webm"
            autoPlay loop muted>

            </VisibilityVideo>
            </div>
            <div className='outline outline-Borders-50 overflow-hidden h-fit'>
            <img src="PortfolioStuff/img/Explanations/wizardSpellDiagram.webp">

            </img>
          </div>
          </div>
          <h1 className='font-pixel text-SecondaryText-50 text-[clamp(0.6rem,2.5vw,1.1rem)] py-5'>
            <b>Behaviour Tree:</b> I have created behaviour trees a few times before and just thought I should mention
            that I implemented it here as well.<br></br><br></br>
            Although I only created one behavior for my enemies before realizing this is not what I wanted from my game, 
            this time I got a better understanding through using generic nodes which can achieve most behaviours you would need.<br></br><br></br>
            I researched it a lot and ended up with just a few nodes:<br></br>
            - <b>Composite nodes:</b><br></br>
            - - <b>Sequence</b> which runs children until one returns Fail or Running.<br></br>
            - - <b>Selector</b> which runs children until one returns Success or Running.<br></br>
            - <b>Overlay Nodes:</b><br></br>
            - - <b>Decorator</b> which has one child that it alters somehow, like inverting the result.<br></br>
            - - <b>Filter / Conditional</b>, it takes a child and only runs it if a certain condition is met<br></br>
            - <b>Behavior Nodes</b>, the actual nodes that perform something like pathfinding or attacking.
            <br></br><br></br>
            The reason I wanted a behaviour tree was because some enemies were supposed to be more advanced in the dungeons, 
            but I scrapped this idea for now and will go towards a more straight up survivor-vibe that doesn't need a behaviour tree.
          </h1>  
          <div className='flex flex-col'>
            <div className='outline outline-Borders-50 overflow-hidden h-fit'>
            <img src="PortfolioStuff/img/Explanations/wizardBehaviorTree.webp">

            </img>
          </div>  
          <div className='outline outline-Borders-50 overflow-hidden h-fit'>
            <VisibilityVideo src="PortfolioStuff/videos/WizardSurvivor/WizardGameplay3.webm"
            autoPlay loop muted>

            </VisibilityVideo>
            </div>
          </div>
          <div className='flex flex-col'>
            <div className='outline outline-Borders-50 overflow-hidden h-fit'>
            <img src="PortfolioStuff/img/Explanations/wizardBSP.webp">

            </img>
          </div> 
          <div className='outline outline-Borders-50 overflow-hidden h-fit'>
            <img src="PortfolioStuff/img/Explanations/wizardBSP2.webp">

            </img>
          </div> 
          </div> 
          <h1 className='font-pixel text-SecondaryText-50 text-[clamp(0.6rem,2.5vw,1.1rem)] py-5'>
            <b>Procedural Dungeon:</b> My first attempts at creating a dungeon didn't work out as I planned, just placing
            rooms randomly and trying to connect them. I found a solution called <b>Binary Space Partitioning.</b><br></br><br></br>
            By dividing a square dungeon into halves over and over, you will get a tree of cells that are guaranteed to be adjacent 
            like in the example of the left. Then you can <b>fill the leaf-nodes with rooms and connect each layer of the BSP-tree</b> one at a time,
            including connections 'upwards' through the tree.
            <br></br><br></br>
            So in the example, assuming there's a room in each leaf-node, you can <b>first connect F and G, then when connecting D and E,
            you would take the closest of D's 'child-rooms' and connect it to E.</b> And so forth and so forth until all rooms are connected.
            <br></br><br></br>
            After that, you can swap some of the rooms for required rooms like a starting room, an exit or a shop. I also added 
            automatic wall generation, to avoid having to add the walls to each pre-created room I made but also to fill the 
            hallways that got generated.
          </h1>  
          <h1 className='font-pixel text-SecondaryText-50 text-[clamp(0.6rem,2.5vw,1.1rem)] py-5'>
            I actually don't remember why I didn't continue with the BSP solution, but I think it was because the dungeons 
            easily got too spaced out and the hallways were too long. So I created a different solution which was to 
            define rooms as a square with doors. Then each door could lead to another room, but they didn't have to.
            <br></br><br></br>
            Then when going through doors of the current room, if a room was generated, it was lined up with the door it 
            corresponded to, making a perfect straight hallway that I could determine to always be X tiles long. <b>Then I would add
            each new room to a queue, making it naturally spread out around the starting room instead of just going deep 
            in one direction.</b>
            <br></br><br></br>
            They were more compact but had deeper rabbit holes and felt less natural. I would've spent more time 
            improving it, but ended up scrapping the whole dungeon idea. 
          </h1>  
          <div className='outline outline-Borders-50 overflow-hidden h-fit'>
            <img src="PortfolioStuff/img/Explanations/wizardNewDungeon.webp">

            </img>
          </div> 
          <div className='outline outline-Borders-50 overflow-hidden h-fit'>
            <VisibilityVideo src="PortfolioStuff/videos/WizardSurvivor/WizardGameplay2.webm"
            autoPlay loop muted>

            </VisibilityVideo>
          </div>
          <h1 className='font-pixel text-SecondaryText-50 text-[clamp(0.6rem,2.5vw,1.1rem)] py-5'>
            Some things I did do though, were dividing the whole dungeon into hallways and room objects to more 
            easily handle them. For example:<br></br>
            - <b>Entering room spawns enemies and closes doors</b><br></br>
            - <b>Entering room / hallways light them up</b>.<br></br><br></br> 
            I actually came up with an automatic solution for the room lights. By creating a new grid with + 1 width / height, each 
            point now represents the potential walls. If we then walk around the room and look for <b>connecting points with 
            prioritized directions</b> (Down, left, up, right), we can connect points and create 
            an outline shape of the room which I then fed into a light shape.
          </h1>          
        </div>
        {/* Design */}
        <CategoryBar title={categories[3].title} fillPercentage={0.72} icon={categories[3].icon} color={categories[3].color} isActive={true}/>
        <div className='grid grid-cols-2 h-fit gap-4'>
          <h1 className='font-pixel text-SecondaryText-50 text-[clamp(0.6rem,2.5vw,1.1rem)] py-5'>
            <b>Core Gameplay Idea:</b> I have probably worked on this game on and off 
            over the course of five years. Coming back in between school, work and other projects.
            At some points it was meant to have bosses like the one I started on to the right,
            and currently I am in the process of redesigning and replanning everything to a multiplayer 
            Vampire Survivors clone.
            <br></br><br></br>
            What hasn't changed, is the core gameplay (inspired by Magicka), which revolves around <b>collecting 
            and combining elements</b> which you use to <b>cast spells with unique combos and effects</b> depending on the elements.
            This will be especially cool in multiplayer I hope, since you can combo together.
          </h1>    
          <div className='outline outline-Borders-50 overflow-hidden h-fit'>
            <VisibilityVideo src="PortfolioStuff/videos/WizardSurvivor/WizardBosss.webm"
            autoPlay loop>

            </VisibilityVideo>
          </div>
          <div className='outline outline-Borders-50 overflow-hidden h-fit'>
            <img src="PortfolioStuff/img/Explanations/wizardElementExample.webp">

            </img>
          </div> 
          <h1 className='font-pixel text-SecondaryText-50 text-[clamp(0.6rem,2.5vw,1.1rem)] py-5'>
            Currently, the game is planned to be a Rougelike; the player starts with ONE element always unlocked, 
            and will need to unlock and collect more elements during the run.
            The player would start with basic elements and gradually unlock better elements through combining them, which 
            would also cast a 'combination' spell. This together with individual cooldowns on spells should encourage 
            players to combine elements and learn combos instead of spamming the same spell.
            <br></br><br></br>
            The UX would be very similar to a WoW-style castbar, but instead of spells, you would have elements and potentially
            a few macros that the player could use to have some select spells as 'quickcast'. These could be created and switched
            during gameplay by selecting the elements, then saving that to a macro-slot.
            <br></br><br></br>
            To the left is an example of two elements with very different use-cases and how they combo with 
            other elements.
          </h1>
          <h1 className='font-pixel text-SecondaryText-50 text-[clamp(0.6rem,2.5vw,1.1rem)] py-5'>
            <b>Progression:</b> Each time you play a round, your combined elements & spells will be tracked outside the runs, 
            letting you discover new elements & spells through gameplay. These better elements can eventually be used as a starting 
            element by unlocking new characters through small challenges like survivor X amount of time or getting X amount 
            of kills etc. etc.<br></br><br></br>
            Since the starting element is infinite and doesn't require combination or collection, this will make the player
            gradually stronger. Together with some UI showing the possible combinations & spells more easily once you've discovered them, it will 
            make an experienced player feel like they remember more combinations and spells, making the game a bit easier.
            <br></br><br></br>
            There will however be try-hards (like me) that also want more difficult challenges once they've gotten better. Therefore 
            I would implement <b>something like Bro-tatos increasingly challenging difficulties, where you need to beat the 
            previous tier to unlock the next,</b> which will increase enemy stats and maybe decrease element sources etc.
          </h1>   
          <div className='outline outline-Borders-50 overflow-hidden h-fit'>
            <img src="PortfolioStuff/img/Explanations/wizardGameLoop.webp">

            </img>
          </div>   
          <div className='flex flex-col'>
            <div className='outline outline-Borders-50 overflow-hidden h-fit'>
            <VisibilityVideo src="PortfolioStuff/videos/WizardSurvivor/WizardGameplay1.webm"
            autoPlay loop>

            </VisibilityVideo>
          </div>
          <div className='outline outline-Borders-50 overflow-hidden h-fit'>
            <VisibilityVideo src="PortfolioStuff/videos/WizardSurvivor/WizardGameplay5.webm"
            autoPlay loop>

            </VisibilityVideo>
          </div>
          </div>
          <h1 className='font-pixel text-SecondaryText-50 text-[clamp(0.6rem,2.5vw,1.1rem)] py-5'>
            <b>Enemy & Environment:</b> The main enemies and gameplay will be very similar to Vampire Survivors, but 
            a scaled down amount to account for the more complex mechanics. Although not too much since the main fun
            is to have satisfying combos and effects that destroy waves of enemies.
            <br></br><br></br>
            Some tougher enemies would also be immune or weak to certain spell-types. E.g. a Tree-monster is weak to fire 
            whilst a Water-Elemental is immune to water spells (maybe it even heals them). This will once again encourage players
            to know about several spells and change their playstyle sometimes.
            <br></br><br></br>
            <b>To encourage the player to move around, element-sources will spawn randomly across a fairly small map</b> (few screens wide and tall).
            These can be both static, like a water pool that doesn't drain, and one-time moving sources like a gust of wind flying across the map. 
            Elements will also <i>rarely</i> drop from killing enemies, and also sometimes guaranteed like a Necromancer dropping the Necromancy element.
            <br></br><br></br>
            When unlocking new elements, they will have a chance to drop from enemies, or in some cases like Magma; it 
            could cause a Volcano to eventually erupt on the map somewhere.
            <br></br><br></br>
            I have a bunch more written down and I don't know what is most important, but the constant re-designing I've 
            done over these years has taught me <b>a lot</b> about designing more in depth and also planning the project more 
            in depth.
          </h1>     
        </div>
        {/* Tech Art */}
        <CategoryBar title={categories[2].title} fillPercentage={0.55} icon={categories[2].icon} color={categories[2].color} isActive={true}/>
        <div className='grid grid-cols-2 h-fit gap-4'>
          <h1 className='font-pixel text-SecondaryText-50 text-[clamp(0.6rem,2.5vw,1.1rem)] py-5'>
            <b>Death & Status Effects:</b> My favorite effects I've made so far in this game, are the effects that 
            are overlayed on enemies with the Ice and Fire spells. <br></br><br></br>
            The way it works, is that spells can define their damage type, and these apply a debuff which starts an effect.
            These can then be updated, in the case of the Ice attacks, and slowly overlay the whole sprite. There's also a list of 'death' 
            prefabs depending on which damage type deals the last damage.
            <br></br><br></br>
            To the right you can see how an enemy can die in different ways:<br></br>
            - <b>Ice Effect</b>. Rises from the bottom until it reaches 100%. Then it 
            creates a new frozen variant. If this is attacked, it divides the sprite into a grid and creates new objects for the cells
            and moves them to create a smash effect.<br></br>
            - <b>Fire Effect</b>. Overlayed flames shader. On death, spawn a death-obj with an 'ash' shader that rises
            from the bottom, then flies to the side until it reaches the bottom.<br></br>
            - <b>Normal Death</b>. Just spawns a death animation.
          </h1> 
          <div className='outline outline-Borders-50 overflow-hidden h-fit'>
            <VisibilityVideo src="PortfolioStuff/videos/WizardSurvivor/wizardDeaths.webm"
            autoPlay loop muted>

            </VisibilityVideo>
          </div>
          <h1 className='font-pixel text-SecondaryText-50 text-[clamp(0.6rem,2.5vw,1.1rem)] py-5'>
            <b>Lightning Effect:</b> This is an example of how I wanted to implement effects in this game apart
            from simple particle systems.
            <br></br><br></br>
            The lightning is a shader that splits the UV-Y into X amount of points and then you sample a noise at each point
            which is used to determine the sin-offset from the center-line. The line also <b>converges in the center-line at the start 
            and end to make sure it can be set at a target or come from a certain cast-position.</b>
            <br></br><br></br>
            I did it this way because it makes it a bit more lightning-y with the <b>more zig-zag-y lines rather than a smooth curve.</b> Then
            I added several layers of different colors like the fourth example in the video, this made the effect 
            have more impact than with just one line, but it could also be down with some impact effect etc.
            <br></br><br></br>
            Another thing I realized is that I could, and probably should, do this by <b>moving the vertices instead</b> and just 
            drawing a straight line, and then maybe dynamically making the plane have more divisions depending on length.
          </h1>
          <div className='outline outline-Borders-50 overflow-hidden h-fit'>
            <VisibilityVideo src="PortfolioStuff/videos/WizardSurvivor/wizardLightning.webm"
            autoPlay loop muted>

            </VisibilityVideo>
          </div>
          <div className='outline outline-Borders-50 overflow-hidden h-fit'>
            <img src="PortfolioStuff/img/Explanations/wizardWowDrain.webp">

            </img>
          </div>
          <div className='flex flex-col'>
            <h1 className='font-pixel text-SecondaryText-50 text-[clamp(0.6rem,2.5vw,1.1rem)] py-5'>
            I believe that by just going from X offset = Sin(val), to using a unit-circle and 
            Vec2 offset = (Cos(val), Sin(val)), you could get close to the WoW example to the left.
            <br></br><br></br>
            Below you can also see some similar channeling-beam effect I created for a project I worked on 
            briefly. I only have the image left but it uses two sin waves with widths, while sampling the cos to 
            determine which is above the other. Then I layer some noise over them to add the color patches on them.
          </h1>  
          <div className='outline outline-Borders-50 overflow-hidden h-fit'>
            <img src="PortfolioStuff/img/Explanations/wizardSpellThingy.webp">

            </img>
          </div>
          </div>
          <h1 className='font-pixel text-SecondaryText-50 text-[clamp(0.6rem,2.5vw,1.1rem)] py-5'>
            <b>Other Effects:</b> I put some time into creating a shader that dissolves a sprite and 
            transfers into the 'orbiting-element' sprite. The idea was to have several sources of elements and 
            for the wizard to drain the element out of the source through this. In the example to the right, the sources
            are the element-pillars I used as a placeholder.
            <br></br><br></br>
            You can also see some things like:<br></br>
            - <b>Bouncing Lightning, which only bounces between wet targets (circle overlay)</b><br></br>
            - <b>Speed effect, with faded sprites trailing the player</b><br></br>
            - <b>Orbiting Elements, showing the players collected elements</b>
          </h1>  
          <div className='outline outline-Borders-50 overflow-hidden h-fit'>
            <VisibilityVideo src="PortfolioStuff/videos/WizardSurvivor/WizardGameplay5.webm"
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

export default MagicSurvivor
