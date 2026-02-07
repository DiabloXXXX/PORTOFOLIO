"use client"

import { useEffect, useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"

// Project data with live URLs
const projects = [
  {
    id: "smartservice",
    windowTitle: "PROJECT_SMARTSERVICE",
    tag: "#FULLSTACK #CHATBOT",
    title: "Portal Layanan Publik Kelurahan Jagakarsa",
    description: "Portal layanan digital responsif dengan Chatbot Interaktif untuk mengotomatisasi respon layanan warga. Optimasi UX untuk aksesibilitas mobile dan kecepatan muat.",
    liveUrl: "https://kelurahanjagakarsa.id/",
    techStack: ["PHP", "JavaScript", "Chatbot", "Responsive Design"],
    role: "Full Stack Developer",
    embeddable: false,
    image: "/jagakarsa.png",
  },
  {
    id: "hotel",
    windowTitle: "PROJECT_HOTEL",
    tag: "#FULLSTACK #DATABASE",
    title: "Hotel Senang Hati Web App",
    description: "Aplikasi manajemen hotel berbasis web dengan fitur reservasi tamu, manajemen kamar, dan dashboard admin. Dokumentasi teknis, deployment, dan testing.",
    liveUrl: "https://hotel-app-git-main-diabloxxxxs-projects.vercel.app/",
    techStack: ["PHP", "MySQL", "JavaScript", "HTML/CSS"],
    role: "Back-End Developer",
  },
  {
    id: "maison",
    windowTitle: "PROJECT_MAISON",
    tag: "#FRONTEND #E_COMMERCE",
    title: "Maison du Croissant",
    description: "Website katalog bakery bertema luxury yang responsif dan mobile-friendly. Fitur keranjang belanja dan modal detail produk untuk meningkatkan UX.",
    liveUrl: "https://menu-app-git-main-diabloxxxxs-projects.vercel.app/",
    techStack: ["HTML", "CSS", "JavaScript"],
    role: "Front-End Developer",
  },
  {
    id: "manga",
    windowTitle: "PROJECT_MANGA",
    tag: "#UI_UX #DESIGN",
    title: "Manga App Design (Studi Kasus)",
    description: "High-Fidelity Prototype di Figma untuk 9 halaman kunci termasuk Home, Discover, dan My Shelf. Design System dengan Text Styles dan Color Styles untuk skalabilitas.",
    liveUrl: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FeW4UPutW9hQivo2O5QPnmG%2FYUGI-INDRA-PRAKASA_51422659%3Fnode-id%3D86-300%26starting-point-node-id%3D86%253A300%26t%3DUqXF0nHPIsoq37Ua-1",
    techStack: ["Figma", "UI/UX Design", "Design System"],
    role: "UI/UX Designer",
  },
]

// Work experience data
const workExperience = [
  {
    title: "Technical Support",
    company: "Sekretariat Pameran & Kunjungan Universitas Gunadarma",
    period: "Juni 2024 – Agustus 2025",
    highlights: [
      "Mengelola dukungan teknis untuk 110+ acara pameran dan kunjungan kampus",
      "Troubleshooting perangkat keras dan lunak dengan tingkat keberhasilan pada 10+ unit perangkat kritis",
      "Inventarisasi 25+ item elektronik melalui audit rutin",
    ],
  },
]

// Organization experience
const organizations = [
  {
    title: "Staf Biro Riset dan Penelitian",
    org: "BEM FTI Universitas Gunadarma",
    period: "Des 2023 – Agu 2024",
    highlights: [
      "Memimpin program 'Goriset' dengan 450 responden mahasiswa",
      "Melakukan in-depth interview untuk umpan balik strategis",
    ],
  },
  {
    title: "Penanggung Jawab Lomba Valorant",
    org: "IT'S SOCIART Fest 2024",
    period: "Jun 2024 – Agu 2024",
    highlights: [
      "Negosiasi kemitraan infrastruktur internet dengan Telkomsel",
      "Live stream di YouTube mencapai 3.000 penonton",
    ],
  },
  {
    title: "Kepala Divisi Humas dan Registrasi",
    org: "FTI EXPO X Ruang Ekspresi",
    period: "Feb 2024 – Mei 2024",
    highlights: [
      "Mengelola 10 booth pameran dari laboratorium dan lembaga",
      "Merancang sistem registrasi pengunjung",
    ],
  },
]

// Certifications
const certifications = [
  { name: "LSP Data Science", status: "In Progress", issuer: "LSP" },
  { name: "SQL Server for Intermediate", status: "Completed", issuer: "LePKom Gunadarma" },
  { name: "Oracle for Beginner", status: "Completed", issuer: "LePKom Gunadarma" },
  { name: "Fundamental DBMS & SQL Server", status: "Completed", issuer: "LePKom Gunadarma" },
  { name: "Fundamental Desktop Development", status: "Completed", issuer: "LePKom Gunadarma" },
]

// Skills
const skills = {
  programming: ["HTML", "CSS", "JavaScript", "PHP"],
  database: ["SQL Server", "MySQL", "Oracle Database", "Data Science"],
  design: ["Figma (UI/UX)", "Canva", "CapCut", "Adobe Lightroom"],
  tools: ["Microsoft Office", "Access", "Excel", "Teams"],
  languages: ["Bahasa Indonesia (Native)", "English (Professional Working)"],
}

interface Project {
  id: string
  windowTitle: string
  tag: string
  title: string
  description: string
  liveUrl: string
  techStack: string[]
  role: string
  embeddable?: boolean
  image?: string
}

function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  return (
    <div className="project-card" onClick={onClick} style={{ cursor: "pointer" }}>
      <div className="window-header" style={{ background: "#333", color: "#fff" }}>
        <span>{project.windowTitle}</span>
        <div className="window-controls">
          <button className="window-btn" aria-label="Minimize">
            <span className="minimize-icon"></span>
          </button>
          <button className="window-btn" aria-label="Maximize">
            <span className="maximize-icon"></span>
          </button>
          <button className="window-btn window-close" aria-label="Close">
            <span className="close-icon"></span>
          </button>
        </div>
      </div>
      {project.image ? (
        <div className="project-preview-container">
          <img
            src={project.image}
            alt={project.title}
          />
        </div>
      ) : project.liveUrl && project.embeddable !== false ? (
        <div className="project-preview-container">
          <iframe
            src={project.liveUrl}
            title={project.title}
            loading="lazy"
            sandbox="allow-scripts allow-same-origin"
          />
        </div>
      ) : (
        <div className="project-preview-placeholder">
          <span className="placeholder-icon">🔒</span>
          <span className="placeholder-text">PREVIEW_RESTRICTED</span>
        </div>
      )}
      <div className="project-info">
        <span className="project-tag">{project.tag}</span>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-role">{project.role}</p>
      </div>
    </div>
  )
}

