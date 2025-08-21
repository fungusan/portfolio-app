import React, { useState } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'
import SearchBar from '../../components/BlogComponents/SearchBar/SearchBar'
import FilterDropdown from '../../components/BlogComponents/FilterDropdown/FilterDropdown'
import BlogCard from '../../components/BlogComponents/BlogCard/BlogCard'
import { type BlogData, getBlogData } from '../../lib/blogUtils'
import Pagination from '../../components/BlogComponents/Pagination/Pagination'

const Blogs = () => {
    const [searchQuery, setsearchQuery] = useState<string>("");
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
    const [selectedTags, setSelectedTags] = useState<string[]>([]);

    const dropdownTags = [
        'Maths', 'Computer', 'Philosophy'
    ];

    const blogs = getBlogData();
    const [showBlogs, setShowBlogs] = useState<BlogData[]>(blogs);

    const handleSearch = () => {
        setShowBlogs(blogs.filter( 
            (blog) => blog.meta.title.toLowerCase().includes(searchQuery.trim().toLowerCase())
        ))
    }

    const handleKeyEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    }

    const handleTagChange = (tags: string[]) => {
        setSelectedTags(tags);

        setShowBlogs(blogs.filter(
            (blog) => tags.length === 0 || tags.some((selectedTag) => blog.meta.tags.includes(selectedTag))
        ));
    };
  
    const onClearSearch = () => {
        setsearchQuery("");
        setShowBlogs(blogs);
    }

    // Pagination Logic
    const [currentPage, setCurrentPage] = useState<number>(1);
    const blogsPerPage = 6;

    const lastPostIndex = currentPage * blogsPerPage;
    const firstPostIndex = lastPostIndex - blogsPerPage;
    const currentBlogs = showBlogs.slice(firstPostIndex, lastPostIndex).reverse();

    return (
        <>
            <NavBar />

            {/* SearchBar & Filters Section */}
            <div className="flex md:flex-row flex-col md:justify-between md:items-center md:mt-25 mt-20 mx-10">
                <div className="flex justify-center items-center">
                    <SearchBar 
                        value={searchQuery} 
                        onChange={ ({ target }) => {
                            setsearchQuery(target.value);
                        }}
                        handleSearch={handleSearch}
                        onClearSearch={onClearSearch} 
                        onKeyEnter={handleKeyEnter}
                    />
                </div>

                {/* Tags Filter */}
                <div className="flex justify-center items-center md:mt-0 mt-3 gap-5">
                    <span className="text-gray-700">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            strokeWidth={1.5} 
                            stroke="currentColor" 
                            className="md:size-7 size-6"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                        </svg>
                    </span>

                    <FilterDropdown
                        isDropdownOpen={isDropdownOpen}
                        setIsDropdownOpen={setIsDropdownOpen}
                        tags={dropdownTags}
                        selectedTags={selectedTags}
                        onTagChange={handleTagChange}
                    />
                </div>
            </div>

            {/* Blog Cards Section */}
            <div className="grid grid-cols-8 md:grid-cols-13 gap-y-8 md:mt-10 mt-6">
                {currentBlogs.map((blog, index) => (
                    <div 
                        key={index}
                        className={`
                            col-start-2 col-end-8
                            ${index % 3 === 0 && 'md:col-start-2 md:col-end-5'}
                            ${index % 3 === 1 && 'md:col-start-6 md:col-end-9'}
                            ${index % 3 === 2 && 'md:col-start-10 md:col-end-13'}
                        `}
                    >
                        <a href={`blogs/${blog.slug}`}>
                            <BlogCard {...blog.meta} />
                        </a>
                    </div>
                ))}
            </div>

            {/* No Result Messages */}
            {showBlogs.length === 0 && (
                <div className="text-center py-12 flex flex-col items-center">
                    <span className="text-[#849F5D] text-6xl mb-2">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            strokeWidth={1.5} 
                            stroke="currentColor" 
                            className="md:size-12 size-10"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 16.318A4.486 4.486 0 0 0 12.016 15a4.486 4.486 0 0 0-3.198 1.318M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
                        </svg>
                    </span>
                    
                    <h3 className="md:text-xl text-lg font-medium text-gray-700 mb-2"> No results found </h3>
                    <p className="text-gray-600 md:text-base text-sm"> Try different search terms or browse all posts </p>
                </div>
            )}

            {/* Pagination System */}
            <Pagination
                totalBlogs={showBlogs.length}
                blogsPerPage={blogsPerPage}
                setCurrentPage={setCurrentPage}
            />
            
            <div className="md:-mt-12 mt-30">
                <Footer />
            </div>
        </>
    )
}

export default Blogs