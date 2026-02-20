interface BlogCardProps {
    imagePath: string;
    imageName: string;
    title: string;
    date: string;
    excerpt: string;
    tags: string[];
}

const BlogCard = ({
    imagePath,
    imageName,
    title,
    date,
    excerpt,
    tags
}: BlogCardProps) => {
    return (
        <>
            <div className="flex flex-col border-slate-100 border space-y-4 mt-1 floating-animation cursor-pointer">
                {/* Image Section */}
                <div className="relative aspect-3/2 overflow-hidden">
                    <img
                        src={imagePath}
                        alt={imageName}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                </div>
                
                <div className="flex flex-col justify-start space-y-4 px-2 md:pb-1 md:border-slate-100 md:border-b">
                    {/* Tags lg */}
                    <div className="md:flex justify-start gap-3 hidden">
                        {tags.map( (tag, index) => (
                            <div 
                                key={index}
                                className="bg-[#849F5D] px-2 py-1.5 rounded-xl text-white text-[10px] hover:bg-[#758c54]"
                            >
                                {tag}
                            </div>
                        ))}
                    </div>

                    {/* Text Content */}
                    <div className="flex flex-col md:space-y-5">
                        <h1 className="md:text-base text-lg font-medium leading-6 text-gray-900"> {title} </h1>
                        <p className="md:block hidden text-gray-700 text-xs"> {excerpt} </p>
                    </div>

                    {/* Tags sm */}
                    <div className="flex justify-start gap-3 md:hidden">
                        {tags.map( (tag, index) => (
                            <span 
                                key={index}
                                className="bg-[#849F5D] px-2 py-1.5 rounded-xl text-white text-[10px] hover:bg-[#758c54]"
                                >
                                    {tag}
                            </span>
                        ))}
                    </div>
                </div>
                
                {/* Date */}
                <div className="md:flex justify-start items-center gap-4 px-2 pb-2 -mt-1 hidden">
                    <span className="text-slate-700">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            strokeWidth={1.5} 
                            stroke="currentColor" 
                            className="size-6"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                        </svg>
                    </span>

                    <p className="text-sm"> {date} </p>
                </div>
            </div>
        </>
    )
}

export default BlogCard