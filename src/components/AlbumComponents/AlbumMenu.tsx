import React from 'react';

interface AlbumMenuProps {
    albumTitles: string[];
    activeTitle: string;
    onTitleClick: (title: string) => void;
}

const AlbumMenu: React.FC<AlbumMenuProps> = ({ albumTitles, activeTitle, onTitleClick }) => {
    return (
        <>
            <div className="flex items-center overflow-hidden md:min-h-20 min-h-15 lg:px-24 md:px-18 px-10 md:gap-5">
                {/* Left Arrow Hint */}
                <span className="flex-shrink-0 px-2 text-gray-500">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="md:size-5 size-4"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                </span>

                {/* Scrollable Title List */}
                <div className="overflow-x-auto flex-1 scrollbar-hide">
                    <ul className="flex flex-row lg:space-x-15 md:space-x-8 space-x-4 whitespace-nowrap px-4">
                        {albumTitles.map((title, index) => (
                            <li
                                key={index}
                                className={`cursor-pointer transition-colors duration-200 font-light ${
                                    title === activeTitle
                                        ? 'text-black font-bold underline'
                                        : 'text-gray-500 hover:text-black'
                                    }`}
                                onClick={() => onTitleClick(title)}
                            >
                                {title}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right Arrow Hint */}
                <span className="flex-shrink-0 px-2 text-gray-500">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="md:size-5 size-4"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </span>
            </div>
        </>
    );
};

export default AlbumMenu;