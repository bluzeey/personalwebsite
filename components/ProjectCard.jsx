import {useRouter} from 'next/router'

function ProjectCard({id,title,description,image,tags,code,live}) {
    const router=useRouter()
    return (
        <div className="rounded overflow-hidden shadow-lg bg-white max-w-md m-2">
            <img  className="w-full cursor-pointer" src={image} alt="Project Image"/>
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
                <a target="_blank" href={code} className="project-code">Code</a>
                <a target="_blank" href={live} className="project-link">Live</a>
            </div>
        </div>
    )
}

export default ProjectCard

