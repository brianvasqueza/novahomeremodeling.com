/* Testimonials, process steps, craft materials, service areas, before/after data */

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  img: string;
  imgAlt: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'The kitchen came in on schedule and on budget. One crew from start to finish, and one number to call when we had questions. Two years later, <em>everything still looks right.</em>',
    name: 'Eleanor & James Whitfield',
    role: 'Project No. 074 — River Oaks · 2023',
    img: '/kitchenremodeling/ariel-domenden-k1fe40cx2EU-unsplash.jpg',
    imgAlt: 'Luxury kitchen and dining remodel with coffered ceiling, large island, and tall glass doors.',
  },
  {
    quote: 'Sixteen months, no surprises, no change orders past month four. We have never written that sentence about a builder before.',
    name: 'M. & R. Asato',
    role: 'Project No. 081 — The Woodlands · 2024',
    img: '/homepage/michael-brown-0xp3aw009eo-unsplash.jpg',
    imgAlt: 'Luxury open living remodel with fireplace, piano, glass rail, and custom built-ins.',
  },
  {
    quote: 'The drawer they signed is in the pantry. We open it more than we should, just to look. <em>It is a small joy.</em>',
    name: 'Catherine Pemberton',
    role: 'Project No. 069 — Sugar Land · 2022',
    img: '/kitchenremodeling/lisa-anna-cnU1eDXGKL4-unsplash.jpg',
    imgAlt: 'White kitchen cabinetry with brass pulls, white tile backsplash, and styled countertop detail.',
  },
];

export interface ProcessStep {
  n: string;
  title: string;
  body: string;
  duration: string;
}

export const STEPS: ProcessStep[] = [
  {
    n: '01',
    title: 'Brief',
    body: 'A long conversation, in your home. We walk every room, measure what matters, and listen before we offer a single idea. Observation first.',
    duration: 'Weeks 1–4',
  },
  {
    n: '02',
    title: 'Drawings',
    body: 'Full plan sets and shop drawings — every cabinet measured on site, every joint specified on paper. Nothing goes to production without a drawing.',
    duration: 'Weeks 2–6',
  },
  {
    n: '03',
    title: 'Build',
    body: 'Our in-house crew handles framing, cabinetry, tile, and finish work. Same people, start to finish. No handoffs, no surprises.',
    duration: 'Varies by scope',
  },
  {
    n: '04',
    title: 'Sign',
    body: "We sign the inside of a drawer face when we leave. Initials, date, and a number you can call for the rest of the house's life.",
    duration: 'After keys',
  },
];

export const PHASE_LABELS = ['Brief', 'Drawings', 'Build', 'Sign'];

export interface CraftItem {
  n: string;
  title: string;
  desc: string;
  img: string;
  imageAlt: string;
  span: 'default' | 'wide';
  offset?: boolean;
}

export const CRAFT: CraftItem[] = [
  {
    n: 'M.01',
    title: 'White oak, rift‑sawn',
    desc: 'Sourced from a single mill. Two weeks acclimating on site before a board is cut.',
    img: '/kitchenremodeling/franco-debartolo-JxBwFjX-8hU-unsplash.jpg',
    imageAlt: 'Warm wood kitchen cabinetry with marble counters, professional range, and stone tile floor.',
    span: 'default',
  },
  {
    n: 'M.02',
    title: 'Hand‑cut joinery',
    desc: 'Dovetails, finger joints, mortise and tenon. No biscuit, no pocket screw, no shortcut.',
    img: '/kitchenremodeling/lotus-design-n-print--Vfa35ueUCo-unsplash.jpg',
    imageAlt: 'Bright white kitchen remodel with waterfall stone island and indoor-outdoor connection.',
    span: 'wide',
    offset: true,
  },
  {
    n: 'M.03',
    title: 'Honed limestone',
    desc: 'Belgian bluestone and Italian travertine. Sealed only with linseed and beeswax.',
    img: '/kitchenremodeling/lisa-anna-cnU1eDXGKL4-unsplash.jpg',
    imageAlt: 'White cabinetry, brass hardware, and tile backsplash detail in a finished kitchen remodel.',
    span: 'default',
  },
  {
    n: 'M.04',
    title: 'Unlacquered brass',
    desc: 'Hardware allowed to patinate. We supply a small jar of oil, not a polishing cloth.',
    img: '/kitchenremodeling/prydumano-design-KyWwFZkcaUU-unsplash.jpg',
    imageAlt: 'Soft neutral kitchen cabinet and countertop detail with integrated under-cabinet lighting.',
    span: 'default',
    offset: true,
  },
  {
    n: 'M.05',
    title: 'Lime plaster',
    desc: 'Three‑coat troweled plaster, cured for ninety days. Breathable, soft, never cracking.',
    img: '/bathroom%20remodeling/patrick-bohn-ZZT1NLPKjZE-unsplash.jpg',
    imageAlt: 'Luxury bathroom remodel with marble-look tile, brass fixtures, green vanity, and glass shower.',
    span: 'default',
  },
  {
    n: 'M.06',
    title: 'Salvaged hardware',
    desc: 'Hinges and pulls reused from the original house wherever possible. New only where necessary.',
    img: '/homepage/michael-brown-bZZ-YKRvRF0-unsplash.jpg',
    imageAlt: 'Bright open living room with custom media wall, pale wood flooring, and adjacent kitchen.',
    span: 'default',
  },
];

