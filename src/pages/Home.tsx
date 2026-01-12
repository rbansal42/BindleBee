import { Hero } from '@/components/home/Hero';
import { FeaturedCollection } from '@/components/home/FeaturedCollection';
import { About } from '@/components/home/About';
import { Testimonials } from '@/components/home/Testimonials';

export function Home() {
    return (
        <main>
            <Hero />
            <FeaturedCollection />
            <About />
            <Testimonials />
        </main>
    );
}

export default Home;
