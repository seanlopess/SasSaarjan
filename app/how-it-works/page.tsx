'use client';

import React from 'react';
import { Playfair_Display, Inter } from 'next/font/google';
import Link from 'next/link';

const playfair = Playfair_Display({ subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });

const circles = [
    {
        title: 'NewComer Circle',
        tagline: 'Begin your journey in the ecosystem',
        focus: [
            'Orientation to SaSarjan',
            'Understanding the ecosystem',
            'Community introduction',
            'Discovering opportunities'
        ],
        icon: '🌱',
        borderColor: 'border-blue-200',
        delay: '0ms'
    },
    {
        title: 'Learning Circle',
        tagline: 'Learn and grow together',
        alignment: 'Co-Learn',
        focus: [
            'Knowledge sharing',
            'Workshops',
            'Skill development',
            'Collaborative learning'
        ],
        icon: '📚',
        borderColor: 'border-emerald-200',
        delay: '100ms'
    },
    {
        title: 'Project Circle',
        tagline: 'Turn ideas into real work',
        alignment: 'Co-Build',
        focus: [
            'Working on real initiatives',
            'Building products or solutions',
            'Collaborative projects'
        ],
        icon: '🏗️',
        borderColor: 'border-amber-200',
        delay: '200ms'
    },
    {
        title: 'Freelance / Founder Circle',
        tagline: 'Earn, lead, and create impact',
        alignment: 'Co-Earn and Co-Create',
        focus: [
            'Freelancing opportunities',
            'Entrepreneurship',
            'Venture building',
            'Value creation'
        ],
        icon: '🚀',
        borderColor: 'border-purple-200',
        delay: '300ms'
    }
];

const principles = [
    { title: 'Co-Learn', description: 'Acquire knowledge collaboratively with others in the community.' },
    { title: 'Co-Build', description: 'Participate in the architecture and creation of real-world solutions.' },
    { title: 'Co-Earn', description: 'Unlock diverse revenue streams through your skills and contributions.' },
    { title: 'Co-Create', description: 'Collaborate to bring entirely new paradigms and businesses to life.' }
];

export default function HowItWorks() {
    return (
        <main className={`min-h-screen bg-[#FAFBFC] pt-32 pb-24 ${inter.className}`}>
            {/* Section 1: Introduction */}
            <section className="max-w-5xl mx-auto px-6 text-center mb-20 animate-[fadeIn_1s_ease-out]">
                <h1 className={`text-4xl md:text-6xl font-bold text-[#1A4D6F] mb-6 ${playfair.className}`}>
                    How the SaSarjan Ecosystem Works
                </h1>
                <p className={`text-xl md:text-2xl text-[#2C5F85] italic mb-8 font-medium ${playfair.className}`}>
                    A pathway for individuals to grow through learning, building, earning, and creating together.
                </p>
                <h2 className="text-2xl font-bold text-[#113046] mb-4">A Pathway to Grow Together</h2>
                <p className="max-w-3xl mx-auto text-lg text-[#2D3748]/80 leading-relaxed">
                    The SaSarjan ecosystem is designed as a collaborative journey. From the moment you join, you are invited to move through stages of increasing engagement, impact, and reward.
                </p>
            </section>

            {/* Section 2: Visual Pathway & Circles */}
            <section className="max-w-7xl mx-auto px-6 mb-32">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {circles.map((circle) => (
                        <div
                            key={circle.title}
                            className={`relative p-8 rounded-2xl bg-white border ${circle.borderColor} shadow-sm hover:shadow-xl transition-all duration-300 group animate-[fadeIn_0.8s_ease-out_forwards] opacity-0`}
                            style={{ animationDelay: circle.delay }}
                        >
                            <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                                {circle.icon}
                            </div>
                            <h3 className={`text-xl font-bold text-[#1A4D6F] mb-1 ${playfair.className}`}>
                                {circle.title}
                            </h3>
                            {circle.alignment && (
                                <p className="text-xs font-bold text-[#5FA3D0] uppercase tracking-wider mb-2">
                                    {circle.alignment}
                                </p>
                            )}
                            <p className="text-[#2D3748] font-semibold text-sm mb-4">
                                {circle.tagline}
                            </p>
                            <ul className="space-y-3">
                                {circle.focus.map((item) => (
                                    <li key={item} className="flex items-start text-sm text-[#2D3748]/70">
                                        <span className="mr-2 text-blue-400 mt-0.5">•</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Visual Pathway Connector */}
                <div className="hidden lg:flex justify-around items-center px-12 mt-12 opacity-40">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="flex-1 flex items-center justify-center">
                            <svg className="w-12 h-12 text-[#1A4D6F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                            </svg>
                        </div>
                    ))}
                </div>
            </section>

            {/* Section 3: Philosophy / Core Principles */}
            <section className="bg-white py-24 border-y border-[#1A4D6F]/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className={`text-3xl md:text-4xl font-bold text-[#1A4D6F] mb-4 ${playfair.className}`}>
                            Our Core Principles
                        </h2>
                        <div className="w-24 h-1 bg-[#1A4D6F] mx-auto rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {principles.map((p, index) => (
                            <div
                                key={p.title}
                                className="text-center animate-[fadeIn_0.8s_ease-out_forwards] opacity-0"
                                style={{ animationDelay: `${index * 150}ms` }}
                            >
                                <div className="text-4xl font-bold text-[#1A4D6F]/10 mb-[-1.5rem] select-none">
                                    {String(index + 1).padStart(2, '0')}
                                </div>
                                <h3 className={`text-2xl font-bold text-[#113046] mb-4 relative z-10 ${playfair.className}`}>
                                    {p.title}
                                </h3>
                                <p className="text-[#2D3748]/70 leading-relaxed">
                                    {p.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA/Navigation */}
            <section className="mt-24 text-center">
                <Link href="/contact" className="inline-block px-10 py-4 bg-[#1A4D6F] text-white rounded-full font-bold text-lg hover:bg-[#133A55] transition-all transform hover:-translate-y-1 shadow-lg shadow-[#1A4D6F]/20">
                    Ready to Start Your Journey?
                </Link>
                <div className="mt-12">
                    <Link href="/" className="text-[#1A4D6F] font-semibold hover:underline">
                        ← Back to Home
                    </Link>
                </div>
            </section>
        </main>
    );
}
