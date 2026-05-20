export type SvcIconType = 'kitchen' | 'bath' | 'paint' | 'floor' | 'cabinet' | 'trim' | 'door' | 'deck';

export interface ServiceCard {
  num: string;
  icon: SvcIconType;
  span: 1 | 2;
  title: string;
  titleText: string;
  slug: string;
  desc: string;
}

export const SERVICES_BENTO: ServiceCard[] = [
  {
    num: '01',
    icon: 'kitchen',
    span: 2,
    title: 'Kitchen <em>Remodeling</em>',
    titleText: 'Kitchen Remodeling',
    slug: 'kitchen-remodeling',
    desc: 'Houston kitchen remodeling with layout planning, custom cabinetry, stone counters, lighting, and clean finish work.',
  },
  {
    num: '02',
    icon: 'bath',
    span: 2,
    title: 'Bathroom <em>Remodeling</em>',
    titleText: 'Bathroom Remodeling',
    slug: 'bathroom-remodeling',
    desc: 'Bathroom remodeling for primary suites, hall baths, walk-in showers, tile, vanities, plumbing, and durable finishes.',
  },
  {
    num: '03',
    icon: 'paint',
    span: 1,
    title: 'Interior <em>Painting</em>',
    titleText: 'Interior Painting',
    slug: 'interior-painting',
    desc: 'Interior painting for Houston homes, with surface prep, trim detail, wall repair, and clean modern color transitions.',
  },
  {
    num: '04',
    icon: 'floor',
    span: 1,
    title: 'Flooring',
    titleText: 'Flooring',
    slug: 'flooring',
    desc: 'Flooring installation and replacement for Houston homes, including hardwood, tile, luxury vinyl plank, transitions, and finish details.',
  },
  {
    num: '05',
    icon: 'cabinet',
    span: 1,
    title: 'Cabinets',
    titleText: 'Cabinets',
    slug: 'cabinet-installation',
    desc: 'Cabinet installation for kitchen remodels, baths, built-ins, storage walls, appliance panels, and hardware.',
  },
  {
    num: '06',
    icon: 'trim',
    span: 1,
    title: 'Trim &amp; <em>Finish Work</em>',
    titleText: 'Trim & Finish Work',
    slug: 'trim-finish-carpentry',
    desc: 'Finish carpentry for remodels: crown, baseboards, paneling, built-ins, door casing, and clean transitions.',
  },
  {
    num: '07',
    icon: 'door',
    span: 2,
    title: 'Doors &amp; <em>Windows</em>',
    titleText: 'Doors & Windows',
    slug: 'door-installation',
    desc: 'Heritage replacement, new openings, steel casements, custom thresholds. We handle the structural too.',
  },
  {
    num: '08',
    icon: 'deck',
    span: 2,
    title: 'Decks',
    titleText: 'Decks',
    slug: 'deck-construction',
    desc: "Ipe, thermally modified ash, concrete. Seamless threshold details. Built for Houston's heat and humidity.",
  },
];
