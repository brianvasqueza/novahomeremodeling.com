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
    img: 'https://images.pexels.com/photos/10827358/pexels-photo-10827358.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1200&fit=crop',
    imageAlt: 'Warm open kitchen and living remodel with natural light and refined finishes.',
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
    img: 'https://images.pexels.com/photos/31238728/pexels-photo-31238728.jpeg?auto=compress&cs=tinysrgb&w=1400&h=1100&fit=crop',
    imageAlt: 'Modern bathroom remodel with walk-in shower, wood vanity, and warm neutral tile.',
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
    img: 'https://images.pexels.com/photos/36777538/pexels-photo-36777538.jpeg?auto=compress&cs=tinysrgb&w=1400&h=1100&fit=crop',
    imageAlt: 'Kitchen remodel with wood cabinetry, large island, pendant lights, and stone countertops.',
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
    img: 'https://images.pexels.com/photos/10827358/pexels-photo-10827358.jpeg?auto=compress&cs=tinysrgb&w=2000&h=1400&fit=crop',
    imageAlt: 'Open-plan remodeled kitchen and living area with warm lighting and natural finishes.',
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
    img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=82&auto=format&fit=crop',
    imageAlt: 'Houston-style home exterior with outdoor living space after a residential remodel.',
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
    img: 'https://images.pexels.com/photos/36511373/pexels-photo-36511373.jpeg?auto=compress&cs=tinysrgb&w=1400&h=1100&fit=crop',
    imageAlt: 'Finished kitchen remodel detail with stone countertop, sink, faucet, and wood cabinetry.',
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
    img: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=2000&h=1200&fit=crop',
    imageAlt: 'Believable suburban home exterior with mature landscaping after a heritage remodel.',
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
    img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1400&q=82&auto=format&fit=crop',
    imageAlt: 'Covered patio and backyard outdoor living area for a Houston-area home.',
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
    img: 'https://images.pexels.com/photos/19227244/pexels-photo-19227244.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1200&fit=crop',
    imageAlt: 'Primary bathroom remodel with elegant vanity, glass shower, and warm lighting.',
  },
];

export const PROJECT_FILTERS = ['All work', 'Whole‑home', 'Kitchen', 'Bath', 'Addition', 'Outdoor', 'Heritage'];
