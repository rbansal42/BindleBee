interface CardProps {
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
}

export function Card({ children, className = '', hover = true }: CardProps) {
    return (
        <div
            className={`bg-cream rounded-xl overflow-hidden ${hover ? 'transition-all duration-300 hover:shadow-lg hover:-translate-y-1' : ''
                } ${className}`}
        >
            {children}
        </div>
    );
}

interface CardImageProps {
    src: string;
    alt: string;
    className?: string;
}

export function CardImage({ src, alt, className = '' }: CardImageProps) {
    return (
        <div className={`overflow-hidden ${className}`}>
            <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
        </div>
    );
}

interface CardContentProps {
    children: React.ReactNode;
    className?: string;
}

export function CardContent({ children, className = '' }: CardContentProps) {
    return <div className={`p-6 ${className}`}>{children}</div>;
}

export default Card;
