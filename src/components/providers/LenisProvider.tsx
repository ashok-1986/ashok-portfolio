'use client';

import { useEffect } from 'react';
import { initLenis } from '@/hooks/useLenis';

export default function LenisProvider({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        const lenis = initLenis();
        return () => lenis.destroy();
    }, []);

    return <>{children}</>;
}
