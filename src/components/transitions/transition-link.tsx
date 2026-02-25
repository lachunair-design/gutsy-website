'use client';

import { ComponentPropsWithoutRef, MouseEvent } from 'react';
import { usePageTransition } from './transition-context';

type TransitionLinkProps = ComponentPropsWithoutRef<'a'> & {
  href: string;
};

/**
 * Drop-in replacement for Next.js <Link> that plays the GSAP curtain
 * page-transition before navigating. Falls back to a normal anchor for:
 * - Hash-only links (#section)
 * - External URLs
 * - Cmd/Ctrl/middle-click (new-tab intent)
 */
export function TransitionLink({ href, children, onClick, className, ...props }: TransitionLinkProps) {
  const { navigateTo } = usePageTransition();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    // Let modifier-key clicks open in a new tab as normal
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;

    // Skip hash-only anchors (same-page jumps)
    if (href.startsWith('#')) return;

    // Skip external links
    if (href.startsWith('http') || href.startsWith('//')) return;

    e.preventDefault();
    onClick?.(e);
    navigateTo(href);
  };

  return (
    <a href={href} onClick={handleClick} className={className} {...props}>
      {children}
    </a>
  );
}