export const AREAS: [string, string][] = [
  ['Houston (Inner Loop)', 'Home base'],
  ['Katy', '30 mi west'],
  ['Sugar Land', '25 mi SW'],
  ['Cypress', '35 mi NW'],
  ['Pearland', '25 mi south'],
  ['The Woodlands', '35 mi north'],
  ['Pasadena', '15 mi SE'],
  ['Spring', '25 mi north'],
  ['Tomball', '40 mi NW'],
  ['Richmond', '35 mi SW'],
];

export interface BeforeAfterItem {
  project: string;
  type: string;
  duration: string;
  year: string;
  location: string;
  body: string;
  before: string;
  after: string;
}

export const BA_DATA: BeforeAfterItem[] = [
  {
    project: 'No. 074',
    type: 'Kitchen — down to studs',
    duration: '8 months on site',
    year: '2023',
    location: 'River Oaks · Houston, TX',
    body: 'A 1947 cottage kitchen taken back to the studs. White oak cabinetry, honed limestone counters, unlacquered brass. Every cabinet shop-drawn and dry-fit before installation.',
    before: 'https://images.pexels.com/photos/30924413/pexels-photo-30924413.jpeg?auto=compress&cs=tinysrgb&w=2000&h=1333&fit=crop',
    after:  '/kitchenremodeling/ariel-domenden-k1fe40cx2EU-unsplash.jpg',
  },
  {
    project: 'No. 053',
    type: 'Primary bath — full gut',
    duration: '6 weeks on site',
    year: '2020',
    location: 'The Woodlands · Houston, TX',
    body: 'Primary suite bathroom rebuilt from the rough-in. Plumbing moved before tile was mentioned. Three-step waterproofing, heated limestone floor, frameless glass templated after tile completion.',
    before: 'https://images.pexels.com/photos/3935348/pexels-photo-3935348.jpeg?auto=compress&cs=tinysrgb&w=2000&h=1333&fit=crop',
    after:  '/bathroom%20remodeling/patrick-bohn-PoXaUHUa-Tg-unsplash.jpg',
  },
  {
    project: 'No. 081',
    type: 'Whole-home renovation',
    duration: '14 months on site',
    year: '2024',
    location: 'River Oaks · Houston, TX',
    body: 'Full whole-home renovation of a 1958 colonial. Structural wall removal, new beam, reconfigured kitchen and primary suite. Same crew, start to finish.',
    before: 'https://images.pexels.com/photos/15124970/pexels-photo-15124970.jpeg?auto=compress&cs=tinysrgb&w=2000&h=1333&fit=crop',
    after:  '/homepage/michael-brown-0xp3aw009eo-unsplash.jpg',
  },
];

export const SCOPE_OPTIONS = ['Kitchen', 'Bath', 'Primary suite', 'Whole‑home', 'Addition', 'Exterior'];
export const BUDGET_OPTIONS = [
  'Under $5k',
  '$5k – $10k',
  '$10k – $20k',
  '$20k – $50k',
  '$50k – $100k',
  '$100k – $300k',
  '$300k – $750k',
  '$750k+',
  'Not sure yet',
];

export const HERO_IMAGES: Record<string, string> = {
  kitchen: '/homepage/herobackground.jpg',
  framing: 'https://images.pexels.com/photos/15124970/pexels-photo-15124970.jpeg?auto=compress&cs=tinysrgb&w=2000&h=1333&fit=crop',
  bath: '/bathroom%20remodeling/patrick-bohn-PoXaUHUa-Tg-unsplash.jpg',
  facade: '/homepage/herobackground.jpg',
};
