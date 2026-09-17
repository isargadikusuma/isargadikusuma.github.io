export const navItems = [
  { label: 'Work', href: '#work' },
  { label: 'Range', href: '#range' },
  { label: 'Method', href: '#method' },
  { label: 'Contact', href: '#contact' },
];

export const lenses = [
  {
    key: 'direction',
    label: 'Direction',
    kicker: 'PROJECT MANAGEMENT',
    title: 'Turn pressure into a sequence people can actually ship.',
    body: 'I translate business urgency into scope, priorities, owners, states, and delivery decisions that stay coherent from kickoff to production.',
    chips: ['Scope', 'Priority', 'Delivery'],
  },
  {
    key: 'systems',
    label: 'Systems',
    kicker: 'TECHNICAL FLUENCY',
    title: 'See the workflow behind the screen.',
    body: 'I can follow data, status transitions, permissions, realtime behavior, integrations, and edge cases deeply enough to challenge the shape of a solution.',
    chips: ['ERP', 'Realtime', 'Architecture'],
  },
  {
    key: 'experience',
    label: 'Experience',
    kicker: 'PRODUCT + UX',
    title: 'Protect usability while the system gets more capable.',
    body: 'I care about defaults, feedback, density, performance, interaction states, and whether the final product is actually comfortable to operate every day.',
    chips: ['UX', 'Performance', 'Clarity'],
  },
];

export const projects = [
  {
    index: '01',
    title: 'KARUNIA',
    subtitle: 'Operational system',
    description:
      'An interconnected order, stock, mapping, transaction, and sales workflow where realtime behavior and business rules have to stay synchronized.',
    contribution: 'Project direction / workflow design / UX / technical coordination',
    tags: ['Operations', 'Realtime', 'ERP'],
    accent: 'cyan',
    metric: 'Order → Mapping → Stock → Transaction',
    modules: ['Orders', 'Mapping', 'Stock', 'Trans'],
  },
  {
    index: '02',
    title: 'ERP Distributor',
    subtitle: 'Enterprise platform',
    description:
      'A modular ERP covering sales, purchasing, warehouse, finance, AR/AP, closing, intercompany flows, multi-entity separation, and consolidated reporting.',
    contribution: 'Product architecture / domain scope / delivery sequencing',
    tags: ['Multi-Entity', 'Finance', 'Warehouse'],
    accent: 'violet',
    metric: 'Business domains → One operating model',
    modules: ['Sales', 'Warehouse', 'Finance', 'AR/AP'],
  },
  {
    index: '03',
    title: 'Aurora POS',
    subtitle: 'Retail experience',
    description:
      'A POS and back-office experience shaped around speed at the counter, dense operational information, modular UI behavior, and performance under real use.',
    contribution: 'UX direction / product scope / performance priorities',
    tags: ['POS', 'Back Office', 'SPA'],
    accent: 'lime',
    metric: 'Fast frontline / rich back office',
    modules: ['POS', 'Catalog', 'Orders', 'Back Office'],
  },
  {
    index: '04',
    title: 'iInvitation',
    subtitle: 'Digital experience',
    description:
      'A visual invitation product with a customer-facing experience and an administrative layer for content, catalog, packages, and approval workflow.',
    contribution: 'Experience direction / workflow / product shaping',
    tags: ['Web', 'Experience', 'Workflow'],
    accent: 'pink',
    metric: 'Visual experience / operating workflow',
    modules: ['Experience', 'Catalog', 'Packages', 'Workflow'],
  },
];

export const advantages = [
  {
    number: '01',
    title: 'Business context stays attached to the build.',
    body: 'I keep the reason behind a request visible while the solution moves through design, implementation, edge cases, and iteration.',
    signal: 'BUSINESS ↔ PRODUCT',
  },
  {
    number: '02',
    title: 'I can go technical without turning the meeting into theatre.',
    body: 'I read logs, follow data behavior, question architecture trade-offs, and understand frontend or backend constraints well enough to make better product decisions.',
    signal: 'PRODUCT ↔ ENGINEERING',
  },
  {
    number: '03',
    title: 'UX is part of delivery quality, not decoration.',
    body: 'A feature is not finished when it exists. It should communicate state clearly, respond quickly, and fit the operator workflow without unnecessary friction.',
    signal: 'DELIVERY ↔ EXPERIENCE',
  },
];

export const method = [
  {
    index: '01',
    verb: 'Trace',
    title: 'Understand the operating reality',
    body: 'Follow the user, workflow, data, constraints, and business rules before deciding what should change.',
  },
  {
    index: '02',
    verb: 'Shape',
    title: 'Turn ambiguity into a system',
    body: 'Define states, ownership, boundaries, priorities, and a delivery sequence that the team can reason about.',
  },
  {
    index: '03',
    verb: 'Drive',
    title: 'Keep implementation aligned',
    body: 'Coordinate decisions, challenge drift, protect critical behavior, and keep momentum without losing product coherence.',
  },
  {
    index: '04',
    verb: 'Refine',
    title: 'Use reality as the final reviewer',
    body: 'Tune performance, defaults, edge cases, and interaction quality after the product meets real operators and real data.',
  },
];

export const capabilityGroups = [
  {
    label: 'Product',
    items: ['Requirements', 'Prioritization', 'Workflow design', 'Scope control'],
  },
  {
    label: 'Systems',
    items: ['ERP', 'Business rules', 'Realtime flows', 'Data behavior'],
  },
  {
    label: 'Delivery',
    items: ['Coordination', 'QA thinking', 'Iteration', 'Release focus'],
  },
  {
    label: 'Experience',
    items: ['UI direction', 'Interaction states', 'Performance', 'Information hierarchy'],
  },
];
