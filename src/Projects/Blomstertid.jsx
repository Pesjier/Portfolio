import React, {useRef, useState} from 'react'
import MediaCrossfade from '../ReusableComponents/MediaCrossfade'
import ProjectSummary from '../ReusableComponents/ProjectSummary'
import Tooltip from '../ReusableComponents/Tooltip'
import CategoryBar from "../ReusableComponents/CategoryBar"
import {categories} from "../ReusableComponents/CategoriesData"
import {blomsterMedia} from "../ReusableComponents/MediaLists"
import VisibilityVideo from '../ReusableComponents/VisibilityVideo'
const Blomstertid = () => {
  const iconsTooltip = useRef(null);
  const [hoveredIconText, setHoveredIconText] = useState("uhh");

  return (
    <div>
      <div className='items-center justify-center flex py-5 px-5'>
        <div className='w-full h-fit'>
          <ProjectSummary title="Blomstertid" duration="9 weeks full time" groupSize="14" genre="3D Platformer"
            experiences={["Graphics Programming", "Engine Tools & Development", "Cross discipline teamwork", "CMake Project"]}
            lessons={["Prioritizing enabling others", "Making quick-fixes will hurt further on", "Define better, more detailed qualities for determining when systems are done."]}
            tools={[5, 6, 8, 10, 11, 13, 14, 15]}
            preview={<div className='bg-DarkArea-50 size-full overflow-hidden outline outline-Borders-50'><MediaCrossfade media={blomsterMedia} scaling={1.0}></MediaCrossfade></div>}
            iconsTooltip={iconsTooltip}
            setHoveredIconText={setHoveredIconText}
            titleLink="https://ssugames.itch.io/blomstertid">
            </ProjectSummary>
        </div>     
      </div>

      <div className='px-8 py-3'>
        {/* Content underneath here */}
        {/* Tools */}
        <CategoryBar title={categories[1].title} fillPercentage={0.82} icon={categories[1].icon} color={categories[1].color} isActive={true}/>
        <div className='grid grid-cols-2 h-fit gap-4'>
          <h1 className='font-pixel text-SecondaryText-50 text-[clamp(0.6rem,2.5vw,1.1rem)] py-5'>
            <b>Entity Component System:</b> The engine began with a system that had entities with lists of components, then 
            we would go through each entity and update them. We decided to move towards an ECS instead, but faced issues with 
            using Flecs because it created weird issues we didn't understand. (We probably just did something wrong)
            <br></br><br></br>
            One weekend, I had enough and <b>created our own ECS; EggCS, based on Flecs</b>.
            I created it to completely replace all the functionality we already had with Flecs, and with very similar 
            ways of defining queries, entities and components. This made it <b>easy for the other programmers to 
            use it straight away</b>, and made replacing the code very quick.
            <br></br><br></br>
            On the right are examples from Flecs, since I don't have access to the project, but <b>EggCS also worked by
            defining queries with template arguments, and adding / getting components with simple template arguments</b>. 
            The components are of course just data like they should be in an ECS. <br></br>E.g. ModelRenderer component containing Model, 
            material etc. and Transform component containing Matrix and cached world pos etc.<br></br><br></br>
          </h1>    
          <div className='flex flex-col'>
            <div className='outline outline-Borders-50 overflow-hidden h-fit'>
            <img src="PortfolioStuff/img/Explanations/BlomsterECS1.webp">

            </img>
          </div>
          <div className='outline outline-Borders-50 overflow-hidden h-fit'>
            <img src="PortfolioStuff/img/Explanations/BlomsterECS2.webp">

            </img>
          </div>
          </div>
          <div className='outline outline-Borders-50 overflow-hidden h-fit'>
            <img src="PortfolioStuff/img/Explanations/TGAEditor.webp">

            </img>
          </div>
          <h1 className='font-pixel text-SecondaryText-50 text-[clamp(0.6rem,2.5vw,1.1rem)] py-5'>
            <b>Editor:</b> Using CMake, we set up another launch option that started an Editor. This was automatically built 
            whenever we made changes to the engine to keep it up to date for everyone. We then used ImGui to create a bunch of 
            tools for the designers and artists. <b>(I have no access to the project, the image is just to avoid text overload)</b>
            <br></br><br></br>
            I created a base class called Editor, that could contain different Editor-windows. Only one window 
            could be active at a time, but the main class created a automatic UI-overlay that allowed you to switch between windows
            easily. This made it easy to expand the editor over time.
            <br></br><br></br>
            We also made a navbar at the top with debugging features and rendering options, for example turning on only Albedo rendering or 
            wireframe mode etc. This was available in the Editor and in Debug mode.
          </h1> 
          <h1 className='font-pixel text-SecondaryText-50 text-[clamp(0.6rem,2.5vw,1.1rem)] py-5'>
            <b>Editor Features:</b> Here are some examples of tools that I created in the editor:<br></br>
            - <b>Model / Prefab viewer</b><br></br>
            - <b>World Transform-Hierarchy & Entity Component View</b>, show and tweak entities / components.<br></br>
            - <b>Animation Graph</b>, defining transition conditions and scripts to play during transitions etc.<br></br>
            - <b>Default Material Editor</b>, change default shader / shader values on models.<br></br>
            - <b>Visual Scripting</b><br></br>
            - <b>ECS Live Management</b>, Toggle each query running at any time. E.g. Toggling off UI rendering, Boids or Player movement.<br></br>
            - <b>Bunch of small debugging stuff</b>, like changing directional light values from navbar.
          </h1> 
          <div className='outline outline-Borders-50 overflow-hidden h-fit'>
            <VisibilityVideo src="PortfolioStuff/videos/Blomstertid/BlomsterGameplay4.webm"
            autoPlay loop>

            </VisibilityVideo>
          </div>
          <div className='outline outline-Borders-50 overflow-hidden h-fit'>
            <VisibilityVideo src="PortfolioStuff/videos/TGAOther/EggineVid.webm"
            autoPlay loop>

            </VisibilityVideo>
          </div>
          <h1 className='font-pixel text-SecondaryText-50 text-[clamp(0.6rem,2.5vw,1.1rem)] py-5'>
            I can't go in depth on everything I did and I probably missed something, but my point is;<br></br>
            <br></br>
            <b>I spent a year enabling Artists, Designers and Tech Artists with tools.</b>
            <br></br><br></br>
            My priority was to help them, and I would talk to them almost every day. 
            <b> It was some of the most rewarding work I have done</b>, and helped me understand their work better.
            I got very good feedback from my teammates, especially about my communication and how I gave them updates
            and talked things through with them in person or over calls.
          </h1> 
          <h1 className='font-pixel text-SecondaryText-50 text-[clamp(0.6rem,2.5vw,1.1rem)] py-5'>
            <b>Optimizations:</b> In this game and previous ones, I implemented many common optimization-techniques.
            <br></br>
            - <b>Frustum Culling</b>, don't render things outside the cameras view.<br></br>
            - <b>Distance Culling</b>, which you can see in effect on the distant-grass in the video.<br></br>
            - <b>Spatial Partitioning</b>, grids and octrees mainly.<br></br>
            - <b>Multithreading</b>, for example loading models.<br></br>
            - <b>LODs</b><br></br>
            <br></br>
            In general, I've been taught about a lot that I try to implement at all times, like caching data and 
            certain algorithms that are fast. But encountering specific scenarios in these games, where <b>we as a group needed to 
            solve larger issues</b>, was a different and more impactful learning experience.
          </h1> 
          <div className='outline outline-Borders-50 overflow-hidden h-fit'>
            <VisibilityVideo src="PortfolioStuff/videos/Blomstertid/BlomsterGameplay5.webm"
            autoPlay loop>

            </VisibilityVideo>
          </div>
        </div>

        {/* Tech Art */}
        <CategoryBar title={categories[2].title} fillPercentage={0.65} icon={categories[2].icon} color={categories[2].color} isActive={true}/>
        <div className='grid grid-cols-2 h-fit gap-4'>
          <h1 className='font-pixel text-SecondaryText-50 text-[clamp(0.6rem,2.5vw,1.1rem)] py-5'>
            <b>Graphics Programming:</b> The rendering pipeline in our engine was a Foward Rendering pipeline that I had 
            implemented during one of the courses at The Game Assembly. We later moved to <b>Deferred Rendering</b> for a couple 
            reasons, like lights but also because we had to be able to render albedo, normals etc separately for school.
            This was done in <b>C++ with DirectX11 and taught me a lot about rendering and how graphics works.</b><br></br><br></br>
            I had to implement everything from loading the models, dynamically creating hlsl files based on model data, to batch rendering, 
            <b>PBR shaders, 3D animation shaders</b>, lights and much more.<br></br><br></br>
            This meant I sat a lot with shaders, looking through the <b>graphics analyzer in visual studio and generally debugging graphics</b>.
            When we started working with Tech Artists, I was also responsible for exposing data to them and enabling a lot 
            of the effects they wanted to do, which meant I had to create examples and verify the effects.
          </h1>    
          <div className='flex flex-col'>
            <div className='outline outline-Borders-50 overflow-hidden h-fit'>
            <VisibilityVideo src="PortfolioStuff/videos/Blomstertid/BlomsterGameplay6.webm" autoPlay loop>

            </VisibilityVideo>
          </div>
          <h1 className='font-pixel text-SecondaryText-50 text-[clamp(0.5rem,2.2vw,1.0rem)] py-5'>
            <b>Boids:</b> Above you can also see an example of boids that I worked on. (Butterflies & Seagulls)
            I created a system where you could add normal boid behaviours like Alignment, Separation etc. Then the 
            Tech Artists in my group created these and some fishes too. Unfortunately, they mostly just used Random-dir 
            behaviours since they had other things to fix.
          </h1>   
          </div>
          <div className='outline outline-Borders-50 overflow-hidden h-fit'>
            <VisibilityVideo src="PortfolioStuff/videos/TGAOther/SchoolGameplay3.webm"
            autoPlay loop>

            </VisibilityVideo>
          </div>
          <h1 className='font-pixel text-SecondaryText-50 text-[clamp(0.6rem,2.5vw,1.1rem)] py-5'>
            <b>Shadows:</b> We had a requirement from the school to implement shadows in our second game, which was 
            a responsibility I took on. <br></br><br></br>
            We had resources to research and help us which made it a bit more easy. I started with implementing 
            shadows from our directional light. The way I did it was by treating <b>lights as 'cameras' and rendering from that 
            'camera' to store depth in a texture.</b> When rendering models, I use view / object / dir-light matrices etc. to 
            transform the depth to be relative to the directional light. Then sampling the shadow map with the transformed depth to 
            decide if it's in a shadow or not.
            <br></br><br></br>
            Next I implemented shadows on point-lights using a <b>cube shadow map</b>. The idea is to have a 'camera' in 
            each direction (up, down, left, right, forward, backwards). Meaning you have six shadow maps per light, and then 
            convert your pixels to the correct one when sampling shadows. <br></br><br></br>
            Unfortunately, I have no access to the source code anymore and it's hard to remember each step but I have a feeling
            that this was when I converted the rendering to be <b>Deferred as it would make it easier to go through the lights one 
            by one at the end</b> instead of looping over the lights for each model.
          </h1>  
          <h1 className='font-pixel text-SecondaryText-50 text-[clamp(0.6rem,2.5vw,1.1rem)] py-5'>
            <b>Head Turning:</b> On the right, you can see a simple component I created that makes the player look at 
            NPCs. I also created one for NPCs to look at the player, but we apparently didn't end up using it.
            <br></br><br></br>
            It is run after our animations-components to make sure they alter the bone matrices after the animation does.
            Then I use a distance check to see if we're close enough, and a dot check to make sure the player is looking
            somewhat in the correct direction. Otherwise, the head would turn 180 degrees and I didn't feel like terrifying 
            the players.<br></br><br></br>
            The component either looks for a bone named 'Head', or lets you select which bone(s) are affected, and
            simply rotates the matrix of that bone before it is sent to the shader. 
          </h1>  
          <div className='outline outline-Borders-50 overflow-hidden h-fit'>
            <VisibilityVideo src="PortfolioStuff/videos/Blomstertid/BlomsterHeadTurn.webm"
            autoPlay loop muted>

            </VisibilityVideo>
          </div>  
        </div>
        {/* Gameplay */}
        <CategoryBar title={categories[0].title} fillPercentage={0.41} icon={categories[0].icon} color={categories[0].color} isActive={true}/>
        <div className='grid grid-cols-2 h-fit gap-4'>
          <h1 className='font-pixel text-SecondaryText-50 text-[clamp(0.6rem,2.5vw,1.1rem)] py-5'>
            <b>State Machine:</b> The player is a state machine with different states for Jumping, Idle, Moving and interacting.
            The positive thing about this one, is that we reused it from the previous game, showing that it was reusable and easy to port.
            <br></br><br></br>
            This allowed us to get the player working almost straight away which made it easier for the designers to get started with 
            establishing metrics and just to deliver something quickly.
            <br></br><br></br>
            <b>Camera System:</b> The other most important part of the player, is the Camera system that I made for a previous game 
            as well. <br></br><br></br>
            It is very dynamic and something that I reuse for basically all my 3D projects, and <b>you can see similar systems 
            in almost any third-person game</b> out there. <br></br><br></br>
            The basis is a class that moves a camera, using values from one or more 'Camera Rigs', that <b>I call a Camera Rig set</b>. 
            These rigs are defined for a certain pitch value, and provides data like radius, offset, angle restrains and anything else.
            When you sample the rigs, you use the pitch from the main class to sample the two closest rigs and blend between them,
            this allows smooth transitions.
            <br></br><br></br>
            Another important feature was 
            the ability to change & transition between Camera Rig sets. We used this <b>to define a Camera Rig set for each 
            player state, allowing the camera to behave differently depending on what you're doing.</b> Theres a better example of 
            this in the video on the right, from our previous game 'School Raider'.
          </h1>    
          <div className='flex flex-col'>
            <div className='outline outline-Borders-50 overflow-hidden h-fit'>
            <VisibilityVideo src="PortfolioStuff/videos/Blomstertid/BlomsterGameplay5.webm"
            autoPlay loop>

            </VisibilityVideo>
          </div>
          <div className='outline outline-Borders-50 overflow-hidden h-fit'>
            <VisibilityVideo src="PortfolioStuff/videos/TGAOther/SchoolCamera.webm"
            autoPlay loop muted>

            </VisibilityVideo>
          </div>
          </div>
          <div className='outline outline-Borders-50 overflow-hidden h-fit'>
            <VisibilityVideo src="PortfolioStuff/videos/Blomstertid/BlomsterGameplay2.webm"
            autoPlay loop muted>

            </VisibilityVideo>
          </div>
          <h1 className='font-pixel text-SecondaryText-50 text-[clamp(0.6rem,2.5vw,1.1rem)] py-5'>
            <b>Visual Scripting:</b> Something worth to mention is that we offloaded a lot of gameplay logic into our
            visual scripting tool. Then we made simple components that allowed those scripts to be triggered on collision,
            on dialogues etc. <br></br><br></br>
            So during these projects I <b>became comfortable with implementing nodes for visual scripting and 
            implementing general functionality.</b> In previous projects, I would implement enemies from scratch to final version,
            whereas now I created the building blocks used to create the final implementations. I know this is more common in larger
            productions and I am comfortable with doing that and creating examples for the designers to understand how to use them etc.
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

export default Blomstertid
