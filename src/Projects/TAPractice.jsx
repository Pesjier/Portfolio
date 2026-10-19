import React, {useRef, useState} from 'react'
import MediaCrossfade from '../ReusableComponents/MediaCrossfade'
import ProjectSummary from '../ReusableComponents/ProjectSummary'
import Tooltip from '../ReusableComponents/Tooltip'
import CategoryBar from "../ReusableComponents/CategoryBar"
import {categories} from "../ReusableComponents/CategoriesData"
import VisibilityVideo from '../ReusableComponents/VisibilityVideo'

import {TAProjectMedia} from "../ReusableComponents/MediaLists"

const DecalMedia = [
  {
    src:"PortfolioStuff/videos/TAPractice/Decal1.webm"
  },
    {
    src:"PortfolioStuff/videos/TAPractice/Decal2.webm"
  },
    {
    src:"PortfolioStuff/videos/TAPractice/Decal3.webm"
  },
    {
    src:"PortfolioStuff/videos/TAPractice/Decal4.webm"
  },
    {
    src:"PortfolioStuff/videos/TAPractice/Decal5.webm"
  },
    {
    src:"PortfolioStuff/videos/TAPractice/Decal6.webm"
  },
  {
    src:"PortfolioStuff/videos/TAPractice/Decal7.webm"
  },
]

const MushroomMedia = [
  {
    src:"PortfolioStuff/videos/TAPractice/MushroomHeal.webm"
  },
    {
    src:"PortfolioStuff/videos/TAPractice/MushroomShield.webm"
  },
    {
    src:"PortfolioStuff/videos/TAPractice/MushroomNoise.webm"
  },
]

const ChangesMedia = [
  {
    src:"PortfolioStuff/videos/TAPractice/LinesSpeed.webm"
  },
    {
    src:"PortfolioStuff/videos/TAPractice/TargetingChanges.webm"
  },
]

const DecalBAMedia = [
  {
    src:"PortfolioStuff/videos/TAPractice/DecalBefore.webm"
  },
    {
    src:"PortfolioStuff/videos/TAPractice/DecalAfter.webm"
  },
]

const RandomEffectsMedia = [
  {
    src:"PortfolioStuff/videos/TAPractice/Sphere.webm"
  },
    {
    src:"PortfolioStuff/videos/TAPractice/Levelup.webm"
  },
      {
    src:"PortfolioStuff/videos/TAPractice/Pentagram.webm"
  },
      {
    src:"PortfolioStuff/videos/TAPractice/FireThing.webm"
  },
]


