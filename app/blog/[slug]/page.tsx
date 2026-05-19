import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { SiteShell } from '@/components/layout/SiteShell';
import { PageHero } from '@/components/sections/PageHero';
import { CTASection } from '@/components/sections/CTASection';
import { Contact } from '@/components/sections/Contact';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { BLOG_POSTS, findPost } from '@/data/blog';
import { blogPostJsonLd, breadcrumbJsonLd } from '@/lib/seo/json-ld';
import { createMetadata } from '@/lib/seo/metadata';

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return BLOG_POSTS.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = findPost(slug);
  if (!post) return createMetadata({ title: 'Post not found', noIndex: true });

  return createMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    image: post.image,
    type: 'article',
    publishedTime: post.date,
    modifiedTime: post.modified ?? post.date,
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = findPost(slug);
  if (!post) notFound();
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Remodeling Journal', href: '/blog' },
    { name: post.title, href: `/blog/${post.slug}` },
  ];

  return (
    <SiteShell navLight>
      <JsonLd data={[blogPostJsonLd(post), breadcrumbJsonLd(breadcrumbs)]} />
      <main>
        <PageHero
          eyebrow={`${post.category} · ${post.date}`}
          title={post.title}
          description={post.excerpt}
          image={post.image}
          imageAlt={`${post.title} — remodeling journal image from Nova Home Remodeling & Design.`}
        />
        <Breadcrumbs items={breadcrumbs} />
        <article className="section article-shell">
          <div className="container">
            <p>
              This journal entry is intentionally data-backed and ready for CMS content. The page
              structure, metadata, route generation, and visual system are already in place for a
              richer editorial body.
            </p>
          </div>
        </article>
        <CTASection />
        <Contact />
      </main>
    </SiteShell>
  );
}
