"use client"

import Image from "next/image"
import type { Project } from "@/lib/data"

interface ProjectCardProps {
    project: Project
    onClick: () => void
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
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
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        style={{ objectFit: "cover" }}
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
