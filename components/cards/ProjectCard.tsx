import { RichText } from '@/components/common/RichText';
import { ResponsiveImage } from '@/components/common/ResponsiveImage';
import type { Project } from '@/data/projects';
import { cn } from '@/lib/cn';

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const content = (
    <>
      <div className="project__media media-reveal">
        <ResponsiveImage
          src={project.img}
          alt={project.imageAlt}
          sizes="(max-width: 760px) 100vw, (max-width: 1200px) 50vw, 720px"
        />
        <span className="project__num">No. {project.index}</span>
        <span className="project__tag">{project.category}</span>
        <div className="project__overlay" />
        <div className="project__hover-caption">
          {project.location} · {project.year}
        </div>
      </div>
      <div className="project__meta">
        {project.location} · {project.year} · {project.sqft} sqft
      </div>
      <RichText as="h3" className="project__title" html={project.titleHtml} />
    </>
  );

  return (
    <article
      className={cn(
        'project',
        `project--${project.span ?? 'lg'}`,
        project.offset && 'project--offset',
        project.landscape && 'project--landscape',
        project.span === 'full' && 'project--wide',
      )}
    >
      {project.href ? <a href={project.href}>{content}</a> : content}
    </article>
  );
}
