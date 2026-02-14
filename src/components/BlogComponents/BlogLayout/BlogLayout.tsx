import React from 'react'
import NavBar from '../../NavBar/NavBar';
import Footer from '../../Footer/Footer';

interface BlogLayoutProps {
    meta: {
        imagePath: string;
        imageName: string;
        title: string;
        date: string;
        excerpt: string;
        tags: string[];
    };
    children: React.ReactNode;
}

const BlogLayout: React.FC<BlogLayoutProps> = ({ meta, children }) => {
    return (
        <>
            <NavBar />

            <div className="grid grid-cols-20 md:mt-25 mt-20">
                <div className="md:col-start-1 md:col-end-2 col-start-1 col-end-2 bg-[#849F5D]"></div>

                {/* Title Section */}
                <header className="md:col-start-4 md:col-end-18 col-start-3 col-end-19 flex flex-col items-center text-center md:space-y-5 space-y-3">
                    <p className="md:text-base text-sm text-gray-700"> {meta.date} </p>
                    <h1 className="lg:text-5xl md:text-4xl text-2xl font-semibold"> {meta.title} </h1>
                    <p className="md:text-lg text-sm text-gray-700 md:mx-30"> {meta.excerpt} </p>
                </header>

                {/* Image Section */}
                <div className="md:col-start-5 md:col-end-17 col-start-4 col-end-18 relative aspect-16/9 overflow-hidden md:my-5 my-3">
                    <img
                        src={meta.imagePath}
                        alt={meta.imageName}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                </div>
    
                {/* Authors & Tags Section */}
                <div className="md:col-start-5 md:col-end-17 col-start-4 col-end-18 flex md:flex-row flex-col md:justify-between md:items-center">
                    <div className="flex md:justify-start md:gap-4 justify-between items-center">
                         <p className="md:text-base text-xs text-gray-700"> Authored By Fungusan </p>
                        <div className="bg-[url('assets/home_page_images/yan_yan_icon.png')] lg:size-14 md:size-12 size-8 bg-left rounded-full bg-cover"></div>
                    </div>

                    <div className="flex justify-start gap-2">
                        {meta.tags.map( (tag, index) => (
                            <span 
                                key={index}
                                className="bg-[#849F5D] md:px-3 md:py-2 px-2 py-1.5 rounded-xl text-white md:text-sm text-[10px] hover:bg-[#758c54]"
                                >
                                    {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Main Contents */}
                <article className="md:col-start-4 col-start-3 col-end-18 markdown">
                    {children}
                </article>

                <div className="col-start-20 col-end-21 bg-[#849F5D]"></div>
            </div>

            {/* Footer Section */}
            <div className="mt-6 pt-8 border-t border-gray-200">
                <a 
                    href="/blogs" 
                    className="md:pl-15 pl-10 lg:text-lg md:text-base text-sm inline-flex items-center text-gray-500 hover:text-gray-900 transition-colors"
                >
                    ← Back to all blogs
                </a>
            </div>

            <div className="md:mt-0 mt-30">
                <Footer />
            </div>
        </>
    );
};

export default BlogLayout