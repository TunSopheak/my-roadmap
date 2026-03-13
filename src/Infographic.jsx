import { useState } from "react";

const YEARS = [
  {
    year: 2026,
    icon: "🌱",
    label: "Foundation",
    color: "#06b6d4",
    bg: "#ecfeff",
    pill: "#cffafe",
    text: "#0e7490",
  },
  {
    year: 2027,
    icon: "🔥",
    label: "First Role & Marriage",
    color: "#f43f5e",
    bg: "#fff1f2",
    pill: "#ffe4e6",
    text: "#be123c",
  },
  {
    year: 2028,
    icon: "📈",
    label: "Growing Together",
    color: "#10b981",
    bg: "#f0fdf4",
    pill: "#dcfce7",
    text: "#047857",
  },
  {
    year: 2029,
    icon: "⚡",
    label: "Senior Track",
    color: "#f59e0b",
    bg: "#fffbeb",
    pill: "#fef3c7",
    text: "#b45309",
  },
  {
    year: 2030,
    icon: "🏆",
    label: "Peak Level",
    color: "#8b5cf6",
    bg: "#faf5ff",
    pill: "#ede9fe",
    text: "#6d28d9",
  },
];

const CATS = [
  { id: "career", icon: "💻", label: "Career & Tech" },
  { id: "finance", icon: "💰", label: "Finance" },
  { id: "family", icon: "❤️", label: "Relationships" },
  { id: "growth", icon: "🧠", label: "Personal Growth" },
  { id: "creative", icon: "🚀", label: "Creative" },
  { id: "mindset", icon: "🌱", label: "Mindset" },
];

