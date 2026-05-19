import type { ReactNode } from 'react';
import { Eyebrow } from '@/components/ui/Eyebrow';

type SectionHeadingProps = {
  eyebrow: ReactNode;
  title: ReactNode;
  body?: ReactNode;
  classNames: {
    grid?: string;
    left?: string;
    right?: string;
    title: string;
    body?: string;
  };
  dark?: boolean;
  gold?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  body,
  classNames,
  dark = false,
  gold = false,
}: SectionHeadingProps) {
  return (
    <div className={classNames.grid}>
      <div className={classNames.left}>
        <Eyebrow dark={dark} gold={gold}>
          {eyebrow}
        </Eyebrow>
        <h2 className={classNames.title}>{title}</h2>
      </div>
      {body && (
        <div className={classNames.right}>
          <p className={classNames.body}>{body}</p>
        </div>
      )}
    </div>
  );
}
