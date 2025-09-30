'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../../lib/utils';

const progressVariants = cva('relative h-1 w-full overflow-hidden bg-[#F5F5F5]', {
  variants: {
    size: {
      sm: 'h-1',
      default: 'h-1',
      lg: 'h-1',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

const progressBarVariants = cva(
  'h-full w-full flex-1 bg-[#F59F0A] transition-all duration-300 ease-in-out',
  {
    variants: {
      variant: {
        default: '#F59F0A',
        success: 'bg-green-500',
        warning: 'bg-yellow-500',
        danger: 'bg-red-500',
        info: 'bg-blue-500',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export interface ProgressProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof progressVariants>,
    VariantProps<typeof progressBarVariants> {
  value?: number;
  max?: number;
  showValue?: boolean;
  animated?: boolean;
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  (
    {
      className,
      value = 0,
      max = 100,
      size,
      variant,
      showValue = false,
      animated = false,
      ...props
    },
    ref,
  ) => {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

    return (
      <div className="w-full space-y-2">
        {showValue && (
          <div className="text-muted-foreground flex justify-between text-sm">
            <span>{Math.round(percentage)}% Success</span>
            <span>
              {value}/{max}
            </span>
          </div>
        )}
        <div
          ref={ref}
          className={cn(progressVariants({ size, className }))}
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={max}
          aria-valuenow={value}
          {...props}
        >
          <div
            className={cn(progressBarVariants({ variant }), animated && 'animate-pulse')}
            style={{
              transform: `translateX(-${100 - percentage}%)`,
            }}
          />
        </div>
      </div>
    );
  },
);

Progress.displayName = 'Progress';

export { Progress, progressBarVariants, progressVariants };
