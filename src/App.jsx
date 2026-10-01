import { useState } from "react";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Menu,
  Code2,
  Database,
  Layers3,
  Smartphone,
  ExternalLink,
  BriefcaseBusiness,
  GraduationCap,
  X,
} from "lucide-react";

// =====================================================
// TECHNICAL SKILLS
// =====================================================

const skills = [
  {
    title: "Programming Languages",
    items: ["JavaScript", "C", "C#", "Java", "Python", "PHP", "R"],
    icon: Code2,
  },
  {
    title: "Frontend Development",
    items: [
      "React.js",
      "HTML5",
      "CSS3",
      "Responsive Design",
      "Flexbox",
      "CSS Grid",
      "UI/UX Design",
    ],
    icon: Layers3,
  },
  {
    title: "Backend Development",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "API Architecture",
      "Email OTP Authentication",
    ],
    icon: Code2,
  },
  {
    title: "Databases & Architecture",
    items: [
      "MongoDB",
      "MySQL",
      "SQL",
      "DBMS",
      "Database Design",
      "Data Modelling",
      "System Design Fundamentals",
    ],
    icon: Database,
  },
  {
    title: "Cloud & Deployment",
    items: [
      "Cloud Computing Fundamentals",
      "Render",
      "Environment Variables",
      "Domain Configuration",
      "DNS",
    ],
    icon: Smartphone,
  },
  {
    title: "Developer Tools",
    items: [
      "Git",
      "GitHub",
      "Visual Studio Code",
      "Brevo SMTP",
      "GoDaddy DNS",
      "Debugging",
    ],
    icon: BriefcaseBusiness,
  },
  {
    title: "Computer Science Fundamentals",
    items: [
      "Data Structures",
      "Algorithms",
      "Operating Systems",
      "Computer Networks",
      "Software Engineering",
      "TCP/IP",
      "HTTP",
    ],
    icon: Layers3,
  },
  {
    title: "Data, AI & Security",
    items: [
      "Data Analysis",
      "Data Science Fundamentals",
      "Artificial Intelligence Fundamentals",
      "Cybersecurity Fundamentals",
      "R Programming",
    ],
    icon: Database,
  },
];

// =====================================================
// PROJECTS
// =====================================================

const projects = [
  {
    number: "01",
    name: "Shuttle Craft Badminton Academy",
    type: "Live web application",
    description:
      "Designed, developed, and deployed a full-stack web application supporting badminton academy operations. Includes email OTP authentication, backend APIs, MongoDB data storage, and custom domain deployment.",
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Email OTP",
      "Render",
    ],
    link: "https://shuttlecraft.in",
    cta: "Visit live website",
  },
  {
    number: "02",
    name: "PGRENIX Market",
    type: "Startup venture · In development",
    description:
      "Developing a virtual farmer-market platform to connect farmers with vendors and traders. Working on role-based workflows, database architecture, marketplace functionality, and logistics coordination.",
    tags: [
      "MERN Stack",
      "REST APIs",
      "Role-based Workflows",
      "Database Design",
      "Web & Mobile",
    ],
    link: "",
    cta: "In development",
  },
];

// =====================================================
// REUSABLE SECTION HEADING
// =====================================================

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

