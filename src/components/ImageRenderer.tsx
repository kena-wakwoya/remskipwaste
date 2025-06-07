
import { useRef, useState } from 'react';
import fallbackImg from '../../public/assets/react.svg'; // Ensure this path is correct
import type { ImageRendererProps } from '../types/allTypes';

export const ImageRenderer = ({ imagesize, amount, alt = 'Image' }: ImageRendererProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [angle, setAngle] = useState(0);
    const animationRef = useRef<number | null>(null);
    const timeRef = useRef(0);

    const imageUrl = `assets/${imagesize}-yarder-skip.jpg`;

    const startRotation = () => {
        const animate = () => {
            timeRef.current += 0.02;
            const yRotation = Math.sin(timeRef.current) * 15;
            setAngle(yRotation);
            animationRef.current = requestAnimationFrame(animate);
        };
        if (animationRef.current === null) {
            animate();
        }
    };

    const stopRotation = () => {
        if (animationRef.current !== null) {
            cancelAnimationFrame(animationRef.current);
            animationRef.current = null;
            setAngle(0); // Reset angle smoothly
        }
    };

    return (
        <div
            ref={containerRef}
            onMouseEnter={startRotation}
            onMouseLeave={stopRotation}
            className="relative w-full max-w-full aspect-video transition-transform duration-300 ease-out rounded-lg shadow-xl overflow-hidden"
            style={{
                perspective: 1000,
                transformStyle: 'preserve-3d',
                transform: `rotateY(${angle}deg)`,
            }}
        >
            <div className="absolute top-3 right-3 bg-blue-600 text-green-400 text-2xl font-semibold px-3 py-1 rounded-full shadow-md z-10">
                £{amount}
            </div>
            <img
                src={imageUrl}
                alt={alt}
                onError={(e) => (e.currentTarget.src = fallbackImg)}
                className="w-full h-full object-cover rounded-lg"
                style={{
                    transform: 'translateZ(30px)',
                    willChange: 'transform',
                }}
            />
        </div>
    );
};