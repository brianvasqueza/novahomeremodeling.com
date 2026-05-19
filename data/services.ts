export type SvcIconType = 'kitchen' | 'bath' | 'paint' | 'floor' | 'cabinet' | 'trim' | 'door' | 'deck';

export interface ServiceCard {
  num: string;
  icon: SvcIconType;
  span: 1 | 2;
  title: string;
  titleText: string;
  slug: string;
  desc: string;
}

export const SERVICES_BENTO: ServiceCard[] = [
  {
    num: '01',
    icon: 'kitchen',
    span: 2,
    title: 'Kitchen <em>Remodeling</em>',
    titleText: 'Kitchen Remodeling',
    slug: 'kitchen-remodeling',
    desc: 'Full-scope kitchen renovations — demolition to custom cabinetry. Shop-drawn millwork, stone counters, unlacquered brass.',
  },
  {
    num: '02',
    icon: 'bath',
    span: 2,
    title: 'Bathroom <em>Remodeling</em>',
    titleText: 'Bathroom Remodeling',
    slug: 'bathroom-remodeling',
    desc: 'Primary suites to powder rooms. Tile, plumbing, heated stone, frameless glass. Drawn before a single pipe is moved.',
  },
  {
    num: '03',
    icon: 'paint',
    span: 1,
    title: 'Painting',
    titleText: 'Painting',
    slug: 'interior-painting',
    desc: 'Interior and exterior. Plaster-grade prep, heirloom colours, limewash. No shortcuts on the walls.',
  },
  {
    num: '04',
    icon: 'floor',
    span: 1,
    title: 'Flooring',
    titleText: 'Flooring',
    slug: 'flooring',
    desc: 'White oak, limestone, heritage tile. Rift-sawn, hand-scraped, or poured in place.',
  },
  {
    num: '05',
    icon: 'cabinet',
    span: 1,
    title: 'Cabinets',
    titleText: 'Cabinets',
    slug: 'cabinet-installation',
    desc: 'Every cabinet drawn on-site. Box joints, dovetails, inset faces — no flat-pack, ever.',
  },
  {
    num: '06',
    icon: 'trim',
    span: 1,
    title: 'Trim &amp; <em>Finish Work</em>',
    titleText: 'Trim & Finish Work',
    slug: 'trim-finish-carpentry',
    desc: 'Crown, baseboard, panelling, wainscoting. Mitered by hand. Gaps under 1⁄32″.',
  },
  {
    num: '07',
    icon: 'door',
    span: 2,
    title: 'Doors &amp; <em>Windows</em>',
    titleText: 'Doors & Windows',
    slug: 'door-installation',
    desc: 'Heritage replacement, new openings, steel casements, custom thresholds. We handle the structural too.',
  },
  {
    num: '08',
    icon: 'deck',
    span: 2,
    title: 'Decks',
    titleText: 'Decks',
    slug: 'deck-construction',
    desc: "Ipe, thermally modified ash, concrete. Seamless threshold details. Built for Houston's heat and humidity.",
  },
];
