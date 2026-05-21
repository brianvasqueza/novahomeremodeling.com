export type VisualAspect = 'wide' | 'portrait' | 'square';

export interface ServiceVisualImage {
  src: string;
  alt: string;
  aspect?: VisualAspect;
}

export interface ServiceVisualStory {
  slug: string;
  story: {
    eyebrow: string;
    title: string;
    body: string;
    image: ServiceVisualImage;
    notes: {
      placement: string;
      emotionalImpact: string;
      conversionValue: string;
      authenticity: string;
    };
  };
  comparison: {
    eyebrow: string;
    title: string;
    before: ServiceVisualImage;
    after: ServiceVisualImage;
    caption: string;
  };
  process: {
    eyebrow: string;
    title: string;
    items: Array<{
      title: string;
      body: string;
      image: ServiceVisualImage;
    }>;
  };
  materials: {
    eyebrow: string;
    title: string;
    images: ServiceVisualImage[];
  };
  gallery: {
    eyebrow: string;
    title: string;
    images: ServiceVisualImage[];
  };
  visualBreak: {
    image: ServiceVisualImage;
    kicker: string;
    title: string;
    body: string;
  };
}

const u = (id: string, w = 1800, h = 1200) =>
  `https://images.unsplash.com/${id}?w=${w}&h=${h}&q=82&auto=format&fit=crop`;

const local = (path: string) => path;

const IMG = {
  kitchenWarm: local('/kitchenremodeling/ariel-domenden-k1fe40cx2EU-unsplash.jpg'),
  kitchenLargeIsland: local('/kitchenremodeling/ariel-domenden-k1fe40cx2EU-unsplash.jpg'),
  kitchenIsland: local('/kitchenremodeling/lotus-design-n-print--Vfa35ueUCo-unsplash.jpg'),
  kitchenDetail: local('/kitchenremodeling/lisa-anna-cnU1eDXGKL4-unsplash.jpg'),
  kitchenWood: local('/kitchenremodeling/franco-debartolo-JxBwFjX-8hU-unsplash.jpg'),
  kitchenModern: local('/kitchenremodeling/lotus-design-n-print-RwXneIyqxAw-unsplash.jpg'),
  kitchenSoft: local('/kitchenremodeling/prydumano-design-KyWwFZkcaUU-unsplash.jpg'),
  bathShower: local('/bathroom%20remodeling/patrick-bohn-PoXaUHUa-Tg-unsplash.jpg'),
  bathVanity: local('/bathroom%20remodeling/patrick-bohn-ZZT1NLPKjZE-unsplash.jpg'),
  bathOverview: local('/bathroom%20remodeling/patrick-bohn-ZZT1NLPKjZE-unsplash.jpg'),
  bathTileWork: local('/bathroom%20remodeling/pexels-curtis-adams-1694007-10827408.jpg'),
  bathModern: local('/bathroom%20remodeling/patrick-bohn-D8ghwGaYQpw-unsplash.jpg'),
  bathTub: local('/bathroom%20remodeling/bailey-alexander-antlPQPVcjo-unsplash.jpg'),
  bathGreen: local('/bathroom%20remodeling/zac-gudakov-FiKcg6EMneY-unsplash.jpg'),
  tileDetail: u('photo-1690603935238-b60582bcb273', 1400, 1400),
  paintPrep: u('photo-1589939705384-5185137a7f0f', 1800, 1200),
  paintExterior: u('photo-1562259949-e8e7689d7828', 1800, 1200),
  paintRoom1: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1800&h=1200&fit=crop',
  paintRoom2: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1800&h=1200&fit=crop',
  paintRoom3: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1800&h=1200&fit=crop',
  paintWork: 'https://images.pexels.com/photos/6474479/pexels-photo-6474479.jpeg?auto=compress&cs=tinysrgb&w=1800&h=1200&fit=crop',
  drywallPatch: 'https://images.pexels.com/photos/5691607/pexels-photo-5691607.jpeg?auto=compress&cs=tinysrgb&w=1800&h=1200&fit=crop',
  drywallFinish: 'https://images.pexels.com/photos/8292884/pexels-photo-8292884.jpeg?auto=compress&cs=tinysrgb&w=1800&h=1200&fit=crop',
  wallClean: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=1800&h=1200&fit=crop',
  extHome1: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1800&h=1200&fit=crop',
  extHome2: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1800&h=1200&fit=crop',
  extHome3: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1800&h=1200&fit=crop',
  extPaintWork: 'https://images.pexels.com/photos/5207272/pexels-photo-5207272.jpeg?auto=compress&cs=tinysrgb&w=1800&h=1200&fit=crop',
  extSurface: 'https://images.pexels.com/photos/3016430/pexels-photo-3016430.jpeg?auto=compress&cs=tinysrgb&w=1800&h=1200&fit=crop',
  drywallWork: u('photo-1504307651254-35680f356dfd', 1800, 1200),
  framing: u('photo-1704742950992-9815a104820c', 1800, 1200),
  beam: u('photo-1677204703178-4cb5b2fb26d2', 1800, 1200),
  carpentry: u('photo-1567016376408-0226e4d0c1ea', 1400, 1600),
  windows: u('photo-1558618666-fcd25c85cd64', 1800, 1200),
  doors: u('photo-1505691938895-1758d7feb511', 1800, 1200),
  flooring: u('photo-1584622650111-993a426fbf0a', 1800, 1200),
  woodFloor: u('photo-1600210492486-724fe5c67fb0', 1800, 1200),
  outdoor: u('photo-1570129477492-45c003edd2be', 1800, 1200),
  patio: u('photo-1600607687939-ce8a6c25118c', 1800, 1200),
  deck: u('photo-1600585154526-990dced4db0d', 1800, 1200),
  pergola: u('photo-1708397016786-8916880649b8', 1800, 1200),
  trim: u('photo-1503387837-b154d5074bd2', 1400, 1600),
  cabinet: u('photo-1556909114-f6e7ad7d3136', 1800, 1200),
  closet: u('photo-1696846912293-9a8013e17403', 1400, 1600),
  lighting: u('photo-1565538810643-b5bdb714032a', 1800, 1200),
  accent: u('photo-1756302555654-5e413da2d1b8', 1800, 1200),
  siding: u('photo-1741525665303-dfb05d750e48', 1800, 1200),
  fence: u('photo-1779120690231-5dda93531065', 1800, 1200),
  renovation: u('photo-1600566753086-00f18fb6b3ea', 1800, 1200),
  garage: u('photo-1776261761989-b66436309302', 1800, 1200),
  commercial: u('photo-1497366216548-37526070297c', 1800, 1200),
  hardware: u('photo-1721052029394-b27ed9842bdd', 1400, 1400),
  stone: u('photo-1600566752355-35792bedcfea', 1400, 1400),
};

