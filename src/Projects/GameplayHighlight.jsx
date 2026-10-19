import React from 'react'
import VisibilityVideo from "../ReusableComponents/VisibilityVideo"
import MediaCrossfade from "../ReusableComponents/MediaCrossfade"

const GameplayHighlight = () => {
  return (
    <div>
      <div className='px-8 py-3'>


        <div className="items-center flex justify-center">
          <div className="items-center flex justify-center w-1/2">
            <h1 className='font-alfena text-SecondaryText-50 text-[clamp(1.0rem,3.0vw,1.5rem)] py-5'>
              Here's an example of how I implement more complex player & enemy mechanics:
            </h1>
          </div>
        </div>



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
        </div>


        <div className="items-center flex justify-center">
          <div className="items-center flex justify-center w-1/2">
            <h1 className='font-alfena text-SecondaryText-50 text-[clamp(1.0rem,3.0vw,1.5rem)] py-5'>
              I've also done many simple controllers with state machines and similar, like in 
              this example:
            </h1>
          </div>
        </div>


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
        </div>


        <div className="items-center flex justify-center">
          <div className="items-center flex justify-center w-1/2">
            <h1 className='font-alfena text-SecondaryText-50 text-[clamp(1.0rem,3.0vw,1.5rem)] py-5'>
              In this next game, the gameplay was more focused on world-events which needed a different approach:
            </h1>
          </div>
        </div>


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
        </div>


        <div className="items-center flex justify-center">
          <div className="items-center flex justify-center w-1/2">
            <h1 className='font-alfena text-SecondaryText-50 text-[clamp(1.0rem,3.0vw,1.5rem)] py-5'>
              Tower & Enemy Implementation in a Tower-defense:
            </h1>
          </div>
        </div>


        <div className='grid grid-cols-2 h-fit gap-4'>
        <h1 className='font-pixel text-SecondaryText-50 text-[clamp(0.6rem,2.5vw,1.1rem)] py-5'>
            <b>Towers & Enemies:</b> Enemies are a simple class that uses a provided <b>'RunnerType' to set its health, visuals, speed, spawnOnDeath and potential behavior</b>. 
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
            I would say that even though it is a couple of steps and I am not fully happy with it, 
            I still manage to <b>create new towers in approximately one or two days,</b> depending on complexity. (Only code implementation)
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
          </div>
        </div>


        <div className="items-center flex justify-center">
          <div className="items-center flex justify-center w-1/2">
            <h1 className='font-alfena text-SecondaryText-50 text-[clamp(1.0rem,3.0vw,1.5rem)] py-5'>
              I have worked on some games with networking and started thinking about systems
              from a networking perspective:
            </h1>
          </div>
        </div>


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
        </div>




        <div className="items-center flex justify-center">
          <div className="items-center flex justify-center w-1/2">
            <h1 className='font-alfena text-SecondaryText-50 text-[clamp(1.0rem,3.0vw,1.5rem)] py-5'>
              Here's an example of how I implemented saving progression in a large world 
              with 100s of npcs, items and interactions:
            </h1>
          </div>
        </div>


        <div className='grid grid-cols-2 h-fit gap-4'>
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
        </div>


        
        

        <div className="items-center flex justify-center">
          <div className="items-center flex justify-center w-1/2">
            <h1 className='font-alfena text-SecondaryText-50 text-[clamp(1.0rem,3.0vw,1.5rem)] py-5'>
              Here's an example of live tweaking, which I try to support with everything I make:
            </h1>
          </div>
        </div>

        <div className='grid grid-cols-2 h-fit gap-4'>
        <h1 className='font-pixel text-SecondaryText-50 text-[clamp(0.6rem,2.5vw,1.1rem)] py-5'>
            <b>Live tweaking:</b> I made sure that basically every part of the gameplay was <b>tweakable live during
            gameplay.</b> This made it so much more easy to balance values, but also to debug features. You can see an example 
            of this on a Tower on the right where I change fire-rate, range and attack styles. It also works on enemies / 
            projectiles / waves (basically everything).
            <br></br><br></br>
            Some of these were automatic because of my design decisions on the systems with reading waves/enemies/projectiles when 
            they spawn, and the Towers were more effort as I decided to make their Init separated into one for 'one time' setup and one 
            for 'value-changes'. Then I use the 'value-changes' Init at start, when upgrading and when tweaking.
          </h1>     
          <div className='outline outline-Borders-50 overflow-hidden h-fit'>
            <VisibilityVideo src="PortfolioStuff/videos/TonkaTD/tonkaLiveTweakingReal.webm"
            autoPlay loop muted>

            </VisibilityVideo>
          </div>  
        </div>



        
      </div>
    </div>
  )
}

export default GameplayHighlight
