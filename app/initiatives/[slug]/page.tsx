import React from 'react';
import { notFound } from 'next/navigation';
import { initiatives } from '@/lib/initiativesData';
import { Playfair_Display, Inter } from 'next/font/google';
import Link from 'next/link';

const playfair = Playfair_Display({ subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });

export function generateStaticParams() {
    return initiatives
        .filter((initiative) => !initiative.isInternalPage)
        .map((initiative) => ({
            slug: initiative.slug,
        }));
}

export default async function InitiativePage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const initiative = initiatives.find((i) => i.slug === slug);

    if (!initiative) {
        notFound();
    }

    // Double check to ensure we aren't rendering the internal page this way (though routing should handle it)
    // if (initiative.isInternalPage) { ... } // Optional safeguard, but folder precedence handles it.

    return (
        <main className={`min-h-screen bg-[#FAFBFC] pt-32 pb-16 px-6 ${inter.className}`}>
            <div className="max-w-3xl mx-auto text-center">
                <div className="text-6xl mb-8 flex justify-center">
                    {initiative.icon}
                </div>

                <h1 className={`text-4xl md:text-5xl font-bold text-[#1A4D6F] mb-6 ${playfair.className}`}>
                    {initiative.title}
                </h1>

                <h2 className="text-xl text-[#2C5F85] font-medium mb-8">
                    {initiative.subtitle}
                </h2>

                <div className="prose prose-lg mx-auto text-[#2D3748]/80 mb-12 leading-relaxed">
                    <p>{initiative.detailDescription || initiative.description}</p>
                </div>

                <div className="flex justify-center">
                    {initiative.externalLink ? (
                        <a
                            href={initiative.externalLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-8 py-4 bg-[#1A4D6F] text-white rounded-lg hover:bg-[#133a55] transition-colors duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                        >
                            Visit Initiative
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                    ) : (
                        <button
                            disabled
                            className="px-8 py-4 bg-gray-200 text-gray-500 rounded-lg font-semibold cursor-not-allowed border border-gray-300"
                        >
                            Coming Soon
                        </button>
                    )}
                </div>

                <div className="mt-16 pt-8 border-t border-gray-200">
                    <Link href="/#initiatives" className="text-[#1A4D6F] hover:text-[#0f2d42] font-medium transition-colors flex items-center justify-center">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Initiatives
                    </Link>
                </div>
            </div>
        </main>
    );
}
