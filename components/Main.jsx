import Animation from './Animation';
import Contact from './Contact';
import ProjectCard from './ProjectCard';
import {useRouter} from 'next/router'
function Main() {
    const router=useRouter()
    return (
        <>
        <div className="flex flex-col w-2/3 m-auto p-0 md:flex-row rounded">
          <div className="font-inter flex justify-center flex-col font-bold b-1 leading-tight">
            <h1 className="text-5xl text-white">Hi, I am Sahil.</h1>  
            <p className="bg-clip-text text-white text-2xl">I am a final year college student who loves coding , travelling, taking care of my plants and sketching. </p>
          </div>
          <Animation/>
        </div>

        <div className="file:p-4 bg-gradient-radial-at-b from-gray-400 via-gray-600 to-gray-900">
            <h1 className="font-inter text-center text-5xl font-bold text-white m-2 p-4">Some of my projects</h1>
                 <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-7">
                  <ProjectCard/>
                  <ProjectCard/>
                  <ProjectCard/>
                 </div>
            <div className="grid justify-center">
               <button onClick={()=>{router.push('/projects')}} 
               className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center mr-2 mb-2">See all the projects</button>     
            </div>
        </div>
          <Contact/>
        </>
    )
}

export default Main
