import Link from 'next/link';
import { SITE } from '@/data/site';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div>
            <div className="footer__wm">NOVA</div>
            <p className="footer__motto">
              A residential remodeling company serving {SITE.serviceAreaDisplay}.
              <br />
              Kitchens, bathrooms, painting, drywall, flooring, whole-home work, and the smaller repairs in between.
            </p>
          </div>
          <div className="footer__col">
            <p className="footer__col-heading">Company</p>
            <ul>
              <li><Link href="/#approach">Approach</Link></li>
              <li><Link href="/#process">Process</Link></li>
              <li><Link href="/#craft">Craft</Link></li>
              <li><Link href="/blog">Journal</Link></li>
            </ul>
          </div>
          <div className="footer__col">
            <p className="footer__col-heading">Services</p>
            <ul>
              <li><Link href="/services/kitchen-remodeling">Kitchen Remodeling</Link></li>
              <li><Link href="/services/bathroom-remodeling">Bathroom Remodeling</Link></li>
              <li><Link href="/services/interior-painting">Interior Painting</Link></li>
              <li><Link href="/services/flooring">Flooring Installation</Link></li>
              <li><Link href="/handyman-services-houston">Handyman &amp; Home Repair</Link></li>
              <li><Link href="/drywall-repair-houston">Drywall Repair</Link></li>
              <li><Link href="/services">All Remodeling Services</Link></li>
            </ul>
          </div>
          <div className="footer__col">
            <p className="footer__col-heading">Contact</p>
            <ul>
              <li><a href={SITE.phoneHref}>{SITE.phoneDisplay}</a></li>
              <li><a href={SITE.emailHref}>{SITE.email}</a></li>
              <li><a href={SITE.url}>{SITE.displayWebsite}</a></li>
              <li>
                <Link href="/cities/houston">
                  {SITE.serviceAreaDisplay}
                </Link>
              </li>
              <li>{SITE.hoursDisplay}</li>
            </ul>
          </div>
        </div>
        <div className="footer__bot">
          <div>
            © 2009 — 2026 {SITE.legalName} · {SITE.serviceAreaDisplay} · Bonded &amp; insured · Website by{' '}
            <a href="https://vasquezwebstudio.com" target="_blank" rel="noopener noreferrer">
              Vasquez Web Studio
            </a>
          </div>
          <div className="social">
            <Link className="link" href="/services">Services</Link>
            <Link className="link" href="/cities">Areas</Link>
            <Link className="link" href="/blog">Journal</Link>
          </div>
        </div>
        <div className="footer__big-wm" aria-hidden="true">NOVA</div>
      </div>
    </footer>
  );
}
