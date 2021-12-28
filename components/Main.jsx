import Animation from './Animation';
import Contact from './Contact';
import ProjectCard from './ProjectCard';
import {useRouter} from 'next/router'
import Projects from '../data/projects.json';
function Main() {
    const router=useRouter()
    return (
        <>
        <div className="flex flex-col w-2/3 m-auto p-0 md:flex-row rounded">
          <div className="font-inter flex justify-center flex-col font-bold b-1 leading-tight">
            <h1 className="text-5xl text-transparent bg-clip-text second-gradient-color">Hi, I am Sahil.</h1>  
            <p className="text-transparent bg-clip-text second-gradient-color text-2xl">I am a final year college student who loves coding , travelling, taking care of my plants and sketching. </p>
          </div>
          <Animation/>
        </div>

        <div className="file:p-4 second-gradient-color font-inter">
            <h1 className=" text-center text-5xl font-bold text-transparent bg-clip-text  bg-gradient-to-r from-yellow-700 via-yellow-400 to-yellow-200 m-2 p-4">Some of my projects</h1>
                 <div className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-7">
                  {Projects.slice(0,3).map(project=>(
                    <ProjectCard key={project.id} title={project.title} description={project.description} image={project.image} tags={project.tags}/>
                  ))}
                 </div>
            <div className="grid justify-center">
               <button onClick={()=>{router.push('/projects')}} 
               className="text-white font-bold bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-800 rounded-lg text-xl px-5 py-2.5 text-center mr-2 mb-2">See all the projects</button>     
            </div>
        </div>
          <Contact/>
        </>
    )
}

export default Main
