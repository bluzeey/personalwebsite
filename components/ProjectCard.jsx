import {useRouter} from 'next/router'

function ProjectCard({id,title,description,image,tags}) {
    const router=useRouter()
    return (
        <div className="rounded overflow-hidden shadow-lg bg-white max-w-md">
            <img onClick={()=>router.push(`/projects/${id}`)} className="w-full cursor-pointer" src={image} alt="Project Image"/>
                <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-center">{title}</div>
                <p className="text-gray-700 text-base">
                {description}
                </p>
            </div>
            <div className="flex justify-center">
                {tags.map(tag=>(
                    <span className="tag">{tag}</span>
                ))}
            </div>
            <div className="flex p-2 justify-center">
                <a href="" className="project-link">Code</a>
                <a href="" className="project-link">Live</a>
            </div>
        </div>
    )
}

export default ProjectCard

