'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Playfair_Display, Inter } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Philosophy', href: '/#philosophy' },
    { name: 'Initiatives', href: '/#initiatives' },
    { name: 'Resources', href: '/initiatives/collective-path-of-humanity' },
    { name: 'Impact', href: '#' },
    { name: 'Connect', href: '/contact' },
    { name: 'Join', href: '/login' },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const navRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
        if (navRef.current) {
            const rect = navRef.current.getBoundingClientRect();
            setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        }
    };

    return (
        <nav
            ref={navRef}
            onMouseMove={handleMouseMove}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out 
        ${scrolled ? 'py-4 bg-white/10 backdrop-blur-md shadow-sm' : 'py-6 bg-transparent'}
        ${inter.className}
      `}
        >
            {/* Ripple/Glow Effect Layer */}
            <div
                className="absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-300 hover:opacity-100"
                style={{
                    background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(95, 163, 208, 0.08), transparent 40%)`
                }}
            />

            {/* Scroll connection line (bottom border that fades in) */}
            <div className={`absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#1A4D6F]/20 to-transparent transition-opacity duration-500 ${scrolled ? 'opacity-100' : 'opacity-0'}`} />

            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between relative z-10">
                {/* Logo Section */}
                <Link href="/" className="flex flex-col group cursor-pointer animate-[fadeIn_0.8s_ease-out]">
                    <div className="relative w-52 h-16">
                        <Image
                            src="/logo.png"
                            alt="Sasarjan Logo"
                            fill
                            className="object-contain object-left"
                            priority
                        />
                    </div>
                </Link>
                {/* Navigation Links */}
                <div className="hidden md:flex items-center gap-8 md:gap-12">
                    {navLinks.map((link, index) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="relative text-sm font-medium text-[#2D3748]/80 hover:text-[#1A4D6F] transition-colors duration-300 group py-2 animate-[fadeIn_0.8s_ease-out]"
                            style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                        >
                            {link.name}
                            {/* Hover Glow on Text */}
                            <span className="absolute inset-0 blur-md bg-[#5FA3D0]/0 group-hover:bg-[#5FA3D0]/20 rounded-full transition-all duration-300 -z-10 scale-0 group-hover:scale-150" />
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Icon (Simple placeholder for responsiveness) */}
                <button className="md:hidden text-[#113046]">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
