import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import { Instrument_Serif } from 'next/font/google';
import { createMetadata } from '@/lib/seo/metadata';
import { organizationJsonLd, websiteJsonLd } from '@/lib/seo/json-ld';
import { JsonLd } from '@/components/seo/JsonLd';
import { MotionProvider } from '@/components/motion/MotionProvider';
import './globals.css';

const satoshi = localFont({
  src: [
    { path: './fonts/Satoshi-Variable.ttf', weight: '200 900', style: 'normal' },
    { path: './fonts/Satoshi-VariableItalic.ttf', weight: '200 900', style: 'italic' },
  ],
  variable: '--font-satoshi',
  display: 'swap',
});

const instrumentSerif = Instrument_Serif({
  weight: '400',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-instrument-serif',
  display: 'swap',
});

export const metadata: Metadata = createMetadata();
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#0E0E0C',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${satoshi.variable} ${instrumentSerif.variable}`}
    >
      <body>
        <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
        <MotionProvider>
          {children}
        </MotionProvider>
      </body>
    </html>
  );
}
