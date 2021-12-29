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
            <div className="px-6 pt-4 pb-2">
                {tags.map(tag=>(
                    <span className="tag">{tag}</span>
                ))}
            </div>
        </div>
    )
}

export default ProjectCard

