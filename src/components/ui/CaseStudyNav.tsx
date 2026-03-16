'use client';

import Link from 'next/link';
import Magnetic from '@/components/ui/Magnetic';

export default function CaseStudyNav() {
    return (
        <nav className="cs-nav">
            <div className="cs-nav-inner">
                <Magnetic strength={0.3}>
                    <Link href="/" className="back-btn">
                        <span className="arrow">←</span>
                        <span className="text">Back to Home</span>
                    </Link>
                </Magnetic>
            </div>
        </nav>
    );
}
