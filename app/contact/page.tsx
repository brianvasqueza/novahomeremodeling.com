import type { Metadata } from 'next';
import { SiteShell } from '@/components/layout/SiteShell';
import { PageHero } from '@/components/sections/PageHero';
import { Contact } from '@/components/sections/Contact';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbJsonLd } from '@/lib/seo/json-ld';
import { createMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = createMetadata({
  title: 'Contact Nova Home Remodeling & Design',
  description:
    'Contact Nova Home Remodeling & Design for Houston kitchen, bathroom, flooring, painting, and whole-home remodeling consultations.',
  path: '/contact',
  image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=2000&q=82&auto=format&fit=crop',
  imageAlt: 'Warm remodeled Houston home interior with kitchen and living space.',
});

const breadcrumbs = [
  { name: 'Home', href: '/' },
  { name: 'Contact', href: '/contact' },
];

export default function ContactPage() {
  return (
    <SiteShell navLight>
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <main>
        <PageHero
          eyebrow="Contact"
          title="Start a Remodeling Conversation"
          description="Tell us what you are planning, where the home is located, and what decisions you are trying to make next."
          image="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=2000&q=82&auto=format&fit=crop"
          imageAlt="Warm remodeled Houston home interior with kitchen and living space."
        />
        <Breadcrumbs items={breadcrumbs} />
        <Contact />
      </main>
    </SiteShell>
  );
}
