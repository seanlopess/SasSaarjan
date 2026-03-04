'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Playfair_Display, Inter } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });

const footerLinks = {
    main: [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/#philosophy' },
        { name: 'Initiatives', href: '/#initiatives' },
        { name: 'Join', href: '/login' },
        { name: 'Contact', href: '/contact' },
    ],
    resources: [
        { name: 'The Collective Path of Humanity', href: '/initiatives/collective-path-of-humanity' },
        { name: 'Resources', href: '/initiatives/collective-path-of-humanity' },
    ]
};

const Footer = () => {
    return (
        <footer className={`relative bg-[#FAFBFC] pt-16 pb-8 border-t border-[#1A4D6F]/5 ${inter.className}`}>

            {/* Decorative Top Gradient Line - Matches Navbar style */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#1A4D6F]/20 to-transparent" />

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">

                    {/* Brand Section */}
                    <div className="md:col-span-4 space-y-6">
                        <Link href="/" className="inline-block relative w-48 h-14 opacity-90 hover:opacity-100 transition-opacity duration-300">
                            <Image
                                src="/logo.png"
                                alt="Sasarjan Logo"
                                fill
                                className="object-contain object-left"
                            />
                        </Link>
                        <p className={`text-[#2D3748]/70 leading-relaxed max-w-sm ${playfair.className} italic`}>
                            Co-creating a world where knowledge, opportunity, and resources flow freely for collective prosperity.
                        </p>
                    </div>

                    {/* Links Sections */}
                    <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-2 gap-8 md:gap-4">
                        {/* Column 1 - Quick Links */}
                        <div className="space-y-4">
                            <h4 className={`text-[#1A4D6F] font-semibold text-lg ${playfair.className}`}>Explore</h4>
                            <ul className="space-y-3">
                                {footerLinks.main.map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.href} className="text-[#2D3748]/70 hover:text-[#1A4D6F] transition-colors duration-200 text-sm">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 2 - Resources */}
                        <div className="space-y-4">
                            <h4 className={`text-[#1A4D6F] font-semibold text-lg ${playfair.className}`}>Resources</h4>
                            <ul className="space-y-3">
                                {footerLinks.resources.map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.href} className="text-[#2D3748]/70 hover:text-[#1A4D6F] transition-colors duration-200 text-sm">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-[#1A4D6F]/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[#2D3748]/50 text-xs">
                        © {new Date().getFullYear()} SaSarjan. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link href="#" className="text-[#2D3748]/50 hover:text-[#1A4D6F] text-xs transition-colors">Privacy Policy</Link>
                        <Link href="#" className="text-[#2D3748]/50 hover:text-[#1A4D6F] text-xs transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
