import React, { useState } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'
import AlbumnMenu from '../../components/AlbumComponents/AlbumMenu'
import ImageGrid from '../../components/AlbumComponents/ImageGrid'
import AuthModal from '../../components/AuthModal/AuthModal'

const Album = () => {
    const albumTitles: string[] = [
        'Public', 'Days', 'Portrait', 'View'
    ];

    // Set the active album
    const [activeTitle, setActiveTitle] = useState<string>('Public');

    // Control modal open/close
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const onTitleClick = (title: string) => {
        // Public album is accessible without auth
        if (title === 'Public') {
            setActiveTitle(title);
            console.log(title + " clicked");
        }
        else {
            setIsModalOpen(true);
            // TODO: Handle auth, close the modal
        }
    }

    const onModalClose = () => {
        setIsModalOpen(false);
    }

    const onModalSubmit = (name: string, password: string) => {
        console.log("The user name is " + name);

        // For security!!! Must remove it later
        console.log("The user password is " + password);
        setIsModalOpen(false);
    }

    const images = [
        {
            imagePath: "/blog_images/blog_4/graph_7.png",
            imageTitle: "Photoshoot in Osaka, Japan",
            imageDescription: "This is taken in Harry Potter castle, Universal Studio",
            imageDate: "Jun 05, 2024"
        },
        {
            imagePath: "/blog_images/blog_4/graph_6.png",
            imageTitle: "Photoshoot in Osaka, Japan",
            imageDescription: "This is taken in Harry Potter castle, Universal Studio",
            imageDate: "Jun 05, 2024"
        },
        {
            imagePath: "/blog_images/blog_4/graph_3.png",
            imageTitle: "Photoshoot in Osaka, Japan",
            imageDescription: "This is taken in Harry Potter castle, Universal Studio",
            imageDate: "Jun 05, 2024"
        },
        {
            imagePath: "/blog_images/blog_4/graph_2.png",
            imageTitle: "Photoshoot in Osaka, Japan",
            imageDescription: "This is taken in Harry Potter castle, Universal Studio",
            imageDate: "Jun 05, 2024"
        },
    ];

    return (
        <>
            <NavBar />

            {/* Auth Modal */}
            {
                isModalOpen && 
                <AuthModal 
                    onClose={onModalClose} 
                    onSubmit={onModalSubmit} 
                />
            }
            
            <div className="grid grid-cols-20 mt-20">
                <div className="col-start-1 col-end-2 bg-[#849F5D]"></div>
                
                {/* Title Section */}
                <header className="col-start-3 col-end-18 md:space-y-5 space-y-2 lg:min-h-68 md:min-h-56 min-h-32 flex flex-col items-center justify-center">
                    <h1 className="lg:text-6xl md:text-4xl text-3xl font-light text-center tracking-wide"> Photoshoots_ </h1>
                    <p className="md:hidden text-sm text-gray-700 text-center font-light"> Sharing my best photographs </p>
                    <p className="md:block hidden lg:text-lg text-gray-700 lg:mx-75 mx-20 text-center font-light">
                        I am not a pro photographers, but what’s stopping me from sharing my best photographs?
                    </p>
                </header>
            </div>

            {/* Album Menu */}
            <div className="sticky md:top-[70px] top-[60px] z-10 backdrop-blur-md bg-white/80 overflow-visible">
                <AlbumnMenu albumTitles={albumTitles} activeTitle={activeTitle} onTitleClick={onTitleClick} />
            </div>

            {/* Photograph Grid */}
            <div className="mt-5 lg:mt-8 md:mx-15 mx-10">
                <ImageGrid images={images}/>
            </div>

            <div className="md:mt-0 mt-30">
                <Footer />
            </div>
        </>
    )
}

export default Album