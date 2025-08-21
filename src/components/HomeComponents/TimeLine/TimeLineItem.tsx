interface TimeLineItemProps {
    title: string;
    subtitle: string;
    content?: string;
    align?: 'left' | 'center' | 'right';
    titleSize?: string; // Tailwind size class (e.g., 'text-2xl')
    subtitleSize?: string; // Tailwind size class
    contentSize?: string; // Tailwind size class
}

const TimeLineItem = ({
    title,
    subtitle,
    content = '',
    align = 'left',
    titleSize = 'text-xl',
    subtitleSize = 'text-lg',
    contentSize = 'text-base'
}: TimeLineItemProps) => {
    // Alignment classes
    const alignment = {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right'
    }[align];

    return (
        <>
            <div className="flex justify-between items-start gap-10">
                {(align === 'left') && (
                    <div className="flex-shrink-0">
                        <div className="bg-[#849F5D] rounded-full w-6 h-6"></div>
                    </div>
                )}

                <div className={`${alignment} space-y-2`}>
                    {/* Title - fixed bold style */}
                    <h1 className={`${titleSize} font-bold text-gray-900`}>
                        {title}
                    </h1>
                    
                    {/* Subtitle - fixed semibold style */}
                    <h2 className={`${subtitleSize} font-semibold text-gray-700`}>
                        {subtitle}
                    </h2>
                    
                    {/* Optional content - fixed normal style */}
                    {content && (
                        <p className={`${contentSize} font-normal text-gray-600`}>
                        {content}
                        </p>
                    )}
                </div>

                {(align === 'right') && (
                    <div className="flex-shrink-0">
                        <div className="bg-[#849F5D] rounded-full w-6 h-6"></div>
                    </div>
                )}
            </div>
        </>
    )
}

export default TimeLineItem