'use client';

import { useEffect, useMemo, useState } from 'react';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { CtaLink } from '@/components/ui/CTA';
import { ProjectCard } from '@/components/cards/ProjectCard';
import { Section } from '@/components/common/Section';
import { PROJECTS, PROJECT_FILTERS } from '@/data/projects';

export function ProjectGrid() {
  const [active, setActive] = useState('All work');

  const list = useMemo(
    () => (active === 'All work' ? PROJECTS : PROJECTS.filter((p) => p.category === active)),
    [active],
  );
  const isFiltered = active !== 'All work';

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      document
        .querySelectorAll<HTMLElement>('.projects__list .media-reveal')
        .forEach((el) => el.classList.add('is-in'));
    });

    return () => cancelAnimationFrame(frame);
  }, [list]);

  return (
    <Section id="work">
        <div className="projects__head">
          <div>
            <Eyebrow>Selected work</Eyebrow>
            <h2 className="projects__h">
              Houston remodeling projects,
              <br />
              built one home <em>at a time.</em>
            </h2>
          </div>
          <CtaLink variant="tertiary" href="#work" arrow={false}>
            Index — by year
          </CtaLink>
        </div>

        <div className="projects__filters">
          {PROJECT_FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              className={`tag ${active === f ? 'tag--ink' : ''}`}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="projects__list">
          {list.map((p) => (
            <ProjectCard key={p.index} project={p} compact={isFiltered} />
          ))}
          {list.length === 0 && (
            <div className="projects__empty">
              No projects under this filter. Try another.
            </div>
          )}
        </div>
    </Section>
  );
}
