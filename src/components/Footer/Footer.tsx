import Icon from './Icon';

import githubIcon from '../../assets/media_icons/github.png';
import discordIcon from '../../assets/media_icons/discord.png';
import twitterIcon from '../../assets/media_icons/twitter-alt.png';
import youtubeIcon from '../../assets/media_icons/youtube.png';
import leetcodeIcon from '../../assets/media_icons/leetcode.png';

const Footer = () => {
    const icons = [
        {
            name: "Github icon",
            path: githubIcon, 
            url: "https://github.com/fungusan",
        },
        {
            name: "Discord icon",
            path: discordIcon,
            url: "https://discordapp.com/users/818423281539219466",
        },
        {
            name: "X icon",
            path: twitterIcon,
            url: "https://x.com/GuyguySir",
        },
        {
            name: "Youtube icon",
            path: youtubeIcon,
            url: "https://www.youtube.com/@guyguysir3216",
        },
        {
            name: "Leetcode icon",
            path: leetcodeIcon,
            url: "https://leetcode.com/u/fungusan/",
        },
    ];

    return (
        <footer className="bg-gray-50 md:h-65 h-40 md:mt-20 -mt-20 flex flex-col items-center justify-center md:space-y-10 space-y-5">
            {/* Icons */}
            <div className="flex space-x-6">
                {icons.map((icon, index) => (
                    <Icon 
                        key={index}
                        name={icon.name}
                        path={icon.path}
                        url={icon.url}
                    />
                ))}
            </div>

            {/* Links */}
            <div className="flex space-x-10">
                <a href="/" className="md:text-sm text-xs font-light hover:text-gray-500 transition-colors duration-200">Home</a>
                <a href="/blogs" className="md:text-sm text-xs font-light hover:text-gray-500 transition-colors duration-200">Blogs</a>
                <a href="/contact" className="md:text-sm text-xs font-light hover:text-gray-500 transition-colors duration-200">Contact</a>
            </div>

            <p className="md:text-sm text-xs font-light text-gray-900"> © Copyright 2025. Designed by Fungusan. Credit to Flaticon. </p>
        </footer>
    )
}

export default Footer