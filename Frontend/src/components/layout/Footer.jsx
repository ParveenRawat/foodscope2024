// Footer.js
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#A3B9A2] py-8 mt-12">
            <div className="max-w-7xl mx-auto px-6 text-center md:text-left">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
                    
                    {/* Logo and Description */}
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-2xl font-bold text-[#333333]">Recipe App</h2>
                        <p className="text-[#4D5D4B] mt-2">Bringing delicious recipes to your kitchen daily!</p>
                    </div>

                    {/* Social Media Links */}
                    <div className="flex gap-6 mb-6 md:mb-0">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#4D5D4B] hover:text-[#333333] transition duration-300">
                            <FaFacebookF size={20} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#4D5D4B] hover:text-[#333333] transition duration-300">
                            <FaTwitter size={20} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#4D5D4B] hover:text-[#333333] transition duration-300">
                            <FaInstagram size={20} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#4D5D4B] hover:text-[#333333] transition duration-300">
                            <FaLinkedinIn size={20} />
                        </a>
                    </div>
                    
                    {/* Copyright */}
                    <div>
                        <p className="text-[#4D5D4B]">
                            &copy; {new Date().getFullYear()} Recipe App. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
