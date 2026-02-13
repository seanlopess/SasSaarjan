'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Playfair_Display, Inter } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });

export default function LoginPage() {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <main className={`min-h-screen flex items-center justify-center relative overflow-hidden bg-[#FAFBFC] ${inter.className}`}>

            {/* Background Decor */}
            <div className="absolute top-0 left-0 right-0 h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#5FA3D0]/10 rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite]" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-[#1A4D6F]/5 rounded-full blur-3xl animate-[float_10s_ease-in-out_infinite_reverse]" />
            </div>

            <div className="relative z-10 w-full max-w-md p-6">
                <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-white/50 p-8 animate-[fadeIn_0.5s_ease-out]">

                    {/* Header */}
                    <div className="text-center mb-8">
                        <Link href="/" className="inline-block mb-6 hover:opacity-80 transition-opacity">
                            <span className={`text-2xl font-bold text-[#1A4D6F] ${playfair.className}`}>SaSarjan</span>
                        </Link>
                        <h1 className={`text-3xl font-bold text-[#2D3748] mb-2 ${playfair.className}`}>
                            {isLogin ? 'Welcome Back' : 'Join the Ecosystem'}
                        </h1>
                        <p className="text-[#2D3748]/60 text-sm">
                            {isLogin ? 'Enter your details to access your account' : 'Start your journey with us today'}
                        </p>
                    </div>

                    {/* Toggle */}
                    <div className="flex bg-[#F7FAFC] p-1 rounded-xl mb-8 relative">
                        <div
                            className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-white rounded-lg shadow-sm transition-all duration-300 ease-out ${isLogin ? 'left-1' : 'left-[calc(50%+2px)]'}`}
                        />
                        <button
                            onClick={() => setIsLogin(true)}
                            className={`flex-1 relative z-10 py-2 text-sm font-medium transition-colors duration-300 ${isLogin ? 'text-[#1A4D6F]' : 'text-[#2D3748]/60 hover:text-[#2D3748]'}`}
                        >
                            Log In
                        </button>
                        <button
                            onClick={() => setIsLogin(false)}
                            className={`flex-1 relative z-10 py-2 text-sm font-medium transition-colors duration-300 ${!isLogin ? 'text-[#1A4D6F]' : 'text-[#2D3748]/60 hover:text-[#2D3748]'}`}
                        >
                            Sign Up
                        </button>
                    </div>

                    {/* Form */}
                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>

                        {!isLogin && (
                            <div className="animate-[fadeIn_0.3s_ease-out]">
                                <label className="block text-xs font-semibold text-[#2D3748]/70 uppercase tracking-wider mb-1.5 pl-1">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    className="w-full px-4 py-3 bg-[#F7FAFC] border border-[#E2E8F0] rounded-xl text-[#2D3748] placeholder-[#A0AEC0] focus:outline-none focus:ring-2 focus:ring-[#5FA3D0]/50 focus:border-[#5FA3D0] transition-all duration-200"
                                />
                            </div>
                        )}

                        <div>
                            <label className="block text-xs font-semibold text-[#2D3748]/70 uppercase tracking-wider mb-1.5 pl-1">
                                Email Address
                            </label>
                            <input
                                type="email"
                                placeholder="john@example.com"
                                className="w-full px-4 py-3 bg-[#F7FAFC] border border-[#E2E8F0] rounded-xl text-[#2D3748] placeholder-[#A0AEC0] focus:outline-none focus:ring-2 focus:ring-[#5FA3D0]/50 focus:border-[#5FA3D0] transition-all duration-200"
                            />
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-1.5 pl-1">
                                <label className="block text-xs font-semibold text-[#2D3748]/70 uppercase tracking-wider">
                                    Password
                                </label>
                                {isLogin && (
                                    <a href="#" className="text-xs text-[#5FA3D0] hover:text-[#1A4D6F] transition-colors">
                                        Forgot?
                                    </a>
                                )}
                            </div>
                            <input
                                type="password"
                                placeholder="••••••••"
                                className="w-full px-4 py-3 bg-[#F7FAFC] border border-[#E2E8F0] rounded-xl text-[#2D3748] placeholder-[#A0AEC0] focus:outline-none focus:ring-2 focus:ring-[#5FA3D0]/50 focus:border-[#5FA3D0] transition-all duration-200"
                            />
                        </div>

                        <button
                            className="w-full py-3.5 bg-[#1A4D6F] hover:bg-[#133A55] text-white font-medium rounded-xl shadow-lg shadow-[#1A4D6F]/20 hover:shadow-xl hover:shadow-[#1A4D6F]/30 transform hover:-translate-y-0.5 transition-all duration-300"
                        >
                            {isLogin ? 'Sign In' : 'Create Account'}
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="relative my-8">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-[#E2E8F0]"></div>
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-white px-3 text-[#A0AEC0]">Or continue with</span>
                        </div>
                    </div>

                    {/* Social Login */}
                    <div className="grid grid-cols-2 gap-4">
                        <button className="flex items-center justify-center gap-2 px-4 py-2.5 border border-[#E2E8F0] rounded-xl hover:bg-[#F7FAFC] hover:border-[#CBD5E0] transition-all duration-200 group">
                            <svg className="w-5 h-5 text-[#2D3748] group-hover:scale-110 transition-transform duration-200" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                            </svg>
                            <span className="text-sm font-medium text-[#2D3748]">Google</span>
                        </button>
                        <button className="flex items-center justify-center gap-2 px-4 py-2.5 border border-[#E2E8F0] rounded-xl hover:bg-[#F7FAFC] hover:border-[#CBD5E0] transition-all duration-200 group">
                            <svg className="w-5 h-5 text-[#2D3748] group-hover:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.1 1.88-2.6 5.39.52 6.63-.67 2.06-1.6 4.19-2.57 4.58zM12.03 5.92c-.05-2.45 2.18-4.42 4.15-4.42.34 2.58-2.34 4.62-4.15 4.42z" />
                            </svg>
                            <span className="text-sm font-medium text-[#2D3748]">Apple</span>
                        </button>
                    </div>

                    {/* Footer */}
                    <p className="mt-8 text-center text-xs text-[#A0AEC0]">
                        By continuing, you agree to SaSarjan's{' '}
                        <a href="#" className="underline hover:text-[#1A4D6F]">Terms of Service</a>
                        {' '}and{' '}
                        <a href="#" className="underline hover:text-[#1A4D6F]">Privacy Policy</a>
                    </p>
                </div>
            </div>
        </main>
    );
}
