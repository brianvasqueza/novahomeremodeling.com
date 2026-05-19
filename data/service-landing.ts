import type { ServicePageData } from './service-pages';

export type ServiceLandingContent = {
  seoTitle: string;
  seoDescription: string;
  problem: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    reassurance: string;
    proofPoints: { label: string; value: string }[];
  };
  transformation: {
    eyebrow: string;
    title: string;
    before: string;
    after: string;
    outcomes: string[];
  };
  craft: {
    eyebrow: string;
    title: string;
    intro: string;
    items: { title: string; body: string }[];
  };
  local: {
    eyebrow: string;
    title: string;
    body: string;
    neighborhoods: string[];
    note: string;
  };
  consultation: {
    eyebrow: string;
    title: string;
    body: string;
    steps: string[];
  };
  authorityLinks: {
    label: string;
    href: string;
    body: string;
  }[];
};

type LandingSeed = Omit<ServiceLandingContent, 'seoTitle' | 'seoDescription' | 'authorityLinks'> & {
  seoTitle?: string;
  seoDescription?: string;
  authorityLinks?: ServiceLandingContent['authorityLinks'];
};

const sharedAuthorityLinks: ServiceLandingContent['authorityLinks'] = [
  {
    label: 'Review the remodeling process',
    href: '/#process',
    body: 'See how Nova moves from feasibility, scope, and material selections into construction.',
  },
  {
    label: 'Study recent project work',
    href: '/#work',
    body: 'Look through finished spaces, material direction, and the level of detail expected on site.',
  },
  {
    label: 'Start a project conversation',
    href: '#contact',
    body: 'Send the basic details and we will respond with the right next step for the scope.',
  },
];

