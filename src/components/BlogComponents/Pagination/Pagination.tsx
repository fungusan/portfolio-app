interface PaginationProps {
    totalBlogs: number;
    blogsPerPage: number;
    setCurrentPage: (page: number) => void;
}

const Pagination = ({
    totalBlogs,
    blogsPerPage,
    setCurrentPage
}: PaginationProps) => {
    let pages = [];

    for (let i = 1; i <= Math.ceil(totalBlogs / blogsPerPage); i++) {
        pages.push(i);
    }

    return (
        <>
            <div className="flex justify-center items-center lg:mt-20 mt-10 md:gap-5 gap-4">
                {
                    pages.map( (page, index) => (
                        <button
                            key={index}
                            className="text-white md:text-lg bg-[#849F5D] hover:bg-[#758c54] lg:px-4 lg:py-3 px-3 py-2 rounded-lg cursor-pointer" 
                            onClick={() => setCurrentPage(page)}
                        >
                            {page}
                        </button>
                    ))
                }
            </div>
        </>
    )
}

export default Pagination