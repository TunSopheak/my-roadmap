import { useMemo, useState } from "react";

const COLORS = {
  blue: "#2563eb",
  cyan: "#0891b2",
  green: "#059669",
  amber: "#d97706",
  rose: "#e11d48",
  violet: "#7c3aed",
};

const phases = [
  {
    period: "Aug 2026 - Jul 2027",
    title: "Foundation to First Role",
    theme: "Student to employable engineer",
    color: COLORS.blue,
    outcomes: [
      "Prepare for Kibo-RPC with reproducible simulations, logs, and release discipline.",
      "Release Love my ស្ទីល v1 and a demonstrable Flutter project.",
      "Secure a full-time technology role before graduation or within 90 days afterward.",
      "Explain projects and complete interviews confidently in English.",
    ],
    evidence: "2 strong projects · 1 Kibo case study · 3-5 targeted applications/week · 80% habit adherence",
  },
  {
    period: "Aug 2027 - Jul 2028",
    title: "Responsible Software Engineer",
    theme: "Reliability, ownership, and stable married life",
    color: COLORS.green,
    outcomes: [
      "Own features from requirement through release and support.",
      "Improve testing, code review, documentation, logging, and CI/CD.",
      "Complete the wedding and establish a healthy household financial system.",
    ],
    evidence: "1 end-to-end feature/quarter · weekly impact log · monthly finance review",
  },
  {
    period: "Aug 2028 - Jul 2029",
    title: "Mid-Level Readiness",
    theme: "Handle ambiguity and own a technical area",
    color: COLORS.cyan,
    outcomes: [
      "Choose a primary specialization: Backend, Mobile, or Full-Stack.",
      "Write design documents, estimate work, and solve production problems.",
      "Own a module or domain and mentor at least one junior/student.",
    ],
    evidence: "Own 1 domain · lead 1 medium project · mentor 1 person · give 1 technical presentation",
  },
  {
    period: "Aug 2029 - Jul 2030",
    title: "Strong Mid-Level",
    theme: "Increase scope, influence, and business understanding",
    color: COLORS.amber,
    outcomes: [
      "Lead planning and technical trade-off discussions.",
      "Deliver measurable architecture, reliability, performance, security, or cost improvement.",
      "Connect engineering decisions to stakeholder and business outcomes.",
    ],
    evidence: "1 cross-functional initiative · 1 measurable technical improvement · mentor 2 people",
  },
  {
    period: "Aug 2030 - Aug 2031",
    title: "Senior-Track Engineer",
    theme: "Ownership beyond assigned tickets",
    color: COLORS.violet,
    outcomes: [
      "Own a critical system or domain and make durable technical decisions.",
      "Lead architecture reviews, incident learning, standards, and mentoring.",
      "Choose the next path using evidence: Senior IC, Lead, Product Engineer, international role, or founder.",
    ],
    evidence: "2 high-impact initiatives · 2 mentees · public talk/article series · next five-year decision",
  },
];

