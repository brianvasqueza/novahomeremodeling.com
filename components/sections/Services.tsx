import Link from 'next/link';
import { Section } from '@/components/common/Section';
import { SectionHeading } from '@/components/common/SectionHeading';
import { ServiceCard } from '@/components/cards/ServiceCard';
import { SERVICES_BENTO } from '@/data/services';

export function Services() {
  return (
    <Section id="services">
      <SectionHeading
        eyebrow="03 — Services"
        title={
          <>
            Remodeling, repairs,
            <br />
            and everything <em>in between.</em>
          </>
        }
        body="Kitchen and bathroom remodeling, painting, flooring, and whole-home renovations — plus the smaller handyman-style jobs that come up in between: drywall patches, door adjustments, trim and caulking, paint touch-ups, fence or gate repairs, and general punch-list work. One dedicated crew per project, from the first estimate to final walkthrough."
        classNames={{
          grid: 'services__head',
          left: 'services__head-l',
          right: 'services__head-r',
          title: 'services__h',
          body: 'services__lede',
        }}
      />
        <div className="services__bento">
          {SERVICES_BENTO.map((s) => (
            <ServiceCard key={s.num} service={s} href={s.href ?? `/services/${s.slug}`} />
          ))}
        </div>
        <nav className="services__seo-links" aria-label="Core Houston remodeling services">
          <Link href="/services/kitchen-remodeling">Kitchen remodeling in Houston</Link>
          <Link href="/services/bathroom-remodeling">Bathroom remodeling in Houston</Link>
          <Link href="/services/interior-painting">Interior painting in Houston</Link>
          <Link href="/services/exterior-painting">Exterior painting in Houston</Link>
          <Link href="/services/drywall-repair">Drywall repair in Houston</Link>
          <Link href="/services/flooring">Flooring installation in Houston</Link>
          <Link href="/handyman-services-houston">Handyman &amp; home repair services</Link>
          <Link href="/drywall-repair-houston">Drywall patch &amp; repair estimates</Link>
          <Link href="/small-home-repairs-one-visit">Small home repairs done in one visit</Link>
          <Link href="/drywall-repair-patch-replace-repaint">Drywall patch, replace, or repaint guide</Link>
        </nav>
    </Section>
  );
}
