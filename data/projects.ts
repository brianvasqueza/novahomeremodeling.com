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
    img: '/homepage/michael-brown-0xp3aw009eo-unsplash.jpg',
    imageAlt: 'Luxury open living remodel with fireplace, piano, glass rail, and custom built-ins.',
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
    img: '/bathroom%20remodeling/patrick-bohn-ZZT1NLPKjZE-unsplash.jpg',
    imageAlt: 'Luxury bathroom remodel with green vanity, marble shower, brass fixtures, and twin mirrors.',
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
    img: '/kitchenremodeling/ariel-domenden-k1fe40cx2EU-unsplash.jpg',
    imageAlt: 'Luxury kitchen and dining remodel with coffered ceiling, large island, and tall glass doors.',
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
    img: '/homepage/michael-brown-bZZ-YKRvRF0-unsplash.jpg',
    imageAlt: 'Open-plan remodeled living room with pale wood flooring, custom media wall, and adjacent kitchen.',
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
    img: '/homepage/herobackground.jpg',
    imageAlt: 'Luxury modern home exterior with glass, stone, wood cladding, pool, and outdoor living terrace.',
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
    img: '/kitchenremodeling/franco-debartolo-JxBwFjX-8hU-unsplash.jpg',
    imageAlt: 'Warm wood kitchen remodel with marble counters, professional range, and stone tile floor.',
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
    img: '/homepage/zac-gudakov-IOWG5lg7BWc-unsplash.jpg',
    imageAlt: 'Bright living room remodel with pale wood flooring, fireplace wall, and refined neutral finishes.',
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
    img: '/homepage/point3d-commercial-imaging-ltd-WIPVrs5meCA-unsplash.jpg',
    imageAlt: 'Bright remodeled living area with large windows, custom media wall, and kitchen view.',
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
    img: '/bathroom%20remodeling/patrick-bohn-D8ghwGaYQpw-unsplash.jpg',
    imageAlt: 'Primary bathroom remodel with freestanding tub, black marble accent wall, and brass fixtures.',
  },
];

export const PROJECT_FILTERS = ['All work', 'Whole‑home', 'Kitchen', 'Bath', 'Addition', 'Outdoor', 'Heritage'];
