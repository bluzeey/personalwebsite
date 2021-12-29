import {Myprojects} from '../../data/english.json'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
function projectDetails({props:{id}}) {
    console.log(id)
    const project=Myprojects[id-1]
    return (
        <>
            <div className="p-4 first-gradient-color">
            <Navbar/>
                <h2 className="text-center font-bold text-5xl bg-clip-text text-transparent p-5 second-gradient-color">{project.title}</h2>
                <img className="m-auto xs:w-full sm:w-full md:w-3/4 max-w-5xl" src={project.image} alt="project image"/>
                <p className="text-center">{project.description}</p>
            </div>
            <Footer/>
        </>
    )
}
projectDetails.getInitialProps=async({query:{id}})=>{
    return{
        props:{
            id
        }
    }
}
export default projectDetails
