import React, {useRef, useState} from 'react'
import MediaCrossfade from '../ReusableComponents/MediaCrossfade'
import ProjectSummary from '../ReusableComponents/ProjectSummary'
import Tooltip from '../ReusableComponents/Tooltip'
import CategoryBar from "../ReusableComponents/CategoryBar"
import {categories} from "../ReusableComponents/CategoriesData"

import {slopMedia} from "../ReusableComponents/MediaLists"
import VisibilityVideo from '../ReusableComponents/VisibilityVideo'
const TrainFriendslop = () => {
  const iconsTooltip = useRef(null);
  const [hoveredIconText, setHoveredIconText] = useState("uhh");

  return (
    <div>
      <div className='items-center justify-center flex py-5 px-5'>
        <div className='w-full h-fit'>
          <ProjectSummary title="Train Friendslop" duration="1 month spare time" groupSize="3" genre="Friendslop"
            experiences={["Godot Development", "Networking systems", "Steamworks integration", "Setting up Animated Ragdoll"]}
            lessons={["Think about systems from a network perspective", "Ragdolls take a lot of effort to setup"]}
            tools={[4, 6, 16, 20, 23, 28]}
            preview={<div className='bg-DarkArea-50 size-full overflow-hidden outline outline-Borders-50'><MediaCrossfade media={slopMedia} scaling={1.0}></MediaCrossfade></div>}
            iconsTooltip={iconsTooltip}
            setHoveredIconText={setHoveredIconText}>

            </ProjectSummary>
        </div>     
      </div>

      <div className='px-8 py-3'>
        {/* Content underneath here */}
        {/* Gameplay */}
        <CategoryBar title={categories[0].title} fillPercentage={0.63} icon={categories[0].icon} color={categories[0].color} isActive={true}/>
        <div className='grid grid-cols-2 h-fit gap-4'>
          <div className='outline outline-Borders-50 overflow-hidden h-fit'>
            <img src="PortfolioStuff/img/Explanations/slopControllerDiagram.webp">

            </img>
          </div>
          <h1 className='font-pixel text-SecondaryText-50 text-[clamp(0.6rem,2.5vw,1.1rem)] py-5'>
            <b>Network Controller Slots:</b> The controller system for this game was a way for me to help our team <b>think less about netcode when developing.</b>
            <br></br><br></br>
            Each client has a local controller that sends input to whatever object they are currently controlling. It can be 
            something in the lobby, a player character, seats on a vehicle, or even local-only stuff like a death-cam or free-cam. Then theres 
            a <b>Controller Slot system that runs on the server</b> and tracks which controller has control on which object. 
            Controller slots are opened whenever something tries to control something, <b>so no setup is required.</b>
            <br></br><br></br>
            The individual objects then implement things like "OnControllerInput", "OnControllerUpdate" instead of the normal
            Input/Update functions you would implement, making them only run on the client where they are controlled. Or only run on
            the server when an AI controller controls enemies. The implementations are therefore indistinguishable from "single-player" code.
            <br></br>(For the most part c:)
          </h1>   
          <h1 className='font-pixel text-SecondaryText-50 text-[clamp(0.6rem,2.5vw,1.1rem)] py-5'>
            Imagine you have a situation where a player walks around with their Character, interacts with 'Aircraft controls' and gains access
            to controlling the Aircraft. From that Aircraft, they can spawn a Drone which lets the player fly away
            and scout enemies whilst the Aircraft hovers. 
            <br></br><br></br>
            Then, an enemy destroys the Aircraft. This releases control of the Aircraft, and using the Player controller stack, 
            it also releases everything 'above' the Aircraft, which is the Drone in this case, and then returns to the Character.
            <br></br><br></br>
            Now imagine another scenario, where players or maybe an enemy can mind-control others.
            We don't want to remove the original controller, instead we have a stack of controllers on each object. 
            When the top controller (the mind controller) releases the object, it will return control to the top of the stack (original player).
          </h1>   
          <div className='outline outline-Borders-50 overflow-hidden h-fit'>
            <img src="PortfolioStuff/img/Explanations/slopControllerStack.webp">

            </img>
          </div>
          <div className='outline outline-Borders-50 overflow-hidden h-fit'>
            <VisibilityVideo src="PortfolioStuff/videos/TrainFriendslop/SlopGameplay3.webm"
            autoPlay loop>

          </VisibilityVideo>  
          </div>
          <h1 className='font-pixel text-SecondaryText-50 text-[clamp(0.6rem,2.5vw,1.1rem)] py-5'>
            In this example, you can see the player interacting with the train-coupler, which does a few things:<br></br>
            - <b>Requests Control of the cart. Assigning the controller to the slot and preventing anyone else from interacting with it. (If successful)</b><br></br>
            - <b>Player controller adds new object to the top of its stack, releasing control of the player character temporarily.</b><br></br>
            - <b>Player controller takes control of the cart and sends input to it now.</b>
            <br></br> <br></br>
          </h1> 
          <div className='outline outline-Borders-50 overflow-hidden h-fit'>
            <VisibilityVideo src="PortfolioStuff/videos/TrainFriendslop/SlopTool1.webm"
            autoPlay loop>
          </VisibilityVideo>  
          </div>
          <h1 className='font-pixel text-SecondaryText-50 text-[clamp(0.6rem,2.5vw,1.1rem)] py-5'>
            Here you can also see me using the console to take control of an enemy, stealing it away from the 
            current enemy controller on the server.
            <br></br><br></br>
            If I were to release the control of the enemy, the enemy controller would regain control because it is now
            the top of the stack for the enemy. Then the Player controller stack would try to regain control of the 
            player character because it would be the top of the Player controller stack.
          </h1> 
          <h1 className='font-pixel text-SecondaryText-50 text-[clamp(0.6rem,2.5vw,1.1rem)] py-5'>
            <b>Network Interactions:</b> On top of the basic networking lobby setup, I worked on some more specific systems too. 
            To the right you can see an example of a network system I worked on.<br></br><br></br>

            The problem was that carrying items were only smooth on the server-host, and a bit choppy on other clients.
            The solution was to let the server track who was carrying what, and <b>update the authority between clients.</b> <br></br><br></br>
            If only one player is holding an item, they have authority, and it is smooth for them. Then if another player 
            grabs it aswell, the server regains authority but it was still smooth because both players applies force, making your
            own force blend in despite the delay. The result was a <b>consitently smooth</b> experience when carrying items.
          </h1> 
          <div className='outline outline-Borders-50 overflow-hidden h-fit'>
            <img src="PortfolioStuff/img/Explanations/trainslopGrabbingExample.webp">
          </img>  
          </div>
          <div className='col-span-2 outline outline-Borders-50 overflow-hidden h-fit'>
            <VisibilityVideo src="PortfolioStuff/videos/TrainFriendslop/slopGrabbing.webm"
            autoPlay loop muted>
          </VisibilityVideo>  
          </div>
        </div>
        {/* Tech Art */}
        <CategoryBar title={categories[2].title} fillPercentage={0.6} icon={categories[2].icon} color={categories[2].color} isActive={true}/>
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
          <div className='col-span-1 outline outline-Borders-50 overflow-hidden h-fit'>
            <VisibilityVideo src="PortfolioStuff/videos/TrainFriendslop/SlopMulti1.webm"
            autoPlay loop muted>
          </VisibilityVideo>  
          </div> 
          <h1 className='font-pixel text-SecondaryText-50 text-[clamp(0.6rem,2.5vw,1.1rem)] py-5'>
            The system worked well for other models too, like this little crab thing I spent five second on in blender.
            I did however have to add a setting for which orientation the root sees as Up, since the crab-root and the gnome-root 
            do not point the same way in object space.
            <br></br><br></br>
            <b>Procedural Animations:</b> I spent some time trying to make the <b>crab animations procedurally generated.</b> 
            The main body has points around it where it 
            wants its legs to be. If the legs move too far away from the points, they update an IK target position to those points. 
            The target positions height is also shifted at the beginning of a step to make it look like the crab is lifting its legs.
            Then I change the distance depending on idle/moving state to make it look more natural. 
          </h1> 
          <h1 className='font-pixel text-SecondaryText-50 text-[clamp(0.6rem,2.5vw,1.1rem)] py-5'>
            Sometimes it looks good... and sometimes not. But I only spent a day or two on it. <br></br> <br></br>
            My plan was at first to make the limbs shootable, which is why they are a bit detached when the crab 
            is being lifted. Then on top of that, I think there is some more variation needed on the target positions,
            to make the limbs not move at the same time, but instead alternate. I also think the effect would look 
            better straight away with another limb on each side. (And with a higher poly and better skinned model of course)
            <br></br><br></br>
            Another fun thing would be an idle animation created by moving around the IK targets in intervals along with 
            a subtle head movement, making the crab take little steps in place and look around.
          </h1> 
          <div className='col-span-1 outline outline-Borders-50 overflow-hidden h-fit'>
            <VisibilityVideo src="PortfolioStuff/videos/TrainFriendslop/SlopGameplay2.webm"
            autoPlay loop muted>
          </VisibilityVideo>  
          </div> 
        </div>
        {/* Tools */}
        <CategoryBar title={categories[1].title} fillPercentage={0.55} icon={categories[1].icon} color={categories[1].color} isActive={true}/>
        <div className='grid grid-cols-2 h-fit gap-4'>
          <h1 className='font-pixel text-SecondaryText-50 text-[clamp(0.6rem,2.5vw,1.1rem)] py-5'>
            <b>Console:</b> The main tool I worked on was a console. We used it both
            for debugging like a normal console but also for <b>debugging between clients.</b><br></br><br></br>
            To set up commands, you need to provide an identifier (what you write to use the command) and then 
            a function. I also made it just assume a certain amount of arguments, but if I spent more time, I would've
            figured out how to match the exact argument types too.
          </h1>  
          <div className='outline outline-Borders-50 overflow-hidden h-fit'>
            <img src="PortfolioStuff/img/Explanations/trainslopConsole3.webp">

            </img>
          </div>
          <div className='row-span-1 col-span-1'>
            <div className='flex-col'>
              <div className='outline outline-Borders-50 overflow-hidden h-fit'>
            <img src="PortfolioStuff/img/Explanations/trainslopConsole1.webp">

            </img>
          </div>
          <div className='outline outline-Borders-50 overflow-hidden h-fit'>
            <img src="PortfolioStuff/img/Explanations/trainslopConsole2.webp">

            </img>
          </div>
            </div>
          </div>
          <h1 className='font-pixel text-SecondaryText-50 text-[clamp(0.6rem,2.5vw,1.1rem)] py-5'>
            Then when you input text into the console window, I start by cutting it up at each '\n' newline and processing 
            each line as its own command. This was to allow several commands to be input at once. (e.g. Copy paste)
            <br></br><br></br>
            After that, I split the line up by spaces, treating the first string as the identifier for the command.
            The rest of the strings were sent as an array to be used.<br></br><br></br> 
            Once again, if I had done it again, I would assert the strings could be parsed to the required argument types here
            and then send them as the correct types with an "other" Array as the last argument.
            Then you wouldn't need to do any parsing in the command functions.
          </h1> 
          <div className='col-span-2 outline outline-Borders-50 overflow-hidden h-fit'>
            <VisibilityVideo src="PortfolioStuff/videos/TrainFriendslop/SlopTool2.webm"
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

export default TrainFriendslop
