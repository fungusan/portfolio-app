import CanvasAnimation from './CanvasAnimation'

const LeetcodeSection = () => {
    return (
        <>
            <section className="md:grid-cols-2 grid grid-cols-1 lg:mx-15 md:mx-10 mx-15">
                {/* Animation & Quote Section */}
                <div className="md:col-start-1 md:col-end-1 flex flex-col justify-center items-center space-y-10">
                    {/* Animation */}
                    <div className="max-w-md border-b border-gray-300 pb-10">
                        <CanvasAnimation />
                    </div>
                    
                    {/* Quote */}
                    <div className="relative md:mx-15 lg:px-10 px-7 mx-5 md:py-15 py-10 md:mb-0 mb-5">
                        <div className="absolute top-0 left-0 bg-[#849F5D] md:w-[40px] md:h-[40px] w-[30px] h-[30px]">
                            <div className="absolute top-3 left-3 bg-white md:w-[30px] md:h-[30px] w-[20px] h-[20px]"></div>
                        </div>

                        <p className="md:hidden lg:text-lg text-gray-700 tracking-[1px] md:text-base text-sm"> Algorithmic challenges honed my problem-solving and deepened my computer science knowledge. </p>
                        <p className="md:block lg:text-lg text-gray-700 hidden tracking-[1px]"> 
                            My journey through algorithmic challenges has strengthened my problem-solving skills and deepened my understanding of computer science fundamentals.
                        </p>

                        <div className="absolute bottom-0 right-0 bg-[#849F5D] md:w-[40px] md:h-[40px] w-[30px] h-[30px]">
                            <div className="absolute bottom-3 right-3 bg-white md:h-[30px] md:w-[30px] w-[20px] h-[20px]"></div>
                        </div>
                    </div>
                </div>
                
                {/* Leetcode Data */}
                <div className="md:col-start-2 md:col-end-2 md:ml-10 flex flex-col justify-center items-start space-y-2">
                    <h1 className="md:text-6xl text-5xl text-gray-900 font-light"> 419 </h1>
                    <p className="md:text-2xl text-xl text-gray-700"> Leetcode problems solved </p>

                    {/* Difficulty Level */}
                    <div className="flex bg-gray-100 rounded-xl w-full md:h-10 h-8 md:text-md text-sm md:my-10 my-5">
                        <div className="flex justify-start items-center w-1/3 text-[#849F5D] px-4 border-r"> Easy </div>
                        <div className="flex justify-start items-center w-1/2 text-[#ADB145] px-4 border-r"> Medium </div>
                        <div className="flex justify-start items-center w-1/6 text-[#BA4C3D] px-4"> Hard </div>
                    </div>

                    {/* React RC */}
                    <div className="md:flex flex-col w-full hidden">
                        <h1 className="text-2xl md:mt-10 my-10"> Recent AC </h1>
                        <div className="flex justify-start items-center h-20 px-4 rounded-lg"> Soup Servings </div>
                        <div className="flex justify-start items-center h-20 bg-gray-100 px-4 rounded-lg"> Maximum 69 Number </div>
                        <div className="flex justify-start items-center h-20 px-4 rounded-lg"> Power of Two </div>
                        <div className="flex justify-start items-center h-20 bg-gray-100 px-4 rounded-lg"> Path Sum </div>
                        <div className="flex justify-start items-center h-20 px-4 rounded-lg"> K Closest Points to Origin</div>
                    </div>

                    {/* Profile Button sm */}
                    {/* 
                        <a href="https://leetcode.com/u/fungusan/" target="_blank" 
                            className="self-center md:w-[150px] w-[120px] md:h-[50px] h-[45px]
                                md:text-base text-sm flex items-center justify-center 
                                rounded-xl bg-[#849F5D] text-white hover:bg-[#758c54] cursor-pointer mt-5"
                            >
                            View Profile 
                        </a>
                    */}

                </div>
            </section>
        </>
    )
}

export default LeetcodeSection