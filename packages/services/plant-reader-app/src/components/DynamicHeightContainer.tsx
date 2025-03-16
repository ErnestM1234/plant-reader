import { useRef, useState, useEffect } from "react";

export interface DynamicHeightContainerProps {
    children: React.ReactNode;
    defaultHeight?: string; // Optional: Default height (e.g., '9rem')
}

export function DynamicHeightContainer({
    children,
    defaultHeight = '9rem',
}: DynamicHeightContainerProps): JSX.Element {
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const [containerHeight, setContainerHeight] = useState(defaultHeight);

    useEffect(() => {
        const updateHeight = () => {
            if (contentRef.current) {
                // Measure the content height
                const contentHeight = contentRef.current.offsetHeight;
                // Convert `3rem` to pixels (default rem size is 16px)
                const remInPixels = parseFloat(getComputedStyle(document.documentElement).fontSize) * 3;
                // Calculate the nearest multiple of `3rem`
                const newHeight = Math.ceil(contentHeight / remInPixels) * remInPixels;
                setContainerHeight(`${newHeight}px`);
            }
        };

        // Update height on mount and window resize
        updateHeight();
        window.addEventListener('resize', updateHeight);

        return () => window.removeEventListener('resize', updateHeight);
    }, []);

    return (
        <div
            ref={containerRef}
            style={{
                height: containerHeight,
                overflow: 'hidden',
            }}
        >
            <div ref={contentRef} suppressHydrationWarning>
                {children}
            </div>
        </div>
    );
};
