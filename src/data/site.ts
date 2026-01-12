import siteSettings from '../content/site-settings.json';
import promotions from '../content/promotions.json';

export interface SiteSettings {
    brandName: string;
    whatsappNumber: string;
    seoTitle: string;
    seoDescription: string;
    contactPhone: string;
    contactEmail: string;
    contactAddress: string;
    contactMapUrl: string;
    socialLinks: string[];
    heroImage: string;
    categories: {
        id: string;
        name: string;
        description: string;
        image: string;
    }[];
}

export interface Promotion {
    enablePromotion: boolean;
    promotionText: string;
    promotionType: 'banner' | 'popup';
}

export const getSiteSettings = (): SiteSettings => {
    // Safety check: ensure siteSettings exists before casting
    return (siteSettings || {}) as SiteSettings;
};

export const getPromotion = (): Promotion => {
    return promotions as Promotion;
};
