'use client';

import { useEffect, useMemo, useState } from 'react';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { ProjectCard } from '@/components/cards/ProjectCard';
import { Section } from '@/components/common/Section';
import { PROJECTS, PROJECT_FILTERS } from '@/data/projects';

export function ProjectGrid() {
  const [active, setActive] = useState('All Inspiration');

  const list = useMemo(
    () => (active === 'All Inspiration' ? PROJECTS : PROJECTS.filter((p) => p.category === active)),
    [active],
  );
  const isFiltered = active !== 'All Inspiration';

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
            <Eyebrow>Project Inspiration</Eyebrow>
            <h2 className="projects__h">
              What&apos;s possible for <em>your home.</em>
            </h2>
            <p className="projects__lede">
              A collection of remodeling styles, finishes, and project ideas that reflect the type of spaces we help homeowners create throughout Houston.
            </p>
          </div>
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

        <p className="projects__note">
          Representative examples shown for inspiration. Project photography from completed Nova renovations is being added as new projects are completed.
        </p>
    </Section>
  );
}