// =====================================================
// MAIN APP
// =====================================================

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const nav = [
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Experience", "#journey"],
    ["Projects", "#projects"],
    ["Education", "#education"],
    ["Contact", "#contact"],
  ];

  return (
    <div className="site-shell">
      {/* =====================================================
          NAVIGATION
      ===================================================== */}

      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu}>
          P<span>R.</span>
        </a>

        <button
          className="menu-toggle"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {nav.map(([label, href]) => (
            <a key={label} href={href} onClick={closeMenu}>
              {label}
            </a>
          ))}

          <a className="nav-cta" href="#contact" onClick={closeMenu}>
            Let's talk <ArrowUpRight size={16} />
          </a>
        </nav>
      </header>

      <main>
        {/* =====================================================
            HERO SECTION
        ===================================================== */}

        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="availability">
              <span className="status-dot"></span>
              Open to opportunities
            </div>

            <p className="eyebrow">HELLO, I'M PRAJWAL RAO MB</p>

            <h1>
              Software
              <br />
              <span>Developer.</span>
            </h1>

            <p className="hero-tagline">Building Useful Digital Experiences.</p>

            <p className="hero-text">
              BCA graduate and Full-Stack MERN Developer with hands-on
              experience developing and deploying web applications. Experienced
              in React.js, Node.js, Express.js, MongoDB, REST APIs,
              authentication, and database design.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore My Projects <ArrowUpRight size={17} />
              </a>

              <a className="button button-quiet" href="#contact">
                Contact Me
              </a>
            </div>

            <div className="hero-meta">
              <span>
                <MapPin size={15} /> Bengaluru, India
              </span>

              <span>
                <Code2 size={15} /> Full-Stack MERN Developer
              </span>
            </div>
          </div>

          {/* Hero Illustration */}

          {/* Hero Profile Photo */}

          <div className="hero-art">
            <div className="orbit orbit-one"></div>
            <div className="orbit orbit-two"></div>
            <div className="art-glow"></div>

            <div className="hero-photo-frame">
              <img
                src="/prajwal.jpg"
                alt="Prajwal Rao"
                className="hero-profile-photo"
              />
            </div>

            <div className="floating-chip chip-top">
              <span className="chip-icon">
                <Code2 size={16} />
              </span>
              Full-Stack Development
            </div>

            <div className="floating-chip chip-bottom">
              <span className="chip-icon purple">
                <Database size={16} />
              </span>
              APIs · Databases · UI
            </div>

            <div className="art-number">
              01 <span>/ 04</span>
            </div>
          </div>
        </section>

        {/* =====================================================
            QUICK FACTS
        ===================================================== */}

        <section className="intro-strip">
          <div>
            <strong>BCA</strong>
            <span>Graduate · 2026</span>
          </div>

          <div>
            <strong>MERN</strong>
            <span>Full-Stack Development</span>
          </div>

          <div>
            <strong>02</strong>
            <span>Featured Projects</span>
          </div>

          <div>
            <strong>Build</strong>
            <span>Learn · Improve</span>
          </div>
        </section>

        {/* =====================================================
            ABOUT SECTION
        ===================================================== */}

        <section className="section-wrap section-block" id="about">
          <SectionHeading
            eyebrow="ABOUT ME"
            title="Developer with a builder's mindset."
            text="Turning real-world requirements into practical software solutions."
          />

          <div className="about-grid">
            <div className="about-copy">
              <p>
                I'm Prajwal Rao, a BCA graduate from Bengaluru with hands-on
                experience developing and deploying full-stack web applications
                using the MERN stack. My experience includes frontend
                development, backend APIs, authentication, database design, and
                application deployment.
              </p>

              <p>
                I built the Shuttle Craft Badminton Academy web application and
                am developing <strong>PGRENIX Market</strong> as a startup
                venture. I am looking to grow through meaningful software
                development work and contribute to real-world applications.
              </p>

              <a
                className="text-link"
                href="https://shuttlecraft.in"
                target="_blank"
                rel="noreferrer"
              >
                View Live Application <ArrowUpRight size={16} />
              </a>
            </div>

            <div className="about-facts">
              <div className="fact">
                <span className="fact-icon">
                  <GraduationCap />
                </span>

                <div>
                  <small>Education</small>
                  <strong>Bachelor of Computer Applications</strong>
                  <span>Bengaluru North University</span>
                  <span>2023–2026</span>
                </div>
              </div>

              <div className="fact">
                <span className="fact-icon">
                  <BriefcaseBusiness />
                </span>

                <div>
                  <small>Professional Focus</small>
                  <strong>Full-Stack Development</strong>
                  <span>Frontend, backend, APIs and databases</span>
                </div>
              </div>

              <div className="fact">
                <span className="fact-icon">
                  <MapPin />
                </span>

                <div>
                  <small>Location</small>
                  <strong>Bengaluru, Karnataka</strong>
                  <span>India</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            TECHNICAL SKILLS
        ===================================================== */}

        <section className="section-wrap section-block" id="skills">
          <SectionHeading
            eyebrow="TECHNICAL TOOLKIT"
            title="Skills & technologies."
            text="Technologies and computer science fundamentals from my development experience and academic background."
          />

          <div className="skills-grid">
            {skills.map(({ title, items, icon: Icon }) => (
              <article className="skill-card" key={title}>
                <div className="skill-title">
                  <span className="skill-icon">
                    <Icon size={19} />
                  </span>

                  <h3>{title}</h3>
                </div>

                <div className="tag-list">
                  {items.map((item) => (
                    <span className="tag" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <p className="skills-note">
            Additional knowledge: application architecture, database
            architecture, networking, cloud computing fundamentals, web content
            management systems, computer multimedia and animation, and digital
            marketing.
          </p>
        </section>

        {/* =====================================================
            PROFESSIONAL EXPERIENCE
        ===================================================== */}

        <section
          className="section-wrap section-block journey-section"
          id="journey"
        >
          <SectionHeading
            eyebrow="PROFESSIONAL EXPERIENCE"
            title="Building through real-world projects."
            text="My development experience and startup journey."
          />

          <div className="timeline">
            {/* Independent Developer */}

            <div className="timeline-item">
              <span className="timeline-dot"></span>

              <div className="timeline-date">PROJECT-BASED EXPERIENCE</div>

              <div className="timeline-main">
                <h3>Independent Full-Stack Developer</h3>

                <p>Project-Based Experience · Bengaluru, India</p>

                <p>
                  Designed, developed, and deployed a full-stack web application
                  for badminton academy operations. Worked across frontend
                  development, backend functionality, REST API integration,
                  MongoDB database design, and application deployment.
                </p>

                <p>
                  Implemented email OTP authentication using Brevo SMTP,
                  configured production environment variables, deployed the
                  application using Render, and connected the custom domain
                  through GoDaddy DNS.
                </p>

                <a
                  className="text-link"
                  href="https://shuttlecraft.in"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Live Application <ArrowUpRight size={15} />
                </a>
              </div>
            </div>

            {/* PGRENIX Market */}

            <div className="timeline-item">
              <span className="timeline-dot"></span>

              <div className="timeline-date">
                STARTUP VENTURE · IN DEVELOPMENT
              </div>

              <div className="timeline-main">
                <h3>Founder & Developer · PGRENIX Market</h3>

                <p>
                  Developing a virtual farmer-market platform intended to
                  connect farmers with vendors and traders.
                </p>

                <p>
                  Designing role-based workflows for farmers, vendors, drivers,
                  virtual farmers/brokers, and administrators. Working on API
                  architecture, database architecture, marketplace
                  functionality, and web/mobile application workflows.
                </p>

                <span className="timeline-badge">
                  Founder · Startup Venture
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            PROJECTS
        ===================================================== */}

        <section className="section-wrap section-block" id="projects">
          <div className="projects-heading">
            <SectionHeading
              eyebrow="SELECTED WORK"
              title="Projects with a purpose."
              text="Full-stack development experience and my ongoing startup venture."
            />

            <span className="project-count">02 projects</span>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div
                  className={`project-visual ${
                    project.number === "02" ? "market-visual" : "shuttle-visual"
                  }`}
                >
                  <span className="project-index">
                    {project.number} / PROJECT
                  </span>

                  {project.number === "01" ? (
                    <div className="mock-window">
                      <div className="mock-top">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>

                      <div className="mock-brand">
                        SHUTTLE<span>CRAFT</span>
                      </div>

                      <div className="mock-sub">BADMINTON ACADEMY</div>

                      <div className="mock-lines">
                        <i></i>
                        <i></i>
                      </div>

                      <div className="mock-pill">
                        Explore academy <ArrowUpRight size={12} />
                      </div>

                      <div className="shuttle-mark">✳</div>
                    </div>
                  ) : (
                    <div className="market-mark">
                      <span className="leaf">✳</span>

                      <strong>
                        PGRENIX
                        <br />
                        <span>Market</span>
                      </strong>

                      <small>Connecting farms to markets</small>

                      <div className="field-lines"></div>
                    </div>
                  )}

                  <span className="visual-caption">{project.type}</span>
                </div>

                <div className="project-content">
                  <div className="project-title-row">
                    <h3>{project.name}</h3>

                    <span className="project-arrow">
                      <ArrowUpRight size={18} />
                    </span>
                  </div>

                  <p>{project.description}</p>

                  <div className="tag-list">
                    {project.tags.map((tag) => (
                      <span className="tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="project-footer">
                    {project.link ? (
                      <a
                        className="text-link"
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {project.cta} <ExternalLink size={15} />
                      </a>
                    ) : (
                      <span className="development-label">
                        <span className="status-dot"></span>
                        {project.cta}
                      </span>
                    )}

                    <span className="project-type">
                      {project.number === "01"
                        ? "Full-Stack Web Application"
                        : "Startup Venture"}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* =====================================================
            EDUCATION
        ===================================================== */}

        <section className="section-wrap section-block" id="education">
          <SectionHeading
            eyebrow="EDUCATION"
            title="Academic background."
            text="My educational qualifications and academic foundation."
          />

          <div className="timeline">
            {/* BCA */}

            <div className="timeline-item">
              <span className="timeline-dot"></span>

              <div className="timeline-date">2023 — 2026</div>

              <div className="timeline-main">
                <h3>Bachelor of Computer Applications (BCA)</h3>

                <p>
                  Bengaluru North University
                  <br />
                  Government First Grade College, K.R. Puram, Bengaluru, India.
                </p>

                <span className="timeline-badge">Graduated · 2026</span>
              </div>
            </div>

            {/* PUC */}

            <div className="timeline-item">
              <span className="timeline-dot"></span>

              <div className="timeline-date">2022 — 2023</div>

              <div className="timeline-main">
                <h3>Pre-University Course (PUC)</h3>

                <p>
                  Government PU College
                  <br />
                  Hoodi, Bengaluru, India.
                </p>
              </div>
            </div>

            {/* SSLC */}

            <div className="timeline-item">
              <span className="timeline-dot"></span>

              <div className="timeline-date">2017 — 2018</div>

              <div className="timeline-main">
                <h3>Secondary School Leaving Certificate (SSLC)</h3>

                <p>
                  Government High School
                  <br />
                  Banavara, Karnataka, India.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            ADDITIONAL INFORMATION
        ===================================================== */}

        <section className="section-wrap section-block">
          <SectionHeading
            eyebrow="ADDITIONAL INFORMATION"
            title="Beyond development."
            text="Other skills and knowledge that complement my technical background."
          />

          <div className="skills-grid">
            <article className="skill-card">
              <div className="skill-title">
                <span className="skill-icon">
                  <Code2 size={19} />
                </span>

                <h3>Networking & Web</h3>
              </div>

              <div className="tag-list">
                {["TCP/IP", "HTTP", "DNS", "Client-Server Communication"].map(
                  (item) => (
                    <span className="tag" key={item}>
                      {item}
                    </span>
                  )
                )}
              </div>
            </article>

            <article className="skill-card">
              <div className="skill-title">
                <span className="skill-icon">
                  <Layers3 size={19} />
                </span>

                <h3>Additional Knowledge</h3>
              </div>

              <div className="tag-list">
                {[
                  "UI/UX Design",
                  "Digital Marketing",
                  "Web Content Management",
                  "Computer Multimedia",
                  "Animation",
                  "Debugging",
                ].map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </article>

            <article className="skill-card">
              <div className="skill-title">
                <span className="skill-icon">
                  <Mail size={19} />
                </span>

                <h3>Languages</h3>
              </div>

              <div className="tag-list">
                {["English", "Hindi", "Kannada", "Marathi"].map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </section>

        {/* =====================================================
            CONTACT
        ===================================================== */}

        <section className="contact-section" id="contact">
          <div className="section-wrap contact-inner">
            <div>
              <span className="eyebrow">HAVE A ROLE OR PROJECT?</span>

              <h2>
                Let's build something
                <br />
                <span>that matters.</span>
              </h2>

              <p>
                I'm seeking Software Engineer and Full-Stack Developer
                opportunities. I'm also open to professional collaborations and
                software development projects.
              </p>

              <a
                className="button button-primary"
                href="mailto:raoprajwal71@gmail.com"
              >
                Email Me <ArrowUpRight size={17} />
              </a>
            </div>

            <div className="contact-links">
              {/* Email */}

              <a href="mailto:raoprajwal71@gmail.com">
                <span className="contact-icon">
                  <Mail />
                </span>

                <span>
                  <small>Email</small>
                  <strong>raoprajwal71@gmail.com</strong>
                </span>

                <ArrowUpRight size={17} />
              </a>

              {/* Phone */}

              <a href="tel:+916362310247">
                <span className="contact-icon">
                  <Smartphone />
                </span>

                <span>
                  <small>Phone</small>
                  <strong>+91 6362310247</strong>
                </span>

                <ArrowUpRight size={17} />
              </a>

              {/* LinkedIn */}

              <a
                href="https://www.linkedin.com/in/prajwal-rao-70a24234b"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-icon">
                  <ExternalLink />
                </span>

                <span>
                  <small>LinkedIn</small>
                  <strong>Connect with me</strong>
                </span>

                <ArrowUpRight size={17} />
              </a>

              {/* Live Website */}

              <a
                href="https://shuttlecraft.in"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-icon">
                  <ExternalLink />
                </span>

                <span>
                  <small>Live Project / Portfolio</small>
                  <strong>shuttlecraft.in</strong>
                </span>

                <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="footer">
        <a className="brand" href="#home">
          P<span>R.</span>
        </a>

        <span>Software Developer · Full-Stack MERN Developer</span>

        <a href="#home" className="back-top">
          Back to top ↑
        </a>

        <small>© {new Date().getFullYear()} Prajwal Rao</small>
      </footer>
    </div>
  );
}
