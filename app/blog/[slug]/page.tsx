import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Fragment } from 'react';
import Link from 'next/link';
import { SiteShell } from '@/components/layout/SiteShell';
import { PageHero } from '@/components/sections/PageHero';
import { CTASection } from '@/components/sections/CTASection';
import { Contact } from '@/components/sections/Contact';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { ResponsiveImage } from '@/components/common/ResponsiveImage';
import {
  BLOG_POSTS,
  type BlogSection,
  type BlogCallout,
  type BlogRichText,
  type InlineCta,
  findPost,
  isPublishedBlogLink,
} from '@/data/blog';
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
  const isPublished = post.status !== 'draft' && Boolean(post.date);

  return createMetadata({
    title: post.seoTitle,
    description: post.metaDescription ?? post.excerpt,
    path: `/blog/${post.slug}`,
    authorName: post.author,
    category: post.category,
    image: post.image,
    imageWidth: post.imageWidth,
    imageHeight: post.imageHeight,
    imageAlt: post.imageAlt,
    type: 'article',
    publishedTime: post.date,
    modifiedTime: post.modified ?? post.date,
    noIndex: !isPublished,
  });
}

const CALLOUT_LABELS: Record<BlogCallout['type'], string> = {
  cost: 'Cost Note',
  timeline: 'Timeline',
  tip: 'Planning Tip',
  warning: 'Important',
};

function renderRichText(content: BlogRichText) {
  if (typeof content === 'string') return content;

  return content.map((segment, index) => {
    const child = segment.href ? (
      <Link href={segment.href}>{segment.text}</Link>
    ) : (
      segment.text
    );

    return (
      <Fragment key={`${segment.text}-${index}`}>
        {segment.strong ? <strong>{child}</strong> : child}
      </Fragment>
    );
  });
}

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
    <section className="article-section" id={section.id} key={`${section.heading}-${section.id ?? ''}`}>
      <Heading>{section.heading}</Heading>
      {section.body?.map((paragraph, index) => (
        <p key={index}>{renderRichText(paragraph)}</p>
      ))}
      {section.bullets && (
        <ul>
          {section.bullets.map((item, index) => (
            <li key={index}>{renderRichText(item)}</li>
          ))}
        </ul>
      )}
      {section.bodyAfterBullets?.map((paragraph, index) => (
        <p key={`after-${index}`}>{renderRichText(paragraph)}</p>
      ))}
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
        <figure
          className={`article-figure${section.image.aspect === 'portrait' ? ' article-figure--portrait' : ''}`}
        >
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
    { name: post.blogBreadcrumbLabel ?? 'Remodeling Journal', href: '/blog' },
    { name: post.currentBreadcrumbLabel ?? post.title, href: `/blog/${post.slug}` },
  ];
  const isPublished = post.status !== 'draft' && Boolean(post.date);
  const visibleInternalLinks = post.internalLinks.filter((link) => isPublishedBlogLink(link.href));

  const relatedLinks = (
    <section className="article-links" aria-labelledby="article-links-title">
      <h2 id="article-links-title">{post.relatedLinksHeading ?? 'Related Remodeling Resources'}</h2>
      <div className="article-links__grid">
        {visibleInternalLinks.map((link) => (
          <Link href={link.href} key={link.href}>
            {link.label}
          </Link>
        ))}
      </div>
    </section>
  );

  const articleCta = (
    <section className="article-cta">
      <p className="eyebrow eyebrow--gold">Next step</p>
      <h2>{post.cta.heading}</h2>
      <p>{renderRichText(post.cta.body)}</p>
      {post.cta.additionalBody?.map((paragraph, index) => (
        <p key={index}>{renderRichText(paragraph)}</p>
      ))}
      <Link className="btn btn--primary" href={post.cta.href}>
        {post.cta.label}
      </Link>
    </section>
  );

  return (
    <SiteShell navLight>
      <JsonLd
        data={[
          isPublished ? blogPostJsonLd(post) : null,
          isPublished ? blogFaqJsonLd(post) : null,
          breadcrumbJsonLd(breadcrumbs),
        ]}
      />
      <main>
        <PageHero
          eyebrow={post.date ? `${post.category} · ${post.date}` : post.category}
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
              {post.date && (
                <div className="article-aside__block">
                  <span>Published</span>
                  <strong>{post.date}</strong>
                </div>
              )}
              {post.topics.length > 0 && (
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
              )}
            </aside>
            <div className="article-content">
              <p className="article-byline">
                By {post.author}
                {post.date && (
                  <>
                    {' · '}
                    <time dateTime={post.date}>{post.date}</time>
                  </>
                )}
              </p>
              <div className="article-intro">
                {post.intro.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {post.quickAnswer && (
                <aside className="article-callout article-quick-answer" aria-label="Quick answer">
                  <span className="article-callout__label">Quick answer</span>
                  <p className="article-callout__text">{renderRichText(post.quickAnswer)}</p>
                </aside>
              )}
              {post.tableOfContents && (
                <nav className="article-toc" aria-label="On this page">
                  <span className="article-callout__label">On this page</span>
                  <ul>
                    {post.tableOfContents.map((item) => (
                      <li key={item.href}>
                        <Link href={item.href}>{item.label}</Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              )}
              {post.introCta && renderInlineCta(post.introCta)}
              {post.sections.map(renderSection)}
              <section className="article-section article-faq" id={post.faqId}>
                <h2>{post.faqHeading ?? 'Frequently Asked Questions'}</h2>
                {post.faqs.map((item) => (
                  <div className="article-faq__item" key={item.question}>
                    <h3>{item.question}</h3>
                    <p>{item.answer}</p>
                  </div>
                ))}
              </section>
              {post.relatedLinksAfterCta ? (
                <>
                  {articleCta}
                  {relatedLinks}
                </>
              ) : (
                <>
                  {relatedLinks}
                  {articleCta}
                </>
              )}
            </div>
          </div>
        </article>
        <CTASection />
        <Contact />
      </main>
    </SiteShell>
  );
}
