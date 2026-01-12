import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Container } from './Container';

const categories = [
    {
        name: 'Living Room',
        subcategories: ['Sofas', 'Armchairs', 'Coffee Tables', 'Side Tables', 'Consoles'],
    },
    {
        name: 'Bedroom',
        subcategories: ['Beds', 'Bedside Tables', 'Dressers', 'Benches'],
    },
    {
        name: 'Dining Room',
        subcategories: ['Dining Tables', 'Dining Chairs', 'Bar Stools'],
    },
    {
        name: 'Office',
        subcategories: ['Desks', 'Office Chairs', 'Bookcases'],
    },
];

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isShopMenuOpen, setIsShopMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
        setIsShopMenuOpen(false);
    }, [location]);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-cream/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
                }`}
        >
            <Container>
                <nav className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link to="/" className="font-serif text-2xl md:text-3xl text-walnut tracking-wide">
                        BindleBee
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        <Link
                            to="/"
                            className="text-sm font-medium text-charcoal hover:text-walnut transition-colors duration-300"
                        >
                            Home
                        </Link>

                        {/* Shop Dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={() => setIsShopMenuOpen(true)}
                            onMouseLeave={() => setIsShopMenuOpen(false)}
                        >
                            <Link
                                to="/products"
                                className="text-sm font-medium text-charcoal hover:text-walnut transition-colors duration-300 flex items-center gap-1"
                            >
                                Shop
                                <svg
                                    className={`w-4 h-4 transition-transform duration-300 ${isShopMenuOpen ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                                </svg>
                            </Link>

                            {/* Mega Menu */}
                            <div
                                className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300 ${isShopMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                                    }`}
                            >
                                <div className="bg-cream/95 backdrop-blur-md rounded-lg shadow-lg border border-sand p-8 min-w-[600px] animate-slide-down">
                                    <div className="grid grid-cols-4 gap-8">
                                        {categories.map((category) => (
                                            <div key={category.name}>
                                                <h3 className="font-serif text-walnut text-lg mb-4">{category.name}</h3>
                                                <ul className="space-y-2">
                                                    {category.subcategories.map((sub) => (
                                                        <li key={sub}>
                                                            <Link
                                                                to={`/products?category=${category.name}&subcategory=${sub}`}
                                                                className="text-sm text-charcoal/70 hover:text-terracotta transition-colors duration-300"
                                                            >
                                                                {sub}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Link
                            to="/contact"
                            className="text-sm font-medium text-charcoal hover:text-walnut transition-colors duration-300"
                        >
                            Contact
                        </Link>
                    </div>

                    {/* Right Icons */}
                    <div className="flex items-center gap-4">
                        {/* Search Icon */}
                        <button className="p-2 text-charcoal hover:text-walnut transition-colors duration-300">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </button>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="lg:hidden p-2 text-charcoal hover:text-walnut transition-colors duration-300"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isMobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </nav>

                {/* Mobile Menu */}
                <div
                    className={`lg:hidden overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                        }`}
                >
                    <div className="py-6 border-t border-sand">
                        <div className="space-y-4">
                            <Link to="/" className="block text-lg font-medium text-charcoal hover:text-walnut">
                                Home
                            </Link>
                            <Link to="/products" className="block text-lg font-medium text-charcoal hover:text-walnut">
                                Shop
                            </Link>
                            <div className="pl-4 space-y-2">
                                {categories.map((category) => (
                                    <Link
                                        key={category.name}
                                        to={`/products?category=${category.name}`}
                                        className="block text-sm text-charcoal/70 hover:text-terracotta"
                                    >
                                        {category.name}
                                    </Link>
                                ))}
                            </div>
                            <Link to="/contact" className="block text-lg font-medium text-charcoal hover:text-walnut">
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </header>
    );
}

export default Header;
