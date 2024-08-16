// src/components/Footer.js
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto text-center">
                <p className="text-sm">&copy; {new Date().getFullYear()} Food Junction. All rights reserved.</p>
                <ul className="flex justify-center space-x-4 mt-4">
                    <li>
                        <a href="#" className="hover:underline">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">
                            Menu
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">
                            About Us
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">
                            Contact Us
                        </a>
                    </li>
                </ul>
                <div className="mt-4">
                    <a href="#" className="mx-2 hover:underline">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="mx-2 hover:underline">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="mx-2 hover:underline">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" className="mx-2 hover:underline">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
