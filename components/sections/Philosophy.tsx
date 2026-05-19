import { Eyebrow } from '@/components/ui/Eyebrow';

export function Philosophy() {
  return (
    <section className="section section--dark" id="philosophy">
      <div className="container philo__grid">
        <div className="philo__l">
          <Eyebrow dark gold>02 — Philosophy</Eyebrow>
          <h2 className="philo__h">
            Five things we <em>will not</em> compromise on.
          </h2>
        </div>
        <div className="philo__r">
          <ul className="philo__principles">
            <li>
              <div className="n">I</div>
              <div>
                <h3>
                  One project, <em>one crew.</em>
                </h3>
                <p>
                  The same crew from demolition to the day we hand you the keys. No revolving
                  subcontractors, no unfamiliar faces six months into your home.
                </p>
              </div>
            </li>
            <li>
              <div className="n">II</div>
              <div>
                <h3>Drawn before built.</h3>
                <p>
                  Every cabinet, every joint, every seam appears on a shop drawing before any saw is
                  turned on. Surprises are for theater, not for homes.
                </p>
              </div>
            </li>
            <li>
              <div className="n">III</div>
              <div>
                <h3>Six to eight homes a year.</h3>
                <p>
                  We refuse the rest. The studio&apos;s calendar is the only constraint we will not bend,
                  regardless of the project&apos;s size.
                </p>
              </div>
            </li>
            <li>
              <div className="n">IV</div>
              <div>
                <h3>
                  The bill is the <em>estimate.</em>
                </h3>
                <p>
                  Fixed‑fee feasibility. Open‑book construction. No surprise change orders past
                  month four — we eat any miscount that&apos;s ours.
                </p>
              </div>
            </li>
            <li>
              <div className="n">V</div>
              <div>
                <h3>We sign our work.</h3>
                <p>
                  Initials and date, in ink, on the inside of a drawer face. You have our number for
                  the rest of the house&apos;s life.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
