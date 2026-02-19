"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./Style/Portfolio.module.css";

const projects = [
  {
    id: 1,
    title: "SMP Agency",
    category: "web",
    categoryLabel: "Web Development",
    image: "/images/THUMNAIL-SMP.png",
    link: "https://smpagency.co.uk/",
    status: "Live",
    node: "01",
  },
  {
    id: 2,
    title: "CrackGuard",
    category: "mobile",
    categoryLabel: "Mobile App",
    image: "/images/thumbnailcrack.png",
    link: "https://www.youtube.com/shorts/lLsLMK97pE0",
    status: "Live",
    node: "02",
  },
  {
    id: 3,
    title: "SMP Course",
    category: "mentorship",
    categoryLabel: "Mentorship Platform",
    image: "/images/thumb.png",
    link: "#",
    status: "Coming Soon",
    node: "03",
  },
];

const FILTERS = [
  { key: "all", label: "All" },
  { key: "web", label: "Web Dev" },
  { key: "mobile", label: "Mobile Apps" },
  { key: "mentorship", label: "Mentorship" },
];

export default function Portfolio() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activeFilter, setActiveFilter] = useState("all");

  // Subtle matrix rain — same engine as Hero but dimmer
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const chars = "アイウエオカキクケコ01234567890ABCDEF{}[]<>/\\|";
    let drops: number[] = [];
    const initDrops = () => {
      const cols = Math.floor(canvas.width / 18);
      drops = Array(cols).fill(1);
    };
    initDrops();
    window.addEventListener("resize", initDrops);

    const id = setInterval(() => {
      ctx.fillStyle = "rgba(0,0,0,0.06)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      drops.forEach((y, i) => {
        const char = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillStyle = `rgba(${140 + Math.random() * 80},0,0,${0.35 + Math.random() * 0.4})`;
        ctx.font = '13px "Courier New",monospace';
        ctx.fillText(char, i * 18, y * 18);
        if (y * 18 > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      });
    }, 60);

    return () => {
      clearInterval(id);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const visible = projects.filter(
    (p) => activeFilter === "all" || p.category === activeFilter
  );

  return (
    <section className={styles.portfolio} id="portfolio">
      <canvas ref={canvasRef} className={styles.canvas} />

      {/* Corner brackets */}
      <div className={`${styles.bracket} ${styles.tl}`} />
      <div className={`${styles.bracket} ${styles.tr}`} />
      <div className={`${styles.bracket} ${styles.bl}`} />
      <div className={`${styles.bracket} ${styles.br}`} />

      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <p className={styles.hudTag}>Selected Works</p>
          <h2>
            Featured <span>Portfolio</span>
          </h2>
          <div className={styles.headerBar}>
            <span />
            <em>// NODE_PROJECTS</em>
            <span />
          </div>

          {/* Filters */}
          <div className={styles.filters}>
            {FILTERS.map((f) => (
              <button
                key={f.key}
                className={`${styles.filterBtn} ${activeFilter === f.key ? styles.active : ""}`}
                onClick={() => setActiveFilter(f.key)}
              >
                <span>{f.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          {projects.map((project) => {
            const hidden = activeFilter !== "all" && project.category !== activeFilter;
            return (
              <div
                key={project.id}
                className={`${styles.card} ${hidden ? styles.hidden : ""}`}
              >
                <div className={styles.imageWrapper}>
                  <div className={styles.scanLine} />
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className={styles.projectImg}
                  />
                  <div className={styles.imgOverlay} />

                  {/* Badge */}
                  <span className={`${styles.badge} ${project.status === "Live" ? styles.live : ""}`}>
                    {project.status === "Live" ? "Live" : "In Progress"}
                  </span>

                  {/* View link */}
                  {project.link !== "#" ? (
                    <a
                      className={styles.viewLink}
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ▶ View Project
                    </a>
                  ) : (
                    <span className={`${styles.viewLink} ${styles.disabled}`}>
                      ▶ Coming Soon
                    </span>
                  )}
                </div>

                <div className={styles.cardContent}>
                  <div className={styles.nodeId}>// NODE_{project.node}</div>
                  <h3>
                    {project.link !== "#" ? (
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        {project.title}
                      </a>
                    ) : (
                      <span>{project.title}</span>
                    )}
                  </h3>
                  <p>{project.categoryLabel}</p>
                  <div className={styles.cardLine} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}