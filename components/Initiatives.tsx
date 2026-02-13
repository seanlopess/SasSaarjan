'use client';

import React from 'react';
import { Playfair_Display, Inter } from 'next/font/google';
import Link from 'next/link';
import { initiatives } from '@/lib/initiativesData';

const playfair = Playfair_Display({ subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });

const Initiatives = () => {
    return (
        <section id="initiatives" className={`py-24 bg-[#FAFBFC] relative ${inter.className}`}>
            {/* Subtle Gradient Overlay - Matches Navbar/Hero feel */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50/50 via-transparent to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className={`text-3xl md:text-4xl font-bold text-[#1A4D6F] mb-4 ${playfair.className}`}>
                        Growing Multiple Ecosystems
                    </h2>
                    <p className="text-lg text-[#2D3748]/70 leading-relaxed">
                        Each initiative strengthens the others — creating value that flows across the entire network.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {initiatives.map((item) => {
                        const href = item.isInternalPage
                            ? `/initiatives/${item.slug}`
                            : `/initiatives/${item.slug}`;

                        // We wrap the whole card content in a Link if it's clickable
                        // But originally only "Visit" was the link. 
                        // User request: "Clicking a card should open a dedicated placeholder detail page"
                        // So the whole card should probably be clickable or at least have a clear action

                        return (
                            <div
                                key={item.id}
                                className="group relative bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col h-full border border-gray-100/80"
                            >
                                <Link href={href} className="absolute inset-0 z-0" aria-label={`View details for ${item.title}`} />

                                {/* Consistent Brand Color Top Border */}
                                <div className="h-1.5 w-full bg-[#1A4D6F]" />

                                <div className="p-8 flex-1 flex flex-col relative z-10 pointer-events-none">
                                    <div className="text-4xl mb-6">{item.icon}</div>

                                    <h3 className={`text-xl font-bold text-[#1A4D6F] mb-1 ${playfair.className}`}>
                                        {item.title}
                                    </h3>
                                    <p className="text-sm font-medium text-[#2C5F85] mb-4">
                                        {item.subtitle}
                                    </p>
                                    <p className="text-[#2D3748]/70 text-sm leading-relaxed mb-8 flex-1">
                                        {item.description}
                                    </p>

                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
};

export default Initiatives;
