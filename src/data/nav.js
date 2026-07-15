// Single source of truth for the mega-nav link groups.
// Used by both Header (dropdowns) and Footer (columns).

export const NAV_GROUPS = [
  {
    label: "Services",
    links: [
      { to: "/bespoke-applications", icon: "▤", label: "Bespoke Applications (Mobile/Web)" },
      { to: "/custom-agents-automation", icon: "⇋", label: "Custom Agents and Automation" },
      { to: "/native-ai-ml", icon: "◑", label: "Native AI and ML" },
      { to: "/edge-open-connectivity", icon: "⚡", label: "Edge and Open Connectivity" },
      { to: "/scale-governance-insights", icon: "⛭", label: "Scale, Governance and Insights" },
      { to: "/security-compliance", icon: "⛨", label: "Security and Compliance" },
    ],
  },
  {
    label: "Industry",
    links: [
      { to: "/logistics-warehouse", icon: "◈", label: "Logistics & Warehouse" },
      { to: "/discrete-manufacturing", icon: "◎", label: "Discrete Manufacturing" },
      { to: "/pharmaceutical", icon: "☗", label: "Pharmaceutical" },
    ],
  },
  {
    label: "Solutions",
    links: [
      { to: "/complex-digital-workflows", label: "Complex Digital Workflows" },
      { to: "/production-management", label: "Production Management" },
      { to: "/inventory-management", label: "Inventory Management" },
      { to: "/traceability-predictability", label: "Traceability & Predictability" },
    ],
  },
];

export const TOP_LINKS = [
  { to: "/case-studies", label: "Case Studies" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export const FOOTER_COLUMNS = [
  { title: "Services", links: NAV_GROUPS[0].links },
  { title: "Industry", links: NAV_GROUPS[1].links },
  { title: "Solutions", links: NAV_GROUPS[2].links },
  {
    title: "Resources",
    links: [
      { to: "/case-studies", label: "Case Studies" },
      { to: "/contact", label: "Maturity Assessment" },
      { to: "#", label: "Insights (coming soon)" },
    ],
  },
  {
    title: "Company",
    links: [
      { to: "/about", label: "About" },
      { to: "/contact", label: "Contact" },
      { to: "#", label: "Careers" },
      { to: "/contact", label: "Book a Demo" },
      { to: "/contact", label: "Log In" },
    ],
  },
];
