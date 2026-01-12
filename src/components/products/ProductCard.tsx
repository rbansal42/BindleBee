import { Link } from 'react-router-dom';
import type { Product } from '@/data/products';
import { formatPrice } from '@/data/products';

interface ProductCardProps {
    product: Product;
    className?: string;
}

export function ProductCard({ product, className = '' }: ProductCardProps) {
    return (
        <Link
            to={`/products/${product.id}`}
            className={`group block bg-cream rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-elevated hover:-translate-y-2 shadow-soft ${className}`}
        >
            {/* Image Container */}
            <div className="relative aspect-square overflow-hidden bg-beige">
                <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Quick View Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="px-5 py-2.5 bg-cream/95 backdrop-blur-sm text-charcoal text-sm font-medium rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 shadow-soft flex items-center gap-2">
                        View Details
                        <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                        </svg>
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                <p className="text-xs text-taupe uppercase tracking-[0.15em] mb-2">
                    {product.subcategory}
                </p>
                <h3 className="font-serif text-lg text-charcoal group-hover:text-walnut transition-colors duration-300 mb-3">
                    {product.name}
                </h3>
                <p className="text-base font-medium text-walnut">
                    {formatPrice(product.price)}
                </p>
            </div>
        </Link>
    );
}

export default ProductCard;

