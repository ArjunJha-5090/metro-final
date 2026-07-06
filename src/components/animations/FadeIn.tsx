import React, { useEffect, useRef, useState } from 'react';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
}

export const FadeIn: React.FC<FadeInProps> = ({ 
  children, 
  delay = 0, 
  direction = 'up',
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  let transformClass = '';
  switch (direction) {
    case 'up':
      transformClass = 'translate-y-12';
      break;
    case 'down':
      transformClass = '-translate-y-12';
      break;
    case 'left':
      transformClass = '-translate-x-12';
      break;
    case 'right':
      transformClass = 'translate-x-12';
      break;
    default:
      transformClass = '';
  }

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out w-full ${className} ${
        isVisible ? 'opacity-100 translate-y-0 translate-x-0' : `opacity-0 ${transformClass}`
      }`}
    >
      {children}
    </div>
  );
};
