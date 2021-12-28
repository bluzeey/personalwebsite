import Head from 'next/head'
import ProjectCard from '../components/ProjectCard'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Projects from '../data/projects.json'
import {useState,useEffect} from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

function projects() {
    const [page, setPage]=useState(0)
    return (
        <div>
        <Head>
            <title>Portfolio</title>
            <link rel="icon" href="/devicon.png" />
        </Head>
        <div className="first-gradient-color min-h-screen">
            <Navbar/>
            <h1 className="text-5xl font-bold text-center p-5 text-transparent bg-clip-text second-gradient-color">My Projects</h1>
            <div className="grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-center items-center p-5">
                {page===1 ? 
                (Projects.slice(6,12).map(project=>(
                    <ProjectCard key={project.id} title={project.title} description={project.description} image={project.image} tags={project.tags}/>
                  ))):(Projects.slice(0,6).map(project=>(
                    <ProjectCard key={project.id} title={project.title} description={project.description} image={project.image} tags={project.tags}/>
                  )))}
            </div> 
            <div className="flex justify-center">
                <ChevronRightIcon className="h10 w-10" onClick={()=>setPage(1)}/>
                <ChevronLeftIcon className="h10 w-10" onClick={()=>setPage(0)}/>
            </div>      
        </div>
        <Footer/>
        </div>
    )
}

export default projects
