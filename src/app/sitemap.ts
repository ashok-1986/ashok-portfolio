import { MetadataRoute } from 'next';
import { CASE_STUDIES } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://ashok.alchemetryx.com';

    const workPages = Object.keys(CASE_STUDIES).map(slug => ({
        url: `${baseUrl}/work/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 1,
        },
        ...workPages,
    ];
}
