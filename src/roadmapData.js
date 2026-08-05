export const COLORS = {
  career: "#2563eb",
  engineering: "#4f46e5",
  mobile: "#0891b2",
  kibo: "#ea580c",
  english: "#16a34a",
  finance: "#059669",
  civil: "#64748b",
  portfolio: "#7c3aed",
  life: "#e11d48",
  health: "#dc2626",
};

export const categories = [
  { id: "career", label: "Career / Job", icon: "briefcase", color: COLORS.career },
  { id: "engineering", label: "Software Engineering", icon: "code", color: COLORS.engineering },
  { id: "mobile", label: "Mobile / Flutter", icon: "smartphone", color: COLORS.mobile },
  { id: "portfolio", label: "Portfolio / Love my ស្ទីល", icon: "folder", color: COLORS.portfolio },
  { id: "kibo", label: "Kibo-RPC", icon: "robot", color: COLORS.kibo },
  { id: "english", label: "English", icon: "language", color: COLORS.english },
  { id: "finance", label: "Finance / Wedding", icon: "wallet", color: COLORS.finance },
  { id: "civil", label: "Civil-Service Study", icon: "landmark", color: COLORS.civil },
  { id: "health", label: "Health / Energy", icon: "activity", color: COLORS.health },
  { id: "life", label: "Family / Relationship", icon: "heart", color: COLORS.life },
];

export const roadmapPhases = [
  {
    id: "foundation",
    period: "Aug-Dec 2026",
    title: "Build the Foundation",
    subtitle: "Competition readiness + employability baseline",
    color: COLORS.career,
    icons: ["robot", "code", "language", "wallet"],
    outcomes: [
      "Register and prepare systematically for Kibo-RPC.",
      "Refresh Full-Stack fundamentals and build Love my ស្ទីល v1.",
      "Strengthen Flutter coursework and English speaking.",
      "Create a clear CV, GitHub profile, and wedding-fund system.",
    ],
  },
  {
    id: "transition",
    period: "Jan-Jun 2027",
    title: "Convert Skills into Opportunity",
    subtitle: "Graduation + portfolio + first full-time role",
    color: COLORS.kibo,
    icons: ["target", "graduation", "briefcase", "smartphone"],
    outcomes: [
      "Complete the Kibo preliminary/final pathway or publish a strong case study.",
      "Finish the Year-4 mobile project and graduation requirements.",
      "Run a focused job-search and interview system.",
      "Secure a full-time technology role or a strong interview pipeline.",
    ],
  },
  {
    id: "stability",
    period: "Jul-Dec 2027",
    title: "Stabilize Work and Life",
    subtitle: "Engineer-level ownership + responsible wedding preparation",
    color: COLORS.finance,
    icons: ["briefcase", "check", "wallet", "heart"],
    outcomes: [
      "Build a sustainable professional routine and work-impact log.",
      "Own features with testing, documentation, and release evidence.",
      "Complete wedding planning without uncontrolled debt.",
      "Close 2027 with a joint 2028 plan and organized evidence archive.",
    ],
  },
];

export const years = [
  {
    year: 2026,
    icon: "rocket",
    color: COLORS.career,
    theme: "Foundation, discipline, and competition readiness",
    headline: "Build a credible base before chasing more opportunities.",
    suggested: [
      "Complete Kibo-RPC registration and simulator baseline.",
      "Release Love my ស្ទីល v1.",
      "Create a reliable English and civil-service study routine.",
      "Prepare CV, GitHub, portfolio, and wedding-fund tracking.",
    ],
  },
  {
    year: 2027,
    icon: "target",
    color: COLORS.finance,
    theme: "Graduation, first role, and responsible marriage",
    headline: "Convert preparation into a stable career and life transition.",
    suggested: [
      "Graduate with strong portfolio evidence.",
      "Secure and stabilize a full-time technology role.",
      "Demonstrate end-to-end engineering ownership.",
      "Complete the wedding with clear financial boundaries.",
    ],
  },
  {
    year: 2028,
    icon: "briefcase",
    color: COLORS.engineering,
    theme: "Reliable Software Engineer",
    headline: "Own features, improve quality, and establish household stability.",
    suggested: [
      "Own at least one feature per quarter.",
      "Improve testing, documentation, logging, and CI/CD.",
      "Maintain one strong personal project.",
      "Build emergency savings and a stable household budget.",
    ],
  },
  {
    year: 2029,
    icon: "layers",
    color: COLORS.mobile,
    theme: "Mid-level readiness",
    headline: "Handle ambiguity and own a technical area.",
    suggested: [
      "Choose Backend, Mobile, or Full-Stack as the primary specialization.",
      "Write design documents and estimate work.",
      "Own a module or domain.",
      "Mentor at least one junior or student.",
    ],
  },
  {
    year: 2030,
    icon: "chart",
    color: COLORS.kibo,
    theme: "Strong mid-level impact",
    headline: "Increase scope, influence, and business understanding.",
    suggested: [
      "Lead planning and trade-off discussions.",
      "Deliver one measurable system improvement.",
      "Communicate effectively with non-technical stakeholders.",
      "Contribute to community, writing, or open source.",
    ],
  },
  {
    year: 2031,
    icon: "compass",
    color: COLORS.portfolio,
    theme: "Senior-track direction",
    headline: "Operate beyond assigned tickets and choose the next five-year path.",
    suggested: [
      "Own a critical system or domain.",
      "Lead architecture reviews and incident learning.",
      "Mentor and create reusable team standards.",
      "Choose Senior IC, Lead, Product Engineer, international, or founder path.",
    ],
  },
];