type Profile = {
  slug: string;
  label: string;
  scene: string;
  before: string;
  after: string;
  process: [string, string, string];
  materials: [string, string, string];
  gallery: [string, string, string, string];
  breakImage: string;
};

const profiles: Profile[] = [
  { slug: 'kitchen-remodeling', label: 'Kitchen remodeling', scene: IMG.kitchenLargeIsland, before: IMG.drywallWork, after: IMG.kitchenIsland, process: [IMG.kitchenSoft, IMG.kitchenWood, IMG.kitchenModern], materials: [IMG.kitchenDetail, IMG.kitchenWood, IMG.kitchenSoft], gallery: [IMG.kitchenWarm, IMG.kitchenIsland, IMG.kitchenWood, IMG.kitchenModern], breakImage: IMG.kitchenWarm },
  { slug: 'bathroom-remodeling', label: 'Bathroom remodeling', scene: IMG.bathOverview, before: IMG.drywallWork, after: IMG.bathVanity, process: [IMG.bathTileWork, IMG.bathShower, IMG.bathModern], materials: [IMG.bathVanity, IMG.bathTub, IMG.bathGreen], gallery: [IMG.bathModern, IMG.bathShower, IMG.bathGreen, IMG.bathVanity], breakImage: IMG.bathVanity },
  { slug: 'interior-painting', label: 'Interior painting', scene: IMG.paintRoom1, before: IMG.drywallWork, after: IMG.paintRoom2, process: [IMG.drywallWork, IMG.paintWork, IMG.trim], materials: [IMG.accent, IMG.trim, IMG.paintWork], gallery: [IMG.paintRoom3, IMG.paintRoom2, IMG.trim, IMG.renovation], breakImage: IMG.accent },
  { slug: 'exterior-painting', label: 'Exterior painting', scene: IMG.extHome1, before: IMG.siding, after: IMG.extHome2, process: [IMG.siding, IMG.extPaintWork, IMG.extSurface], materials: [IMG.siding, IMG.extSurface, IMG.doors], gallery: [IMG.extHome3, IMG.extHome2, IMG.extPaintWork, IMG.outdoor], breakImage: IMG.outdoor },
  { slug: 'drywall-repair', label: 'Drywall repair', scene: IMG.wallClean, before: IMG.drywallWork, after: IMG.paintRoom1, process: [IMG.framing, IMG.drywallPatch, IMG.drywallFinish], materials: [IMG.drywallWork, IMG.drywallFinish, IMG.wallClean], gallery: [IMG.paintRoom2, IMG.drywallPatch, IMG.wallClean, IMG.renovation], breakImage: IMG.paintRoom1 },
  { slug: 'beam-installation', label: 'Beam installation', scene: IMG.beam, before: IMG.framing, after: IMG.carpentry, process: [IMG.framing, IMG.beam, IMG.carpentry], materials: [IMG.beam, IMG.carpentry, IMG.hardware], gallery: [IMG.beam, IMG.framing, IMG.carpentry, IMG.renovation], breakImage: IMG.carpentry },
  { slug: 'window-installation', label: 'Window installation', scene: IMG.windows, before: IMG.framing, after: IMG.windows, process: [IMG.framing, IMG.windows, IMG.trim], materials: [IMG.windows, IMG.trim, IMG.paintPrep], gallery: [IMG.windows, IMG.trim, IMG.renovation, IMG.outdoor], breakImage: IMG.windows },
  { slug: 'door-installation', label: 'Door installation', scene: IMG.doors, before: IMG.framing, after: IMG.doors, process: [IMG.framing, IMG.doors, IMG.trim], materials: [IMG.doors, IMG.hardware, IMG.trim], gallery: [IMG.doors, IMG.trim, IMG.hardware, IMG.renovation], breakImage: IMG.doors },
  { slug: 'flooring', label: 'Flooring', scene: IMG.woodFloor, before: IMG.drywallWork, after: IMG.flooring, process: [IMG.framing, IMG.woodFloor, IMG.flooring], materials: [IMG.woodFloor, IMG.flooring, IMG.trim], gallery: [IMG.woodFloor, IMG.flooring, IMG.kitchenWarm, IMG.renovation], breakImage: IMG.woodFloor },
  { slug: 'tile-installation', label: 'Tile installation', scene: IMG.tileDetail, before: IMG.framing, after: IMG.bathShower, process: [IMG.framing, IMG.tileDetail, IMG.bathShower], materials: [IMG.tileDetail, IMG.stone, IMG.bathVanity], gallery: [IMG.tileDetail, IMG.bathShower, IMG.bathVanity, IMG.kitchenDetail], breakImage: IMG.bathShower },
  { slug: 'outdoor-remodeling', label: 'Outdoor remodeling', scene: IMG.outdoor, before: IMG.patio, after: IMG.outdoor, process: [IMG.framing, IMG.patio, IMG.pergola], materials: [IMG.patio, IMG.deck, IMG.pergola], gallery: [IMG.outdoor, IMG.patio, IMG.pergola, IMG.deck], breakImage: IMG.outdoor },
  { slug: 'patio-remodeling', label: 'Patio remodeling', scene: IMG.patio, before: IMG.drywallWork, after: IMG.patio, process: [IMG.framing, IMG.patio, IMG.outdoor], materials: [IMG.patio, IMG.stone, IMG.deck], gallery: [IMG.patio, IMG.outdoor, IMG.pergola, IMG.deck], breakImage: IMG.patio },
  { slug: 'deck-construction', label: 'Deck construction', scene: IMG.deck, before: IMG.framing, after: IMG.deck, process: [IMG.framing, IMG.deck, IMG.pergola], materials: [IMG.deck, IMG.hardware, IMG.outdoor], gallery: [IMG.deck, IMG.outdoor, IMG.pergola, IMG.patio], breakImage: IMG.deck },
  { slug: 'trim-finish-carpentry', label: 'Trim and finish carpentry', scene: IMG.trim, before: IMG.drywallWork, after: IMG.trim, process: [IMG.carpentry, IMG.trim, IMG.paintPrep], materials: [IMG.trim, IMG.carpentry, IMG.hardware], gallery: [IMG.trim, IMG.carpentry, IMG.doors, IMG.renovation], breakImage: IMG.trim },
  { slug: 'cabinet-installation', label: 'Cabinet installation', scene: IMG.cabinet, before: IMG.framing, after: IMG.cabinet, process: [IMG.carpentry, IMG.cabinet, IMG.hardware], materials: [IMG.cabinet, IMG.hardware, IMG.kitchenDetail], gallery: [IMG.cabinet, IMG.kitchenWarm, IMG.kitchenDetail, IMG.hardware], breakImage: IMG.cabinet },
  { slug: 'closet-systems', label: 'Closet systems', scene: IMG.closet, before: IMG.framing, after: IMG.closet, process: [IMG.carpentry, IMG.cabinet, IMG.lighting], materials: [IMG.closet, IMG.hardware, IMG.cabinet], gallery: [IMG.closet, IMG.cabinet, IMG.lighting, IMG.trim], breakImage: IMG.closet },
  { slug: 'framing', label: 'Framing', scene: IMG.framing, before: IMG.drywallWork, after: IMG.framing, process: [IMG.framing, IMG.beam, IMG.windows], materials: [IMG.framing, IMG.hardware, IMG.carpentry], gallery: [IMG.framing, IMG.beam, IMG.windows, IMG.doors], breakImage: IMG.framing },
  { slug: 'custom-carpentry', label: 'Custom carpentry', scene: IMG.carpentry, before: IMG.drywallWork, after: IMG.carpentry, process: [IMG.carpentry, IMG.trim, IMG.cabinet], materials: [IMG.carpentry, IMG.hardware, IMG.trim], gallery: [IMG.carpentry, IMG.trim, IMG.cabinet, IMG.closet], breakImage: IMG.carpentry },
  { slug: 'lighting-installation', label: 'Lighting installation', scene: IMG.lighting, before: IMG.framing, after: IMG.lighting, process: [IMG.framing, IMG.lighting, IMG.kitchenWarm], materials: [IMG.lighting, IMG.hardware, IMG.accent], gallery: [IMG.lighting, IMG.kitchenWarm, IMG.bathVanity, IMG.accent], breakImage: IMG.lighting },
  { slug: 'accent-walls', label: 'Accent walls', scene: IMG.accent, before: IMG.paintPrep, after: IMG.accent, process: [IMG.drywallWork, IMG.trim, IMG.accent], materials: [IMG.accent, IMG.trim, IMG.paintPrep], gallery: [IMG.accent, IMG.trim, IMG.renovation, IMG.lighting], breakImage: IMG.accent },
  { slug: 'siding-repair', label: 'Siding repair', scene: IMG.siding, before: IMG.drywallWork, after: IMG.outdoor, process: [IMG.framing, IMG.siding, IMG.paintExterior], materials: [IMG.siding, IMG.paintExterior, IMG.trim], gallery: [IMG.siding, IMG.paintExterior, IMG.outdoor, IMG.doors], breakImage: IMG.outdoor },
  { slug: 'fence-installation', label: 'Fence installation', scene: IMG.fence, before: IMG.framing, after: IMG.fence, process: [IMG.framing, IMG.fence, IMG.outdoor], materials: [IMG.fence, IMG.hardware, IMG.deck], gallery: [IMG.fence, IMG.outdoor, IMG.patio, IMG.pergola], breakImage: IMG.fence },
  { slug: 'pergolas', label: 'Pergolas', scene: IMG.pergola, before: IMG.patio, after: IMG.pergola, process: [IMG.framing, IMG.carpentry, IMG.pergola], materials: [IMG.pergola, IMG.carpentry, IMG.hardware], gallery: [IMG.pergola, IMG.patio, IMG.outdoor, IMG.deck], breakImage: IMG.pergola },
  { slug: 'home-renovations', label: 'Home renovations', scene: IMG.renovation, before: IMG.drywallWork, after: IMG.renovation, process: [IMG.framing, IMG.carpentry, IMG.kitchenWarm], materials: [IMG.trim, IMG.kitchenDetail, IMG.woodFloor], gallery: [IMG.renovation, IMG.kitchenWarm, IMG.bathVanity, IMG.outdoor], breakImage: IMG.renovation },
  { slug: 'garage-remodeling', label: 'Garage remodeling', scene: IMG.garage, before: IMG.framing, after: IMG.garage, process: [IMG.framing, IMG.flooring, IMG.cabinet], materials: [IMG.flooring, IMG.hardware, IMG.cabinet], gallery: [IMG.garage, IMG.flooring, IMG.cabinet, IMG.lighting], breakImage: IMG.garage },
  { slug: 'commercial-remodeling', label: 'Commercial remodeling', scene: IMG.commercial, before: IMG.framing, after: IMG.commercial, process: [IMG.framing, IMG.lighting, IMG.flooring], materials: [IMG.flooring, IMG.lighting, IMG.hardware], gallery: [IMG.commercial, IMG.framing, IMG.lighting, IMG.flooring], breakImage: IMG.commercial },
];

