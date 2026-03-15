import { useRef, useCallback, useEffect } from 'react';

interface TiltOptions {
  maxRotation?: number;
  perspective?: number;
}

export const useTilt = (options: TiltOptions = {}) => {
  const { maxRotation = 10, perspective = 700 } = options;
  const elementRef = useRef<HTMLElement | null>(null);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!elementRef.current) return;

      const rect = elementRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      const rotateY = x * maxRotation;
      const rotateX = -y * maxRotation;

      elementRef.current.style.transform = `perspective(${perspective}px) rotateY(${rotateY}deg) rotateX(${rotateX}deg) translateZ(4px)`;
    },
    [maxRotation, perspective]
  );

  const handleMouseLeave = useCallback(() => {
    if (!elementRef.current) return;
    elementRef.current.style.transform = `perspective(${perspective}px) rotateY(0deg) rotateX(0deg) translateZ(0px)`;
  }, [perspective]);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseLeave]);

  return elementRef;
};