const monthly = [
  ["Aug 2026", "Baseline & Commitment", "Kibo team/repo, Full-Stack audit, Love my ស្ទីល PRD, English recording, wedding-fund tracker"],
  ["Sep 2026", "Registration & Foundation", "Kibo submission proof, 3 technical exercises, ERD, working UI, CV/GitHub baseline"],
  ["Oct 2026", "Simulator & Vertical Slice", "Reproducible Kibo run, structured logs, deployed authentication/product slice, 2 mock interviews"],
  ["Nov 2026", "Robustness & E-Commerce Core", "Failure taxonomy, controlled experiments, cart/order/admin flow, 10+ tests, recruiter-ready README"],
  ["Dec 2026", "Freeze, Demo & Review", "2 mock rounds, Kibo release candidate, Love my ស្ទីល v1, case study, 2027 budget"],
  ["Jan 2027", "Preliminary Readiness", "Last-known-good release, backup, technical pitch, 20 applications/network actions"],
  ["Feb 2027", "Preliminary Round", "Submission evidence, retrospective, user-tested portfolio, 3 interview scorecards"],
  ["Mar 2027", "Job Sprint", "20-30 tailored applications, interview notebook, graduation checklist, 30-60-90 day plan"],
  ["Apr 2027", "Finalist or Portfolio Leverage", "Final-ready release or public-safe case study, CI, Flutter architecture, mentor feedback"],
  ["May 2027", "First Role Conversion", "Offer/onboarding progress, working Flutter flow, documentation, save-first transfer"],
  ["Jun 2027", "Graduation & Stability", "Graduation artifacts, Kibo completion, mobile demo, English reassessment, wedding-gap update"],
  ["Jul 2027", "Professional Rhythm", "Work-impact log, end-to-end work item, updated portfolio, automatic wedding saving"],
  ["Aug 2027", "Ownership & Wedding Planning", "Written performance expectations, improvement proposal, date/budget framework"],
  ["Sep 2027", "Engineer-Level Scope", "Released feature, design note, tests, review feedback, final saving plan"],
  ["Oct 2027", "Performance & Budget Lock", "Evidence file, six-week skill sprint, locked wedding budget, contingencies"],
  ["Nov 2027", "Close Work Strong", "Year-end feedback, clean handover, updated CV, receipts, household budget draft"],
  ["Dec 2027", "Marriage, Review & Reset", "Responsible wedding completion, joint 2028 plan, career review, organized evidence archive"],
];

const priorities = [
  { label: "Career & Skills", detail: "Full-Stack refresh, Flutter depth, English, Love my ស្ទីល", color: COLORS.blue },
  { label: "Kibo-RPC", detail: "Reproducibility, robustness, evidence, teamwork", color: COLORS.cyan },
  { label: "Finance & Life", detail: "Full-time income, responsible wedding fund, emergency cash", color: COLORS.rose },
  { label: "Long-Term Optionality", detail: "Civil-service micro-learning 30-45 minutes daily", color: COLORS.amber },
];

function Pill({ children, color }) {
  return (
    <span style={{ padding: "7px 11px", borderRadius: 999, background: `${color}14`, color, fontWeight: 800, fontSize: 12 }}>
      {children}
    </span>
  );
}

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div style={{ marginBottom: 22 }}>
      <div style={{ color: COLORS.blue, fontWeight: 900, textTransform: "uppercase", letterSpacing: ".12em", fontSize: 12 }}>{eyebrow}</div>
      <h2 style={{ margin: "7px 0 7px", fontSize: "clamp(25px, 4vw, 38px)", lineHeight: 1.15 }}>{title}</h2>
      {description && <p style={{ margin: 0, color: "#64748b", maxWidth: 780, lineHeight: 1.7 }}>{description}</p>}
    </div>
  );
}

