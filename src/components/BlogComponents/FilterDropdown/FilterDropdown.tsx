import React from 'react';
import Select from 'react-dropdown-select';

interface FilterDropdownProps {
    isDropdownOpen: boolean;
    setIsDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
    tags: string[];
    selectedTags: string[];
    onTagChange: (tags: string[]) => void;
}

const FilterDropdown = ({
    isDropdownOpen,
    setIsDropdownOpen,
    tags,
    selectedTags,
    onTagChange
}: FilterDropdownProps) => {
    // Format tags for the dropdown component
    const dropdownOptions = tags.map(tag => ({
        value: tag,
        label: tag
    }));

    // Convert selected tags to the format expected by react-dropdown-select
    const selectedOptions = selectedTags.map(tag => ({
        value: tag,
        label: tag
    }));

    const handleChange = (values: any[]) => {
        // Extract just the tag strings from the selected options
        const newSelectedTags = values.map(item => item.value);
        onTagChange(newSelectedTags);
    };

    // Custom content renderer to show selected tags in the dropdown button
    const customContentRenderer = ({ state, methods }: any) => {
        return (
            <div 
                className="flex items-center justify-between w-full"
                onClick={() => methods.dropDown('toggle')}
            >
                <div className="flex items-center">
                    <span className="text-sm"> Tags </span>
                    {state.values.length > 0 && (
                        <span className="ml-3 bg-[#849F5D]/90 text-white text-xs font-semibold w-5 h-5 rounded-full flex justify-center items-center">
                            {state.values.length}
                        </span>
                    )}
                </div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={`size-5 text-gray-500 transition-transform duration-200 ${isDropdownOpen && 'rotate-180'}`}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </div>
        );
    };

    // Custom dropdown item renderer
    const customItemRenderer = ({ item, methods }: any) => (
        <div 
            className={`px-2 py-3 hover:bg-slate-200 cursor-pointer flex items-center transition-colors ${methods.isSelected(item) ? 'bg-slate-100' : ''}`}
            onClick={() => methods.addItem(item)}
        >
            <input 
                type="checkbox" 
                checked={methods.isSelected(item)} 
                onChange={() => {}} 
                className="ml-1 mr-3 form-checkbox rounded-md size-4 text-[#849F5D] border-gray-300 focus:ring-[#849F5D] focus:ring-offset-0 transition-colors"
            />
            <span className="text-sm">
                {item.label}
            </span>
        </div>
    );

    return (
        <div className="min-w-48">
            <Select
                options={dropdownOptions}
                values={selectedOptions}
                onChange={handleChange}
                multi={true}
                contentRenderer={customContentRenderer}
                itemRenderer={customItemRenderer}
                dropdownHandle={false}
                className="!bg-slate-100 !border-0 !rounded-xl !outline-none !px-4 !py-2"
                placeholder=""
                searchable={true}
                searchBy="label"
                noDataLabel="No tags found"
                color="#3b82f6"
                dropdownHeight="300px"
                onDropdownOpen={() => setIsDropdownOpen(!isDropdownOpen)}
                onDropdownClose={() => setIsDropdownOpen(!isDropdownOpen)}
            />
        </div>
    );
};

export default FilterDropdown;