import { useState } from "react";
import Link from "next/link";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { FiExternalLink, FiMenu, FiSearch, FiX } from "react-icons/fi";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="sticky py-3.5 bg-white shadow z-50 bg-opacity-10 backdrop-blur px-5 w-full top-0 flex items-center left-0">
            <Link href="/" className="text-lg font-medium">🐙 Ippitsu Suzuki</Link>
            <div className="text-xl ml-auto cursor-pointer md:hidden" onClick={toggleMenu}>
                {isMenuOpen ? <FiX /> : <FiMenu />}
            </div>
            {isMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-white bg-opacity-10 backdrop-blur shadow md:hidden">
                    <div className="flex items-center bg-stone-800 text-sm mb-5 shadow px-3.5 py-1.5 mx-5 rounded">
                        <FiSearch className="text-white opacity-50 mr-2.5" />
                        <input
                            placeholder="Search"
                            className="bg-transparent outline-none flex-1"
                        />
                    </div>
                    <div className="flex flex-col space-y-5 text-sm pb-2.5">
                        <Link href="/about_me" className="ml-5 hover:text-[#EF9A9A] transition-colors duration-200">About Me</Link>
                        <Link href="/articles" className="ml-5 hover:text-[#EF9A9A] transition-colors duration-200">Articles</Link>
                        <Link href="/blog" className="ml-5 hover:text-[#EF9A9A] transition-colors duration-200">Blog</Link>
                        <Link href="/contact" className="ml-5 hover:text-[#EF9A9A] transition-colors duration-200">Contact</Link>
                        <div className="flex justify-center space-x-5 text-xl opacity-50">
                            <Link href="https://github.com/ippitsu-suzuki" target="blank"><FaGithub /></Link>
                            <Link href="https://twitter.com/_suzuk1_" target="blank"><FaTwitter /></Link>
                        </div>
                    </div>
                </div>
            )}
            <div className="hidden md:flex ml-auto space-x-10 items-center">
                <div className="flex items-center bg-black bg-opacity-10 text-sm shadow px-3.5 py-1.5">
                    <FiSearch className="text-white opacity-50 mr-2.5" />
                    <input
                        placeholder="Search"
                        className="bg-transparent outline-none flex-1"
                    />
                </div>
                <div className="space-x-5 text-sm items-center flex">
                    <Link href="/about_me" className="hover:text-[#EF9A9A] transition-colors duration-200">About Me</Link>
                    <Link href="/articles" className="hover:text-[#EF9A9A] transition-colors duration-200">Articles</Link>
                    <Link href="/blog" className="hover:text-[#EF9A9A] transition-colors duration-200">Blog</Link>
                    <Link href="/contact" className="hover:text-[#EF9A9A] transition-colors duration-200">Contact</Link>
                </div>
                <div className="flex text-xl space-x-5 opacity-50 items-center">
                    <Link href="https://github.com/ippitsu-suzuki" target="blank"><FaGithub /></Link>
                    <Link href="https://twitter.com/_suzuk1_" target="blank"><FaTwitter /></Link>
                </div>
            </div>
        </header>
    );
}