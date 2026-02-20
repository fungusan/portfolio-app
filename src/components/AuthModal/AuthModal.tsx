import React from 'react'

interface AuthModalProps {
    onClose: () => void;
    onSubmit: (name: string, password: string) => void;
}

const AuthModal = ({ onClose, onSubmit }: AuthModalProps) => {
    // Control externally in parent page
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const name = (e.target as any).name.value;
        const password = (e.target as any).password.value;
        onSubmit(name, password);
    };

    return (
        <>
            {/* Black Overlay */}
            <div className="fixed inset-0 flex items-center justify-center bg-black/20 z-50">

                {/* Auth Form */}
                <div className="flex flex-col justify-center items-center relative py-5 gap-4 rounded-lg shadow-lg bg-[#FAFAFA] lg:w-2/5 md:w-3/5 w-4/5">
                    <div className="bg-[#849F5D] lg:h-10 h-7 w-4/5 -mt-5 mb-2"></div>

                    {/* Header Section */}
                    <div className="flex flex-col justify-center items-center space-y-2">
                        <h1 className="md:text-4xl text-2xl font-light tracking-wide"> This is protected. </h1>
                        <p className="lg:text-base text-sm font-light text-center mx-10"> 
                            Please enter credentials to confirm your identity 
                        </p>
                    </div>

                    {/* Form Section */}
                    <form className="w-4/5" onSubmit={handleSubmit}>
                        <div className="lg:mb-6 mb-5">
                            <label className="block mb-2 lg:text-base text-sm font-medium text-gray-900"> Name* </label>
                            <input required type="text" id="name" name="name" autoComplete="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full lg:p-2.5 p-1.5 ray-400" />
                        </div>

                        <div className="lg:mb-12 md:mb-8 mb-6">
                            <label className="block mb-2 lg:text-base text-sm font-medium text-gray-900"> Password* </label>
                            <input required type="password" id="password" name="password" autoComplete="current-password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full lg:p-2.5 p-1.5 ray-400" />
                        </div>

                        <div className="flex gap-5 justify-end">
                            <button type="button" onClick={onClose} className="text-white bg-[#BA4C3D] hover:hover:bg-[#B22222] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-10 lg:py-3 py-2 text-center"> Close </button>
                            <button type="submit" className="text-white bg-[#849F5D] hover:hover:bg-[#758c54] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-10 lg:py-3 py-2 text-center"> Send </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AuthModal;