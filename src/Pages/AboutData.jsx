import { FaSyncAlt } from "react-icons/fa";
import { SiAseprite, SiAssemblyscript, SiAutodeskmaya, SiBlender, SiCmake, SiConfluence, SiCplusplus, SiFmod, SiGimp, SiGithub, SiGodotengine, SiGsap, SiJavascript, SiJenkins, SiJira, SiKrita, SiLinux, SiMysql, SiPerforce, SiPython, SiReact, SiSteamworks, SiSubversion, SiTailwindcss, SiUnity, SiUnrealengine } from "react-icons/si";
import { TbAssembly, TbBrandCSharp } from "react-icons/tb";
import { VscSymbolInterface } from "react-icons/vsc";
import CategoryBar from "../ReusableComponents/CategoryBar";
import { FaSchool } from 'react-icons/fa'
import { MdWork } from 'react-icons/md'

export const projects = [
    {
        type:"Game Jam",
        title:"Hoppa från femman",
        imgSrc:"PortfolioStuff/projectThumbnails/hoppaThumbnail.webp",
        distance:0.05,
        link: ""
    },
        {
        type:"School Project",
        title:"SblZ",
        imgSrc:"PortfolioStuff/projectThumbnails/sblzThumbnail.webp",
        distance:0.07,
        link: ""
    },
        {
        type:"School Project",
        title:"SblParty",
        imgSrc:"PortfolioStuff/projectThumbnails/sblpartyThumbnail.webp",
        distance:0.1,
        link: ""
    },
        {
        type:"School Project",
        title:"OneButtonGame",
        imgSrc:"PortfolioStuff/projectThumbnails/onebuttonThumbnail.webp",
        distance:0.12,
        link: ""
    },
        {
        type:"School Project",
        title:"SunSet",
        imgSrc:"PortfolioStuff/projectThumbnails/sunsetThumbnail.webp",
        distance:0.155,
        link: ""
    },
        {
        type:"Game Jam",
        title:"The G.A.M.E",
        imgSrc:"PortfolioStuff/projectThumbnails/gameThumbnail.webp",
        distance:0.17,
        link: "https://pesjier.itch.io/the-greatanswermakingenigma"
    },
        {
        type:"School Project",
        title:"RAD Game",
        imgSrc:"PortfolioStuff/projectThumbnails/radThumbnail.webp",
        distance:0.215,
        link: "https://www.youtube.com/watch?v=BXLWzX-OuZ4"
    },
        {
        type:"School Project",
        title:"Snitch",
        imgSrc:"PortfolioStuff/projectThumbnails/snitchThumbnail.webp",
        distance:0.235,
        link: "https://www.youtube.com/watch?v=tD8U4b9DK4Q"
    },
        {
        type:"School Project",
        title:"GoreCore",
        imgSrc:"PortfolioStuff/projectThumbnails/gorecoreThumbnail.webp",
        distance:0.26,
        link: "https://www.youtube.com/watch?v=EGOGyCXSA2A"
    },
        {
        type:"School Project",
        title:"Harry-Hopper",
        imgSrc:"PortfolioStuff/projectThumbnails/harryThumbnail.webp",
        distance:0.28,
        link: "https://www.youtube.com/watch?v=xoa9UesVI5k"
    },
        {
        type:"School Project",
        title:"Driftwood",
        imgSrc:"PortfolioStuff/projectThumbnails/driftwoodThumbnail.webp",
        distance:0.3,
        link: "https://www.youtube.com/watch?v=q4yFho5m7tg"
    },
        {
        type:"School Project",
        title:"Spite",
        imgSrc:"PortfolioStuff/projectThumbnails/spiteThumbnail.webp",
        distance:0.33,
        link: "https://ssugames.itch.io/spite-fracturedshards"
    },
        {
        type:"School Project",
        title:"School Raider",
        imgSrc:"PortfolioStuff/projectThumbnails/schoolThumbnail.webp",
        distance:0.35,
        link: "https://ssugames.itch.io/school-raider"
    },
        {
        type:"School Project",
        title:"Blomstertid",
        imgSrc:"PortfolioStuff/projectThumbnails/blomstertidThumbnail.webp",
        distance:0.38,
        link: "https://ssugames.itch.io/blomstertid"
    },
        {
        type:"Hobby Project",
        title:"Tower Survivor",
        imgSrc:"PortfolioStuff/projectThumbnails/towerThumbnail.webp",
        distance:0.47,
        link: ""
    },
        {
        type:"Game Jam",
        title:"Surviving The Deep",
        imgSrc:"PortfolioStuff/projectThumbnails/surviveThumbnail.webp",
        distance:0.53,
        link: "https://pesjier.itch.io/surviving-the-deep"
    },
        {
        type:"Game Jam",
        title:"16-Lines",
        imgSrc:"PortfolioStuff/projectThumbnails/16linesThumbnail.webp",
        distance:0.6,
        link: "https://pesjier.itch.io/16-lines"
    },
        {
        type:"Hobby Project",
        title:"Wizard Game",
        imgSrc:"PortfolioStuff/projectThumbnails/wizardThumbnail.webp",
        distance:0.7,
        link: ""
    },
        {
        type:"Game Jam",
        title:"Clean Escape",
        imgSrc:"PortfolioStuff/projectThumbnails/cleanescapeThumbnail.webp",
        distance:0.73,
        link: "https://pesjier.itch.io/clean-escape"
    },
        {
        type:"Hobby Project",
        title:"Barch Origins",
        imgSrc:"PortfolioStuff/projectThumbnails/barchThumbnail.webp",
        distance:0.78,
        link: "https://pesjier.itch.io/barch-origins"
    },   
        {
        type:"Game Jam",
        title:"Expand-GPT",
        imgSrc:"PortfolioStuff/projectThumbnails/expandThumbnail.webp",
        distance:0.83,
        link: "https://pesjier.itch.io/expand-gpt"
    },   
        {
        type:"Hobby Project",
        title:"TonkaTD",
        imgSrc:"PortfolioStuff/projectThumbnails/mobileThumbnail.webp",
        distance:0.86,
        link: "https://pesjier.itch.io/tonka-td"
    },
        {
        type:"Friend Project",
        title:"Friendslop",
        imgSrc:"PortfolioStuff/projectThumbnails/friendslopThumbnail.webp",
        distance:0.88,
        link: ""
    },
]

