'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Inter, Playfair_Display } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const playfair = Playfair_Display({ subsets: ['latin'] });

type Step = 'initial' | 'cart' | 'payment' | 'success';

export default function CheckoutFlow() {
    const [step, setStep] = useState<Step>('initial');
    const [quantity, setQuantity] = useState(1);
    const [emails, setEmails] = useState<string[]>(['']);
    const [isProcessing, setIsProcessing] = useState(false);
    const [errors, setErrors] = useState<string[]>([]);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    const PRICE_PER_UNIT = 399;

    useEffect(() => {
        // Adjust email array size when quantity changes
        if (emails.length !== quantity) {
            const newEmails = [...emails];
            if (quantity > emails.length) {
                for (let i = emails.length; i < quantity; i++) {
                    newEmails.push('');
                }
            } else {
                newEmails.length = quantity;
            }
            setEmails(newEmails);
            // Clear errors when quantity changes to avoid mismatch indices
            setErrors(new Array(quantity).fill(''));
        }
    }, [quantity, emails]);

    const handleEmailChange = (index: number, value: string) => {
        const newEmails = [...emails];
        newEmails[index] = value;
        setEmails(newEmails);

        // Clear error for this field
        const newErrors = [...errors];
        newErrors[index] = '';
        setErrors(newErrors);
    };

    const validateEmails = () => {
        const newErrors = new Array(quantity).fill('');
        let hasError = false;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        emails.forEach((email, index) => {
            if (!email.trim()) {
                newErrors[index] = 'Email is required';
                hasError = true;
            } else if (!emailRegex.test(email)) {
                newErrors[index] = 'Invalid email format';
                hasError = true;
            }
        });

        setErrors(newErrors);
        return !hasError;
    };

    const handleProceedToPayment = () => {
        if (validateEmails()) {
            setStep('payment');
            simulatePayment();
        }
    };

    const simulatePayment = () => {
        setIsProcessing(true);
        // Simulate network delay
        setTimeout(() => {
            setIsProcessing(false);
            setStep('success');
        }, 2500);
    };

    const resetFlow = () => {
        setStep('initial');
        setQuantity(1);
        setEmails(['']);
        setErrors([]);
    };

    const incrementQty = () => setQuantity(q => q + 1);
    const decrementQty = () => setQuantity(q => (q > 1 ? q - 1 : 1));

    if (step === 'initial') {
        return (
            <div className="flex justify-center w-full">
                <button
                    onClick={() => setStep('cart')}
                    className="inline-flex items-center gap-2 bg-[#2C7A7B] hover:bg-[#285E61] text-white font-bold py-4 px-10 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1"
                >
                    <span>Buy Ebook</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                </button>
            </div>
        );
    }

    // Modal Content
    const modalContent = (
        <div className={`fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm ${inter.className}`}>
            <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto relative animate-fadeIn">

                {/* Close Button (only allowed if not processing/success) */}
                {step !== 'success' && !isProcessing && (
                    <button
                        onClick={() => setStep('initial')}
                        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                )}

                {/* Content */}
                <div className="p-8">

                    {step === 'cart' && (
                        <>
                            <h2 className={`text-2xl font-bold text-[#1A4D6F] mb-6 ${playfair.className}`}>Order Details</h2>

                            {/* Quantity Selector */}
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Number of Copies - ₹{PRICE_PER_UNIT}/copy</label>
                                <div className="flex items-center justify-center gap-4">
                                    <button
                                        onClick={decrementQty}
                                        className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors"
                                        disabled={quantity <= 1}
                                    >
                                        -
                                    </button>
                                    <input
                                        type="number"
                                        min="1"
                                        value={quantity}
                                        onChange={(e) => {
                                            const val = parseInt(e.target.value);
                                            if (!isNaN(val) && val >= 1) setQuantity(val);
                                        }}
                                        className="w-16 text-center font-bold text-lg text-black border-b-2 border-gray-200 py-1 focus:outline-none focus:border-[#2C7A7B]"
                                    />
                                    <button
                                        onClick={incrementQty}
                                        className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            {/* Email Fields */}
                            <div className="mb-8 space-y-4">
                                <div className="flex items-center justify-between">
                                    <label className="block text-sm font-medium text-gray-700">Recipient Emails</label>
                                    <span className="text-xs text-gray-500">One for each copy</span>
                                </div>
                                <div className="max-h-60 overflow-y-auto pr-2 space-y-3 custom-scrollbar">
                                    {emails.map((email, i) => (
                                        <div key={i}>
                                            <input
                                                type="email"
                                                placeholder={`Email for Copy #${i + 1}`}
                                                value={email}
                                                onChange={(e) => handleEmailChange(i, e.target.value)}
                                                className={`w-full px-4 py-3 rounded-lg border text-black ${errors[i] ? 'border-red-500 bg-red-50' : 'border-gray-200 focus:border-[#2C7A7B]'} outline-none transition-colors`}
                                            />
                                            {errors[i] && <p className="text-red-500 text-xs mt-1 ml-1">{errors[i]}</p>}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Summary & Action */}
                            <div className="border-t border-gray-100 pt-6">
                                <div className="flex justify-between items-center mb-6">
                                    <span className="text-gray-600 font-medium">Total</span>
                                    <span className="text-3xl font-bold text-[#2C7A7B]">₹{quantity * PRICE_PER_UNIT}</span>
                                </div>
                                <button
                                    onClick={handleProceedToPayment}
                                    className="w-full bg-[#2C7A7B] hover:bg-[#236C6D] text-white font-bold py-3.5 rounded-lg shadow-lg hover:shadow-xl transition-all"
                                >
                                    Proceed to Payment
                                </button>
                            </div>
                        </>
                    )}

                    {step === 'payment' && (
                        <div className="flex flex-col items-center justify-center py-8 text-center">
                            <div className="w-16 h-16 border-4 border-[#2C7A7B] border-t-transparent rounded-full animate-spin mb-6"></div>
                            <h3 className={`text-xl font-bold text-[#1A4D6F] ${playfair.className}`}>Processing Payment...</h3>
                            <p className="text-gray-500 mt-2">Please do not close this window.</p>

                            <div className="mt-8 p-4 bg-gray-50 rounded-lg w-full text-left text-sm border border-gray-100">
                                <p className="flex justify-between mb-1"><span>Amount:</span> <span className="font-medium">₹{quantity * PRICE_PER_UNIT}</span></p>
                                <p className="flex justify-between"><span>Merchant:</span> <span className="font-medium">SaSarjan Books</span></p>
                            </div>
                        </div>
                    )}

                    {step === 'success' && (
                        <div className="text-center py-4">
                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h2 className={`text-3xl font-bold text-[#1A4D6F] mb-4 ${playfair.className}`}>Thank You!</h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Your order for <strong>{quantity} {quantity === 1 ? 'copy' : 'copies'}</strong> has been confirmed.
                            </p>

                            <div className="bg-[#E6FFFA] border border-[#2C7A7B]/20 rounded-lg p-4 mb-8 text-left">
                                <p className="text-[#2C7A7B] text-sm flex items-start gap-2">
                                    <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>The ebook download link has been sent to the provided email address(es).</span>
                                </p>
                            </div>

                            <button
                                onClick={resetFlow}
                                className="inline-block text-[#2C7A7B] font-semibold hover:text-[#236C6D] hover:underline"
                            >
                                Close and return to site
                            </button>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );

    if (!mounted) return null;

    return createPortal(modalContent, document.body);
}