const TAPractice = () => {
  const iconsTooltip = useRef(null);
  const [hoveredIconText, setHoveredIconText] = useState("uhh");

  return (
    <div>
      <div className='items-center justify-center flex py-5 px-5'>
        <div className='w-full h-fit'>
          <ProjectSummary title="Effects Practice" duration="1 week spare time" groupSize="Solo" genre="Practice"
            experiences={["Decals", "3D Particles", "Unity URP (Scriptable Renderer / Pass)"]}
            lessons={["Take more time to just learn new techniques and tricks in general instead of just when it is needed."]}
            tools={[0, 1, 23]}
            preview={<div id="taprac" className='bg-DarkArea-50 size-full overflow-hidden outline outline-Borders-50'><MediaCrossfade media={TAProjectMedia} scaling={1.0}></MediaCrossfade></div>}
            iconsTooltip={iconsTooltip}
            setHoveredIconText={setHoveredIconText}
            titleLink="">

            </ProjectSummary>
        </div>     
      </div>

      <div className='px-8 py-3'>

        <h1 className='font-pixel text-SecondaryText-50 text-[clamp(0.6rem,2.5vw,1.1rem)] py-5'>
          For this project, I used a cute (but evil) Mushroom I found 
          <a href='https://sketchfab.com/3d-models/evil-mushroom-a39995115d7b4db3a214147b44422039' target='_blank' rel="noopener noreferrer">
          <b> here</b></a>
        </h1>

        {/* Content underneath here */}
        {/* Tech Art */}
        <CategoryBar title={categories[2].title} fillPercentage={0.82} icon={categories[2].icon} color={categories[2].color} isActive={true}/>
        <div className='grid grid-cols-2 h-fit gap-4'>
          <h1 className='font-pixel text-SecondaryText-50 text-[clamp(0.6rem,2.5vw,1.1rem)] py-5'>
            <b>Decals (1 day):</b> I have always wondered how these decals work in games like World of Warcraft, where
            they stretch over geometry, so I decided to learn about it.
            <br></br><br></br>
            The steps are:<br></br>
            - <b>Calculate world position.</b> Camera linear depth * farplane distance = world depth, then 
            use the direction from the camera to the current pixel's world position and multiply by world depth.<br></br>
            - <b>Transform to object space.</b><br></br>
            - <b>Clip pixels outside object.</b> We have a standard cube, so X/Z coordinates outside (-0.5, 0.5) are not
            'inside' the object.<br></br>
            - <b>Add (0.5, 0.5).</b> This creates 0-1 UV.<br></br>
            - <b>Use UV for sampling or whatever.</b><br></br>
          </h1>    
          <div className='outline outline-Borders-50 overflow-hidden'>
            <img src="PortfolioStuff/img/Explanations/DecalReference.webp">
            </img>
          </div>
          <div className='outline outline-Borders-50 overflow-hidden h-[40dvh]'>
            <MediaCrossfade media={DecalMedia} scaling={1.0}/>
          </div>
          <h1 className='font-pixel text-SecondaryText-50 text-[clamp(0.6rem,2.5vw,1.1rem)] py-5'>
            The final step was to address a slight curve in the decal towards the edges of the screen. 
            This was because all the matrix maths end up with a more 'flat' depth calculation than what seems natural.
            You can look at the great image explanation from the tutorial I followed below, and as you can see, 
            we need to add more depth along the edges and this could actually be done by dividing the world direction
            with the dot of the camera's forward and the world direction.
            <br></br><br></br>
            On the left here you can <b>see each step of the way</b>. Although I could've just used Unity's own
            shaders, I first wanted to implement it myself.
            <br></br><br></br>
            This would have to be improved for a real implementation, and you could spend some time playing with the normals
            to stretch the decal better along objects. I also feel like deferred decals would be much more superior as changing
            the buffers would be very easy.
          </h1>  
          <div className='outline outline-Borders-50 overflow-hidden'>
            <img src="PortfolioStuff/img/Explanations/DecalDistanceExplanation.png">
            </img>
          </div>
          <div className='outline outline-Borders-50 overflow-hidden h-[40dvh]'>
            <MediaCrossfade media={DecalBAMedia} scaling={1.0}/>
          </div>
          <h1 className='font-pixel text-SecondaryText-50 text-[clamp(0.6rem,2.5vw,1.1rem)] py-5'>
            <b>Shield & Model Hits (1 day):</b> One of the purposes of this practice was to recreate stuff from 
            games I've played. (Not necessarily polished but the jist of them)
            <br></br><br></br>
            That included the Kig-yar shield from Halo, the reference on the right.
            <br></br><br></br>
            The shader is a combination of an <b>inner/outer ring of extra alpha, a cell/hexagonal grid pattern
            and sharp lines created from a noise based on the angle</b> from the center.
            I could then change the strength of each part and their size etc. They also move over time.
            <br></br><br></br>
            To improve on this, I would use more textures, both for defining where the rings/highlights were (for example 
            the indented sides could be better), but also to make the center and possibly other parts an actual texture as you 
            can see in the reference.
          </h1>  
          <div className='outline outline-Borders-50 overflow-hidden h-fit'>
            <img src="PortfolioStuff/img/Explanations/shieldReference.webp">
            </img>
          </div> 
          <div className='outline outline-Borders-50 overflow-hidden h-fit flex flex-col'>
            <VisibilityVideo src="PortfolioStuff/videos/TAPractice/Shield.webm"
            autoPlay loop muted>
            </VisibilityVideo>
            <VisibilityVideo src="PortfolioStuff/videos/TAPractice/MushroomImprovedShield.webm"
            autoPlay loop muted>
            </VisibilityVideo>
          </div>
          <h1 className='font-pixel text-SecondaryText-50 text-[clamp(0.6rem,2.5vw,1.1rem)] py-5'>
            Having a shield made me think of shooting them, and especially having a more dynamic reaction
            depending on where the shield was shot.
            <br></br><br></br>
            My idea was to send in the object position of the projectile hit, and <b>use the distance from the pixel to that hit position
            to spread our effect outwards</b> from the hit position. I used the object position to make sure the shield can 
            move like in the example on the left without affecting the effect.
            <br></br><br></br>
            It worked like I thought so I tried to <b>use noise to spread out differently</b>, and also tried to limit the distance it could move
            and <b>generate a cell grid texture to make it seem like a sci-fi body-shield</b>.
            <br></br><br></br>
            Actually, just as I wrote this, I got another idea to expand the position when drawing the hit-impact for the sci-fi shield.
            I tried it, and it looks better in my opinion! Just scaling up the positions didn't fit fully so <b>I used the normals instead, which 
            gave more of a feeling that it expanded 'around' the model.</b>
            <br></br><br></br>
            To the left, is the improved shield (a bit exaggerated) and below are the first examples.
          </h1>  
          <h1 className='font-pixel text-SecondaryText-50 text-[clamp(0.6rem,2.5vw,1.1rem)] py-5'>
            <b>Indicators (1 day):</b> I also spent a little time on creating some <b>targeting indicators.</b> (Below) They're all scaleable 
            and <b>sizes are relative to world space which is good when having different length or scales of indicators</b> but 
            still want the edges / arrow widths to remain the same size. The AOE is just a texture, but you could use the
            procedural one I created in the decal section to make it scaleable too.
            <br></br><br></br>
            Then I also made some quick indicators that could show incoming attacks from an enemy. (Below right) They're not 
            polished but I more or less just wanted to try doing it at all. And its all just one shader that you 
            can animate, once again with edge sizes relative to world space.
          </h1> 
          <div className='outline outline-Borders-50 overflow-hidden h-[40dvh]'>
            <MediaCrossfade media={MushroomMedia} scaling={1.0}/>
          </div>         
          <div className='outline outline-Borders-50 overflow-hidden'>
            <VisibilityVideo src="PortfolioStuff/videos/TAPractice/TargetingFirst.webm"
            autoPlay loop muted>
            </VisibilityVideo>
          </div>
          <div className='outline outline-Borders-50 overflow-hidden h-fit'>
            <VisibilityVideo src="PortfolioStuff/videos/TAPractice/ImpactCircles.webm"
            autoPlay loop muted>
            </VisibilityVideo>
          </div>
          <h1 className='font-pixel text-SecondaryText-50 text-[clamp(0.6rem,2.5vw,1.1rem)] py-5'>
            <b>3D Effects (2 days):</b> I saw some videos talking about 3D effects and how they use a bunch of different 
            textures to create a particle system with sub emitters etc, and decided to try it out. First I tried some 
            tutorials and then tried my own.
            <br></br><br></br>
            - <b>Pentagram</b>, by combining my previous shader for drawing lines and then a looping texture simulating 
            some smoke coming from the lines.<br></br>
            - <b>Level up</b>, here I didn't use a single shader, but a couple of textures and simple scaling / rotating. 
            It's a combination of a cylinder and a particle system.<br></br>
            - <b>Fire Cylinder</b>, similar to the Level up but with an added sphere with some looping textures. Then I created 
            a shader to create the sin-wave lines and applied that to another cylinder.<br></br>
            - <b>Shadow Orb</b>, I created an inital sphere that uses screen depth to only render things inside the sphere
            (similarly to the decals) and then distorts the image slightly and applies a filter. Then I have a noise overlay, 
            some particles etc.
            <br></br><br></br>
            These were fun to make and <b>I want to get better at creating textures for this, as they seem so powerful</b> compared to 
            trying to achieve it with shaders. I also started thinking about drawing back-sides of meshes more to make sure you 
            see the sin-lines for example.
          </h1>
          <div className='outline outline-Borders-50 overflow-hidden h-fit flex flex-col'>
            <div className='outline outline-Borders-50 overflow-hidden h-[40dvh]'>
            <MediaCrossfade media={RandomEffectsMedia} scaling={1.0}/>    
            </div>
            <VisibilityVideo src="PortfolioStuff/videos/TAPractice/PlayerCircleAndShield.webm"
            autoPlay loop muted>
            </VisibilityVideo>
          </div>
          <div className='outline outline-Borders-50 overflow-hidden flex flex-row w-full'>
            <img className="w-1/2" src="PortfolioStuff/img/Explanations/PriestBubble.webp">
            </img>
            <img className="w-1/2" src="PortfolioStuff/img/Explanations/GnomeCircle.webp">
            </img>
          </div>
          <h1 className='font-pixel text-SecondaryText-50 text-[clamp(0.6rem,2.5vw,1.1rem)] py-5'>
            I have also been playing too much WoW and noticed some things like the Priest-Bubble and unit-circle showing 
            facing direction (see left). I decided to just make sure I could recreate them. <br></br><br></br>
            The bubble was very straight forward, only drawing at a certain distance from 
            the center of a plane and adding noise depending on the angle.
            <br></br><br></br>
            The same goes for the unit-circle, which I simply draw as an edge with a fading center, then extend the edge 
            depending on the dot product of a 'Char-dir' and the current world-dir. Once again, I could probably do this by sampling another
            'arrow' texture instead.
          </h1>
          <h1 className='font-pixel text-SecondaryText-50 text-[clamp(0.6rem,2.5vw,1.1rem)] py-5'>
            <b>Easily Scaleable:</b> The targeting shaders were mostly math, which I usually prefer because 
            you can easily scale them and change/reuse them. I also made sure they took world-size into account,
            meaning <b>the edges/textures were the same size no matter the scale</b> of the object.
            <br></br><br></br>
            For example: The shader for the Pentagram + Decal lines are calculated by assigning how many points you
            want on a circle, then for each pixel <b>find the two closest points. Then you project the pixel onto the line 
              between the points</b> and check the distance to that projected point to determine if it should be drawn.
            <br></br><br></br>
            This also avoids using the angles, because that would make the edge wider the further away from the center it was.      
          </h1>
          <div className='outline outline-Borders-50 overflow-hidden h-[40dvh]'>
            <MediaCrossfade media={ChangesMedia} scaling={1.0}/>
          </div>          
          <div className='outline outline-Borders-50 overflow-hidden h-fit w-fit'>
            <img src="PortfolioStuff/img/Explanations/SeePlayerShader.webp">
            </img>
          </div> 
          <h1 className='font-pixel text-SecondaryText-50 text-[clamp(0.6rem,2.5vw,1.1rem)] py-5'>
            <b>Scriptable Renderer (2 days):</b> I spent two days learning about setting up scriptable renderers in Unity. My idea
            was to use it to render the player depth into one texture and the overlay models into another texture, and use 
            them in a composite pass that would always show the player & world through the overlay models. Sort of like on the left.
            <br></br><br></br>
            It sounded pretty straight forward, atleast if I would've done this in my own engine at TGA, but 
            <b>there always ended up being some problem.</b> Most likely, my injection points were a bit wrong, or I needed to 
            use a new depth texture or something else.
            <br></br><br></br>
            Atleast <b>I learned about how to setup basic Renderer features and creating intermediate textures between
            passes</b> etc which was good to learn. I will revisit this in a future game for sure.
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

export default TAPractice
