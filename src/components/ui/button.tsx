import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
          {
            'bg-gutsy-black text-white hover:bg-gutsy-gray-800 focus:ring-gutsy-black':
              variant === 'primary',
            'bg-gutsy-gray-100 text-gutsy-black hover:bg-gutsy-gray-200 focus:ring-gutsy-gray-400':
              variant === 'secondary',
            'border border-gutsy-black text-gutsy-black hover:bg-gutsy-black hover:text-white focus:ring-gutsy-black':
              variant === 'outline',
            'text-gutsy-black hover:bg-gutsy-gray-100 focus:ring-gutsy-gray-400':
              variant === 'ghost',
          },
          {
            'px-3 py-1.5 text-sm': size === 'sm',
            'px-5 py-2.5 text-base': size === 'md',
            'px-8 py-3.5 text-lg': size === 'lg',
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