export const milestones = [
    {
        title:"So it begins..",
        description:"Started programming in C# and Unity during high-school.",
        distance:0.03,
        date:"2016"
    },
        {
        title:"LBS Game Awards",
        description:"Represented LBS Helsingborg at yearly game awards.",
        distance:0.08,
        date:"2017"
    },
    {
        title:"Project Diploma",
        description:"Awarded diploma for best game project at LBS.",
        distance:0.16,
        date:"2019"
    },
        {
        title:"The Game Assembly",
        description:"Started game programming at TGA.",
        distance:0.2,
        date:"2019"
    },
        {
        title:"Grab me a coffee!",
        description:"Internship through TGA at Dynasty Studios.",
        distance:0.4,
        date:"2022"
    },
        {
        title:"Pölse or something",
        description:"Associate Game Dev at Kiloo Games.",
        distance:0.5,
        date:"2023"
    },
        {
        title:"Well that didn't last long..",
        description:"Kiloo Games shuts down unexpectedly.",
        distance:0.55,
        date:"2023"
    },
    {
        title:"Progg-Art",
        description:"Took 3D Modelling courses and got more interested in Tech Art.",
        distance:0.65,
        date:"2024"
    },
        {
        title:"Study Break",
        description:"Started studying software engineering at BTH.",
        distance:0.8,
        date:"2024"
    },
        {
        title:"More serious hobby projects",
        description:"Developing projects to release instead of just for fun.",
        distance:0.85,
        date:"2025"
    },
        {
        title:"You hiring me..?",
        description:"Back looking for a job!",
        distance:0.9,
        date:"2027"
    },
]

