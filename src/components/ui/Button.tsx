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
        'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full shadow-soft hover:shadow-elevated';

    const variants = {
        primary: 'bg-charcoal text-cream hover:bg-walnut active:scale-[0.98]',
        secondary: 'bg-terracotta text-cream hover:bg-walnut active:scale-[0.98] hover:shadow-glow',
        outline: 'bg-transparent border border-charcoal text-charcoal hover:bg-charcoal hover:text-cream active:scale-[0.98]',
    };

    const sizes = {
        sm: 'px-5 py-2.5 text-sm',
        md: 'px-7 py-3.5 text-sm tracking-wide',
        lg: 'px-10 py-4 text-base tracking-wide',
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

