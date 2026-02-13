'use client';

import React, { useState } from 'react';
import { Merriweather, Inter } from 'next/font/google';

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-heading',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
});

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<{ type: 'success' | 'error' | ''; message: string }>({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error on input
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.honeypot) return; // Silent fail for bots

    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setStatus({ type: 'success', message: 'Thank you for reaching out. We will get back to you shortly.' });
      setFormData({ name: '', email: '', subject: '', message: '', honeypot: '' });
      setIsSubmitting(false);

      // Clear success message after 5 seconds
      setTimeout(() => {
        setStatus({ type: '', message: '' });
      }, 5000);
    }
  };

  return (
    <div className={`${inter.variable} ${merriweather.variable} font-body bg-bg-body text-gray-800 antialiased`}>
      {/* Spacer for fixed header */}
      <div className="h-24"></div>

      <main>
        <section className="hero-section pt-20 pb-20 text-center bg-gradient-to-b from-bg-body to-bg-gradient-end" id="connect-section">
          <div className="container mx-auto px-6">
            <h1 className="hero-title font-heading font-light text-5xl md:text-6xl text-gray-900 mb-6 tracking-tight">
              Let’s Build Together
            </h1>
            <p className="hero-subtitle text-lg text-secondary max-w-xl mx-auto leading-relaxed">
              We believe in the power of collective prosperity. Whether you have a question,
              a partnership idea, or simply want to say hello, we are here to listen and collaborate.
            </p>
          </div>
        </section>

        <section className="contact-section pb-24 bg-bg-gradient-end">
          <div className="container mx-auto px-6">
            <div className="contact-card bg-white max-w-3xl mx-auto p-8 md:p-10 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.03)]">
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                {/* Honeypot */}
                <div style={{ display: 'none' }}>
                  <label htmlFor="honeypot">Leave this field empty</label>
                  <input
                    type="text"
                    id="honeypot"
                    name="honeypot"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.honeypot}
                    onChange={handleChange}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className={`form-group flex flex-col gap-2 ${errors.name ? 'error' : ''}`}>
                    <label htmlFor="name" className="text-sm font-medium text-secondary">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="How should we address you?"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg text-gray-800 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all"
                    />
                    <span className={`error-message text-xs text-red-600 min-h-[1.25em] transition-opacity ${errors.name ? 'opacity-100' : 'opacity-0'}`}>
                      {errors.name}
                    </span>
                  </div>

                  <div className={`form-group flex flex-col gap-2 ${errors.email ? 'error' : ''}`}>
                    <label htmlFor="email" className="text-sm font-medium text-secondary">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="you@example.com"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg text-gray-800 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all"
                    />
                    <span className={`error-message text-xs text-red-600 min-h-[1.25em] transition-opacity ${errors.email ? 'opacity-100' : 'opacity-0'}`}>
                      {errors.email}
                    </span>
                  </div>
                </div>

                <div className="form-group flex flex-col gap-2">
                  <label htmlFor="subject" className="text-sm font-medium text-secondary">
                    Subject <span className="text-muted font-normal ml-1">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="What is this regarding?"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-gray-800 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all"
                  />
                </div>

                <div className={`form-group flex flex-col gap-2 ${errors.message ? 'error' : ''}`}>
                  <label htmlFor="message" className="text-sm font-medium text-secondary">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Share your thoughts with us..."
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-gray-800 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all resize-y"
                  ></textarea>
                  <span className={`error-message text-xs text-red-600 min-h-[1.25em] transition-opacity ${errors.message ? 'opacity-100' : 'opacity-0'}`}>
                    {errors.message}
                  </span>
                </div>

                <div className="form-actions pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="submit-btn w-full bg-primary hover:bg-primary-hover text-white font-semibold py-4 rounded-full transition-all active:scale-[0.99] shadow-lg shadow-primary/20 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>

                <p className="disclaimer text-center text-xs text-muted mt-4">
                  This form is for demonstration purposes only.
                </p>

                <div
                  className={`form-status w-full text-center mt-4 font-medium text-primary transition-opacity duration-1000 ${status.message ? 'opacity-100' : 'opacity-0'}`}
                  aria-live="polite"
                >
                  {status.message}
                </div>
              </form>
            </div>
          </div>
        </section>

        <section className="location-section py-24 bg-white border-t border-gray-100">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                {/* Map Container */}
                <div className="map-container w-full h-[400px] lg:h-[450px] rounded-3xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-100 relative z-10">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.131150000608!2d72.8629423!3d19.233115200000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b0d000add9f5%3A0x9f66cbe430782b98!2sShree%20Krishna%20Complex%20(Borivali%20East)!5e0!3m2!1sen!2sin!4v1769505988659!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full grayscale-[0.1] hover:grayscale-0 transition-all duration-500"
                  ></iframe>
                </div>

                {/* Content Container */}
                <div className="content-container">
                  <h2 className="section-heading font-heading text-3xl md:text-4xl text-gray-900 mb-8 font-light">
                    Our Location
                  </h2>

                  <div className="address-group mb-10">
                    <h3 className="text-xs font-bold text-primary uppercase tracking-widest mb-4">Address</h3>
                    <address className="not-italic text-lg text-secondary leading-relaxed font-light">
                      <p className="mb-1">D1101, Shree Krishna Complex,</p>
                      <p className="mb-1">Western Express Highway,</p>
                      <p>Borivali East, Mumbai – 400 066.</p>
                    </address>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
