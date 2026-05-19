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
    quote: 'They moved like architects and built like joiners. We bought a house and they handed it back <em>a home.</em>',
    name: 'Eleanor & James Whitfield',
    role: 'Project No. 074 — River Oaks · 2023',
    img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=120&h=120&q=85&auto=format&fit=crop',
    imgAlt: 'Kitchen renovation — Project No. 074, River Oaks',
  },
  {
    quote: 'Sixteen months, no surprises, no change orders past month four. We have never written that sentence about a builder before.',
    name: 'M. & R. Asato',
    role: 'Project No. 081 — The Woodlands · 2024',
    img: 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=120&h=120&q=85&auto=format&fit=crop',
    imgAlt: 'Whole-home renovation — Project No. 081, The Woodlands',
  },
  {
    quote: 'The drawer they signed is in the pantry. We open it more than we should, just to look. <em>It is a small joy.</em>',
    name: 'Catherine Pemberton',
    role: 'Project No. 069 — Sugar Land · 2022',
    img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=120&h=120&q=85&auto=format&fit=crop',
    imgAlt: 'Kitchen addition — Project No. 069, Sugar Land',
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
    duration: 'Months 2–4',
  },
  {
    n: '03',
    title: 'Build',
    body: 'Our in-house crew handles framing, cabinetry, tile, and finish work. Same people, start to finish. No handoffs, no surprises.',
    duration: 'Months 4–14',
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
    img: 'https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?w=1200&q=82&auto=format&fit=crop',
    imageAlt: 'Close view of rift-sawn white oak boards used for custom millwork.',
    span: 'default',
  },
  {
    n: 'M.02',
    title: 'Hand‑cut joinery',
    desc: 'Dovetails, finger joints, mortise and tenon. No biscuit, no pocket screw, no shortcut.',
    img: 'https://images.unsplash.com/photo-1503387837-b154d5074bd2?w=1600&q=82&auto=format&fit=crop',
    imageAlt: 'Carpentry workspace showing joinery and hand-built remodeling craft.',
    span: 'wide',
    offset: true,
  },
  {
    n: 'M.03',
    title: 'Honed limestone',
    desc: 'Belgian bluestone and Italian travertine. Sealed only with linseed and beeswax.',
    img: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=82&auto=format&fit=crop',
    imageAlt: 'Honed stone and plaster material palette for a refined remodel.',
    span: 'default',
  },
  {
    n: 'M.04',
    title: 'Unlacquered brass',
    desc: 'Hardware allowed to patinate. We supply a small jar of oil, not a polishing cloth.',
    img: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=1200&q=82&auto=format&fit=crop',
    imageAlt: 'Warm brass hardware detail for cabinetry and interior finish work.',
    span: 'default',
    offset: true,
  },
  {
    n: 'M.05',
    title: 'Lime plaster',
    desc: 'Three‑coat troweled plaster, cured for ninety days. Breathable, soft, never cracking.',
    img: 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=1200&q=82&auto=format&fit=crop',
    imageAlt: 'Soft lime plaster wall finish in a warm residential interior.',
    span: 'default',
  },
  {
    n: 'M.06',
    title: 'Salvaged hardware',
    desc: 'Hinges and pulls reused from the original house wherever possible. New only where necessary.',
    img: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1200&q=82&auto=format&fit=crop',
    imageAlt: 'Restored interior detail with salvaged hardware and warm wood.',
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
    before: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=2400&q=85&auto=format&fit=crop&sat=-90&bri=-20&con=-15',
    after:  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=2400&q=85&auto=format&fit=crop',
  },
  {
    project: 'No. 053',
    type: 'Primary bath — full gut',
    duration: '6 weeks on site',
    year: '2020',
    location: 'The Woodlands · Houston, TX',
    body: 'Primary suite bathroom rebuilt from the rough-in. Plumbing moved before tile was mentioned. Three-step waterproofing, heated limestone floor, frameless glass templated after tile completion.',
    before: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=2400&q=85&auto=format&fit=crop&sat=-90&bri=-20&con=-15',
    after:  'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=2400&q=85&auto=format&fit=crop',
  },
  {
    project: 'No. 081',
    type: 'Whole-home renovation',
    duration: '14 months on site',
    year: '2024',
    location: 'River Oaks · Houston, TX',
    body: 'Full whole-home renovation of a 1958 colonial. Structural wall removal, new beam, reconfigured kitchen and primary suite. Same crew, start to finish.',
    before: 'https://images.unsplash.com/photo-1567016526105-22da7c13161a?w=2400&q=85&auto=format&fit=crop&sat=-90&bri=-20&con=-15',
    after:  'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=2400&q=85&auto=format&fit=crop',
  },
];

export const SCOPE_OPTIONS = ['Kitchen', 'Bath', 'Primary suite', 'Whole‑home', 'Addition', 'Heritage'];
export const BUDGET_OPTIONS = ['$200k – $500k', '$500k – $1M', '$1M – $2.5M', '$2.5M+'];

export const HERO_IMAGES: Record<string, string> = {
  kitchen: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=2400&q=85&auto=format&fit=crop',
  framing: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=2400&q=85&auto=format&fit=crop',
  bath: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=2400&q=85&auto=format&fit=crop',
  facade: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=2400&q=85&auto=format&fit=crop',
};
