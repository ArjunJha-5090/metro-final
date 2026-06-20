import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  centered = true,
  className = '',
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : 'text-left'} ${className}`}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-secondary mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-text/70 max-w-2xl mx-auto text-lg">
          {subtitle}
        </p>
      )}
      {centered && <div className="indian-divider mt-6" />}
    </div>
  );
};
