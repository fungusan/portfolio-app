interface IconProps {
    name: string;
    path: string;
    url: string;
}

const Icon = ({
    name,
    path,
    url
}: IconProps) => {
  return (
    <>
        <a href={url} className="md:w-10 md:h-10 w-7 h-7 rounded-full bg-[#849F5D] flex items-center justify-center transition-transform hover:scale-110" target="_blank">
            <img
                src={path}
                alt={name}
                className="md:w-6 md:h-6 w-5 h-5 filter brightness-0 invert"
            ></img>
        </a>
    </>
  )
}

export default Icon