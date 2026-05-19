export type BlogCategory = 'Planning' | 'Materials' | 'Process' | 'Permits' | 'Maintenance';

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  modified?: string;
  category: BlogCategory;
  author: string;
  image: string;
  topics: string[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'how-we-plan-a-fixed-fee-feasibility-study',
    title: 'How we plan a fixed-fee feasibility study',
    excerpt:
      'The preconstruction rhythm we use before drawings, pricing, and site work move into the same room.',
    date: '2026-05-01',
    category: 'Process',
    author: 'Nova Home Remodeling & Design',
    image: 'https://images.unsplash.com/photo-1503387837-b154d5074bd2?w=2400&q=85&auto=format&fit=crop',
    topics: ['preconstruction', 'budgeting', 'project planning'],
  },
  {
    slug: 'materials-that-age-well-in-houston-homes',
    title: 'Materials that age well in Houston homes',
    excerpt:
      'A practical note on oak, brass, limestone, plaster, and the discipline of a narrow finish palette.',
    date: '2026-04-15',
    category: 'Materials',
    author: 'Nova Home Remodeling & Design',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=2400&q=85&auto=format&fit=crop',
    topics: ['materials', 'Houston homes', 'finish selection'],
  },
];

export function findPost(slug: string) {
  return BLOG_POSTS.find((post) => post.slug === slug);
}
