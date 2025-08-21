import PBook from '@assets/home_page_images/PBook.png'

const BookSection = () => {
  return (
    <>
        <section className="grid grid-cols-12 space-y-10 mt-5">
            {/* PBook Image sm */}
            <div className="md:hidden flex justify-center items-center bg-[#849F5D] col-start-7 col-end-13 rounded-l-[50px] pt-10 pb-10 opacity-90">
                <div className="relative -translate-x-25">
                    <img
                        src={PBook}
                        alt="PBook Project"
                        width="300px"
                        height="420px"
                    />

                    <div className="flex flex-col justify-center items-center bg-[#688a39] rounded-full text-white absolute -top-5 -right-5 p-5 text-center w-16 h-16">
                        <span className="text-base font-light">Offer</span>
                        <span className="text-lg -mt-1">$38</span>
                    </div>
                </div>
            </div>

            <a href="documents/bookSample.pdf" target="_blank" className="md:hidden bg-[#849F5D] hover:bg-[#758c54] text-white col-start-1 col-end-13 flex justify-center items-center py-3 text-sm"> Sample Page </a>

            {/* PBook Content */}
            <div className="md:col-start-2 md:col-end-7 col-start-3 col-end-11 lg:space-y-25 md:space-y-20 space-y-15 md:mt-15">
                <div className="tracking-[2px] font-extralight leading-5">
                    <p className="lg:text-5xl text-4xl text-gray-700"> I'm Selling </p>
                    <p className="lg:text-7xl md:text-6xl text-5xl text-gray-900"> Book. </p>

                    <p className="text-gray-700 tracking-[2px] md:text-lg text-sm border-b-[#849F5D] border-b-2 mt-10 pb-5"> A solution to the changing era </p>
                </div>

                
                {/* Book Features */}
                <div className="flex flex-col md:space-y-15 space-y-6 text-gray-700 tracking-[2px]">
                    <div className="flex md:gap-10 gap-8 items-center">
                        <div className="bg-[#849F5D] rounded-full p-3"></div>
                        <p className="lg:text-lg md:text-base text-sm"> A holistic list of ICT exam-type questions </p>
                    </div>

                    <div className="flex md:gap-10 gap-8 items-center">
                        <div className="bg-[#849F5D] rounded-full p-3"></div>
                        <p className="lg:text-lg md:text-base text-sm"> A know-more section that extends students' knowledge </p>
                    </div>

                    <div className="md:flex md:gap-10 gap-8 items-center hidden">
                        <div className="bg-[#849F5D] rounded-full p-3"></div>
                        <p className="lg:text-lg md:text-base text-sm"> A free online e-platform </p>
                    </div>
                </div>

                {/* Sample Button */}
                <a href="/documents/bookSample.pdf" target="_blank" className="md:flex justify-center items-center hidden">
                    <div className="w-full py-3
                        text-base flex items-center justify-center transition-color duration-100
                        rounded-xl bg-[#849F5D] text-white hover:bg-[#758c54] cursor-pointer"> Get Sample Pages </div>
                </a>
            </div>

            {/* PBook Image lg */}
            <div className="md:flex justify-center items-center bg-[#849F5D] col-start-9 col-end-13 rounded-l-[50px] pt-10 pb-20 opacity-90 hidden">
                <div className="relative lg:-translate-x-30 md:-translate-x-20 -translate-x-30">
                    <img
                        src={PBook}
                        alt="PBook Project"
                        width="480px"
                        height="640px"
                        className="floating-animation"
                    />

                    <div className="flex flex-col justify-center items-center bg-[#688a39] rounded-full text-white absolute lg:-top-8 -top-5 lg:-right-8 -right-5 p-5 text-center lg:w-20 lg:h-20 w-16 h-16">
                        <span className="lg:text-lg text-base font-light">Offer</span>
                        <span className="lg:text-xl text-lg -mt-1">$38</span>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default BookSection