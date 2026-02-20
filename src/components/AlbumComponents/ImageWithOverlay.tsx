import React, { useState, useEffect } from 'react';

export class ImageData {
    imagePath: string;
    imageTitle: string;
    imageDescription: string;
    imageDate: string;

    constructor(
        imagePath: string,
        imageTitle: string,
        imageDescription: string,
        imageDate: string
    ) {
        this.imagePath = imagePath;
        this.imageTitle = imageTitle;
        this.imageDescription = imageDescription;
        this.imageDate = imageDate;
    }
}

interface ImageWithOverlayProps {
    imageData: ImageData;
}

const ImageWithOverlay : React.FC<ImageWithOverlayProps> = ({ imageData }) => {
    const { imagePath, imageTitle, imageDescription, imageDate } = imageData;

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
                    <div className="absolute left-0 bottom-0 flex flex-col items-start md:p-5 p-2">
                        <h3 className="md:text-xl text-lg font-medium">{imageTitle}</h3>
                        <p className="md:text-base text-sm">{imageDescription}</p>
                        <p className="md:text-base md:mt-5 text-sm self-end">{imageDate}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ImageWithOverlay;