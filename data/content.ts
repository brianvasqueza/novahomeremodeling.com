/* Principles, process steps, craft materials, service areas, before/after data */

export interface Principle {
  label: string;
  title: string;
  category: string;
  quote: string;
}

export const PRINCIPLES: Principle[] = [
  {
    label: 'I',
    title: 'Planning before work.',
    category: 'How every Nova project begins',
    quote: 'Every project starts with a conversation in your home. We walk the space, understand how you live in it, and ask more questions than we answer. <em>The plan comes after we understand the home.</em>',
  },
  {
    label: 'II',
    title: 'Clear communication.',
    category: 'How we keep you informed',
    quote: 'You should always know what is happening on your job site. We communicate before work starts, during every phase, and at every decision point — <em>not just when there is a problem.</em>',
  },
  {
    label: 'III',
    title: 'One crew, start to finish.',
    category: 'How we maintain quality',
    quote: 'The same people who frame your kitchen are the ones who set tile, install cabinetry, and do the finish work. No handoffs, no unfamiliar faces mid-project. <em>One team that knows your home from day one.</em>',
  },
  {
    label: 'IV',
    title: 'Materials built to last.',
    category: 'How we choose what goes in your home',
    quote: 'Every material is selected for how it performs in Houston\'s climate — not just how it photographs. Durable finishes, proper waterproofing, and transitions <em>built to hold up for years.</em>',
  },
  {
    label: 'V',
    title: 'Owner involvement.',
    category: 'How we stay accountable',
    quote: 'The owner stays involved from the first walkthrough to the final punch list. This is not a company where you meet the principal once. <em>We are here through all of it.</em>',
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
    title: 'Planning',
    body: 'Every cabinet measured on site before anything is ordered. Materials confirmed, scope locked, sequence mapped. Nothing moves to production until the plan is solid.',
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

export const PHASE_LABELS = ['Brief', 'Planning', 'Build', 'Sign'];

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
    body: 'A 1947 cottage kitchen taken back to the studs. White oak cabinetry, honed limestone counters, unlacquered brass. Every cabinet measured on site and dry-fit before installation.',
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