export const toolsAndLanguages = [
    {
        title:"C#",
        icon:<TbBrandCSharp size={32}/>,
        distance:0.05,
    },
        {
        title:"Unity",
        icon:<SiUnity size={32}/>,
        distance:0.05,
    },
        {
        title:"Krita",
        icon:<SiKrita size={32}/>,
        distance:0.1,
    },
        {
        title:"FL Studio",
        icon:<img src="PortfolioStuff/icons/FLStudioIcon.webp" width={32} height={32}/>,
        distance:0.11,
    },
        {
        title:"Github",
        icon:<SiGithub size={32}/>,
        distance:0.15,
    },
        {
        title:"C++",
        icon:<SiCplusplus size={32}/>,
        distance:0.2,
    },            
        {
        title:"Agile/Scrum",
        icon:<FaSyncAlt size={32}/>,
        distance:0.2,
    },    
        {
        title:"SVN",
        icon:<SiSubversion size={32}/>,
        distance:0.21,
    },
        {
        title:"FMOD",
        icon:<SiFmod size={32}/>,
        distance:0.24,
    },
    {
        title:"Perforce",
        icon:<SiPerforce size={32}/>,
        distance:0.26,
    },
        {
        title:"PhysX",
        icon:<img src="PortfolioStuff/icons/physxIcon.webp" width={32} height={32}/>,
        distance:0.3,
    },
        {
        title:"HLSL",
        icon:<img src="PortfolioStuff/icons/Icon_HLSL.webp" width={32} height={32}/>,
        distance:0.3,
    },
    {
        title:"Assembly",
        icon:<TbAssembly size={32}/>,
        distance:0.32,
    },
            {
        title:"DirectX11",
        icon:<img src="PortfolioStuff/icons/directxIcon.webp" width={32} height={32}/>,
        distance:0.33,
    },
    {
        title:"Custom Engine: Eggine",
        icon:<img src="PortfolioStuff/icons/eggineIcon.webp" width={32} height={32}/>,
        distance:0.35,
    },
    {
        title:"CMake",
        icon:<SiCmake size={32}/>,
        distance:0.4,
    },

    {
        title:"Confluence",
        icon:<SiConfluence size={32}/>,
        distance:0.4,
    },
    {
        title:"Unreal",
        icon:<SiUnrealengine size={32}/>,
        distance:0.4,
    },
        {
        title:"Aesprite",
        icon:<SiAseprite size={32}/>,
        distance:0.49,
    },
        {
        title:"Jira",
        icon:<SiJira size={32}/>,
        distance:0.5,
    },  
        {
        title:"Steamworks SDK",
        icon:<SiSteamworks size={32}/>,
        distance:0.55,
    },
        {
        title:"Maya",
        icon:<SiAutodeskmaya size={32}/>,
        distance:0.65,
    },
        {
        title:"GIMP",
        icon:<SiGimp size={32}/>,
        distance:0.7,
    },
    {
        title:"Blender",
        icon:<SiBlender size={32}/>,
        distance:0.7,
    },
    {
        title:"Substance Painter",
        icon:<img src="PortfolioStuff/icons/substancePainerIcon.webp" width={32} height={32}/>,
        distance:0.75,
    },
        {
        title:"Python",
        icon:<SiPython size={32}/>,
        distance:0.8,
    },
        {
        title:"MySql",
        icon:<SiMysql size={32}/>,
        distance:0.83,
    },
    {
        title:"Linux",
        icon:<SiLinux size={32}/>,
        distance:0.83,
    },
    {
        title:"Godot",
        icon:<SiGodotengine size={32}/>,
        distance:0.86,
    },  
    {
        title:"Javascript",
        icon:<SiJavascript size={32}/>,
        distance:0.88,
    },
    {
        title:"React",
        icon:<SiReact size={32}/>,
        distance:0.88,
    },
    {
        title:"Tailwindcss",
        icon:<SiTailwindcss size={32}/>,
        distance:0.88,
    },
    {
        title:"GSAP",
        icon:<SiGsap size={32}/>,
        distance:0.88,
    },
]

const qualitiesData = [
  "Fast learner & Prototyper",
  "Great problem solver & Teammate",
  "Wide area of interest, can work on whatever is needed",
  "Passionate developer, cares about all parts of the project",
  "Puts the team first, prioritizes project progress",
  "Comfortable with extra responsibility",
]

