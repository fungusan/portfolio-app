import youtube_icon from '@assets/home_page_images/youtube-icon-md.png'
import HangingWords from './HangingWords'

const MathsSection = () => {
  return (
    <>
        <section className="md:grid md:grid-cols-12 md:space-y-0 flex flex-col space-y-20">
            {/* Youtube Channel Section */}
            <div className="md:col-start-1 md:col-end-5 grid grid-cols-10 items-start">

                {/* Green Block */}
                <div className="bg-[#849F5D] col-start-1 col-end-1 self-stretch md:-mb-20 -mb-10"></div>

                {/* Dummy Block (Push content below) */}
                <div className="md:col-start-2 md:col-end-11 lg:h-80 md:h-60"></div>
                
                {/* Icon & Title */}
                <div className="flex flex-col md:col-start-3 md:col-end-10 col-start-4 col-end-10 md:mt-15 justify-end items-center">
                    {/* YouTube Icon */}
                    <img
                        src={youtube_icon}
                        alt="Youtube icon"
                        width="72px"
                        height="72px"
                    />
                    
                    <a href="https://www.youtube.com/watch?v=keVhu2TFZkE" target="_blank">
                        <div className="flex justify-center items-center border-[#BA4C3D] border-2 md:px-4 px-2 lg:py-1 md:py-3 py-2 rounded-lg relative">
                            <p className="lg:hidden text-sm"> Pythagorean Theorem [Manim] </p>
                            <p className="lg:inline hidden text-sm"> A 30 second short proof of the Pythagorean Theorem [Manim] </p>

                            {/* Yan Yan Icon */}
                            <div className="border-[#BA4C3D] border-2 rounded-full p-0.5 absolute lg:-left-15 md:-left-14 -left-12">
                                <div className="bg-[url('assets/home_page_images/yan_yan_icon.png')] lg:size-16 md:size-14 size-12 bg-left rounded-full bg-cover"></div>
                            </div>
                        </div>
                    </a>
                    
                    <div className="border-[#849F5D] md:border-l-3 md:border-r-0 border-r-3 md:pl-3 md:pr-0 pr-3 md:mt-10 mt-20 md:mx-0 mx-5">
                        <p className="text-gray-700 tracking-[1px] md:leading-8 leading-6 md:text-sm text-xs"> Check out my visual proof of one of mathematics' most elegant relationships on YouTube. </p>
                    </div>
                </div>
            </div>

            {/* Maths Story Content (Grid in sm for scalable padding) */}
            <div className="md:col-start-6 md:col-end-12 md:block grid grid-cols-10 md:mt-40">
                <div className="md:flex flex-col col-start-3 col-end-10 space-y-2 relative">
                    <HangingWords />

                    <h1 className="lg:text-7xl md:text-5xl text-4xl font-extralight text-gray-900 tracking-[1px]"> Maths </h1>
                    <h2 className="lg:text-3xl md:text-2xl text-xl font-light text-gray-700"> The Story of a Maths Lover </h2>

                    <p className="lg:text-base md:text-sm text-xs tracking-[1px] md:leading-8 leading-6 md:mt-16 mt-8 md:pr-20 text-gray-700"> 
                        I love mathematics, although not being very proficient in it. 
                        I read mathematics text and watch mathematics video while I am in free time. 
                        I believe mathematics is the key to understand the universe, revealing the underlying structure of nature. </p>

                    <p className="lg:text-base md:inline hidden text-sm tracking-[1px] leading-8 md:mt-10 mt-8 pr-20 text-gray-700"> 
                        My favourite branch of mathematics is calculus. Without calculus, human beings were not able to quantify the world around us.
                        Calculus enpowers us to understand the nature of changes, getting rid of the dull assumptions that everything are constant. </p>
                </div>
            </div>
        </section>
    </>
  )
}

export default MathsSection