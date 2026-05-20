import type { Metadata } from 'next';
import Link from 'next/link';
import { ResponsiveImage } from '@/components/common/ResponsiveImage';
import { SiteShell } from '@/components/layout/SiteShell';
import { PageHero } from '@/components/sections/PageHero';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { BLOG_POSTS } from '@/data/blog';
import { breadcrumbJsonLd, collectionPageJsonLd } from '@/lib/seo/json-ld';
import { createMetadata } from '@/lib/seo/metadata';
import { blogUrl } from '@/lib/seo/urls';

export const metadata: Metadata = createMetadata({
  title: 'Remodeling Guides for Houston Homeowners',
  description:
    'Premium remodeling guides from Nova Home Remodeling & Design covering Houston remodel costs, project timelines, materials, and planning decisions.',
  path: '/blog',
  image: BLOG_POSTS[0].image,
  imageAlt: BLOG_POSTS[0].imageAlt,
});

const breadcrumbs = [
  { name: 'Home', href: '/' },
  { name: 'Remodeling Guides', href: '/blog' },
];

export default function BlogIndexPage() {
  return (
    <SiteShell navLight>
      <JsonLd
        data={[
          breadcrumbJsonLd(breadcrumbs),
          collectionPageJsonLd({
            name: 'Remodeling Guides for Houston Homeowners',
            description:
              'Cost, timeline, material, and planning guides for Houston homeowners preparing for a remodel.',
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
          eyebrow="Remodeling Resource Hub"
          title="Remodeling Guides for Houston Homeowners"
          description="Clear, practical guides to help you understand remodeling costs, timelines, material choices, and planning decisions before work begins."
          image={BLOG_POSTS[0].image}
          imageAlt={BLOG_POSTS[0].imageAlt}
        />
        <Breadcrumbs items={breadcrumbs} />
        <section className="section blog-hub" aria-labelledby="blog-hub-title">
          <div className="container">
            <div className="blog-hub__intro">
              <p className="eyebrow eyebrow--gold">Guides by Nova</p>
              <h2 id="blog-hub-title">Plan with better numbers, clearer timelines, and fewer surprises.</h2>
              <p>
                These remodeling guides are built for Houston-area homeowners comparing project
                scope, finish levels, material performance, and the practical steps that shape a
                smoother renovation.
              </p>
            </div>
            <div className="blog-card-grid">
              {BLOG_POSTS.map((post) => (
                <article className="blog-card" key={post.slug}>
                  <Link href={blogUrl(post.slug)} className="blog-card__media" aria-label={post.title}>
                    <ResponsiveImage
                      src={post.image}
                      alt={post.imageAlt}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </Link>
                  <div className="blog-card__body">
                    <div className="blog-card__meta">
                      <span>{post.category}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h2>
                      <Link href={blogUrl(post.slug)}>{post.title}</Link>
                    </h2>
                    <p>{post.excerpt}</p>
                    <Link className="btn btn--tertiary" href={blogUrl(post.slug)}>
                      Read Guide
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="blog-hub-cta section section--dark" aria-labelledby="blog-hub-cta-title">
          <div className="container blog-hub-cta__inner">
            <div>
              <p className="eyebrow eyebrow--gold">Start with a walkthrough</p>
              <h2 id="blog-hub-cta-title">Ready to turn research into a real remodeling plan?</h2>
            </div>
            <div>
              <p>
                Tell us what you are considering, and we will help you understand the scope,
                sequence, and next decisions for your Houston home.
              </p>
              <Link className="btn btn--primary-on-dark" href="/contact">
                Contact Nova
              </Link>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