const MONTHS_2026 = [
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const MONTHS_ALL = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const DAILY = {
  2026: [
    "Solve 1 LeetCode problem",
    "Study 2 hours minimum",
    "30 min morning routine",
    "Read 20 pages",
    "Journal 10 min",
    "Track every expense",
    "1 hr on side project",
    "No phone first 30 min",
    "Write 3 gratitudes",
    "Sleep before midnight",
  ],
  2027: [
    "1 hr coding practice",
    "Review 1 system design concept",
    "Morning routine + cold shower",
    "Read 20 pages",
    "Journal every evening",
    "1 intentional act of love",
    "Log savings & expenses",
    "1 hr side project",
    "10 min meditation",
    "3 things grateful for",
  ],
  2028: [
    "Deep work 90-min block",
    "Study system design 30 min",
    "Intentional morning routine",
    "Read 20 pages",
    "Journal & reflect evening",
    "Weekly date night",
    "Product: 1 hr daily",
    "Track net worth monthly",
    "10 min language learning",
    "Mentor check-in weekly",
  ],
  2029: [
    "2h deep work blocks (×2)",
    "Review architectural decisions",
    "Read 30 pages",
    "Write/journal 15 min",
    "Quality time with partner",
    "Product: 1.5 hrs daily",
    "Monthly net worth tracking",
    "Mentor 1× per week",
    "Exercise 4×/week",
    "Stoic journaling morning",
  ],
  2030: [
    "3h deep work (peak output)",
    "Write or publish something",
    "Read 30 pages",
    "Journal with gratitude focus",
    "Intentional family time",
    "Product: strategic 2h daily",
    "Mentor someone meaningfully",
    "Exercise 5×/week",
    "Monthly investment review",
    "Am I living with purpose?",
  ],
};

const DATA = {
  2026: {
    March: {
      career: "Master Arrays, Strings & HashMaps · set up clean GitHub",
      finance: "Build a budget · track every expense",
      family: "Schedule family day · find a tech mentor",
      growth: "Start Book #1 · design ideal daily schedule",
      creative: "Pick project idea · write 1-page plan",
      mindset: "Design morning routine · start gratitude journal",
    },
    April: {
      career: "Complete Trees & Graphs · build portfolio project #1",
      finance: "Open savings account · review March budget",
      family: "Deep 1-on-1 talk with family · reach out to mentor",
      growth: "Finish Book #1 · complete a free tutorial",
      creative: "Build & deploy MVP · get first feedback",
      mindset: "Start night journal · digital detox day",
    },
    May: {
      career: "Apply 5+ internships/week · study dynamic programming",
      finance: "Research ETFs · set year-end savings goal",
      family: "Family meal · reconnect with an old friend",
      growth: "Enroll in paid course · weekly notes review",
      creative: "Feature from user feedback · publish 1st blog post",
      mindset: "30-day no social media AM · 5 min meditation",
    },
    June: {
      career: "Mock interviews daily · refresh resume & LinkedIn",
      finance: "Make first small investment · mid-year savings check",
      family: "Family outing · mid-year talk with mentor",
      growth: "Book #6 · mid-year goals review",
      creative: "10 users on project · submit to indie community",
      mindset: "Full mid-year reflection · reset 2026 goals",
    },
    July: {
      career: "Land internship 🎉 · build portfolio project #2",
      finance: "Automate savings · cut 1 subscription",
      family: "Family experience · phone-free evenings",
      growth: "Read 2 books this month · join a tech community",
      creative: "2nd blog post · prototype next project",
      mindset: "30 days daily meditation · read stoicism book",
    },
    August: {
      career: "Deep-dive React/Node/Python · build real-problem project",
      finance: "Investment review · explore freelancing",
      family: "Reconnect with 2 people · future conversation with family",
      growth: "System design basics · attend tech meetup",
      creative: "Launch updated project · share on LinkedIn",
      mindset: "Screen audit (−20%) · track every win",
    },
    September: {
      career: "Portfolio project #3 · apply to full-time roles",
      finance: "First net worth calculation · spend 20% less",
      family: "Family celebration · write what family means to you",
      growth: "Book #9 · attend tech conference · teach someone",
      creative: "Join a hackathon · 3rd blog post",
      mindset: "Letter to March self · start Sunday review habit",
    },
    October: {
      career: "Apply 10+ roles · STAR method prep · resume review",
      finance: "Find freelance gig · savings goal on track?",
      family: "Express appreciation to family · holiday event planning",
      growth: "New tech skill · write personal mission statement",
      creative: "Polish & launch final project · write case study",
      mindset: "Replace 3 bad habits · say no to distractions",
    },
    November: {
      career: "Keep grinding interviews · review skill growth",
      finance: "Year-end savings review · did you hit your target?",
      family: "Year-end celebration · thank mentors & supporters",
      growth: "Book #11 · write 1-page 2026 learnings summary",
      creative: "Year-in-review post · plan 2027 project",
      mindset: "30 gratitudes · who did you become this year?",
    },
    December: {
      career: "Full career review · update GitHub & LinkedIn",
      finance: "Count total savings · set 2027 financial target",
      family: "Quality family time · share 2026 wins proudly",
      growth: "Book #12 ✅ · full-year life review all 6 areas",
      creative: "Celebrate builds · document portfolio · announce 2027 project",
      mindset: "Full yearly review · enter 2027 with clarity & momentum",
    },
  },
  2027: {
    January: {
      career: "Apply 20+ full-time startup roles · practice phone screens",
      finance: "Create strict 2027 budget · open brokerage account",
      family:
        "Start year with family vision share · discuss future with partner",
      growth: "Book #1 of 2027 · set 3 non-negotiable habits",
      creative: "Brainstorm startup ideas · research target users",
      mindset: "Write 2027 vision · set your word/theme for the year",
    },
    February: {
      career: "Land 2 final-round interviews · advanced system design",
      finance: "Automate monthly savings · calculate 2026 net worth baseline",
      family: "Plan romantic date · check: are goals aligned with partner?",
      growth: "Book #2 · join accountability partner",
      creative: "Build rough prototype · validate with 5 target users",
      mindset:
        "30-day gratitude & visualization · write: what kind of partner?",
    },
    March: {
      career: "🎉 LAND FIRST FULL-TIME SWE ROLE · negotiate salary!",
      finance:
        "Map new salary to savings & investment plan · start $200/mo investing",
      family:
        "Celebrate with family — they sacrificed too · share with partner",
      growth: "Start 'new job journal' · read SWE best practices book",
      creative: "Build alongside job · write blog: landing first role",
      mindset: "Manage imposter syndrome · set work-life balance from day 1",
    },
    April: {
      career: "Merge first PR · learn codebase · meet every teammate",
      finance:
        "First full paycheck plan · auto-invest · track first month spend",
      family:
        "Support family financially for first time · thank parents in action",
      growth: "Clean code book · document 10 learnings at new job",
      creative: "1 hour/day on project · ship new update",
      mindset: "Don't break habits under pressure · journal proudly",
    },
    May: {
      career: "Complete first major feature · ask proactive manager feedback",
      finance: "Start wedding fund · research marriage financial planning",
      family: "Serious future talk with partner · discuss values & life goals",
      growth: "Emotional intelligence book · strong code review skills",
      creative: "50 users · write case study · explore monetization",
      mindset: "Be intentional · write: great life with partner looks like…",
    },
    June: {
      career: "Mid-year review · propose improvement at work · stretch project",
      finance: "$5K saved? ✅ · review wedding fund · estimate costs",
      family: "💍 PROPOSE — create a moment showing your love & commitment",
      growth: "Book #6 · short cloud or system design course",
      creative: "100 users · landing page · submit to Product Hunt",
      mindset: "Mid-year reflection · grateful: job, future & love",
    },
    July: {
      career: "Lead a feature · learn new tech proactively · get recognized",
      finance: "Engagement budget · discuss full wedding budget with partner",
      family: "💍 OFFICIALLY ENGAGED · celebrate with both families",
      growth: "Leadership book · write about being a new engineer",
      creative: "Major new feature · growth experiment: SEO, social, referral",
      mindset: "New chapter mindset · write: what marriage should look like",
    },
    August: {
      career: "Own critical module · document work · think about promotion",
      finance: "Wedding fund growing · discuss financial roles with partner",
      family:
        "Serious wedding planning: venue, date, vision · involve families",
      growth: "Book #8 · deep technical book or conference",
      creative: "250 users · explore premium features · collaborate",
      mindset:
        "Separate work & love time clearly · write what you love about partner",
    },
    September: {
      career: "Mentor a new hire · complete end-to-end feature solo",
      finance: "Book venue 📅 · side project covering wedding costs?",
      family: "SET THE WEDDING DATE · plan bachelor/bachelorette events",
      growth: "Marriage & partnership book · invest in relationship = career",
      creative: "Ship v2 update · best technical blog post · speak at meetup",
      mindset:
        "Write letter to your future married self · grateful for the distance",
    },
    October: {
      career:
        "Lead project milestone · raise / promotion discussion with manager",
      finance: "Wedding budget locked · net worth target $15K+",
      family: "Guest list & invitations · ensure families feel celebrated",
      growth: "Intentional living book · write wedding vows draft — heartfelt",
      creative: "500 users / first customer · plan 2028 product roadmap",
      mindset:
        "Manage pre-wedding anxiety · the ceremony is 1 day — marriage is forever",
    },
    November: {
      career: "Year-end review · document 2027 impact · plan 2028 career",
      finance: "Final wedding payments · net worth vs Jan 2027 comparison",
      family:
        "Final pre-wedding celebrations · express deep gratitude to parents",
      growth: "Book #11 · reflect: who were you in January vs now?",
      creative: "2027 product year-in-review · document everything built",
      mindset:
        "Pre-wedding meditation retreat · write full vows from the heart",
    },
    December: {
      career: "Share 2027 wins with team · set 2028 career goals boldly",
      finance: "Calculate full 2027 savings ✅ · set up joint 2028 goals",
      family: "💍🎊 GET MARRIED — celebrate the love of your life!",
      growth: "Book #12 ✅ · biggest life lesson of 2027",
      creative: "Celebrate product progress · write biggest creative lesson",
      mindset:
        "Husband + Engineer + Builder · enter 2028 with partner, career & purpose aligned 🌟",
    },
  },
  2028: {
    January: {
      career:
        "Target: Mid-Level by year-end · map the gap · own major codebase",
      finance: "Create joint 2028 budget · combined goal: $25K savings by Dec",
      family: "Shared 2028 vision · discuss children? house? year goals?",
      growth: "Goal: 15 books · learn system design deeper",
      creative: "1K users goal by June · plan content strategy",
      mindset: "2028 theme: Leadership · 3 non-negotiable daily habits",
    },
    February: {
      career:
        "Get high-visibility project · mentor a junior · improve code reviews",
      finance: "Review Jan spending · renting vs buying research",
      family: "Plan romantic trip · heart-to-heart with parents",
      growth: "Advanced cloud course · start weekly tech reading habit",
      creative: "Major new feature · small marketing experiment",
      mindset:
        "What kind of leader do I want to be? Daily meditation for clarity",
    },
    March: {
      career: "Own feature from spec to deploy · share learnings in team talk",
      finance: "Q1 savings on track? · rebalance investments if needed",
      family: "🥂 1 YEAR OF MARRIAGE · write letter to partner about year 1",
      growth: "Software architecture book · contribute to open source",
      creative: "500 users · introduce freemium or paid tier",
      mindset: "Reflect on 1 year of marriage · continue to date your partner",
    },
    April: {
      career:
        "Multi-stakeholder project · technical writing · distributed systems study",
      finance: "Side revenue: reinvest? · research home buying requirements",
      family: "Partner trip · strengthen in-law relationships",
      growth: "CS fundamentals deep-dive · find mentor 5 years ahead",
      creative: "Referral/growth loop · reach 750 users",
      mindset: "Don't compare timelines · 2h deep focus blocks daily",
    },
    May: {
      career: "Best project yet · strong manager feedback · reputation: I ship",
      finance: "$12,500 of $25K saved? · set up household emergency fund",
      family: "Family gathering · partner growing individually AND together?",
      growth: "Product strategy book · tech conference if possible",
      creative: "🎉 1,000 USERS · launch post · validate willingness to pay",
      mindset:
        "Celebrate 1K users — you built something real. What is the mission?",
    },
    June: {
      career:
        "Mid-year: promo on track? · fill gaps · cross-team relationships",
      finance: "Full mid-year financial review as couple · set H2 targets",
      family:
        "Proper vacation together · deep conversations about shared future",
      growth:
        "Book #6/15 · course/workshop that scares you · blog 100+ readers",
      creative: "Launch monetization · set year-end revenue goal",
      mindset: "Mid-year life audit · is daily life aligned with values?",
    },
    July: {
      career: "🎉 PROMOTED TO MID-LEVEL ENGINEER · celebrate · what's next?",
      finance:
        "Raise → update savings plan immediately · work toward $20K total",
      family: "Celebrate with partner & family · discuss starting a family?",
      growth: "Team leadership book · domain deep-dive: AI, security, or infra",
      creative:
        "First revenue 💸 · write: built product while working full-time",
      mindset: "Student to mid-level in 2 years · write letter to 2026 self",
    },
    August: {
      career:
        "Higher responsibilities post-promotion · technical leadership in project",
      finance: "$20K milestone? · auto increase investment post-raise",
      family:
        "Both families experience · write what you love about life together",
      growth: "Deep work / productivity book · second tech skill (ML, devops)",
      creative: "Scale: marketing & partnerships · reach $100 MRR",
      mindset: "Mid-level = more ownership · protect energy · learn to say no",
    },
    September: {
      career:
        "Cross-team initiative · architecture decision · IC or management?",
      finance: "Q3 savings on target? · side project supplementing income?",
      family: "Fall adventure together · 5-year family vision conversation",
      growth: "Attend/speak at conference · book #10/15",
      creative: "$250 MRR · add community element · think toward $1K MRR",
      mindset: "Stoic journal · grateful — living a life many dream of",
    },
    October: {
      career: "Own your domain · year-end self-assessment · stretch goal",
      finance: "$22K+ savings · home purchase realistic in 2029?",
      family: "Year-end family planning · love letter to partner ❤️",
      growth:
        "Entrepreneurial mindset book · aggressively improve one weakness",
      creative: "Run a campaign · write 2nd case study · plan 2029 roadmap",
      mindset:
        "Where am I holding back? No complaints — only solutions (30 days)",
    },
    November: {
      career: "Nail year-end review · document every impact · plan Jan 2029",
      finance: "Near $25K — final push! · plan 2029 budget as couple",
      family: "Heartfelt holiday season · give back financially & emotionally",
      growth: "Book #14/15 · 5 things that transformed me in 2028",
      creative: "Product year-in-review · celebrate: real users, real revenue",
      mindset: "30 gratitudes · how has mindset grown in 2 years?",
    },
    December: {
      career:
        "Trusted mid-level engineer · year-in-review published · 2029 = Senior track",
      finance: "$25K SAVINGS HIT 🎉 · 2029 goal: $50K net worth",
      family: "Celebrate as a family unit · reflect on 2 years of marriage",
      growth: "Book #15 ✅ · best reading year yet · full 2028 review",
      creative: "Ship year-end update · what did building teach me about life?",
      mindset:
        "Mid-level + husband + builder · enter 2029 with energy & momentum 🚀",
    },
  },
  2029: {
    January: {
      career:
        "Target: Senior Engineer by year-end · map the gap · own a domain",
      finance:
        "Goal: $50K net worth · aggressive investments · explore real estate",
      family: "Shared life vision board · starting a family in 2029 or 2030?",
      growth: "Goal: 18 books · master 1 leadership skill this year",
      creative: "Goal: $1K MRR by Dec · plan major product pivot",
      mindset: "2029 theme: Senior & Scale · write manifesto for the year",
    },
    February: {
      career: "Senior-level thinking on projects · design system from scratch",
      finance: "Diversify income streams · start tracking net worth monthly",
      family: "Valentine's experience · deep 5-year family vision talk",
      growth:
        "Technical leadership book · build system for retaining what you read",
      creative: "Hire a freelancer · reach $300 MRR",
      mindset:
        "Lead with empathy · what does senior leadership look like for me?",
    },
    March: {
      career: "Lead junior engineers · write technical design document (TDD)",
      finance: "Q1: $10K of $50K goal · side project: $1K MRR? Time to scale!",
      family: "🥂 2 YEARS OF MARRIAGE · couple's trip · invest in relationship",
      growth:
        "Architecture book · speak at company all-hands or external event",
      creative:
        "$500 MRR or 2,500 users · build-in-public update with traction",
      mindset:
        "3 years from student to here — incredible. Letter to 2026 self.",
    },
    April: {
      career:
        "Senior output consistently · get documented peer review feedback",
      finance: "Net worth growing toward $25K midpoint · real estate research",
      family: "Partner: deeply present · quality over quantity in friendships",
      growth:
        "Startup/growth strategy book · deep technical article 500+ readers",
      creative:
        "$750 MRR · key integration driving retention · featured in newsletter",
      mindset: "Don't rush the promotion · 'success' now vs 3 years ago?",
    },
    May: {
      career:
        "Direct promotion talk with manager · deliver senior-level output",
      finance: "$20K+ saved · side income meaningful % of monthly expenses?",
      family: "Family holiday trip · partner thriving — how can you help?",
      growth:
        "Wealth building book · publish most-read post yet · speak at meetup",
      creative: "🎉 $1,000 MRR · write: How I reached $1K MRR (share widely!)",
      mindset:
        "Celebrate $1K MRR — you built a real business! What does freedom mean?",
    },
    June: {
      career: "Mid-year: promotion imminent? · own narrative · document impact",
      finance: "Full financial mid-year review · review investment returns YTD",
      family:
        "Proper vacation — fully disconnect · are we ready to start a family?",
      growth: "Book #9/18 · who is the person I am becoming?",
      creative:
        "Scale: paid ads / partnerships · hire help — VA, designer, co-founder?",
      mindset: "Mid-year life audit · living in alignment with values?",
    },
    July: {
      career: "🎉 PROMOTED TO SENIOR SOFTWARE ENGINEER · own decisions fully!",
      finance: "Raise → update ALL plans · net worth: $35K+ at this point",
      family:
        "Family celebrate this moment · plan for possibility of child in 2030",
      growth: "Executive presence book · write full promotion journey story",
      creative: "$1K MRR steady → aim for $2K · hire first team member",
      mindset:
        "Student to Senior in 3 years. Remain hungry — senior isn't the top.",
    },
    August: {
      career: "Set engineering quality standard · post-mortem or deep tech doc",
      finance:
        "$40K net worth milestone · what does financial independence look like?",
      family:
        "Late summer family gathering · write what I love about my life right now",
      growth: "Entrepreneurship book · attend startup demo day",
      creative: "$1,500 MRR · explore B2B angle · enterprise customers",
      mindset: "Strategic thinking · write personal operating principles",
    },
    September: {
      career:
        "Lead high-impact initiative independently · recognized externally",
      finance: "$45K — almost at goal · passive income building?",
      family:
        "Meaningful trip with partner · be present — beautiful season of life",
      growth: "Book #13/18 · SPEAK AT A TECH CONFERENCE 🎤",
      creative: "$2K MRR or 5K users 🎯 · build-in-public year-in-review",
      mindset: "Who was I in September 2026? What mountain do I climb next?",
    },
    October: {
      career: "Mentor 2+ engineers · influence architecture at company level",
      finance: "$47K — final push to $50K · max investment contributions",
      family:
        "Holiday season plan · heartfelt message to partner this month ❤️",
      growth: "Wealth & legacy book · write 10-year vision: where in 2039?",
      creative:
        "2030 roadmap: go big · product manifesto · is $1M ARR possible?",
      mindset: "Stay humble · lead from abundance, not fear",
    },
    November: {
      career: "Year-end: show massive impact · 2030 vision to manager",
      finance:
        "🏆 HIT $50K NET WORTH · celebrate with partner — you did this together",
      family:
        "Fully present holiday season · gratitude to partner, parents & mentors",
      growth: "Book #17/18 · best career year-in-review ever",
      creative: "2029 product retrospective · set bold 2030 goal: $5K MRR",
      mindset:
        "Senior Engineer + Husband + Builder. Rest deeply — you earned it.",
    },
    December: {
      career:
        "Recognized Senior Engineer · year-in-review published · plan 2030",
      finance: "$50K net worth ✅ · 'I said it in 2026. I did it.'",
      family: "3 years married 🥂 · fully present holiday · plan 2030 together",
      growth: "Book #18 ✅ · deepest yearly review ever",
      creative: "From idea to real revenue · what will this become in 2030?",
      mindset:
        "Chapter 1 complete. Enter 2030 with clarity, wisdom & direction 🌟",
    },
  },
  2030: {
    January: {
      career: "Staff Eng or startup founder? · operate with full ownership",
      finance: "Goal: $80K salary + net worth · max all investment accounts",
      family:
        "Starting a family in 2030? · shared vision for the year with partner",
      growth: "Goal: 20 books · what do I want to be known for professionally?",
      creative: "Goal: $5K MRR or 10K users · decide: solo or co-founder?",
      mindset:
        "2030 theme: Peak & Give Back · write final personal mission statement",
    },
    February: {
      career: "Company-wide initiative · technical voice on major decisions",
      finance: "Jan review: on track? · research real estate opportunities",
      family:
        "Deepest future conversation · Valentine's — be the partner they married",
      growth:
        "Building a great company book · begin coaching someone seriously",
      creative: "$2K MRR · hire key team member or contractor",
      mindset:
        "Extreme ownership in all areas · what would I build in 5 years?",
    },
    March: {
      career: "4 years: student to peak engineer · write milestone post",
      finance: "Q1 savings well on track · side project: full-time transition?",
      family:
        "💌 4 YEARS OF MARRIAGE · letter to partner · special anniversary experience",
      growth:
        "Speak at major tech conference · most impactful article/post ever",
      creative: "$3K MRR or 7,500 users · apply to YC or begin fundraising",
      mindset: "What is my legacy? Proud AND humble — both at once.",
    },
    April: {
      career: "Mentor 3+ engineers · propose major architecture improvement",
      finance: "$60K net worth milestone · plan home purchase",
      family: "Baby prep with joy ❤️ · support partner deeply in all things",
      growth:
        "Parenting & legacy book · build habit of giving back to junior devs",
      creative: "$4K MRR · write: from nothing to this story",
      mindset: "Think in decades · what to pass on to the next generation?",
    },
    May: {
      career: "Recognized tech leader · fractional CTO or own company?",
      finance:
        "Mid-year: $65K+ net worth? · side project changing financial picture?",
      family:
        "Last meaningful trip before baby · what values do I want to pass on?",
      growth:
        "Book #10/20 · start newsletter or blog series — unique knowledge",
      creative: "🏆 $5,000 MRR · bootstrap further or raise a seed round?",
      mindset:
        "You said $5K MRR in 2026. You did it. Write letter to student self.",
    },
    June: {
      career: "Operating at peak level? · lead major platform · plan H2 impact",
      finance:
        "Full mid-year review as couple · set H2 target: close gap to $80K",
      family:
        "Disconnected holiday with partner · how has relationship grown in 4+ years?",
      growth: "Book #11/20 · what is the biggest chapter still ahead?",
      creative:
        "Scale team or product aggressively in H2 · major launch · $10K MRR goal",
      mindset: "Mid-year life audit · am I living the life I imagined in 2026?",
    },
    July: {
      career:
        "Top technical leader · published or spoken widely · plan next chapter",
      finance:
        "$70K net worth milestone · $80K+ salary confirmed or negotiated",
      family:
        "Baby arriving? Be ready with joy 💕 · still fully showing up for partner",
      growth:
        "Legacy & wealth book · build something that outlasts your career",
      creative:
        "$7K MRR · founder story that inspires others · think: $1M ARR path?",
      mindset:
        "From nothing to this: husband, engineer, builder, leader. Deeply grateful.",
    },
    August: {
      career:
        "Largest scope project of your career · engineer they can't afford to lose",
      finance:
        "$72K+ — almost at $80K goal · invest everything possible this month",
      family: "Support partner unconditionally · who made this life possible?",
      growth: "Building companies book · most impactful engineering post ever",
      creative:
        "$8K MRR · hire key team members · plan Series A or profitable scale",
      mindset: "This is not the end — it's the beginning of the next level.",
    },
    September: {
      career:
        "Speak at major industry event · recognized name in your community",
      finance:
        "$75K net worth — final push · side project: $5K+/month to household?",
      family:
        "Beautiful family trip — new chapter travel · family = foundation of everything built",
      growth: "Book #15/20 · teach everything · YouTube channel or podcast?",
      creative:
        "$9K MRR — approaching $10K · what's the exit or long-term vision?",
      mindset:
        "4 years from student. You've built everything. What is the purpose?",
    },
    October: {
      career:
        "Most impactful project of your career · 5-year journey documented",
      finance:
        "$78K net worth — 2 months to hit $80K · plan generosity: who can you help?",
      family:
        "Unforgettable holiday plan · love letter to partner for anniversary 💌",
      growth: "Book #17/20 · teach a course or bootcamp to new engineers",
      creative:
        "🏆 $10,000 MRR · the goal you set in 2026 — celebrate it fully!",
      mindset:
        "$10K MRR — celebrate with your partner. You built this TOGETHER.",
    },
    November: {
      career: "Peak impact year-end review · 2031: Staff / CTO / Startup CEO?",
      finance:
        "🏆 $80K NET WORTH ✅ · 5-year journey — celebrate this milestone",
      family:
        "Deeply appreciate everyone · give back: time, money, full presence",
      growth: "Book #19/20 · 5 years, 5 lessons — best personal piece ever",
      creative:
        "Celebrate: from side project to $10K MRR company · write founder memoir",
      mindset:
        "30 gratitudes from 5 years · who am I now vs who I was in 2026?",
    },
    December: {
      career:
        "Senior SWE ✅ at top startup ✅ · you are the engineer you once looked up to",
      finance:
        "Financially independent ✅ · $80K+ salary, $80K+ net worth — you are free",
      family:
        "Married ✅ Strong family ✅ · they believed in you from the beginning",
      growth:
        "Book #20 ✅ · 75+ books over 5 years · you are the person you designed",
      creative:
        "$10K MRR ✅ Real company ✅ · enter 2031 with a real business & mission",
      mindset:
        "This was Chapter 1 🌟 · write the final letter to 2026 self — good tears 🚀",
    },
  },
};

const MILESTONES = [
  {
    icon: "💼",
    label: "Career",
    val: "Senior SWE",
    sub: "at a top startup",
    y: 2026,
  },
  {
    icon: "💍",
    label: "Marriage",
    val: "Dec 2027",
    sub: "the love of your life",
    y: 2027,
  },
  { icon: "📈", label: "Promotion", val: "Mid-Level", sub: "in 2028", y: 2028 },
  {
    icon: "⭐",
    label: "Senior Role",
    val: "July 2029",
    sub: "in 3 years",
    y: 2029,
  },
  { icon: "💰", label: "Salary", val: "$80K+", sub: "by 2030", y: 2030 },
  {
    icon: "🏦",
    label: "Net Worth",
    val: "$80K+",
    sub: "savings + investments",
    y: 2030,
  },
  {
    icon: "🚀",
    label: "Product MRR",
    val: "$10K/mo",
    sub: "monthly recurring revenue",
    y: 2030,
  },
  {
    icon: "👥",
    label: "Users",
    val: "10,000+",
    sub: "people using your product",
    y: 2030,
  },
  { icon: "📚", label: "Books Read", val: "75+", sub: "over 5 years", y: 2030 },
];

export default function App() {
  const [activeYear, setActiveYear] = useState(2026);
  const [activeMonth, setActiveMonth] = useState("March");
  const [tab, setTab] = useState("month"); // "month" | "daily" | "milestones"
  const [openCat, setOpenCat] = useState(null);

  const yr = YEARS.find((y) => y.year === activeYear);
  const months = activeYear === 2026 ? MONTHS_2026 : MONTHS_ALL;
  const monthData = DATA[activeYear]?.[activeMonth] || {};
  const isMarriage = activeYear === 2027 && activeMonth === "December";

  const pill = (color, bg, text, content) => (
    <span
      style={{
        background: bg,
        color: text,
        border: `1px solid ${color}40`,
        borderRadius: 99,
        padding: "3px 10px",
        fontSize: 11,
        fontWeight: 600,
        display: "inline-flex",
        alignItems: "center",
        gap: 4,
      }}
    >
      {content}
    </span>
  );

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        fontFamily: "'Segoe UI', system-ui, sans-serif",
        color: "#0f172a",
      }}
    >
      {/* ── TOP HEADER ── */}
      <div
        style={{
          background: "#fff",
          borderBottom: "1px solid #e2e8f0",
          padding: "0 24px",
        }}
      >
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          {/* Title row */}
          <div
            style={{
              padding: "20px 0 16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 12,
            }}
          >
            <div>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#94a3b8",
                  marginBottom: 4,
                }}
              >
                Student → Startup Engineer
              </div>
              <h1
                style={{
                  fontSize: "clamp(20px, 3vw, 28px)",
                  fontWeight: 800,
                  color: "#0f172a",
                  lineHeight: 1.1,
                }}
              >
                🗺️ Your 5-Year Life Roadmap
              </h1>
            </div>
            <div style={{ display: "flex", gap: 16 }}>
              {[
                ["5", "Years"],
                ["54", "Months"],
                ["300+", "Goals"],
                ["💍", "Dec 2027"],
              ].map(([v, l]) => (
                <div key={l} style={{ textAlign: "center" }}>
                  <div
                    style={{ fontSize: 18, fontWeight: 800, color: "#0f172a" }}
                  >
                    {v}
                  </div>
                  <div
                    style={{
                      fontSize: 10,
                      color: "#94a3b8",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Year tabs */}
          <div
            style={{
              display: "flex",
              gap: 4,
              overflowX: "auto",
              paddingBottom: 1,
            }}
          >
            {YEARS.map((y) => (
              <button
                key={y.year}
                onClick={() => {
                  setActiveYear(y.year);
                  setActiveMonth(y.year === 2026 ? "March" : "January");
                }}
                style={{
                  padding: "10px 16px",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "inherit",
                  fontWeight: 700,
                  fontSize: 13,
                  whiteSpace: "nowrap",
                  transition: "all 0.2s",
                  borderRadius: "10px 10px 0 0",
                  flexShrink: 0,
                  background: activeYear === y.year ? y.bg : "transparent",
                  color: activeYear === y.year ? y.text : "#64748b",
                  borderBottom:
                    activeYear === y.year
                      ? `3px solid ${y.color}`
                      : "3px solid transparent",
                }}
              >
                {y.icon} {y.year} — {y.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div
        style={{ maxWidth: 960, margin: "0 auto", padding: "24px 24px 80px" }}
      >
        {/* ── YEAR BANNER ── */}
        <div
          style={{
            borderRadius: 16,
            padding: "20px 24px",
            marginBottom: 24,
            background: yr.bg,
            border: `1px solid ${yr.color}30`,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 6,
              }}
            >
              <span style={{ fontSize: 28 }}>{yr.icon}</span>
              <div>
                <div style={{ fontWeight: 800, fontSize: 20, color: yr.text }}>
                  {yr.year} — {yr.label}
                </div>
                <div style={{ fontSize: 12, color: "#64748b", marginTop: 1 }}>
                  {activeYear === 2026
                    ? "10 months · March → December"
                    : "12 months · January → December"}
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {["month", "daily", "milestones"].map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                style={{
                  padding: "8px 16px",
                  borderRadius: 50,
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "inherit",
                  fontSize: 12,
                  fontWeight: 700,
                  transition: "all 0.2s",
                  background: tab === t ? yr.color : "#fff",
                  color: tab === t ? "#fff" : "#64748b",
                  boxShadow:
                    tab === t
                      ? `0 4px 12px ${yr.color}40`
                      : "0 1px 3px rgba(0,0,0,0.08)",
                }}
              >
                {t === "month"
                  ? "📅 Monthly View"
                  : t === "daily"
                    ? "☀️ Daily Habits"
                    : "🏆 All Milestones"}
              </button>
            ))}
          </div>
        </div>

        {/* ── MONTHLY VIEW ── */}
        {tab === "month" && (
          <div>
            {/* Month picker */}
            <div
              style={{
                display: "flex",
                gap: 6,
                flexWrap: "wrap",
                marginBottom: 20,
              }}
            >
              {months.map((m) => {
                const isActive = activeMonth === m;
                const isWedding = activeYear === 2027 && m === "December";
                return (
                  <button
                    key={m}
                    onClick={() => setActiveMonth(m)}
                    style={{
                      padding: "7px 14px",
                      borderRadius: 50,
                      cursor: "pointer",
                      fontFamily: "inherit",
                      fontSize: 12,
                      fontWeight: isActive ? 700 : 500,
                      transition: "all 0.2s",
                      background: isActive
                        ? yr.color
                        : isWedding
                          ? "#fff1f2"
                          : "#fff",
                      color: isActive
                        ? "#fff"
                        : isWedding
                          ? "#be123c"
                          : "#64748b",
                      boxShadow: isActive
                        ? `0 4px 10px ${yr.color}40`
                        : "0 1px 3px rgba(0,0,0,0.07)",
                      border:
                        isWedding && !isActive ? "1.5px solid #fda4af" : "none",
                    }}
                  >
                    {isWedding ? "💍 " : ""}
                    {m}
                  </button>
                );
              })}
            </div>

            {/* Marriage special banner */}
            {isMarriage && (
              <div
                style={{
                  borderRadius: 16,
                  padding: "18px 22px",
                  marginBottom: 20,
                  background: "linear-gradient(135deg, #fff1f2, #fdf4ff)",
                  border: "2px solid #fda4af",
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                }}
              >
                <span style={{ fontSize: 36 }}>💍</span>
                <div>
                  <div
                    style={{ fontWeight: 800, fontSize: 18, color: "#be123c" }}
                  >
                    December 2027 — Your Wedding Month! 🎊
                  </div>
                  <div
                    style={{
                      fontSize: 13,
                      color: "#9f1239",
                      marginTop: 3,
                      lineHeight: 1.5,
                    }}
                  >
                    You've built your career, saved your money, grown as a
                    person — now marry the love of your life and begin your
                    greatest chapter together.
                  </div>
                </div>
              </div>
            )}

            {/* Month header */}
            <div
              style={{
                borderRadius: 14,
                padding: "16px 20px",
                marginBottom: 16,
                background: "#fff",
                border: "1px solid #e2e8f0",
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: yr.bg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 20,
                  border: `1px solid ${yr.color}30`,
                  flexShrink: 0,
                }}
              >
                📅
              </div>
              <div>
                <div
                  style={{ fontWeight: 800, fontSize: 17, color: "#0f172a" }}
                >
                  {activeMonth} {activeYear}
                </div>
                <div style={{ fontSize: 12, color: "#94a3b8", marginTop: 1 }}>
                  6 focus areas · click any area to expand
                </div>
              </div>
            </div>

            {/* Category cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {CATS.map((cat) => {
                const isOpen = openCat === cat.id;
                const text = monthData[cat.id] || "";
                const parts = text.split(" · ");
                return (
                  <div
                    key={cat.id}
                    onClick={() => setOpenCat(isOpen ? null : cat.id)}
                    style={{
                      borderRadius: 14,
                      background: "#fff",
                      border: `1px solid ${isOpen ? yr.color + "50" : "#e2e8f0"}`,
                      cursor: "pointer",
                      transition: "all 0.2s",
                      overflow: "hidden",
                      boxShadow: isOpen
                        ? `0 4px 20px ${yr.color}15`
                        : "0 1px 3px rgba(0,0,0,0.05)",
                    }}
                  >
                    <div
                      style={{
                        padding: "14px 18px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 12,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 12,
                        }}
                      >
                        <div
                          style={{
                            width: 38,
                            height: 38,
                            borderRadius: 10,
                            background: yr.bg,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: 18,
                            border: `1px solid ${yr.color}25`,
                            flexShrink: 0,
                          }}
                        >
                          {cat.icon}
                        </div>
                        <div>
                          <div
                            style={{
                              fontWeight: 700,
                              fontSize: 14,
                              color: "#0f172a",
                            }}
                          >
                            {cat.label}
                          </div>
                          {!isOpen && (
                            <div
                              style={{
                                fontSize: 12,
                                color: "#94a3b8",
                                marginTop: 1,
                              }}
                            >
                              {parts[0]}
                            </div>
                          )}
                        </div>
                      </div>
                      <div
                        style={{
                          color: yr.color,
                          fontSize: 18,
                          flexShrink: 0,
                          transform: isOpen ? "rotate(180deg)" : "none",
                          transition: "transform 0.25s",
                        }}
                      >
                        ⌄
                      </div>
                    </div>

                    {isOpen && (
                      <div
                        style={{
                          borderTop: `1px solid ${yr.color}20`,
                          padding: "14px 18px 16px",
                          background: yr.bg,
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 8,
                          }}
                        >
                          {parts.map((p, i) => (
                            <div
                              key={i}
                              style={{
                                display: "flex",
                                alignItems: "flex-start",
                                gap: 10,
                                padding: "10px 14px",
                                background: "#fff",
                                borderRadius: 10,
                                border: `1px solid ${yr.color}20`,
                              }}
                            >
                              <div
                                style={{
                                  width: 22,
                                  height: 22,
                                  borderRadius: "50%",
                                  background: yr.color,
                                  color: "#fff",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  fontSize: 11,
                                  fontWeight: 800,
                                  flexShrink: 0,
                                  marginTop: 1,
                                }}
                              >
                                {i + 1}
                              </div>
                              <div
                                style={{
                                  fontSize: 13,
                                  color: "#334155",
                                  lineHeight: 1.5,
                                  fontWeight: 500,
                                }}
                              >
                                {p.trim()}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Month nav */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: 20,
              }}
            >
              {(() => {
                const ci = months.indexOf(activeMonth);
                const prev = months[ci - 1];
                const next = months[ci + 1];
                return (
                  <>
                    <button
                      onClick={() => prev && setActiveMonth(prev)}
                      disabled={!prev}
                      style={{
                        padding: "10px 20px",
                        borderRadius: 50,
                        border: "1px solid #e2e8f0",
                        background: "#fff",
                        cursor: prev ? "pointer" : "not-allowed",
                        fontFamily: "inherit",
                        fontSize: 13,
                        fontWeight: 600,
                        color: prev ? "#334155" : "#cbd5e1",
                      }}
                    >
                      ← {prev || "Start"}
                    </button>
                    <button
                      onClick={() => next && setActiveMonth(next)}
                      disabled={!next}
                      style={{
                        padding: "10px 20px",
                        borderRadius: 50,
                        border: "1px solid #e2e8f0",
                        background: "#fff",
                        cursor: next ? "pointer" : "not-allowed",
                        fontFamily: "inherit",
                        fontSize: 13,
                        fontWeight: 600,
                        color: next ? "#334155" : "#cbd5e1",
                      }}
                    >
                      {next || "End"} →
                    </button>
                  </>
                );
              })()}
            </div>
          </div>
        )}

        {/* ── DAILY HABITS VIEW ── */}
        {tab === "daily" && (
          <div>
            <div
              style={{
                borderRadius: 16,
                padding: "24px",
                background: "#fff",
                border: "1px solid #e2e8f0",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 20,
                  paddingBottom: 16,
                  borderBottom: "1px solid #f1f5f9",
                }}
              >
                <span style={{ fontSize: 28 }}>☀️</span>
                <div>
                  <div
                    style={{ fontWeight: 800, fontSize: 18, color: "#0f172a" }}
                  >
                    Daily Non-Negotiables — {activeYear}
                  </div>
                  <div style={{ fontSize: 13, color: "#94a3b8", marginTop: 2 }}>
                    Do these every single day. No exceptions.
                  </div>
                </div>
              </div>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 10 }}
              >
                {DAILY[activeYear].map((habit, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 14,
                      padding: "14px 18px",
                      borderRadius: 12,
                      background: yr.bg,
                      border: `1px solid ${yr.color}20`,
                    }}
                  >
                    <div
                      style={{
                        width: 30,
                        height: 30,
                        borderRadius: "50%",
                        background: yr.color,
                        color: "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 13,
                        fontWeight: 800,
                        flexShrink: 0,
                      }}
                    >
                      {i + 1}
                    </div>
                    <div
                      style={{ fontSize: 14, fontWeight: 600, color: yr.text }}
                    >
                      {habit}
                    </div>
                  </div>
                ))}
              </div>
              <div
                style={{
                  marginTop: 20,
                  padding: "14px 18px",
                  borderRadius: 12,
                  background: "#f8fafc",
                  border: "1px solid #e2e8f0",
                  fontSize: 13,
                  color: "#64748b",
                  lineHeight: 1.6,
                }}
              >
                💡 <strong style={{ color: "#0f172a" }}>Tip:</strong> These
                habits compound. Miss 1 day — forgive yourself and restart. Miss
                3 days — it becomes a pattern. Protect these daily rituals
                fiercely.
              </div>
            </div>
          </div>
        )}

        {/* ── MILESTONES VIEW ── */}
        {tab === "milestones" && (
          <div>
            <div
              style={{
                borderRadius: 16,
                background: "#fff",
                border: "1px solid #e2e8f0",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  padding: "24px 24px 16px",
                  borderBottom: "1px solid #f1f5f9",
                }}
              >
                <div
                  style={{ fontWeight: 800, fontSize: 20, color: "#0f172a" }}
                >
                  🏆 5-Year Milestones
                </div>
                <div style={{ fontSize: 13, color: "#94a3b8", marginTop: 4 }}>
                  The commitments you're making to yourself — by December 2030
                </div>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
                  gap: 0,
                }}
              >
                {MILESTONES.map((m, i) => {
                  const y = YEARS.find((yr) => yr.year === m.y);
                  return (
                    <div
                      key={i}
                      style={{
                        padding: "20px 22px",
                        borderRight: "1px solid #f1f5f9",
                        borderBottom: "1px solid #f1f5f9",
                        transition: "background 0.2s",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.background = y.bg)
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.background = "transparent")
                      }
                    >
                      <div style={{ fontSize: 24, marginBottom: 8 }}>
                        {m.icon}
                      </div>
                      <div
                        style={{
                          fontSize: 10,
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.2em",
                          color: "#94a3b8",
                          marginBottom: 4,
                        }}
                      >
                        {m.label}
                      </div>
                      <div
                        style={{
                          fontSize: 24,
                          fontWeight: 800,
                          color: y.color,
                          lineHeight: 1,
                        }}
                      >
                        {m.val}
                      </div>
                      <div
                        style={{ fontSize: 12, color: "#64748b", marginTop: 3 }}
                      >
                        {m.sub}
                      </div>
                      <div style={{ marginTop: 8 }}>
                        {pill(y.color, y.pill, y.text, y.icon + " " + y.year)}
                      </div>
                    </div>
                  );
                })}
              </div>
              {/* Timeline row */}
              <div style={{ padding: "24px", borderTop: "1px solid #f1f5f9" }}>
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    color: "#94a3b8",
                    textTransform: "uppercase",
                    letterSpacing: "0.2em",
                    marginBottom: 16,
                  }}
                >
                  Journey Timeline
                </div>
                <div style={{ position: "relative" }}>
                  <div
                    style={{
                      height: 4,
                      background: "#f1f5f9",
                      borderRadius: 99,
                      marginBottom: 20,
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        borderRadius: 99,
                        background:
                          "linear-gradient(90deg, #06b6d4, #f43f5e, #10b981, #f59e0b, #8b5cf6)",
                      }}
                    />
                  </div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    {[
                      ["🌱", "Student", "March 2026"],
                      ["💼", "First Internship", "Jul 2026"],
                      ["🔥", "SWE Role", "Mar 2027"],
                      ["💍", "Married", "Dec 2027"],
                      ["📈", "Mid-Level", "Jul 2028"],
                      ["⚡", "Senior", "Jul 2029"],
                      ["🏆", "Peak", "Dec 2030"],
                    ].map(([icon, label, date]) => (
                      <div key={date} style={{ textAlign: "center", flex: 1 }}>
                        <div style={{ fontSize: 16 }}>{icon}</div>
                        <div
                          style={{
                            fontSize: 10,
                            fontWeight: 700,
                            color: "#334155",
                            marginTop: 4,
                          }}
                        >
                          {label}
                        </div>
                        <div
                          style={{
                            fontSize: 9,
                            color: "#94a3b8",
                            marginTop: 1,
                          }}
                        >
                          {date}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── YEAR QUICK SUMMARY ── */}
        <div
          style={{
            marginTop: 24,
            borderRadius: 16,
            background: "#fff",
            border: "1px solid #e2e8f0",
            padding: "20px 24px",
          }}
        >
          <div
            style={{
              fontSize: 12,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              color: "#94a3b8",
              marginBottom: 14,
            }}
          >
            All 5 Years at a Glance
          </div>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {YEARS.map((y) => (
              <button
                key={y.year}
                onClick={() => {
                  setActiveYear(y.year);
                  setActiveMonth(y.year === 2026 ? "March" : "January");
                  setTab("month");
                }}
                style={{
                  padding: "10px 18px",
                  borderRadius: 12,
                  border: `1px solid ${activeYear === y.year ? y.color : "#e2e8f0"}`,
                  background: activeYear === y.year ? y.bg : "#fafafa",
                  cursor: "pointer",
                  fontFamily: "inherit",
                  transition: "all 0.2s",
                  textAlign: "left",
                }}
              >
                <div style={{ fontWeight: 700, fontSize: 13, color: y.text }}>
                  {y.icon} {y.year}
                </div>
                <div style={{ fontSize: 11, color: "#94a3b8", marginTop: 2 }}>
                  {y.label}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Footer quote */}
        <div style={{ textAlign: "center", marginTop: 40, padding: "20px" }}>
          <div
            style={{
              fontSize: 16,
              fontStyle: "italic",
              color: "#94a3b8",
              lineHeight: 1.7,
            }}
          >
            "You don't rise to the level of your goals. You fall to the level of
            your systems."
          </div>
          <div
            style={{
              fontSize: 11,
              color: "#cbd5e1",
              marginTop: 8,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            Every year has a mission. Every month has actions. Every day has
            habits.
          </div>
        </div>
      </div>
    </div>
  );
}
