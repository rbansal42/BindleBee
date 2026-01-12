import { Link } from 'react-router-dom';

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

export function Container({ children, className = '' }: ContainerProps) {
    return (
        <div className={`w-full max-w-7xl mx-auto px-6 lg:px-8 ${className}`}>
            {children}
        </div>
    );
}

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    background?: 'cream' | 'beige' | 'sand';
    id?: string;
}

export function Section({ children, className = '', background = 'cream', id }: SectionProps) {
    const bgColors = {
        cream: 'bg-cream',
        beige: 'bg-beige',
        sand: 'bg-sand',
    };

    return (
        <section id={id} className={`py-16 md:py-24 ${bgColors[background]} ${className}`}>
            <Container>{children}</Container>
        </section>
    );
}

export { Container as default };
