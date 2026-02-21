import React, { useState, useEffect } from 'react';
import { type ImageData } from '../../lib/albumType'

interface ImageWithOverlayProps {
    imageData: ImageData;
}

const ImageWithOverlay : React.FC<ImageWithOverlayProps> = ({ imageData }) => {
    const { imageId, imagePath, imageTitle, imageDescription, imageDate } = imageData;

    const [showOverlay, setShowOverlay] = useState(false);

    const handleToggleOverlay = () => {
        setShowOverlay(!showOverlay);
    };

    useEffect(() => {
        if (showOverlay) {
            // Auto-hide after 3 seconds
            const timer = setTimeout(() => {
                setShowOverlay(false);
            }, 3000); 

            return () => clearTimeout(timer);
        }
    }, [showOverlay]);

    return (
        <>
            <div className="relative group" onClick={handleToggleOverlay}>
                <img 
                    src={imagePath}
                    alt={imageTitle}
                    loading="lazy"
                    className="w-full h-auto"
                />

                {/* Overlay Parent */}
                {/* Click on mobile, auto-hide */}
                <div 
                    className={`absolute top-0 left-0 h-full w-full transition-opacity duration-300 flex items-center justify-center text-white bg-black/30 ${
                        showOverlay ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                        }`}
                >
                    {/* Overlay Details */}
                    <div className="absolute bottom-0 left-0 right-0 flex flex-col justify-end items-start md:p-5 p-2">
                        {/* Title and description – left aligned, stacked */}
                        <h3 className="text-xl font-medium">{imageTitle}</h3>
                        <p className="text-base mb-1">{imageDescription}</p>
                        
                        {/* Date – right aligned, at the bottom */}
                        <p className="text-base self-end mt-auto">{imageDate}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ImageWithOverlay;