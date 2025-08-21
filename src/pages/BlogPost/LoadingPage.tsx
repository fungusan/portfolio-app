const LoadingPage = () => {
    return (
        <>
            <div className="min-h-screen flex flex-col justify-center items-center gap-8">
                <div className="animate-spin h-12 w-12 border-t-4 rounded-full border-[#849F5D]"></div>
                <p className="text-lg text-gray-700">Loading...</p>
            </div>
        </>
    )
}

export default LoadingPage