import Head from 'next/head'
import ProjectCard from '../components/ProjectCard'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
function projects() {
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
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
            </div>
        </div>
        <Footer/>
        </div>
    )
}

export default projects