function Infographic() {
  const [activeYear, setActiveYear] = useState("all");
  const [query, setQuery] = useState("");

  const filteredMonths = useMemo(() => {
    return monthly.filter(([month, focus, evidence]) => {
      const yearMatch = activeYear === "all" || month.includes(activeYear);
      const textMatch = `${month} ${focus} ${evidence}`.toLowerCase().includes(query.toLowerCase());
      return yearMatch && textMatch;
    });
  }, [activeYear, query]);

  return (
    <main style={{ minHeight: "100vh", background: "linear-gradient(180deg,#eff6ff 0,#f8fafc 360px,#f8fafc 100%)" }}>
      <header style={{ padding: "26px clamp(18px,5vw,72px) 70px" }}>
        <nav style={{ maxWidth: 1180, margin: "0 auto", display: "flex", justifyContent: "space-between", gap: 18, alignItems: "center", flexWrap: "wrap" }}>
          <div style={{ fontWeight: 950, fontSize: 18 }}>Tun Sopheak / My Roadmap</div>
          <div style={{ display: "flex", gap: 9, flexWrap: "wrap" }}>
            <a href="#strategy" style={navLink}>5-Year Strategy</a>
            <a href="#action" style={navLink}>2026-2027 Action Plan</a>
            <a href="https://github.com/TunSopheak/my-roadmap/blob/main/roadmap/roadmap.tex" style={navLink}>LaTeX</a>
          </div>
        </nav>

        <div style={{ maxWidth: 1180, margin: "62px auto 0", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(290px,1fr))", gap: 34, alignItems: "center" }}>
          <div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 18 }}>
              <Pill color={COLORS.blue}>AUG 2026 - AUG 2031</Pill>
              <Pill color={COLORS.green}>RUPP YEAR 4 · E8</Pill>
            </div>
            <h1 style={{ margin: 0, fontSize: "clamp(42px,7vw,76px)", lineHeight: 1.02, letterSpacing: "-.045em" }}>
              Career & Life<br /><span style={{ color: COLORS.blue }}>Roadmap</span>
            </h1>
            <p style={{ color: "#475569", fontSize: 18, lineHeight: 1.75, maxWidth: 690 }}>
              A realistic operating system to move from Year-4 Computer Science student to dependable Software Engineer while preparing for Kibo-RPC, building portfolio evidence, strengthening English, and funding a responsible 2027 wedding.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 24 }}>
              <a href="#action" style={primaryButton}>View monthly plan</a>
              <a href="https://github.com/TunSopheak/my-roadmap" style={secondaryButton}>Open repository</a>
            </div>
          </div>

          <div style={{ background: "#0f172a", borderRadius: 28, padding: 26, color: "white", boxShadow: "0 28px 80px rgba(15,23,42,.22)" }}>
            <div style={{ color: "#93c5fd", fontWeight: 900, fontSize: 12, letterSpacing: ".12em" }}>NORTH STAR</div>
            <h2 style={{ fontSize: 29, lineHeight: 1.25, margin: "10px 0 16px" }}>Become a dependable Software Engineer.</h2>
            <p style={{ color: "#cbd5e1", lineHeight: 1.75, margin: 0 }}>
              Own a feature from requirement and design through coding, testing, deployment, documentation, and support.
            </p>
            <div style={{ height: 1, background: "#334155", margin: "24px 0" }} />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 12 }}>
              {[['Primary stack','Full-Stack + Flutter'],['Portfolio','Love my ស្ទីល'],['Competition','Kibo-RPC'],['Daily habit','30-45 min civil service']].map(([k,v]) => (
                <div key={k} style={{ background: "#1e293b", borderRadius: 16, padding: 14 }}>
                  <div style={{ color: "#94a3b8", fontSize: 11, fontWeight: 800, textTransform: "uppercase" }}>{k}</div>
                  <div style={{ fontWeight: 850, marginTop: 5, lineHeight: 1.4 }}>{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      <section style={sectionWrap}>
        <SectionTitle eyebrow="Current priorities" title="Four priorities, one operating system" description="When time is limited, fixed deadlines come first, then the career engine, life stability, and long-term optionality." />
        <div style={grid4}>
          {priorities.map((item, index) => (
            <article key={item.label} style={{ ...card, borderTop: `4px solid ${item.color}` }}>
              <div style={{ fontSize: 12, fontWeight: 900, color: item.color }}>0{index + 1}</div>
              <h3 style={{ margin: "10px 0 8px", fontSize: 20 }}>{item.label}</h3>
              <p style={{ color: "#64748b", lineHeight: 1.65, margin: 0 }}>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="strategy" style={{ ...sectionWrap, paddingTop: 30 }}>
        <SectionTitle eyebrow="Part 1" title="Five-year strategic phases" description="Progress is defined by evidence gates, not by optimistic titles or arbitrary salary and net-worth promises." />
        <div style={{ display: "grid", gap: 16 }}>
          {phases.map((phase, index) => (
            <article key={phase.title} style={{ ...card, display: "grid", gridTemplateColumns: "minmax(180px,.7fr) minmax(260px,2fr)", gap: 24, borderLeft: `6px solid ${phase.color}` }}>
              <div>
                <Pill color={phase.color}>YEAR {index + 1}</Pill>
                <h3 style={{ margin: "14px 0 7px", fontSize: 25 }}>{phase.title}</h3>
                <div style={{ color: phase.color, fontWeight: 850 }}>{phase.period}</div>
                <p style={{ color: "#64748b", lineHeight: 1.6 }}>{phase.theme}</p>
              </div>
              <div>
                <ul style={{ margin: 0, paddingLeft: 20, color: "#334155", lineHeight: 1.8 }}>
                  {phase.outcomes.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <div style={{ marginTop: 15, padding: 14, background: `${phase.color}0d`, borderRadius: 14, color: phase.color, fontWeight: 750, lineHeight: 1.55 }}>
                  Evidence gate: {phase.evidence}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="action" style={{ ...sectionWrap, paddingTop: 30 }}>
        <SectionTitle eyebrow="Part 2" title="Detailed action plan: Aug 2026 - Dec 2027" description="Filter the monthly plan and use each evidence statement as the definition of done." />
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 20 }}>
          {["all", "2026", "2027"].map((year) => (
            <button key={year} onClick={() => setActiveYear(year)} style={{ ...filterButton, background: activeYear === year ? "#0f172a" : "white", color: activeYear === year ? "white" : "#334155" }}>
              {year === "all" ? "All months" : year}
            </button>
          ))}
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search Kibo, Flutter, wedding, interview..." style={searchInput} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 15 }}>
          {filteredMonths.map(([month, focus, evidence], index) => (
            <article key={month} style={card}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: 10, alignItems: "center" }}>
                <Pill color={month.includes("2026") ? COLORS.blue : COLORS.green}>{month}</Pill>
                <span style={{ color: "#94a3b8", fontSize: 12, fontWeight: 800 }}>#{String(index + 1).padStart(2, "0")}</span>
              </div>
              <h3 style={{ margin: "15px 0 9px", fontSize: 21 }}>{focus}</h3>
              <p style={{ margin: 0, color: "#64748b", lineHeight: 1.7 }}>{evidence}</p>
            </article>
          ))}
        </div>
      </section>

      <section style={{ ...sectionWrap, paddingTop: 30 }}>
        <SectionTitle eyebrow="Review rhythm" title="Measure evidence, not motivation" />
        <div style={grid4}>
          {[['Daily','Choose one must-win task.'],['Weekly','Review evidence and choose three must-wins.'],['Monthly','Update KPIs, finances, and the next month.'],['Yearly','Revise strategy using real outcomes.']].map(([title, detail]) => (
            <article key={title} style={card}>
              <div style={{ fontWeight: 950, fontSize: 22 }}>{title}</div>
              <p style={{ margin: "8px 0 0", color: "#64748b", lineHeight: 1.65 }}>{detail}</p>
            </article>
          ))}
        </div>
      </section>

      <footer style={{ background: "#0f172a", color: "white", marginTop: 48, padding: "38px clamp(18px,5vw,72px)" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", display: "flex", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }}>
          <div>
            <div style={{ fontWeight: 950, fontSize: 19 }}>Tun Sopheak / My Roadmap</div>
            <div style={{ color: "#94a3b8", marginTop: 7 }}>Build skills that produce evidence. Build systems that survive busy days.</div>
          </div>
          <div style={{ color: "#94a3b8" }}>Version 05 August 2026</div>
        </div>
      </footer>
    </main>
  );
}

const sectionWrap = { maxWidth: 1180, margin: "0 auto", padding: "66px clamp(18px,5vw,36px) 0" };
const card = { background: "white", border: "1px solid #e2e8f0", borderRadius: 20, padding: 22, boxShadow: "0 10px 35px rgba(15,23,42,.055)" };
const grid4 = { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 15 };
const navLink = { textDecoration: "none", color: "#475569", fontWeight: 750, padding: "8px 10px" };
const primaryButton = { textDecoration: "none", background: "#2563eb", color: "white", padding: "13px 18px", borderRadius: 13, fontWeight: 850, boxShadow: "0 10px 24px rgba(37,99,235,.24)" };
const secondaryButton = { textDecoration: "none", background: "white", color: "#0f172a", padding: "13px 18px", borderRadius: 13, fontWeight: 850, border: "1px solid #cbd5e1" };
const filterButton = { border: "1px solid #cbd5e1", borderRadius: 999, padding: "10px 15px", fontWeight: 800, cursor: "pointer" };
const searchInput = { minWidth: 260, flex: 1, border: "1px solid #cbd5e1", borderRadius: 999, padding: "10px 16px", background: "white", outline: "none" };

export default Infographic;
