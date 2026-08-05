import { useEffect, useMemo, useState } from "react";
import {
  COLORS,
  categories,
  months,
  plannerCategoryIds,
  roadmapPhases,
  years,
} from "./roadmapData";

const iconPaths = {
  briefcase: ["M9 6V4h6v2", "M4 7h16v11H4z", "M4 11h16", "M10 11v2h4v-2"],
  code: ["m8 9-3 3 3 3", "m16 9 3 3-3 3", "m14 6-4 12"],
  smartphone: ["M7 2h10v20H7z", "M10 18h4"],
  folder: ["M3 6h7l2 2h9v10H3z"],
  robot: ["M8 8V6h8v2", "M12 6V3", "M6 9h12v9H6z", "M9 12h.01", "M15 12h.01", "M9 16h6"],
  language: ["M4 5h8", "M8 3v2c0 4-2 7-5 9", "M5 10c2 2 4 3 7 4", "m14 6-4 12", "m16 15 4 3", "m14 15 4-3"],
  wallet: ["M4 6h14v13H4z", "M16 10h5v5h-5", "M17 12h.01"],
  landmark: ["m3 9 9-5 9 5", "M5 10v8", "M9 10v8", "M15 10v8", "M19 10v8", "M3 20h18"],
  activity: ["M3 12h4l2-5 4 10 2-5h6"],
  heart: ["M20 5c-2-2-5-1-8 2-3-3-6-4-8-2-3 3-1 7 8 14 9-7 11-11 8-14z"],
  target: ["M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z", "M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12z", "M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"],
  graduation: ["m2 10 10-5 10 5-10 5z", "M6 12v5c3 2 9 2 12 0v-5", "M22 10v6"],
  check: ["M20 6 9 17l-5-5"],
  rocket: ["M14 4c3-2 5-2 6-2 0 1 0 3-2 6l-5 5-4-4z", "M9 15 4-4", "M5 14l-2 5 5-2", "M10 19l-2 3 5-2"],
  layers: ["m12 2 9 5-9 5-9-5z", "m3 12 9 5 9-5", "m3 17 9 5 9-5"],
  chart: ["M4 20V10", "M10 20V4", "M16 20v-7", "M22 20H2"],
  compass: ["M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z", "m16 8-3 6-5 2 3-6z"],
  calendar: ["M4 5h16v15H4z", "M8 2v5", "M16 2v5", "M4 9h16"],
  book: ["M4 4h6c2 0 2 2 2 2v14c0-2-2-2-2-2H4z", "M20 4h-6c-2 0-2 2-2 2v14c0-2 2-2 2-2h6z"],
  save: ["M5 3h12l2 2v16H5z", "M8 3v6h8V3", "M8 15h8v6H8z"],
  printer: ["M6 9V3h12v6", "M6 18H4V9h16v9h-2", "M6 14h12v7H6z"],
  reset: ["M3 12a9 9 0 1 0 3-7", "M3 3v6h6"],
  chevron: ["m9 18 6-6-6-6"],
};

function Icon({ name, size = 22, strokeWidth = 1.9, className = "" }) {
  const paths = iconPaths[name] || iconPaths.target;
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths.map((path, index) => <path key={`${name}-${index}`} d={path} />)}
    </svg>
  );
}

const initialPlanner = {
  years: {},
  months: {},
};

function loadPlanner() {
  try {
    const saved = localStorage.getItem("tun-sopheak-roadmap-planner-v2");
    return saved ? { ...initialPlanner, ...JSON.parse(saved) } : initialPlanner;
  } catch {
    return initialPlanner;
  }
}

function usePlanner() {
  const [planner, setPlanner] = useState(loadPlanner);

  useEffect(() => {
    localStorage.setItem("tun-sopheak-roadmap-planner-v2", JSON.stringify(planner));
  }, [planner]);

  const updateYear = (year, field, value) => {
    setPlanner((current) => ({
      ...current,
      years: {
        ...current.years,
        [year]: { ...(current.years[year] || {}), [field]: value },
      },
    }));
  };

  const updateMonth = (monthId, field, value) => {
    setPlanner((current) => ({
      ...current,
      months: {
        ...current.months,
        [monthId]: { ...(current.months[monthId] || {}), [field]: value },
      },
    }));
  };

  const reset = () => {
    if (window.confirm("Clear all personal planner notes saved in this browser?")) {
      setPlanner(initialPlanner);
      localStorage.removeItem("tun-sopheak-roadmap-planner-v2");
    }
  };

  return { planner, updateYear, updateMonth, reset };
}

