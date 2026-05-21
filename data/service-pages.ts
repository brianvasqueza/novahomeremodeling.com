export interface ServiceFeature {
  n: string;
  title: string;
  titleHtml: string;
  body: string;
}

export interface ServiceFaqItem {
  q: string;
  a: string;
}

export interface ServicePageData {
  slug: string;
  category: 'interior' | 'exterior' | 'structural' | 'whole-home';
  eyebrow: string;
  titleHtml: string;       // heading with <em> accent
  title: string;           // plain text for metadata / h1 fallback
  tagline: string;         // short 4-7 word pithy descriptor
  description: string;     // meta description + hero sub
  heroImage: string;
  body: string[];          // 2-3 body paragraphs for detail section
  asideFacts: { label: string; value: string }[];  // 3 quick facts in the aside column
  features: ServiceFeature[];
  faq: ServiceFaqItem[];
  related: string[];       // slugs of 3 related service pages
}

const IMG = {
  kitchen:     '/kitchenremodeling/ariel-domenden-k1fe40cx2EU-unsplash.jpg',
  bath:        '/bathroom%20remodeling/patrick-bohn-PoXaUHUa-Tg-unsplash.jpg',
  paintInt:    'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=2000&q=82&auto=format&fit=crop',
  paintExt:    'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=2000&q=82&auto=format&fit=crop',
  drywall:     'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=2000&q=82&auto=format&fit=crop',
  beam:        'https://images.unsplash.com/photo-1677204703178-4cb5b2fb26d2?w=2000&q=82&auto=format&fit=crop',
  window:      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=2000&q=82&auto=format&fit=crop',
  door:        'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=2000&q=82&auto=format&fit=crop',
  floor:       'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=2000&q=82&auto=format&fit=crop',
  tile:        'https://images.unsplash.com/photo-1690603935238-b60582bcb273?w=2000&q=82&auto=format&fit=crop',
  outdoor:     'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=2000&q=82&auto=format&fit=crop',
  patio:       'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=2000&q=82&auto=format&fit=crop',
  deck:        'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=2000&q=82&auto=format&fit=crop',
  trim:        'https://images.unsplash.com/photo-1503387837-b154d5074bd2?w=2000&q=82&auto=format&fit=crop',
  cabinet:     'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=2000&q=82&auto=format&fit=crop',
  closet:      'https://images.unsplash.com/photo-1696846912293-9a8013e17403?w=2000&q=82&auto=format&fit=crop',
  framing:     'https://images.unsplash.com/photo-1704742950992-9815a104820c?w=2000&q=82&auto=format&fit=crop',
  carpentry:   'https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?w=2000&q=82&auto=format&fit=crop',
  lighting:    'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=2000&q=82&auto=format&fit=crop',
  accent:      'https://images.unsplash.com/photo-1756302555654-5e413da2d1b8?w=2000&q=82&auto=format&fit=crop',
  siding:      'https://images.unsplash.com/photo-1741525665303-dfb05d750e48?w=2000&q=82&auto=format&fit=crop',
  fence:       'https://images.unsplash.com/photo-1779120690231-5dda93531065?w=2000&q=82&auto=format&fit=crop',
  pergola:     'https://images.unsplash.com/photo-1708397016786-8916880649b8?w=2000&q=82&auto=format&fit=crop',
  renovation:  'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=2000&q=82&auto=format&fit=crop',
  garage:      'https://images.unsplash.com/photo-1776261761989-b66436309302?w=2000&q=82&auto=format&fit=crop',
  commercial:  'https://images.unsplash.com/photo-1497366216548-37526070297c?w=2000&q=82&auto=format&fit=crop',
};

