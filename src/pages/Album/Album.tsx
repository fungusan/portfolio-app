import React, { useState, useEffect } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'
import AlbumnMenu from '../../components/AlbumComponents/AlbumMenu'
import ImageGrid from '../../components/AlbumComponents/ImageGrid'
import AuthModal from '../../components/AuthModal/AuthModal'
import LoadingPage from '../BlogPost/LoadingPage'
import ErrorPage from '../ErrorPage/ErrorPage'
import { isAuthenticated } from '../../lib/authUtils'
import { fetchAlbums, fetchImages, handleAuth } from '../../lib/albumUtils'
import { type AlbumData, type ImageData } from '../../lib/albumType'

const Album = () => {
    const [albums, setAlbums] = useState<AlbumData[]>([]);
    const [albumTitles, setAlbumTitles] = useState<string[]>([]);
    const [images, setImages] = useState<ImageData[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [isSuccess, setIsSuccess] = useState<boolean>(true);

    // Set the active album
    const [activeTitle, setActiveTitle] = useState<string>("");

    // Fetch album titles
    useEffect(() => {
        const loadAlbums = async () => {
            try {
                const fetchedAlbums = await fetchAlbums();
                setAlbums(albums);
            
                const titles = fetchedAlbums.map((album: { albumTitle: string }) => album.albumTitle);
                setAlbumTitles(titles);

                if (titles.length > 0) setActiveTitle(titles[0]); // Set first as active by default
            } catch (err) {
                console.error('Fetch error details:', err);
                setError((err as Error).message);
            } finally {
                setLoading(false);
            }
        };
        loadAlbums();
    }, []);

    // Internal helper to load images
    const loadImages = async (title: string) => {
        try {
            const fetchedImages = await fetchImages(title);
            setImages(fetchedImages); // Update state (append for pagination if needed)
            console.log('Fetched images:', fetchedImages);
        } catch (err) {
        if ((err as Error).message === 'Unauthorized') {
            setIsModalOpen(true); // Re-trigger modal if token invalid/expired
        } else {
            // Handle other errors
            setError((err as Error).message);
        }
        }
    };

    // Control modal open/close
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const onTitleClick = (title: string) => {
        // Public albums are accessible without auth
        const selectedAlbum = albums.find(alb => alb.albumTitle === title);
        const isProtected : boolean = selectedAlbum?.isProtected ?? true;

        if (!isProtected && isAuthenticated()) {
            setActiveTitle(title);
            loadImages(title);
        }
        else {
            setIsModalOpen(true);
        }
    }

    const onModalClose = () => {
        setIsModalOpen(false);
    }

    const onModalSubmit = async (userName: string, password: string) => {
        try {
            await handleAuth(userName,password);
            setIsSuccess(true);
            setIsModalOpen(false);

            if (activeTitle) {
                loadImages(activeTitle);
            }
        } catch (error) {
            setIsSuccess(false);
            console.error('Fetch error:', error);
        }
    }

    if (loading) return <LoadingPage />
    if (error) return <ErrorPage errorCode="500" message="INTERNAL ERROR.." />

    return (
        <>
            <NavBar />

            {/* Auth Modal */}
            {
                isModalOpen && 
                <AuthModal
                    isSuccess={isSuccess}
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

export default Album;