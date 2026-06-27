import type { SVGProps } from 'react';

const s: SVGProps<SVGSVGElement> = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.25,
  strokeLinecap: 'square' as const,
};

type Dir = 'right' | 'down' | 'left' | 'up';

export const IconArrow = ({ size = 14, dir = 'right' }: { size?: number; dir?: Dir }) => {
  const deg: Record<Dir, number> = { right: 0, down: 90, left: 180, up: 270 };
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.25}
      strokeLinecap="square"
      style={{ transform: `rotate(${deg[dir]}deg)` }}
    >
      <line x1="4" y1="12" x2="20" y2="12" />
      <polyline points="14,6 20,12 14,18" />
    </svg>
  );
};

export const IconPlus = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...s}>
    <line x1="12" y1="4" x2="12" y2="20" />
    <line x1="4" y1="12" x2="20" y2="12" />
  </svg>
);

export const IconMark = ({ size = 22 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...s}>
    <rect x="3" y="3" width="18" height="18" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="12" y1="3" x2="12" y2="21" />
  </svg>
);

export type SvcIconType =
  | 'kitchen'
  | 'bath'
  | 'paint'
  | 'floor'
  | 'cabinet'
  | 'trim'
  | 'door'
  | 'deck'
  | 'repair'
  | 'wall';

export const SvcIcon = ({ type }: { type: SvcIconType }) => {
  const p: SVGProps<SVGSVGElement> = { width: 18, height: 18, viewBox: '0 0 24 24', ...s };
  switch (type) {
    case 'kitchen':
      return (
        <svg {...p}>
          <rect x="3" y="8" width="18" height="12" rx="1" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <circle cx="7" cy="5" r="1.5" />
          <circle cx="12" cy="5" r="1.5" />
        </svg>
      );
    case 'bath':
      return (
        <svg {...p}>
          <path d="M4 16h16v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2z" />
          <path d="M4 16V8a2 2 0 012-2h2v10" />
          <line x1="2" y1="16" x2="22" y2="16" />
        </svg>
      );
    case 'paint':
      return (
        <svg {...p}>
          <path d="M3 17c0-1.1.9-2 2-2h14" />
          <path d="M7 15V5l10 5-10 5z" />
        </svg>
      );
    case 'floor':
      return (
        <svg {...p}>
          <rect x="3" y="3" width="8" height="8" />
          <rect x="13" y="3" width="8" height="8" />
          <rect x="3" y="13" width="8" height="8" />
          <rect x="13" y="13" width="8" height="8" />
        </svg>
      );
    case 'cabinet':
      return (
        <svg {...p}>
          <rect x="3" y="3" width="18" height="18" rx="1" />
          <line x1="12" y1="3" x2="12" y2="21" />
          <line x1="3" y1="12" x2="12" y2="12" />
          <circle cx="10" cy="7.5" r="0.8" fill="currentColor" stroke="none" />
          <circle cx="10" cy="16.5" r="0.8" fill="currentColor" stroke="none" />
        </svg>
      );
    case 'trim':
      return (
        <svg {...p}>
          <path d="M3 21V5a2 2 0 012-2h14a2 2 0 012 2v16" />
          <path d="M6 21V8h12v13" />
        </svg>
      );
    case 'door':
      return (
        <svg {...p}>
          <rect x="4" y="2" width="16" height="20" rx="1" />
          <circle cx="15.5" cy="12" r="0.8" fill="currentColor" stroke="none" />
        </svg>
      );
    case 'deck':
      return (
        <svg {...p}>
          <line x1="3" y1="18" x2="21" y2="18" />
          <line x1="6" y1="18" x2="6" y2="10" />
          <line x1="12" y1="18" x2="12" y2="10" />
          <line x1="18" y1="18" x2="18" y2="10" />
          <path d="M3 10h18" />
        </svg>
      );
    case 'repair':
      return (
        <svg {...p}>
          <path d="M14.5 3.5a4 4 0 00-5.4 5.4L3 15v4a2 2 0 002 2h4l6.1-6.1a4 4 0 005.4-5.4l-3.1 3.1-2.4-.6-.6-2.4 3.1-3.1z" />
        </svg>
      );
    case 'wall':
      return (
        <svg {...p}>
          <rect x="3" y="3" width="18" height="18" rx="1" />
          <rect x="8.5" y="8.5" width="7" height="7" />
        </svg>
      );
    default:
      return null;
  }
};
