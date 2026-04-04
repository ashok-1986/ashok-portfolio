// Global Window type extensions for custom runtime properties
interface Window {
    __lenis: import('lenis').default | undefined;
    _marqueeTimer: ReturnType<typeof setTimeout> | undefined;
}
