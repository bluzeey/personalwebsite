import ProjectCard from './ProjectCard';
import {useRouter} from 'next/router'
import English from '../data/english.json';
import German from '../data/german.json';
import {languageState} from '../atom/languageAtom';
import {useRecoilState} from 'recoil';
import {useEffect,useState} from 'react';

function Projects() {
    const[language,setLanguage]=useRecoilState(languageState)
    const [currentLanguage,setCurrentLanguage]=useState({})
    useEffect(()=>{
        if(language){
          setCurrentLanguage(German)
        }else{
          setCurrentLanguage(English)
        }
    },[language])
    const router=useRouter()
    return (
        <div className="second-gradient-color font-inter">
            <h1 className=" text-center text-5xl font-bold text-transparent bg-clip-text  bg-gradient-to-r from-yellow-700 via-yellow-400 to-yellow-200 m-2 p-4">{currentLanguage.projectHeading}</h1>
                 <div className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
                  {currentLanguage.Myprojects?.slice(0,3).map(project=>(
                    <ProjectCard key={project.id} id={project.id} title={project.title} description={project.description} image={project.image} tags={project.tags} code={project.code} live={project.live}/>
                  ))}
                 </div>
            <div className="grid justify-center">
               <button onClick={()=>{router.push('/projects')}} 
               className="text-white font-bold bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-800 rounded-lg text-xl px-5 py-2.5 text-center mr-2 mb-2">See all the projects</button>     
            </div>
        </div> 
    )
}

export default Projects
