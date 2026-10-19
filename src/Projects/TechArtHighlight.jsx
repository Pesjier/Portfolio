import React from 'react'
import VisibilityVideo from "../ReusableComponents/VisibilityVideo"
import MediaCrossfade from "../ReusableComponents/MediaCrossfade"

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

const TechArtHighlight = () => {
  return (
    <div>
      <div className='px-8 py-3'>

        <div className="items-center flex justify-center">
          <div className="items-center flex justify-center w-1/2">
            <h1 className='font-alfena text-SecondaryText-50 text-[clamp(1.0rem,3.0vw,1.5rem)] py-5'>
              I have recently spent some time learning about things like Decals, 3D particle making etc.
              Here are my favorite results:
            </h1>
          </div>
        </div>


        <div className='grid grid-cols-2 h-fit gap-4'>
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
            To the left, is the improved shield (a bit exaggerated).
          </h1>
          </div>
          <div className='grid grid-cols-2 h-fit gap-4'>
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
            <VisibilityVideo src="PortfolioStuff/videos/TAPractice/RandomEffectsDark.webm"
            autoPlay loop muted>
            </VisibilityVideo>
          </div>
        </div>


        <div className="items-center flex justify-center">
          <div className="items-center flex justify-center w-1/2">
            <h1 className='font-alfena text-SecondaryText-50 text-[clamp(1.0rem,3.0vw,1.5rem)] py-5'>
              I also recently spent a lot of time implementing Animated-Ragdolls for a physics-game:
            </h1>
          </div>
        </div>


        <div className='grid grid-cols-2 h-fit gap-4'>
          <h1 className='font-pixel text-SecondaryText-50 text-[clamp(0.6rem,2.5vw,1.1rem)] py-5'>
            <b>Animated Ragdoll:</b> The biggest thing I worked on in this game was an Animated Ragdoll script for more fun physics interactions!
            <br></br><br></br>
            Almost the most difficult part was to setup the ragdoll that I needed to apply forces to. It took a lot 
            of <b>trial & error and research</b> but what worked the best was a mix of hinge joints for the knees/hands/feet and cone joints 
            for the head and arms etc.
            <br></br><br></br>
            Then I use another skeleton that runs the animations (the red outline you can see in some clips). The next 
            step is to apply forces and torques to the ragdoll bones to <b>move towards the pose from the animation-skeleton</b>. 
            I found that most seem to use a combo of dampening and stiffness, making the movement more smooth.
            <br></br><br></br>
            At first I used this in combination with moving the animation-skeleton and using its world space to move the 
            ragdoll after the Player. But this caused some issues with the physics not affecting the player naturally, since
            the player was just a capsule walking around with a ragdoll following it.<br></br> <b>(Which is probably good enough for most games!)</b>
          </h1>   
          <div className='outline outline-Borders-50 overflow-hidden h-fit'>
            <img src="PortfolioStuff/img/Explanations/trainslopMainscript.webp">

            </img>
          </div>
          <div className='flex flex-col'>
            <div className='col-span-1 outline outline-Borders-50 overflow-hidden h-fit'>
            <VisibilityVideo src="PortfolioStuff/videos/TrainFriendslop/slopAnimatedRagdoll.webm"
            autoPlay loop muted>
            </VisibilityVideo>  
            </div> 
            <div className='col-span-1 outline outline-Borders-50 overflow-hidden h-fit'>
            <VisibilityVideo src="PortfolioStuff/videos/TrainFriendslop/SlopGameplay1.webm"
            autoPlay loop muted>
            </VisibilityVideo>  
            </div> 
          </div>
          <h1 className='font-pixel text-SecondaryText-50 text-[clamp(0.6rem,2.5vw,1.1rem)] py-5'>
            The solution to more natural physics interactions like in the clips to the left, was to change 
            the player movement to affect the root bone of my ragdoll, and then <b>not moving the root towards
            the animation position</b>. This also required some force keeping the root upright and in the correct 
            orientation, otherwise the character would usually fall over.
            <br></br><br></br>
            Once I was happy, I added states to the controller, making it easy to change between <b>ragdoll/full animation/animated ragdoll</b>.
            Taking it a step further, I created a script you could add to bones if you wanted, that 
            allowed <b>override values for the different states</b>, or for ALL of them.
            <br></br><br></br>
            The states could be used for different player states, like being in vehicles or falling having a different
            ragdoll behaviour compared to walking or idling. The individual bone-scripts can then be modified to make individual 
            bones behave differently in those states. For example, you'd probably want feet to follow the animation more when walking.
            <br></br> <br></br>
            The global override on individual bones can be set more dynamically through gameplay, like making limbs 
            behave differently when damaged.
            <br></br><br></br>
            In the example below, there are before/after examples of setting the left arm to ragdoll and changing 
            some stiffness/dampening.
          </h1>  
          <div className='col-span-1 outline outline-Borders-50 overflow-hidden h-fit'>
            <VisibilityVideo src="PortfolioStuff/videos/TrainFriendslop/slopBeforeAfter.webm"
            autoPlay loop muted>
          </VisibilityVideo>  
          </div> 
          <div className='col-span-1 outline outline-Borders-50 overflow-hidden h-fit'>
            <VisibilityVideo src="PortfolioStuff/videos/TrainFriendslop/slopBeforeAfter2.webm"
            autoPlay loop muted>
          </VisibilityVideo>  
          </div> 
        </div>


        

        <div className="items-center flex justify-center">
          <div className="items-center flex justify-center w-1/2">
            <h1 className='font-alfena text-SecondaryText-50 text-[clamp(1.0rem,3.0vw,1.5rem)] py-5'>
              Some of my first effects I liked were these unique death / status effects depending on 
              incoming damage:
            </h1>
          </div>
        </div>


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
        </div>

        <div className="items-center flex justify-center">
          <div className="items-center flex justify-center w-1/2">
            <h1 className='font-alfena text-SecondaryText-50 text-[clamp(1.0rem,3.0vw,1.5rem)] py-5'>
              One of my strengths, is that I have implemented my own Rendering-Pipeline in C++ with DirectX11:
            </h1>
          </div>
        </div>

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
            <VisibilityVideo src="PortfolioStuff/videos/Blomstertid/BlomsterHeadTurn.webm"
            autoPlay loop muted>

            </VisibilityVideo>
          </div>  

          <h1 className='font-pixel text-SecondaryText-50 text-[clamp(0.6rem,2.5vw,1.1rem)] py-5'>
            I also worked on Shadows and other rendering stuff. This all gave me great understanding 
            of how rendering works which is really useful for things like Shader effects.
          </h1> 
          </div>
          </div>

          <div className="items-center flex justify-center">
          <div className="items-center flex justify-center w-1/2">
            <h1 className='font-alfena text-SecondaryText-50 text-[clamp(1.0rem,3.0vw,1.5rem)] py-5'>
              I also love anything Procedural, like this 'Living-Hedge':
            </h1>
          </div>
        </div>

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
            from the Tower, keeping the <b>visuals separate from the gameplay.</b>
          </h1>
          <div className='outline outline-Borders-50 overflow-hidden h-fit'>
            <VisibilityVideo src="PortfolioStuff/videos/TonkaTD/TonkaGameplay1.webm"
            autoPlay loop>

            </VisibilityVideo>
          </div>
          </div>

      </div>
    </div>
  )
}

export default TechArtHighlight
