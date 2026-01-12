import { Button } from '@/components/ui/Button';

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&h=1080&fit=crop"
                    alt="Modern living room with elegant furniture"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-charcoal/60 via-charcoal/40 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 lg:px-8">
                <div className="max-w-2xl animate-fade-in-up">
                    <span className="inline-block text-sm text-cream/80 uppercase tracking-[0.3em] mb-6">
                        Artisan Furniture
                    </span>
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream leading-tight mb-6">
                        Furniture for the
                        <span className="block mt-2">Thoughtful Home</span>
                    </h1>
                    <p className="text-lg text-cream/80 mb-10 max-w-lg leading-relaxed">
                        Timeless pieces crafted with precision, designed to bring warmth and elegance to your living spaces.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Button href="/products" variant="secondary" size="lg">
                            Explore Collection
                        </Button>
                        <Button href="/#about" variant="outline" size="lg" className="border-cream text-cream hover:bg-cream hover:text-charcoal">
                            Our Story
                        </Button>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-cream/50 rounded-full flex items-start justify-center p-2">
                    <div className="w-1 h-3 bg-cream/50 rounded-full" />
                </div>
            </div>
        </section>
    );
}

export default Hero;
