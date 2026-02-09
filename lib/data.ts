// Project data with live URLs
export const projects = [
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
export const workExperience = [
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
export const organizations = [
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
export const certifications = [
    { name: "LSP Data Science", status: "In Progress", issuer: "LSP" },
    { name: "SQL Server for Intermediate", status: "Completed", issuer: "LePKom Gunadarma" },
    { name: "Oracle for Beginner", status: "Completed", issuer: "LePKom Gunadarma" },
    { name: "Fundamental DBMS & SQL Server", status: "Completed", issuer: "LePKom Gunadarma" },
    { name: "Fundamental Desktop Development", status: "Completed", issuer: "LePKom Gunadarma" },
]

// Skills
export const skills = {
    programming: ["HTML", "CSS", "JavaScript", "PHP"],
    database: ["SQL Server", "MySQL", "Oracle Database", "Data Science"],
    design: ["Figma (UI/UX)", "Canva", "CapCut", "Adobe Lightroom"],
    tools: ["Microsoft Office", "Access", "Excel", "Teams"],
    languages: ["Bahasa Indonesia (Native)", "English (Professional Working)"],
}

// Type definitions
export interface Project {
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
