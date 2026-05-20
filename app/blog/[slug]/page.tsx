import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteShell } from '@/components/layout/SiteShell';
import { PageHero } from '@/components/sections/PageHero';
import { CTASection } from '@/components/sections/CTASection';
import { Contact } from '@/components/sections/Contact';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { ResponsiveImage } from '@/components/common/ResponsiveImage';
import { BLOG_POSTS, type BlogSection, type BlogCallout, type InlineCta, findPost } from '@/data/blog';
import { blogFaqJsonLd, blogPostJsonLd, breadcrumbJsonLd } from '@/lib/seo/json-ld';
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
    title: post.seoTitle,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    image: post.image,
    imageAlt: post.imageAlt,
    type: 'article',
    publishedTime: post.date,
    modifiedTime: post.modified ?? post.date,
  });
}

const CALLOUT_LABELS: Record<BlogCallout['type'], string> = {
  cost: 'Cost Note',
  timeline: 'Timeline',
  tip: 'Planning Tip',
  warning: 'Important',
};

function renderInlineCta(cta: InlineCta) {
  return (
    <div className="article-inline-cta">
      <p className="article-inline-cta__body">{cta.body}</p>
      <Link className="btn btn--tertiary" href={cta.href}>
        {cta.label}
      </Link>
    </div>
  );
}

function renderSection(section: BlogSection) {
  const Heading = section.level === 3 ? 'h3' : 'h2';

  return (
    <section className="article-section" key={section.heading}>
      <Heading>{section.heading}</Heading>
      {section.body?.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      {section.bullets && (
        <ul>
          {section.bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
      {section.table && (
        <div className="article-table-wrap">
          <table className="article-table">
            <thead>
              <tr>
                {section.table.headers.map((header) => (
                  <th key={header}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.table.rows.map((row) => (
                <tr key={row.join('|')}>
                  {row.map((cell) => (
                    <td key={cell}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {section.callout && (
        <div className={`article-callout article-callout--${section.callout.type}`}>
          <span className="article-callout__label">{CALLOUT_LABELS[section.callout.type]}</span>
          <p className="article-callout__text">{section.callout.text}</p>
        </div>
      )}
      {section.image && (
        <figure className="article-figure">
          <ResponsiveImage
            src={section.image.src}
            alt={section.image.alt}
            sizes="(max-width: 768px) 100vw, (max-width: 1100px) 80vw, 860px"
          />
        </figure>
      )}
      {section.inlineCta && renderInlineCta(section.inlineCta)}
    </section>
  );
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
      <JsonLd data={[blogPostJsonLd(post), blogFaqJsonLd(post), breadcrumbJsonLd(breadcrumbs)]} />
      <main>
        <PageHero
          eyebrow={`${post.category} · ${post.date}`}
          title={post.title}
          description={post.excerpt}
          image={post.image}
          imageAlt={post.imageAlt}
          ctaLabel={post.cta.label}
          ctaHref={post.cta.href}
        />
        <Breadcrumbs items={breadcrumbs} />
        <article className="section article-shell">
          <div className="container article-layout">
            <aside className="article-aside" aria-label="Article details">
              <div className="article-aside__block">
                <span>Topic</span>
                <strong>{post.category}</strong>
              </div>
              <div className="article-aside__block">
                <span>Published</span>
                <strong>{post.date}</strong>
              </div>
              <div className="article-aside__block">
                <span>In this guide</span>
                <div className="article-tags">
                  {post.topics.map((topic) => (
                    <span className="tag" key={topic}>
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </aside>
            <div className="article-content">
              <div className="article-intro">
                {post.intro.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {post.introCta && renderInlineCta(post.introCta)}
              {post.sections.map(renderSection)}
              <section className="article-section article-faq">
                <h2>Frequently Asked Questions</h2>
                {post.faqs.map((item) => (
                  <div className="article-faq__item" key={item.question}>
                    <h3>{item.question}</h3>
                    <p>{item.answer}</p>
                  </div>
                ))}
              </section>
              <section className="article-links" aria-labelledby="article-links-title">
                <h2 id="article-links-title">Related Remodeling Resources</h2>
                <div className="article-links__grid">
                  {post.internalLinks.map((link) => (
                    <Link href={link.href} key={link.href}>
                      {link.label}
                    </Link>
                  ))}
                </div>
              </section>
              <section className="article-cta">
                <p className="eyebrow eyebrow--gold">Next step</p>
                <h2>{post.cta.heading}</h2>
                <p>{post.cta.body}</p>
                <Link className="btn btn--primary" href={post.cta.href}>
                  {post.cta.label}
                </Link>
              </section>
            </div>
          </div>
        </article>
        <CTASection />
        <Contact />
      </main>
    </SiteShell>
  );
}
