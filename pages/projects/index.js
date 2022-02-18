import Head from 'next/head'
import ProjectCard from '../../components/ProjectCard'
import Footer from '../../components/Footer'
import dynamic from 'next/dynamic'
import English from '../../data/english.json';
import German from '../../data/german.json';
import {languageState} from '../../atom/languageAtom';
import {useRecoilState} from 'recoil';
import {useState,useEffect} from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const DynamicNavbar=dynamic(() => import('../../components/Navbar'),{ssr:false})

function projects() {
    const [page, setPage]=useState(0)
    const[language,setLanguage]=useRecoilState(languageState)
    const [currentLanguage,setCurrentLanguage]=useState({})
    useEffect(()=>{
        if(language){
          setCurrentLanguage(German)
        }else{
          setCurrentLanguage(English)
        }
    },[language])
    return (
        <div>
        <Head>
            <title>Portfolio</title>
            <link rel="icon" href="/devicon.png" />
        </Head>
        <div className="first-gradient-color min-h-screen">
            <DynamicNavbar/>
            <h1 className="text-5xl font-bold text-center p-5 text-transparent bg-clip-text second-gradient-color">My Projects</h1>
            <div className="grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-center items-center p-5">
                {page===1 ? 
                (currentLanguage?.Myprojects?.slice(6,12).map(project=>(
                    <ProjectCard key={project.id} id={project.id} title={project.title} description={project.description} image={project.image} tags={project.tags} code={project.code} live={project.live}/>
                  ))):(currentLanguage?.Myprojects?.slice(0,6).map(project=>(
                    <ProjectCard key={project.id} id={project.id} title={project.title} description={project.description} image={project.image} tags={project.tags} code={project.code} live={project.live}/>
                  )))}
            </div> 
            <div className="flex justify-center p-2">
                {page===0 ? (<ChevronRightIcon sx={{ fontSize: 40 }} className="h-10 w-10 rounded-full bg-white cursor-pointer" onClick={()=>setPage(1)}/>)
                :(<ChevronLeftIcon sx={{ fontSize: 40 }} className="h-10 w-10 rounded-full bg-white cursor-pointer" onClick={()=>setPage(0)}/>)}
            </div>      
        </div>
        <Footer/>
        </div>
    )
}

export default projects
