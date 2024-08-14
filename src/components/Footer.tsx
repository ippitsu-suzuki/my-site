import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white bg-opacity-10 text-white py-10 mt-20">
      <div className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo */}
        <div className="flex flex-col">
            <div className="flex space-x-2.5 items-center">
                <div className="w-10 h-10 text-xl bg-white bg-opacity-10 rounded-full flex items-center justify-center">
                    🐙
                </div>
                <h1 className="font-bold text-xl text-[#EF9A9A]">Ippitsu Suzuki</h1>
            </div>
            <p className='opacity-50 text-sm mt-2.5'>&copy; Ippitsu Suzuki {new Date().getFullYear()}. All rights reserved.</p>
        </div>

        {/* Navigation Links */}
        <div>
          <h2 className="text-lg font-bold mb-5">Navigation</h2>
          <ul className='space-y-2.5 opacity-75'>
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/about_me" className="hover:underline">About Me</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h2 className="text-lg font-bold mb-5">Connect with Me</h2>
          <ul className="space-y-2.5 opacity-75">
            <li><Link href="https://github.com/ippitsu-suzuki" className="hover:underline">GitHub</Link></li>
            <li><Link href="https://x.com/_suzuk1_" className="hover:underline">Twitter</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;