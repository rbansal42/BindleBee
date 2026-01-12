import { Container, Section } from '@/components/layout/Container';

interface LegalPageLayoutProps {
    title: string;
    lastUpdated: string;
    children: React.ReactNode;
}

function LegalPageLayout({ title, lastUpdated, children }: LegalPageLayoutProps) {
    return (
        <main className="pt-20 min-h-screen">
            {/* Hero */}
            <div className="bg-beige py-16">
                <Container>
                    <div className="text-center animate-fade-in-up">
                        <h1 className="font-serif text-3xl md:text-4xl text-walnut mb-2">{title}</h1>
                        <p className="text-sm text-taupe">Last updated: {lastUpdated}</p>
                    </div>
                </Container>
            </div>

            <Section background="cream">
                <div className="max-w-3xl mx-auto prose prose-walnut animate-fade-in-up">
                    {children}
                </div>
            </Section>
        </main>
    );
}

export function Terms() {
    return (
        <LegalPageLayout title="Terms of Service" lastUpdated="January 1, 2026">
            <div className="space-y-8 text-charcoal/80">
                <section>
                    <h2 className="font-serif text-xl text-walnut mb-4">1. Agreement to Terms</h2>
                    <p className="leading-relaxed">
                        By accessing or using the BindleBee website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                    </p>
                </section>

                <section>
                    <h2 className="font-serif text-xl text-walnut mb-4">2. Products and Pricing</h2>
                    <p className="leading-relaxed mb-4">
                        All products displayed on our website are subject to availability. We reserve the right to modify prices at any time without prior notice. Prices shown are in Indian Rupees (INR) and include applicable taxes unless otherwise stated.
                    </p>
                    <p className="leading-relaxed">
                        Product images are for illustrative purposes only. Due to the natural variations in wood grain and handcrafted nature of our products, actual items may vary slightly from the images shown.
                    </p>
                </section>

                <section>
                    <h2 className="font-serif text-xl text-walnut mb-4">3. Orders and Payment</h2>
                    <p className="leading-relaxed">
                        By placing an order, you confirm that all information provided is accurate. We accept payment via major credit cards, debit cards, and bank transfers. Order confirmation will be sent to your registered email address.
                    </p>
                </section>

                <section>
                    <h2 className="font-serif text-xl text-walnut mb-4">4. Delivery and Shipping</h2>
                    <p className="leading-relaxed">
                        Delivery times may vary based on location and product availability. Estimated delivery times will be communicated at the time of order confirmation. We offer free delivery on orders above ₹50,000 within select cities.
                    </p>
                </section>

                <section>
                    <h2 className="font-serif text-xl text-walnut mb-4">5. Returns and Refunds</h2>
                    <p className="leading-relaxed">
                        If you are not satisfied with your purchase, you may request a return within 7 days of delivery. Products must be in original condition and packaging. Custom or made-to-order items are non-returnable.
                    </p>
                </section>

                <section>
                    <h2 className="font-serif text-xl text-walnut mb-4">6. Warranty</h2>
                    <p className="leading-relaxed">
                        All BindleBee products come with a 10-year warranty against manufacturing defects. This warranty does not cover normal wear and tear, damage from misuse, or unauthorized modifications.
                    </p>
                </section>

                <section>
                    <h2 className="font-serif text-xl text-walnut mb-4">7. Contact Information</h2>
                    <p className="leading-relaxed">
                        For questions about these Terms of Service, please contact us at{' '}
                        <a href="mailto:legal@bindlebee.com" className="text-terracotta hover:text-walnut transition-colors duration-300">
                            legal@bindlebee.com
                        </a>
                    </p>
                </section>
            </div>
        </LegalPageLayout>
    );
}

