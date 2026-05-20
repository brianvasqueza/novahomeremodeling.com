import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteShell } from '@/components/layout/SiteShell';
import { PageHero } from '@/components/sections/PageHero';
import { Contact } from '@/components/sections/Contact';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { BLOG_POSTS } from '@/data/blog';
import { breadcrumbJsonLd, collectionPageJsonLd } from '@/lib/seo/json-ld';
import { createMetadata } from '@/lib/seo/metadata';
import { blogUrl } from '@/lib/seo/urls';

export const metadata: Metadata = createMetadata({
  title: 'Houston Remodeling Journal',
  description:
    'Practical notes from Nova Home Remodeling & Design on Houston remodeling, planning, materials, budgets, permitting, and durable home finishes.',
  path: '/blog',
  image: 'https://images.unsplash.com/photo-1503387837-b154d5074bd2?w=2000&q=82&auto=format&fit=crop',
  imageAlt: 'Carpentry work surface with drawings and tools for Houston remodeling journal articles.',
});

const breadcrumbs = [
  { name: 'Home', href: '/' },
  { name: 'Remodeling Journal', href: '/blog' },
];

export default function BlogIndexPage() {
  return (
    <SiteShell navLight>
      <JsonLd
        data={[
          breadcrumbJsonLd(breadcrumbs),
          collectionPageJsonLd({
            name: 'Remodeling Journal',
            description: 'Notes on remodeling process, materials, planning, and Houston homes.',
            path: '/blog',
            items: BLOG_POSTS.map((post) => ({
              name: post.title,
              href: blogUrl(post.slug),
            })),
          }),
        ]}
      />
      <main>
        <PageHero
          eyebrow="Journal"
          title="Houston Remodeling Journal"
          description="Process, materials, budgeting, and planning notes for Houston homeowners preparing for a remodel."
          image="https://images.unsplash.com/photo-1503387837-b154d5074bd2?w=2000&q=82&auto=format&fit=crop"
          imageAlt="Carpentry work surface with drawings and tools for Houston remodeling journal articles."
        />
        <Breadcrumbs items={breadcrumbs} />
        <section className="section">
          <div className="container route-list">
            {BLOG_POSTS.map((post) => (
              <article className="route-card" key={post.slug}>
                <Link href={blogUrl(post.slug)}>
                  <div className="route-card__meta">
                    {post.category} · {post.date}
                  </div>
                  <h2>{post.title}</h2>
                  <p>{post.excerpt}</p>
                </Link>
              </article>
            ))}
          </div>
        </section>
        <Contact />
      </main>
    </SiteShell>
  );
}
