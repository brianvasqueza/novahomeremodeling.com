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

type BlogIndexCard = {
  slug: string;
  href: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  image: string;
  imageAlt: string;
};

const REPAIR_GUIDES: BlogIndexCard[] = [
  {
    slug: 'small-home-repairs-one-visit',
    href: '/small-home-repairs-one-visit',
    title: 'Small Home Repairs You Can Get Done in One Visit',
    excerpt:
      'Drywall patches, sticky doors, trim repair, caulking, paint touch-ups, and other small home repairs that can often be handled in one visit.',
    category: 'Maintenance',
    readTime: '6 min read',
    image: '/drywall/charlesdeluvio-DH-FZZ7kM5c-unsplash.jpg',
    imageAlt: 'Small drywall and wall repair work representing one-visit home repairs for Houston homeowners.',
  },
  {
    slug: 'drywall-repair-patch-replace-repaint',
    href: '/drywall-repair-patch-replace-repaint',
    title: 'Drywall Repair: When to Patch, Replace, or Repaint',
    excerpt:
      'Not all drywall damage needs the same fix. Learn when to patch, when to replace drywall, and when repainting is enough after wall damage.',
    category: 'Maintenance',
    readTime: '7 min read',
    image: '/drywall/h-co-3coKbdfnAFg-unsplash.jpg',
    imageAlt: 'Smooth interior drywall repair area ready for primer and repainting.',
  },
];

const blogCards: BlogIndexCard[] = [
  ...BLOG_POSTS.map((post) => ({
    slug: post.slug,
    href: blogUrl(post.slug),
    title: post.title,
    excerpt: post.excerpt,
    category: post.category,
    readTime: post.readTime,
    image: post.image,
    imageAlt: post.imageAlt,
  })),
  ...REPAIR_GUIDES,
];

export const metadata: Metadata = createMetadata({
  title: 'Remodeling & Home Repair Guides for Houston Homeowners',
  description:
    'Remodeling and home repair guides from Nova Home Remodeling & Design covering Houston remodel costs, project timelines, drywall repair, small repairs, materials, and planning decisions.',
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
            name: 'Remodeling & Home Repair Guides for Houston Homeowners',
            description:
              'Cost, timeline, repair, material, and planning guides for Houston homeowners preparing for remodels and home repairs.',
            path: '/blog',
            items: blogCards.map((post) => ({
              name: post.title,
              href: post.href,
            })),
          }),
        ]}
      />
      <main>
        <PageHero
          eyebrow="Remodeling Resource Hub"
          title="Remodeling & Home Repair Guides for Houston Homeowners"
          description="Clear, practical guides to help you understand remodeling costs, repair decisions, timelines, material choices, and planning decisions before work begins."
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
                scope, repair options, finish levels, material performance, and the practical steps
                that shape smoother home projects.
              </p>
            </div>
            <div className="blog-card-grid">
              {blogCards.map((post) => (
                <article className="blog-card" key={post.slug}>
                  <Link href={post.href} className="blog-card__media" aria-label={post.title}>
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
                      <Link href={post.href}>{post.title}</Link>
                    </h2>
                    <p>{post.excerpt}</p>
                    <Link className="btn btn--tertiary" href={post.href}>
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
