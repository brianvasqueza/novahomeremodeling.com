import type { ReactNode } from 'react';
import { Footer } from './Footer';
import { Nav } from './Nav';
import { StickyMobileCTA } from './StickyMobileCTA';
import { AnimationsProvider } from '@/components/providers/AnimationsProvider';

type SiteShellProps = {
  children: ReactNode;
  navLight?: boolean;
};

export function SiteShell({ children, navLight = false }: SiteShellProps) {
  return (
    <>
      <Nav light={navLight} showProgress />
      {children}
      <Footer />
      <StickyMobileCTA />
      <AnimationsProvider />
    </>
  );
}
