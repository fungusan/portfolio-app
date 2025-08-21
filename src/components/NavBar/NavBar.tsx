import { useState } from 'react'
import MobileMenu from './MobileMenu'

const NavBar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <>
            <nav className="w-full flex justify-between items-center md:py-4 py-2 fixed top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200/50">
                <div className="flex items-center pl-6">
                    <span className="text-lg font-light tracking-tight hidden">
                        <span className="font-medium">Portfolio</span>
                    </span>

                    {/* Yan Yan Icon */}
                    <div className="bg-[url('assets/home_page_images/yan_yan_icon.png')] md:size-14 size-12 bg-left rounded-full bg-cover"></div>
                </div>

                <div className="flex items-center gap-8 relative pr-6">
                    {/* Links Section */}
                    <div className="hidden md:flex gap-8">
                        <a href="/" className="text-sm font-light py-2 hover:text-gray-500 transition-colors duration-200">Home</a>
                        <a href="/blogs" className="text-sm font-light py-2 hover:text-gray-500 transition-colors duration-200">Blogs</a>
                        <a href="/contact" className="text-sm font-light px-4 py-2 rounded-lg bg-transparent border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors duration-200">
                            Contact
                        </a>
                    </div>

                    {/* Hamburger Button (sm) */}
                    <button 
                        type="button" 
                        className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-500 hover:bg-gray-50 hover:text-gray-900 focus:outline-none md:hidden cursor-pointer"
                        aria-expanded={isOpen}
                        onClick={() => setIsOpen(!isOpen)}
                        >
                        <span className="sr-only">Open main menu</span>

                        {/* Hamburger Icon */}
                        {
                            !isOpen && (
                                <svg 
                                    viewBox="0 0 24 24" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    strokeWidth="1.5" 
                                    className="size-6 aria-expanded:hidden"
                                >
                                    <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            )
                        }
                        
                        {/* Close Icon */}
                        {
                            isOpen && (
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    stroke-width="1.5" 
                                    stroke="currentColor" 
                                    className="size-6 aria-expanded:block"
                                >
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            )
                        }
                    </button>
                </div>

                {
                    isOpen && (
                        <MobileMenu />
                    )
                }
            </nav>
            
            <div className="fixed md:top-[80px] top-[68px] w-full h-px z-50 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        </>
    )
}

export default NavBar