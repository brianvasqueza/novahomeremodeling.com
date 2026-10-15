export type WorkImageAspect = 'standard' | 'wide' | 'portrait';
export type WorkImageStatus = 'Completed' | 'In Progress' | 'Before';

export interface WorkImage {
  src: string;
  alt: string;
  caption: string;
  status: WorkImageStatus;
  aspect?: WorkImageAspect;
  aspectRatio?: string;
  objectPosition?: string;
  rotateLeft?: boolean;
}

export interface WorkVideo {
  src: string;
  poster: string;
  alt: string;
  caption: string;
  description?: string;
  status: WorkImageStatus;
}

export interface WorkGroup {
  id: string;
  category: string;
  title: string;
  body: string;
  note?: string;
  photoLayout?: 'portrait-pair';
  ctaLabel: string;
  ctaHref: string;
  cover: WorkImage;
  images: WorkImage[];
  comparison?: {
    title: string;
    beforeSrc: string;
    afterSrc: string;
    additionalAfterSrcs?: string[];
    layout?: 'before-above';
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
    id: 'kitchen',
    category: 'Kitchen Improvements',
    title: 'Cabinet Installation, Painting, Finishing & Appliance Installation',
    body:
      'Cabinet installation, painting, finish details, and appliance installation in the same kitchen, from bare cabinet boxes to painted cabinets with hardware and stainless appliances in place.',
    ctaLabel: 'Need cabinets or a kitchen refresh?',
    ctaHref: '/services/kitchen-remodeling',
    comparison: {
      title: 'Kitchen cabinet and appliance installation',
      beforeSrc: `${REAL_WORK}/kitchen-cabinet-installation-progress-a.jpg`,
      afterSrc: `${REAL_WORK}/kitchen-cabinet-appliance-installation.jpg`,
    },
    cover: {
      src: `${REAL_WORK}/kitchen-cabinet-appliance-installation.jpg`,
      alt: 'Kitchen with white cabinets, stainless appliances, tile floor, and finish work near completion.',
      caption: 'Kitchen cabinets & appliances - after',
      status: 'Completed',
      objectPosition: 'center',
    },
    images: [
      {
        src: `${REAL_WORK}/kitchen-cabinet-installation-progress-a.jpg`,
        alt: 'Kitchen remodel in progress with cabinet boxes, tools, and unfinished wall surfaces.',
        caption: 'Kitchen cabinets - before',
        status: 'Before',
      },
    ],
  },
  {
    id: 'kitchen-sink-cabinets',
    category: 'Same Kitchen — Sink Area',
    title: 'Kitchen Cabinet & Sink Installation',
    body:
      'Another view of the same kitchen, from bare cabinet boxes and unfinished walls to painted cabinets, installed hardware, a countertop, tile backsplash, sink, and faucet.',
    ctaLabel: 'Need cabinets or a kitchen refresh?',
    ctaHref: '/services/kitchen-remodeling',
    comparison: {
      title: 'Same kitchen — sink-side cabinets',
      beforeSrc: `${REAL_WORK}/kitchenremode and cabinet installation progress B 2.JPG`,
      afterSrc: `${REAL_WORK}/kitchen remodel and cabinet installtion B finshed.JPG`,
    },
    cover: {
      src: `${REAL_WORK}/kitchen remodel and cabinet installtion B finshed.JPG`,
      alt: 'Sink area of the same kitchen after installation of painted white cabinets, hardware, a countertop, tile backsplash, sink, and faucet.',
      caption: 'Sink-side cabinets - after',
      status: 'Completed',
    },
    images: [
      {
        src: `${REAL_WORK}/kitchenremode and cabinet installation progress B 2.JPG`,
        alt: 'Sink-side kitchen cabinet boxes with tools and unfinished wall surfaces before cabinet doors, countertop, and sink are installed.',
        caption: 'Sink-side cabinets - before',
        status: 'Before',
      },
    ],
  },
  {
    id: 'bathroom',
    category: 'Bathroom Remodeling',
    title: 'Bathroom Expansion & Shower Installation',
    photoLayout: 'portrait-pair',
    body:
      'We expanded a small room that originally had only a toilet and vanity to make space for a shower. The remodel included shower installation, plumbing and electrical work, a new vanity with plumbing connections, a toilet, mirror, and light fixture, plus floor and shower tile. Drywall texture, caulking, and painting completed the finishes.',
    ctaLabel: 'Planning a bathroom expansion or remodel?',
    ctaHref: '/services/bathroom-remodeling',
    cover: {
      src: `${REAL_WORK}/bathroom-vanity-fixture-installation.jpg`,
      alt: 'Bathroom vanity, faucet, mirror, light fixture, and toilet installed in a compact bathroom.',
      caption: 'Vanity & fixtures - after',
      status: 'Completed',
      aspect: 'portrait',
      aspectRatio: '3 / 4',
      objectPosition: 'center 35%',
    },
    images: [
      {
        src: `${REAL_WORK}/bathroom-toilet-vanity-installation-after.jpg`,
        alt: 'Bathroom with installed toilet, gray vanity, tile floor, and marble-look shower wall.',
        caption: 'Toilet & tile - after',
        status: 'Completed',
        aspect: 'portrait',
        aspectRatio: '3 / 4',
        objectPosition: 'center 70%',
      },
    ],
    video: {
      src: `${REAL_WORK}/bathroom-full-remodel-walkthrough.mp4`,
      poster: `${REAL_WORK}/bathroom-full-remodel-walkthrough-poster.jpg`,
      alt: 'Walkthrough of the expanded bathroom showing the added shower, installed vanity and toilet, mirror, lighting, tile, and finished surfaces.',
      caption: 'Full bathroom remodel walkthrough',
      description: 'Press play to tour the expanded bathroom, including the added shower, installed vanity and toilet, tile, lighting, and finished surfaces.',
      status: 'Completed',
    },
  },
  {
    id: 'siding-repair',
    category: 'Siding Repair',
    title: 'Siding Repair',
    body:
      'The same porch wall before and after siding repair, from a plywood-covered opening to the repaired exterior wall.',
    ctaLabel: 'Need siding repaired?',
    ctaHref: '/services/siding-repair',
    comparison: {
      title: 'Porch wall repair',
      beforeSrc: `${REAL_WORK}/porch-wall-opening-before-repair-1.jpg`,
      afterSrc: `${REAL_WORK}/porch-wall-siding-repair-after-2.jpg`,
    },
    cover: {
      src: `${REAL_WORK}/porch-wall-siding-repair-after-2.jpg`,
      alt: 'Porch wall and siding after exterior wall repair beside a railing.',
      caption: 'Porch wall - after',
      status: 'Completed',
      objectPosition: 'center',
      rotateLeft: true,
    },
    images: [
      {
        src: `${REAL_WORK}/porch-wall-opening-before-repair-1.jpg`,
        alt: 'Porch wall opening covered with plywood before exterior siding repair.',
        caption: 'Porch wall - before',
        status: 'Before',
        objectPosition: 'center',
        rotateLeft: true,
      },
    ],
  },
  {
    id: 'window-installation',
    category: 'Window Installation',
    title: 'Window Installation',
    body:
      'Window installation on the same house, shown with the front wall open during the work and with the new windows installed afterward.',
    ctaLabel: 'Need new windows installed?',
    ctaHref: '/services/window-installation',
    comparison: {
      title: 'Front-house window installation',
      beforeSrc: `${REAL_WORK}/front-house-window-installation-progress.jpg`,
      afterSrc: `${REAL_WORK}/houston-window-installation-exterior-repair.jpg`,
    },
    cover: {
      src: `${REAL_WORK}/houston-window-installation-exterior-repair.jpg`,
      alt: 'Exterior of the same Houston house after new windows were installed along the front and side walls.',
      caption: 'Front exterior - windows installed',
      status: 'Completed',
      aspect: 'wide',
      objectPosition: 'center',
    },
    images: [
      {
        src: `${REAL_WORK}/front-house-window-installation-progress.jpg`,
        alt: 'Front wall of the same house opened to expose framing during window installation.',
        caption: 'Front exterior - installation in progress',
        status: 'Before',
        aspect: 'wide',
        objectPosition: 'center',
      },
    ],
  },
  {
    id: 'side-rear-window-trim',
    category: 'Same House — Side & Rear',
    title: 'Window & Trim Installation',
    body:
      'Window and exterior trim installation on the side and rear of the same house, with siding repairs around the openings. The after views show the new windows and surrounding trim from both sides of the work.',
    note: 'Painting is next. These after photos show the windows, trim, and siding repairs before the exterior painting was finished.',
    ctaLabel: 'Need window and trim installation?',
    ctaHref: '/services/window-installation',
    comparison: {
      title: 'Side and rear windows & trim',
      beforeSrc: `${REAL_WORK}/side:back house window install and siding fix before.JPG`,
      afterSrc: `${REAL_WORK}/sidehouse window installation and siding fix 2.JPG`,
      additionalAfterSrcs: [`${REAL_WORK}/rear-house-window-door-installed-siding-repair.jpg`],
      layout: 'before-above',
    },
    cover: {
      src: `${REAL_WORK}/sidehouse window installation and siding fix 2.JPG`,
      alt: 'Side of the same house after window installation, showing new windows, exterior trim, and unpainted siding repairs around upper openings.',
      caption: 'Side windows & trim - after',
      status: 'In Progress',
    },
    images: [
      {
        src: `${REAL_WORK}/side:back house window install and siding fix before.JPG`,
        alt: 'Side and rear of the same house with boarded window openings and exposed siding repair areas before window and trim installation.',
        caption: 'Side & rear windows - before',
        status: 'Before',
        aspect: 'wide',
      },
      {
        src: `${REAL_WORK}/rear-house-window-door-installed-siding-repair.jpg`,
        alt: 'Rear of the same house after window and exterior trim installation, with siding repairs around the window and door openings before final painting.',
        caption: 'Rear windows & trim - after',
        status: 'In Progress',
      },
    ],
  },
  {
    id: 'concrete-walkway',
    category: 'Concrete Walkway',
    title: 'Concrete Walkway Installation',
    body:
      'The same concrete walkway before and after completion, from wet concrete in the forms to a finished stepping-stone path with gravel between the pads.',
    ctaLabel: 'Need a concrete walkway installed?',
    ctaHref: '/services/outdoor-remodeling',
    comparison: {
      title: 'Walkway installation',
      beforeSrc: `${REAL_WORK}/walkway-installation-progress.jpg`,
      afterSrc: `${REAL_WORK}/concrete-walkway-gravel-path-after.jpg`,
    },
    cover: {
      src: `${REAL_WORK}/concrete-walkway-gravel-path-after.jpg`,
      alt: 'Finished concrete stepping-stone walkway with dark gravel between a fence and brick wall.',
      caption: 'Walkway - after',
      status: 'Completed',
    },
    images: [
      {
        src: `${REAL_WORK}/walkway-installation-progress.jpg`,
        alt: 'Walkway installation in progress with form boards, gravel, and concrete pads beside a fence.',
        caption: 'Walkway - before',
        status: 'Before',
      },
    ],
  },
  {
    id: 'gate-installation',
    category: 'Gate Installation',
    title: 'Wood Gate Installation',
    body:
      'A completed wood gate with diagonal bracing and black hardware at the end of the walkway.',
    ctaLabel: 'Need a new gate installed?',
    ctaHref: '/services/fence-installation',
    cover: {
      src: `${REAL_WORK}/exterior-walkway-gate-improvement.jpg`,
      alt: 'Completed wood gate with diagonal bracing and black hardware at the end of a concrete walkway.',
      caption: 'Completed wood gate',
      status: 'Completed',
    },
    images: [],
  },
  {
    id: 'deck-railing',
    category: 'Deck & Railing',
    title: 'Second-Story Deck Railing',
    body:
      'New wood railing on the same second-story deck, shown during framing and after the rail and balusters were installed. The two after views show the railing from the side and across the house exterior.',
    note: 'Painting is next. These photos show the new wood railing before its painted finish.',
    ctaLabel: 'Need a deck or railing built?',
    ctaHref: '/services/deck-construction',
    comparison: {
      title: 'Deck railing installation',
      beforeSrc: `${REAL_WORK}/deck-railing-framing-progress.jpg`,
      afterSrc: `${REAL_WORK}/deck-railing-construction.jpg`,
      additionalAfterSrcs: [`${REAL_WORK}/second-story-deck-rail-framing-progress.jpg`],
    },
    cover: {
      src: `${REAL_WORK}/deck-railing-construction.jpg`,
      alt: 'New unpainted wood railing and balusters installed on the same elevated deck above the existing red-painted structure.',
      caption: 'Railing - after, before painting',
      status: 'In Progress',
      objectPosition: 'center 20%',
    },
    images: [
      {
        src: `${REAL_WORK}/second-story-deck-rail-framing-progress.jpg`,
        alt: 'Wide exterior view of the same second-story deck with new unpainted wood railing above the existing red-painted structure.',
        caption: 'Railing - after, exterior view before painting',
        status: 'In Progress',
        aspect: 'wide',
        objectPosition: 'center',
      },
      {
        src: `${REAL_WORK}/deck-railing-framing-progress.jpg`,
        alt: 'Wood deck surface with railing framing underway and tools on the boards.',
        caption: 'Railing - before',
        status: 'Before',
      },
    ],
  },
  {
    id: 'exterior-structure',
    category: 'Exterior Painting & Siding',
    title: 'Exterior Painting, Caulking & Siding',
    body:
      'The same small exterior structure before and after siding, caulking, and painting work, from yellow siding to a green exterior with white trim.',
    ctaLabel: 'Need exterior painting, caulking, or siding work?',
    ctaHref: '/services/exterior-painting',
    comparison: {
      title: 'Exterior painting, caulking & siding',
      beforeSrc: `${REAL_WORK}/custom-exterior-structure.jpg`,
      afterSrc: `${REAL_WORK}/small-exterior-structure-painting-after.jpg`,
    },
    cover: {
      src: `${REAL_WORK}/small-exterior-structure-painting-after.jpg`,
      alt: 'The same small exterior structure after painting, with green siding, white trim, and white double doors.',
      caption: 'Exterior - after',
      status: 'Completed',
    },
    images: [
      {
        src: `${REAL_WORK}/custom-exterior-structure.jpg`,
        alt: 'Small exterior structure with yellow siding and white double doors before exterior painting.',
        caption: 'Exterior - before',
        status: 'Before',
      },
    ],
  },
  {
    id: 'beam-installation',
    category: 'Structural Work',
    title: 'Beam Installation',
    body:
      'A beam being lifted into place during interior renovation work, with bolted connections and temporary wood supports visible before the walls and ceilings are finished.',
    ctaLabel: 'Planning a beam installation?',
    ctaHref: '/services/beam-installation',
    cover: {
      src: `${REAL_WORK}/beaminstallation.JPG`,
      alt: 'Bolted wood beam suspended by lifting straps inside exposed interior framing with temporary wood supports.',
      caption: 'Beam installation',
      status: 'In Progress',
      objectPosition: 'center',
    },
    images: [],
  },
  {
    id: 'custom-stair-framing',
    category: 'Custom Carpentry',
    title: 'Custom Stair Framing',
    body:
      'The same staircase from cut stringers to fitted wood treads and a landing, showing the stair carpentry before finish materials and railings are added.',
    ctaLabel: 'Need custom stair or carpentry work?',
    ctaHref: '/services/custom-carpentry',
    comparison: {
      title: 'Custom stair framing',
      beforeSrc: `${REAL_WORK}/tiny stair progress.JPG`,
      afterSrc: `${REAL_WORK}/custom-stair-framing.jpg`,
    },
    cover: {
      src: `${REAL_WORK}/custom-stair-framing.jpg`,
      alt: 'The same wood staircase after treads were fitted to the stringers beside a framed landing, before finish materials and railings.',
      caption: 'Stair framing - after',
      status: 'Completed',
    },
    images: [
      {
        src: `${REAL_WORK}/tiny stair progress.JPG`,
        alt: 'Cut wood stair stringers being positioned beside a framed landing before the treads are installed.',
        caption: 'Stair framing - before',
        status: 'Before',
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
