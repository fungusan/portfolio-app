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
            <div className="min-h-screen flex flex-col justify-center items-center gap-8">
                <h1 className="md:text-9xl text-7xl text-[#BA4C3D]"> {errorCode} </h1>
                <p className="md:text-base text-sm"> {message} </p>

                <a href="/" className="text-sm font-light py-3 hover:text-gray-500 transition-colors duration-200 px-3">← Back To Home</a>
            </div>
        </>
    )
}

export default ErrorPage