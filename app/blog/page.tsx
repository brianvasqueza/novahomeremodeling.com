import type { Metadata } from 'next';
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
  title: 'Remodeling Journal',
  description: 'Notes on remodeling process, materials, planning, and Houston homes.',
  path: '/blog',
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
          title="Remodeling notes"
          description="Process, materials, and planning notes from the studio."
          image="https://images.unsplash.com/photo-1503387837-b154d5074bd2?w=2400&q=85&auto=format&fit=crop"
          imageAlt="Carpentry and remodeling work surface for Nova remodeling journal notes."
        />
        <Breadcrumbs items={breadcrumbs} />
        <section className="section">
          <div className="container route-list">
            {BLOG_POSTS.map((post) => (
              <article className="route-card" key={post.slug}>
                <a href={blogUrl(post.slug)}>
                  <div className="route-card__meta">
                    {post.category} · {post.date}
                  </div>
                  <h2>{post.title}</h2>
                  <p>{post.excerpt}</p>
                </a>
              </article>
            ))}
          </div>
        </section>
        <Contact />
      </main>
    </SiteShell>
  );
}
