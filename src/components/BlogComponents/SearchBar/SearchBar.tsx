import React, { type ChangeEvent } from 'react'

interface SearchBarProps {
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onKeyEnter: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    handleSearch: () => void;
    onClearSearch: () => void;
}

const SearchBar : React.FC<SearchBarProps> = ({
    value,
    onChange,
    onKeyEnter,
    handleSearch,
    onClearSearch
}) => {
    return (
       <>
            <div className="w-80 flex items-center px-4 bg-slate-100 rounded-xl">
                {/* Magnifying Glasses Icon */}
                <span className="text-slate-400 cursor-pointer hover:text-black"  onClick={handleSearch}>
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth={1.5} 
                        stroke="currentColor" 
                        className="size-6 mr-2"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </span>

                <input
                    type="text"
                    placeholder="Search..."
                    className="w-full text-sm bg-transparent py-[11px] outline-none"
                    value={value}
                    onChange={onChange}
                    onKeyDown={onKeyEnter}
                    />

                {/* Close Icon */}
                {value && (
                    <span className="text-slate-500 hover:text-black cursor-pointer" onClick={onClearSearch} >
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke-width="1.5" 
                            stroke="currentColor" 
                            className="size-6"
                            >
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </span>
                    )
                }
            </div>
       </>
    )
}

export default SearchBar