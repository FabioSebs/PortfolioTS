import React, {useState, useEffect} from 'react'
import ReactPlayer from 'react-player'
import '../styles/project.scss'
import { ResponsivePlayer } from './ReactPlayer'

const projects = {
    TradingBot : ["https://github.com/FabioSebs/TradingBotAI", "https://www.youtube.com/watch?v=ROJN_ZE_zZs"],
    DiscordBot : ["https://github.com/FabioSebs/DobiBot", "https://www.youtube.com/watch?v=Yp_aMeMFulE"],
    DataGolang : ["https://github.com/FabioSebs/Data-Visualization-Golang", "https://www.youtube.com/watch?v=46inEdCu0os"],
    Backend: ["https://github.com/FabioSebs/PortfolioWebsite", "https://www.youtube.com/watch?v=dmwOW15yAjk"],
    Django: ["https://github.com/FabioSebs/DjangoProject", "https://www.youtube.com/watch?v=Rqr-KqveZ3Y&t=17s"]
}




export default function Projects() {
    let [repo,setRepo] = useState(projects.TradingBot[0])
    let [url, setUrl] = useState(projects.TradingBot[1])
    let [resize, setResize] = useState(true)

    const handleClick = (repo) => {
        setRepo(repo)
    }

    //Renders When Url Changes
    useEffect(()=>{
        switch (repo) {
            case projects.TradingBot[0]: setUrl(projects.TradingBot[1])
                break;
            
            case projects.DiscordBot[0]: setUrl(projects.DiscordBot[1])
                break;
            
            case projects.DataGolang[0]: setUrl(projects.DataGolang[1])
                break;
            
            case projects.Backend[0]: setUrl(projects.Backend[1])
                break;
            
            case projects.Django[0]: setUrl(projects.Django[1])
                break;
                
            default:
                break;
        }
    }, [repo])

    // Renders the text based on width
    useEffect(()=>{

        const handleResize = () => {
            if (window.innerWidth <= 600) {
                setResize(true)
            }
            else {
                setResize(false)
            }
            console.log("This is from projects.tsx - ", resize)
        }

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener('resize',handleResize)
        }
    }, [])

    return (
        <section className="projects" id="projects">
            {/* Title + Repo */}
            <h1 className="projectsTitle">Github Repo</h1>
            <a href={repo} className="projectsRepo">{repo}</a>
            {/* Video Demo */}
            <div className="playerContainer">
                <ResponsivePlayer 
                    url={url}
                />
            </div>
            {/* Selections */}
            <div className="projectsCards">
                <span onClick={()=>{setRepo(projects.TradingBot[0])}}><h4>{resize ? "Trading" : "Trading Bot"}</h4></span>
                <span onClick={()=>{setRepo(projects.DiscordBot[0])}}><h4>{resize ? "Discord" : "Discord Bot"}</h4></span>
                <span onClick={()=>{setRepo(projects.DataGolang[0])}}><h4>{resize ? "Go Data" : "Go Data Visual"}</h4></span>
                <span onClick={()=>{setRepo(projects.Backend[0])}}><h4>{resize ? "API" : "REST API"}</h4></span>
                <span onClick={()=>{setRepo(projects.Django[0])}}><h4>Django</h4></span>
            </div>
        </section>
    )
}
