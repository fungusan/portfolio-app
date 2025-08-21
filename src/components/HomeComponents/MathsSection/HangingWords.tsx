const HangingWords = () => {
  return (
    <>
        <div className="lg:flex justify-center items-center absolute right-10 -top-30 hidden">
            <div className="flex flex-col gap-12 rotate-45 w-64">
                <span className="rotate-45 text-2xl text-gray-700 font-extralight translate-16"> Probability </span>
                <span className="rotate-45 text-2xl text-gray-700 font-extralight"> Calculus </span>
                <span className="rotate-45 text-2xl text-gray-700 font-extralight -translate-16"> Triangle </span>
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-0.25 h-120 bg-gray-200 transform -rotate-55"></div>
            </div>
        </div>
    </>
  )
}

export default HangingWords