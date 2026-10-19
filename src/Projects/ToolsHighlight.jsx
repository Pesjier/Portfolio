import React from 'react'
import VisibilityVideo from "../ReusableComponents/VisibilityVideo"
import MediaCrossfade from "../ReusableComponents/MediaCrossfade"

const ToolsHighlight = () => {
  return (
    <div>
      <div className='px-8 py-3'>


        <div className="items-center flex justify-center">
          <div className="items-center flex justify-center w-1/2">
            <h1 className='font-alfena text-SecondaryText-50 text-[clamp(1.0rem,3.0vw,1.5rem)] py-5'>
              In my last project, a Tower-Defense, I created a nice Wave Creation tool:
              <br></br>(And some others)
            </h1>
          </div>
        </div>


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
        </div>


        <div className="items-center flex justify-center">
          <div className="items-center flex justify-center w-1/2">
            <h1 className='font-alfena text-SecondaryText-50 text-[clamp(1.0rem,3.0vw,1.5rem)] py-5'>
              Unfortunately, my main experience is from a custom-engine I worked on at TGA, which I 
              don't have access to. <br></br>
              But here's some examples of what I made:
            </h1>
          </div>
        </div>


        <div className='grid grid-cols-2 h-fit gap-4'>
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
        </div>


        <div className="items-center flex justify-center">
          <div className="items-center flex justify-center w-1/2">
            <h1 className='font-alfena text-SecondaryText-50 text-[clamp(1.0rem,3.0vw,1.5rem)] py-5'>
              Usually, I also make some other smaller tools like this console that we used to debug networking etc:
            </h1>
          </div>
        </div>


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
    </div>
  )
}

export default ToolsHighlight
