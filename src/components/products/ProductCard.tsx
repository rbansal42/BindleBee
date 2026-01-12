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
            className={`group block bg-cream rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${className}`}
        >
            {/* Image Container */}
            <div className="relative aspect-square overflow-hidden bg-beige">
                <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Quick View Overlay */}
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors duration-300 flex items-center justify-center">
                    <span className="px-4 py-2 bg-cream text-charcoal text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                        View Details
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-5">
                <p className="text-xs text-taupe uppercase tracking-wider mb-1">
                    {product.subcategory}
                </p>
                <h3 className="font-serif text-lg text-charcoal group-hover:text-walnut transition-colors duration-300">
                    {product.name}
                </h3>
                <p className="mt-2 text-base font-medium text-walnut">
                    {formatPrice(product.price)}
                </p>
            </div>
        </Link>
    );
}

export default ProductCard;