const experienceData = [
  {
    icon:<FaSchool size={32} color="rgb(255,255,255)"/>,
    location:"The Game Assembly",
    title:"Game Programmer",
    timeSpan:"2019 - 2022"
  },
  {
    icon:<MdWork size={32} color="rgb(255,255,255)"/>,
    location:"Dynasty Studios",
    title:"Intern Programmer",
    timeSpan:"2022 - 2022"
  },
    {
    icon:<MdWork size={32} color="rgb(255,255,255)"/>,
    location:"Kiloo Games",
    title:"Associate Game Dev",
    timeSpan:"2023-2023"
  },
    {
    icon:<FaSchool size={32} color="rgb(255,255,255)"/>,
    location:"Blekinge Tekniska Högskola",
    title:"Software engineering",
    timeSpan:"2024 - Currently"
  },
]

export const Experience = () => {
    return (
        <div className="items-center text-left justify-center flex flex-col gap-5">
            <div>
                        <a> {/* INSERT CV LINK */}
                          <h1 className='font-adevas text-xl md:text-2xl lg:text-3xl text-MainText-50 underline'>
                          Experience:
                          </h1>
                        </a>
                      </div>
                      {experienceData.map((data, i) => 
                      {
                        return (<div className={`hover:scale-110 duration-150 ${i % 2 == 0 ? 'hover:rotate-3' : 'hover:-rotate-3'}`} key={i}>
                          <div className='flex-row flex items-center justify-center'>
                            {data.icon}
                            <h2 className='font-pixel text-MainText-50 text-base md:text-xl lg:text-2xl px-5'>
                              • {data.location}
                            </h2>
                          </div>
                          <h3 key={i} className='font-pixel text-SecondaryText-50 text-sm md:text-base lg:text-xl'>
                            {data.title} | {data.timeSpan}
                          </h3>
                        </div>)
                      })}
        </div>
    )
}

export const Skills = () => {
    return (<div className='items-center justify-center flex flex-col gap-5'>
        <div>
            <a> {/* INSERT CV LINK */}
              <h1 className='font-adevas text-3xl text-MainText-50 underline'>
              Skills:
              </h1>
            </a>
          </div>
          <CategoryBar title="Agile Teamwork" fillPercentage={0.92} color="rgb(255,255,54)" icon={<FaSyncAlt size={32} color='rgb(255,255,255)'/>}       
          isActive={true}/>
          <CategoryBar title="Unity" fillPercentage={0.85} color="rgb(54,255,255)" icon={<SiUnity size={32} color='rgb(255,255,255)'/>}
          isActive={true}/>
          <CategoryBar title="C#" fillPercentage={0.8} color="rgb(255,45,255)" icon={<TbBrandCSharp size={32} color='rgb(255,255,255)'/>}
          isActive={true}/>
          <CategoryBar title="C++" fillPercentage={0.75} color="rgb(210,80,255)" icon={<SiCplusplus size={32} color='rgb(255,255,255)'/>}
          isActive={true}/>
    </div>)
}

export const Qualities = () =>{ return(<div className="items-center justify-center flex flex-col text-left gap-5">
        <div>
            <a> {/* INSERT CV LINK */}
              <h1 className='font-adevas text-3xl text-MainText-50 underline'>
              Key Qualities:
              </h1>
            </a>
          </div>
          {qualitiesData.map((data, i) => 
          {
            return (<div key={i}>
              <h3 key={i} className={`font-pixel text-SecondaryText-50 text-xl hover:scale-110 duration-150 ${i % 2 == 0 ? 'hover:rotate-3' : 'hover:-rotate-3'}`}>
                • {data}
              </h3>
            </div>)
          })}
          
            <button className='w-[30%] h-[20%] bg-UIBackground-50 outline outline-Borders-50 hover:scale-110 duration-100'>
            {/* INSERT CV LINK */}
            <a href="PortfolioStuff/Jesper Lundkvist - CV.pdf" target="_blank" rel="noopener noreferrer">
            <h1 className='font-pixel text-SecondaryText-50 text-xl'>
              See CV!
            </h1>
            </a>
            </button>
          </div>)}

//This should probably be separate, 
// unique pages to be reused in mobile and 
// desktop versions
export const learnings = [
    {
        content: <Skills/>,
        distance:0.1,
    },
        {
        content: <Qualities/>,
        distance:0.45,
    },
    {
        content: <Experience/>,
        distance:0.94,
    }
]