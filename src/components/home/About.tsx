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
            <div ref={sectionRef} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                {/* Image */}
                <div
                    className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
                        }`}
                >
                    <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-elevated">
                        <img
                            src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&h=1000&fit=crop"
                            alt="Craftsman working on furniture"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    {/* Floating Stats Card */}
                    <div className="absolute -bottom-8 -right-4 md:bottom-8 md:-right-8 bg-walnut text-cream p-8 rounded-2xl shadow-elevated">
                        <p className="text-4xl font-serif">25+</p>
                        <p className="text-sm text-cream/70 mt-1">Years of Craftsmanship</p>
                    </div>
                </div>

                {/* Content */}
                <div
                    className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
                        }`}
                >
                    <span className="text-sm text-taupe uppercase tracking-[0.25em] font-light">Our Story</span>
                    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-walnut mt-4 mb-8">
                        Where Tradition Meets Modern Design
                    </h2>
                    <div className="space-y-5 text-charcoal/70 leading-relaxed text-lg">
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
                    <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-sand">
                        <div>
                            <p className="font-serif text-3xl text-walnut">100%</p>
                            <p className="text-sm text-taupe mt-1">Solid Wood</p>
                        </div>
                        <div>
                            <p className="font-serif text-3xl text-walnut">10yr</p>
                            <p className="text-sm text-taupe mt-1">Warranty</p>
                        </div>
                        <div>
                            <p className="font-serif text-3xl text-walnut">50k+</p>
                            <p className="text-sm text-taupe mt-1">Happy Homes</p>
                        </div>
                    </div>

                    <Button href="/contact" variant="primary" size="lg" className="mt-12">
                        Get in Touch
                    </Button>
                </div>
            </div>
        </Section>
    );
}

export default About;

