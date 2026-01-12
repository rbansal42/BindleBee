import { Button } from '@/components/ui/Button';

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&h=1080&fit=crop"
                    alt="Modern living room with elegant furniture"
                    className="w-full h-full object-cover scale-105"
                    style={{ animation: 'fade-in 1.5s ease-out' }}
                />
                {/* Gradient overlays for depth */}
                <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-charcoal/40 to-charcoal/20" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 via-transparent to-charcoal/10" />
                {/* Subtle vignette effect */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(26,26,26,0.3)_100%)]" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 lg:px-8">
                <div className="max-w-2xl">
                    {/* Tagline with decorative line */}
                    <div className="flex items-center gap-4 mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        <div className="h-px w-12 bg-gradient-to-r from-transparent to-cream/60" />
                        <span className="text-sm text-cream/90 uppercase tracking-[0.35em] font-light">
                            BindleBee
                        </span>
                    </div>

                    {/* Main heading */}
                    <h1
                        className="font-serif text-4xl md:text-5xl lg:text-7xl text-cream leading-[1.1] mb-8 animate-fade-in-up"
                        style={{
                            animationDelay: '0.4s',
                            textShadow: '0 2px 20px rgba(0,0,0,0.3)'
                        }}
                    >
                        Furniture for the
                        <span className="block mt-2 italic text-cream/95">Thoughtful Home</span>
                    </h1>

                    {/* Description */}
                    <p
                        className="text-lg md:text-xl text-cream/80 mb-12 max-w-lg leading-relaxed animate-fade-in-up font-light"
                        style={{ animationDelay: '0.6s' }}
                    >
                        Timeless pieces crafted with precision, designed to bring warmth and elegance to your living spaces.
                    </p>

                    {/* CTA Buttons */}
                    <div
                        className="flex flex-wrap gap-5 animate-fade-in-up"
                        style={{ animationDelay: '0.8s' }}
                    >
                        <Button href="/products" variant="secondary" size="lg">
                            Explore Collection
                        </Button>
                        <Button
                            href="/#about"
                            variant="outline"
                            size="lg"
                            className="border-cream/40 text-cream hover:bg-cream hover:text-charcoal backdrop-blur-sm"
                        >
                            Our Story
                        </Button>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div
                className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-fade-in"
                style={{ animationDelay: '1.2s' }}
            >
                <div className="flex flex-col items-center gap-3 group cursor-pointer">
                    <span className="text-xs text-cream/50 uppercase tracking-widest font-light">Scroll</span>
                    <div className="w-6 h-12 border border-cream/30 rounded-full flex items-start justify-center p-2 group-hover:border-cream/50 transition-colors duration-500">
                        <div
                            className="w-1 h-2 bg-cream/60 rounded-full"
                            style={{ animation: 'gentle-bounce 2s ease-in-out infinite' }}
                        />
                    </div>
                </div>
            </div>

            {/* Decorative corner accent */}
            <div className="absolute bottom-0 right-0 w-64 h-64 opacity-20">
                <div className="absolute bottom-8 right-8 w-32 h-px bg-gradient-to-l from-cream/60 to-transparent" />
                <div className="absolute bottom-8 right-8 h-32 w-px bg-gradient-to-t from-cream/60 to-transparent" />
            </div>
        </section>
    );
}

export default Hero;

