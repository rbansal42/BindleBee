import { Link } from 'react-router-dom';

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    href?: string;
    onClick?: () => void;
    className?: string;
    type?: 'button' | 'submit';
}

export function Button({
    children,
    variant = 'primary',
    size = 'md',
    href,
    onClick,
    className = '',
    type = 'button',
}: ButtonProps) {
    const baseStyles =
        'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-lg';

    const variants = {
        primary: 'bg-charcoal text-cream hover:bg-walnut hover:scale-105',
        secondary: 'bg-terracotta text-cream hover:bg-walnut hover:scale-105',
        outline: 'bg-transparent border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-cream',
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-sm',
        lg: 'px-8 py-4 text-base',
    };

    const styles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    if (href) {
        return (
            <Link to={href} className={styles}>
                {children}
            </Link>
        );
    }

    return (
        <button type={type} onClick={onClick} className={styles}>
            {children}
        </button>
    );
}

export default Button;
