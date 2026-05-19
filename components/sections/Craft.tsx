import { CraftCard } from '@/components/cards/CraftCard';
import { Section } from '@/components/common/Section';
import { SectionHeading } from '@/components/common/SectionHeading';
import { CRAFT } from '@/data/content';

export function Craft() {
  return (
    <Section id="craft" className="section--alt">
      <SectionHeading
        eyebrow="08 — Materials"
        title={
          <>
            A short list of <em>materials</em> we trust.
          </>
        }
        body="We work from a deliberately narrow palette — six materials, six finishes, two metals. The discipline is in the restraint. The result is a house that ages well."
        classNames={{
          grid: 'craft__head',
          left: 'craft__head-l',
          right: 'craft__head-r',
          title: 'craft__h',
          body: 'craft__lede',
        }}
      />

        <div className="craft__grid">
          {CRAFT.map((c) => (
            <CraftCard key={c.n} item={c} />
          ))}
        </div>
    </Section>
  );
}
