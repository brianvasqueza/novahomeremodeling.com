export type WorkImageAspect = 'standard' | 'wide';
export type WorkImageStatus = 'Completed' | 'In Progress' | 'Before';

export interface WorkImage {
  src: string;
  alt: string;
  caption: string;
  status: WorkImageStatus;
  aspect?: WorkImageAspect;
  objectPosition?: string;
  rotateLeft?: boolean;
}

export interface WorkVideo {
  src: string;
  poster: string;
  alt: string;
  caption: string;
  status: WorkImageStatus;
}

export interface WorkGroup {
  id: string;
  category: string;
  title: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
  cover: WorkImage;
  images: WorkImage[];
  comparison?: {
    title: string;
    beforeSrc: string;
    afterSrc: string;
  };
  video?: WorkVideo;
}

const REAL_WORK = '/gallery_realwork';

export const WORK_PAGE_TITLE = 'Real Remodeling & Home Repair Work in Houston';

export const WORK_HERO = {
  image: '/homepage/lotus-design-n-print-VgGD9EAV1HI-unsplash.jpg',
  imageAlt: 'Bright living room with a stone fireplace, hardwood floors, and large windows.',
} as const;

export const WORK_PAGE_DESCRIPTION =
  'See real Nova remodeling and home repair work in Houston, including bathroom updates, window installation, exterior repairs, deck railing, walkways, and carpentry.';

