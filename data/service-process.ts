import type { ProcessStep } from './content';
import type { ServicePageData } from './service-pages';

type ServiceWorkCopy = {
  planning: string;
  stages: [string, string, string];
};

// Each service keeps the same three image cards, with copy about the work rather
// than instructions about how those images should sell the page.
export const SERVICE_WORK_COPY: Record<string, ServiceWorkCopy> = {
  'kitchen-remodeling': {
    planning: 'Discuss cooking habits, storage, appliance sizes, and whether the existing kitchen layout works before choosing finishes.',
    stages: ['Review the layout, cabinet dimensions, and any plumbing or electrical changes before demolition.', 'Coordinate cabinets, counters, appliances, and utility work in the order the selected materials require.', 'Review cabinet operation, countertop edges, backsplash transitions, and remaining touch-ups.'],
  },
  'bathroom-remodeling': {
    planning: 'Discuss the shower or tub, storage, ventilation, and how the bathroom will be used during the project.',
    stages: ['Review the room layout and the condition of existing surfaces before setting the repair or replacement scope.', 'Coordinate plumbing, wet-area preparation, tile, and fixtures around the selected installation systems.', 'Check fixture operation, tile transitions, trim, and any remaining finish items.'],
  },
  'interior-painting': {
    planning: 'Identify the walls, ceilings, and trim to be painted, and review colors in the light of the actual room.',
    stages: ['Inspect the surfaces, identify repairs, and plan protection for furniture and adjacent finishes.', 'Prepare the surfaces and apply the coating system selected for the material and its condition.', 'Review coverage, edges, and touch-ups after the finish has had time to dry.'],
  },
  'exterior-painting': {
    planning: 'Discuss the surfaces to be painted, existing coating condition, access, and the color direction.',
    stages: ['Inspect siding and trim for damage, loose coatings, and areas that need repair before painting.', 'Prepare the surfaces and apply compatible coatings with attention to the product instructions and weather.', 'Review coverage, trim edges, and transitions between painted and unpainted surfaces.'],
  },
  'drywall-repair': {
    planning: 'Identify the damaged areas, discuss any known cause, and compare the surrounding texture and paint finish.',
    stages: ['Assess the damage and any unresolved cause before deciding how much drywall needs repair.', 'Repair the affected area and build up the surface to suit the surrounding wall or ceiling.', 'Review the texture and surface in the room’s light, and confirm whether priming and painting are included.'],
  },
  'beam-installation': {
    planning: 'Discuss the opening you want and identify what professional assessment is needed before changing the structure.',
    stages: ['Review the existing structure and the project’s engineering and approval requirements.', 'Follow the project-specific structural design and coordinate the surrounding work and inspections.', 'Review the opening, finish repairs, and any remaining documentation with the project team.'],
  },
  'window-installation': {
    planning: 'Discuss window operation, dimensions, frame materials, and whether surrounding trim or siding needs work.',
    stages: ['Check the opening, existing damage, and replacement dimensions before removing the window.', 'Fit the selected window and coordinate the surrounding weather protection and trim.', 'Check operation, hardware, trim transitions, and remaining finish repairs.'],
  },
  'door-installation': {
    planning: 'Discuss door size, swing, hardware, and the condition of the existing opening.',
    stages: ['Measure the opening and review the frame, threshold, and adjacent finishes.', 'Fit the door and frame, coordinate hardware, and address the connections to surrounding surfaces.', 'Check opening and closing, latch alignment, clearances, and finish details.'],
  },
  flooring: {
    planning: 'Compare flooring for the room’s use, existing subfloor, moisture conditions, and transitions to adjacent spaces.',
    stages: ['Review the subfloor and the selected product’s preparation and installation requirements.', 'Prepare the base and install the flooring according to the chosen system and layout.', 'Review edges, transitions, trim, and the care instructions for the selected floor.'],
  },
  'tile-installation': {
    planning: 'Discuss the tile size, pattern, joints, and whether the area will be exposed to water.',
    stages: ['Review the base, layout, and any wet-area preparation needed for the selected tile system.', 'Set the tile using the agreed layout and products suited to the application.', 'Review joints, edges, transitions, and product-specific curing and care instructions.'],
  },
  'outdoor-remodeling': {
    planning: 'Discuss how the outdoor space will be used, where shade is needed, and which existing features should stay.',
    stages: ['Review access, drainage, existing structures, and the proposed locations of outdoor features.', 'Coordinate groundwork, structures, utilities, and surfaces around the agreed outdoor scope.', 'Review drainage paths, access, surface transitions, and care needs for the selected materials.'],
  },
  'patio-remodeling': {
    planning: 'Discuss seating, shade, access from the house, and what is no longer working on the existing patio.',
    stages: ['Review the patio surface, drainage, and connections to the home before choosing the scope.', 'Coordinate the selected surface work, shade features, and any related utility work.', 'Review surface transitions, access, and the details where the patio meets the home or yard.'],
  },
  'deck-construction': {
    planning: 'Discuss deck size, access, railings, material choices, and the relationship to the house and yard.',
    stages: ['Review the site and the support, connection, and approval requirements for the proposed deck.', 'Coordinate supports, framing, decking, and railings around the project specifications.', 'Review stairs, rails, surface transitions, and maintenance needs for the chosen decking.'],
  },
  'trim-finish-carpentry': {
    planning: 'Compare trim profiles and discuss how new work should meet existing doors, windows, and cabinetry.',
    stages: ['Measure the room and review existing profiles, corners, and surface irregularities.', 'Fit the trim to the openings and coordinate joints, fasteners, and the selected finish.', 'Review joints, reveals, and transitions before completing finish touch-ups.'],
  },
  'cabinet-installation': {
    planning: 'Discuss cabinet dimensions, storage needs, appliances, hardware, and access for delivery.',
    stages: ['Verify cabinet dimensions and the condition of the walls and floor before installation.', 'Fit and secure the cabinets, allowing for the room’s dimensions and adjacent appliances or counters.', 'Review door and drawer operation, hardware, trim, and remaining finish details.'],
  },
  'closet-systems': {
    planning: 'Discuss what needs to be stored, hanging space, shelf access, and the dimensions of the closet.',
    stages: ['Measure the closet and review door clearances, lighting, and the proposed storage layout.', 'Fit the agreed storage components and coordinate shelves, hanging space, drawers, and hardware.', 'Check access, drawer and door operation, and the fit of the storage layout.'],
  },
  framing: {
    planning: 'Discuss the proposed layout and identify existing conditions and documentation needed for the framing scope.',
    stages: ['Review dimensions, existing framing, and any project-specific structural requirements.', 'Coordinate the framing with openings, supports, and the work that follows it.', 'Review the framing against the project documents before enclosing the work.'],
  },
  'custom-carpentry': {
    planning: 'Discuss what the piece needs to hold, how it will be used, and how it should fit the room.',
    stages: ['Measure the opening and discuss materials, dimensions, joinery, and finish options.', 'Build and fit the agreed piece, allowing for access, wall irregularities, and adjacent trim.', 'Review doors, drawers, shelves, hardware, and the finish against the agreed design.'],
  },
  'lighting-installation': {
    planning: 'Discuss the tasks each light supports, fixture locations, controls, and any electrical coordination needed.',
    stages: ['Review fixture sizes, mounting locations, and the electrical work needed for the plan.', 'Coordinate fixture placement and connections with the appropriate electrical professional.', 'Review light placement, switching, dimming compatibility, and surrounding finish repairs.'],
  },
  'accent-walls': {
    planning: 'Discuss the focal wall, finish direction, room lighting, and how the treatment meets surrounding trim.',
    stages: ['Check the wall surface and confirm the layout, material, and sample finish.', 'Apply or fit the selected wall treatment with attention to its layout and edges.', 'Review the surface in the room’s light and check edges, transitions, and touch-ups.'],
  },
  'siding-repair': {
    planning: 'Identify the damaged areas and discuss moisture concerns, matching options, and whether repair or replacement fits the condition.',
    stages: ['Inspect damaged siding and nearby transitions for possible water entry and hidden deterioration.', 'Replace the affected material within the agreed scope, considering the surrounding profile and weather protection.', 'Compare the repair with adjacent siding and discuss paint blending or repainting where weathering affects the match.'],
  },
  'fence-installation': {
    planning: 'Discuss the fence line, height, gates, material choices, and any boundary or access questions.',
    stages: ['Review the boundary reference, site access, existing posts, and proposed fence and gate locations.', 'Set supports and fit rails, panels, and gates using specifications suited to the fence and site.', 'Review gate operation, alignment, hardware, and any care needs for the selected material.'],
  },
  pergolas: {
    planning: 'Discuss shade, seating, the pergola’s size, and whether it will connect to an existing structure.',
    stages: ['Review the location and the support, connection, and approval requirements for the pergola.', 'Coordinate supports, framing, and the selected shade features around the project specifications.', 'Review connections, finish details, and care needs for the selected materials.'],
  },
  'home-renovations': {
    planning: 'Identify the rooms involved, priorities, budget considerations, and whether areas of the home need to remain usable.',
    stages: ['Review existing conditions and coordinate the scope across rooms before demolition begins.', 'Sequence the agreed renovation work so related trades and material selections fit together.', 'Review the completed scope room by room and discuss remaining items and finish care.'],
  },
  'garage-remodeling': {
    planning: 'Discuss whether the garage will remain parking and storage space or serve a different use.',
    stages: ['Review the floor, storage layout, access, and any requirements associated with a proposed change of use.', 'Coordinate the selected floor, storage, wall, and utility work around the agreed garage scope.', 'Review access, storage operation, surface details, and care instructions.'],
  },
  'commercial-remodeling': {
    planning: 'Discuss the space’s use, landlord requirements, access, and how construction could affect business operations.',
    stages: ['Review the existing space, proposed changes, and project-specific approval and accessibility considerations.', 'Coordinate the agreed work with access arrangements, business operations, and the project team.', 'Review the space against the agreed scope and discuss remaining finish items and handover requirements.'],
  },
};

