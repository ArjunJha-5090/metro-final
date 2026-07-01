import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon: Icon,
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-heading tracking-wide uppercase font-bold border-2 border-secondary transition-all duration-150 focus:outline-none';
  
  const variants = {
    primary: 'bg-primary text-white shadow-brutal hover:shadow-brutal-lg hover:-translate-y-1 active:shadow-none active:translate-y-1 active:translate-x-1',
    secondary: 'bg-secondary text-white shadow-brutal hover:shadow-brutal-lg hover:-translate-y-1 active:shadow-none active:translate-y-1 active:translate-x-1',
    outline: 'bg-background text-secondary shadow-brutal hover:shadow-brutal-lg hover:bg-accent hover:-translate-y-1 active:shadow-none active:translate-y-1 active:translate-x-1',
    ghost: 'border-transparent hover:bg-black/5 active:bg-black/10',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-lg',
    lg: 'px-8 py-4 text-xl',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {Icon && <Icon className={`mr-2 ${size === 'sm' ? 'w-4 h-4' : 'w-5 h-5'}`} strokeWidth={3} />}
      {children}
    </button>
  );
};
