import { ComponentPropsWithRef } from 'react';

import { cn } from '@/lib/utils';

interface MarqueeProps extends ComponentPropsWithRef<'div'> {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children: React.ReactNode;
  repeat?: number;
  vertical?: boolean;
}

export const Marquee: React.FC<MarqueeProps> = ({
  className,
  reverse = false,
  pauseOnHover = true,
  children,
  repeat = 4,
  vertical = false,
  ...props
}) => {
  return (
    <div
      className={cn(
        'group flex [gap:var(--gap)] overflow-hidden p-2 [--duration:40s]',
        className
      )}
      {...props}
    >
      {Array(repeat)
        .fill(null)
        .map((_, i) => (
          <div
            key={i}
            className={cn('flex shrink-0 justify-around [gap:var(--gap)]', {
              'animate-marquee flex-row': !vertical,
              'animate-marquee-vertical flex-col': vertical,
              'group-hover:[animation-play-state:paused]': pauseOnHover,
              '[animation-direction-reverse]': reverse,
            })}
          >
            {children}
          </div>
        ))}
    </div>
  );
};

<div className='parent'>
  <div className='child'></div>
</div>;