const categoryDefaults: Record<ServicePageData['category'], LandingSeed> = {
  interior: {
    problem: {
      eyebrow: 'Homeowner concerns',
      title: 'Interior work has to feel calm long before it looks finished.',
      paragraphs: [
        'Most interior remodeling anxiety comes from the unknowns: how long the room will be unusable, whether the finish work will line up, and whether the house will feel protected while construction is happening around daily life.',
        'Nova plans interior scopes around sequence, dust control, material lead times, and the small details that make a finished room feel intentional rather than assembled in a hurry.',
      ],
      reassurance: 'The goal is a room that feels resolved, not merely updated. We discuss the livability plan, protection plan, and finish standard before work begins.',
      proofPoints: [
        { label: 'Planning lens', value: 'Layout, finishes, protection' },
        { label: 'Houston factor', value: 'Humidity-aware material choices' },
        { label: 'Finish review', value: 'Punch work before handoff' },
      ],
    },
    transformation: {
      eyebrow: 'What changes',
      title: 'From worn or disconnected rooms to spaces that support the way you live.',
      before: 'Many Houston interiors have good bones but dated finishes, poor light, uneven surfaces, or layouts that no longer match how the family uses the home.',
      after: 'The right interior remodel brings structure back to the room: cleaner sightlines, better transitions, durable materials, and finish work that quietly raises the quality of the whole house.',
      outcomes: ['Cleaner room-to-room transitions', 'More durable daily-use finishes', 'A calmer, more considered interior'],
    },
    craft: {
      eyebrow: 'Materials and craft',
      title: 'The finish only works when the layers beneath it are correct.',
      intro: 'Interior remodeling is won in prep: substrate repair, trim alignment, layout marks, acclimation, and the order in which each trade touches the room.',
      items: [
        { title: 'Surface preparation', body: 'Walls, floors, and openings are assessed before finish work so uneven framing or damaged substrate does not telegraph through the final product.' },
        { title: 'Finish coordination', body: 'Paint, millwork, tile, flooring, and lighting are sequenced together so one beautiful decision does not create a problem for the next trade.' },
        { title: 'Protection standards', body: 'Floors, HVAC returns, adjacent rooms, and furniture paths are protected with the same seriousness as the work area itself.' },
      ],
    },
    local: {
      eyebrow: 'Houston homes',
      title: 'Built for the realities of Houston living.',
      body: 'Interior work in Houston has to account for high humidity, busy family schedules, slab-on-grade conditions, and a wide mix of home ages from Heights bungalows to newer west-side construction.',
      neighborhoods: ['Houston', 'The Heights', 'River Oaks', 'Memorial', 'Montrose', 'Katy'],
      note: 'Local relevance is handled through real construction context, not city-name repetition.',
    },
    consultation: {
      eyebrow: 'Consultation',
      title: 'A measured conversation before a measured scope.',
      body: 'We start by understanding the room, the frustrations, the desired finish level, and the constraints. From there, Nova can recommend the right scope instead of forcing a package onto the house.',
      steps: ['Walk the room and document concerns', 'Discuss material direction and timeline', 'Define a realistic scope before pricing'],
    },
  },
  exterior: {
    problem: {
      eyebrow: 'Homeowner concerns',
      title: 'Exterior remodeling has to stand up to Houston weather.',
      paragraphs: [
        'Outside work carries a different kind of pressure. The finished result needs to look good from the curb, but it also has to manage heat, sun exposure, drainage, moisture, and the long seasons where Houston outdoor spaces are used hard.',
        'Nova approaches exterior projects as construction first and finish work second, because the details behind the surface decide how long the surface stays beautiful.',
      ],
      reassurance: 'We look at water movement, fastening, coatings, framing, and transitions before proposing finish direction.',
      proofPoints: [
        { label: 'Planning lens', value: 'Weather, drainage, structure' },
        { label: 'Houston factor', value: 'Heat, humidity, UV exposure' },
        { label: 'Finish review', value: 'Exterior envelope checked' },
      ],
    },
    transformation: {
      eyebrow: 'What changes',
      title: 'From exposed or underused exterior space to a home that feels composed outside.',
      before: 'Many exterior projects begin with fading finishes, tired outdoor areas, poor shade, or details that were never built for Houston moisture and heat.',
      after: 'A careful exterior remodel gives the home a stronger presence and makes outdoor square footage easier to use, maintain, and enjoy.',
      outcomes: ['Better curb presence', 'More usable outdoor space', 'Materials selected for local conditions'],
    },
    craft: {
      eyebrow: 'Materials and craft',
      title: 'Exterior quality depends on the weatherproofing you do not see.',
      intro: 'The visible finish is only the last layer. Fasteners, flashing, slope, caulk, coatings, and substrate repair determine how exterior work performs.',
      items: [
        { title: 'Moisture control', body: 'We look closely at penetrations, seams, thresholds, and slope so water is directed away from vulnerable parts of the house.' },
        { title: 'Heat-ready materials', body: 'Paint systems, decking, trim, and exterior assemblies are selected with Houston sun and humidity in mind.' },
        { title: 'Clean tie-ins', body: 'Transitions to the existing home are planned carefully so new work feels integrated, not attached as an afterthought.' },
      ],
    },
    local: {
      eyebrow: 'Houston exteriors',
      title: 'Designed around shade, storms, and year-round outdoor use.',
      body: 'Houston homeowners ask a lot from exterior spaces: weekend gatherings, summer shade, storm-season durability, and curb appeal that still feels refined.',
      neighborhoods: ['Houston', 'Cypress', 'Katy', 'Sugar Land', 'Pearland', 'The Woodlands'],
      note: 'We discuss HOA expectations and permitting where the scope requires it.',
    },
    consultation: {
      eyebrow: 'Consultation',
      title: 'A site walk before a scope.',
      body: 'Exterior projects need eyes on the property. We review exposure, access, drainage, tie-ins, and material goals before narrowing the work into a responsible plan.',
      steps: ['Walk the exterior and document existing conditions', 'Discuss durability, shade, and finish goals', 'Confirm scope, access, and approval path'],
    },
  },
  structural: {
    problem: {
      eyebrow: 'Homeowner concerns',
      title: 'Structural work should make the home feel safer, not more uncertain.',
      paragraphs: [
        'When a remodel touches framing, openings, beams, windows, or doors, the margin for improvisation disappears. The finish may be beautiful, but the structure has to be understood first.',
        'Nova treats structural scopes with a documentation-first mindset: measurements, site conditions, coordination, and the right professional input before walls are opened or loads are changed.',
      ],
      reassurance: 'If engineering or permitting is appropriate, we build that into the process rather than treating it as a surprise later.',
      proofPoints: [
        { label: 'Planning lens', value: 'Loads, openings, tie-ins' },
        { label: 'Houston factor', value: 'Slab homes and mixed framing ages' },
        { label: 'Finish review', value: 'Structure before surface' },
      ],
    },
    transformation: {
      eyebrow: 'What changes',
      title: 'From limiting conditions to cleaner, stronger architecture.',
      before: 'Structural issues often show up as awkward openings, dated room separations, failing doors or windows, sagging assemblies, or layouts that cannot improve without deeper work.',
      after: 'Handled correctly, structural remodeling makes the next layer possible: open sightlines, reliable openings, proper transitions, and finishes that sit on a sound foundation.',
      outcomes: ['Better room flow', 'Safer structural transitions', 'A stronger base for finish work'],
    },
    craft: {
      eyebrow: 'Materials and craft',
      title: 'Precision matters most where the wall hides the work.',
      intro: 'Structural remodeling is about sequence, measurement, and accountability. The hidden work deserves more care, not less.',
      items: [
        { title: 'Field verification', body: 'Existing conditions are checked on site, because older Houston homes rarely match drawings perfectly.' },
        { title: 'Clean coordination', body: 'Structural, electrical, drywall, trim, and finish scopes are coordinated so the finished result does not reveal the complexity behind it.' },
        { title: 'Responsible documentation', body: 'When the work calls for drawings, engineering, or permits, we plan for that path early.' },
      ],
    },
    local: {
      eyebrow: 'Houston construction',
      title: 'Respecting the way Houston homes are actually built.',
      body: 'Structural remodels around Houston may involve slab-on-grade foundations, older framing, additions from different eras, and neighborhoods with different approval expectations.',
      neighborhoods: ['Houston', 'The Heights', 'Meyerland', 'Spring', 'The Woodlands', 'Sugar Land'],
      note: 'The right path depends on the house, not a generic checklist.',
    },
    consultation: {
      eyebrow: 'Consultation',
      title: 'A careful review before anyone opens a wall.',
      body: 'We begin by identifying what the project is asking the house to do, then decide what needs to be measured, documented, engineered, or permitted.',
      steps: ['Review existing conditions and desired change', 'Identify structural and permit considerations', 'Build a sequence that protects the home'],
    },
  },
  'whole-home': {
    problem: {
      eyebrow: 'Homeowner concerns',
      title: 'A major remodel needs one accountable plan.',
      paragraphs: [
        'Whole-home and multi-room remodeling can become stressful when the work is fragmented: one trade waiting on another, selections made too late, budget decisions scattered across too many conversations.',
        'Nova brings the scope into one clear process so the homeowner understands what is happening, why it matters, and what decisions need to be made before construction starts.',
      ],
      reassurance: 'The value is not only in the finished rooms. It is in the calm created by a plan that respects budget, schedule, sequencing, and daily life.',
      proofPoints: [
        { label: 'Planning lens', value: 'Scope, sequence, selections' },
        { label: 'Houston factor', value: 'Permits, climate, neighborhood context' },
        { label: 'Finish review', value: 'One standard across the home' },
      ],
    },
    transformation: {
      eyebrow: 'What changes',
      title: 'From a collection of problems to a home that finally feels considered.',
      before: 'Large remodels often begin with a list: kitchen, bath, floors, paint, lighting, storage, exterior work. The real need is usually cohesion.',
      after: 'A successful renovation makes the home feel intentional from room to room, with materials, layouts, lighting, and craftsmanship working together instead of competing.',
      outcomes: ['Cohesive room-to-room design', 'Clearer scope and decision timing', 'A home ready for the next decade of living'],
    },
    craft: {
      eyebrow: 'Materials and craft',
      title: 'Consistency is the luxury homeowners feel every day.',
      intro: 'In larger remodels, craft is not one dramatic moment. It is the repeated standard: aligned reveals, thoughtful transitions, durable finishes, and rooms that relate to each other.',
      items: [
        { title: 'Scope control', body: 'We define what is included, what is adjacent, and what should wait so the project stays intentional.' },
        { title: 'Material continuity', body: 'Flooring, cabinetry, paint, hardware, tile, and lighting are selected with the whole home in mind.' },
        { title: 'Construction sequencing', body: 'Demo, rough-in, inspections, finishes, and punch work are ordered to reduce disruption and protect completed rooms.' },
      ],
    },
    local: {
      eyebrow: 'Houston remodeling',
      title: 'Whole-home work shaped by neighborhood, permitting, and lifestyle.',
      body: 'A renovation in River Oaks has different constraints than a Katy family home or a Meyerland mid-century property. The work should respect the architecture, the approval path, and the way the homeowner lives.',
      neighborhoods: ['Houston', 'River Oaks', 'Memorial', 'Meyerland', 'Katy', 'Sugar Land'],
      note: 'Local authority comes from understanding project conditions, not repeating location phrases.',
    },
    consultation: {
      eyebrow: 'Consultation',
      title: 'A serious scope deserves a serious first conversation.',
      body: 'We use the first conversation to understand priorities, constraints, finish expectations, and whether the project should be phased or handled as one integrated renovation.',
      steps: ['Map the full project wish list', 'Separate must-haves from future phases', 'Build a realistic path to feasibility and scope'],
    },
  },
};

