import bookImage from '@assets/home_page_images/book.jpg'

const Education = () => {
  return (
    <>
        <section className="flex flex-col space-y-8 mb-10">
            {/* Book Image Part */}
            <div className="grid md:grid-cols-16 grid-cols-1">
                <div className="bg-[#849F5D]/90 md:block md:col-start-1 md:col-end-1 hidden"></div>

                {/* Title & Resume Button lg */}
                <div className="md:flex flex-col px-5 mt-10 justify-center items-center space-y-15 col-start-2 col-end-9 hidden">
                    <h1 className="lg:text-6xl md:text-5xl text-4xl font-light tracking-wider leading-[75px]"> Education 
                        <span className="lg:block hidden"> & Skills </span> </h1>

                    {/* <a href="#" target="_blank" rel="noopener noreferrer" 
                        className="bg-[#849F5D] text-white flex items-center justify-start gap-2
                            rounded-xl hover:bg-[#758c54] transition-color duration-100 cursor-pointer lg:text-lg text-base lg:py-3 py-3 px-4 lg:mt-2">
                    
                        <span className="">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                strokeWidth={1.5} 
                                stroke="currentColor" 
                                className="lg:size-8 size-7 filter brightness-0 invert"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                             </svg>
                        </span>
                        Resume
                    </a>
                    */}
                </div>

                <img src={bookImage} 
                    alt="book"
                    className="md:px-0 px-10 md:col-start-9 md:col-end-17 md:w-full md:h-full opacity-80">
                </img>

                {/* Title & Resume Button sm */}
                <div className="flex flex-row mx-10 mt-10 justify-between items-center md:space-x-15 space-x-10 md:hidden">
                    <h1 className="lg:text-6xl md:text-5xl text-3xl font-light tracking-wider"> Education </h1>

                    <a href="#" target="_blank" rel="noopener noreferrer" 
                        className="bg-[#849F5D] text-white flex items-center justify-center gap-1 
                            rounded-xl hover:bg-[#758c54] transition-color duration-100 cursor-pointer text-sm p-2">
                        <span className="">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                strokeWidth={1.5} 
                                stroke="currentColor" 
                                className="size-6 filter brightness-0 invert"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                             </svg>
                        </span>
                        Resume
                    </a>
                </div>
            </div>

            {/* Education & Skills Part */}
            <div className="grid md:grid-cols-2 grid-cols-1 items-center md:mx-10 mx-5 md:my-5">
                {/* Education Card */}
                <div className="border-2 border-[#849F5D] flex flex-col space-y-3 md:py-5 py-2 px-5 lg:mr-10 md:mr-5 md:col-start-1 md:col-span-1">
                    <h1 className="lg:text-3xl text-2xl font-medium tracking-wider text-[#849F5D]"> B. Sc. </h1>

                    <div className="flex flex-col space-y-1 tracking-wider">
                        <p className="lg:text-2xl text-xl font-medium"> Computer Science </p>
                        <p className="font-light text-gray-700"> CUHK | 2022-2026 </p>
                    </div>

                    <div className="md:flex flex-col space-y-1 hidden">
                        <div className="flex">
                            <span className="text-[#849F5D] size-6 mr-5"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clip-rule="evenodd" />
                            </svg></span>
                            <p className=""> Focus on Algorithm, Software Engineering </p>
                        </div>

                        <div className="flex">
                            <span className="text-[#849F5D] size-6 mr-5"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clip-rule="evenodd" />
                            </svg></span>
                            <p className=""> Dean's List Honour </p>
                        </div>
                    </div>
                </div>

                {/* Skills List */}
                <div className="flex flex-col space-y-10 lg:mx-15 md:mx-5 mx-2 px-5 md:mt-0 mt-10 md:col-start-2 md:col-span-1">
                    <div className="flex items-center justify-center">
                        <div className="bullet mr-5"> </div>
                        <div className="flex-1 min-w-[120px]">
                            <h1 className="text-lg font-medium"> Language </h1>
                        </div>
                        <p className="flex-1 text-gray-700 md:hidden"> CNN, JPN, ENG </p>
                        <p className="flex-1 text-gray-700 mt-5 md:block hidden"> Cantonese, Japanese, English, Mandarin </p>
                    </div>

                    <div className="flex items-center justify-center">
                        <div className="bullet mr-5"> </div>
                        <div className="flex-1 min-w-[120px]">
                            <h1 className="text-lg font-medium"> Dev Tools </h1>
                        </div>
                        <p className="flex-1 text-gray-700 md:hidden"> Git, GitHub, VSCode </p>
                        <p className="flex-1 text-gray-700 mt-5 md:block hidden"> Mermaid, Figma, Git, GitHub, Draw.io, VScode, Rider </p>
                    </div>

                    <div className="flex items-center justify-center">
                        <div className="bullet mr-5"> </div>
                        <div className="flex-1 min-w-[120px]">
                            <h1 className="text-lg font-medium"> Tech Stack </h1>
                        </div>
                        <p className="flex-1 text-gray-700 md:hidden"> React, Express, PyTorch </p>
                        <p className="flex-1 text-gray-700 mt-5 md:block hidden"> React, Express, EF, PyTorch, NumPy </p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Education