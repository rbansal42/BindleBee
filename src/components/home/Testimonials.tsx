import { useEffect, useRef, useState } from 'react';
import { Section } from '@/components/layout/Container';

const testimonials = [
    {
        id: 1,
        name: 'Priya Sharma',
        location: 'Mumbai',
        quote: 'The craftsmanship is impeccable. Our Aaram sofa has become the centerpiece of our living room. Worth every rupee.',
        rating: 5,
    },
    {
        id: 2,
        name: 'Arjun Mehta',
        location: 'Bangalore',
        quote: 'I was skeptical about buying furniture online, but BindleBee exceeded all expectations. The quality is outstanding.',
        rating: 5,
    },
    {
        id: 3,
        name: 'Sneha Reddy',
        location: 'Hyderabad',
        quote: 'Beautiful, functional, and built to last. Our dining table has hosted countless family gatherings already.',
        rating: 5,
    },
];

export function Testimonials() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <Section background="sand">
            <div ref={sectionRef}>
                {/* Header */}
                <div
                    className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                >
                    <span className="text-sm text-taupe uppercase tracking-[0.25em] font-light">Testimonials</span>
                    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-walnut mt-4">
                        What Our Customers Say
                    </h2>
                </div>

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={testimonial.id}
                            className={`bg-cream p-8 lg:p-10 rounded-2xl shadow-soft hover:shadow-elevated transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                }`}
                            style={{ transitionDelay: `${(index + 1) * 150}ms` }}
                        >
                            {/* Quote Icon */}
                            <svg
                                className="w-12 h-12 text-terracotta/20 mb-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                            </svg>

                            {/* Quote */}
                            <p className="text-charcoal/80 leading-relaxed mb-8 text-lg italic">
                                "{testimonial.quote}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center justify-between pt-6 border-t border-sand">
                                <div>
                                    <p className="font-medium text-charcoal text-lg">{testimonial.name}</p>
                                    <p className="text-sm text-taupe mt-1">{testimonial.location}</p>
                                </div>
                                {/* Stars */}
                                <div className="flex gap-1">
                                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                                        <svg
                                            key={i}
                                            className="w-5 h-5 text-terracotta"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}

export default Testimonials;

