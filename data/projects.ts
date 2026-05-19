export type ProjectSpan = 'lg' | 'sm' | 'full';

export interface Project {
  index: string;
  category: string;
  title: string;
  titleHtml: string;
  location: string;
  year: number;
  sqft: string;
  span?: ProjectSpan;
  offset?: boolean;
  landscape?: boolean;
  img: string;
  imageAlt: string;
  href?: string;
}

export const PROJECTS: Project[] = [
  {
    index: '081',
    category: 'Whole‑home',
    title: 'A 1958 River Oaks colonial, rebuilt in white oak.',
    titleHtml: 'A 1958 River Oaks colonial, <em>rebuilt in white oak.</em>',
    location: 'River Oaks · Houston, TX',
    year: 2024,
    sqft: '3,400',
    span: 'lg',
    img: 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=1600&q=82&auto=format&fit=crop',
    imageAlt: 'Warm open-plan living space with plaster walls and warm natural light.',
  },
  {
    index: '078',
    category: 'Bath',
    title: 'Limestone, linen, light.',
    titleHtml: 'Limestone, linen, light.',
    location: 'Memorial · Houston, TX',
    year: 2023,
    sqft: '1,200',
    span: 'sm',
    offset: true,
    img: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1400&q=82&auto=format&fit=crop',
    imageAlt: 'Quiet limestone bathroom remodel with soft neutral finishes.',
  },
  {
    index: '074',
    category: 'Kitchen',
    title: 'A pantry built like a library.',
    titleHtml: 'A pantry built like a <em>library.</em>',
    location: 'Montrose · Houston, TX',
    year: 2023,
    sqft: '240',
    span: 'sm',
    img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1400&q=82&auto=format&fit=crop',
    imageAlt: 'Custom kitchen remodel with pantry storage and stone counters.',
  },
  {
    index: '071',
    category: 'Whole‑home',
    title: 'A 1962 ranch, opened to the yard.',
    titleHtml: 'A 1962 ranch, <em>opened to the yard.</em>',
    location: 'Tanglewood · Houston, TX',
    year: 2022,
    sqft: '2,900',
    span: 'full',
    landscape: true,
    img: 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=2400&q=82&auto=format&fit=crop',
    imageAlt: 'Open-plan whole-home renovation with warm plaster walls and exposed oak.',
  },
  {
    index: '069',
    category: 'Addition',
    title: 'Twenty‑two feet of steel and glass.',
    titleHtml: 'Twenty‑two feet of <em>steel and glass.</em>',
    location: 'The Heights · Houston, TX',
    year: 2022,
    sqft: '4,800',
    span: 'lg',
    offset: true,
    img: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1600&q=82&auto=format&fit=crop',
    imageAlt: 'Open-plan addition with warm wood detail and curated interiors.',
  },
  {
    index: '066',
    category: 'Kitchen',
    title: 'The island, drawn four times before it was cut.',
    titleHtml: 'The island, <em>drawn four times before it was cut.</em>',
    location: 'Sugar Land · Houston, TX',
    year: 2022,
    sqft: '380',
    span: 'sm',
    img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1400&q=82&auto=format&fit=crop',
    imageAlt: 'Kitchen renovation with custom island, stone counters, and warm wood detail.',
  },
  {
    index: '061',
    category: 'Heritage',
    title: 'A Craftsman, quietly restored.',
    titleHtml: 'A Craftsman, <em>quietly restored.</em>',
    location: 'Tanglewood · Houston, TX',
    year: 2021,
    sqft: '2,800',
    span: 'full',
    landscape: true,
    img: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=2000&q=82&auto=format&fit=crop',
    imageAlt: 'Restored Craftsman exterior with a careful heritage remodel.',
  },
  {
    index: '058',
    category: 'Outdoor',
    title: 'A covered porch that became the living room.',
    titleHtml: 'A covered porch that <em>became the living room.</em>',
    location: 'Cypress · Houston, TX',
    year: 2021,
    sqft: '640',
    span: 'sm',
    img: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=1400&q=82&auto=format&fit=crop',
    imageAlt: 'Covered outdoor living addition with stone flooring and custom millwork.',
  },
  {
    index: '053',
    category: 'Bath',
    title: 'Stone and steam. A primary suite, rebuilt.',
    titleHtml: 'Stone and steam. <em>A primary suite, rebuilt.</em>',
    location: 'The Woodlands · Houston, TX',
    year: 2020,
    sqft: '320',
    span: 'lg',
    offset: true,
    img: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1600&q=82&auto=format&fit=crop',
    imageAlt: 'Primary bathroom with honed stone tile, heated floors, and frameless glass.',
  },
];

export const PROJECT_FILTERS = ['All work', 'Whole‑home', 'Kitchen', 'Bath', 'Addition', 'Outdoor', 'Heritage'];
