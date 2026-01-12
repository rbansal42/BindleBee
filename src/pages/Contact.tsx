import { useState } from 'react';
import { Container, Section } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { Input, Textarea } from '@/components/ui/Input';

export function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
        alert('Thank you for your message! We will get back to you soon.');
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <main className="pt-20 min-h-screen">
            {/* Hero */}
            <div className="bg-beige py-16 md:py-24">
                <Container>
                    <div className="text-center animate-fade-in-up">
                        <h1 className="font-serif text-4xl md:text-5xl text-walnut mb-4">Get in Touch</h1>
                        <p className="text-charcoal/70 max-w-xl mx-auto">
                            Have questions about our furniture or need help with your order? We're here to help.
                        </p>
                    </div>
                </Container>
            </div>

            <Section background="cream">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Contact Info */}
                    <div className="animate-fade-in-up">
                        <h2 className="font-serif text-2xl text-walnut mb-6">Contact Information</h2>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-beige rounded-lg">
                                    <svg className="w-6 h-6 text-walnut" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.5}
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.5}
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-medium text-charcoal mb-1">Visit Our Showroom</h3>
                                    <p className="text-charcoal/70">
                                        123 Crafts Lane, Koramangala<br />
                                        Bangalore, Karnataka 560034
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-beige rounded-lg">
                                    <svg className="w-6 h-6 text-walnut" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.5}
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-medium text-charcoal mb-1">Email Us</h3>
                                    <a href="mailto:hello@bindlebee.com" className="text-terracotta hover:text-walnut transition-colors duration-300">
                                        hello@bindlebee.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-beige rounded-lg">
                                    <svg className="w-6 h-6 text-walnut" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.5}
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-medium text-charcoal mb-1">Call Us</h3>
                                    <a href="tel:+918012345678" className="text-terracotta hover:text-walnut transition-colors duration-300">
                                        +91 80 1234 5678
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-beige rounded-lg">
                                    <svg className="w-6 h-6 text-walnut" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.5}
                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-medium text-charcoal mb-1">Business Hours</h3>
                                    <p className="text-charcoal/70">
                                        Monday - Saturday: 10:00 AM - 7:00 PM<br />
                                        Sunday: 11:00 AM - 5:00 PM
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="mt-8 h-64 bg-beige rounded-xl overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5982447099827!2d77.6177!3d12.9352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU2JzA2LjciTiA3N8KwMzcnMDMuNyJF!5e0!3m2!1sen!2sin!4v1234567890"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="BindleBee Showroom Location"
                            />
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                        <h2 className="font-serif text-2xl text-walnut mb-6">Send Us a Message</h2>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid sm:grid-cols-2 gap-6">
                                <Input
                                    label="Your Name"
                                    name="name"
                                    placeholder="John Doe"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                                <Input
                                    label="Email Address"
                                    name="email"
                                    type="email"
                                    placeholder="john@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="grid sm:grid-cols-2 gap-6">
                                <Input
                                    label="Phone Number"
                                    name="phone"
                                    type="tel"
                                    placeholder="+91 98765 43210"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                                <div className="w-full">
                                    <label className="block text-sm font-medium text-charcoal mb-2">Subject</label>
                                    <select
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-beige border border-sand rounded-lg text-charcoal focus:outline-none focus:border-walnut focus:ring-2 focus:ring-walnut/10 transition-all duration-300"
                                        required
                                    >
                                        <option value="">Select a subject</option>
                                        <option value="product">Product Inquiry</option>
                                        <option value="order">Order Status</option>
                                        <option value="custom">Custom Furniture</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>

                            <Textarea
                                label="Your Message"
                                name="message"
                                placeholder="Tell us how we can help you..."
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />

                            <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto">
                                Send Message
                            </Button>
                        </form>
                    </div>
                </div>
            </Section>
        </main>
    );
}

export default Contact;
