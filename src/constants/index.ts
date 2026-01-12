/**
 * Site-wide constants and configuration
 * Centralized data for easy maintenance and updates
 */

// ============================================
// BRAND & COMPANY INFO
// ============================================
export const COMPANY = {
    name: 'BindleBee',
    tagline: 'Furniture for the Thoughtful Home',
    description: 'Handcrafted furniture that brings warmth and character to your living spaces.',
    email: 'hello@bindlebee.com',
    phone: '+91 98765 43210',
    address: {
        line1: '42, Design District',
        line2: 'Koramangala',
        city: 'Bangalore',
        state: 'Karnataka',
        pincode: '560034',
        country: 'India',
    },
    social: {
        instagram: 'https://instagram.com/bindlebee',
        facebook: 'https://facebook.com/bindlebee',
        pinterest: 'https://pinterest.com/bindlebee',
        twitter: 'https://twitter.com/bindlebee',
    },
} as const;

// ============================================
// NAVIGATION
// ============================================
export const NAV_LINKS = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Contact', href: '/contact' },
] as const;

export const FOOTER_LINKS = {
    products: [
        { label: 'Living Room', href: '/products?category=Living%20Room' },
        { label: 'Bedroom', href: '/products?category=Bedroom' },
        { label: 'Dining Room', href: '/products?category=Dining%20Room' },
        { label: 'Office', href: '/products?category=Office' },
    ],
    company: [
        { label: 'About Us', href: '/about' },
        { label: 'Contact', href: '/contact' },
        { label: 'Careers', href: '/careers' },
    ],
    legal: [
        { label: 'Terms of Service', href: '/legal/terms' },
        { label: 'Privacy Policy', href: '/legal/privacy' },
        { label: 'Cookie Policy', href: '/legal/cookies' },
    ],
} as const;

// ============================================
// FEATURES & USPs
// ============================================
export const FEATURES = [
    {
        icon: 'warranty',
        title: '10 Year Warranty',
        description: 'Every piece backed by our decade-long promise of quality.',
    },
    {
        icon: 'delivery',
        title: 'Free Delivery',
        description: 'Complimentary white-glove delivery across India.',
    },
    {
        icon: 'craftsmanship',
        title: 'Artisan Crafted',
        description: 'Handcrafted by skilled master craftsmen.',
    },
    {
        icon: 'sustainable',
        title: 'Sustainable Materials',
        description: 'Responsibly sourced wood and eco-friendly finishes.',
    },
] as const;

// ============================================
// TESTIMONIALS
// ============================================
export const TESTIMONIALS = [
    {
        id: 1,
        name: 'Priya Sharma',
        location: 'Mumbai',
        text: 'The Aaram sofa transformed our living room. The quality and comfort are unmatched. Truly furniture that tells a story.',
        rating: 5,
        product: 'Aaram Sofa',
    },
    {
        id: 2,
        name: 'Rahul Mehta',
        location: 'Delhi',
        text: 'We furnished our entire home with BindleBee pieces. Two years later, everything looks as beautiful as day one.',
        rating: 5,
        product: 'Complete Home',
    },
    {
        id: 3,
        name: 'Ananya Iyer',
        location: 'Bangalore',
        text: 'The craftsmanship on the Daawat dining table is exceptional. It has become the centerpiece of our family gatherings.',
        rating: 5,
        product: 'Daawat Dining Table',
    },
] as const;

// ============================================
// HERO SECTION
// ============================================
export const HERO = {
    title: 'Furniture for the Thoughtful Home',
    subtitle: 'Handcrafted pieces that bring warmth, character, and timeless elegance to your living spaces.',
    primaryCta: { label: 'Explore Collection', href: '/products' },
    secondaryCta: { label: 'Our Story', href: '/about' },
    backgroundImage: 'https://images.unsplash.com/photo-1555041469-a586c7bae99f?w=1920&h=1080&fit=crop',
} as const;

// ============================================
// ABOUT SECTION
// ============================================
export const ABOUT = {
    title: 'Our Story',
    subtitle: 'A Heritage of Craftsmanship',
    description: `Founded in the heart of India's furniture capital, BindleBee brings together generations of woodworking expertise with contemporary design sensibilities. Each piece is a testament to the enduring relationship between artisan and material.`,
    values: [
        { title: 'Quality First', description: 'Premium materials and meticulous construction.' },
        { title: 'Sustainable Practice', description: 'Responsibly sourced wood and eco-friendly finishes.' },
        { title: 'Timeless Design', description: 'Pieces that transcend fleeting trends.' },
    ],
    stats: [
        { value: '25+', label: 'Years of Excellence' },
        { value: '10,000+', label: 'Happy Homes' },
        { value: '50+', label: 'Master Craftsmen' },
    ],
} as const;

// ============================================
// CONTACT FORM SUBJECTS
// ============================================
export const CONTACT_SUBJECTS = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'product', label: 'Product Question' },
    { value: 'order', label: 'Order Status' },
    { value: 'custom', label: 'Custom Furniture' },
    { value: 'wholesale', label: 'Wholesale Inquiry' },
    { value: 'other', label: 'Other' },
] as const;

// ============================================
// CURRENCY & FORMATTING
// ============================================
export const CURRENCY = {
    code: 'INR',
    symbol: '₹',
    locale: 'en-IN',
} as const;

// ============================================
// SEO DEFAULTS
// ============================================
export const SEO = {
    defaultTitle: 'BindleBee | Furniture for the Thoughtful Home',
    titleTemplate: '%s | BindleBee',
    defaultDescription: 'Discover handcrafted furniture designed to bring warmth and character to your home. Premium quality sofas, beds, tables & more.',
    siteUrl: 'https://bindlebee.com',
    twitterHandle: '@bindlebee',
} as const;

// ============================================
// SORT OPTIONS (for products page)
// ============================================
export const SORT_OPTIONS = [
    { value: 'name', label: 'Sort by Name' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
] as const;

// ============================================
// TYPE EXPORTS
// ============================================
export type Company = typeof COMPANY;
export type NavLink = (typeof NAV_LINKS)[number];
export type Feature = (typeof FEATURES)[number];
export type Testimonial = (typeof TESTIMONIALS)[number];
export type ContactSubject = (typeof CONTACT_SUBJECTS)[number];
export type SortOption = (typeof SORT_OPTIONS)[number];
