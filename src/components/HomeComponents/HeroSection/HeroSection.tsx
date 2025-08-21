import profile from '@assets/home_page_images/me.jpg';

const HeroSection = () => {
  return (
    <>
        <section className="items-center md:pt-16 pt-10 grid grid-cols-1 md:grid-cols-2 lg:mx-20 md:mx-10 mx-10 gap-8 mt-10">
            {/* Image Part */}
            <div className="md:px-6 px-4 mx-auto max-w-xl col-span-1 relative">
                <img 
                    src={profile} 
                    alt="Me" 
                    className="object-cover w-full h-full rounded-lg shadow-lg"
                />

                <div className="bg-[#849F5D]/90 lg:w-24 lg:h-96 md:w-20 md:h-72 w-14 h-56 absolute lg:-left-8 lg:top-24 md:-left-6 md:top-20 -left-4 top-16" />
                <div className="bg-[#849F5D]/90 lg:w-24 lg:h-24 md:w-20 md:h-20 w-12 h-12 absolute lg:-right-4 lg:-bottom-8 md:-right-2 md:-bottom-4 -right-4 -bottom-4" />
            </div>

            {/* Text Part */}
            <div className="md:mt-0 mt-4 md:pb-10 lg:pb-20 px-4 md:px-8 col-span-1 flex flex-col lg:space-y-10 md:space-y-8 space-y-4 lg:ml-0 md:mr-0">
                <div className="flex flex-col md:space-y-2 space-y-1 tracking-wider">
                    <h1 className="text-4xl lg:text-7xl md:text-5xl font-light text-gray-900"> Andy Hung </h1>
                    <h2 className="text-2xl lg:text-4xl md:text-3xl font-light text-gray-700"> Developer </h2>
                </div>
            
                <div className="border-l-4 border-[#849F5D] pl-4 lg:mt-6 md:mt-2 mt-1">
                    <p className="text-gray-700 max-w-xl tracking-wide md:leading-8 leading-6 text-sm md:text-base">
                        Well kind of. A computer science student who is eager to learn more about algorithms.
                        <span className="hidden md:inline"> I turn my attention into a more fascinating world of system architecture. </span>
                        <span className="hidden lg:inline"> Discovering the complex mechanics of nature, I'm also a science and mathematics lover. </span>
                    </p>
                </div>
            </div>
        </section>
    </>
  );
};

export default HeroSection;