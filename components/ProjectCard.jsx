function ProjectCard({id,title,description,image,tags}) {
    return (
        <div class="rounded overflow-hidden shadow-lg bg-white max-w-md">
            <img class="w-full" src={image} alt="Mountain"/>
                <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{title}</div>
                <p class="text-gray-700 text-base">
                {description}
                </p>
            </div>
            <div class="px-6 pt-4 pb-2">
                {tags.map(tag=>(
                    <span class="tag">{tag}</span>
                ))}
            </div>
        </div>
    )
}

export default ProjectCard

