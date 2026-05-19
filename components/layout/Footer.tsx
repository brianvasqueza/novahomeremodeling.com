import Link from 'next/link';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div>
            <div className="footer__wm">NOVA</div>
            <p className="footer__motto">
              A residential remodeling company in Houston, TX.
              <br />
              Whole‑home renovations, additions, kitchen &amp; bath.
            </p>
          </div>
          <div className="footer__col">
            <h2 className="footer__col-heading">Company</h2>
            <ul>
              <li><Link href="/#approach">Approach</Link></li>
              <li><Link href="/#process">Process</Link></li>
              <li><Link href="/#craft">Craft</Link></li>
              <li><Link href="/blog">Journal</Link></li>
            </ul>
          </div>
          <div className="footer__col">
            <h2 className="footer__col-heading">Explore</h2>
            <ul>
              <li><Link href="/#work">Selected projects</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/cities">Service areas</Link></li>
              <li><Link href="/services/home-renovations">Whole-home renovations</Link></li>
            </ul>
          </div>
          <div className="footer__col">
            <h2 className="footer__col-heading">Contact</h2>
            <ul>
              <li><a href="mailto:studio@novahomeremodeling.com">studio@novahomeremodeling.com</a></li>
              <li><a href="tel:+17135550142">+1 (713) 555 0142</a></li>
              <li>
                <Link href="/cities/houston">
                  Houston, TX
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__bot">
          <div>© 2009 — 2026 Nova Home Remodeling &amp; Design · License TDLR‑RM42839 · Bonded &amp; insured</div>
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