function Field({ label, value = "", onChange, placeholder, rows = 2 }) {
  return (
    <label className="planner-field">
      <span>{label}</span>
      <textarea rows={rows} value={value} onChange={(event) => onChange(event.target.value)} placeholder={placeholder} />
    </label>
  );
}

function CheckLine({ checked, onChange, children }) {
  return (
    <label className="check-line">
      <input type="checkbox" checked={Boolean(checked)} onChange={(event) => onChange(event.target.checked)} />
      <span className="check-box" aria-hidden="true" />
      <span>{children}</span>
    </label>
  );
}

function SectionHeading({ icon, eyebrow, title, copy }) {
  return (
    <div className="section-heading">
      <div className="section-heading__icon"><Icon name={icon} size={25} /></div>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        {copy && <p className="section-copy">{copy}</p>}
      </div>
    </div>
  );
}

function AnnualPlanner({ year, data, onUpdate }) {
  const saved = data || {};
  return (
    <details className="year-planner" open={year.year <= 2027}>
      <summary>
        <div className="year-badge" style={{ "--accent": year.color }}><Icon name={year.icon} />{year.year}</div>
        <div className="year-summary-copy">
          <strong>{year.theme}</strong>
          <span>{year.headline}</span>
        </div>
        <Icon name="chevron" className="summary-chevron" />
      </summary>

      <div className="year-planner__body">
        <div className="suggested-goals">
          <h3><Icon name="target" /> Suggested outcomes</h3>
          {year.suggested.map((item, index) => (
            <CheckLine key={item} checked={saved[`suggested-${index}`]} onChange={(value) => onUpdate(`suggested-${index}`, value)}>{item}</CheckLine>
          ))}
        </div>

        <div className="form-grid form-grid--two">
          <Field label="My theme for this year" value={saved.theme} onChange={(value) => onUpdate("theme", value)} placeholder="Example: Build evidence, not just plans" />
          <Field label="What do I want most this year?" value={saved.desire} onChange={(value) => onUpdate("desire", value)} placeholder="Write the most important result" />
          <Field label="What must be true by year-end?" value={saved.success} onChange={(value) => onUpdate("success", value)} placeholder="Define success in observable terms" />
          <Field label="Skills to master" value={saved.skills} onChange={(value) => onUpdate("skills", value)} placeholder="Technical, English, leadership..." />
          <Field label="Projects / evidence to finish" value={saved.projects} onChange={(value) => onUpdate("projects", value)} placeholder="Project, case study, demo, certification..." />
          <Field label="Money / family target" value={saved.finance} onChange={(value) => onUpdate("finance", value)} placeholder="Savings, wedding, emergency fund..." />
          <Field label="Health and relationship target" value={saved.life} onChange={(value) => onUpdate("life", value)} placeholder="Sleep, exercise, family time..." />
          <Field label="Biggest risk and prevention" value={saved.risk} onChange={(value) => onUpdate("risk", value)} placeholder="What could derail this year?" />
        </div>

        <div className="priority-editor">
          <h3>My top five priorities</h3>
          {[0, 1, 2, 3, 4].map((index) => (
            <label key={index}><span>{index + 1}</span><input value={saved[`priority-${index}`] || ""} onChange={(event) => onUpdate(`priority-${index}`, event.target.value)} placeholder="Add a priority..." /></label>
          ))}
        </div>
      </div>
    </details>
  );
}