export type ProcessContent = {
  title: string;
  audience: string;
  lede: string;
  steps: ProcessStep[];
};

export function getServiceProcessContent(service: ServicePageData): ProcessContent {
  const copy = SERVICE_WORK_COPY[service.slug];
  const processName = service.slug === 'home-renovations' ? 'home renovation'
    : service.slug === 'pergolas' ? 'pergola construction'
    : service.slug === 'closet-systems' ? 'closet installation'
    : service.title.toLowerCase();
  const article = /^[aeiou]/.test(processName) ? 'An' : 'A';
  return {
    title: `${article} ${processName} process`,
    audience: 'you',
    lede: `Understand the ${service.title.toLowerCase()} scope, the decisions needed before work begins, and how to review changes and completion.`,
    steps: [
      { n: '01', title: 'Review', body: copy.planning, duration: 'Initial conversation' },
      { n: '02', title: 'Scope', body: `Confirm which parts of the ${service.title.toLowerCase()} project are included in the estimate, along with materials, exclusions, and any decisions still needed.`, duration: 'Before work begins' },
      { n: '03', title: 'Coordinate', body: 'Discuss access, protection, and the order of work. Agree on how unexpected conditions and proposed changes will be reviewed before additional work proceeds.', duration: 'During the project' },
      { n: '04', title: 'Walkthrough', body: `Review the agreed ${service.title.toLowerCase()} scope together, identify any remaining items, and discuss care instructions for the selected materials.`, duration: 'Completion review' },
    ],
  };
}
