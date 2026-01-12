import { useEffect, useRef, useState } from 'react';
import { Section } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';

export function About() {
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
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <Section id="about" background="cream">
            <div ref={sectionRef} className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Image */}
                <div
                    className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
                        }`}
                >
                    <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&h=1000&fit=crop"
                            alt="Craftsman working on furniture"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    {/* Floating Stats Card */}
                    <div className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-8 bg-walnut text-cream p-6 rounded-xl shadow-lg">
                        <p className="text-3xl font-serif">25+</p>
                        <p className="text-sm text-cream/70">Years of Craftsmanship</p>
                    </div>
                </div>

                {/* Content */}
                <div
                    className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
                        }`}
                >
                    <span className="text-sm text-taupe uppercase tracking-[0.2em]">Our Story</span>
                    <h2 className="font-serif text-3xl md:text-4xl text-walnut mt-3 mb-6">
                        Where Tradition Meets Modern Design
                    </h2>
                    <div className="space-y-4 text-charcoal/70 leading-relaxed">
                        <p>
                            Founded in 1998, BindleBee began as a small workshop with a simple mission: to create furniture that stands the test of time. Every piece tells a story of dedication, skill, and unwavering attention to detail.
                        </p>
                        <p>
                            We work with master artisans who bring decades of experience to their craft. From selecting the finest sustainable woods to applying the final hand-rubbed finish, every step is guided by our commitment to excellence.
                        </p>
                        <p>
                            Our designs draw inspiration from both contemporary aesthetics and timeless Indian craftsmanship, resulting in pieces that feel both familiar and fresh.
                        </p>
                    </div>

                    {/* Values */}
                    <div className="grid grid-cols-3 gap-6 mt-10">
                        <div>
                            <p className="font-serif text-2xl text-walnut">100%</p>
                            <p className="text-sm text-taupe">Solid Wood</p>
                        </div>
                        <div>
                            <p className="font-serif text-2xl text-walnut">10yr</p>
                            <p className="text-sm text-taupe">Warranty</p>
                        </div>
                        <div>
                            <p className="font-serif text-2xl text-walnut">50k+</p>
                            <p className="text-sm text-taupe">Happy Homes</p>
                        </div>
                    </div>

                    <Button href="/contact" variant="primary" className="mt-10">
                        Get in Touch
                    </Button>
                </div>
            </div>
        </Section>
    );
}

export default About;
