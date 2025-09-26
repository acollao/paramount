// src/components/Navbar.jsx
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Phone, Mail } from "lucide-react";
import logo from '../assets/logo.png'

export default function Navbar() {
     const [isOpen, setIsOpen] = useState(false);

  return (
     <nav className="bg-[#FFFFFF] text-black sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Left side */}
                <div className="flex flex-col items-end text-right space-y-1">
                    {/* Phone */}
                    <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4 text-green-600" />
                        <span>800 718 2924</span> |&nbsp;
                        <Mail className="w-4 h-4 text-green-600" />
                        <span>info@paramountlimosvc.com</span>
                    </div>
                </div>
                <hr/>
            <div className="flex items-center justify-between h-16">
                {/* Logo */}
                {/* <div className="flex-shrink-0 text-left">
                    <h3 className="text-md font-bold leading-tight">
                        PARAMOUNT <br /> TRANSPORTATION INC.
                    </h3>
                </div> */}
                <div className="flex-shrink-0 text-left">
                    <img 
                    src={logo}   // <-- replace with your actual logo path
                    alt="Paramount Transportation Inc." 
                    className="h-20 w-auto mb-5"  // controls size
                    />
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-6">
                {/* <Link to="/" className="font-semibold hover:underline transition-colors duration-200">
                    Home
                </Link> */}
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                    `font-semibold hover:underline transition-colors duration-200 ${
                        isActive ? "text-green-600 underline" : "text-gray-800"
                    }`
                    }
                >
                    Home
                </NavLink>
                <NavLink to="/services" 
                     className={({ isActive }) =>
                    `font-semibold hover:underline transition-colors duration-200 ${
                        isActive ? "text-green-600 underline" : "text-gray-800"
                    }`
                    }
                >
                    Services
                </NavLink>
                <NavLink to="/fleet" 
                className={({ isActive }) =>
                    `font-semibold hover:underline transition-colors duration-200 ${
                        isActive ? "text-green-600 underline" : "text-gray-800"
                    }`
                    }>
                    Our Fleet
                </NavLink>
                
                <NavLink to="/about" className={({ isActive }) =>
                    `font-semibold hover:underline transition-colors duration-200 ${
                        isActive ? "text-green-600 underline" : "text-gray-800"
                    }`
                    }>
                    About
                </NavLink>
                <NavLink
                to="/contact"
                className={({ isActive }) =>
                    `font-semibold border px-4 py-1 rounded hover:underline transition-colors duration-200 ${
                        isActive ? "hover:bg-white hover:text-black transition text-green-600" : "text-gray-800"
                    }`
                    }
                
                >
                    CONTACT
                </NavLink>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="focus:outline-none"
                    >
                        <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                        ></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
        <Link to="/" className="block hover:underline">
        Home
        </Link>
        <Link to="/fleet" className="block hover:underline">
        Our Fleet
        </Link>
        <Link to="/services" className="block hover:underline">
        Services
        </Link>
        <Link to="/about" className="block hover:underline">
        About
        </Link>
        <Link
        to="/contact"
        className="block border px-4 py-1 rounded hover:bg-white hover:text-black transition"
        >
        CONTACT
        </Link>
        </div>
        )}
    </nav>

  );
}