export const SERVICE_PAGE_DATA: ServicePageData[] = [
  {
    slug: 'kitchen-remodeling',
    category: 'interior',
    eyebrow: 'Service — Kitchen',
    title: 'Kitchen Remodeling',
    titleHtml: 'Kitchen <em>Remodeling</em>',
    tagline: 'Drawn before a cabinet is ordered.',
    description: 'Full-scope kitchen renovations — from demolition to custom cabinetry, stone counters, and unlacquered brass. Every cabinet shop-drawn and measured on site.',
    heroImage: IMG.kitchen,
    body: [
      'The kitchen is the room we spend the most time in and the one most often remodeled badly. Our approach starts with a single rule: nothing is ordered until every cabinet is drawn, measured on site, and reviewed in a full-size mock-up. Not a rendering. Not an estimate. A drawing.',
      'We do not subcontract the millwork. Our cabinetmakers work alongside our tile setters and plumbers — the same crew, same schedule, no handoffs. When the countertop scribe meets a cabinet face, the same person cut both. That precision does not happen by accident.',
    ],
    asideFacts: [
      { label: 'Typical duration', value: '8–14 weeks on site' },
      { label: 'Millwork', value: 'In-house, shop-drawn' },
      { label: 'Crew', value: 'Same team, start to finish' },
    ],
    features: [
      {
        n: '01',
        title: 'Every cabinet drawn before the order.',
        titleHtml: 'Every cabinet drawn <em>before the order.</em>',
        body: 'Shop drawings produced from on-site measurements, not plans. Door swings, drawer pull heights, toe kicks — all verified in person before a single panel is cut.',
      },
      {
        n: '02',
        title: 'Materials sourced, not specified.',
        titleHtml: 'Materials <em>sourced</em>, not specified.',
        body: 'Stone slabs are selected in person at the yard. Oak is kiln-dried and acclimated on site for two weeks before milling. Brass hardware is unlacquered and chosen to patinate honestly.',
      },
      {
        n: '03',
        title: 'No subcontractors for finish work.',
        titleHtml: 'No subcontractors <em>for finish work.</em>',
        body: 'Cabinetry, tile, and countertop installation are all performed by our in-house crew. No handoffs between trades that have never met. The seam quality shows it.',
      },
    ],
    faq: [
      {
        q: 'How long does a kitchen remodel take?',
        a: 'Most kitchen projects run eight to fourteen weeks on site. Preconstruction — drawings, material selections, and any permitting — typically adds four to eight weeks before site work begins. We do not start demolition until cabinetry is in production.',
      },
      {
        q: 'Do I need to move out?',
        a: 'For a full gut renovation, most clients choose to. Kitchen access is eliminated for several weeks. If staying in place is a requirement, we can discuss phasing — though it extends the timeline.',
      },
      {
        q: 'What does a kitchen remodel cost in Houston?',
        a: 'A full kitchen remodel — cabinetry, countertops, tile, lighting, appliance coordination, and finish carpentry — typically runs $80,000 to $200,000 or more depending on size, materials, and layout changes. Our feasibility study is the most reliable way to get a real number for your specific kitchen.',
      },
      {
        q: 'Can I supply my own appliances?',
        a: 'Yes. We coordinate with any vendor and confirm rough-in dimensions before casework is produced. Appliance selections need to be finalized before drawings are issued — their dimensions affect cabinet sizing.',
      },
      {
        q: 'What is included in a feasibility study?',
        a: 'A flat-fee engagement that produces a written scope, preliminary floor plan, material palette, and a realistic budget range. It is not a quote — it is the document we use to decide together what the project actually is.',
      },
    ],
    related: ['cabinet-installation', 'flooring', 'tile-installation'],
  },

  {
    slug: 'bathroom-remodeling',
    category: 'interior',
    eyebrow: 'Service — Bathroom',
    title: 'Bathroom Remodeling',
    titleHtml: 'Bathroom <em>Remodeling</em>',
    tagline: 'Plumbing moved. Then designed.',
    description: 'Primary suites to powder rooms — tile, plumbing, heated stone, frameless glass. Every pipe moved is drawn before the wall opens.',
    heroImage: IMG.bath,
    body: [
      'A bathroom remodel done wrong produces a beautiful room with a leaking valve behind the wall, a drain that backs up, or a tile layout that was improvised on the day of installation. Our sequence prevents all three. We start with plumbing — rough-in moved and inspected before tile is mentioned.',
      'The layout is drawn to scale, including every grout joint. Waterproofing is a three-step system, not a painted-on product. Heated floors go in before the mud bed. The result is a room that performs as well as it looks, and looks as good in ten years as it does on day one.',
    ],
    asideFacts: [
      { label: 'Typical duration', value: '6–10 weeks on site' },
      { label: 'Waterproofing', value: 'Three-step system, inspected' },
      { label: 'Tile layout', value: 'Drawn to scale, dry-laid first' },
    ],
    features: [
      {
        n: '01',
        title: 'Plumbing roughed-in first. Always.',
        titleHtml: 'Plumbing roughed-in <em>first.</em> Always.',
        body: 'We never tile around existing plumbing. Every pipe is moved, inspected, and signed off before a single tile is set. There are no shortcuts in the walls.',
      },
      {
        n: '02',
        title: 'Tile drawn before it is ordered.',
        titleHtml: 'Tile drawn <em>before it is ordered.</em>',
        body: 'Grout joints, field vs. trim ratios, niche positions — all drawn to scale and approved before any material is purchased. Dry-laid on the floor for review before setting begins.',
      },
      {
        n: '03',
        title: 'Heated floors beneath every mud bed.',
        titleHtml: 'Heated floors beneath <em>every mud bed.</em>',
        body: 'We install radiant electric mat systems under all stone and large-format tile floors as a standard — not an upsell. Cold stone floors in a bathroom is a problem we simply do not leave behind.',
      },
    ],
    faq: [
      {
        q: 'How long does a bathroom remodel take?',
        a: 'Primary suite bathrooms typically run six to ten weeks on site. Powder rooms and secondary bathrooms can be three to five weeks. Complex tile patterns or large-format stone add time regardless of room size.',
      },
      {
        q: 'Can we keep one bathroom functional during the project?',
        a: 'Yes. We sequence multi-bath projects to preserve access to at least one functional bathroom throughout. In single-bath homes, we discuss phasing and temporary solutions during preconstruction.',
      },
      {
        q: 'Can you convert a tub to a walk-in shower?',
        a: 'Yes. Tub-to-shower conversions are one of the most common requests we handle. We reframe the opening if needed, move or cap the plumbing, and plan tile layout around the new footprint before anything is ordered.',
      },
      {
        q: 'Do bathroom remodels require permits in Houston?',
        a: 'Plumbing moves and structural changes typically require permits. We handle permitting as part of preconstruction — you do not navigate the City separately.',
      },
      {
        q: 'What makes the difference in tile work?',
        a: 'Substrate preparation and layout planning. Tile is only as flat as the surface beneath it. We use a full mortar bed for all floors and back-butter every large-format tile. The difference is visible at ten feet and lasts for decades.',
      },
      {
        q: 'Do you handle frameless glass enclosures?',
        a: 'Yes. Glass is templated after tile is complete — never before — to ensure a precise fit. We work with fabricators whose tolerances and lead times we know.',
      },
    ],
    related: ['tile-installation', 'flooring', 'custom-carpentry'],
  },

  {
    slug: 'interior-painting',
    category: 'interior',
    eyebrow: 'Service — Painting',
    title: 'Interior Painting',
    titleHtml: 'Interior <em>Painting</em>',
    tagline: 'Twelve coats of prep. Two of color.',
    description: 'Interior painting with plaster-grade surface preparation, mineral finishes, and hand-applied limewash. The prep is the work.',
    heroImage: IMG.paintInt,
    body: [
      'Most painting failures are preparation failures. A brush and a bucket are the last two percent of the job. The other ninety-eight is surface repair, prime coats, blocking, sanding, and patience. Our painting crews approach the wall the way a finish carpenter approaches a piece of trim — they read the surface before they touch it.',
      'We work with mineral paints and traditional limewash — materials that build texture rather than hiding it. Where standard latex will look flat in five years, a properly applied mineral coat develops depth. We do not offer color matching on budget paint systems.',
    ],
    asideFacts: [
      { label: 'Prep standard', value: 'Skim coat + three sands minimum' },
      { label: 'Finishes', value: 'Mineral, limewash, traditional oil' },
      { label: 'Primer coats', value: 'Two, full coverage, inspected' },
    ],
    features: [
      {
        n: '01',
        title: 'Walls skim-coated, not filled.',
        titleHtml: 'Walls <em>skim-coated</em>, not filled.',
        body: 'We do not spackle holes and call it a day. Any wall receiving a high-sheen finish is skim-coated — a full thin-set of joint compound, sanded to flat. The light at the end of the day will not lie.',
      },
      {
        n: '02',
        title: 'Mineral and limewash finishes on request.',
        titleHtml: 'Mineral and <em>limewash</em> finishes on request.',
        body: 'We may use mineral paints, Roman clay, or traditional limewash — each applied according to its specification. Some of these products require three to five application days to cure between coats, and we plan the schedule accordingly.',
      },
      {
        n: '03',
        title: 'Millwork painted separate from walls.',
        titleHtml: 'Millwork painted <em>separate</em> from walls.',
        body: 'Trim, casings, and cabinets are primed and painted before installation, then touched up in place. The result is a paint line that will not crack at the junction — a simple distinction that most painters ignore.',
      },
    ],
    faq: [
      {
        q: 'How long does interior painting take?',
        a: 'A full interior repaint of a 2,500 sq ft home typically takes one to two weeks, including prep and two finish coats. Homes with extensive surface repair, skim coating, or specialty finishes run longer.',
      },
      {
        q: 'Do you help with color selection?',
        a: 'We guide the process — discussing how colors read in daylight versus evening light, how sheen affects large wall areas, and how to coordinate trim with walls. Final selection is always the homeowner\'s decision.',
      },
      {
        q: 'Can you paint cabinets and trim?',
        a: 'Yes. Trim and casings are primed and painted before installation, then touched up in place. Cabinet painting follows a similar sequence — surface prep, prime, and a durable finish coat suited to daily contact.',
      },
      {
        q: 'Can you paint over existing wallpaper?',
        a: 'We advise against it. Seams telegraph through paint, and adhesive failure eventually causes bubbling. We remove wallpaper as part of preparation and repair the substrate before any finish coat.',
      },
      {
        q: 'What paint finishes work best for high-traffic areas?',
        a: 'Satin or eggshell for most walls — easier to clean than flat and forgiving enough for imperfect surfaces. Semi-gloss for trim and casings, where durability and a clean edge at the wall matter more than sheen suppression.',
      },
    ],
    related: ['accent-walls', 'drywall-repair', 'trim-finish-carpentry'],
  },

  {
    slug: 'exterior-painting',
    category: 'exterior',
    eyebrow: 'Service — Exterior',
    title: 'Exterior Painting',
    titleHtml: 'Exterior <em>Painting</em>',
    tagline: 'Prep is the work. Colour is the result.',
    description: "Exterior painting with pressure-washing, full surface preparation, two-coat primer systems, and UV-stable topcoats rated for Houston's heat and high-humidity climate.",
    heroImage: IMG.paintExt,
    body: [
      'An exterior paint job is a weatherproofing job with a colour decision attached. The preparation — pressure-washing, scraping, caulking every penetration, priming bare wood — determines whether the topcoat lasts four years or fourteen. We do not skip steps on the outside because no one can see us.',
      'For homes in humid climates, we specify oil-based or alkyd primer on all bare wood, two-coat latex topcoats with a mildew-resistant additive, and elastomeric caulk on all seams that see seasonal movement. The brand of paint matters less than the system it goes into.',
    ],
    asideFacts: [
      { label: 'Primer system', value: 'Oil/alkyd on bare wood, two coats' },
      { label: 'Topcoat', value: 'Acrylic latex, mildewcide-treated' },
      { label: 'Caulk standard', value: 'Elastomeric at all seams and trim' },
    ],
    features: [
      {
        n: '01',
        title: 'Bare wood receives oil primer.',
        titleHtml: 'Bare wood receives <em>oil primer.</em>',
        body: 'Any exposed wood — whether from peeling, scraping, or new substrate — gets an oil-based primer before any latex product is applied. Latex over bare wood is a guaranteed adhesion failure in three years.',
      },
      {
        n: '02',
        title: 'Every penetration caulked before topcoat.',
        titleHtml: 'Every penetration caulked <em>before topcoat.</em>',
        body: 'Window and door frames, pipe penetrations, trim-to-siding transitions — all sealed with elastomeric caulk and tooled smooth before the first topcoat. Water entry behind the paint is how siding rots.',
      },
      {
        n: '03',
        title: 'Climate-matched product selection.',
        titleHtml: '<em>Climate-matched</em> product selection.',
        body: "We specify paint systems by climate zone, not by brand preference. Houston's heat, humidity, and UV load require specific products. We do not use the same spec we would use in a dry interior climate.",
      },
    ],
    faq: [
      {
        q: 'How long does an exterior paint job last?',
        a: 'Done correctly, eight to twelve years. Factors that shorten that window: latex over bare wood, inadequate surface prep, missed caulking, and south- or west-facing surfaces with heavy UV exposure.',
      },
      {
        q: 'Can you paint brick, stucco, or hardiplank siding?',
        a: 'Yes. Each substrate requires a different primer and topcoat system. Brick and masonry get a masonry primer; hardiplank and engineered wood get an oil-based primer on any exposed areas before topcoat.',
      },
      {
        q: 'How do you prepare exterior surfaces before painting?',
        a: 'Pressure-wash, scrape any loose or peeling paint, prime bare wood with an oil-based product, caulk all seams and penetrations with elastomeric caulk, and sand any remaining rough transitions — all before a topcoat goes on.',
      },
      {
        q: 'Do you paint in Houston summers?',
        a: 'Yes. We schedule to avoid direct afternoon sun on fresh surfaces. Mornings and overcast days are preferred. We do not apply paint below 50°F or above 95°F surface temperature.',
      },
      {
        q: 'Do I need to be home during the project?',
        a: 'No. We work independently with exterior access. Landscaping is protected daily. Most clients ask to be notified at key milestones — prime inspection, first coat, and final coat.',
      },
    ],
    related: ['siding-repair', 'deck-construction', 'fence-installation'],
  },

  {
    slug: 'drywall-repair',
    category: 'interior',
    eyebrow: 'Service — Drywall',
    title: 'Drywall Repair',
    titleHtml: 'Drywall <em>Repair</em>',
    tagline: 'Invisible when done right.',
    description: 'Patch, texture-match, and skim-coat drywall repair for water damage, structural cuts, and renovation work. The repair should be undetectable at any light angle.',
    heroImage: IMG.drywall,
    body: [
      'Drywall repair is judged under raking light — the early morning or late afternoon sun that reveals every hump, joint, and patch that a straight-on view conceals. We finish to that standard, not to the standard that passes a walk-through at noon.',
      'Whether we are patching a cut made for a new electrical circuit, repairing water damage, or skim-coating a full room for a fresh paint system, the work is performed in stages: repair, prime, sand, prime again, then hand to the painter. A drywall repair that goes straight to paint is a drywall repair that fails.',
    ],
    asideFacts: [
      { label: 'Finish standard', value: 'Level 5 — skim coat ready' },
      { label: 'Texture matching', value: 'Hand-applied, sampled first' },
      { label: 'Prime coat', value: 'Applied before painting handoff' },
    ],
    features: [
      {
        n: '01',
        title: 'Texture matched by hand, not by spray.',
        titleHtml: 'Texture matched <em>by hand</em>, not by spray.',
        body: 'Orange peel, knockdown, skip-trowel, and smooth are all applied by hand to match the surrounding surface. We sample a small area before committing to a full patch, and we inspect under raking light before approving.',
      },
      {
        n: '02',
        title: 'Water damage repaired at the source.',
        titleHtml: 'Water damage repaired <em>at the source.</em>',
        body: 'We do not patch over active or recent moisture without identifying the cause. Every water-damaged repair starts with a moisture reading. If the source is unresolved, we say so before touching the drywall.',
      },
      {
        n: '03',
        title: 'Level 5 finish as the default.',
        titleHtml: 'Level 5 finish <em>as the default.</em>',
        body: 'All our drywall finishes are prepared to Level 5 — a full skim coat over the taped surface. This is the standard required for semi-gloss and gloss paints, and it is also the standard that photographs well.',
      },
    ],
    faq: [
      {
        q: 'How long do drywall repairs take?',
        a: 'Most patch repairs — holes, damage, structural cuts — are complete in one to two days including priming. Skim-coating a full room adds a day. Large water-damage sections that require new drywall run two to four days depending on scope.',
      },
      {
        q: 'Can you match existing wall texture?',
        a: 'In most cases, yes. Orange peel, knockdown, and skip-trowel are all reproducible by hand. We sample a small area first and review it under raking light before completing the repair. Very old machine-applied textures are the exception.',
      },
      {
        q: 'Can you repair ceiling cracks and damage?',
        a: 'Yes. Ceiling repairs follow the same sequence as wall repairs — substrate assessment, tape and compound, texture match, prime. Settlement cracks are common in Houston and are straightforward to address.',
      },
      {
        q: 'How do you handle water-damaged drywall?',
        a: 'We take a moisture reading first. If the source is unresolved, we say so before touching the drywall. Large saturated areas are removed completely — framing and insulation verified dry, mold treated if present, then new drywall hung and finished.',
      },
      {
        q: 'Do you paint after the repair?',
        a: 'We hand off at primer. Painting is not included in a repair scope unless it is part of a larger project. We can coordinate with your painter or recommend one if needed.',
      },
    ],
    related: ['interior-painting', 'framing', 'accent-walls'],
  },

  {
    slug: 'beam-installation',
    category: 'structural',
    eyebrow: 'Service — Structural',
    title: 'Beam Installation',
    titleHtml: 'Beam <em>Installation</em>',
    tagline: 'Structural first. Beautiful second.',
    description: 'Engineered beam installation for open-plan conversions, structural wall removals, and exposed timber features. Every beam is engineered before a wall is opened.',
    heroImage: IMG.beam,
    body: [
      'Removing a wall to open a floor plan is one of the most common renovation decisions — and one of the most commonly done without adequate engineering. The beam carries a load. That load has to go somewhere. Until you know where it goes and what carries it, the wall stays closed.',
      'We require a structural engineer\'s report before any load-bearing wall is opened, and we work to the specification they produce — not to a contractor\'s rule of thumb. For exposed timber beams added for visual effect, we specify the species, finish, and connection details before a single post is cut.',
    ],
    asideFacts: [
      { label: 'Engineering', value: 'Structural report required first' },
      { label: 'Beam species', value: 'Specified before fabrication' },
      { label: 'Permit', value: 'Pulled for all structural work' },
    ],
    features: [
      {
        n: '01',
        title: 'Engineering before demolition.',
        titleHtml: 'Engineering <em>before</em> demolition.',
        body: 'We do not open a load-bearing wall without a structural engineer\'s stamp. The report tells us the beam size, the post requirements, and the foundation implication. We do not skip this step to save the client money.',
      },
      {
        n: '02',
        title: 'Exposed timber detailed before installation.',
        titleHtml: 'Exposed timber <em>detailed</em> before installation.',
        body: 'Species, grade, moisture content, finish, and connection hardware are all specified in a shop drawing before fabrication begins. Reclaimed timber is inspected for structural integrity before being specified for structural use.',
      },
      {
        n: '03',
        title: 'Permits pulled without exception.',
        titleHtml: 'Permits pulled <em>without exception.</em>',
        body: 'All structural work is permitted and inspected by the authority having jurisdiction. Unpermitted structural work is a liability at sale and a safety issue every day before it.',
      },
    ],
    faq: [
      {
        q: 'Do I need a structural engineer for every beam installation?',
        a: 'For any work that involves removing a load-bearing wall, yes — without exception. For purely decorative beams that carry no structural load, engineering is not required, though we still provide detailed shop drawings.',
      },
      {
        q: 'How long does a structural beam installation take?',
        a: 'The installation itself typically takes one to three days depending on beam size and access. The engineering, permitting, and material lead time before installation begins typically adds four to eight weeks.',
      },
      {
        q: 'Can you match existing timber beams in an older home?',
        a: 'Often yes, with reclaimed timber. We source through salvage yards and specify species, grade, and finish to match existing work. New timber can also be distressed and stained to match, though reclaimed material is always preferable for authenticity.',
      },
      {
        q: 'What happens to the wall opening after the beam is installed?',
        a: 'The beam sits in a new pocket or is supported by posts — either concealed within new walls or exposed as part of the design. The opening is then framed, drywalled, and finished by the same crew.',
      },
    ],
    related: ['framing', 'custom-carpentry', 'home-renovations'],
  },

  {
    slug: 'window-installation',
    category: 'structural',
    eyebrow: 'Service — Windows',
    title: 'Window Installation',
    titleHtml: 'Window <em>Installation</em>',
    tagline: 'Every sill a reveal.',
    description: 'Window replacement and new installation — steel casements, wood sashes, heritage replacement, and custom-opening additions. Flashed, sealed, and trimmed by our finish carpenters.',
    heroImage: IMG.window,
    body: [
      'A window installation is a wet-envelope penetration. The window itself is only as good as the flashing, sill pan, and caulk work around it. We detail every window as if the worst rainstorm in memory is hitting the wall at a forty-five-degree angle — because eventually it will.',
      'For replacement windows, we match the profile and sight-line of the original where historic character is a priority. For new openings, we handle the structural header, rough opening, and framing before the window unit arrives. The finish carpenters who set the window are the same carpenters who trim it.',
    ],
    asideFacts: [
      { label: 'Flashing', value: 'Self-adhering membrane, all edges' },
      { label: 'Sill pan', value: 'Sloped, drained, inspected' },
      { label: 'Trim', value: 'In-house finish carpenters' },
    ],
    features: [
      {
        n: '01',
        title: 'Flashing detailed like a roof penetration.',
        titleHtml: 'Flashing detailed <em>like a roof penetration.</em>',
        body: 'Self-adhering membrane flashing at the sill, up the jambs, and over the head. Sill pan sloped to drain. Every layer installed in the correct sequence before the window unit goes in.',
      },
      {
        n: '02',
        title: 'Heritage profiles matched where possible.',
        titleHtml: 'Heritage profiles <em>matched</em> where possible.',
        body: 'For older homes, we source windows that respect the original sight-line, divided-light pattern, and profile. Modern double-pane units are available in nearly every historic configuration.',
      },
      {
        n: '03',
        title: 'Trim installed by the same carpenters.',
        titleHtml: 'Trim installed by <em>the same carpenters.</em>',
        body: 'The crew that sets the window frames the opening, installs the window, and applies the interior trim. No handoffs between trades on a detail that requires precise alignment.',
      },
    ],
    faq: [
      {
        q: 'How long does window replacement take?',
        a: 'A single window replacement is typically a one-day installation after the window unit arrives. Full-home replacements are scheduled over two to five days. New openings that require structural work add time.',
      },
      {
        q: 'Should I replace all windows at once or phase it?',
        a: 'If your windows are of similar age and condition, replacing all at once is more cost-effective. Phasing is reasonable if some windows are in significantly worse condition than others.',
      },
      {
        q: 'Do you install steel casement windows?',
        a: 'Yes. Steel casements require specific substrate preparation and are heavier than standard units — details that require experience. We have installed Crittall-style and heritage steel casements in both new openings and replacement applications.',
      },
      {
        q: 'Is interior trim replacement included?',
        a: 'Interior trim is included in our window installation scope. We remove the existing interior casing, set the window, and install new trim matched to the home\'s existing profile or to a new profile you select.',
      },
    ],
    related: ['door-installation', 'trim-finish-carpentry', 'exterior-painting'],
  },

  {
    slug: 'door-installation',
    category: 'structural',
    eyebrow: 'Service — Doors',
    title: 'Door Installation',
    titleHtml: 'Door <em>Installation</em>',
    tagline: 'The threshold sets the tone.',
    description: 'Entry doors, interior doors, pocket doors, and custom thresholds — hung true, sealed at the sill, and trimmed by hand. The first impression a room makes is its door.',
    heroImage: IMG.door,
    body: [
      'A door that sticks, squeaks, or fails to close flush is not a hardware problem — it is a hanging problem. We set every door true to plumb and square in the opening before a single hinge screw is driven home. The frame is shimmed, the reveal is consistent, and the door clears the floor by the right amount. It sounds basic. Most of our clients have had it done incorrectly before.',
      'Entry doors are also a weather barrier. The threshold, sill pan, and weatherstripping are specified for the climate. For custom exterior doors — solid wood, steel, iron — we coordinate with the fabricator on rough-opening dimensions and hardware backsets before production.',
    ],
    asideFacts: [
      { label: 'Reveal', value: 'Consistent, plumbed before hanging' },
      { label: 'Entry sill', value: 'Sloped, weatherstripped, sealed' },
      { label: 'Custom doors', value: 'Coordinated with fabricator in advance' },
    ],
    features: [
      {
        n: '01',
        title: 'Every door plumbed before hanging.',
        titleHtml: 'Every door <em>plumbed</em> before hanging.',
        body: 'We do not hang a door in an out-of-plumb frame without correcting the frame first. Adjusting hinges to compensate for a racked opening is a temporary fix that fails in eighteen months.',
      },
      {
        n: '02',
        title: 'Entry thresholds sealed at the sill.',
        titleHtml: 'Entry thresholds <em>sealed at the sill.</em>',
        body: 'All exterior door thresholds are bedded in sealant, with a sill pan beneath for drainage. In Houston\'s climate, an unsealed threshold is a direct water entry path. We treat it like a roof flashing detail.',
      },
      {
        n: '03',
        title: 'Pocket and barn hardware set for life.',
        titleHtml: 'Pocket and barn hardware <em>set for life.</em>',
        body: 'Pocket door hardware and sliding barn door tracks are specified for the door weight, installed in structural backing, and adjusted for level travel before finish is applied. Adjusting them after the wall is closed is not possible.',
      },
    ],
    faq: [
      {
        q: 'Can you install a door in an existing wall without major construction?',
        a: 'A new door in an existing wall requires a structural header above the opening, regardless of whether the wall is load-bearing. The framing, header installation, and drywall repair around the opening are all part of the scope. We handle all of it.',
      },
      {
        q: 'What is the lead time for custom doors?',
        a: 'Custom solid wood or steel doors typically run eight to fourteen weeks in fabrication. We sequence our installation schedule around that lead time. Standard pre-hung door units from major manufacturers are typically in stock or two to four weeks out.',
      },
      {
        q: 'Do you paint or stain the door?',
        a: 'We prime and seal new doors before installation and apply finish coats after hanging. Staining and clear-coating solid wood doors is included in the installation scope when specified.',
      },
      {
        q: 'How do you handle doors that won\'t close in older homes?',
        a: 'Sticking or non-closing doors in older homes are almost always a settling issue — the frame has racked, the slab has moved, or the building has shifted. We assess the frame first, correct what can be corrected, and re-hang the door. Sometimes the door also needs to be planed.',
      },
    ],
    related: ['window-installation', 'trim-finish-carpentry', 'framing'],
  },

  {
    slug: 'flooring',
    category: 'interior',
    eyebrow: 'Service — Flooring',
    title: 'Flooring',
    titleHtml: '<em>Flooring</em>',
    tagline: 'Acclimated on site. Laid by hand.',
    description: 'Hardwood, engineered oak, limestone, and heritage tile — selected from source, acclimated for two weeks, and installed with expansion gaps that account for the season.',
    heroImage: IMG.floor,
    body: [
      'Wood flooring fails for one reason in nine cases out of ten: it was installed too soon. Wood is a hygroscopic material — it expands and contracts with the humidity in the room. Two weeks of acclimation in the actual installation space is not optional. It is the difference between a floor that opens and closes with the seasons gracefully, and one that buckles in August.',
      'We do not install flooring over a subfloor that has not been checked for level, flatness, squeaks, or moisture. Every run of flooring begins with a fastener pattern spec and a layout drawn to avoid narrow cut pieces at the walls. The difference between a floor installed with intention and one installed to a price is visible the first morning the sun comes through the window.',
    ],
    asideFacts: [
      { label: 'Acclimation', value: 'Minimum 14 days on site' },
      { label: 'Subfloor standard', value: 'Level, flat, moisture-tested' },
      { label: 'Species', value: 'White oak preferred, others on request' },
    ],
    features: [
      {
        n: '01',
        title: 'Two weeks of acclimation. No exceptions.',
        titleHtml: 'Two weeks of acclimation. <em>No exceptions.</em>',
        body: 'All solid and engineered hardwood is delivered and stickered in the installation space for a minimum of fourteen days before installation begins. This is non-negotiable regardless of schedule pressure.',
      },
      {
        n: '02',
        title: 'Layout drawn before the first board drops.',
        titleHtml: 'Layout drawn before <em>the first board drops.</em>',
        body: 'We plan the run start and the cut margins before any adhesive is mixed. A floor with a two-inch sliver at the threshold or a pattern that fights the room geometry is a floor that was started without a drawing.',
      },
      {
        n: '03',
        title: 'Subfloor inspected and corrected first.',
        titleHtml: 'Subfloor <em>inspected and corrected</em> first.',
        body: 'Squeaks, high spots, low spots, and moisture readings — all addressed before the finish floor is touched. A $12,000 white oak floor over a bad subfloor is still a bad floor.',
      },
    ],
    faq: [
      {
        q: 'What species of hardwood do you recommend for Houston\'s climate?',
        a: 'White oak is our primary recommendation — it is dimensionally stable, takes stain well in either direction, and ages honestly. Hickory and pecan are regional options with more character variation. We do not recommend Brazilian species in humid climates; the dimensional movement is too significant.',
      },
      {
        q: 'Can you install hardwood over concrete slab?',
        a: 'Yes, with engineered hardwood and a floating or glue-down installation system. We conduct a calcium chloride moisture test on the slab before specifying the installation method. High moisture readings require a vapor barrier system before any wood product goes down.',
      },
      {
        q: 'How long does flooring installation take?',
        a: 'A 2,000 sq ft installation with standard plank hardwood runs three to five days of installation after the acclimation period. Stone and large-format tile installations take longer due to mortar cure times between stages.',
      },
      {
        q: 'Do you refinish existing hardwood floors?',
        a: 'Yes. We sand, fill, stain if requested, and apply a minimum of three coats of finish with light sanding between coats. We do not sand engineered floors thinner than 4mm wear layer, and we will tell you before we start if a floor cannot be refinished.',
      },
    ],
    related: ['tile-installation', 'trim-finish-carpentry', 'kitchen-remodeling'],
  },

  {
    slug: 'tile-installation',
    category: 'interior',
    eyebrow: 'Service — Tile',
    title: 'Tile Installation',
    titleHtml: 'Tile <em>Installation</em>',
    tagline: 'Set in mortar. Not mastic.',
    description: 'Floor and wall tile in large-format stone, heritage subway, and hand-made cement tile. Properly bedded, grouted to dimension, and sealed for the surface.',
    heroImage: IMG.tile,
    body: [
      'The difference between a tile installation that lasts thirty years and one that begins cracking in three is almost always in what is behind the tile: the substrate, the mortar bed, and the movement joints. Mastic adhesive is appropriate for residential tile in specific applications. For floors and for any large-format stone, it is not one of them.',
      'We set all floor tile in a full mortar bed with back-buttering on tiles over twelve inches. Grout joints are sized for the tile and the movement expected in the space — not to a preference. Expansion joints are installed at the perimeter and at field interruptions. These are industry standards. They are also commonly ignored.',
    ],
    asideFacts: [
      { label: 'Mortar system', value: 'Full bed, back-buttered over 12″' },
      { label: 'Grout', value: 'Epoxy or unsanded to spec' },
      { label: 'Movement joints', value: 'Perimeter and field, always' },
    ],
    features: [
      {
        n: '01',
        title: 'Layouts dry-laid before any mortar is mixed.',
        titleHtml: 'Layouts dry-laid <em>before any mortar is mixed.</em>',
        body: 'Every tile installation is dry-laid on the floor — full field — to confirm the layout, center the pattern, and check cut sizes before the first tile is permanently set. Changes after setting begins are expensive.',
      },
      {
        n: '02',
        title: 'Grout joint sized to the tile, not the preference.',
        titleHtml: 'Grout joint sized to <em>the tile, not the preference.</em>',
        body: 'Handmade tile requires wider joints to accommodate size variation. Large-format porcelain is rectified and can run tight. The joint is not a stylistic choice alone — it is a technical specification.',
      },
      {
        n: '03',
        title: 'Substrate waterproofed on all wet surfaces.',
        titleHtml: 'Substrate <em>waterproofed</em> on all wet surfaces.',
        body: 'Shower walls, shower floors, and tub surrounds receive a three-step waterproofing membrane system before any tile goes on. The membrane is flood-tested before tiling begins.',
      },
    ],
    faq: [
      {
        q: 'What is the difference between rectified and non-rectified tile?',
        a: 'Rectified tile is cut to precise dimensions after firing, allowing for very tight grout joints (1/16″ or less). Non-rectified tile varies slightly in size and requires wider joints (typically 1/8″ or more) to absorb variation. The choice affects the entire aesthetic of the installation.',
      },
      {
        q: 'Can you match existing tile that is out of production?',
        a: 'Sometimes. We maintain relationships with salvage and specialty tile suppliers who carry discontinued lines. If an exact match is not available, we can often find a near-match and use it in a pattern that makes the transition intentional.',
      },
      {
        q: 'How long does tile installation take to cure before use?',
        a: 'Mortar under floor tile requires 24–48 hours cure time before foot traffic. Grout requires 72 hours before sealing. Shower installations should not be used for at least 72 hours after grouting, and preferably seven days for full cure before heavy use.',
      },
      {
        q: 'Do you seal tile and grout after installation?',
        a: 'Yes. Natural stone tile is sealed before grouting and again after. Grout is sealed on all floor and wet applications as part of the installation scope. We specify the sealer for the tile type and use — not a generic product.',
      },
    ],
    related: ['bathroom-remodeling', 'kitchen-remodeling', 'flooring'],
  },

  {
    slug: 'outdoor-remodeling',
    category: 'exterior',
    eyebrow: 'Service — Outdoor',
    title: 'Outdoor Remodeling',
    titleHtml: 'Outdoor <em>Remodeling</em>',
    tagline: 'Twelve months of use, not twelve days.',
    description: 'Full outdoor space renovations — grading, drainage, hardscape, outdoor kitchens, covered patios, and plantings — designed for year-round livability in the Houston climate.',
    heroImage: IMG.outdoor,
    body: [
      'Outdoor spaces in Houston fail for two reasons: drainage and sun. A patio that puddles after rain is not used. An outdoor kitchen facing west with no shade is abandoned by ten in the morning from May through September. We design around these facts, not around a photograph from a magazine published in a different climate.',
      'Our outdoor projects begin with grading and drainage — where does the water go when it rains three inches in an hour? That question has to be answered before a paver is set. The structure comes next: the roof, the posts, the utilities. Finish surfaces, cabinetry, and planting are the final phase.',
    ],
    asideFacts: [
      { label: 'Drainage first', value: 'Graded before hardscape is set' },
      { label: 'Shade design', value: 'Oriented to prevailing summer sun' },
      { label: 'Utilities', value: 'Gas, electric, water roughed in before finish' },
    ],
    features: [
      {
        n: '01',
        title: 'Drainage designed before a paver is set.',
        titleHtml: 'Drainage designed <em>before a paver is set.</em>',
        body: 'We grade every outdoor project to positive drainage away from the structure. Where grade is limited, French drains and channel drains are incorporated in the hardscape design. A flooded patio is an unusable patio.',
      },
      {
        n: '02',
        title: 'Utilities roughed in while the ground is open.',
        titleHtml: 'Utilities roughed in <em>while the ground is open.</em>',
        body: 'Gas for grills and heaters, electrical for lighting and outlets, and water for sinks and hose bibs — all trenched and roughed in before any hardscape is set. Cutting through finished concrete to add a gas line later is expensive and disruptive.',
      },
      {
        n: '03',
        title: 'Shade oriented to the Houston sun.',
        titleHtml: 'Shade oriented to <em>the Houston sun.</em>',
        body: 'West-facing surfaces receive the most heat from 2 PM to sunset. We design shade structures and plantings to address the actual solar path, not a generic orientation. An outdoor kitchen used in July is an outdoor kitchen that was designed for July.',
      },
    ],
    faq: [
      {
        q: 'Do you handle permits for outdoor structures?',
        a: 'Yes. Covered structures, outdoor kitchens with gas, and any structure over a certain square footage require permits in most Houston-area jurisdictions. We pull all permits and schedule inspections as part of the project.',
      },
      {
        q: 'What is the typical timeline for a full outdoor remodel?',
        a: 'A comprehensive outdoor project — grading, hardscape, covered structure, outdoor kitchen — typically runs ten to eighteen weeks from start of construction. The design and permitting phase adds four to eight weeks.',
      },
      {
        q: 'Can you work around existing mature trees?',
        a: 'Yes. We root-zone map mature trees before any excavation and design drainage and hardscape to protect the drip line. Trenching through root zones is done by hand where possible.',
      },
      {
        q: 'Do you do landscaping as well as hardscape?',
        a: 'We install hardscape — concrete, pavers, stone, wood structures. For planting plans, we work alongside a landscape architect or can refer you to one we have worked with. We coordinate the planting timeline with construction completion.',
      },
    ],
    related: ['deck-construction', 'patio-remodeling', 'pergolas'],
  },

  {
    slug: 'patio-remodeling',
    category: 'exterior',
    eyebrow: 'Service — Patio',
    title: 'Patio Remodeling',
    titleHtml: 'Patio <em>Remodeling</em>',
    tagline: 'Level, drained, and built for the climate.',
    description: 'Concrete, pavers, and natural stone patio installation — properly graded, edged, and detailed for Houston\'s rain patterns and heat.',
    heroImage: IMG.patio,
    body: [
      'A patio that slopes toward the house is a patio that is flooding your foundation. A patio laid without a proper base is a patio that heaves and settles within three years. These are not cosmetic details — they are basic competence. We start there and work up.',
      'For material selection, we assess the use pattern: how much traffic, how much sun, what the maintenance tolerance is. Concrete is the most economical and durable option; pavers offer repairability; natural stone offers permanence and beauty. We recommend what fits the site, not what fits a trend.',
    ],
    asideFacts: [
      { label: 'Drainage slope', value: '1/8″ per foot minimum, away from structure' },
      { label: 'Base', value: 'Compacted aggregate base, inspected' },
      { label: 'Edge restraint', value: 'Spiked or buried, secured before surface' },
    ],
    features: [
      {
        n: '01',
        title: 'Positive drainage away from the structure.',
        titleHtml: 'Positive drainage <em>away from the structure.</em>',
        body: 'Every patio is graded at a minimum 1/8″ per foot slope away from the home. Where the grade runs toward the house, we intercept with channel drains or French drains. Water near your foundation is the most expensive problem in residential construction.',
      },
      {
        n: '02',
        title: 'Compacted aggregate base, not sand.',
        titleHtml: 'Compacted aggregate base, <em>not sand.</em>',
        body: 'Pavers set over a sand bed without compacted aggregate base are pavers that move. We set a minimum 4″ compacted aggregate base for all paver installations, with geotextile fabric beneath to prevent migration.',
      },
      {
        n: '03',
        title: 'Edge restraint installed before the surface.',
        titleHtml: 'Edge restraint installed <em>before the surface.</em>',
        body: 'All paver edges are contained with plastic or metal restraint spiked into the base or set in concrete. Edge restraint installed after the pavers is decorative. Edge restraint installed first is structural.',
      },
    ],
    faq: [
      {
        q: 'How long does a new patio installation take?',
        a: 'A straightforward paver or concrete patio of 500–1,000 sq ft typically takes three to five days of construction. Projects involving drainage work, demolition of existing concrete, or adjacent landscaping take longer.',
      },
      {
        q: 'Should I repair or replace my existing concrete patio?',
        a: 'If the concrete is cracked along a slab joint or at a settlement point, repair is usually effective. If the concrete is heaved, significantly cracked across the field, or was poured with insufficient thickness, replacement is more economical in the long run. We will tell you which honestly.',
      },
      {
        q: 'What paver material is best for Houston\'s climate?',
        a: 'Concrete pavers are durable and available in many styles. Natural travertine and limestone are popular but require sealing in Houston\'s climate to resist mold and staining. Porcelain pavers are the most maintenance-free option. We discuss the tradeoffs at the design stage.',
      },
      {
        q: 'Can you connect the patio to an existing deck?',
        a: 'Yes. Transition details between patio and deck are designed to allow for different movement rates — wood and concrete move differently with temperature and moisture. We detail the threshold connection to allow for expansion without cracking or heaving.',
      },
    ],
    related: ['deck-construction', 'outdoor-remodeling', 'pergolas'],
  },

  {
    slug: 'deck-construction',
    category: 'exterior',
    eyebrow: 'Service — Decks',
    title: 'Deck Construction',
    titleHtml: 'Deck <em>Construction</em>',
    tagline: 'Engineered for the climate. Built to the load.',
    description: 'New deck construction in hardwood, composite, and thermally modified timber — engineered footings, code-compliant framing, and seamless threshold connections to the home.',
    heroImage: IMG.deck,
    body: [
      'A deck is a structural addition to your home. The ledger connects to the house framing. The footings carry the live and dead load to grade. The joist span is calculated, not guessed. When these things are done correctly, the deck lasts as long as the house. When they are not, it fails in ways that are both expensive and dangerous.',
      'We engineer the footing size and spacing before breaking ground, pull a permit, and frame to the structural calculation. Decking material is specified for the climate and the maintenance tolerance: hardwood is the most beautiful; composite requires the least maintenance; thermally modified wood is the most stable in high-humidity environments.',
    ],
    asideFacts: [
      { label: 'Footings', value: 'Sized per engineering, below frost' },
      { label: 'Ledger', value: 'Flashed per IRC, bolted to framing' },
      { label: 'Permit', value: 'Required and pulled without exception' },
    ],
    features: [
      {
        n: '01',
        title: 'Footings engineered for the load.',
        titleHtml: 'Footings <em>engineered</em> for the load.',
        body: 'We size footings to the calculated live and dead load, soil bearing capacity, and required depth. A footing sized by rule of thumb is a footing that settles unevenly.',
      },
      {
        n: '02',
        title: 'Ledger detailed like a roof-to-wall intersection.',
        titleHtml: 'Ledger detailed like <em>a roof-to-wall intersection.</em>',
        body: 'The ledger-to-house connection is flashed with self-adhering membrane, sealed at all fastener penetrations, and bolted to the structural framing of the house — not to the sheathing. This is both a code requirement and a long-term structural necessity.',
      },
      {
        n: '03',
        title: 'Threshold details that move with the material.',
        titleHtml: 'Threshold details that <em>move with the material.</em>',
        body: 'Wood decks expand and contract. The threshold connection to the door or interior floor is detailed to accommodate that movement without binding the door, cracking the threshold, or allowing water entry.',
      },
    ],
    faq: [
      {
        q: 'Do I need a permit to build a deck in Houston?',
        a: 'Yes. Any deck more than 30 inches above grade requires a building permit in the City of Houston. Most surrounding municipalities have similar requirements. We pull the permit as part of every deck project.',
      },
      {
        q: 'What decking material do you recommend for Houston?',
        a: 'Thermally modified ash or pine is our top recommendation for Houston — it is stable, resistant to moisture and insects, and does not require the maintenance of traditional hardwood. Composite is the right choice for clients who want zero maintenance. Ipe is beautiful but requires annual oiling to stay that way.',
      },
      {
        q: 'How long does a deck last?',
        a: 'A properly built deck with good footings, pressure-treated framing, and the right surface material should last twenty to thirty years with standard maintenance. The failure point is almost always the framing, not the decking — so framing quality matters more than surface material.',
      },
      {
        q: 'Can you add a roof or pergola over an existing deck?',
        a: 'Yes, if the existing deck is structurally capable of supporting the added load. We assess the existing footings and framing before designing the overhead structure. Many existing decks require footing upgrades to carry a covered structure.',
      },
    ],
    related: ['patio-remodeling', 'pergolas', 'outdoor-remodeling'],
  },

  {
    slug: 'trim-finish-carpentry',
    category: 'interior',
    eyebrow: 'Service — Trim & Finish',
    title: 'Trim & Finish Carpentry',
    titleHtml: 'Trim & <em>Finish Carpentry</em>',
    tagline: 'Gaps under one thirty-second of an inch.',
    description: 'Crown moulding, baseboard, casing, panelling, and wainscoting — mitered by hand, coped at inside corners, and painted or stained in the shop before installation.',
    heroImage: IMG.trim,
    body: [
      'Finish carpentry is the most visible work in a room. The crown moulding, the baseboard, the casing around a door — when it is done well, you do not notice it. When it is done badly, you notice it every time you walk in. A coped inside corner versus a mitered one is the difference between a joint that holds up and one that opens in six months as the wood moves.',
      'We prime and paint trim in the shop before it goes up. Painting in place over nail holes and caulk lines produces a result that looks acceptable when new and worse every year. Shop-primed trim, installed with hidden fasteners where possible, and caulked at the wall is the standard we maintain.',
    ],
    asideFacts: [
      { label: 'Inside corners', value: 'Coped, not mitered' },
      { label: 'Paint prep', value: 'Primed in shop before installation' },
      { label: 'Fasteners', value: 'Hidden or face-filled, never exposed' },
    ],
    features: [
      {
        n: '01',
        title: 'Coped inside corners, always.',
        titleHtml: 'Coped inside corners, <em>always.</em>',
        body: 'Mitered inside corners open as the wood dries and the building moves. Coped joints — where one piece is cut to the profile of the other — hold their line regardless of seasonal movement. Every inside corner in our work is coped.',
      },
      {
        n: '02',
        title: 'Shop-primed before installation.',
        titleHtml: '<em>Shop-primed</em> before installation.',
        body: 'Trim is primed on all four sides in the shop before it is cut and installed. This seals the wood against moisture movement from all directions and ensures the finish coat adheres to a consistent substrate.',
      },
      {
        n: '03',
        title: 'Profiles matched to the home\'s era.',
        titleHtml: 'Profiles matched to <em>the home\'s era.</em>',
        body: 'We match existing profiles when adding to or repairing trim in older homes. When new trim is specified, we recommend profiles appropriate to the architecture — not the most popular profile in the current catalogue.',
      },
    ],
    faq: [
      {
        q: 'Can you match existing trim profiles in an older home?',
        a: 'In most cases, yes. We take templates from existing mouldings and have them custom-milled when stock profiles do not match. For historic homes with complex profiles, we work with mills that produce period-accurate reproduction mouldings.',
      },
      {
        q: 'What is the difference between paint-grade and stain-grade trim?',
        a: 'Paint-grade trim is typically finger-jointed or lower-grade wood — knots and color variation are acceptable because paint covers them. Stain-grade trim is clear or select-grade wood with consistent grain and no filler, because the finish is transparent. The material costs more; the installation standard is the same.',
      },
      {
        q: 'Do you install crown moulding in rooms with irregular ceilings?',
        a: 'Yes. Irregular ceilings — those that are not perfectly flat — require blocking to create a consistent nailing surface for the crown. We assess the ceiling before pricing crown work and include blocking in the scope when needed.',
      },
      {
        q: 'Can finish carpentry be added to an existing room without repainting the room?',
        a: 'Often yes, but the paint at the wall-trim junction will need to be cut in. If the existing wall color is no longer available or the paint is old, a partial repaint of the wall bottom may be necessary to achieve a clean result.',
      },
    ],
    related: ['cabinet-installation', 'interior-painting', 'custom-carpentry'],
  },

  {
    slug: 'cabinet-installation',
    category: 'interior',
    eyebrow: 'Service — Cabinetry',
    title: 'Cabinet Installation',
    titleHtml: 'Cabinet <em>Installation</em>',
    tagline: 'Shop-drawn. Box-jointed. Signed inside.',
    description: 'Custom cabinetry for kitchens, baths, and built-ins — every box drawn on site, joined with hand-cut joinery, and installed level to the nearest 1/64 inch.',
    heroImage: IMG.cabinet,
    body: [
      'We do not install flat-pack cabinets. Every cabinet we produce is shop-drawn from on-site measurements, box-jointed or dovetailed at the corners, and fitted with inset or overlay doors cut to the opening — not to a standard dimension. The difference is apparent the first time you close the door.',
      'Installation begins with a level line, regardless of whether the floor or ceiling is level. Cabinets shimmed to plumb and level read as intentional. Cabinets racked to follow an out-of-level floor look like they were installed by someone working quickly. The scribe molding where the cabinet meets the wall is cut, not caulked.',
    ],
    asideFacts: [
      { label: 'Construction', value: 'Box-jointed or dovetailed' },
      { label: 'Doors', value: 'Inset or overlay, cut to opening' },
      { label: 'Installation', value: 'Level regardless of floor or ceiling' },
    ],
    features: [
      {
        n: '01',
        title: 'Every box drawn on site, not from plans.',
        titleHtml: 'Every box drawn <em>on site</em>, not from plans.',
        body: 'We measure the actual room, produce shop drawings from those measurements, and build to the drawing. Variations between plan dimensions and field dimensions are resolved before production, not during installation.',
      },
      {
        n: '02',
        title: 'Scribe molding cut to fit. Never caulked.',
        titleHtml: 'Scribe molding <em>cut to fit.</em> Never caulked.',
        body: 'The scribe at a wall is a thin piece of material cut to the exact profile of the wall — every bump, every wave. A caulked gap is a gap. A scribed fit is a joint.',
      },
      {
        n: '03',
        title: 'We sign the inside of every drawer face.',
        titleHtml: 'We sign the inside of <em>every drawer face.</em>',
        body: 'Initials and date, in ink, on the inside of a drawer face when the job is complete. You have our number for the rest of the cabinet\'s life. It is a small thing that means something to us.',
      },
    ],
    faq: [
      {
        q: 'How long does custom cabinet fabrication take?',
        a: 'Custom cabinetry typically requires six to ten weeks from approved drawings to delivery. We do not order production until drawings are signed off. Site installation follows delivery by one to two weeks.',
      },
      {
        q: 'What is the difference between face-frame and frameless cabinet construction?',
        a: 'Face-frame cabinets have a solid wood frame on the front of the box, which the doors mount to. Frameless cabinets (European-style) have no frame — the door mounts directly to the side panel. Face-frame is traditional American; frameless allows for more interior access and a cleaner look at the opening.',
      },
      {
        q: 'Can you paint or stain cabinets to match existing work?',
        a: 'Yes. We finish in the shop with the specified paint or stain system before delivery. Color and finish matching to existing cabinetry is part of our standard service — we provide samples for approval before production finishes are applied.',
      },
      {
        q: 'Do you install cabinets that are sourced from other manufacturers?',
        a: 'For semi-custom and custom lines from manufacturers we know and trust, yes. For flat-pack or big-box product, we do not — the tolerances and construction methods are incompatible with the installation standard we maintain.',
      },
    ],
    related: ['kitchen-remodeling', 'trim-finish-carpentry', 'custom-carpentry'],
  },

  {
    slug: 'closet-systems',
    category: 'interior',
    eyebrow: 'Service — Closets',
    title: 'Closet Systems',
    titleHtml: 'Closet <em>Systems</em>',
    tagline: 'Every inch is a decision.',
    description: 'Custom closet cabinetry and storage systems — designed from the wardrobe outward, built in the shop, and installed to the same standard as kitchen cabinetry.',
    heroImage: IMG.closet,
    body: [
      'The average walk-in closet is designed backward — the builder specifies the room first, then puts a standard rod and shelf in it. We start with the wardrobe: what needs to hang, what needs to be folded, how many shoes, where the bags go, what the lighting has to do. Then we design the system. The room is fixed; the storage is designed to it.',
      'We build closet systems to the same standard as kitchen cabinetry — which is to say, to the standard of furniture. Drawer boxes are dovetailed. Shelves are dadoed into the panel, not pin-supported. The finish is the same as the rest of the home.',
    ],
    asideFacts: [
      { label: 'Design start', value: 'Wardrobe inventory first' },
      { label: 'Construction', value: 'Furniture-grade, same as kitchens' },
      { label: 'Finish', value: 'Painted, stained, or lacquered in shop' },
    ],
    features: [
      {
        n: '01',
        title: 'Designed from the wardrobe, not the room.',
        titleHtml: 'Designed from <em>the wardrobe</em>, not the room.',
        body: 'Before we draw anything, we inventory what is going into the closet. Long hang, short hang, shoes, folded goods, bags, jewelry — the quantities determine the system. The room accommodates the design.',
      },
      {
        n: '02',
        title: 'Built to furniture grade. Not wire rack grade.',
        titleHtml: 'Built to <em>furniture grade.</em> Not wire rack grade.',
        body: 'Our closet systems are produced in the same shop as our kitchen cabinetry. Plywood boxes, solid wood face frames, dovetailed drawer boxes, and shelves that are dadoed rather than pin-supported. They do not flex or sag.',
      },
      {
        n: '03',
        title: 'Lighting integrated in the design.',
        titleHtml: 'Lighting <em>integrated</em> in the design.',
        body: 'LED strip lighting in hanging sections, puck lights in upper shelves, and motion-activated lower-section lighting are all coordinated with the electrician during design — not added as an afterthought after the system is built.',
      },
    ],
    faq: [
      {
        q: 'Do you work in reach-in closets as well as walk-ins?',
        a: 'Yes. Reach-in closets benefit from the same design approach. A well-organized reach-in closet with a proper double-hang section, drawer bank, and adjustable shelving is significantly more functional than a standard rod-and-shelf system.',
      },
      {
        q: 'Can you integrate a closet system with an existing room\'s millwork?',
        a: 'Yes. We match the style, finish, and hardware to the existing millwork in the home. The closet system should not look like a different decision was made in a different decade.',
      },
      {
        q: 'How long does a closet system take from design to installation?',
        a: 'Design and approval typically take one to three weeks. Production takes three to five weeks. Installation is typically one to two days for a walk-in, half a day for a reach-in.',
      },
      {
        q: 'What is the best way to plan for future changes to the system?',
        a: 'We design adjustable shelf standards into every system so that heights can be changed as the wardrobe changes. Fixed elements — island drawers, built-in drawers, shoe cubbies — are sized for what exists now, with room for reorganization around them.',
      },
    ],
    related: ['cabinet-installation', 'custom-carpentry', 'lighting-installation'],
  },

  {
    slug: 'framing',
    category: 'structural',
    eyebrow: 'Service — Framing',
    title: 'Framing',
    titleHtml: '<em>Framing</em>',
    tagline: 'The bones that make the house.',
    description: 'Structural and partition framing for additions, room conversions, and renovation work — plumbed, square, and inspected before any finish work begins.',
    heroImage: IMG.framing,
    body: [
      'Framing errors are the most expensive errors in construction — not because the lumber is expensive, but because everything that comes after it is built on top of it. An out-of-plumb wall makes the drywall wavy. A racked opening makes the door stick. A floor system with incorrect joist spacing deflects visibly when you walk across it. We frame to the drawing, and we check our work before the next trade begins.',
      'For additions and structural modifications, we work from engineered drawings. For non-structural partition framing, we work to a specified layout with blocking for all anticipated fixtures, cabinets, and hardware. You should not need to open a finished wall to install a towel bar.',
    ],
    asideFacts: [
      { label: 'Structural work', value: 'Engineered drawings required' },
      { label: 'Plumb tolerance', value: '1/8″ in 8 feet, maximum' },
      { label: 'Blocking', value: 'Specified before framing, not after' },
    ],
    features: [
      {
        n: '01',
        title: 'Blocking installed before the walls close.',
        titleHtml: 'Blocking installed <em>before the walls close.</em>',
        body: 'We block for every anticipated fixture location before drywall goes up: medicine cabinets, towel bars, grab bars, TV mounts, cabinet rails, and shelf standards. Finding the stud after the fact is a symptom of framing done without a plan.',
      },
      {
        n: '02',
        title: 'Engineered drawings for all structural work.',
        titleHtml: 'Engineered drawings for <em>all structural work.</em>',
        body: 'Additions, load-bearing wall modifications, and beam placements are all framed from stamped structural drawings. We do not substitute judgment for engineering on work that affects the structure.',
      },
      {
        n: '03',
        title: 'Plumb and square inspected before the next trade.',
        titleHtml: 'Plumb and square inspected <em>before the next trade.</em>',
        body: 'We check diagonal measurements on every room, confirm plumb on all door and window openings, and verify square at all corners before requesting the next inspection. Drywall hung over a bad frame is a problem that costs more to fix than to prevent.',
      },
    ],
    faq: [
      {
        q: 'Do you frame additions from scratch?',
        a: 'Yes. We handle additions from footing to roof — structural framing, sheathing, weather barrier, window and door rough openings. We work from architectural drawings and structural engineer specifications.',
      },
      {
        q: 'Can you re-frame an existing wall that is out of plumb?',
        a: 'Yes. In older homes, walls drift out of plumb over decades of settlement. We can re-frame walls to plumb, which typically requires new drywall and may require re-trimming doors and windows in the affected area.',
      },
      {
        q: 'What is the difference between structural framing and partition framing?',
        a: 'Structural framing carries load — it supports floors, roofs, and other walls above it. Partition framing divides space without carrying structural load. The distinction affects the design, the required engineering, and the permit requirements.',
      },
      {
        q: 'Can you add a second story to an existing home?',
        a: 'A second-story addition requires structural assessment of the existing foundation and first-floor framing to determine whether they can carry the added load. This typically requires an engineer\'s review before design begins. We have done this work, and the engineering assessment is always the first step.',
      },
    ],
    related: ['beam-installation', 'drywall-repair', 'home-renovations'],
  },

  {
    slug: 'custom-carpentry',
    category: 'interior',
    eyebrow: 'Service — Carpentry',
    title: 'Custom Carpentry',
    titleHtml: 'Custom <em>Carpentry</em>',
    tagline: 'One piece. One purpose. No shortcut.',
    description: 'Built-in bookshelves, window seats, mudroom lockers, entry benches, and one-of-a-kind millwork pieces — designed for the room, built in our shop, and installed to fit.',
    heroImage: IMG.carpentry,
    body: [
      'Custom carpentry is the category of work that makes a house feel like it was designed and built with intention. A built-in bookcase that fills the wall precisely. A window seat with a lid that opens. A mudroom with lockers that are the right width for the actual coats that go in them. These things cannot be sourced — they have to be made.',
      'Everything we produce in this category is drawn first. Dimensions verified on site. Joinery specified. The piece is built in the shop, disassembled for delivery, and reassembled in place. We do not build on site unless the piece cannot physically be moved through the door.',
    ],
    asideFacts: [
      { label: 'Process', value: 'Drawn, shop-built, assembled in place' },
      { label: 'Joinery', value: 'Dovetail, mortise-tenon, box-joint' },
      { label: 'Finish', value: 'Applied in shop before delivery' },
    ],
    features: [
      {
        n: '01',
        title: 'Built-ins designed to the room, not to a module.',
        titleHtml: 'Built-ins designed to <em>the room</em>, not to a module.',
        body: 'We do not adjust a standard unit to fit an opening. We take measurements, draw the piece, and build it to the actual dimensions of the space — including the irregularities that a stock product would require thick scribes to conceal.',
      },
      {
        n: '02',
        title: 'Shop-built, not built in place.',
        titleHtml: '<em>Shop-built</em>, not built in place.',
        body: 'Work built on site is subject to the conditions on site: dust, temperature swings, limited workspace, and time pressure. Work built in a conditioned shop, on stable benches, with proper tooling is better in every dimension.',
      },
      {
        n: '03',
        title: 'Joinery that will outlast the house.',
        titleHtml: 'Joinery that will <em>outlast the house.</em>',
        body: 'Dovetailed drawers, mortise-and-tenon face frames, and dadoed shelves are not decorative. They are the reason the piece will open and close properly in twenty years without the box racking or the drawer face pulling off.',
      },
    ],
    faq: [
      {
        q: 'How long does a custom built-in take from design to installation?',
        a: 'Most custom built-in pieces take four to eight weeks from approved drawings to installation. Larger pieces with complex joinery or specialty materials take longer. We do not start fabrication without signed drawings and material approvals.',
      },
      {
        q: 'Can you work with reclaimed or client-supplied wood?',
        a: 'Yes, with conditions. Reclaimed wood must be inspected for structural integrity, moisture content, and hidden fasteners before we work with it. Client-supplied wood should be delivered to the shop with enough time for acclimation before production begins.',
      },
      {
        q: 'Do you design the piece or just build from my drawings?',
        a: 'We can do both. Many clients come with a clear concept; we translate it to shop drawings and suggest joinery and material specifications. Others come with a need — "I want storage here and here" — and we design from the use outward. Either way, the shop drawing is the document that governs production.',
      },
      {
        q: 'What wood species do you recommend for painted built-ins vs. stained ones?',
        a: 'For painted built-ins, we use paint-grade maple or MDF for flat panels — both take paint beautifully and are dimensionally stable. For stained work, we use clear-grade white oak, walnut, cherry, or whatever species fits the existing millwork in the home.',
      },
    ],
    related: ['cabinet-installation', 'trim-finish-carpentry', 'beam-installation'],
  },

  {
    slug: 'lighting-installation',
    category: 'interior',
    eyebrow: 'Service — Lighting',
    title: 'Lighting Installation',
    titleHtml: 'Lighting <em>Installation</em>',
    tagline: 'Light as architecture.',
    description: 'Recessed, pendant, cove, and under-cabinet lighting installation — laid out to the room, coordinated with your electrician, and installed with concealed wiring.',
    heroImage: IMG.lighting,
    body: [
      'Lighting is architecture that most people do not think about until it is done badly. A row of recessed lights spaced evenly across a ceiling is not a lighting plan — it is a grid of fixtures that produces flat, commercial-feeling light. A lighting plan considers where the tasks are, where the focal points are, and how the light will behave at different times of day.',
      'We coordinate all lighting installations with a licensed electrician for rough-in and final connections. Our scope is the fixture selection, placement layout, trim and housing specification, and the installation of the fixtures themselves once rough-in is complete. We also install cove lighting, under-cabinet strips, and concealed LED tape in built-in millwork.',
    ],
    asideFacts: [
      { label: 'Electrician', value: 'Coordinated for all rough-in work' },
      { label: 'Placement', value: 'Laid out per lighting plan, not grid' },
      { label: 'Cove & tape', value: 'Installed concealed in millwork' },
    ],
    features: [
      {
        n: '01',
        title: 'Lighting laid out to task, not to a grid.',
        titleHtml: 'Lighting laid out to <em>task</em>, not to a grid.',
        body: 'We lay out fixtures based on where the light needs to land — over the sink, at the counter edge, beside the bed, in the art wall — not at equal intervals across the ceiling. The result is a room that is lit rather than illuminated.',
      },
      {
        n: '02',
        title: 'Concealed wiring in new millwork.',
        titleHtml: 'Concealed wiring in <em>new millwork.</em>',
        body: 'Under-cabinet lighting, cove lighting, and LED strips in built-ins are all roughed in before the millwork is installed. The wire runs inside the cabinet box or behind the cove detail — not surface-run with plastic raceway.',
      },
      {
        n: '03',
        title: 'Trim rings and housings specified together.',
        titleHtml: 'Trim rings and housings <em>specified together.</em>',
        body: 'Recessed housing type (IC-rated, airtight, slope-ceiling), trim ring finish, and aperture size are specified as a system — not selected independently. Mismatched specifications produce a result that looks improvised.',
      },
    ],
    faq: [
      {
        q: 'Do you do the electrical work or just the fixture installation?',
        a: 'We coordinate with a licensed electrician for all rough-in wiring, panel work, and final connections. We handle fixture selection, placement layout, and installation of the fixtures themselves. We can also install under-cabinet and cove lighting on existing circuits with our electrician partner.',
      },
      {
        q: 'Can you add recessed lights without opening the ceiling?',
        a: 'In some cases, yes — particularly when there is an attic above or when we can route wiring through a nearby junction box. In finished spaces with no attic access, some ceiling opening is usually required. We assess before committing to a scope.',
      },
      {
        q: 'What color temperature do you recommend?',
        a: 'For residential work, we recommend 2700–3000K for living spaces and kitchens. 3000K provides a slightly crisper light that works well for task areas. 2700K is warmer and more flattering in dining and bedroom spaces. We do not install cool-white (4000K+) in residential interiors.',
      },
      {
        q: 'Can you install smart lighting systems?',
        a: 'Yes. We coordinate the device selection with your chosen smart home platform (Lutron, Leviton, Caseta, and others) and work with the electrician on the appropriate switch wiring. We do not program the system, but we install everything needed for your AV professional or electrician to do so.',
      },
    ],
    related: ['interior-painting', 'accent-walls', 'closet-systems'],
  },

  {
    slug: 'accent-walls',
    category: 'interior',
    eyebrow: 'Service — Accent Walls',
    title: 'Accent Walls',
    titleHtml: 'Accent <em>Walls</em>',
    tagline: 'One wall that changes the room.',
    description: 'Limewash, Roman clay, board-and-batten, shiplap, and plaster accent wall treatments — designed for the room, applied correctly, and finished to last.',
    heroImage: IMG.accent,
    body: [
      'An accent wall done without restraint is a trend. An accent wall done with intention is an architectural decision. The material, the room, the opposing wall colour, the light direction — all of these inform what the wall should do and whether it should exist at all. We do not apply limewash to walls because it is popular. We apply it where the wall benefits from texture and depth.',
      'Surface preparation is as critical here as in any other paint application. A limewash or mineral paint over an inadequately prepared surface — one with cracks, texture variation, or inconsistent porosity — will advertise every imperfection. We skim, prime, and apply in the correct number of coats for the product.',
    ],
    asideFacts: [
      { label: 'Materials', value: 'Limewash, Roman clay, mineral paint' },
      { label: 'Prep standard', value: 'Skim coat where surface varies' },
      { label: 'Sample', value: 'Applied and reviewed before full application' },
    ],
    features: [
      {
        n: '01',
        title: 'Designed for the room, not from a trend.',
        titleHtml: 'Designed for <em>the room</em>, not from a trend.',
        body: 'We consider light direction, room scale, and existing finishes before recommending an accent treatment. Some rooms call for texture; others call for colour. We do not default to the same treatment regardless of context.',
      },
      {
        n: '02',
        title: 'Sample approved before full application.',
        titleHtml: 'Sample approved <em>before full application.</em>',
        body: 'All specialty wall treatments are sampled in the actual room, in natural and artificial light, and reviewed before the full wall is committed. The sample size is at least 12×12 inches — large enough to read the variation.',
      },
      {
        n: '03',
        title: 'Substrate prepared to receive the material.',
        titleHtml: 'Substrate prepared to <em>receive the material.</em>',
        body: 'Limewash and mineral paints are porous and reactive — they absorb into the surface rather than sitting on top of it. A poorly prepped wall produces a blotchy, uneven result. We skim and prime appropriately for the material.',
      },
    ],
    faq: [
      {
        q: 'What is the difference between limewash and Roman clay?',
        a: 'Limewash is a traditional lime-and-water application that creates a mottled, aged surface with natural variation. Roman clay (a brand name for a Venetian-plaster-type product) creates a smoother, more polished surface with a burnished quality. Both are mineral-based and breathable; the visual result is distinctly different.',
      },
      {
        q: 'Can an accent wall treatment be applied over existing paint?',
        a: 'For most mineral finishes, the existing paint must be assessed for adhesion and porosity. We test the surface before recommending a treatment. Some products require a primer to ensure adhesion over latex paint; others require a full skim coat.',
      },
      {
        q: 'How durable are these finishes in high-traffic areas?',
        a: 'Limewash and mineral finishes are durable in vertical applications and are generally cleanable with a damp cloth. They are not appropriate for surfaces that will be regularly scrubbed. In hallways and entry areas, we sometimes apply a sealer coat to improve cleanability without killing the texture.',
      },
      {
        q: 'Can the treatment be removed if I change my mind?',
        a: 'Yes. Mineral finishes can be painted over with standard latex paint with the appropriate primer. Limewash can also be removed with water in the first few days after application, and after curing it can be sanded and primed. It is not a permanent decision.',
      },
    ],
    related: ['interior-painting', 'drywall-repair', 'trim-finish-carpentry'],
  },

  {
    slug: 'siding-repair',
    category: 'exterior',
    eyebrow: 'Service — Siding',
    title: 'Siding Repair',
    titleHtml: 'Siding <em>Repair</em>',
    tagline: 'Matched, not patched.',
    description: 'Siding replacement, repair, and rot remediation for wood, fiber cement, and lap siding — matched to the existing profile and painted to disappear.',
    heroImage: IMG.siding,
    body: [
      'A siding repair that does not match is worse than a siding repair that has not been done — it announces the problem rather than resolving it. We match the profile, the reveal, the nailing pattern, and the finish to the surrounding material before a single board is removed.',
      'In Houston\'s climate, siding failure is almost always a moisture problem. We address the moisture source — improper flashing, failed caulk, missing Z-bar at horizontal transitions — before repairing the siding. A siding repair that does not address the entry point will fail again within three years.',
    ],
    asideFacts: [
      { label: 'Profile matching', value: 'Measured from existing, sourced to match' },
      { label: 'Moisture source', value: 'Identified and addressed first' },
      { label: 'Paint', value: 'Matched and blended before touchup' },
    ],
    features: [
      {
        n: '01',
        title: 'Source identified before repair begins.',
        titleHtml: 'Source identified <em>before repair begins.</em>',
        body: 'We probe for moisture content in the surrounding siding and sheathing before removing the affected boards. If the moisture source is active — a failed window sill, a missing kick-out flashing — we address it first.',
      },
      {
        n: '02',
        title: 'Profile and reveal matched to the existing material.',
        titleHtml: 'Profile and reveal matched <em>to the existing material.</em>',
        body: 'We source replacement material from suppliers who carry the matching profile. For discontinued profiles, we have moulding mills produce them. The repair should be invisible from the street.',
      },
      {
        n: '03',
        title: 'Paint matched and blended across the repair zone.',
        titleHtml: 'Paint matched and blended <em>across the repair zone.</em>',
        body: 'A new board painted with the exact same colour as weathered existing siding will not match — the existing has aged, faded, and chalked. We blend the paint repair across a wider area to produce a transition that is not visible.',
      },
    ],
    faq: [
      {
        q: 'Can you match fiber cement siding profiles?',
        a: 'Yes. Most major fiber cement profiles (HardiePlank lap widths, shingle exposure dimensions) are either available from distributors or close enough in available stock that the match is acceptable. We measure the existing exposure before sourcing.',
      },
      {
        q: 'How do you identify whether rot has spread beyond the visible damage?',
        a: 'We probe the surrounding boards with an awl and measure moisture content with a pin-type meter. Sound wood does not compress under light probe pressure and reads under 19% moisture. Soft or elevated-moisture areas are mapped before repair scope is set.',
      },
      {
        q: 'Is it better to repair or replace all siding?',
        a: 'If the damage is isolated — a few boards, a corner section — repair is cost-effective and produces a good result if the matching is careful. If more than 30–40% of the siding shows moisture infiltration, failure, or advanced chalk-and-fade, full replacement is more economical.',
      },
      {
        q: 'Do you add house wrap or moisture barrier during the repair?',
        a: 'Yes. Any section of siding we remove exposes the sheathing below. We inspect and repair the moisture barrier at that location before replacing the siding. Repairs are an opportunity to fix what is behind the wall.',
      },
    ],
    related: ['exterior-painting', 'deck-construction', 'fence-installation'],
  },

  {
    slug: 'fence-installation',
    category: 'exterior',
    eyebrow: 'Service — Fencing',
    title: 'Fence Installation',
    titleHtml: 'Fence <em>Installation</em>',
    tagline: 'Property line, honestly built.',
    description: 'Cedar, steel, iron, and composite fence installation — posts set in concrete, panels plumbed, and hardware specified for the material and the climate.',
    heroImage: IMG.fence,
    body: [
      'A fence with posts set without concrete in Houston\'s expansive clay soil is a fence that will be leaning within three years. Concrete in the post hole is not optional — it is the only way to anchor a post against the lateral movement that clay soil produces as it shrinks and swells with Houston\'s wet-dry cycles.',
      'We set all posts with concrete, allow a minimum 48 hours of cure before applying panels, and use stainless or hot-dipped galvanized fasteners throughout. The material cost difference between galvanized and standard fasteners is negligible. The performance difference over ten years in a humid climate is significant.',
    ],
    asideFacts: [
      { label: 'Post setting', value: 'Concrete only — no packed soil' },
      { label: 'Post cure', value: '48 hours before panel installation' },
      { label: 'Fasteners', value: 'Hot-dipped galvanized or stainless' },
    ],
    features: [
      {
        n: '01',
        title: 'Posts set in concrete. Full stop.',
        titleHtml: 'Posts set in concrete. <em>Full stop.</em>',
        body: 'No packed-soil post setting. Every post is set in a hole below the frost line (or minimum 24″ in Houston) with concrete that flares at the top to shed water. Posts set without concrete in clay soil move. Posts set in concrete do not.',
      },
      {
        n: '02',
        title: 'Galvanized or stainless fasteners only.',
        titleHtml: 'Galvanized or stainless fasteners <em>only.</em>',
        body: 'Standard zinc screws rust in Houston\'s humidity within two years, leaving stains on cedar and wood rot at the penetration point. We use hot-dipped galvanized or stainless fasteners throughout. The cost difference per panel is under five dollars.',
      },
      {
        n: '03',
        title: 'Gates engineered for their width.',
        titleHtml: 'Gates engineered <em>for their width.</em>',
        body: 'A gate wider than 4 feet requires a gate frame with a diagonal compression brace and hardware rated for the gate weight. We engineer the gate frame geometry for the span — an undersized frame sags and drags within a season.',
      },
    ],
    faq: [
      {
        q: 'What fence material is best for Houston\'s climate?',
        a: 'Cedar is our standard recommendation: naturally rot-resistant, stable in high humidity, and beautiful with a clear or semi-transparent stain. For low-maintenance, vinyl or composite is appropriate. For security, tubular steel or ornamental iron is the most durable option. We do not recommend untreated pine in Houston\'s climate.',
      },
      {
        q: 'Do you check property lines before installation?',
        a: 'We build to the boundary lines the client indicates. We strongly recommend consulting a property survey before fence installation. Encroachment onto a neighbour\'s property or into an easement requires removal at the homeowner\'s expense.',
      },
      {
        q: 'How long does fence installation take?',
        a: 'A straightforward 200 linear foot cedar fence takes two to three days: one day for posts and concrete, one to two days for rails and panels after the concrete cures. Longer runs, steep grades, or custom gate work extend the timeline.',
      },
      {
        q: 'Can you replace damaged sections of an existing fence without replacing the whole thing?',
        a: 'Yes, if the posts and rails in the remaining sections are sound. We assess the existing posts for concrete footings and structural condition before quoting section repairs. If the posts are rotten at the base, section repair is not a long-term solution.',
      },
    ],
    related: ['deck-construction', 'patio-remodeling', 'outdoor-remodeling'],
  },

  {
    slug: 'pergolas',
    category: 'exterior',
    eyebrow: 'Service — Pergolas',
    title: 'Pergolas',
    titleHtml: '<em>Pergolas</em>',
    tagline: 'Structure that earns its place outside.',
    description: 'Cedar, steel, and composite pergola construction — engineered footings, level beams, and connection hardware rated for the load and the wind zone.',
    heroImage: IMG.pergola,
    body: [
      'A pergola is a structural outdoor feature. The posts carry a load — the beams, the rafters, the shade material, and any additional lighting or fan weight. The footings carry that load to grade. We size the footings by calculation, not by convention.',
      'For covered pergola structures, we consider the wind load that the shade material creates in addition to the dead load of the structure. A louvered pergola with solid panels has significantly higher lateral wind load than an open-rafter structure. That difference affects the post size, the footing depth, and the connection hardware at every joint.',
    ],
    asideFacts: [
      { label: 'Footings', value: 'Calculated per load, not by convention' },
      { label: 'Hardware', value: 'Structural connectors at all joints' },
      { label: 'Wind load', value: 'Assessed for shade material type' },
    ],
    features: [
      {
        n: '01',
        title: 'Footings sized by load, not by rule of thumb.',
        titleHtml: 'Footings sized by <em>load</em>, not by rule of thumb.',
        body: 'We calculate the tributary area each post supports and the footing size required for the soil bearing capacity. A 12″ diameter footing is appropriate for some spans; others require 18″ or a spread footing.',
      },
      {
        n: '02',
        title: 'Structural connectors at every joint.',
        titleHtml: 'Structural connectors at <em>every joint.</em>',
        body: 'Post-to-footing connections, beam-to-post connections, and rafter-to-beam connections all use engineered hardware rated for the load. Toe-nailed connections are not adequate for a structure that sees wind load.',
      },
      {
        n: '03',
        title: 'Level beams, regardless of grade.',
        titleHtml: 'Level beams, <em>regardless of grade.</em>',
        body: 'Posts are cut to different heights where the grade drops — the beams run level, and the structure reads as intentional. A pergola that follows the grade looks improvised. Pergolas with level beams look built.',
      },
    ],
    faq: [
      {
        q: 'Do pergolas require permits in Houston?',
        a: 'In most Houston-area jurisdictions, freestanding pergolas under a certain square footage and height do not require a permit. Attached pergolas (connected to the home structure) and pergolas with solid roofs typically do. We assess the permit requirement before starting design.',
      },
      {
        q: 'What material do you recommend for pergolas in Houston?',
        a: 'Cedar is our first choice for traditional open-rafter pergolas. It is rot-resistant, dimensionally stable, and weathers to a silver-grey if left unsealed or can be maintained with a semi-transparent stain. For a maintenance-free option, powder-coated steel or aluminum frames with composite or PVC rafters are appropriate.',
      },
      {
        q: 'Can you add louvered shade panels to a pergola?',
        a: 'Yes. Fixed louvers, motorized louver systems, and shade sail attachment points can all be designed into a new pergola or added to an existing structure if it is adequate for the additional load.',
      },
      {
        q: 'Can a pergola be attached to the house?',
        a: 'Yes. An attached pergola requires a structural connection to the house framing — not just to the siding or fascia. The connection is designed to transfer load to the existing structure without causing damage. We assess the attachment point and detail accordingly.',
      },
    ],
    related: ['deck-construction', 'patio-remodeling', 'outdoor-remodeling'],
  },

  {
    slug: 'home-renovations',
    category: 'whole-home',
    eyebrow: 'Service — Whole-Home',
    title: 'Home Renovations',
    titleHtml: 'Home <em>Renovations</em>',
    tagline: 'One crew. One project. One standard.',
    description: 'Full and partial whole-home renovations — coordinated across all trades, managed by a single project team, and built to a fixed scope with no surprise change orders.',
    heroImage: IMG.renovation,
    body: [
      'A whole-home renovation is the most complex residential project a family will undertake. It involves every trade, every decision happening simultaneously, and a family\'s daily life often running alongside it. The variable that makes the difference between a successful renovation and a nightmare one is not budget or design — it is management.',
      'We work on six to eight homes per year because that is the number we can manage with full attention. Each project has a dedicated project manager who is on site daily, a fixed schedule with milestone dates, and a construction log that is updated and shared with the client every Friday. No surprises. No disappeared subcontractors. No excuses.',
    ],
    asideFacts: [
      { label: 'Projects per year', value: 'Six to eight. No more.' },
      { label: 'Reporting', value: 'Weekly construction log to client' },
      { label: 'Change orders', value: 'None past the agreed scope date' },
    ],
    features: [
      {
        n: '01',
        title: 'Fixed scope before construction begins.',
        titleHtml: 'Fixed scope <em>before construction begins.</em>',
        body: 'We do not begin construction without a complete scope of work, a fixed price, and a schedule with milestone dates. Changes made after the scope is locked are priced and presented as written change orders — no verbal agreements, no surprises at the end.',
      },
      {
        n: '02',
        title: 'One project manager. On site daily.',
        titleHtml: 'One project manager. <em>On site daily.</em>',
        body: 'Your project manager is your point of contact from preconstruction through punch list. They are on site every day, they know every subcontractor, and they are responsible for every coordination decision. You do not chase the foreman. You call one number.',
      },
      {
        n: '03',
        title: 'Weekly reporting without asking.',
        titleHtml: 'Weekly reporting <em>without asking.</em>',
        body: 'A construction log is written and shared every Friday: what was completed, what is in progress, what is scheduled for next week, any issues and how they were resolved. You do not have to call to find out where the project stands.',
      },
    ],
    faq: [
      {
        q: 'Do you work on homes while the family is living in them?',
        a: 'Yes, in many cases. Whole-home renovations can often be phased to preserve livable areas while work proceeds elsewhere. In some cases — particularly for full gut renovations — temporary relocation for some period is necessary. We discuss this during preconstruction planning.',
      },
      {
        q: 'How do you handle scope changes mid-project?',
        a: 'Any change to the agreed scope is documented in a written change order with a price and schedule impact before the change is made. We do not proceed on verbal approvals for scope changes, and we do not add work without the client\'s signature on the change order.',
      },
      {
        q: 'What is your approach to phased renovations?',
        a: 'We plan phased renovations as a complete project from the start — not as independent smaller projects. This means infrastructure decisions (rough plumbing, electrical, mechanical) are made with the full vision in mind, so we are not undoing Phase 1 work when Phase 2 begins.',
      },
      {
        q: 'Do you handle design as well as construction?',
        a: 'We collaborate with architects and interior designers regularly, and we strongly recommend professional design services for whole-home renovations. For clients without a designer, we can recommend professionals we have worked with and respect. We do not offer in-house design services.',
      },
    ],
    related: ['kitchen-remodeling', 'bathroom-remodeling', 'flooring'],
  },

  {
    slug: 'garage-remodeling',
    category: 'whole-home',
    eyebrow: 'Service — Garage',
    title: 'Garage Remodeling',
    titleHtml: 'Garage <em>Remodeling</em>',
    tagline: 'The most overlooked room in the house.',
    description: 'Garage conversions, storage systems, epoxy floors, conditioned workspaces, and utility upgrades — built to the same standard as the living spaces inside.',
    heroImage: IMG.garage,
    body: [
      'The garage is typically the last room in a home to receive any attention, and often the first one a family actually uses every day. An organized, well-lit, cleanable garage changes the way a household functions. We treat it as an interior room.',
      'For garage conversions — adding a home office, guest suite, or workshop — we handle the full scope: insulation, drywall, HVAC, electrical, and flooring. For storage and organizational upgrades, we build the same quality of cabinetry we produce for kitchens and install it to the same standard.',
    ],
    asideFacts: [
      { label: 'Flooring', value: 'Epoxy, polyaspartic, or tile' },
      { label: 'Cabinetry', value: 'Same shop, same standard as kitchens' },
      { label: 'Conversions', value: 'Full scope: insulation, HVAC, electrical' },
    ],
    features: [
      {
        n: '01',
        title: 'Floor coated before storage is installed.',
        titleHtml: 'Floor coated <em>before storage is installed.</em>',
        body: 'We apply floor coatings before any cabinetry or storage is installed — not around it. The coating is prepped with diamond grinding, not acid etching, and applied in two coats with a broadcast aggregate layer for slip resistance.',
      },
      {
        n: '02',
        title: 'Cabinetry rated for the environment.',
        titleHtml: 'Cabinetry rated for <em>the environment.</em>',
        body: 'Garage cabinetry lives in an unconditioned space with temperature and humidity swings. We specify materials appropriately: melamine-faced plywood or polyester-wrapped panels rather than paint-grade wood, and adjustable leveling legs rather than fixed bases.',
      },
      {
        n: '03',
        title: 'Conditioned space designed with HVAC first.',
        titleHtml: 'Conditioned space designed with <em>HVAC first.</em>',
        body: 'Garage conversions are designed with the mechanical system selected before insulation or drywall begins. The correct HVAC unit for the space, placed correctly for the duct layout, determines whether the room is comfortable or not.',
      },
    ],
    faq: [
      {
        q: 'Does a garage conversion require a permit?',
        a: 'Yes. Converting a garage to livable space requires a building permit and must meet local code requirements for minimum ceiling height, egress windows, insulation values, and HVAC. We pull the permit and manage the inspection process.',
      },
      {
        q: 'How much does a garage floor coating cost vs. tile?',
        a: 'A quality polyaspartic floor coating runs approximately one-third to one-half the cost of tile. The coating is appropriate for most garage uses and is easier to maintain. Tile is appropriate for garages that will function as showrooms, workshops, or heavily used utility spaces.',
      },
      {
        q: 'Can you add electrical outlets and overhead lighting to a garage?',
        a: 'Yes. We coordinate with our licensed electrician for all electrical work. Most garages in older homes have minimal circuits; adding dedicated circuits for tools, EV chargers, and lighting is a common part of a garage upgrade.',
      },
      {
        q: 'Is it possible to remodel a garage while still using it?',
        a: 'For storage and organizational upgrades, yes — we sequence the work in sections. For floor coatings, the floor must be vacated for typically 24–48 hours for the product to cure. Garage conversions require full vacating of the space for the duration.',
      },
    ],
    related: ['flooring', 'cabinet-installation', 'framing'],
  },

  {
    slug: 'commercial-remodeling',
    category: 'whole-home',
    eyebrow: 'Service — Commercial',
    title: 'Commercial Remodeling',
    titleHtml: 'Commercial <em>Remodeling</em>',
    tagline: 'Residential precision. Commercial scale.',
    description: 'Small commercial renovation projects — offices, retail, and mixed-use spaces — managed with the same crew discipline and finish standards we apply to residential work.',
    heroImage: IMG.commercial,
    body: [
      'We take commercial projects selectively — typically for clients with whom we have an existing relationship, or for commercial spaces that require the same caliber of finish work as a fine residence. Our commercial work is not high-volume tenant improvement. It is low-volume, high-quality renovation for clients who know the difference.',
      'The management structure is the same as our residential projects: fixed scope, single project manager, weekly reporting, no surprise change orders. The difference is that commercial timelines are often compressed and the schedule has to account for business continuity. We plan for that from the start.',
    ],
    asideFacts: [
      { label: 'Scope', value: 'Selective — quality over volume' },
      { label: 'Schedule', value: 'After-hours available for critical work' },
      { label: 'Finish', value: 'Same crew and standard as residential' },
    ],
    features: [
      {
        n: '01',
        title: 'Selective projects, full attention.',
        titleHtml: 'Selective projects, <em>full attention.</em>',
        body: 'We take commercial projects that benefit from residential-quality finish work and management. High-volume, low-margin commercial renovation is not what we do. If the project requires craftsmanship, we are interested.',
      },
      {
        n: '02',
        title: 'After-hours work to minimize disruption.',
        titleHtml: 'After-hours work to <em>minimize disruption.</em>',
        body: 'For clients whose businesses cannot be closed for construction, we schedule disruptive work — demolition, flooring, painting — after business hours or over weekends. The premium for after-hours work is real and is included in the proposal.',
      },
      {
        n: '03',
        title: 'ADA and code requirements handled.',
        titleHtml: 'ADA and code requirements <em>handled.</em>',
        body: 'Commercial renovations trigger accessibility and code compliance requirements that residential work does not. We work with architects who understand these requirements and include permit compliance in our scope from the design stage.',
      },
    ],
    faq: [
      {
        q: 'What types of commercial spaces do you work in?',
        a: 'Offices, retail boutiques, medical offices, restaurants (for finish and millwork — not commercial kitchen equipment), and mixed-use residential-commercial buildings. We do not take large-scale commercial general contracting.',
      },
      {
        q: 'Do you work with tenant improvement allowances?',
        a: 'Yes. We work with clients who are receiving a tenant improvement (TI) allowance from their landlord and understand the documentation and inspection requirements that typically accompany TI work. We coordinate directly with the landlord\'s representative when required.',
      },
      {
        q: 'How do you handle occupied commercial spaces during renovation?',
        a: 'We phase the work to preserve access to critical business functions, schedule dust-generating work for off-hours, and maintain sealed separation between the work zone and occupied areas. A plan for dust, noise, and access is included in the preconstruction documentation.',
      },
      {
        q: 'Can you provide references for commercial work?',
        a: 'Yes. We have completed commercial projects for professional service firms, boutique retail clients, and mixed-use property owners in the Houston area. References are available on request after an initial conversation.',
      },
    ],
    related: ['flooring', 'interior-painting', 'lighting-installation'],
  },
];

export function findServicePage(slug: string) {
  return SERVICE_PAGE_DATA.find((s) => s.slug === slug);
}
