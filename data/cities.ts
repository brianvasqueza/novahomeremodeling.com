export interface CityPageData {
  slug: string;
  name: string;
  distance: string;
  description: string;
  heroImage: string;
  intro: string[];
  asideFacts: { label: string; value: string }[];
  featuredServices: string[];
  character: string;
}

const IMG = {
  houston:    'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=2000&q=82&auto=format&fit=crop',
  katy:       'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=2000&q=82&auto=format&fit=crop',
  sugarLand:  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=2000&q=82&auto=format&fit=crop',
  cypress:    'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=2000&h=1333&fit=crop',
  pearland:   'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=2000&q=82&auto=format&fit=crop',
  woodlands:  'https://images.unsplash.com/photo-1416331108676-a22ccb276e35?w=2000&q=82&auto=format&fit=crop',
  pasadena:   'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=2000&q=82&auto=format&fit=crop',
  spring:     'https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?w=2000&q=82&auto=format&fit=crop',
  tomball:    'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=2000&q=82&auto=format&fit=crop',
  richmond:   'https://images.unsplash.com/photo-1503387837-b154d5074bd2?w=2000&q=82&auto=format&fit=crop',
};

export const CITY_PAGE_DATA: CityPageData[] = [
  {
    slug: 'houston',
    name: 'Houston',
    distance: 'Home base',
    character: 'River Oaks estates, Heights bungalows, and Montrose townhomes — every neighborhood asks something different.',
    description: 'Home remodeling in Houston — kitchens, bathrooms, whole-home renovations, and custom millwork in River Oaks, the Heights, Montrose, Memorial, and beyond.',
    heroImage: IMG.houston,
    intro: [
      'Houston is where we are based and where most of our work is done. The city covers a range of housing stock that few metros can match — River Oaks Georgian colonials, Heights craftsman bungalows from the 1920s, mid-century modern in Meyerland, contemporary townhomes in Montrose. Each neighborhood has its own expectations, its own permit rhythm, its own history that a remodel should respect.',
      'We work across all of them. What changes by neighborhood is the material palette, the permit path, and the structural context. What does not change is the crew, the process, and the standard. The same people who pour a concrete countertop in River Oaks are setting the tile in the Heights the following week.',
    ],
    asideFacts: [
      { label: 'Studio location', value: 'Houston, TX' },
      { label: 'Neighborhoods served', value: 'River Oaks, Heights, Memorial, Montrose, Meyerland, Midtown' },
      { label: 'Typical project type', value: 'Kitchen, bath, whole-home, addition' },
    ],
    featuredServices: [
      'kitchen-remodeling',
      'bathroom-remodeling',
      'home-renovations',
      'interior-painting',
      'flooring',
      'custom-carpentry',
    ],
  },
  {
    slug: 'katy',
    name: 'Katy',
    distance: '30 mi west',
    character: 'Master-planned communities and family homes along the I-10 corridor west of the city.',
    description: 'Home remodeling in Katy, TX for kitchen renovations, bathroom upgrades, and custom carpentry in established neighborhoods west of Houston.',
    heroImage: IMG.katy,
    intro: [
      'Katy homeowners tend to know exactly what they want from a remodel: a kitchen that works for a family, a primary bath that finally feels finished, a backyard that earns its square footage. These are not speculative projects — they are investments in houses that people intend to live in for a long time. We respect that orientation.',
      'The homes here are well-built and spacious, which means the scope of a typical renovation is substantial. We do not treat Katy projects as lesser commissions. The same shop-drawn cabinetry, the same tile-setting crew, the same preconstruction process that we use in River Oaks is the process we bring to every project in the Grand Lakes and Cinco Ranch corridors.',
    ],
    asideFacts: [
      { label: 'Distance from studio', value: '30 miles west on I-10' },
      { label: 'Typical project type', value: 'Kitchen, bathroom, outdoor living' },
      { label: 'Common scope', value: 'Master-planned homes, established neighborhoods' },
    ],
    featuredServices: [
      'kitchen-remodeling',
      'bathroom-remodeling',
      'outdoor-remodeling',
      'cabinet-installation',
      'flooring',
      'patio-remodeling',
    ],
  },
  {
    slug: 'sugar-land',
    name: 'Sugar Land',
    distance: '25 mi SW',
    character: 'Affluent Fort Bend County suburbs with high-value homes and discerning finish expectations.',
    description: 'Home remodeling in Sugar Land, TX for kitchen renovations, bath suites, and whole-home upgrades across Fort Bend County.',
    heroImage: IMG.sugarLand,
    intro: [
      'Sugar Land properties carry finish expectations that match their price points. Clients here have typically lived in well-built homes and know the difference between a good installation and a careful one — the drawer that does not wobble, the tile grout line that holds its color, the trim that is actually plumb. We do not have to explain why these things matter.',
      'Fort Bend County has one of the more demanding permit environments in the Houston metro, particularly for structural work and additions. We handle the submission process internally and maintain current relationships with the local inspectors. The administrative part of a project should not be the client\'s problem.',
    ],
    asideFacts: [
      { label: 'Distance from studio', value: '25 miles southwest' },
      { label: 'Typical project type', value: 'Whole-home, kitchen, primary suite' },
      { label: 'County', value: 'Fort Bend County' },
    ],
    featuredServices: [
      'kitchen-remodeling',
      'bathroom-remodeling',
      'home-renovations',
      'flooring',
      'cabinet-installation',
      'lighting-installation',
    ],
  },
  {
    slug: 'cypress',
    name: 'Cypress',
    distance: '35 mi NW',
    character: 'Large-lot northwest corridor homes where outdoor living is the priority.',
    description: 'Home remodeling in Cypress, TX — outdoor living systems, kitchen renovations, and custom carpentry for large-lot homes in the northwest Houston corridor.',
    heroImage: IMG.cypress,
    intro: [
      'Cypress lots are generous by Houston standards, and outdoor living drives most of the project conversations we have here. Covered patios, outdoor kitchens, pergolas, and seamless indoor-outdoor transitions — these are not amenities in Cypress, they are baseline expectations for any home that is going to sell well or be lived in comfortably through the long Houston summer.',
      'Interior work follows the same careful standard. The kitchens in the newer Cypress communities are often well-appointed but built to a production spec — custom cabinetry, stone counters, and proper lighting make an immediate and measurable difference. We come out here regularly enough that our subcontractors know the area, and permitting with Harris County is a familiar process.',
    ],
    asideFacts: [
      { label: 'Distance from studio', value: '35 miles northwest' },
      { label: 'Typical project type', value: 'Outdoor living, kitchen, patio' },
      { label: 'Lot profile', value: 'Large lots, suburban estates' },
    ],
    featuredServices: [
      'outdoor-remodeling',
      'patio-remodeling',
      'pergolas',
      'kitchen-remodeling',
      'deck-construction',
      'fence-installation',
    ],
  },
  {
    slug: 'pearland',
    name: 'Pearland',
    distance: '25 mi south',
    character: 'Fast-growing Brazoria County suburb with a mix of new construction and established neighborhoods.',
    description: 'Home remodeling in Pearland, TX — kitchen and bathroom renovations, flooring upgrades, and custom work for one of Houston\'s fastest-growing south-side communities.',
    heroImage: IMG.pearland,
    intro: [
      'Pearland has grown fast, which means the housing stock ranges from brand-new production builds to established homes from the 1990s and early 2000s that are ready for a first serious renovation. Both types of projects suit us. The newer homes often need upgraded finishes — better cabinetry, stone counters, real hardwood — where the original spec was merely adequate. The older homes sometimes need structural attention before finish work can begin.',
      'We are comfortable with the full scope in Brazoria County. Permit turnaround here is reasonable, and we maintain good relationships with local inspectors. For clients doing a kitchen or bath on a more defined budget, Pearland projects are often an opportunity to do the work right the first time rather than cycling through cheaper options that need replacing.',
    ],
    asideFacts: [
      { label: 'Distance from studio', value: '25 miles south on 288' },
      { label: 'Typical project type', value: 'Kitchen, bath, flooring' },
      { label: 'County', value: 'Brazoria County' },
    ],
    featuredServices: [
      'kitchen-remodeling',
      'bathroom-remodeling',
      'flooring',
      'interior-painting',
      'cabinet-installation',
      'drywall-repair',
    ],
  },
  {
    slug: 'the-woodlands',
    name: 'The Woodlands',
    distance: '35 mi north',
    character: 'Master-planned community with wooded lots and architect-designed custom homes.',
    description: 'Home remodeling in The Woodlands, TX for whole-home renovations, kitchen upgrades, bath suites, and custom millwork in established planned communities.',
    heroImage: IMG.woodlands,
    intro: [
      'The Woodlands attracts clients who have already made a considered home purchase and want the interior to match. The community\'s architectural standards are reflected in the homes themselves — these are thoughtfully built properties, and a renovation that does not meet that bar is noticeable. We have worked here enough to understand that the finish quality expected is high, and we calibrate accordingly.',
      'Wooded lots and mature tree canopies shape how we schedule exterior work and how we plan drainage for any project touching the ground. The HOA review process for structural changes is thorough, and we prepare drawings to that standard. Interior renovations move quickly because the homes are well-maintained and structurally sound — demo is rarely the complicated part.',
    ],
    asideFacts: [
      { label: 'Distance from studio', value: '35 miles north on I-45' },
      { label: 'Typical project type', value: 'Whole-home, kitchen, primary suite' },
      { label: 'HOA review', value: 'Yes — experienced with process' },
    ],
    featuredServices: [
      'home-renovations',
      'kitchen-remodeling',
      'bathroom-remodeling',
      'custom-carpentry',
      'beam-installation',
      'outdoor-remodeling',
    ],
  },
  {
    slug: 'pasadena',
    name: 'Pasadena',
    distance: '15 mi SE',
    character: 'Established southeast Houston community with working families and homes ready for a first-class renovation.',
    description: 'Home remodeling in Pasadena, TX — kitchen renovations, bathroom upgrades, and durable finish work for established southeast Houston neighborhoods.',
    heroImage: IMG.pasadena,
    intro: [
      'Pasadena homeowners are pragmatic clients. They want work done right, on schedule, without excuses — and they are experienced enough to recognize when a contractor is cutting corners. We do not cut corners, and we explain our process clearly before a contract is signed. The relationship here is direct and honest.',
      'Homes in Pasadena tend to have good bones and real renovation potential. A kitchen that has not been touched since the 1990s can be transformed substantially with proper cabinetry, counters, and layout work. We approach these projects as the opportunity they are — the chance to do something genuinely lasting in a house that a family cares about.',
    ],
    asideFacts: [
      { label: 'Distance from studio', value: '15 miles southeast' },
      { label: 'Typical project type', value: 'Kitchen, bath, interior updates' },
      { label: 'Project focus', value: 'Value-driven, lasting quality' },
    ],
    featuredServices: [
      'kitchen-remodeling',
      'bathroom-remodeling',
      'interior-painting',
      'flooring',
      'drywall-repair',
      'cabinet-installation',
    ],
  },
  {
    slug: 'spring',
    name: 'Spring',
    distance: '25 mi north',
    character: 'Diverse north Houston community with a range of housing stock from established to newly built.',
    description: 'Home remodeling in Spring, TX — kitchen and bathroom renovations, custom carpentry, and outdoor living projects for north Houston homeowners.',
    heroImage: IMG.spring,
    intro: [
      'Spring encompasses a wide range of neighborhoods and housing types — from older ranch homes near the Tomball Tollway corridor to newer builds in the Champions and Klein areas. We work across that spectrum. The project scope changes; the standard does not.',
      'North Houston has grown quickly, and with growth comes a generation of homes that are now at the age where a real renovation makes sense. Production-built kitchens from the early 2000s, bathrooms that have seen their time, flooring that has been lived on hard — these are exactly the projects we take on, and we do them with the same materials and the same crew we would bring to a River Oaks commission.',
    ],
    asideFacts: [
      { label: 'Distance from studio', value: '25 miles north on I-45' },
      { label: 'Typical project type', value: 'Kitchen, bath, flooring, additions' },
      { label: 'Service area', value: 'Klein, Champions, Old Spring' },
    ],
    featuredServices: [
      'kitchen-remodeling',
      'bathroom-remodeling',
      'flooring',
      'outdoor-remodeling',
      'interior-painting',
      'trim-finish-carpentry',
    ],
  },
  {
    slug: 'tomball',
    name: 'Tomball',
    distance: '40 mi NW',
    character: 'Semi-rural northwest estates and older community homes with room to grow.',
    description: 'Home remodeling in Tomball, TX — estate renovations, custom outdoor living, and precision interior work for northwest Houston\'s semi-rural properties.',
    heroImage: IMG.tomball,
    intro: [
      'Tomball properties sit at the edge where Houston suburbs give way to semi-rural land — larger lots, older trees, homes that have been in families for a generation. These are not production houses. They are places with character and with the kind of renovation potential that rewards a careful eye and a long timeline.',
      'Outdoor work is often the starting point in Tomball: covered porches, deck extensions, fence lines that define the property properly. Interior work tends toward the thorough — full kitchen gut renovations, primary bathrooms that finally feel like the house they belong to, floors that match the soul of the structure. We come to Tomball when the project deserves it.',
    ],
    asideFacts: [
      { label: 'Distance from studio', value: '40 miles northwest' },
      { label: 'Typical project type', value: 'Estate renovation, outdoor living' },
      { label: 'Property profile', value: 'Large lots, established homes' },
    ],
    featuredServices: [
      'home-renovations',
      'outdoor-remodeling',
      'kitchen-remodeling',
      'bathroom-remodeling',
      'deck-construction',
      'pergolas',
    ],
  },
  {
    slug: 'richmond',
    name: 'Richmond',
    distance: '35 mi SW',
    character: 'Historic Fort Bend County seat with period homes and established neighborhoods worth preserving.',
    description: 'Home remodeling in Richmond, TX — period-sensitive renovations, custom carpentry, and kitchen and bath work for historic Fort Bend County properties.',
    heroImage: IMG.richmond,
    intro: [
      'Richmond is one of the oldest towns in Texas, and the housing stock reflects that history — Victorian-era homes alongside early twentieth-century colonials and mid-century ranch houses that have aged gracefully. These properties ask for remodelers who can read an old structure and propose work that respects the original without being museum-level precious about it.',
      'We take period work seriously. That means sourcing matching millwork profiles, specifying paint colors that are appropriate to the architectural era, and making sure that any structural work is engineered properly and visible in the finished product only as improvement. Richmond is not a market we work in carelessly.',
    ],
    asideFacts: [
      { label: 'Distance from studio', value: '35 miles southwest' },
      { label: 'Typical project type', value: 'Period renovation, kitchen, carpentry' },
      { label: 'Specialty', value: 'Historic homes, period-sensitive work' },
    ],
    featuredServices: [
      'home-renovations',
      'trim-finish-carpentry',
      'custom-carpentry',
      'kitchen-remodeling',
      'interior-painting',
      'flooring',
    ],
  },
];

export function findCityPage(slug: string) {
  return CITY_PAGE_DATA.find((c) => c.slug === slug);
}
