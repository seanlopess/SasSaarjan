'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Playfair_Display, Inter } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });

const About = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [hoveredCircle, setHoveredCircle] = useState<string | null>(null);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true);
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="philosophy"
            ref={sectionRef}
            className={`relative w-full min-h-[80vh] flex items-center bg-gradient-to-b from-[#FAFBFC] via-[#FDFCF8] to-[#F7F5F0] overflow-hidden py-24 md:py-32 ${inter.className}`}
        >
            <div className="max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row gap-12 md:gap-24 items-center">

                {/* Left Column: Content (60%) */}
                <div className={`md:w-[60%] transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className={`${playfair.className} text-4xl md:text-5xl font-bold text-[#113046] mb-8 leading-tight`}>
                        Rooted in <span className="italic text-[#5FA3D0]">Shared Purpose</span>
                    </h2>
                    <p className="text-lg md:text-xl text-[#2D3748] leading-relaxed opacity-90 font-light max-w-2xl">
                        Like an ecosystem where each organism strengthens the soil, <span className="font-semibold text-[#1A4D6F]">SaSarjan</span> believes prosperity grows when we build together.
                    </p>
                    <p className="text-lg md:text-xl text-[#2D3748] leading-relaxed opacity-90 font-light mt-6 max-w-2xl">
                        We connect diverse stakeholders — not to extract, but to cultivate shared value, knowledge, and opportunity.
                    </p>
                </div>

                {/* Right Column: Visual (40%) */}
                <div className={`md:w-[40%] flex justify-center relative md:pr-12 transition-all duration-1000 delay-300 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                    <div className="relative w-80 h-80 md:w-96 md:h-96">
                        {/* Center Glow (Co-creation Zone) - Enhanced */}
                        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/40 rounded-full blur-2xl z-10 transition-all duration-500 will-change-[opacity,transform] mix-blend-overlay ${hoveredCircle ? 'opacity-100 scale-110' : 'opacity-50 scale-100 animate-pulse'}`} />

                        {/* Circle 1: Knowledge (Blue) - Top Left - Organic Shape */}
                        <div
                            className={`absolute top-0 left-0 w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-[#5FA3D0]/80 to-[#5FA3D0]/40 mix-blend-hard-light backdrop-blur-md transition-all duration-700 ease-out cursor-pointer hover:z-20 border border-white/20
                ${hoveredCircle === 'knowledge' ? 'scale-110 shadow-[0_10px_40px_rgba(95,163,208,0.5)] translate-x-2 translate-y-2' : 'z-10 animate-[float_6s_ease-in-out_infinite]'}
              `}
                            onMouseEnter={() => setHoveredCircle('knowledge')}
                            onMouseLeave={() => setHoveredCircle(null)}
                        >
                            <div className="absolute inset-0 bg-white/10 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-500" />
                            <span className={`absolute top-1/3 left-1/3 -translate-x-4 -translate-y-2 text-white font-bold tracking-wide text-lg drop-shadow-md ${playfair.className}`}>Knowledge</span>
                        </div>

                        {/* Circle 2: Opportunity (Green) - Top Right - Organic Shape */}
                        <div
                            className={`absolute top-4 right-0 w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-bl from-[#7AC19E]/80 to-[#7AC19E]/40 mix-blend-hard-light backdrop-blur-md transition-all duration-700 ease-out cursor-pointer hover:z-20 border border-white/20
                ${hoveredCircle === 'opportunity' ? 'scale-110 shadow-[0_10px_40px_rgba(122,193,158,0.5)] -translate-x-2 translate-y-2' : 'z-10 animate-[float_7s_ease-in-out_infinite_1s]'}
              `}
                            onMouseEnter={() => setHoveredCircle('opportunity')}
                            onMouseLeave={() => setHoveredCircle(null)}
                        >
                            <div className="absolute inset-0 bg-white/10 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-500" />
                            <span className={`absolute top-1/3 right-1/3 translate-x-4 -translate-y-2 text-white font-bold tracking-wide text-lg drop-shadow-md ${playfair.className}`}>Opportunity</span>
                        </div>

                        {/* Circle 3: Resources (Ochre) - Bottom - Organic Shape */}
                        <div
                            className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-t from-[#D4A373]/80 to-[#D4A373]/40 mix-blend-hard-light backdrop-blur-md transition-all duration-700 ease-out cursor-pointer hover:z-20 border border-white/20
                ${hoveredCircle === 'resources' ? 'scale-110 shadow-[0_10px_40px_rgba(212,163,115,0.5)] -translate-y-2' : 'z-10 animate-[float_8s_ease-in-out_infinite_2s]'}
              `}
                            onMouseEnter={() => setHoveredCircle('resources')}
                            onMouseLeave={() => setHoveredCircle(null)}
                        >
                            <div className="absolute inset-0 bg-white/10 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-500" />
                            <span className={`absolute bottom-1/3 left-1/2 -translate-x-1/2 translate-y-4 text-white font-bold tracking-wide text-lg drop-shadow-md ${playfair.className}`}>Resources</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
