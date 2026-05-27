import { useState, useEffect } from "react";

const NAV = ["About", "Skills", "Projects", "Experience", "Achievements", "Contact"];

const LINKS = {
  github: "https://github.com/Dishadj15",
  linkedin: "https://www.linkedin.com/in/dishajain15/",
  leetcode: "https://leetcode.com/u/disha_dj_15/",
  email: "disha.jainstudent@gmail.com",
};

const SKILLS = {
  "Languages": ["C/C++", "JavaScript", "TypeScript", "Python"],
  "Frontend": ["React.js", "Tailwind CSS", "HTML", "CSS"],
  "ML": ["OpenAI APIs", "Data Analysis", "Model Integration"],

  "CS Core": ["DSA", "OOPS", "DBMS", "Operating Systems","Computer Networks"],
  "Tools": ["Git", "GitHub", "Vercel"],
};

const PROJECTS = [
  {
    title: "STASH",
    tag: "Web Dev",
    links: { live: "https://stash-igdtuw.vercel.app/", github: "https://github.com/Dishadj15/Stash" },
    description: "Academic resource platform with branch- and semester-wise navigation. Led frontend development from scratch — reached 1,400+ users and 13k+ page views within 5 days of launch.",
    stack: ["React.js", "TypeScript", "Tailwind CSS"],
    metrics: [{ label: "Users", value: "1.4k+" }, { label: "Page Views", value: "13k+" }, { label: "Days to hit it", value: "5" }],
  },
  {
    title: "Mirror",
    tag: "Web Dev",
    links: { github: "https://github.com/Dishadj15/Mirror" },
    description: "Browser-based file scanner for CSV, PDF, and DOC formats. Detects anomalies and generates clean, accessible reports — making results easy to interpret without technical overhead.",
    stack: ["React.js", "JavaScript"],
    metrics: [],
  },
  {
    title: "AI Workflow Integration",
    tag: "AI/ML",
    links: {},
    description: "Integrated OpenAI APIs into production web applications during internship at IGDTUW. Built AI-driven features that improved workflow efficiency and were deployed to real users.",
    stack: ["OpenAI API", "React.js", "TypeScript"],
    metrics: [],
  },
];

const TIMELINE = [
  {
    role: "Summer Intern — AI-Powered Full-Stack Development",
    org: "IGDTUW",
    period: "Jun – Jul 2025",
    points: [
      "Built and deployed frontend applications with React.js and TypeScript.",
      "Integrated AI-driven features using OpenAI APIs, improving workflow efficiency.",
      "Led frontend of STASH — 1,400+ users in 5 days of launch.",
    ],
  },
  {
    role: "HR Head Coordinator",
    org: "Taarangana, IGDTUW",
    period: "Feb – Mar 2025",
    points: ["Managed volunteer coordination and internal operations for a large-scale college fest."],
  },
  {
    role: "Public Relations Member",
    org: "Rotaract Club of IGDTUW",
    period: "Sep 2024 – Sep 2025",
    points: ["Coordinated communication and logistics for multiple club events."],
  },
];

const HACKATHONS = [
  { event: "Google Summer of Code", result: "Contributor" },
  { event: "Bharatiya Antariksh Hackathon 2025 — ISRO", result: "Participated" },
  { event: "Innoquest — Microsoft Office, Gurugram", result: "Top 10 Teams" },
  { event: "Vihaan 8.0 — Delhi Technological University", result: "Top 128 / 2000+ teams" },
  { event: "Football — Udghosh, IIT Kanpur Inter-College Sports Fest", result: "3rd Place" },
];

const CONTACT_ITEMS = [
  {
    label: "Email",
    value: "disha.jainstudent@gmail.com",
    href: "mailto:disha.jainstudent@gmail.com",
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    label: "GitHub",
    value: "github.com/Dishadj15",
    href: "https://github.com/Dishadj15",
    icon: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/dishajain15",
    href: "https://www.linkedin.com/in/dishajain15/",
    icon: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z",
  },
  {
    label: "LeetCode",
    value: "leetcode.com/u/disha_dj_15",
    href: "https://leetcode.com/u/disha_dj_15/",
    icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
  },
];