const rawMonths = [
  ["2026-08", "August 2026", "Baseline & Commitment", ["Confirm Kibo team, roles, repository, and rules summary.", "Audit Full-Stack skills and create Love my ស្ទីល PRD.", "Record English baseline and create wedding-fund tracker."]],
  ["2026-09", "September 2026", "Registration & Foundation", ["Submit Kibo registration before the deadline.", "Create technical exercises, ERD, and working portfolio UI.", "Prepare CV, GitHub profile, and targeted application tracker."]],
  ["2026-10", "October 2026", "Simulator & Vertical Slice", ["Produce a reproducible Kibo simulator run with logs.", "Deploy an authentication/product vertical slice.", "Complete two mock interviews."]],
  ["2026-11", "November 2026", "Robustness & E-Commerce Core", ["Build Kibo failure taxonomy and controlled experiments.", "Complete cart, order, and admin flows with 10+ tests.", "Publish a recruiter-ready README."]],
  ["2026-12", "December 2026", "Freeze, Demo & Review", ["Complete two Kibo mock rounds and a release candidate.", "Release Love my ស្ទីល v1 and one-page case study.", "Finalize the 2027 budget and quarterly priorities."]],
  ["2027-01", "January 2027", "Preliminary Readiness", ["Maintain a last-known-good Kibo release and backup.", "Practice the technical pitch and English project explanation.", "Complete 20 high-quality application/network actions."]],
  ["2027-02", "February 2027", "Preliminary Round", ["Complete the official submission process with evidence.", "Draft the Kibo retrospective and improve the portfolio from feedback.", "Complete three interview scorecards."]],
  ["2027-03", "March 2027", "Job Sprint", ["Send 20-30 tailored applications.", "Prepare the graduation checklist and interview notebook.", "Write a 30-60-90 day plan for the first role."]],
  ["2027-04", "April 2027", "Finalist or Portfolio Leverage", ["Prepare a final-ready release or public-safe Kibo case study.", "Add CI and Flutter architecture evidence.", "Get mentor feedback and complete two interviews."]],
  ["2027-05", "May 2027", "First Role Conversion", ["Progress toward an offer or structured onboarding.", "Complete the working Flutter flow and documentation.", "Transfer wedding savings before optional spending."]],
  ["2027-06", "June 2027", "Graduation & Stability", ["Complete graduation artifacts and the mobile demo.", "Finish the Kibo pathway and mid-year English reassessment.", "Update the job status and wedding-fund gap."]],
  ["2027-07", "July 2027", "Professional Rhythm", ["Create a weekly work-impact log.", "Complete one end-to-end work item.", "Automate wedding savings and update the portfolio."]],
  ["2027-08", "August 2027", "Ownership & Wedding Planning", ["Write clear performance expectations with the lead/manager.", "Propose one technical improvement.", "Confirm the wedding date range and budget framework."]],
  ["2027-09", "September 2027", "Engineer-Level Scope", ["Release a feature with a design note and tests.", "Collect code-review feedback and share one lesson.", "Finalize the three-month wedding saving plan."]],
  ["2027-10", "October 2027", "Performance & Budget Lock", ["Create a performance evidence file and six-week skill sprint.", "Lock wedding budget categories and contingencies.", "Record one English technical explanation."]],
  ["2027-11", "November 2027", "Close Work Strong", ["Request year-end feedback and document handover.", "Update the CV with measurable achievements.", "Prepare receipts and the 2028 household budget draft."]],
  ["2027-12", "December 2027", "Marriage, Review & Reset", ["Complete the wedding without uncontrolled debt.", "Create a joint 2028 financial and family plan.", "Archive evidence and select three Q1-2028 outcomes."]],
];

export const months = rawMonths.map(([id, label, theme, outcomes]) => ({
  id,
  label,
  year: Number(id.slice(0, 4)),
  theme,
  outcomes,
}));

export const plannerCategoryIds = [
  "career",
  "engineering",
  "mobile",
  "portfolio",
  "kibo",
  "english",
  "finance",
  "civil",
  "health",
  "life",
];
