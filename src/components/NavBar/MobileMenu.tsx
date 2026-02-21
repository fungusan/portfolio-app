const MobileMenu = () => {
    return (
        <>
            <div className="md:hidden fixed top-[60px] w-full bg-white/90 backdrop-blur-md border-b border-gray-200/50 z-40 flex flex-col items-center gap-4 py-4 divide-y divide-gray-100">
                <a
                    href="/"
                    className="w-full text-center text-lg font-light py-3 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200"
                >
                    Home
                </a>
                <a
                    href="/blogs"
                    className="w-full text-center text-lg font-light py-3 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200"
                >
                    Blogs
                </a>
                <a
                    href="/album"
                    className="w-full text-center text-lg font-light py-3 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200"
                >
                    Album
                </a>
                <a
                    href="/contact"
                    className="w-full text-center text-lg font-light py-3 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200"
                >
                    Contact
                </a>
            </div>
        </>
    )
};

export default MobileMenu