function MonthlyPlanner({ month, data, onUpdate }) {
  const saved = data || {};
  return (
    <details className="month-planner">
      <summary>
        <div className="month-number"><Icon name="calendar" />{month.label}</div>
        <div className="month-focus"><strong>{month.theme}</strong><span>{month.outcomes[0]}</span></div>
        <Icon name="chevron" className="summary-chevron" />
      </summary>

      <div className="month-planner__body">
        <div className="month-objectives">
          <h3><Icon name="target" /> Definition of done</h3>
          {month.outcomes.map((item, index) => (
            <CheckLine key={item} checked={saved[`outcome-${index}`]} onChange={(value) => onUpdate(`outcome-${index}`, value)}>{item}</CheckLine>
          ))}
        </div>

        <div className="must-win-grid">
          {[0, 1, 2].map((index) => (
            <label key={index}>
              <span>Must-win {index + 1}</span>
              <input value={saved[`mustwin-${index}`] || ""} onChange={(event) => onUpdate(`mustwin-${index}`, event.target.value)} placeholder="What must be completed?" />
            </label>
          ))}
        </div>

        <div className="category-note-grid">
          {plannerCategoryIds.map((categoryId) => {
            const category = categories.find((item) => item.id === categoryId);
            return (
              <Field key={categoryId} label={category.label} value={saved[categoryId]} onChange={(value) => onUpdate(categoryId, value)} placeholder={`Actions for ${category.label.toLowerCase()}...`} rows={2} />
            );
          })}
        </div>

        <div className="form-grid form-grid--two reflection-grid">
          <Field label="Evidence created" value={saved.evidence} onChange={(value) => onUpdate("evidence", value)} placeholder="Links, commits, demo, result, receipt..." />
          <Field label="Completed / delayed" value={saved.review} onChange={(value) => onUpdate("review", value)} placeholder="What finished? What moved?" />
          <Field label="Lesson learned" value={saved.lesson} onChange={(value) => onUpdate("lesson", value)} placeholder="One lesson to keep" />
          <Field label="Next month focus" value={saved.next} onChange={(value) => onUpdate("next", value)} placeholder="What changes next month?" />
        </div>
      </div>
    </details>
  );
}