function ProjectModal({
  project,
  isOpen,
  onClose,
}: {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}) {
  if (!project) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="project-modal">
        <DialogHeader>
          <div className="modal-window-header">
            <span>{project.windowTitle}</span>
          </div>
          <DialogTitle className="modal-title">{project.title}</DialogTitle>
          <span className="modal-role">{project.role}</span>
          <DialogDescription className="modal-description">
            {project.description}
          </DialogDescription>
        </DialogHeader>

        {project.image ? (
          <div className="modal-preview-container">
            <img
              src={project.image}
              alt={`${project.title} Preview`}
              className="modal-project-image" // Changed class to use image styling
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
          </div>
        ) : project.liveUrl && project.embeddable !== false ? (
          <div className="modal-preview-container">
            <iframe
              src={project.liveUrl}
              title={`${project.title} Preview`}
              className="modal-iframe-preview"
              loading="lazy"
            />
          </div>
        ) : (
          <div className="modal-design-preview">
            <span>🔒 Preview Restricted - External Security Policy</span>
          </div>
        )}

        <div className="modal-tech-stack">
          <span className="tech-label">TECH_STACK:</span>
          <div className="tech-tags">
            {project.techStack.map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
          </div>
        </div>

        <DialogFooter className="modal-footer">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-retro modal-btn"
            >
              VIEW_LIVE_DEMO →
            </a>
          )}
          <button onClick={onClose} className="btn-retro modal-btn-secondary">
            CLOSE
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

function Footer() {
  return (
    <footer id="contact">
      <div className="footer-logo">
        <p style={{ color: "var(--accent-retro)", fontSize: "0.8rem", marginBottom: "10px" }}>CONTACT_ME</p>
        <h2>
          YUGI INDRA
          <br />
          PRAKASA
        </h2>
        <p className="footer-location">Cibinong, Kabupaten Bogor</p>
      </div>
      <div style={{ textAlign: "left" }}>
        <div style={{ marginBottom: "20px", display: "flex", alignItems: "center", justifyContent: "flex-start", gap: "20px" }}>
          <a href="mailto:yugiindra40@gmail.com" className="footer-link">
            yugiindra40@gmail.com
          </a>
          <a href="https://wa.me/6289629749277" target="_blank" rel="noopener noreferrer" className="footer-icon-link" aria-label="WhatsApp">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
            </svg>
          </a>
          <a href="https://linktr.ee/Iguyy" target="_blank" rel="noopener noreferrer" className="footer-icon-link" aria-label="Linktree">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
            </svg>
          </a>
        </div>
        <p className="copyright">TEKNIK INFORMATIKA • UNIVERSITAS GUNADARMA • 2026©</p>
      </div>
    </footer>
  )
}
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
