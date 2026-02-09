"use client"

import Image from "next/image"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from "@/components/ui/dialog"
import type { Project } from "@/lib/data"

interface ProjectModalProps {
    project: Project | null
    isOpen: boolean
    onClose: () => void
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
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
                        <Image
                            src={project.image}
                            alt={`${project.title} Preview`}
                            width={510}
                            height={200}
                            className="modal-project-image"
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
