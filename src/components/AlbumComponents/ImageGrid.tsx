import React from 'react'
import { type ImageData } from '../../lib/albumType'
import ImageWithOverlay from './ImageWithOverlay'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

interface ImageGridProps {
    images: ImageData[];
}

const ImageGrid : React.FC<ImageGridProps> = ({ images }) => {
    return (
        <>
            <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 1, 900: 2, 1200: 3 }}
                gutterBreakPoints={{ 350: '8px', 900: '12px', 1200: '16px' }}
            >
            <Masonry>
                {images.map((image, index) => (
                    <ImageWithOverlay
                        key={index}
                        imageData={image}
                    />
                ))}
            </Masonry>
            </ResponsiveMasonry>
        </>
    )
}

export default ImageGrid;