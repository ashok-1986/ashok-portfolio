import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { CASE_STUDIES } from '@/lib/constants';
import CaseStudyContent from './CaseStudyContent';

type Props = {
    params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
    return Object.keys(CASE_STUDIES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const data = CASE_STUDIES[slug as keyof typeof CASE_STUDIES];

    if (!data) {
        return { title: 'Not Found' };
    }

    return {
        title: `${data.title} — Ashok Verma`,
        description: data.subtitle,
    };
}

export default async function CaseStudyPage({ params }: Props) {
    const { slug } = await params;
    const data = CASE_STUDIES[slug as keyof typeof CASE_STUDIES];

    if (!data) {
        notFound();
    }

    return <CaseStudyContent data={data} />;
}
