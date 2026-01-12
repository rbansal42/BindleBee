import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { ProductCard } from '@/components/products/ProductCard';
import { getProductById, products, formatPrice } from '@/data/products';

export function ProductDetail() {
    const { id } = useParams<{ id: string }>();
    const product = getProductById(id || '');
    const [selectedImage, setSelectedImage] = useState(0);

    if (!product) {
        return (
            <main className="pt-20 min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="font-serif text-3xl text-walnut mb-4">Product Not Found</h1>
                    <Button href="/products">Back to Products</Button>
                </div>
            </main>
        );
    }

    // Get related products (same category, different product)
    const relatedProducts = products
        .filter((p) => p.category === product.category && p.id !== product.id)
        .slice(0, 4);

    return (
        <main className="pt-20 min-h-screen">
            <Container className="py-12">
                {/* Breadcrumb */}
                <nav className="flex items-center gap-2 text-sm text-charcoal/60 mb-8">
                    <Link to="/" className="hover:text-charcoal transition-colors duration-300">
                        Home
                    </Link>
                    <span>/</span>
                    <Link to="/products" className="hover:text-charcoal transition-colors duration-300">
                        Products
                    </Link>
                    <span>/</span>
                    <Link
                        to={`/products?category=${product.category}`}
                        className="hover:text-charcoal transition-colors duration-300"
                    >
                        {product.category}
                    </Link>
                    <span>/</span>
                    <span className="text-charcoal">{product.name}</span>
                </nav>

                {/* Product Section */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Image Gallery */}
                    <div className="animate-fade-in">
                        <div className="aspect-square bg-beige rounded-2xl overflow-hidden mb-4">
                            <img
                                src={product.images[selectedImage]}
                                alt={product.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {product.images.length > 1 && (
                            <div className="flex gap-4">
                                {product.images.map((img, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setSelectedImage(index)}
                                        className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors duration-300 ${selectedImage === index ? 'border-walnut' : 'border-transparent'
                                            }`}
                                    >
                                        <img src={img} alt="" className="w-full h-full object-cover" />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Product Info */}
                    <div className="animate-fade-in-up">
                        <span className="text-sm text-taupe uppercase tracking-wider">
                            {product.subcategory}
                        </span>
                        <h1 className="font-serif text-3xl md:text-4xl text-walnut mt-2 mb-4">
                            {product.name}
                        </h1>
                        <p className="text-2xl font-medium text-charcoal mb-6">
                            {formatPrice(product.price)}
                        </p>

                        <p className="text-charcoal/70 leading-relaxed mb-8">{product.description}</p>

                        {/* Specifications */}
                        <div className="border-t border-sand pt-6 mb-8">
                            <h3 className="font-medium text-charcoal mb-4">Specifications</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <p className="text-sm text-taupe">Dimensions</p>
                                    <p className="text-charcoal">
                                        {product.dimensions.width} × {product.dimensions.depth} × {product.dimensions.height} cm
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm text-taupe">Materials</p>
                                    <p className="text-charcoal">{product.materials.join(', ')}</p>
                                </div>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-wrap gap-4">
                            <Button variant="primary" size="lg" className="flex-1 sm:flex-none">
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                    />
                                </svg>
                                Add to Wishlist
                            </Button>
                            <Button href="/contact" variant="outline" size="lg" className="flex-1 sm:flex-none">
                                Enquire Now
                            </Button>
                        </div>

                        {/* Trust Badges */}
                        <div className="flex flex-wrap gap-6 mt-8 pt-6 border-t border-sand">
                            <div className="flex items-center gap-2 text-sm text-charcoal/70">
                                <svg className="w-5 h-5 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                    />
                                </svg>
                                10 Year Warranty
                            </div>
                            <div className="flex items-center gap-2 text-sm text-charcoal/70">
                                <svg className="w-5 h-5 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                                    />
                                </svg>
                                Free Delivery
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Products */}
                {relatedProducts.length > 0 && (
                    <div className="mt-24">
                        <h2 className="font-serif text-2xl text-walnut mb-8">You May Also Like</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {relatedProducts.map((p) => (
                                <ProductCard key={p.id} product={p} />
                            ))}
                        </div>
                    </div>
                )}
            </Container>
        </main>
    );
}

export default ProductDetail;
