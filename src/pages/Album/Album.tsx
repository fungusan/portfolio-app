import React, { useState, useEffect, useRef, useCallback } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'
import AlbumMenu from '../../components/AlbumComponents/AlbumMenu'
import ImageGrid from '../../components/AlbumComponents/ImageGrid'
import AuthModal from '../../components/AuthModal/AuthModal'
import LoadingPage from '../BlogPost/LoadingPage'
import ErrorPage from '../ErrorPage/ErrorPage'
import { isAuthenticated } from '../../lib/authUtils'
import { fetchAlbums, fetchImages, handleAuth } from '../../lib/albumUtils'
import { type AlbumData, type ImageData } from '../../lib/albumType'

const LIMIT = 10;

const Album = () => {
    const [albums, setAlbums] = useState<AlbumData[]>([]);
    const [albumTitles, setAlbumTitles] = useState<string[]>([]);

    // TODO: Currently the cache grows without bound
    // Plan to implement a LRU cache later
    const [albumImages, setAlbumImages] = useState<Record<string, ImageData[]>>({});

    const [images, setImages] = useState<ImageData[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [isSuccess, setIsSuccess] = useState<boolean>(true);

    // Set the active album
    const [activeTitle, setActiveTitle] = useState<string>("");

    // For images loading
    const [albumMeta, setAlbumMeta] = useState<Record<string, { hasMore: boolean }>>({});
    const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);

    // Ref for IntersectionObserver
    const observerRef = useRef<IntersectionObserver | null>(null);
    const lastImageRef = useCallback((node: HTMLDivElement | null) => {
        if (isLoadingMore) return;

        if (observerRef.current) observerRef.current.disconnect();
            observerRef.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && albumMeta[activeTitle]?.hasMore) {
                loadImages(activeTitle);
            }
        });

        if (node) observerRef.current.observe(node);
    }, [isLoadingMore, activeTitle, albumMeta]);

    // Fetch album titles
    useEffect(() => {
        const loadAlbums = async () => {
            try {
                const fetchedAlbums = await fetchAlbums();
                setAlbums(fetchedAlbums);

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

    // Auto fetch images on page load or activeTitle change
    useEffect(() => {
        if (activeTitle) {
            const selectedAlbum = albums.find(alb => alb.albumTitle === activeTitle);
            const isProtected = selectedAlbum?.isProtected ?? false;

            if (!isProtected || isAuthenticated()) {
                // Set current images from cache
                const cachedImages = albumImages[activeTitle] || [];
                setImages(cachedImages);

                // If no images cached or hasMore, load the next batch (initial if empty)
                const meta = albumMeta[activeTitle] || { hasMore: true };
                if (cachedImages.length === 0 && meta.hasMore) {
                    loadImages(activeTitle);
                }
            }
            else {
                // For protected, wait for user interaction or auth
                setIsModalOpen(true);
                setImages([]);
            }
        }
    }, [activeTitle, albums]);

    // Internal helper to load images
    const loadImages = async (title: string) => {
        // Prevent loading if not active or no more
        if (title !== activeTitle || !(albumMeta[title]?.hasMore ?? true)) return;

        setIsLoadingMore(true);
        const currentImages = albumImages[title] || [];
        const offset = currentImages.length; // Next offset is current length

        try {
            const fetchedImages = await fetchImages(title, offset, LIMIT);

            if (fetchedImages.length === 0) {
                // No more images
                setAlbumMeta(prev => ({ ...prev, [title]: { hasMore: false } }));
            } else {
                // Append to cache and current images
                const updatedImages = [...currentImages, ...fetchedImages];
                setAlbumImages(prev => ({ ...prev, [title]: updatedImages }));
                setImages(updatedImages);

                // Update meta (hasMore true if full batch, else false)
                setAlbumMeta(prev => ({ ...prev, [title]: { hasMore: fetchedImages.length === LIMIT } }));
                // console.log(`Fetched more images for ${title}:`, fetchedImages);
            }
        } catch (err) {
            if ((err as Error).message === 'Unauthorized') {
                // Re-trigger modal if token invalid/expired
                setIsModalOpen(true);
            } else {
                // Handle other errors
                setError((err as Error).message);
            }
        } finally {
            setIsLoadingMore(false);
        }
    };

    // Control modal open/close
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    // Handle UI changes
    const onTitleClick = (title: string) => {
        const selectedAlbum = albums.find(alb => alb.albumTitle === title);
        const isProtected: boolean = selectedAlbum?.isProtected ?? true;
        
        if (!isProtected || isAuthenticated()) {
            setActiveTitle(title);
        }
        else {
            // For protected, wait for user interaction or auth
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
                    <h1 className="lg:text-6xl md:text-5xl text-4xl font-light text-center tracking-wide"> Photoshoots_ </h1>
                    <p className="md:hidden text-gray-700 text-center font-light"> Sharing my best photographs </p>
                    <p className="md:block hidden lg:text-lg text-gray-700 lg:mx-75 mx-20 text-center font-light">
                        I am not a pro photographers, but what’s stopping me from sharing my best photographs?
                    </p>
                </header>
            </div>

            {/* Album Menu */}
            <div className="sticky md:top-[70px] top-[60px] z-10 backdrop-blur-md bg-white/80 overflow-visible">
                <AlbumMenu albumTitles={albumTitles} activeTitle={activeTitle} onTitleClick={onTitleClick} />
            </div>

            {/* Photograph Grid */}
            <div className="mt-5 lg:mt-8 md:mx-15 mx-10">
                <ImageGrid images={images} />

                {albumMeta[activeTitle]?.hasMore && (
                    <div ref={lastImageRef}>
                        {isLoadingMore ? 'Loading more...' : ''}
                    </div>
                )}
            </div>

            <div className="md:mt-0 mt-30">
                <Footer />
            </div>
        </>
    )
}

export default Album;