export function Privacy() {
    return (
        <LegalPageLayout title="Privacy Policy" lastUpdated="January 1, 2026">
            <div className="space-y-8 text-charcoal/80">
                <section>
                    <h2 className="font-serif text-xl text-walnut mb-4">1. Information We Collect</h2>
                    <p className="leading-relaxed mb-4">
                        We collect information you provide directly to us, including:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Name, email address, and phone number</li>
                        <li>Shipping and billing addresses</li>
                        <li>Payment information (processed securely through our payment partners)</li>
                        <li>Order history and preferences</li>
                        <li>Communications with our customer service team</li>
                    </ul>
                </section>

                <section>
                    <h2 className="font-serif text-xl text-walnut mb-4">2. How We Use Your Information</h2>
                    <p className="leading-relaxed mb-4">We use the information we collect to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Process and fulfill your orders</li>
                        <li>Communicate with you about orders, products, and services</li>
                        <li>Send promotional communications (with your consent)</li>
                        <li>Improve our website and customer experience</li>
                        <li>Comply with legal obligations</li>
                    </ul>
                </section>

                <section>
                    <h2 className="font-serif text-xl text-walnut mb-4">3. Information Sharing</h2>
                    <p className="leading-relaxed">
                        We do not sell your personal information. We may share your information with service providers who assist us in operating our business, such as payment processors, shipping partners, and marketing platforms. These partners are contractually obligated to protect your information.
                    </p>
                </section>

                <section>
                    <h2 className="font-serif text-xl text-walnut mb-4">4. Data Security</h2>
                    <p className="leading-relaxed">
                        We implement industry-standard security measures to protect your personal information. All data transmission is encrypted using SSL technology. However, no method of transmission over the internet is 100% secure.
                    </p>
                </section>

                <section>
                    <h2 className="font-serif text-xl text-walnut mb-4">5. Your Rights</h2>
                    <p className="leading-relaxed">
                        You have the right to access, correct, or delete your personal information. You can also opt out of marketing communications at any time. To exercise these rights, please contact us at{' '}
                        <a href="mailto:privacy@bindlebee.com" className="text-terracotta hover:text-walnut transition-colors duration-300">
                            privacy@bindlebee.com
                        </a>
                    </p>
                </section>

                <section>
                    <h2 className="font-serif text-xl text-walnut mb-4">6. Changes to This Policy</h2>
                    <p className="leading-relaxed">
                        We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting a notice on our website or sending you an email.
                    </p>
                </section>
            </div>
        </LegalPageLayout>
    );
}

export function Cookies() {
    return (
        <LegalPageLayout title="Cookie Policy" lastUpdated="January 1, 2026">
            <div className="space-y-8 text-charcoal/80">
                <section>
                    <h2 className="font-serif text-xl text-walnut mb-4">What Are Cookies?</h2>
                    <p className="leading-relaxed">
                        Cookies are small text files stored on your device when you visit a website. They help us recognize your device and remember your preferences to provide a better browsing experience.
                    </p>
                </section>

                <section>
                    <h2 className="font-serif text-xl text-walnut mb-4">Types of Cookies We Use</h2>

                    <h3 className="font-medium text-charcoal mt-4 mb-2">Essential Cookies</h3>
                    <p className="leading-relaxed mb-4">
                        These cookies are necessary for the website to function properly. They enable core functionalities such as security, network management, and account access.
                    </p>

                    <h3 className="font-medium text-charcoal mt-4 mb-2">Analytics Cookies</h3>
                    <p className="leading-relaxed mb-4">
                        We use analytics cookies to understand how visitors interact with our website. This helps us improve our website and services. These cookies collect anonymous data about page views, time spent, and navigation patterns.
                    </p>

                    <h3 className="font-medium text-charcoal mt-4 mb-2">Functional Cookies</h3>
                    <p className="leading-relaxed mb-4">
                        These cookies remember your preferences, such as language and region, to provide a more personalized experience.
                    </p>

                    <h3 className="font-medium text-charcoal mt-4 mb-2">Marketing Cookies</h3>
                    <p className="leading-relaxed">
                        With your consent, we may use marketing cookies to show you relevant advertisements based on your interests. These cookies track your activity across websites.
                    </p>
                </section>

                <section>
                    <h2 className="font-serif text-xl text-walnut mb-4">Managing Cookies</h2>
                    <p className="leading-relaxed">
                        You can control and manage cookies through your browser settings. Most browsers allow you to refuse or delete cookies. Please note that disabling cookies may affect the functionality of our website.
                    </p>
                </section>

                <section>
                    <h2 className="font-serif text-xl text-walnut mb-4">Contact Us</h2>
                    <p className="leading-relaxed">
                        If you have questions about our use of cookies, please contact us at{' '}
                        <a href="mailto:privacy@bindlebee.com" className="text-terracotta hover:text-walnut transition-colors duration-300">
                            privacy@bindlebee.com
                        </a>
                    </p>
                </section>
            </div>
        </LegalPageLayout>
    );
}