const image = (src: string, alt: string, aspect: VisualAspect = 'wide'): ServiceVisualImage => ({
  src,
  alt,
  aspect,
});

const serviceAltSubject = (label: string) => label.toLowerCase();

const processAlt = (label: string, stage: string) =>
  `${label} ${stage} for a Houston-area remodeling project.`;

const detailAlt = (label: string, index: number) =>
  `${label} detail showing ${['material texture', 'hardware or finish selection', 'trim and transition work'][index]} in a Houston-area remodel.`;

const galleryAlt = (label: string, index: number) =>
  `${label} example showing ${['finished layout', 'material coordination', 'craftsmanship detail', 'completed room or outdoor space'][index]} for Houston homeowners.`;

export const SERVICE_VISUAL_STORIES: ServiceVisualStory[] = profiles.map((profile) => ({
  slug: profile.slug,
  story: {
    eyebrow: 'Visual project story',
    title: `${profile.label} ${profile.label.endsWith('s') ? 'that feel' : 'that feels'} lived in, not staged.`,
    body: `The visual direction for this page pairs finished scenes for ${profile.label.toLowerCase()} with process and detail imagery, so homeowners see the result and the workmanship behind it.`,
    image: image(
      profile.scene,
      profile.slug === 'kitchen-remodeling'
        ? 'Large kitchen remodel with island, wood cabinetry, stone counters, and open layout.'
        : `${profile.label} result in a warm, believable Houston-area home.`
    ),
    notes: {
      placement: 'Placed after the opening detail copy to move the page from explanation into a visual project narrative.',
      emotionalImpact: 'Helps homeowners picture the daily-life improvement before they evaluate the technical scope.',
      conversionValue: 'Keeps visitors engaged long enough to trust the crew, the process, and the consultation CTA.',
      authenticity: 'Uses believable residential scale, warm-climate architecture, and practical jobsite details.',
    },
  },
  comparison: {
    eyebrow: 'Before and after opportunity',
    title: `From problem condition to finished work.`,
    before: image(profile.before, `Existing condition before ${serviceAltSubject(profile.label)} work in a Houston-area home.`),
    after: image(profile.after, `Finished ${serviceAltSubject(profile.label)} work by Nova Home Remodeling and Design.`),
    caption: 'Recommended as a real project slider once Nova has matching before and after photography. Until then, this section establishes the transformation story and crop strategy.',
  },
  process: {
    eyebrow: 'How the work looks',
    title: `The build process behind this work.`,
    items: profile.process.map((src, index) => ({
      title: ['Prepare', 'Install', 'Finish'][index],
      body: [
        'The page shows the condition, protection, and layout work that happens before finish materials appear.',
        'Mid-project imagery makes the company feel real and communicates skill without overexplaining it.',
        'Finish-stage visuals connect the technical work to the polished result homeowners are buying.',
      ][index],
      image: image(src, processAlt(profile.label, ['preparation', 'installation', 'finish work'][index])),
    })),
  },
  materials: {
    eyebrow: 'Material closeups',
    title: `Details that make the work feel careful and complete.`,
    images: profile.materials.map((src, index) =>
      image(src, detailAlt(profile.label, index), index === 1 ? 'square' : 'portrait')
    ),
  },
  gallery: {
    eyebrow: 'Micro gallery',
    title: `A tighter look at ${profile.label.toLowerCase()} possibilities.`,
    images: profile.gallery.map((src, index) =>
      image(src, galleryAlt(profile.label, index), index % 2 === 0 ? 'wide' : 'square')
    ),
  },
  visualBreak: {
    image: image(profile.breakImage, `Finished ${profile.label.toLowerCase()} scene in a Houston-area home.`),
    kicker: 'Built for Houston homes',
    title: `${profile.label} should look good and make daily life easier.`,
    body: 'The visual pacing shifts from proof to aspiration here, giving homeowners one more clear picture of what the project can feel like before they reach the decision points.',
  },
}));

export function findServiceVisualStory(slug: string) {
  return SERVICE_VISUAL_STORIES.find((story) => story.slug === slug);
}
