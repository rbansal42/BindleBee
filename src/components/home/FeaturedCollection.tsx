import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Section } from '@/components/layout/Container';
import { ProductCard } from '@/components/products/ProductCard';
import { featuredProducts } from '@/data/products';

export function FeaturedCollection() {
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
        <Section background="beige">
            <div ref={sectionRef}>
                {/* Header */}
                <div
                    className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                >
                    <span className="text-sm text-taupe uppercase tracking-[0.2em]">Curated Selection</span>
                    <h2 className="font-serif text-3xl md:text-4xl text-walnut mt-3 mb-4">
                        Featured Collection
                    </h2>
                    <p className="text-charcoal/70 max-w-xl mx-auto">
                        Discover our handpicked selection of furniture pieces that blend timeless design with exceptional craftsmanship.
                    </p>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                    {featuredProducts.slice(0, 8).map((product, index) => (
                        <div
                            key={product.id}
                            className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                }`}
                            style={{ transitionDelay: `${(index + 1) * 100}ms` }}
                        >
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>

                {/* View All Link */}
                <div
                    className={`text-center mt-12 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                >
                    <Link
                        to="/products"
                        className="inline-flex items-center gap-2 text-walnut hover:text-terracotta font-medium transition-colors duration-300 group"
                    >
                        View All Products
                        <svg
                            className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </Section>
    );
}

export default FeaturedCollection;
