import type { ServicePageData } from './service-pages';

export type ServiceLandingContent = {
  seoTitle: string;
  seoDescription: string;
  heroTitle: string;
  heroDescription: string;
  imageAlt: string;
  includes: {
    eyebrow: string;
    title: string;
    items: string[];
  };
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

type LandingSeed = Omit<
  ServiceLandingContent,
  'seoTitle' | 'seoDescription' | 'heroTitle' | 'heroDescription' | 'imageAlt' | 'includes' | 'authorityLinks'
> & {
  seoTitle?: string;
  seoDescription?: string;
  heroTitle?: string;
  heroDescription?: string;
  imageAlt?: string;
  includes?: ServiceLandingContent['includes'];
  authorityLinks?: ServiceLandingContent['authorityLinks'];
};

const sharedAuthorityLinks: ServiceLandingContent['authorityLinks'] = [
  {
    label: 'Review the remodeling process',
    href: '/#process',
    body: 'See how Nova moves from feasibility, scope, and material selections into construction.',
  },
  {
    label: 'Browse finished projects',
    href: '/#work',
    body: 'See how completed rooms come together — materials, layout decisions, and the level of finish we hold across every project.',
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
      reassurance: 'The goal is a room that feels resolved, not merely updated. We discuss how the home stays usable during construction, how finished work is protected, and what the finish standard looks like before the first day on site.',
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
      note: 'Most of our interior work is in homes within twenty minutes of the 610 loop, though we travel for the right scope.',
    },
    consultation: {
      eyebrow: 'Consultation',
      title: 'A measured conversation before a measured scope.',
      body: 'We start by understanding the room, the frustrations, the desired finish level, and the constraints. From there, we can recommend the right scope rather than fitting a standard package onto a house that deserves better.',
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
      reassurance: 'If engineering or permitting is required, we plan for it from the start — not as something that surfaces mid-construction and disrupts the schedule.',
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
      title: 'Consistency is what homeowners feel every day.',
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
      note: 'Permit paths, material lead times, and HOA requirements vary significantly across Houston neighborhoods. We know the differences.',
    },
    consultation: {
      eyebrow: 'Consultation',
      title: 'A serious scope deserves a careful first conversation.',
      body: 'We use the first conversation to understand priorities, finish expectations, budget, and whether the project works best all at once or in a planned sequence. The goal is a clear scope before any cost is discussed.',
      steps: ['Map the full project wish list without editing', 'Separate what is essential from what can wait', 'Build a realistic scope, sequence, and budget framework together'],
    },
  },
};

