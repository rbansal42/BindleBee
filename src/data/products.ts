export interface Product {
    id: string;
    name: string;
    price: number;
    category: string;
    subcategory: string;
    images: string[];
    description: string;
    dimensions: {
        width: number;
        height: number;
        depth: number;
    };
    materials: string[];
    featured?: boolean;
}

export const categories = [
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

export const products: Product[] = [
    // Living Room - Sofas
    {
        id: 'sofa-1',
        name: 'Aaram Sofa',
        price: 189000,
        category: 'Living Room',
        subcategory: 'Sofas',
        images: [
            'https://images.unsplash.com/photo-1555041469-a586c7bae99f?w=800&h=800&fit=crop',
            'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&h=800&fit=crop',
        ],
        description: 'A luxuriously comfortable three-seater sofa with premium fabric upholstery and solid wood frame.',
        dimensions: { width: 220, height: 85, depth: 95 },
        materials: ['Teak Wood', 'Premium Cotton'],
        featured: true,
    },
    {
        id: 'sofa-2',
        name: 'Sukoon Sectional',
        price: 285000,
        category: 'Living Room',
        subcategory: 'Sofas',
        images: [
            'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&h=800&fit=crop',
        ],
        description: 'An elegant L-shaped sectional perfect for large living spaces.',
        dimensions: { width: 300, height: 85, depth: 180 },
        materials: ['Sheesham Wood', 'Velvet'],
        featured: false,
    },

    // Living Room - Armchairs
    {
        id: 'armchair-1',
        name: 'Vishram Armchair',
        price: 78000,
        category: 'Living Room',
        subcategory: 'Armchairs',
        images: [
            'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=800&fit=crop',
        ],
        description: 'A statement armchair with handwoven rattan backrest and plush cushioning.',
        dimensions: { width: 75, height: 95, depth: 80 },
        materials: ['Rattan', 'Linen'],
        featured: true,
    },
    {
        id: 'armchair-2',
        name: 'Neend Lounge Chair',
        price: 95000,
        category: 'Living Room',
        subcategory: 'Armchairs',
        images: [
            'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&h=800&fit=crop',
        ],
        description: 'Mid-century inspired lounge chair with premium leather upholstery.',
        dimensions: { width: 80, height: 100, depth: 85 },
        materials: ['Walnut', 'Italian Leather'],
        featured: false,
    },

    // Living Room - Coffee Tables
    {
        id: 'coffee-1',
        name: 'Chaai Coffee Table',
        price: 45000,
        category: 'Living Room',
        subcategory: 'Coffee Tables',
        images: [
            'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=800&h=800&fit=crop',
        ],
        description: 'A minimalist coffee table with solid marble top and brass legs.',
        dimensions: { width: 120, height: 40, depth: 60 },
        materials: ['Italian Marble', 'Brass'],
        featured: true,
    },

    // Bedroom - Beds
    {
        id: 'bed-1',
        name: 'Sapna King Bed',
        price: 145000,
        category: 'Bedroom',
        subcategory: 'Beds',
        images: [
            'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&h=800&fit=crop',
        ],
        description: 'A majestic king-size bed with upholstered headboard and hidden storage.',
        dimensions: { width: 200, height: 130, depth: 210 },
        materials: ['Teak Wood', 'Premium Foam', 'Cotton'],
        featured: true,
    },
    {
        id: 'bed-2',
        name: 'Nidra Queen Bed',
        price: 125000,
        category: 'Bedroom',
        subcategory: 'Beds',
        images: [
            'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&h=800&fit=crop',
        ],
        description: 'Contemporary queen bed with minimalist design and solid wood construction.',
        dimensions: { width: 180, height: 110, depth: 200 },
        materials: ['Sheesham Wood'],
        featured: false,
    },

    // Bedroom - Bedside Tables
    {
        id: 'bedside-1',
        name: 'Raat Nightstand',
        price: 28000,
        category: 'Bedroom',
        subcategory: 'Bedside Tables',
        images: [
            'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=800&h=800&fit=crop',
        ],
        description: 'A compact nightstand with two drawers and tapered legs.',
        dimensions: { width: 50, height: 55, depth: 40 },
        materials: ['Oak Wood'],
        featured: false,
    },

    // Dining Room - Dining Tables
    {
        id: 'dining-1',
        name: 'Daawat Dining Table',
        price: 165000,
        category: 'Dining Room',
        subcategory: 'Dining Tables',
        images: [
            'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&h=800&fit=crop',
        ],
        description: 'An elegant 8-seater dining table with live edge design.',
        dimensions: { width: 240, height: 76, depth: 100 },
        materials: ['Live Edge Acacia Wood', 'Black Metal'],
        featured: true,
    },

    // Dining Room - Dining Chairs
    {
        id: 'chair-1',
        name: 'Baithak Dining Chair',
        price: 18000,
        category: 'Dining Room',
        subcategory: 'Dining Chairs',
        images: [
            'https://images.unsplash.com/photo-1503602642458-232111445657?w=800&h=800&fit=crop',
        ],
        description: 'Ergonomic dining chair with woven cane seat and solid wood frame.',
        dimensions: { width: 50, height: 85, depth: 55 },
        materials: ['Teak Wood', 'Cane'],
        featured: false,
    },

    // Office - Desks
    {
        id: 'desk-1',
        name: 'Kaam Executive Desk',
        price: 95000,
        category: 'Office',
        subcategory: 'Desks',
        images: [
            'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&h=800&fit=crop',
        ],
        description: 'A commanding executive desk with integrated cable management.',
        dimensions: { width: 180, height: 76, depth: 80 },
        materials: ['Walnut Veneer', 'Steel'],
        featured: true,
    },

    // Office - Bookcases
    {
        id: 'bookcase-1',
        name: 'Gyan Bookshelf',
        price: 68000,
        category: 'Office',
        subcategory: 'Bookcases',
        images: [
            'https://images.unsplash.com/photo-1594620302200-9a762244a156?w=800&h=800&fit=crop',
        ],
        description: 'A modular bookshelf system with adjustable shelves.',
        dimensions: { width: 120, height: 200, depth: 35 },
        materials: ['Oak Wood', 'Black Metal'],
        featured: false,
    },
];

export const featuredProducts = products.filter((p) => p.featured);

export function getProductById(id: string): Product | undefined {
    return products.find((p) => p.id === id);
}

export function getProductsByCategory(category: string): Product[] {
    return products.filter((p) => p.category === category);
}

export function getProductsBySubcategory(category: string, subcategory: string): Product[] {
    return products.filter((p) => p.category === category && p.subcategory === subcategory);
}

export function searchProducts(query: string): Product[] {
    const lowerQuery = query.toLowerCase();
    return products.filter(
        (p) =>
            p.name.toLowerCase().includes(lowerQuery) ||
            p.description.toLowerCase().includes(lowerQuery) ||
            p.category.toLowerCase().includes(lowerQuery) ||
            p.subcategory.toLowerCase().includes(lowerQuery)
    );
}

export function formatPrice(price: number): string {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0,
    }).format(price);
}
