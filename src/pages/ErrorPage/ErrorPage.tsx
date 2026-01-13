import NavBar from '../../components/NavBar/NavBar'
import yan_yan_hero from '../../assets/error_page_images/yan_yan_hero.jpg'
// import Footer from '../../components/Footer/Footer'

interface ErrorPageProps {
    errorCode: string
    message: string,
}

const ErrorPage = ({
    errorCode,
    message
}: ErrorPageProps) => {
    return (
        <>
            <NavBar />

            <section className="min-h-screen flex flex-col lg:grid lg:grid-cols-12 items-center gap-10 p-10 lg:mt-10 mt-20">
                {/* Error Message */}
                <div className="flex flex-col lg:col-start-1 lg:col-span-3 lg:gap-10 gap-4 items-center lg:border-none border-t border-b border-[#BA4C3D] py-2">
                    <p className="lg:inline hidden text-8xl lg:font-light text-[#BA4C3D]/90"> {errorCode} </p>
                    <h1 className="md:text-5xl lg:text-center text-3xl text-[#BA4C3D]/90"> {message} </h1>
                    <p className="lg:hidden md:text-4xl text-2xl text-[#BA4C3D]"> {errorCode} </p>
                </div>

                {/* Hero Photo */}
                <div className="relative lg:col-start-4 lg:col-span-5 mx-auto w-full md:flex md:justify-center">
                    <img
                        src={yan_yan_hero}
                        alt="Yan yan"
                        className="object-cover md:translate-x-0 -translate-x-20 shadow-lg rounded-[80px] lg:max-w-full md:max-w-3/5"
                    />

                    <div className="absolute bg-[#849F5D]/80 lg:w-20 w-14 lg:h-78 md:h-64 h-56 md:hidden lg:-right-10 right-12 lg:top-60 md:top-40 top-20" />
                </div>

                {/* Twist Text */}
                <h1 className="text-[#849F5D] lg:col-start-9 lg:col-span-3 lg:font-semibold font-bold lg:text-7xl md:text-5xl text-4xl lg:text-center text-right lg:-translate-x-30 lg:-translate-y-60">
                    BUT GIRLFRIEND FOUND!
                </h1>

                {/* Back Button */}
                <a href="/" className="lg:hidden text-xl font-light py-3 hover:text-gray-500 transition-colors duration-200 px-3">
                    ← Back To Home
                </a>
            </section>
        </>
    )
}

export default ErrorPage