function Tag({ label }) {
  return (
    <span className="tag-pill">
      {label}
    </span>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState("About");
  const [copied, setCopied] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setActive(id);
  };

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); });
    }, { threshold: 0.3 });
    NAV.forEach(n => { const el = document.getElementById(n); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText(LINKS.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", backgroundColor: "#FAF8F5", color: "#382F2D", minHeight: "100vh", position: "relative", overflowX: "hidden" }}>
      
      {/* Decorative Background */}
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, zIndex: 0, pointerEvents: "none" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(#D4C9C1 1px, transparent 1px)", backgroundSize: "28px 28px", opacity: 0.4 }}></div>
        <div style={{ position: "absolute", top: "-10%", right: "-5%", width: "60vw", height: "60vw", background: "radial-gradient(circle, rgba(245,190,75,0.08) 0%, rgba(250,248,245,0) 70%)", borderRadius: "50%" }}></div>
        <div style={{ position: "absolute", bottom: "10%", left: "-10%", width: "50vw", height: "50vw", background: "radial-gradient(circle, rgba(168,139,122,0.06) 0%, rgba(250,248,245,0) 70%)", borderRadius: "50%" }}></div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        section { scroll-margin-top: 68px; position: relative; z-index: 1; }
        a { color: inherit; text-decoration: none; }
        
        /* Typography */
        h1, h2, h3 { color: #2A2220; font-weight: 700; letter-spacing: -0.03em; }
        p { color: #635751; }

        /* Navigation */
        .nav-btn { background: none; border: none; cursor: pointer; font-family: inherit; font-size: 13.5px; letter-spacing: 0.02em; color: #8A7E77; transition: color .2s; padding: 0; }
        .nav-btn:hover, .nav-btn.active { color: #2A2220; }
        .nav-btn.active { font-weight: 600; }

        /* Chips & Tags */
        .tag-pill { background: #F0EAE1; color: #755B49; font-size: 11px; font-weight: 600; letter-spacing: 0.08em; padding: 5px 12px; border-radius: 4px; text-transform: uppercase; border: 1px solid #E3D9CE; display: inline-block; }
        .skill-chip { display: inline-block; background: rgba(255,255,255,0.6); border: 1px solid #E3D9CE; border-radius: 8px; padding: 6px 14px; font-size: 13px; color: #4A3F39; transition: all .2s; backdrop-filter: blur(4px); }
        .skill-chip:hover { border-color: #C2A48C; background: #FFF; box-shadow: 0 4px 12px rgba(138, 114, 95, 0.05); }
        .stack-chip { background: #F5F0E6; border-radius: 4px; font-size: 11.5px; padding: 4px 10px; color: #635751; border: 1px solid #E8E0D5; }

        /* Cards */
        .proj-card { background: rgba(255, 255, 255, 0.7); backdrop-filter: blur(8px); border: 1px solid #E8E0D5; border-radius: 12px; padding: 32px 28px; transition: all .3s ease; }
        .proj-card:hover { border-color: #D4BCA8; transform: translateY(-3px); box-shadow: 0 12px 40px rgba(100, 85, 75, 0.06); background: rgba(255, 255, 255, 0.95); }
        .metric-cell { background: #FAF8F5; border: 1px solid #E8E0D5; border-radius: 8px; padding: 12px; text-align: center; flex: 1; }

        /* Buttons & Links */
        .link-btn { display: inline-flex; align-items: center; gap: 6px; font-size: 12.5px; color: #635751; padding: 6px 12px; border: 1px solid #E8E0D5; border-radius: 6px; background: rgba(255,255,255,0.5); transition: all .2s; font-weight: 500; }
        .link-btn:hover { border-color: #8A7E77; color: #2A2220; background: #FFF; }
        .cta-primary { display: inline-block; background: #2A2220; color: #FAF8F5 !important; border-radius: 6px; padding: 10px 24px; font-size: 13.5px; font-weight: 500; font-family: inherit; cursor: pointer; border: 1px solid #2A2220; transition: all .2s; box-shadow: 0 4px 14px rgba(42, 34, 32, 0.15); }
        .cta-primary:hover { background: #D97706; border-color: #D97706; transform: translateY(-1px); box-shadow: 0 6px 20px rgba(217, 119, 6, 0.2); }
        .cta-outline { display: inline-block; background: rgba(255,255,255,0.5); color: #382F2D; border: 1px solid #D4C9C1; border-radius: 6px; padding: 10px 24px; font-size: 13.5px; font-weight: 500; font-family: inherit; cursor: pointer; transition: all .2s; }
        .cta-outline:hover { border-color: #8A7E77; background: #FFF; }

        /* Contact Section */
        .contact-card { background: rgba(255, 255, 255, 0.7); backdrop-filter: blur(8px); border: 1px solid #E8E0D5; border-radius: 12px; padding: 20px 24px; display: flex; align-items: center; gap: 16px; transition: all .2s ease; text-decoration: none; color: inherit; cursor: pointer; }
        .contact-card:hover { border-color: #D97706; box-shadow: 0 8px 24px rgba(217, 119, 6, 0.08); transform: translateY(-2px); background: #FFF; }
        .contact-icon-wrapper { width: 42px; height: 42px; border-radius: 8px; background: #F5F0E6; border: 1px solid #E8E0D5; display: flex; align-items: center; justify-content: center; flex-shrink: 0; color: #755B49; transition: all .2s; }
        .contact-card:hover .contact-icon-wrapper { border-color: #D97706; color: #D97706; background: #FFF9F0; }
        .contact-arrow { stroke: #C2B4A9; transition: stroke .2s; }
        .contact-card:hover .contact-arrow { stroke: #D97706; }

        /* Utilities */
        .hack-row { display: flex; justify-content: space-between; align-items: center; padding: 16px 0; border-bottom: 1px solid #E8E0D5; gap: 16px; }
        .hack-row:last-child { border-bottom: none; }
        .divider { height: 1px; background: linear-gradient(90deg, transparent, #E3D9CE, transparent); margin: 0; position: relative; z-index: 1; }
      `}</style>

      {/* NAV */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: "rgba(250, 248, 245, 0.8)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(227, 217, 206, 0.5)", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 clamp(24px, 5vw, 64px)" }}>
        <span style={{ fontWeight: 700, fontSize: 18, color: "#2A2220", letterSpacing: "-0.02em" }}>
          Disha Jain
        </span>
        <div className="nav-center" style={{ display: "flex", gap: 32 }}>
          {NAV.map(n => (
            <button key={n} className={`nav-btn${active === n ? " active" : ""}`} onClick={() => scrollTo(n)}>{n}</button>
          ))}
        </div>
        <a href={`mailto:${LINKS.email}`} className="cta-primary" style={{ padding: "8px 20px", fontSize: 13 }}>Get in touch</a>
      </nav>

      {/* HERO (Now with a Two-Column Layout) */}
      <section id="About" style={{ minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: 64 }}>
        <div style={{ display: "flex", flexWrap: "wrap-reverse", width: "100%", maxWidth: 1140, margin: "0 auto", padding: "40px clamp(24px, 5vw, 64px)", gap: "clamp(40px, 8vw, 80px)", alignItems: "center" }}>
          
          {/* Left Text Content */}
          <div style={{ flex: "1 1 500px" }}>
            <div style={{ display: "flex", gap: 10, marginBottom: 32, flexWrap: "wrap" }}>
              <Tag label="Web Dev" />
              <Tag label="AI/ML" />
              <Tag label="B.Tech CSE · 2028" />
            </div>
            
            <h1 className="hero-name" style={{ fontSize: "clamp(48px, 6vw, 72px)", lineHeight: 1.05, marginBottom: 24, color: "#2A2220" }}>
              Disha<br />Jain
            </h1>
            
            <p style={{ fontSize: 16.5, lineHeight: 1.75, maxWidth: 520, marginBottom: 40, fontWeight: 400, color: "#635751" }}>
  I'm a CS undergrad at IGDTUW who loves exploring new technologies and building intuitive web experiences. Whether I'm architecting a complex frontend, learning a new framework, or solving tricky logic problems, I thrive on the entire process of bringing creative ideas to life on the screen.
</p>
            
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 56 }}>
              <button className="cta-primary" onClick={() => scrollTo("Projects")}>See my work</button>
              <button className="cta-outline" onClick={() => scrollTo("Contact")}>Contact</button>
            </div>
            
            <div style={{ display: "flex", gap: "clamp(32px, 5vw, 56px)", flexWrap: "wrap" }}>
              {[["1.4k+", "Users on STASH"], ["13k+", "Page views"], ["8.94", "CGPA"]].map(([num, label]) => (
                <div key={label}>
                  <p style={{ fontWeight: 700, fontSize: 34, color: "#D97706", letterSpacing: "-0.02em" }}>{num}</p>
                  <p style={{ fontSize: 12.5, color: "#8A7E77", marginTop: 4, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em" }}>{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Terminal Card (Fills the Negative Space) */}
          <div style={{ flex: "1 1 350px", display: "flex", justifyContent: "center", position: "relative" }}>
            {/* Soft glowing blurs behind the card */}
            <div style={{ position: "absolute", top: -10, right: 10, width: 140, height: 140, background: "rgba(217, 119, 6, 0.12)", borderRadius: "50%", filter: "blur(40px)", zIndex: -1 }}></div>
            <div style={{ position: "absolute", bottom: -10, left: 10, width: 140, height: 140, background: "rgba(138, 114, 95, 0.08)", borderRadius: "50%", filter: "blur(40px)", zIndex: -1 }}></div>
            
            {/* The Window Frame */}
            <div style={{ 
              width: "100%", maxWidth: 440, 
              background: "rgba(255, 255, 255, 0.6)", 
              backdropFilter: "blur(20px)", 
              border: "1px solid rgba(227, 217, 206, 0.8)", 
              borderRadius: 12, 
              boxShadow: "0 20px 40px rgba(100, 85, 75, 0.06)",
              overflow: "hidden"
            }}>
              {/* Mac-style Header */}
              <div style={{ background: "rgba(227, 217, 206, 0.25)", padding: "14px 18px", display: "flex", gap: 8, borderBottom: "1px solid rgba(227, 217, 206, 0.5)" }}>
                <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#FF5F56", border: "1px solid #E0443E" }}></div>
                <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#FFBD2E", border: "1px solid #DEA123" }}></div>
                <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#27C93F", border: "1px solid #1AAB29" }}></div>
              </div>
              
              {/* Code Content */}
              <div style={{ padding: "28px 24px", fontFamily: "'Courier New', Courier, monospace", fontSize: 13.5, color: "#635751", lineHeight: 1.8 }}>
                <p><span style={{ color: "#D97706", fontWeight: 600 }}>const</span> <span style={{ color: "#2A2220", fontWeight: 700 }}>developer</span> = {"{"}</p>
                <div style={{ paddingLeft: 24, margin: "8px 0" }}>
                  <p>name: <span style={{ color: "#1AAB29" }}>"Disha Jain"</span>,</p>
                  <p>role: <span style={{ color: "#1AAB29" }}>"Software & Hardware"</span>,</p>
                  <p>status: <span style={{ color: "#1AAB29" }}>"Building ResQ Robot 🤖"</span>,</p>
                  <p>location: <span style={{ color: "#1AAB29" }}>"Delhi, India"</span>,</p>
                  <p>skills: <span style={{ color: "#4A3F39" }}>[</span><span style={{ color: "#1AAB29" }}>"React"</span>, <span style={{ color: "#1AAB29" }}>"C++"</span>, <span style={{ color: "#1AAB29" }}>"ESP32"</span><span style={{ color: "#4A3F39" }}>]</span></p>
                </div>
                <p>{"};"}</p>
                <br/>
                <p><span style={{ color: "#D97706", fontWeight: 600 }}>await</span> <span style={{ color: "#2A2220", fontWeight: 700 }}>developer</span>.<span style={{ color: "#2A2220", fontWeight: 600 }}>init()</span>;</p>
                <p style={{ color: "#8A7E77", marginTop: 12 }}>{">"} Compiling systems...</p>
                <p style={{ color: "#D97706", marginTop: 4 }}>{">"} Deployment ready.</p>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      <div className="divider" />

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 clamp(24px, 5vw, 64px)" }}>

        {/* SKILLS */}
        <section id="Skills" style={{ padding: "100px 0" }}>
          <SectionLabel text="Skills" />
          <h2 style={{ fontSize: 36, marginBottom: 48 }}>What I work with</h2>
          <div style={{ display: "grid", gap: 28 }}>
            {Object.entries(SKILLS).map(([cat, items]) => (
              <div key={cat} style={{ display: "flex", gap: 24, alignItems: "flex-start", flexWrap: "wrap" }}>
                <p style={{ fontSize: 12, fontWeight: 600, color: "#8A7E77", letterSpacing: "0.1em", textTransform: "uppercase", minWidth: 100, paddingTop: 8 }}>{cat}</p>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap", flex: 1 }}>
                  {items.map(s => <span key={s} className="skill-chip">{s}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="divider" />

        {/* PROJECTS */}
        <section id="Projects" style={{ padding: "100px 0" }}>
          <SectionLabel text="Projects" />
          <h2 style={{ fontSize: 36, marginBottom: 48 }}>Things I've built</h2>
          <div className="proj-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24 }}>
            {PROJECTS.map(p => (
              <div key={p.title} className="proj-card">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
                  <div>
                    <h3 style={{ fontSize: 20, marginBottom: 10 }}>{p.title}</h3>
                    <Tag label={p.tag} />
                  </div>
                  <div style={{ display: "flex", gap: 8 }}>
                    {p.links.live && <a href={p.links.live} target="_blank" rel="noopener noreferrer" className="link-btn">Live ↗</a>}
                    {p.links.github && <a href={p.links.github} target="_blank" rel="noopener noreferrer" className="link-btn">GitHub</a>}
                  </div>
                </div>
                <p style={{ fontSize: 14, lineHeight: 1.7, marginBottom: 24 }}>{p.description}</p>
                {p.metrics.length > 0 && (
                  <div style={{ display: "flex", gap: 12, marginBottom: 24 }}>
                    {p.metrics.map(m => (
                      <div key={m.label} className="metric-cell">
                        <p style={{ fontSize: 18, fontWeight: 700, color: "#2A2220" }}>{m.value}</p>
                        <p style={{ fontSize: 11, color: "#8A7E77", marginTop: 4, fontWeight: 500 }}>{m.label}</p>
                      </div>
                    ))}
                  </div>
                )}
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {p.stack.map(s => <span key={s} className="stack-chip">{s}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="divider" />

        {/* EXPERIENCE */}
        <section id="Experience" style={{ padding: "100px 0" }}>
          <SectionLabel text="Experience" />
          <h2 style={{ fontSize: 36, marginBottom: 48 }}>Where I've contributed</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {TIMELINE.map((t, i) => (
              <div key={i} style={{ display: "flex", gap: 28, paddingBottom: 40 }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 6 }}>
                  <div style={{ width: 12, height: 12, borderRadius: "50%", border: "3px solid #D97706", background: "#FAF8F5", flexShrink: 0 }} />
                  {i < TIMELINE.length - 1 && <div style={{ flex: 1, width: 1, background: "#E8E0D5", marginTop: 8 }} />}
                </div>
                <div>
                  <p style={{ fontWeight: 600, fontSize: 16, color: "#2A2220", marginBottom: 4 }}>{t.role}</p>
                  <p style={{ fontSize: 13.5, color: "#8A7E77", marginBottom: 16, fontWeight: 500 }}>{t.org} · {t.period}</p>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                    {t.points.map((pt, j) => (
                      <li key={j} style={{ display: "flex", gap: 12, fontSize: 14, color: "#635751", lineHeight: 1.6 }}>
                        <span style={{ color: "#D4C9C1", flexShrink: 0 }}>—</span>{pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Education */}
          <div style={{ background: "rgba(255,255,255,0.6)", border: "1px solid #E8E0D5", borderRadius: 12, padding: "28px 32px", marginTop: 16, backdropFilter: "blur(4px)" }}>
            <p style={{ fontSize: 11.5, fontWeight: 600, color: "#8A7E77", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>Education</p>
            <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 16, alignItems: "center" }}>
              <div>
                <p style={{ fontWeight: 600, fontSize: 16, color: "#2A2220" }}>B.Tech in Computer Science</p>
                <p style={{ fontSize: 14, color: "#8A7E77", marginTop: 6 }}>Indira Gandhi Delhi Technical University for Women · 2024 – 2028</p>
              </div>
              <div style={{ textAlign: "right" }}>
                <p style={{ fontSize: 28, fontWeight: 700, color: "#D97706", letterSpacing: "-0.02em" }}>8.94</p>
                <p style={{ fontSize: 12, color: "#8A7E77", fontWeight: 500 }}>CGPA</p>
              </div>
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* ACHIEVEMENTS */}
        <section id="Achievements" style={{ padding: "100px 0" }}>
          <SectionLabel text="Achievements" />
          <h2 style={{ fontSize: 36, marginBottom: 48 }}>Recognition</h2>
          <div style={{ background: "rgba(255,255,255,0.6)", border: "1px solid #E8E0D5", borderRadius: 12, padding: "0 32px", backdropFilter: "blur(4px)" }}>
            {HACKATHONS.map((h, i) => (
              <div key={i} className="hack-row">
                <p style={{ fontSize: 14.5, color: "#2A2220", fontWeight: 500, flex: 1 }}>{h.event}</p>
                <span style={{ background: "#F5F0E6", color: "#635751", fontSize: 12, fontWeight: 600, padding: "6px 14px", borderRadius: 6, border: "1px solid #E8E0D5", whiteSpace: "nowrap" }}>{h.result}</span>
              </div>
            ))}
          </div>
        </section>

        <div className="divider" />

        {/* CONTACT */}
        <section id="Contact" style={{ padding: "100px 0 120px" }}>
          <SectionLabel text="Contact" />
          <h2 style={{ fontSize: 36, marginBottom: 16 }}>Let's connect</h2>
          <p style={{ fontSize: 16, color: "#635751", marginBottom: 48, lineHeight: 1.7, maxWidth: 500 }}>
            Open to internships, collaborations, and interesting projects. Feel free to reach out through any of the platforms below.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20, marginBottom: 40 }}>
            {CONTACT_ITEMS.map(item => (
              <a key={item.label} href={item.href} target={item.label !== "Email" ? "_blank" : undefined} rel="noopener noreferrer" className="contact-card">
                <div className="contact-icon-wrapper">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={item.icon} />
                  </svg>
                </div>
                <div style={{ overflow: "hidden", flex: 1 }}>
                  <p style={{ fontSize: 12.5, color: "#8A7E77", marginBottom: 4, fontWeight: 500 }}>{item.label}</p>
                  <p style={{ fontSize: 14.5, color: "#2A2220", fontWeight: 600, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{item.value}</p>
                </div>
                <svg className="contact-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M7 7h10v10" />
                </svg>
              </a>
            ))}
          </div>

          <div style={{ background: "rgba(255,255,255,0.7)", border: "1px solid #E8E0D5", borderRadius: 12, padding: "32px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 20, backdropFilter: "blur(8px)" }}>
            <div>
              <p style={{ fontSize: 16, fontWeight: 600, color: "#2A2220", marginBottom: 6 }}>Prefer email?</p>
              <p style={{ fontSize: 14, color: "#8A7E77" }}>{LINKS.email}</p>
            </div>
            <div style={{ display: "flex", gap: 12 }}>
              <button onClick={copyEmail} className="cta-outline" style={{ fontSize: 13.5 }}>
                {copied ? "Copied ✓" : "Copy address"}
              </button>
              <a href={`mailto:${LINKS.email}`} className="cta-primary" style={{ fontSize: 13.5 }}>Send email</a>
            </div>
          </div>
        </section>

      </div>

      {/* FOOTER */}
      <div className="divider" />
      <footer style={{ padding: "32px clamp(24px, 5vw, 64px)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16, position: "relative", zIndex: 1 }}>
        <span style={{ fontWeight: 700, fontSize: 16, color: "#2A2220", letterSpacing: "-0.01em" }}>Disha Jain</span>
        <div style={{ display: "flex", gap: 32 }}>
          {[["GitHub", LINKS.github], ["LinkedIn", LINKS.linkedin], ["LeetCode", LINKS.leetcode]].map(([l, href]) => (
            <a key={l} href={href} target="_blank" rel="noopener noreferrer" style={{ fontSize: 13.5, fontWeight: 500, color: "#8A7E77", transition: "color .2s" }}
               onMouseOver={e => e.currentTarget.style.color = "#D97706"}
               onMouseOut={e => e.currentTarget.style.color = "#8A7E77"}>{l}</a>
          ))}
        </div>
        <p style={{ fontSize: 13, color: "#A89C94", fontWeight: 500 }}>B.Tech CSE · IGDTUW · 2028</p>
      </footer>
    </div>
  );
}

function SectionLabel({ text }) {
  return (
    <p style={{ fontSize: 12, fontWeight: 600, color: "#D97706", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }}>
      {text}
    </p>
  );
}