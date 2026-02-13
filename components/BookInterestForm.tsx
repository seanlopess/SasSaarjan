
'use client'

import React, { useState } from 'react'

export default function BookInterestForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        city: '',
    })
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
    const [message, setMessage] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus('loading')
        setMessage('')

        try {
            const response = await fetch('/api/book-interest', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            })

            let data = null;

            try {
                data = await response.json();
            } catch (err) {
                console.error("Invalid JSON response");
            }

            if (response.ok) {
                setStatus('success')
                setMessage('Thank you! Your interest has been recorded.')
                setFormData({ name: '', email: '', phone: '', city: '' })
            } else {
                setStatus('error')
                setMessage(data.error || 'Something went wrong. Please try again.')
            }
        } catch (error) {
            console.error('Submission error:', error)
            setStatus('error')
            setMessage('An unexpected error occurred. Please try again.')
        }
    }

    return (
        <div className="w-full max-w-md mx-auto bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Express Your Interest</h3>

            {status === 'success' ? (
                <div className="text-center py-8">
                    <div className="text-green-400 text-xl font-semibold mb-2">Success!</div>
                    <p className="text-gray-200">{message}</p>
                    <button
                        onClick={() => setStatus('idle')}
                        className="mt-6 px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all"
                    >
                        Submit another response
                    </button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-1">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg bg-black/20 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#cdb891] transition-all"
                            placeholder="Your full name"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-1">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg bg-black/20 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#cdb891] transition-all"
                            placeholder="your@email.com"
                        />
                    </div>

                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-200 mb-1">Phone Number</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg bg-black/20 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#cdb891] transition-all"
                            placeholder="+91 98765 43210"
                        />
                    </div>

                    <div>
                        <label htmlFor="city" className="block text-sm font-medium text-gray-200 mb-1">City</label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            required
                            value={formData.city}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg bg-black/20 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#cdb891] transition-all"
                            placeholder="Mumbai"
                        />
                    </div>

                    {status === 'error' && (
                        <div className="p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-200 text-sm">
                            {message}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="w-full py-3 px-6 mt-4 bg-gradient-to-r from-[#cdb891] to-[#b8a37e] text-black font-bold rounded-lg shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {status === 'loading' ? 'Submitting...' : 'Submit Interest'}
                    </button>
                </form>
            )}
        </div>
    )
}
