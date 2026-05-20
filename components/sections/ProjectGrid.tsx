'use client';

import { useState, useMemo } from 'react';
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

  return (
    <Section id="work">
        <div className="projects__head">
          <div>
            <Eyebrow>Selected work</Eyebrow>
            <h2 className="projects__h">
              127 homes remodeled,
              <br />
              sixteen years <em>in Houston.</em>
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
            <ProjectCard key={p.index} project={p} />
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
