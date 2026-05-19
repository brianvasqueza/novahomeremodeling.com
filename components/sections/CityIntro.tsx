import { Eyebrow } from '@/components/ui/Eyebrow';
import type { CityPageData } from '@/data/cities';

type CityIntroProps = {
  city: CityPageData;
};

export function CityIntro({ city }: CityIntroProps) {
  return (
    <section className="section" id="intro">
      <div className="container city-intro__grid">
        <div className="city-intro__left">
          <div className="city-intro__eyebrow-wrap">
            <Eyebrow>{city.distance === 'Home base' ? 'Home base' : `Service area — ${city.distance}`}</Eyebrow>
          </div>
          <p className="city-intro__character">{city.character}</p>
          <div className="city-intro__body reveal">
            {city.intro.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>

        <aside className="city-intro__aside reveal">
          <div className="city-intro__aside-title">Area profile</div>
          <dl className="city-intro__facts">
            {city.asideFacts.map(({ label, value }) => (
              <div key={label} className="city-intro__fact">
                <dt className="city-intro__fact-label">{label}</dt>
                <dd className="city-intro__fact-value">{value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </section>
  );
}