export const WORK_GROUPS: WorkGroup[] = [
  {
    id: 'windows-exterior',
    category: 'Windows & Exterior',
    title: 'Window Installation & Siding Repair',
    body:
      'Replacement windows installed with the surrounding siding and trim repair needed to properly finish each opening, shown on more than one visible side of the house.',
    ctaLabel: 'Need similar window or siding work?',
    ctaHref: '/services/window-installation',
    comparison: {
      title: 'Porch wall repair',
      beforeSrc: `${REAL_WORK}/porch-wall-opening-before-repair-1.jpg`,
      afterSrc: `${REAL_WORK}/porch-wall-siding-repair-after-2.jpg`,
    },
    cover: {
      src: `${REAL_WORK}/rear-house-window-door-installed-siding-repair.jpg`,
      alt: 'Rear exterior of a house after window and door installation with siding repair around the openings.',
      caption: 'Rear exterior - after',
      status: 'Completed',
      objectPosition: 'center top',
    },
    images: [
      {
        src: `${REAL_WORK}/front-house-window-installation-progress.jpg`,
        alt: 'Front exterior of a house with multiple upper window openings during installation work.',
        caption: 'Front exterior - windows going in',
        status: 'In Progress',
        aspect: 'wide',
        objectPosition: 'center',
      },
      {
        src: `${REAL_WORK}/front-house-window-install-siding-progress.jpg`,
        alt: 'Front of a two-story house showing upper window installation and siding repairs underway.',
        caption: 'Front exterior - siding repair',
        status: 'In Progress',
        aspect: 'wide',
        objectPosition: 'center',
      },
      {
        src: `${REAL_WORK}/porch-wall-opening-before-repair-1.jpg`,
        alt: 'Porch wall opening covered with plywood before exterior siding repair.',
        caption: 'Porch wall - before',
        status: 'Before',
        objectPosition: 'center',
        rotateLeft: true,
      },
      {
        src: `${REAL_WORK}/porch-wall-siding-repair-after-2.jpg`,
        alt: 'Porch wall and siding after exterior wall repair beside a railing.',
        caption: 'Porch wall - after',
        status: 'Completed',
        objectPosition: 'center',
        rotateLeft: true,
      },
    ],
    video: {
      src: `${REAL_WORK}/interior-framing-progress.mp4`,
      poster: `${REAL_WORK}/interior-framing-progress-poster.jpg`,
      alt: 'Interior wall framing with new window sashes staged nearby during a window installation.',
      caption: 'Framing - in progress',
      status: 'In Progress',
    },
  },
  {
    id: 'kitchen',
    category: 'Kitchen Cabinets & Sink',
    title: 'Kitchen Cabinet & Sink Installation',
    body:
      'New cabinet boxes, doors, and hardware installed alongside sink, faucet, and appliances in place - shown here from bare walls through to a finished kitchen area.',
    ctaLabel: 'Need cabinets or a kitchen refresh?',
    ctaHref: '/services/kitchen-remodeling',
    comparison: {
      title: 'From cabinet installation to a finished kitchen',
      beforeSrc: `${REAL_WORK}/kitchen-cabinet-installation-progress-a.jpg`,
      afterSrc: `${REAL_WORK}/kitchen-cabinet-appliance-installation.jpg`,
    },
    cover: {
      src: `${REAL_WORK}/kitchen-cabinet-appliance-installation.jpg`,
      alt: 'Kitchen with white cabinets, stainless appliances, tile floor, and finish work near completion.',
      caption: 'Finished kitchen',
      status: 'Completed',
      objectPosition: 'center',
    },
    images: [
      {
        src: `${REAL_WORK}/kitchen-cabinet-installation-progress-a.jpg`,
        alt: 'Kitchen remodel in progress with cabinet boxes, tools, and unfinished wall surfaces.',
        caption: 'Cabinet install - in progress',
        status: 'In Progress',
      },
      {
        src: `${REAL_WORK}/kitchen-cabinet-painting-progress.jpg`,
        alt: 'Kitchen cabinet painting and installation work in progress with unfinished lower cabinet area.',
        caption: 'Cabinet painting - in progress',
        status: 'In Progress',
      },
      {
        src: `${REAL_WORK}/kitchen-sink-cabinet-installation-progress.jpg`,
        alt: 'Kitchen sink and cabinet installation in progress before cabinet doors and finish cleanup.',
        caption: 'Sink install - in progress',
        status: 'In Progress',
      },
    ],
  },
  {
    id: 'bathroom',
    category: 'Bathroom Improvements',
    title: 'Bathroom Vanity, Fixture & Finish Work',
    body:
      'Bathroom improvements including vanity and fixture installation, tile work, and finishing details - the kind of focused update that modernizes a bathroom without a full gut renovation.',
    ctaLabel: 'Need a bathroom refresh like this?',
    ctaHref: '/services/bathroom-remodeling',
    cover: {
      src: `${REAL_WORK}/bathroom-vanity-fixture-installation.jpg`,
      alt: 'Bathroom vanity, faucet, mirror, light fixture, and toilet installed in a compact bathroom.',
      caption: 'Vanity & fixtures - after',
      status: 'Completed',
    },
    images: [
      {
        src: `${REAL_WORK}/bathroom-toilet-vanity-installation-after.jpg`,
        alt: 'Bathroom with installed toilet, gray vanity, tile floor, and marble-look shower wall.',
        caption: 'Toilet & tile - after',
        status: 'Completed',
      },
    ],
    video: {
      src: `${REAL_WORK}/bathroom-full-remodel-walkthrough.mp4`,
      poster: `${REAL_WORK}/bathroom-full-remodel-walkthrough-poster.jpg`,
      alt: 'Walkthrough video of a finished bathroom remodel showing the vanity, mirror, and fixtures.',
      caption: 'Full remodel - walkthrough',
      status: 'Completed',
    },
  },
  {
    id: 'walkway-gate',
    category: 'Walkway & Gate',
    title: 'Concrete Walkway & Gate Installation',
    body:
      'A concrete stepping-stone walkway with a gravel border, built from form and pour through to a finished path, plus a new wood gate at the fence line.',
    ctaLabel: 'Need a walkway, gate, or fence repair?',
    ctaHref: '/services/fence-installation',
    comparison: {
      title: 'Walkway installation',
      beforeSrc: `${REAL_WORK}/walkway-installation-progress.jpg`,
      afterSrc: `${REAL_WORK}/concrete-walkway-gravel-path-after.jpg`,
    },
    cover: {
      src: `${REAL_WORK}/exterior-walkway-gate-improvement.jpg`,
      alt: 'Concrete stepping-stone walkway with gravel leading to a newly built wood gate.',
      caption: 'Walkway & gate - after',
      status: 'Completed',
    },
    images: [
      {
        src: `${REAL_WORK}/concrete-walkway-gravel-path-after.jpg`,
        alt: 'Finished concrete stepping-stone walkway with dark gravel between a fence and brick wall.',
        caption: 'Finished walkway',
        status: 'Completed',
      },
      {
        src: `${REAL_WORK}/walkway-installation-progress.jpg`,
        alt: 'Walkway installation in progress with form boards, gravel, and concrete pads beside a fence.',
        caption: 'Walkway - in progress',
        status: 'In Progress',
      },
    ],
  },
  {
    id: 'deck-railing',
    category: 'Deck & Railing',
    title: 'Second-Story Deck Railing',
    body:
      'Railing framed and installed on an elevated deck, from rough framing to a finished wood rail fitted along the house exterior.',
    ctaLabel: 'Need a deck or railing built?',
    ctaHref: '/services/deck-construction',
    comparison: {
      title: 'From railing framing to the finished rail',
      beforeSrc: `${REAL_WORK}/second-story-deck-rail-framing-progress.jpg`,
      afterSrc: `${REAL_WORK}/deck-railing-construction.jpg`,
    },
    cover: {
      src: `${REAL_WORK}/deck-railing-construction.jpg`,
      alt: 'Newly installed wood railing on an elevated deck beside an exterior stair opening.',
      caption: 'Railing - after',
      status: 'Completed',
      objectPosition: 'center 20%',
    },
    images: [
      {
        src: `${REAL_WORK}/second-story-deck-rail-framing-progress.jpg`,
        alt: 'Second-story deck railing framing in progress above a covered outdoor area.',
        caption: 'Railing - framing',
        status: 'In Progress',
        aspect: 'wide',
        objectPosition: 'center',
      },
      {
        src: `${REAL_WORK}/deck-railing-framing-progress.jpg`,
        alt: 'Wood deck surface with railing framing underway and tools on the boards.',
        caption: 'Deck & rail - framing',
        status: 'In Progress',
      },
    ],
  },
  {
    id: 'exterior-structure',
    category: 'Exterior Structure',
    title: 'Small Exterior Structure - Siding, Caulking & Paint',
    body:
      'A small exterior structure re-sided, caulked, and painted, with visible trim, door, and roofline details on a standalone structure on the property.',
    ctaLabel: 'Need exterior painting or siding work?',
    ctaHref: '/services/exterior-painting',
    cover: {
      src: `${REAL_WORK}/custom-exterior-structure.jpg`,
      alt: 'Small exterior structure with fresh siding, white doors, and trim after caulking and painting.',
      caption: 'Exterior structure - after',
      status: 'Completed',
    },
    images: [
      {
        src: `${REAL_WORK}/small-exterior-structure-painting-after.jpg`,
        alt: 'Small painted exterior structure with double doors, trim, and light siding.',
        caption: 'Painted exterior - after',
        status: 'Completed',
      },
      {
        src: `${REAL_WORK}/small-exterior-structure-trim-paint-detail.jpg`,
        alt: 'Close view of painted trim and roofline detail on a small exterior structure.',
        caption: 'Trim detail',
        status: 'Completed',
      },
    ],
  },
];

export const WORK_CRAFTSMANSHIP = {
  image: {
    src: `${REAL_WORK}/custom-stair-framing.jpg`,
    alt: 'Newly framed wood stairs inside a construction space before finish materials are installed.',
  },
  kicker: 'Behind the Finish',
  body:
    "Framing and stair carpentry rarely get photographed because they're often covered by drywall, trim, and paint. We include this in-progress view because it shows the structure underneath finished rooms before the final surfaces go on.",
} as const;
