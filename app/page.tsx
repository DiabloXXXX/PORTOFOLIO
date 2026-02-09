"use client"

import { useEffect, useState } from "react"
import { projects, workExperience, organizations, certifications, skills, type Project } from "@/lib/data"
import { ProjectCard } from "@/components/ProjectCard"
import { ProjectModal } from "@/components/ProjectModal"
import { Footer } from "@/components/Footer"

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    // Check local storage or system preference
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme === "dark") {
      setIsDarkMode(true)
      document.documentElement.classList.add("dark")
    } else if (savedTheme === "light") {
      setIsDarkMode(false)
      document.documentElement.classList.remove("dark")
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setIsDarkMode(true)
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
      setIsDarkMode(false)
    } else {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
      setIsDarkMode(true)
    }
  }

  const openProjectModal = (project: Project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeProjectModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  useEffect(() => {
    function updateClock() {
      const now = new Date()
      const timeStr =
        now.getHours().toString().padStart(2, "0") +
        ":" +
        now.getMinutes().toString().padStart(2, "0") +
        ":" +
        now.getSeconds().toString().padStart(2, "0")
      const statusElement = document.querySelector(".system-status")
      if (statusElement) {
        statusElement.textContent = `SYS_UP: ${timeStr} | STATUS: READY`
      }
    }
    updateClock()
    const interval = setInterval(updateClock, 1000)

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      clearInterval(interval)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      {showScrollTop && (
        <button onClick={scrollToTop} className="scroll-to-top" aria-label="Scroll to top">
          <span className="scroll-arrow">↑</span>
        </button>
      )}

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? "open" : ""}`}>
        <button className="mobile-menu-close" onClick={toggleMenu}>
          &times;
        </button>
        <nav className="mobile-nav-links">
          <a href="#about" onClick={toggleMenu}>ABOUT</a>
          <a href="#experience" onClick={toggleMenu}>EXPERIENCE</a>
          <a href="#projects" onClick={toggleMenu}>PROJECTS</a>
          <a href="#skills" onClick={toggleMenu}>SKILLS</a>
          <a href="#contact" onClick={toggleMenu}>CONTACT</a>
          <div className="mobile-theme-toggle">
            <span>THEME:</span>
            <button onClick={toggleTheme} className="theme-toggle-btn" aria-label="Toggle theme">
              {isDarkMode ? "☀️" : "🌙"}
            </button>
          </div>
        </nav>
      </div>

      <header>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div className="logo">YUGI.DEV</div>

          {/* Desktop Nav */}
          <nav className="nav-links desktop-nav">
            <a href="#about">ABOUT</a>
            <a href="#experience">EXPERIENCE</a>
            <a href="#projects">PROJECTS</a>
            <a href="#skills">SKILLS</a>
            <a href="#contact">CONTACT</a>
            <button onClick={toggleTheme} className="theme-toggle-btn" aria-label="Toggle theme">
              {isDarkMode ? "☀️" : "🌙"}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Menu">
            <span className="hamburger-icon">☰</span>
          </button>

          <div className="system-status desktop-only">SYS_UP: 00:00:00 | STATUS: READY</div>
        </div>
      </header>

      <div className="container">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <p style={{ color: "var(--accent-retro)", marginBottom: "10px" }}>HELLO, I'M</p>
            <h1>
              YUGI INDRA <br />
              <span style={{ color: "var(--accent-retro)" }}>PRAKASA</span>
            </h1>
            <p>
              Perkenalkan, saya Yugi Indra Prakasa, saya merupakan mahasiswa tingkat akhir (Semester 7) Teknik Informatika
              Universitas Gunadarma dengan IPK 3.61. Memiliki kompetensi di bidang pengembangan teknis, pengolahan data,
              serta manajemen produk. Saat ini sedang memperdalam keahlian melalui pelatihan sertifikasi Data Science.
              Terbiasa bekerja dalam lingkungan operasional yang cepat, mengelola riset pengguna, serta memimpin proyek
              kolaboratif. Mencari peluang magang untuk menerapkan kemampuan analisis data dalam pengembangan produk
              digital.
            </p>
            <div className="hero-cta">
              <a href="#projects" className="btn-retro">VIEW PROJECTS</a>
              <a
                href="/CV_YUGI INDRA PRAKASA_ATS.pdf"
                download
                className="btn-retro btn-outline"
              >
                DOWNLOAD CV
              </a>
            </div>
          </div>
        </section>

        {/* Stats */}
        <div className="stats-bar">
          <div className="stat-item">
            <div className="stat-val">3.61</div>
            <div className="stat-label">IPK Score</div>
          </div>
          <div className="stat-item">
            <div className="stat-val">110+</div>
            <div className="stat-label">Events Managed</div>
          </div>
          <div className="stat-item">
            <div className="stat-val">450+</div>
            <div className="stat-label">Research Respondents</div>
          </div>
          <div className="stat-item">
            <div className="stat-val">5+</div>
            <div className="stat-label">Certifications</div>
          </div>
        </div>

        {/* Education Section */}
        <section id="about" className="section">
          <h2 className="section-title">EDUCATION</h2>
          <div className="education-grid">
            <div className="edu-card">
              <div className="edu-header">
                <span className="edu-degree">S1 Teknik Informatika</span>
                <span className="edu-period">2022 – Sekarang</span>
              </div>
              <h3 className="edu-institution">Universitas Gunadarma</h3>
              <p className="edu-location">Depok, Jawa Barat</p>
              <div className="edu-details">
                <span className="edu-gpa">IPK: 3.61 / 4.00</span>
                <p className="edu-focus">Fokus: Pengembangan Sistem, Basis Data, Manajemen Proyek TI</p>
              </div>
            </div>
            <div className="edu-card">
              <div className="edu-header">
                <span className="edu-degree">Jurusan MIPA</span>
                <span className="edu-period">2019 – 2022</span>
              </div>
              <h3 className="edu-institution">SMAN 04 Cibinong</h3>
              <p className="edu-location">Kabupaten Bogor</p>
            </div>
          </div>
        </section>

        {/* Work Experience Section */}
        <section id="experience" className="section">
          <h2 className="section-title">WORK EXPERIENCE</h2>
          <div className="experience-list">
            {workExperience.map((exp, index) => (
              <div key={index} className="exp-card">
                <div className="exp-header">
                  <div>
                    <h3 className="exp-title">{exp.title}</h3>
                    <p className="exp-company">{exp.company}</p>
                  </div>
                  <span className="exp-period">{exp.period}</span>
                </div>
                <ul className="exp-highlights">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h3 className="subsection-title">ORGANIZATIONAL EXPERIENCE</h3>
          <div className="org-grid">
            {organizations.map((org, index) => (
              <div key={index} className="org-card">
                <div className="org-header">
                  <span className="org-period">{org.period}</span>
                </div>
                <h4 className="org-title">{org.title}</h4>
                <p className="org-name">{org.org}</p>
                <ul className="org-highlights">
                  {org.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section">
          <h2 className="section-title">PROJECT DEPLOYMENTS</h2>
          <div className="portfolio-grid">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => openProjectModal(project)}
              />
            ))}
          </div>
        </section>
      </div>

      {/* Marquee */}
      <div className="marquee-container">
        <div className="marquee-text">
          <span>SEEKING INTERNSHIP OPPORTUNITIES • </span>
          <span>FULL STACK DEVELOPMENT • </span>
          <span>UI/UX DESIGN • </span>
          <span>DATA SCIENCE • </span>
          <span>SEEKING INTERNSHIP OPPORTUNITIES • </span>
          <span>FULL STACK DEVELOPMENT • </span>
          <span>UI/UX DESIGN • </span>
          <span>DATA SCIENCE • </span>
        </div>
      </div>

      <div className="container">
        {/* Skills & Certifications Section */}
        <section id="skills" className="section">
          <h2 className="section-title">SKILLS & CERTIFICATIONS</h2>

          <div className="skills-grid">
            <div className="skill-category">
              <h3 className="skill-cat-title">PROGRAMMING & WEB</h3>
              <div className="skill-tags">
                {skills.programming.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3 className="skill-cat-title">DATABASE</h3>
              <div className="skill-tags">
                {skills.database.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3 className="skill-cat-title">DESIGN & TOOLS</h3>
              <div className="skill-tags">
                {skills.design.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3 className="skill-cat-title">LANGUAGES</h3>
              <div className="skill-tags">
                {skills.languages.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>

          <h3 className="subsection-title">CERTIFICATIONS</h3>
          <div className="cert-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="cert-card">
                <div className="cert-status" data-status={cert.status}>
                  {cert.status === "Completed" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                  )}
                </div>
                <div className="cert-info">
                  <h4 className="cert-name">{cert.name}</h4>
                  <p className="cert-issuer">{cert.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer / Contact */}
        <Footer />

        <div className="footer-badge">
          <a href="https://linktr.ee/Iguyy" target="_blank" rel="noopener noreferrer" className="badge-link-footer">
            <div className="badge-content-footer">
              <span className="badge-label">STATUS:</span>
              <span className="badge-highlight">OPEN TO WORK</span>
              <span className="badge-separator">→</span>
              <span className="badge-label">CONNECT:</span>
              <span className="badge-highlight">linktr.ee/Iguyy</span>
            </div>
          </a>
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeProjectModal}
      />
    </>
  )
}
