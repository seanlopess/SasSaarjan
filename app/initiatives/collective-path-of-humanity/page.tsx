'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Playfair_Display, Inter } from 'next/font/google';
import CheckoutFlow from './CheckoutFlow';
import BookInterestForm from '@/components/BookInterestForm';

const playfair = Playfair_Display({ subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });

export default function CollectivePathOfHumanity() {
    return (
        <main className={`min-h-screen bg-[#FAFBFC] pt-24 ${inter.className}`}>

            <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Left Panel (Sticky) - Spans 4 columns */}
                    <aside className="lg:col-span-4 relative order-1">
                        <div className="sticky top-28 space-y-6">
                            {/* Book Cover */}
                            <div className="max-w-[220px] mx-auto aspect-[2/3] relative rounded-xl overflow-hidden shadow-lg bg-gray-200 group">
                                <Image
                                    src="/images/book-cover.jpg"
                                    alt="Solving the Unsolved Book Cover"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                {/* Fallback/Placeholder styling if image fails to load/is missing would need handling, 
                                    but Next/Image usually just errors or shows alt. 
                                    We can add a text overlay if needed, but clean is better. */}
                            </div>

                            {/* Buy Button Component */}
                            {/* Buy Card */}
                            <div className="bg-gradient-to-br from-[#1A4D6F] to-[#2C5F85] rounded-2xl p-6 text-white shadow-lg text-center relative overflow-hidden group blur-[2px] pointer-events-none select-none opacity-70">
                                {/* Glossy Effect */}
                                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                <h3 className={`text-xl font-bold mb-3 ${playfair.className}`}>
                                    Start Your Journey
                                </h3>
                                <p className="text-white/80 mb-6 text-sm leading-relaxed">
                                    Get your copy today and join the movement towards a more prosperous future.
                                </p>

                                <CheckoutFlow />
                            </div>
                        </div>
                    </aside>

                    {/* Right Panel (Content) - Spans 8 columns */}
                    <div className="lg:col-span-8 space-y-16 order-2">

                        {/* Hero / Header Section */}
                        <section className="text-left relative">
                            {/* Background Elements kept subtle or removed to fit column? 
                                The original had full-width BG gradients. 
                                We'll keep them subtle behind this section or just clean. 
                                Let's keep the text clean as requested. */}

                            <span className="inline-block px-4 py-1.5 rounded-full bg-[#E6FFFA] text-[#2C7A7B] font-medium text-sm mb-6 border border-[#2C7A7B]/20">
                                Featured Resource
                            </span>
                            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A4D6F] mb-6 leading-tight ${playfair.className}`}>
                                The Collective Path of Humanity
                            </h1>
                            <h3 className={`text-lg md:text-3xl lg:text-3xl font-bold text-[#1A4D6F] mb-6 ${playfair.className}`}>
                                Solving the Unsolved, Together
                            </h3>

                            <p className="text-xl md:text-xl text-[#2D3748]/80 leading-relaxed">
                                Explore how collective intelligence, co-creation, and aligned values can help address complex global challenges and shape a more resilient and meaningful future.
                            </p>
                        </section>

                        {/* What You Will Gain - Keeping exact logical content */}
                        <section className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
                            <h2 className={`text-2xl font-bold text-[#1A4D6F] mb-6 ${playfair.className}`}>
                                What You Will Gain
                            </h2>
                            <ul className="space-y-4">
                                {[
                                    "A new way to understand global crises as systemic, connected challenges, not isolated problems",
                                    "A practical framework built on five pillars to rethink progress, society, and human development",
                                    "Clarity on how human wisdom and ethics must evolve alongside AI and technology",
                                    "Insight into rebuilding community, culture, and shared meaning in times of uncertainty",
                                    "Inspiration to move from passive concern to active, collective participation in shaping the future"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start gap-4">
                                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#E6FFFA] flex items-center justify-center text-[#2C7A7B] mt-0.5">
                                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </span>
                                        <span className="text-[#2D3748]/80 leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* Express Your Interest - New Section */}
                        <section className="bg-gradient-to-br from-[#1A4D6F] to-[#2C5F85] rounded-2xl p-8 md:p-12 shadow-lg text-white">
                            <div className="text-center mb-8">
                                <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${playfair.className}`}>
                                    Express Your Interest
                                </h2>
                                <p className="text-white/80 max-w-2xl mx-auto">
                                    Join the waiting list to be notified when the book is available.
                                    By registering, you'll get exclusive updates and early access opportunities.
                                </p>
                            </div>
                            <BookInterestForm />
                        </section>

                        {/* Know Your Authors - New Section */}
                        <section>
                            <h2 className={`text-2xl font-bold text-[#1A4D6F] mb-8 ${playfair.className}`}>
                                Know Your Authors
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Author 1 */}
                                <div className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 bg-white hover:shadow-md transition-shadow">
                                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gray-200 overflow-hidden relative">
                                        {/* Placeholder for Author Image */}
                                        <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-xs text-center p-1">
                                            Photo
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className={`text-lg font-bold text-[#1A4D6F] ${playfair.className}`}>
                                            Happy Ajay Sanghani
                                        </h4>
                                        <p className="text-sm text-gray-500">Author</p>
                                    </div>
                                </div>

                                {/* Author 2 */}
                                <div className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 bg-white hover:shadow-md transition-shadow">
                                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gray-200 overflow-hidden relative">
                                        {/* Placeholder for Author Image */}
                                        <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-xs text-center p-1">
                                            Photo
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className={`text-lg font-bold text-[#1A4D6F] ${playfair.className}`}>
                                            Dr. Surendra Pathak
                                        </h4>
                                        <p className="text-sm text-gray-500">Co-Author</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Contextual Alignment */}
                        <section className="pt-8 border-t border-gray-200">
                            <p className={`text-lg italic text-[#2D3748]/60 ${playfair.className}`}>
                                "This resource is a cornerstone of the SaSarjan initiative, designed to empower every individual with the knowledge to create and sustain wealth for the greater good."
                            </p>
                        </section>

                    </div>
                </div>
            </div>
        </main>
    );
}