export default function Infographic() {
  const [activeYear, setActiveYear] = useState("all");
  const [search, setSearch] = useState("");
  const { planner, updateYear, updateMonth, reset } = usePlanner();

  const filteredMonths = useMemo(() => months.filter((month) => {
    const yearMatch = activeYear === "all" || month.year === Number(activeYear);
    const content = `${month.label} ${month.theme} ${month.outcomes.join(" ")}`.toLowerCase();
    return yearMatch && content.includes(search.toLowerCase());
  }), [activeYear, search]);

  return (
    <main className="app-shell">
      <header className="hero" id="top">
        <nav className="top-nav">
          <a href="#top" className="brand"><span>TS</span><strong>My Roadmap</strong></a>
          <div className="nav-links">
            <a href="#visual-roadmap">2026-2027</a>
            <a href="#year-planner">Yearly Planner</a>
            <a href="#month-planner">Monthly Planner</a>
            <a href="https://github.com/TunSopheak/my-roadmap/blob/main/roadmap/roadmap.pdf">PDF</a>
          </div>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <div className="hero-pills"><span>Aug 2026 - Aug 2031</span><span>RUPP Year 4 · E8</span></div>
            <p className="eyebrow">Career & Life Planning System</p>
            <h1>Plan the year.<br /><em>Win the month.</em></h1>
            <p className="hero-lead">A visual roadmap with clear icons, yearly intentions, monthly outcomes, editable notes, and a printable planner for the journey from student to dependable Software Engineer.</p>
            <div className="hero-actions">
              <a className="button button--primary" href="#visual-roadmap"><Icon name="target" /> View roadmap</a>
              <button className="button button--secondary" onClick={() => window.print()}><Icon name="printer" /> Print page</button>
            </div>
            <p className="privacy-note"><Icon name="save" size={17} /> Your planner entries are saved only in this browser.</p>
          </div>

          <aside className="north-star-card">
            <div className="north-star-icon"><Icon name="compass" size={34} /></div>
            <p className="eyebrow">North Star</p>
            <h2>Become a dependable Software Engineer.</h2>
            <p>Own a feature from requirement and design through coding, testing, deployment, documentation, and support.</p>
            <div className="north-star-stats">
              <div><Icon name="code" /><span>Primary track</span><strong>Full-Stack + Flutter</strong></div>
              <div><Icon name="robot" /><span>Competition</span><strong>Kibo-RPC</strong></div>
              <div><Icon name="wallet" /><span>Life goal</span><strong>Wedding 2027</strong></div>
              <div><Icon name="book" /><span>Daily habit</span><strong>30-45 minutes</strong></div>
            </div>
          </aside>
        </div>
      </header>

      <section className="section category-section">
        <SectionHeading icon="layers" eyebrow="Icon system" title="One symbol for every important area" copy="The same categories and colors are used across the website and printable planner." />
        <div className="category-grid">
          {categories.map((category) => (
            <article className="category-card" key={category.id} style={{ "--accent": category.color }}>
              <div className="category-icon"><Icon name={category.icon} /></div>
              <strong>{category.label}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="visual-roadmap">
        <SectionHeading icon="rocket" eyebrow="Visual roadmap" title="The critical 17-month journey" copy="The detailed execution window is divided into three memorable phases, each with a clear purpose and definition of success." />
        <div className="phase-timeline">
          {roadmapPhases.map((phase, index) => (
            <article className="phase-card" key={phase.id} style={{ "--accent": phase.color }}>
              <div className="phase-marker">{index + 1}</div>
              <div className="phase-period">{phase.period}</div>
              <h3>{phase.title}</h3>
              <p className="phase-subtitle">{phase.subtitle}</p>
              <div className="phase-icons">{phase.icons.map((icon) => <span key={icon}><Icon name={icon} /></span>)}</div>
              <ul>{phase.outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="year-planner">
        <SectionHeading icon="calendar" eyebrow="Annual planner" title="What do I want from each year?" copy="Open a year, check the suggested outcomes, and add your own priorities. Entries save automatically in your browser." />
        <div className="planner-stack">
          {years.map((year) => (
            <AnnualPlanner key={year.year} year={year} data={planner.years[year.year]} onUpdate={(field, value) => updateYear(year.year, field, value)} />
          ))}
        </div>
      </section>

      <section className="section" id="month-planner">
        <SectionHeading icon="target" eyebrow="Monthly planner" title="What must this month achieve?" copy="Every month contains a suggested definition of done, three editable must-wins, category notes, and a reflection area." />
        <div className="planner-toolbar">
          <div className="year-filter">
            {["all", "2026", "2027"].map((year) => <button className={activeYear === year ? "active" : ""} key={year} onClick={() => setActiveYear(year)}>{year === "all" ? "All months" : year}</button>)}
          </div>
          <input type="search" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search Kibo, Flutter, wedding..." />
        </div>
        <div className="planner-stack month-stack">
          {filteredMonths.map((month) => (
            <MonthlyPlanner key={month.id} month={month} data={planner.months[month.id]} onUpdate={(field, value) => updateMonth(month.id, field, value)} />
          ))}
        </div>
      </section>

      <section className="section review-section">
        <SectionHeading icon="check" eyebrow="Review system" title="Measure evidence, not motivation" />
        <div className="review-grid">
          {[ ["Daily", "target", "Choose one must-win task."], ["Weekly", "check", "Review evidence and choose three must-wins."], ["Monthly", "calendar", "Update KPIs, money, lessons, and the next month."], ["Yearly", "compass", "Revise the strategy using real outcomes."] ].map(([title, icon, copy]) => (
            <article key={title}><Icon name={icon} /><h3>{title}</h3><p>{copy}</p></article>
          ))}
        </div>
        <div className="planner-actions">
          <button className="button button--secondary" onClick={() => window.print()}><Icon name="printer" /> Print website</button>
          <button className="button button--danger" onClick={reset}><Icon name="reset" /> Reset browser notes</button>
          <a className="button button--primary" href="https://github.com/TunSopheak/my-roadmap/blob/main/roadmap/roadmap.pdf"><Icon name="book" /> Open printable PDF</a>
        </div>
      </section>

      <footer>
        <div><strong>Tun Sopheak / My Roadmap</strong><span>Build skills that produce evidence. Build systems that survive busy days.</span></div>
        <a href="https://github.com/TunSopheak/my-roadmap">GitHub repository</a>
      </footer>
    </main>
  );
}
