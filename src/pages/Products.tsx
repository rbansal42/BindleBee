import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Container } from '@/components/layout/Container';
import { ProductCard } from '@/components/products/ProductCard';
import { products, categories, searchProducts } from '@/data/products';

export function Products() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchQuery, setSearchQuery] = useState('');
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const selectedCategory = searchParams.get('category') || '';
    const selectedSubcategory = searchParams.get('subcategory') || '';
    const [sortBy, setSortBy] = useState('name');

    // Filter and sort products
    const filteredProducts = useMemo(() => {
        let result = [...products];

        // Search filter
        if (searchQuery) {
            result = searchProducts(searchQuery);
        }

        // Category filter
        if (selectedCategory) {
            result = result.filter((p) => p.category === selectedCategory);
        }

        // Subcategory filter
        if (selectedSubcategory) {
            result = result.filter((p) => p.subcategory === selectedSubcategory);
        }

        // Sort
        switch (sortBy) {
            case 'price-low':
                result.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                result.sort((a, b) => b.price - a.price);
                break;
            case 'name':
            default:
                result.sort((a, b) => a.name.localeCompare(b.name));
        }

        return result;
    }, [searchQuery, selectedCategory, selectedSubcategory, sortBy]);

    const handleCategoryClick = (category: string) => {
        const params = new URLSearchParams();
        if (category) params.set('category', category);
        setSearchParams(params);
    };

    const handleSubcategoryClick = (category: string, subcategory: string) => {
        const params = new URLSearchParams();
        params.set('category', category);
        params.set('subcategory', subcategory);
        setSearchParams(params);
    };

    const clearFilters = () => {
        setSearchParams({});
        setSearchQuery('');
    };

    return (
        <main className="pt-20 min-h-screen">
            {/* Hero Banner */}
            <div className="bg-beige py-16 md:py-24">
                <Container>
                    <div className="text-center animate-fade-in-up">
                        <h1 className="font-serif text-4xl md:text-5xl text-walnut mb-4">
                            Our Products
                        </h1>
                        <p className="text-charcoal/70 max-w-xl mx-auto">
                            Explore our entire range of distinctive furniture designs, crafted with care for the thoughtful home.
                        </p>
                    </div>
                </Container>
            </div>

            <Container className="py-12">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar Filters */}
                    <aside className="lg:w-64 shrink-0">
                        {/* Mobile Filter Toggle */}
                        <button
                            className="lg:hidden w-full flex items-center justify-between p-4 bg-beige rounded-lg mb-4"
                            onClick={() => setIsFilterOpen(!isFilterOpen)}
                        >
                            <span className="font-medium">Filters</span>
                            <svg
                                className={`w-5 h-5 transition-transform duration-300 ${isFilterOpen ? 'rotate-180' : ''}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        <div
                            className={`lg:block transition-all duration-300 overflow-hidden ${isFilterOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 lg:max-h-none opacity-0 lg:opacity-100'
                                }`}
                        >
                            {/* Search */}
                            <div className="mb-8">
                                <label className="block text-sm font-medium text-charcoal mb-3">Search</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Search products..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full px-4 py-3 pl-10 bg-beige border border-sand rounded-lg text-charcoal placeholder:text-taupe focus:outline-none focus:border-walnut transition-colors duration-300"
                                    />
                                    <svg
                                        className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-taupe"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        />
                                    </svg>
                                </div>
                            </div>

                            {/* Categories */}
                            <div className="mb-8">
                                <h3 className="text-sm font-medium text-charcoal mb-3">Categories</h3>
                                <ul className="space-y-2">
                                    <li>
                                        <button
                                            onClick={() => clearFilters()}
                                            className={`text-sm transition-colors duration-300 ${!selectedCategory ? 'text-terracotta font-medium' : 'text-charcoal/70 hover:text-charcoal'
                                                }`}
                                        >
                                            All Products
                                        </button>
                                    </li>
                                    {categories.map((cat) => (
                                        <li key={cat.name}>
                                            <button
                                                onClick={() => handleCategoryClick(cat.name)}
                                                className={`text-sm transition-colors duration-300 ${selectedCategory === cat.name && !selectedSubcategory
                                                    ? 'text-terracotta font-medium'
                                                    : 'text-charcoal/70 hover:text-charcoal'
                                                    }`}
                                            >
                                                {cat.name}
                                            </button>
                                            {selectedCategory === cat.name && (
                                                <ul className="mt-2 ml-4 space-y-1">
                                                    {cat.subcategories.map((sub) => (
                                                        <li key={sub}>
                                                            <button
                                                                onClick={() => handleSubcategoryClick(cat.name, sub)}
                                                                className={`text-sm transition-colors duration-300 ${selectedSubcategory === sub
                                                                    ? 'text-terracotta font-medium'
                                                                    : 'text-charcoal/50 hover:text-charcoal'
                                                                    }`}
                                                            >
                                                                {sub}
                                                            </button>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Clear Filters */}
                            {(selectedCategory || searchQuery) && (
                                <button
                                    onClick={clearFilters}
                                    className="text-sm text-terracotta hover:text-walnut transition-colors duration-300"
                                >
                                    Clear all filters
                                </button>
                            )}
                        </div>
                    </aside>

                    {/* Products Grid */}
                    <div className="flex-1">
                        {/* Sort & Results Count */}
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                            <p className="text-sm text-charcoal/70">
                                Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
                                {selectedCategory && ` in ${selectedCategory}`}
                                {selectedSubcategory && ` › ${selectedSubcategory}`}
                            </p>
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="px-4 py-2 bg-beige border border-sand rounded-lg text-sm text-charcoal focus:outline-none focus:border-walnut transition-colors duration-300"
                            >
                                <option value="name">Sort by Name</option>
                                <option value="price-low">Price: Low to High</option>
                                <option value="price-high">Price: High to Low</option>
                            </select>
                        </div>

                        {/* Grid */}
                        {filteredProducts.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                                {filteredProducts.map((product, index) => (
                                    <div
                                        key={product.id}
                                        className="animate-fade-in-up"
                                        style={{ animationDelay: `${index * 50}ms` }}
                                    >
                                        <ProductCard product={product} />
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-16">
                                <p className="text-charcoal/50 mb-4">No products found matching your criteria.</p>
                                <button
                                    onClick={clearFilters}
                                    className="text-terracotta hover:text-walnut transition-colors duration-300"
                                >
                                    Clear filters
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </Container>
        </main>
    );
}

export default Products;
