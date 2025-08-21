import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'

const Contact = () => {
    return (
        <>
            <NavBar />

            <section className="grid md:grid-cols-2 grid-cols-1 lg:mx-15 md:mx-10 mx-5 mt-25">
                {/* Contact Text */}
                <div className="md:col-start-1 md:col-span-1 flex flex-col justify-center items-start md:gap-12 gap-5 mx-5">
                    <h1 className="lg:text-6xl md:text-5xl text-3xl font-extralight text-gray-900"> Let's get in touch </h1>
                    <p className="md:text-base text-sm md:mr-10 text-gray-700"> I'd love to hear your feedback to this website. We could even build things together! </p>
                    
                    <div className="flex gap-4 items-center">
                        <span className="bg-[#849F5D] rounded-full p-0.5">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                strokeWidth={1.5} 
                                stroke="currentColor" 
                                className="size-6 filter brightness-0 invert"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
                            </svg>
                        </span>
                        
                        <p className="text-sm"> hungworkpublic@gmail.com </p>
                    </div>
                </div>

                {/* Form Section */}
                <div className="md:col-start-2 md:col-span-1 bg-slate-50 shadow-lg rounded-xl mt-10 md:px-5 px-3 md:py-15 py-10">
                    <form className="max-w-sm mx-auto" action="https://formspree.io/f/xwpqdran" method="POST">
                        <div className="lg:mb-10 mb-5">
                            <label className="block mb-2 text-sm font-medium text-gray-900"> Your name </label>
                            <input type="text" id="name" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ray-400" />
                        </div>

                        <div className="lg:mb-10 mb-5">
                            <label className="block mb-2 text-sm font-medium text-gray-900"> Your email* </label>
                            <input type="email" id="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ray-400" required />
                        </div>
                        
                        <div className="lg:mb-10 mb-5">
                            <label className="block mb-2 text-sm font-medium text-gray-900"> Message </label>
                            <div className="flex items-center">
                                <textarea id="name" name="message" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ray-400 h-20" />
                            </div>
                        </div>

                        <button type="submit" className="text-white bg-[#849F5D] hover:hover:bg-[#758c54] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"> Send </button>
                    </form>
                </div>
            </section>

            
            <div className="md:-mt-5 mt-30">
                <Footer />
            </div>
            
        </>
    )
}

export default Contact