const landingOverrides: Record<string, Partial<LandingSeed>> = {
  'kitchen-remodeling': {
    seoTitle: 'Kitchen Remodeling in Houston, TX',
    seoDescription: 'Premium kitchen remodeling in Houston with layout planning, custom cabinetry, stone surfaces, tile, lighting, and a careful construction process.',
    problem: {
      eyebrow: 'Kitchen concerns',
      title: 'A kitchen remodel should solve the daily friction, not just replace the finishes.',
      paragraphs: [
        'Houston homeowners usually call when the kitchen has stopped supporting the house: the island is the wrong size, the pantry is shallow, the lighting is flat, or the cabinet layout makes every morning feel crowded.',
        'We start with how the kitchen is used, then move into cabinet drawings, appliance clearances, stone selection, tile layout, lighting, ventilation, and the construction sequence that gets the room built without guesswork.',
      ],
      reassurance: 'No cabinet package should be ordered before the room is measured, the appliances are known, and the daily workflow is understood.',
      proofPoints: [
        { label: 'Design focus', value: 'Layout, storage, lighting' },
        { label: 'Craft focus', value: 'Cabinetry, tile, stone' },
        { label: 'Houston factor', value: 'Family kitchens and resale quality' },
      ],
    },
    transformation: {
      eyebrow: 'Kitchen transformation',
      title: 'From crowded work zone to the room that carries the home.',
      before: 'The typical pre-remodel kitchen has dead corners, shallow storage, weak task lighting, and finishes chosen in separate decades.',
      after: 'A finished Nova kitchen feels measured: better prep space, calmer storage, durable counters, integrated lighting, and cabinetry that looks like it belongs to the architecture.',
      outcomes: ['A more functional cooking and gathering layout', 'Custom storage planned around real use', 'Finishes that feel refined without feeling delicate'],
    },
    craft: {
      eyebrow: 'Cabinetry, stone, tile',
      title: 'The best kitchens are built in the details homeowners touch every day.',
      intro: 'Door swings, drawer stacks, appliance panels, crown returns, slab overhangs, tile terminations, and lighting temperature all matter because the kitchen is used constantly.',
      items: [
        { title: 'Shop-drawn cabinetry', body: 'Cabinet elevations are reviewed before production so storage, proportions, and clearances are clear.' },
        { title: 'Counter and backsplash coordination', body: 'Stone slabs, edge profiles, outlets, and backsplash heights are planned together to avoid awkward field decisions.' },
        { title: 'Lighting that works', body: 'Task, ambient, and accent lighting are layered so the room looks warm at night and functions properly during prep.' },
      ],
    },
  },
  'bathroom-remodeling': {
    seoTitle: 'Bathroom Remodeling in Houston, TX',
    seoDescription: 'Houston bathroom remodeling with waterproofing, plumbing coordination, tile layout, glass, lighting, and premium finish detail for primary and secondary baths.',
    problem: {
      eyebrow: 'Bathroom concerns',
      title: 'A beautiful bathroom still has to be a disciplined wet room.',
      paragraphs: [
        'Most bathroom remodels fail in places the homeowner cannot see: behind tile, under the shower floor, at the valve wall, or where a rushed layout forces a strange niche or glass panel.',
        'Nova treats the bathroom as a technical room first. Waterproofing, slope, plumbing, ventilation, tile layout, heated floors, glass templates, and finish details are coordinated before the room is dressed up.',
      ],
      reassurance: 'The calm feeling of a finished bath begins with waterproofing, layout, and inspections handled in the right order.',
      proofPoints: [
        { label: 'Design focus', value: 'Plan, storage, lighting' },
        { label: 'Craft focus', value: 'Waterproofing and tile' },
        { label: 'Houston factor', value: 'Humidity and ventilation' },
      ],
    },
    transformation: {
      eyebrow: 'Bath transformation',
      title: 'From cramped and dated to a room that starts and ends the day well.',
      before: 'Common issues include unused tubs, low vanities, poor ventilation, builder-grade tile, dim lighting, and awkward shower proportions.',
      after: 'A considered bathroom remodel brings better storage, cleaner tile lines, reliable waterproofing, glass that fits, and lighting that feels flattering instead of clinical.',
      outcomes: ['Improved shower and vanity function', 'Waterproof assemblies built to last', 'A calmer primary or guest bath experience'],
    },
  },
  flooring: {
    seoTitle: 'Flooring Installation in Houston, TX',
    seoDescription: 'Premium flooring installation in Houston with substrate prep, hardwood, engineered wood, tile, transitions, and climate-aware material planning.',
    problem: {
      eyebrow: 'Flooring concerns',
      title: 'The floor sets the tone for every room, and it exposes every shortcut.',
      paragraphs: [
        'Uneven slabs, poor transitions, hollow tile, cupping wood, and mismatched thresholds can make an otherwise strong remodel feel unfinished.',
        'Nova plans flooring around substrate prep, Houston humidity, room transitions, door clearances, baseboards, stair details, and the way the material will age under real use.',
      ],
      reassurance: 'A premium floor is not just the product selected. It is the preparation beneath it and the transitions around it.',
      proofPoints: [
        { label: 'Design focus', value: 'Continuity and transitions' },
        { label: 'Craft focus', value: 'Substrate preparation' },
        { label: 'Houston factor', value: 'Humidity and slab conditions' },
      ],
    },
  },
  'cabinet-installation': {
    seoTitle: 'Cabinet Installation in Houston, TX',
    seoDescription: 'Houston cabinet installation and custom cabinetry coordination for kitchens, baths, built-ins, storage, hardware, and finish carpentry.',
    problem: {
      eyebrow: 'Cabinetry concerns',
      title: 'Cabinetry has to work in inches, not intentions.',
      paragraphs: [
        'Cabinet problems show up in everyday annoyance: a drawer that hits trim, filler that looks accidental, a refrigerator panel that never sits right, or storage that misses the way the room is used.',
        'Nova treats cabinetry as part of the architecture. We verify measurements, clearances, hardware, appliance specs, trim, crown, and surrounding finishes before installation begins.',
      ],
      reassurance: 'The best cabinet work feels quiet because every reveal, pull, panel, and filler has been thought through.',
      proofPoints: [
        { label: 'Design focus', value: 'Storage and proportions' },
        { label: 'Craft focus', value: 'Reveals and hardware' },
        { label: 'Houston factor', value: 'Built-ins for real family use' },
      ],
    },
  },
  'home-renovations': {
    seoTitle: 'Whole Home Remodeling in Houston, TX',
    seoDescription: 'Whole-home remodeling in Houston with cohesive planning for kitchens, bathrooms, flooring, cabinetry, paint, lighting, and major renovations.',
  },
  'outdoor-remodeling': {
    seoTitle: 'Outdoor Living Remodeling in Houston, TX',
    seoDescription: 'Houston outdoor living remodeling for covered patios, exterior upgrades, shade, materials, drainage, and year-round entertaining spaces.',
  },
  'patio-remodeling': {
    seoTitle: 'Patio Remodeling in Houston, TX',
    seoDescription: 'Premium patio remodeling in Houston with shade planning, durable materials, drainage, lighting, and outdoor living details.',
  },
  'deck-construction': {
    seoTitle: 'Deck Construction in Houston, TX',
    seoDescription: 'Deck construction in Houston with durable framing, material selection, exterior detailing, and outdoor living coordination.',
  },
  'custom-carpentry': {
    seoTitle: 'Custom Carpentry in Houston, TX',
    seoDescription: 'Custom carpentry in Houston for built-ins, millwork, trim, shelving, architectural details, and premium interior remodeling.',
  },
  'interior-painting': {
    seoTitle: 'Interior Painting in Houston, TX',
    seoDescription: 'Premium interior painting in Houston with surface preparation, trim detail, designer color coordination, and durable finish systems.',
  },
  'exterior-painting': {
    seoTitle: 'Exterior Painting in Houston, TX',
    seoDescription: 'Exterior painting in Houston with surface prep, primer systems, caulking, weather-aware coatings, and premium curb appeal.',
  },
};

function mergeLandingContent(service: ServicePageData): ServiceLandingContent {
  const base = categoryDefaults[service.category];
  const override = landingOverrides[service.slug] ?? {};
  const merged = {
    ...base,
    ...override,
    problem: { ...base.problem, ...override.problem },
    transformation: { ...base.transformation, ...override.transformation },
    craft: { ...base.craft, ...override.craft },
    local: { ...base.local, ...override.local },
    consultation: { ...base.consultation, ...override.consultation },
  };

  return {
    ...merged,
    seoTitle: merged.seoTitle ?? `${service.title} in Houston, TX`,
    seoDescription:
      merged.seoDescription ??
      `${service.title} in Houston with careful planning, durable materials, and a premium remodeling process for homes across the area.`,
    authorityLinks: merged.authorityLinks ?? sharedAuthorityLinks,
  };
}

export function getServiceLandingContent(service: ServicePageData): ServiceLandingContent {
  return mergeLandingContent(service);
}