const landingOverrides: Record<string, Partial<LandingSeed>> = {
  'kitchen-remodeling': {
    seoTitle: 'Kitchen Remodeling in Houston, TX',
    seoDescription: 'Kitchen remodeling in Houston for homeowners who want a better layout, custom cabinetry, durable surfaces, warm lighting, and a calmer construction process.',
    heroTitle: 'Kitchen Remodeling in Houston',
    heroDescription: 'A better kitchen should make daily life easier: clearer prep space, calmer storage, durable surfaces, warmer lighting, and a construction plan that is settled before demolition begins.',
    imageAlt: 'Modern Houston kitchen remodel with wood cabinets, large island, pendant lighting, and stone countertops.',
    includes: {
      eyebrow: 'Kitchen scope',
      title: 'Kitchen remodeling services planned around the way the home actually works.',
      items: [
        'Kitchen layout redesign and island planning',
        'Custom cabinetry, panels, hardware, and built-in storage',
        'Countertop, backsplash, lighting, flooring, and appliance coordination',
        'Demolition, rough-in coordination, finish carpentry, and final punch work',
      ],
    },
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
    seoDescription: 'Houston bathroom remodeling for primary suites, guest baths, and powder rooms with plumbing-first sequencing, waterproofing, tile, and careful finish detail.',
    heroTitle: 'Bathroom Remodeling in Houston',
    heroDescription: 'Primary suites, guest baths, and powder rooms — plumbing moved before tile is touched, waterproofing inspected, and every finish detail planned before construction begins.',
    imageAlt: 'Houston bathroom remodel with frameless glass shower, large-format tile, and detailed fixture work.',
    includes: {
      eyebrow: 'Bathroom scope',
      title: 'One coordinated scope — plumbing through final detail.',
      items: [
        'Primary bathroom, guest bath, and powder room remodeling',
        'Layout planning and plumbing rough-in before tile begins',
        'Three-step waterproofing system for showers and all wet areas',
        'Tile layout drawn to scale and dry-laid for review before setting',
        'Frameless glass templated after tile completion for a precise fit',
        'Vanity, lighting, mirror, and storage selection and installation',
        'Radiant heated floor systems under all stone and large-format tile',
        'Finish carpentry and final punch walkthrough',
      ],
    },
    problem: {
      eyebrow: 'Bathroom concerns',
      title: 'A beautiful bathroom still has to work as a disciplined wet room.',
      paragraphs: [
        'Most bathroom remodels look good for a year or two. The failures come later — a valve leaking behind tile, a drain that backs up, a niche that was never properly sloped.',
        'Nova treats the bathroom as a technical room first. Waterproofing, plumbing, ventilation, and tile layout are coordinated before any finish selection is made.',
      ],
      reassurance: 'The calm feeling of a finished bath begins with plumbing, waterproofing, and inspections done in the right order.',
      proofPoints: [
        { label: 'Design focus', value: 'Layout, storage, lighting' },
        { label: 'Craft focus', value: 'Waterproofing and tile' },
        { label: 'Houston factor', value: 'Humidity and ventilation' },
      ],
    },
    transformation: {
      eyebrow: 'Bath transformation',
      title: 'From cramped and dated to a room that starts and ends the day well.',
      before: 'Unused tubs, low vanities, builder-grade tile, poor ventilation, dim lighting, and shower proportions that were never right.',
      after: 'Better storage, cleaner tile lines, reliable waterproofing, glass that fits, and lighting that feels flattering instead of clinical.',
      outcomes: [
        'Shower and vanity function matched to how the room is actually used',
        'Waterproof assemblies built and inspected to last',
        'A calmer primary or guest bath from the first morning forward',
      ],
    },
    craft: {
      eyebrow: 'Materials and craft',
      title: 'The bathroom looks right because the technical layers were done right first.',
      intro: 'Tile, glass, and fixtures are the visible result. The real work is substrate preparation, slope, waterproofing, and a sequence that lets each trade do its best work.',
      items: [
        { title: 'Three-step waterproofing', body: 'Applied to shower floors, walls, and niches — each layer inspected before the next is added. Not a painted-on product. A system.' },
        { title: 'Full mortar bed and layout', body: 'Every floor gets a full mortar bed. Large-format tile is back-buttered and pressed. Grout joints are drawn to scale before material is ordered.' },
        { title: 'Glass templated last', body: 'Frameless enclosures are templated after tile and stone are complete — not from drawings. That single step is why they fit.' },
      ],
    },
  },
  flooring: {
    seoTitle: 'Flooring Installation in Houston, TX',
    seoDescription: 'Flooring installation in Houston with substrate prep, hardwood, engineered wood, tile, transitions, and climate-aware material planning.',
    heroTitle: 'Flooring Installation in Houston',
    heroDescription: 'Houston flooring installation with substrate prep, moisture checks, hardwood, engineered wood, tile, transitions, and material planning for humid Gulf Coast homes.',
    problem: {
      eyebrow: 'Flooring concerns',
      title: 'The floor sets the tone for every room, and it exposes every shortcut.',
      paragraphs: [
        'Uneven slabs, poor transitions, hollow tile, cupping wood, and mismatched thresholds can make an otherwise strong remodel feel unfinished.',
        'Nova plans flooring around substrate prep, Houston humidity, room transitions, door clearances, baseboards, stair details, and the way the material will age under real use.',
      ],
      reassurance: 'A durable floor is not just the product selected. It is the preparation beneath it and the transitions around it.',
      proofPoints: [
        { label: 'Design focus', value: 'Continuity and transitions' },
        { label: 'Craft focus', value: 'Substrate preparation' },
        { label: 'Houston factor', value: 'Humidity and slab conditions' },
      ],
    },
    transformation: {
      eyebrow: 'What the floor becomes',
      title: 'From worn or mismatched floors to a surface that sets the tone for every room above it.',
      before: 'Cupping hardwood, hollow tile, mismatched transitions between rooms, and a subfloor that squeaks because it was never corrected.',
      after: 'A properly acclimated, correctly installed floor that moves with Houston\'s seasons gracefully — flat, quiet, and consistent from room to room.',
      outcomes: ['Wood acclimated for two weeks in the actual installation space', 'Subfloor leveled and moisture-tested before any finish floor goes down', 'Transitions and thresholds detailed between rooms and at stairs'],
    },
  },
  'cabinet-installation': {
    seoTitle: 'Cabinet Installation in Houston, TX',
    seoDescription: 'Houston cabinet installation and custom cabinetry coordination for kitchens, baths, built-ins, storage, hardware, and finish carpentry.',
    heroTitle: 'Cabinet Installation in Houston',
    heroDescription: 'Cabinet installation and cabinetry coordination for Houston kitchens, bathrooms, built-ins, storage walls, hardware, appliance panels, and finish carpentry.',
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
    transformation: {
      eyebrow: 'What the room becomes',
      title: 'From cabinets that almost fit to storage that was made for the room.',
      before: 'Fillers that gap, appliance panels that never sit flush, and drawers that hit the trim — all signs that the room was measured after the cabinets were ordered.',
      after: 'Cabinetry drawn from the actual room, installed level regardless of floor or ceiling, with doors and drawers that operate correctly ten years from now.',
      outcomes: ['Every cabinet drawn from field measurements, not plan dimensions', 'Scribe molding cut to fit the wall, never caulked', 'Installation level regardless of whether the floor or ceiling is'],
    },
  },
  'home-renovations': {
    seoTitle: 'Whole Home Remodeling in Houston, TX',
    seoDescription: 'Whole-home remodeling in Houston with cohesive planning for kitchens, bathrooms, flooring, cabinetry, paint, lighting, and major renovations.',
    heroTitle: 'Whole Home Remodeling in Houston',
    heroDescription: 'Whole-home remodeling in Houston with cohesive planning across kitchens, bathrooms, flooring, cabinetry, paint, lighting, structural work, and finish details.',
  },
  'outdoor-remodeling': {
    seoTitle: 'Outdoor Remodeling in Houston, TX',
    seoDescription: 'Houston outdoor living remodeling for covered patios, exterior upgrades, shade, materials, drainage, and year-round entertaining spaces.',
    heroTitle: 'Outdoor Living Remodeling in Houston',
    heroDescription: 'Outdoor living remodeling in Houston for covered patios, shade, drainage, exterior materials, lighting, and year-round entertaining spaces.',
  },
  'patio-remodeling': {
    seoTitle: 'Patio Remodeling in Houston, TX',
    seoDescription: 'Patio remodeling in Houston with shade planning, durable materials, drainage, lighting, and outdoor living details.',
  },
  'deck-construction': {
    seoTitle: 'Deck Construction in Houston, TX',
    seoDescription: 'Deck construction in Houston with durable framing, material selection, exterior detailing, and outdoor living coordination.',
  },
  'custom-carpentry': {
    seoTitle: 'Custom Carpentry in Houston, TX',
    seoDescription: 'Custom carpentry in Houston for built-ins, millwork, trim, shelving, architectural details, and detailed interior remodeling.',
  },
  'interior-painting': {
    seoTitle: 'Interior Painting in Houston, TX',
    seoDescription: 'Interior painting in Houston with detailed prep, trim painting, wall repair, mineral and limewash finishes, and color planning before the first coat.',
    heroTitle: 'Interior Painting in Houston',
    heroDescription: 'Surface preparation done seriously. Trim painted before installation. Finishes that hold their color — and look right under morning light.',
    imageAlt: 'Houston interior painting project with freshly painted walls, trim, and modern neutral finishes.',
    includes: {
      eyebrow: 'Painting scope',
      title: 'One painting scope — prep through trim to final coat.',
      items: [
        'Wall painting with skim-coat or full surface preparation',
        'Ceiling painting with primer and durable finish coat',
        'Trim, baseboard, casing, and crown painted separately from walls',
        'Mineral paint, Roman clay, and limewash finishes on request',
        'Accent wall planning and application',
        'Cabinet painting and refinishing',
        'Drywall repair and texture matching before paint',
        'Color direction and finish selection guidance',
      ],
    },
    problem: {
      eyebrow: 'Paint problems',
      title: 'The walls are easy to see. The prep is what the paint will reveal.',
      paragraphs: [
        'Scuffed surfaces, faded colors, trim that reads yellow under daylight — Houston interiors age visually faster than the structure behind them.',
        'The rooms that feel clean after a repaint are the ones where the surface was taken seriously first: patching, skim coating, priming, and millwork caulked before color goes on.',
      ],
      reassurance: 'The difference between a paint job that holds for two years and one that lasts a decade is what happens before the first finish coat.',
      proofPoints: [
        { label: 'Prep standard', value: 'Skim coat and three sands minimum' },
        { label: 'Primer coats', value: 'Two full-coverage coats, inspected' },
        { label: 'Houston factor', value: 'High-humidity finish systems' },
      ],
    },
    transformation: {
      eyebrow: 'What changes',
      title: 'From scuffed and dated to rooms that feel bright, clean, and intentional.',
      before: 'Faded paint, scuffed walls, yellowing trim, and colors that no longer match how the home is used.',
      after: 'A repaint that makes the home feel finished again — consistent sheen, sharp trim lines, and walls that hold their color through Houston summers.',
      outcomes: [
        'Walls prepared to the level the finish demands — not just cleaned and rolled',
        'Trim painted separately for a clean junction that will not crack',
        'A color direction that reads well in both daylight and evening light',
      ],
    },
    craft: {
      eyebrow: 'Finishes and process',
      title: 'The paint is the last thing on the wall. The prep is what determines how it looks.',
      intro: 'Surface preparation, primer selection, sheen specification, and millwork sequencing determine how a paint job holds up — and how it reads under morning light a year later.',
      items: [
        { title: 'Skim coat, not filler', body: 'Walls receiving a high-sheen finish are skim-coated — a full thin layer of joint compound sanded flat. Spackle humps show up in any raking light.' },
        { title: 'Millwork painted before installation', body: 'Trim and casings are primed and painted before they go up, then touched up in place. The paint line will not crack at the junction.' },
        { title: 'Mineral and limewash on request', body: 'Roman clay, mineral paint, and traditional limewash — each applied to its specification, with proper cure time between coats.' },
      ],
    },
  },
  'exterior-painting': {
    seoTitle: 'Exterior Painting in Houston, TX',
    seoDescription: 'Exterior painting in Houston with oil-based primer on bare wood, elastomeric caulk at every seam, and climate-matched topcoats rated for Houston heat and humidity.',
    heroTitle: 'Exterior Painting in Houston',
    heroDescription: 'Prep is where an exterior paint job is won or lost. Oil primer on bare wood, sealed at every seam, and a topcoat system matched to Houston heat and humidity.',
    imageAlt: 'Freshly painted Houston home exterior with updated trim and modern neutral siding color.',
    includes: {
      eyebrow: 'Exterior painting scope',
      title: 'One exterior scope — prep through final coat.',
      items: [
        'Full home exterior painting — siding, trim, fascia, and soffit',
        'Surface cleaning, pressure-washing, and loose paint removal',
        'Oil-based primer on all bare and exposed wood',
        'Elastomeric caulk at windows, doors, and all penetrations',
        'Two-coat acrylic latex topcoat with mildewcide treatment',
        'Brick, stucco, and hardiplank siding painting',
        'Front door and garage door painting',
        'Color direction and exterior finish guidance',
      ],
    },
    problem: {
      eyebrow: 'Exterior paint concerns',
      title: 'Faded paint is visible. The prep failure underneath is not — until it is.',
      paragraphs: [
        'Houston heat, UV, and humidity put an exterior paint job through more than most climates. Paint fades, peels at trim edges, and lifts at any seam that was not properly sealed.',
        'Most exterior paint failures trace back to two moments: bare wood primed with latex instead of oil, and seams that were caulked after paint — or not at all.',
      ],
      reassurance: 'We prepare the surface as though it will be inspected before we paint. Because it will be.',
      proofPoints: [
        { label: 'Primer standard', value: 'Oil-based on all bare wood' },
        { label: 'Seam treatment', value: 'Elastomeric caulk, every penetration' },
        { label: 'Houston factor', value: 'UV and humidity-rated topcoats' },
      ],
    },
    transformation: {
      eyebrow: 'Curb appeal transformation',
      title: 'From faded and worn to a home that looks composed from the street.',
      before: 'Faded siding, peeling trim edges, chalky surfaces, and a color that has shifted after years in the Houston sun.',
      after: 'A fresh exterior that reads intentional from the curb — consistent color, sealed edges, and a topcoat system built to hold for a decade.',
      outcomes: [
        'A paint system that holds through Houston heat cycles and summer humidity',
        'Clean trim lines and sealed transitions that do not peel within two years',
        'A color direction that looks right in both morning and afternoon light',
      ],
    },
    craft: {
      eyebrow: 'Materials and process',
      title: 'An exterior paint job is a weatherproofing job. The color is the result.',
      intro: 'The topcoat is the last step. Surface preparation, primer type, caulk placement, and product selection for Houston\'s climate decide whether the paint holds for four years or fourteen.',
      items: [
        { title: 'Oil primer on bare wood', body: 'Any exposed wood — from peeling, scraping, or new substrate — gets an oil-based primer. Latex over bare wood fails at adhesion within three years in Houston\'s humidity.' },
        { title: 'Caulked before topcoat', body: 'Window frames, door frames, pipe penetrations, trim-to-siding transitions — sealed with elastomeric caulk before the first coat goes on. Water behind the paint is how siding rots.' },
        { title: 'Climate-matched product', body: 'We specify topcoats for Houston\'s UV load, heat, and humidity — not a default spec. Mildewcide-treated acrylic on siding, semi-gloss on trim.' },
      ],
    },
  },

  'tile-installation': {
    seoTitle: 'Tile Installation in Houston, TX',
    seoDescription: 'Tile installation in Houston with mortar bed setting, waterproofing, dry-laid layouts, grout sized to the material, and flood-tested wet areas.',
    problem: {
      eyebrow: 'What homeowners worry about',
      title: 'Tile is the room you look at every time you walk in. Every shortcut is visible.',
      paragraphs: [
        'The kitchens and bathrooms people remember — the ones that feel calm and considered — almost always have tile that was planned before it was set. Layout drawn, pattern centered, grout joints sized to the material, not to the schedule.',
        'Most tile complaints are not about the tile itself. They are about hollow spots, grout that cracked within a year, a layout that runs into the wall at a sliver, or niches positioned without measuring the tile first. All of these are planning failures.',
      ],
      reassurance: 'We draw every layout to scale and dry-lay the field before any mortar is mixed. Changes after setting are expensive. Changes before setting are part of the process.',
      proofPoints: [
        { label: 'Layout process', value: 'Drawn and dry-laid first' },
        { label: 'Wet areas', value: 'Waterproofed and flood-tested' },
        { label: 'Houston factor', value: 'Humidity-rated grout and sealers' },
      ],
    },
    transformation: {
      eyebrow: 'What the room becomes',
      title: 'From builder tile and cracked grout to a surface that holds its character.',
      before: 'Builder-grade tile laid without a plan — hollow spots, crooked rows, and grout that opens within the first year of use.',
      after: 'A properly set tile installation that reads as part of the architecture: centered pattern, consistent joints, clean transitions, and waterproofing that keeps its promise.',
      outcomes: ['No hollow spots or lippage at large-format tile edges', 'Wet areas that stay dry behind the wall', 'Grout joints sized to the tile, sealed and cleaned at handoff'],
    },
  },

  'drywall-repair': {
    seoTitle: 'Drywall Repair in Houston, TX',
    seoDescription: 'Drywall repair in Houston — texture matched by hand under raking light, moisture source identified before patching, and finished to Level 5 for paint.',
    heroTitle: 'Drywall Repair in Houston',
    heroDescription: 'Repairs finished to Level 5, texture matched by hand, and reviewed under raking light before handoff. The patch should be undetectable — not just passable.',
    imageAlt: 'Drywall repair with smooth wall finishing and texture matching for a Houston home interior.',
    includes: {
      eyebrow: 'Repair scope',
      title: 'Every repair finished to the same standard — invisible under any light.',
      items: [
        'Hole and damage patching — small cuts to full panel replacement',
        'Water-damage assessment, framing verification, and drywall replacement',
        'Texture matching — orange peel, knockdown, skip-trowel, and smooth',
        'Settlement crack repair for walls and ceilings',
        'Skim coating for full rooms and large damaged surfaces',
        'Level 5 finish as the standard for all painted surfaces',
        'Primer coat applied before handoff to painter',
      ],
    },
    problem: {
      eyebrow: 'The patch you see every morning',
      title: 'A drywall patch that does not match the surrounding texture is more visible than the hole it replaced.',
      paragraphs: [
        'Morning light through a west-facing window reveals every patch that was rushed — every hump, every texture sprayed on without matching what was already there. A fast repair can be more noticeable than the original damage.',
        'We assess the substrate, match the texture by hand, and prime before handoff to the painter. The test is not the noon walk-through — it is the raking light at seven in the morning.',
      ],
      reassurance: 'We sample texture on a small area first, review it under angle light, and confirm the match before completing the repair.',
      proofPoints: [
        { label: 'Texture match', value: 'Sampled and reviewed before full repair' },
        { label: 'Water damage', value: 'Source identified before patching' },
        { label: 'Finish standard', value: 'Level 5, skim coat ready for paint' },
      ],
    },
    transformation: {
      eyebrow: 'What changes',
      title: 'From a visible patch to a wall you have forgotten was ever touched.',
      before: 'Patches that look acceptable in flat light but catch every eye when the sun comes through a window at an angle.',
      after: 'A repair that disappears — matched texture, primed surface, and a handoff to the painter that needs no apology.',
      outcomes: ['Texture matched to the existing wall under raking light', 'Water source found and resolved before patching', 'Level 5 finish ready for paint without additional prep'],
    },
    craft: {
      eyebrow: 'Finish standards',
      title: 'The test is raking light — not a noon walk-through.',
      intro: 'Drywall repair is judged when morning light comes through a window at a low angle. Every hump, seam, and texture mismatch becomes visible. We finish to that standard.',
      items: [
        { title: 'Texture sampled first', body: 'We apply texture to a small area, let it dry, and review it under raking light before completing the patch. One approved sample, then the full repair.' },
        { title: 'Level 5 as the default', body: 'All surfaces receive a full skim coat over tape — Level 5. This is the standard for semi-gloss paint and the standard that holds up to a low-angle light test.' },
        { title: 'Moisture checked before patching', body: 'Every water-damaged area gets a moisture reading. If the source is active or recent, we flag it before touching the drywall. A dry patch over a wet problem is not a repair.' },
      ],
    },
  },

  'trim-finish-carpentry': {
    seoTitle: 'Finish Carpentry in Houston, TX',
    seoDescription: 'Interior trim and finish carpentry in Houston — crown, baseboard, casing, and wainscoting coped at inside corners, shop-primed, and installed to the home\'s profile.',
    problem: {
      eyebrow: 'The finish work that frames everything else',
      title: 'Trim sets the tone of a room. Bad trim announces itself at every inside corner.',
      paragraphs: [
        "Crown that gaps at the inside corner, baseboard that doesn't sit flush, casing that follows the wall instead of the door opening — these are the details homeowners notice after a remodel and never quite stop seeing.",
        "Finish carpentry is the last work done in a room and the first thing people read. We cope inside corners, prime all four sides in the shop, and set trim to the door and window openings — not to the wall.",
      ],
      reassurance: 'Gaps under 1/32 inch at every joint. Coped inside corners on every run. A prime coat on every piece before it enters the room.',
      proofPoints: [
        { label: 'Inside corners', value: 'Coped, never mitered' },
        { label: 'Prep standard', value: 'Shop-primed all four sides' },
        { label: 'Profiles', value: 'Matched to the home\'s era and architecture' },
      ],
    },
    transformation: {
      eyebrow: 'What the room becomes',
      title: 'From assembled to finished — corners that close, transitions that hold, trim that reads as part of the room.',
      before: 'Mitered corners that open seasonally, baseboard that gaps at the wall, and casing cut to follow the wall rather than drawn to fit the opening.',
      after: 'A room where the trim joins without gaps, the transitions are clean, and the paint line holds at every junction.',
      outcomes: ['Coped joints that hold through seasonal wood movement', 'Profiles matched to the existing home or specified to the architecture', 'Paint lines that do not crack at the wall-trim junction'],
    },
  },

  'closet-systems': {
    seoTitle: 'Closet Systems in Houston, TX',
    seoDescription: 'Custom closet systems in Houston built to furniture grade — designed from a wardrobe inventory, shop-produced, and installed to the same standard as kitchen cabinetry.',
    problem: {
      eyebrow: 'The closet that never quite works',
      title: 'Most closets are designed around the room, not the wardrobe. That is the wrong order.',
      paragraphs: [
        "Builder closets — a rod, a shelf, maybe a double-hang section — are designed to fill a space, not to hold a real wardrobe. The result is a closet that is simultaneously overpacked and wasting inches.",
        "We start with what is going in: long hang, short hang, how many shoes, where the bags live, whether there is jewelry that needs a drawer. The system is designed from that inventory. The room accommodates the design.",
      ],
      reassurance: 'A closet that makes getting dressed easier is a practical goal, not a luxury one. It starts with understanding what you actually own.',
      proofPoints: [
        { label: 'Design process', value: 'Wardrobe inventory before drawings' },
        { label: 'Construction', value: 'Furniture-grade, same shop as kitchens' },
        { label: 'Finish', value: 'Painted, stained, or lacquered to match home' },
      ],
    },
    transformation: {
      eyebrow: 'What changes',
      title: 'From a room where things go in and get lost to a closet that makes mornings easier.',
      before: 'A builder rod-and-shelf system that fills up in year one and stays disorganized because nothing has a real place to live.',
      after: 'A custom closet with a place for every category of clothing, drawers that open smoothly, and lighting that makes it easy to see what is there.',
      outcomes: ['Long and short hang sections sized to what you own', 'Dovetailed drawer boxes that operate correctly in year ten', 'Integrated lighting designed before the system is built'],
    },
  },

  'lighting-installation': {
    seoTitle: 'Lighting Installation in Houston, TX',
    seoDescription: 'Residential lighting installation in Houston — recessed, pendant, cove, and millwork lighting planned by task and coordinated with licensed electrical work.',
    problem: {
      eyebrow: 'The light you notice when it is wrong',
      title: 'A row of evenly spaced recessed lights is not a lighting plan. It is a grid.',
      paragraphs: [
        "Flat, even light from the ceiling makes rooms feel like conference rooms. It flattens faces, washes out materials, and removes the layering that makes a room feel considered rather than lit.",
        "We plan lighting around task, accent, and ambient layers — where the work happens, where the focal point is, how the room looks at nine in the evening. The electrician does the rough-in; we handle placement, housing selection, trim specification, and the fixtures themselves.",
      ],
      reassurance: 'We coordinate with your electrician from the layout drawing through trim installation. Nothing is added as an afterthought.',
      proofPoints: [
        { label: 'Layout method', value: 'Task-based, not grid-based' },
        { label: 'Electrician', value: 'Licensed partner for all rough-in' },
        { label: 'Millwork lighting', value: 'Concealed before cabinetry is installed' },
      ],
    },
    transformation: {
      eyebrow: 'What the room becomes',
      title: 'From flat overhead light to a room that actually looks like the one you had in mind.',
      before: 'Recessed cans on an even grid, undercabinet lights plugged into outlets, and a reading chair with no light aimed at it.',
      after: 'Light that lands where the task is, layers that give the room depth in the evening, and fixtures that feel chosen rather than installed.',
      outcomes: ['Task light over every work surface and reading area', 'Warm ambient layers that look right after dark', 'Concealed wiring in all new millwork and built-ins'],
    },
  },

  'accent-walls': {
    seoTitle: 'Accent Walls in Houston, TX',
    seoDescription: 'Accent wall installation in Houston with limewash, Roman clay, board-and-batten, and mineral finishes — surface-prepped, sampled in the room, and applied to last.',
    problem: {
      eyebrow: 'Trends vs. decisions',
      title: 'An accent wall is either an architectural decision or a trend. One of them ages well.',
      paragraphs: [
        "Limewash and Roman clay are popular right now, which means a lot of them are being applied to walls that do not benefit from them — in rooms without good light, over surfaces that were not properly prepared, in colors that compete with the rest of the space.",
        "We consider the room before recommending a treatment: the light direction, the opposing color, the scale, what the room is used for. An accent wall chosen with restraint reads better in five years than one chosen because it was popular the year it was applied.",
      ],
      reassurance: 'We sample on the actual wall, in the actual room, in natural and artificial light before committing. The sample is always at least a foot square.',
      proofPoints: [
        { label: 'Approach', value: 'Room context before material selection' },
        { label: 'Surface prep', value: 'Skim coat where surface varies' },
        { label: 'Approval', value: 'Sampled and reviewed before full application' },
      ],
    },
    transformation: {
      eyebrow: 'What changes',
      title: 'From a wall that just exists to a surface that gives the room a point of view.',
      before: 'A flat painted wall that does nothing, or an accent treatment that already feels like the year it was applied.',
      after: 'A surface treatment selected for the room — its light, its materials, its proportions — that makes the space feel intentional rather than decorated.',
      outcomes: ['Material selected for the room, not for the trend', 'Substrate properly prepped for the specific application', 'A sample reviewed and approved before any full wall is committed'],
    },
  },

  'beam-installation': {
    seoTitle: 'Beam Installation in Houston, TX',
    seoDescription: 'Structural and decorative beam installation in Houston — engineered before demolition, permitted, and finished by the same crew that frames and closes the opening.',
    problem: {
      eyebrow: 'The wall that is holding a load',
      title: 'Opening a wall is straightforward. Knowing what it is doing first is the whole job.',
      paragraphs: [
        "The most expensive mistake in residential remodeling is removing a load-bearing wall without knowing what it carries and where that load goes when the wall is gone. The beam size, the post requirements, the foundation implication — all of these have to be specified before a wall is touched.",
        "We require structural engineering before any load-bearing work. Not because it is the cautious answer, but because it is the only answer. A contractor who opens walls without structural documentation is not saving you money — he is deferring a problem.",
      ],
      reassurance: 'Engineering, permitting, and the construction sequence are planned before any demolition. The wall stays closed until we know exactly what it is doing.',
      proofPoints: [
        { label: 'Process', value: 'Engineering before demolition' },
        { label: 'Permit', value: 'Required for all structural work' },
        { label: 'Houston factor', value: 'Slab homes and mixed framing ages' },
      ],
    },
    transformation: {
      eyebrow: 'What the home becomes',
      title: 'From a wall that has divided the house for decades to a space that finally breathes.',
      before: 'A closed floor plan where the kitchen, dining, and living areas feel separate — rooms that do not relate to each other or to the way the family uses them.',
      after: 'A structurally sound open plan with the right beam, the right posts, and finish work that makes the change look like it was always this way.',
      outcomes: ['A structurally engineered beam specified before any wall opens', 'Posts and foundation implications confirmed before demolition', 'Framing, drywall, and finish work carried by the same crew'],
    },
  },

  'window-installation': {
    seoTitle: 'Window Installation in Houston, TX',
    seoDescription: 'Window replacement and new installation in Houston — properly flashed, sill-pan drained, and trimmed by in-house finish carpenters for every project.',
    problem: {
      eyebrow: 'The window that does not perform',
      title: 'A window is a hole in the wall. The flashing around it determines whether it becomes a moisture problem.',
      paragraphs: [
        "Windows fail in two ways: they age poorly visually, and they let water in where they should not. The first is a product selection problem. The second is a flashing and sill pan problem that no window unit — regardless of brand or price — solves on its own.",
        "In Houston's climate, a poorly flashed window becomes a damp wall within a few years. We detail every window as if a storm is hitting it at a forty-five-degree angle — because during hurricane season, it will.",
      ],
      reassurance: 'Sill pan sloped to drain. Self-adhering membrane up the jambs and over the head. Every penetration sealed before the window unit goes in.',
      proofPoints: [
        { label: 'Flashing', value: 'Self-adhering membrane at all edges' },
        { label: 'Sill pan', value: 'Sloped and drained, inspected' },
        { label: 'Trim', value: 'Cut and installed by the same carpenters' },
      ],
    },
    transformation: {
      eyebrow: 'What changes',
      title: 'From drafty or failing windows to openings that are tight, clear, and weatherproof.',
      before: 'Old windows with failed seals, drafts at the frame, or single-pane glass transferring heat in both directions through a Houston summer.',
      after: 'New or replacement windows properly flashed, trimmed by hand, and installed in openings that stay dry regardless of what the weather does.',
      outcomes: ['Proper flashing that will not fail in Houston weather', 'Interior trim matched to the home\'s existing profile', 'Window that opens and closes true for decades'],
    },
  },

  'door-installation': {
    seoTitle: 'Door Installation in Houston, TX',
    seoDescription: 'Entry, interior, pocket, and barn door installation in Houston — plumbed before hanging, sealed at the sill, and trimmed by hand.',
    problem: {
      eyebrow: 'The door that stopped closing flush',
      title: 'A door that does not close correctly is not a hardware problem. It was hung in an out-of-plumb frame.',
      paragraphs: [
        "Most door problems in Houston homes are settling problems. An older home on a slab shifts over time. The frame goes with it. The door stops closing flush — or starts closing too firmly — because the opening has moved.",
        "We assess the frame, correct what can be corrected, and hang the door to the frame we actually have. Shimming hinges to compensate for a racked opening is a fix that lasts eighteen months and fails quietly.",
      ],
      reassurance: 'Entry doors are weather barriers. The threshold, sill pan, and weatherstripping are part of every exterior door scope — not afterthoughts added at the end.',
      proofPoints: [
        { label: 'Frame check', value: 'Plumb verified before hanging' },
        { label: 'Entry sill', value: 'Bedded, sloped, and weatherstripped' },
        { label: 'Houston factor', value: 'Slab movement and seasonal settling' },
      ],
    },
    transformation: {
      eyebrow: 'What changes',
      title: 'From a door that sticks, squeaks, or will not seal to one that closes correctly on the first try.',
      before: 'A door that has to be lifted to latch, a gap at the top of the frame on a wet day, or a threshold that lets weather in when it rains.',
      after: 'A door that is plumb, sealed at the sill, trimmed to the opening, and opens and closes the same way on the last day of the year as it did on the first.',
      outcomes: ['Frame corrected before hanging, not shimmed and compensated after', 'Entry threshold bedded and weatherstripped against Houston weather', 'Custom door lead times coordinated with fabricator before rough opening is framed'],
    },
  },

  'framing': {
    seoTitle: 'Residential Framing in Houston, TX',
    seoDescription: 'Structural and partition framing in Houston — plumbed, square, and blocked for every fixture location before drywall begins.',
    problem: {
      eyebrow: 'The work everything else depends on',
      title: 'An out-of-plumb wall costs more to fix after the drywall is on it than it cost to frame correctly the first time.',
      paragraphs: [
        "Framing errors compound. A wall 1/4 inch out of plumb at the bottom is an inch out at the top. The door sticks. The casing gaps at the head. The drywall waves. Every trade after framing compensates — and the result shows.",
        "We frame to the drawing, check every wall with a level and a string line, and verify diagonal measurements in every room before the next trade begins. We do not call drywall until the framing is right.",
      ],
      reassurance: 'Blocking for all anticipated fixture locations is planned before the walls close — towel bars, medicine cabinets, TV mounts, cabinet rails. You should not need to open a finished wall to hang a mirror.',
      proofPoints: [
        { label: 'Plumb tolerance', value: '1/8″ in 8 feet, maximum' },
        { label: 'Structural work', value: 'Engineered drawings required' },
        { label: 'Blocking', value: 'Specified and installed before walls close' },
      ],
    },
    transformation: {
      eyebrow: 'What changes',
      title: 'From a frame that creates problems for every trade above it to one that lets the finish work go in correctly.',
      before: 'Out-of-plumb walls, missing blocking, racked door openings, and floor systems that deflect underfoot — all cost more to fix after the fact than to frame correctly in the first place.',
      after: 'A frame that is plumb, square, and blocked for every fixture — a surface that drywall, tile, cabinetry, and trim can all work from without improvising.',
      outcomes: ['Plumb walls and square openings checked before the next trade begins', 'Blocking installed for every anticipated fixture location', 'Additions and structural modifications from stamped engineer drawings'],
    },
  },

  'fence-installation': {
    seoTitle: 'Fence Installation in Houston, TX',
    seoDescription: 'Cedar, steel, and composite fence installation in Houston — posts set in concrete for clay soil, galvanized or stainless fasteners, and gates engineered for the span.',
    problem: {
      eyebrow: 'Why Houston fences fail early',
      title: 'Houston clay soil shrinks in the dry and swells in the wet. A post without concrete moves with it.',
      paragraphs: [
        "Houston's soil is some of the most expansive in the country. When it rains, it swells. When it dries, it contracts. A fence post set in packed soil follows that movement — and within two to three years, the fence is leaning.",
        "We set every post in concrete, sized for the span and height. The concrete cures for 48 hours before any panel load is applied. And we use galvanized or stainless fasteners throughout — the cost difference per panel is small; the performance difference over ten years in Houston's humidity is significant.",
      ],
      reassurance: 'A fence is a long-term decision. The methods and materials we use are designed to look honest and stand straight for twenty years, not five.',
      proofPoints: [
        { label: 'Post setting', value: 'Concrete only — no packed soil' },
        { label: 'Cure time', value: '48 hours before panel load' },
        { label: 'Fasteners', value: 'Galvanized or stainless throughout' },
      ],
    },
    transformation: {
      eyebrow: 'What changes',
      title: 'From a fence that leans and rusts to a property line built to stay where it was set.',
      before: 'Posts that have begun to lean, cedar rusting at the fasteners, and gates that sag and drag — signs of installation that did not account for Houston conditions.',
      after: 'A fence that is plumb, concrete-anchored, and fastened with hardware that holds its finish in Houston\'s humidity. Built honestly and meant to stay that way.',
      outcomes: ['Posts concrete-set to hold in clay soil movement', 'Galvanized or stainless fasteners that will not rust or stain the cedar', 'Gates engineered for the span, not sized by convention'],
    },
    consultation: {
      eyebrow: 'Getting started',
      title: 'A site walk and a property line conversation before any post is located.',
      body: 'Fence installation begins with a conversation about the boundary reference, HOA requirements if applicable, and the material direction. We walk the line with you before anything is laid out.',
      steps: ['Walk the property line and confirm boundary reference points', 'Discuss material, height, and HOA requirements', 'Confirm post spacing, gate locations, and permit path'],
    },
  },

  'siding-repair': {
    seoTitle: 'Siding Repair in Houston, TX',
    seoDescription: 'Siding repair and rot remediation in Houston — moisture source identified before replacement, profile matched to existing, and paint blended across the repair zone.',
    problem: {
      eyebrow: 'The moisture behind the wall',
      title: 'A siding repair that does not address the water source will fail again in three years.',
      paragraphs: [
        "In Houston's climate, siding damage is almost always a moisture story. Failed caulk at a window frame. A missing kick-out flashing at a roof transition. A Z-bar that was never installed at a horizontal seam. The siding is where the story ends — not where it starts.",
        "We find the source before touching the siding. Moisture readings on the surrounding boards and sheathing, probe tests for soft spots, visual inspection of every transition point above the damage. Then we repair.",
      ],
      reassurance: 'A repair that matches the existing profile and addresses the source should be invisible from the street and outlast the rest of the siding.',
      proofPoints: [
        { label: 'Source first', value: 'Moisture entry identified before repair' },
        { label: 'Profile match', value: 'Sourced or milled to existing reveal' },
        { label: 'Houston factor', value: 'Humidity cycles, mold, and rot progression' },
      ],
    },
    transformation: {
      eyebrow: 'What changes',
      title: 'From a damaged section that announces the problem to a repair that disappears into the wall.',
      before: 'Rotted boards, moisture staining, and a patch that does not match the surrounding profile — often with the original water entry point still active.',
      after: 'A repair that matches the existing siding in profile, texture, and painted finish — and stays dry because the source was fixed, not covered.',
      outcomes: ['Water entry point found and sealed before new siding is installed', 'Profile and reveal matched to the existing wall surface', 'Paint blended across the repair zone to transition with the surrounding finish'],
    },
  },

  'pergolas': {
    seoTitle: 'Pergola Construction in Houston, TX',
    seoDescription: 'Cedar, steel, and composite pergola construction in Houston — engineered footings, structural hardware at every joint, and shade designed around the Houston sun path.',
    problem: {
      eyebrow: 'The structure that has to earn its place',
      title: 'A pergola is a structural decision before it is a design one. The footings decide everything.',
      paragraphs: [
        "Most pergola failures happen three to five years after installation: a post that has settled, beams that are no longer level, hardware that has corroded, or a louvered system not designed for the wind load a solid shade panel creates.",
        "We size footings by calculation, specify structural hardware at every connection, and design for the real wind load the shade material adds. These details are not visible when the pergola is new — they are visible when it is ten years old and still level.",
      ],
      reassurance: 'We design around Houston\'s heat and storm season from the start — shade orientation, material selection, drainage, and structural connections.',
      proofPoints: [
        { label: 'Footings', value: 'Calculated per load and soil bearing' },
        { label: 'Hardware', value: 'Structural connectors at every joint' },
        { label: 'Houston factor', value: 'Wind load, UV, and storm-season design' },
      ],
    },
    transformation: {
      eyebrow: 'What outdoor living becomes',
      title: 'From a yard that is unusable by ten in the morning to shade that earns its place from April through November.',
      before: 'An uncovered patio that bakes in the afternoon sun — or a pergola that was not built for Houston\'s wind, humidity, and clay soil.',
      after: 'A correctly built pergola that provides shade where it is needed, stays level through Houston summers and hurricane seasons, and looks better in ten years than it did when it was new.',
      outcomes: ['Engineered footings that hold in Houston clay without settling', 'Shade structure oriented to the afternoon sun path', 'Hardware and materials rated for high-humidity outdoor use'],
    },
  },

  'garage-remodeling': {
    seoTitle: 'Garage Remodeling in Houston, TX',
    seoDescription: 'Garage remodeling and conversion in Houston — epoxy and polyaspartic floors, furniture-grade cabinetry, and full conditioned space conversions with HVAC and electrical.',
    problem: {
      eyebrow: 'The most-used room treated as an afterthought',
      title: 'Most families enter their home through the garage every day. Most garages are not designed for any of them.',
      paragraphs: [
        "The garage is usually the way families actually move in and out of the home — through the side door, past the cars, past whatever has accumulated on the floor. An organized, well-lit garage with a coated floor and real storage changes that daily experience more than most interior rooms do.",
        "For conversions — home offices, guest suites, workshops — we handle the full scope: insulation rated for Houston summers, HVAC selected and placed before walls close, electrical for the actual use pattern, and finish work that matches the rest of the house.",
      ],
      reassurance: 'Whether you need better organization or a full conditioned conversion, the garage deserves the same planning discipline as any other room in the home.',
      proofPoints: [
        { label: 'Flooring', value: 'Diamond-ground and coated — not acid-etched' },
        { label: 'Cabinetry', value: 'Same shop and standard as kitchens' },
        { label: 'Conversions', value: 'HVAC sized and placed before walls close' },
      ],
    },
    transformation: {
      eyebrow: 'What changes',
      title: 'From the room that collects everything to a space that works the way the family lives.',
      before: 'A floor that stains, tools on hooks that fall, cabinetry that swells in the heat, and a daily entry that starts every morning with friction.',
      after: 'A coated floor that cleans easily, cabinetry specified for garage temperature swings, and a space that does what the family needs — whether that is parking, working, or living.',
      outcomes: ['Polyaspartic floor coating properly prepped with diamond grinding', 'Cabinetry specified for unconditioned temperature and humidity swings', 'Electrical upgraded for EV charging, tools, and lighting circuits'],
    },
  },

  'commercial-remodeling': {
    seoTitle: 'Commercial Remodeling in Houston, TX',
    seoDescription: 'Small commercial renovation in Houston — offices, retail, and mixed-use spaces managed with fixed scope, single project manager, and residential-quality finish standards.',
    problem: {
      eyebrow: 'Commercial work at a residential standard',
      title: 'Most commercial renovation is high-volume and low-margin. Ours is neither.',
      paragraphs: [
        "We take commercial projects selectively — typically for clients we know from residential work, or for spaces that require the same caliber of finish detail and management that a fine residence does. High-volume tenant improvement is not our model.",
        "Commercial projects carry different constraints than residential ones: business continuity during construction, after-hours access requirements, ADA compliance, different permitting paths. We plan for all of these at the start — not when they become problems mid-construction.",
      ],
      reassurance: 'Fixed scope, single project manager, weekly reporting — the same structure we bring to every residential project, adapted for commercial schedule pressures.',
      proofPoints: [
        { label: 'Project volume', value: 'Selective — quality over volume' },
        { label: 'Schedule', value: 'After-hours available for critical phases' },
        { label: 'Management', value: 'Same discipline as residential work' },
      ],
    },
    transformation: {
      eyebrow: 'What changes',
      title: 'From a commercial space built to a budget to one built to a standard.',
      before: 'A tenant improvement managed like one of forty projects — schedules that slip, change orders at the end, and finish work that shows the shortcuts taken along the way.',
      after: 'A commercial space managed with full attention, fixed scope, and finish work that reflects the standard the business presents to its clients every day.',
      outcomes: ['After-hours construction where business continuity requires it', 'ADA and code compliance built into the scope from design through permitting', 'The same finish crew and management model as our residential work'],
    },
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
      `${service.title} in Houston and surrounding areas with careful planning, durable materials, and a clear remodeling process.`,
    heroTitle: merged.heroTitle ?? `${service.title} in Houston`,
    heroDescription:
      merged.heroDescription ??
      `${service.title} for Houston homes and surrounding areas, planned with a clear scope, careful sequencing, and durable finish standards.`,
    imageAlt:
      merged.imageAlt ??
      `${service.title} project detail for a Houston-area remodeling service page by Nova Home Remodeling & Design.`,
    includes: merged.includes ?? {
      eyebrow: `${service.title} scope`,
      title: `What our ${service.title.toLowerCase()} work can include.`,
      items: service.features.map((feature) => feature.title),
    },
    authorityLinks: merged.authorityLinks ?? sharedAuthorityLinks,
  };
}

export function getServiceLandingContent(service: ServicePageData): ServiceLandingContent {
  return mergeLandingContent(service);
}
