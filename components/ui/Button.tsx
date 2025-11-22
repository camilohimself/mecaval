import React from 'react';
import { LucideIcon } from 'lucide-react';

export type ButtonVariant = 'primary' | 'secondary' | 'outline';
export type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  href?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      icon: Icon,
      iconPosition = 'left',
      fullWidth = false,
      href,
      className = '',
      ...props
    },
    ref
  ) => {
    // Base styles from globals.css
    const baseStyles = 'btn';

    // Variant styles from globals.css
    const variantStyles = {
      primary: 'btn-primary',
      secondary: 'btn-secondary',
      outline: 'btn-outline'
    };

    // Size styles from globals.css
    const sizeStyles = {
      sm: 'btn-sm',
      md: '',  // Default size from .btn
      lg: 'btn-lg'
    };

    // Icon sizes
    const iconSizes = {
      sm: 'w-4 h-4',
      md: 'w-5 h-5',
      lg: 'w-5 h-5'
    };

    const widthStyles = fullWidth ? 'w-full' : '';

    const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyles} ${className}`.trim();

    const content = (
      <>
        {Icon && iconPosition === 'left' && <Icon className={iconSizes[size]} />}
        {children}
        {Icon && iconPosition === 'right' && <Icon className={iconSizes[size]} />}
      </>
    );

    if (href) {
      return (
        <a href={href} className={combinedClassName}>
          {content}
        </a>
      );
    }

    return (
      <button ref={ref} className={combinedClassName} {...props}>
        {content}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
