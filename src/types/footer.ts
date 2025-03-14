export interface Logo {
    src: string;
    alt: string;
}

export interface Product {
    name: string;
    href: string;
    external?: boolean;
}

export interface FooterProps {
    siteName: string;
    homeLink: string;
    slogan: string;
    company: string;
    copyright: string;
    inspirationalSlogan: string;
    icp?: string;
    logo?: Logo;
    products?: Product[];
    aboutLink?: string;
    contactLink?: string;
    termsLink?: string;
    privacyLink?: string;
    socialLinks?: string[];
    teamLink?: string;
    careersLink?: string;
    newsLink?: string;
    historyLink?: string;
    partnersLink?: string;
    blogLink?: string;
    faqLink?: string;
    mediaLink?: string;
    techStackLink?: string;
} 