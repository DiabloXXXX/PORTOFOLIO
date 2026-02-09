"use client"

export function Footer() {
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
