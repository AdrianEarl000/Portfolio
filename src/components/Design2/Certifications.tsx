"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import { FaTrophy, FaCertificate, FaAward, FaGamepad } from "react-icons/fa6";
import styles from "./Style/Certifications.module.css";

type CertItem = {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
  icon: React.ReactNode;
  node: string;
  featured?: boolean;
  badge?: string;
  certImage?: string;
};

const certificationsData: CertItem[] = [
  {
    id: 1,
    title: "TechnoFair Game Competition",
    issuer: "Holy Cross of Davao College",
    date: "2024",
    description:
      "Awarded Runner-Up in the TechnoFair inter-school game development competition, showcasing an original game built from scratch. Competed against top IT teams and recognized for creativity, gameplay design, and technical execution.",
    icon: <FaGamepad />,
    node: "01",
    featured: true,
    badge: "🥈 Runner-Up",
  },
  {
    id: 2,
    title: "Build Complete CMS Blog in PHP MySQL Bootstrap & PDO",
    issuer: "Udemy",
    date: "Dec 13, 2024",
    description:
      "Comprehensive course on building a Content Management System from scratch using PHP and MySQL.",
    icon: <FaCertificate />,
    node: "02",
    // ↓ Replace with your actual path, e.g. "/images/certs/udemy-cms.jpg"
    certImage: "/images/udemy.png",
  },
  {
    id: 3,
    title: "Introduction to SQL",
    issuer: "Simplilearn",
    date: "Aug 18, 2024",
    description:
      "Verified certification covering the fundamentals of SQL queries, database management, and data manipulation.",
    icon: <FaAward />,
    node: "03",
    // ↓ Replace with your actual path, e.g. "/images/certs/simplilearn-sql.jpg"
    certImage: "/images/simplelearn.png",
  },
  {
    id: 4,
    title: "Dean's Lister / Academic Excellence",
    issuer: "Holy Cross of Davao College",
    date: "2024",
    description:
      "Recognized for outstanding academic performance in the Bachelor of Science in Information Technology program.",
    icon: <FaTrophy />,
    node: "04",
  },
];

export default function Certifications() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activeModal, setActiveModal] = useState<CertItem | null>(null);

  const closeModal = useCallback(() => setActiveModal(null), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") closeModal(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeModal]);

  useEffect(() => {
    document.body.style.overflow = activeModal ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [activeModal]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener("resize", resize);
    const chars = "アイウエオカキクケコ01234567890ABCDEF{}[]<>/\\|";
    let drops: number[] = [];
    const initDrops = () => { drops = Array(Math.floor(canvas.width / 18)).fill(1); };
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
    return () => { clearInterval(id); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <>
      <section className={styles.cert} id="certifications">
        <canvas ref={canvasRef} className={styles.canvas} />
        <div className={`${styles.bracket} ${styles.tl}`} />
        <div className={`${styles.bracket} ${styles.tr}`} />
        <div className={`${styles.bracket} ${styles.bl}`} />
        <div className={`${styles.bracket} ${styles.br}`} />

        <div className={styles.container}>
          <div className={styles.header}>
            <p className={styles.hudTag}>Achievements</p>
            <h2>Certifications & <span>Awards</span></h2>
            <div className={styles.headerBar}>
              <span /><em>// NODE_CREDENTIALS</em><span />
            </div>
          </div>

          <div className={styles.grid}>
            {certificationsData.map((item) => (
              <div
                key={item.id}
                className={`${styles.card} ${item.featured ? styles.featured : ""} ${item.certImage ? styles.clickable : ""}`}
                onClick={() => item.certImage && setActiveModal(item)}
                role={item.certImage ? "button" : undefined}
                tabIndex={item.certImage ? 0 : undefined}
                onKeyDown={(e) => e.key === "Enter" && item.certImage && setActiveModal(item)}
              >
                <div className={styles.nodeId}>// NODE_{item.node}</div>
                <div className={styles.iconWrapper}>{item.icon}</div>

                {item.featured && item.badge && (
                  <div className={styles.badgeRow}>
                    <span className={styles.badge}>{item.badge}</span>
                  </div>
                )}

                <span className={styles.date}>{item.date}</span>
                <h3>{item.title}</h3>
                <span className={styles.issuer}>{item.issuer}</span>
                <p>{item.description}</p>

                {item.certImage && (
                  <div className={styles.viewHint}>VIEW CERTIFICATE</div>
                )}

                <div className={styles.line} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeModal && (
        <div
          className={styles.modalOverlay}
          onClick={(e) => e.target === e.currentTarget && closeModal()}
        >
          <div className={styles.modalBox}>
            <div className={styles.modalBar}>
              <span className={styles.modalBarTitle}>
                {activeModal.issuer.toUpperCase()} // CERTIFICATE
              </span>
              <button className={styles.modalClose} onClick={closeModal}>
                ✕ CLOSE
              </button>
            </div>

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={activeModal.certImage}
              alt={`${activeModal.title} certificate`}
              className={styles.modalImg}
            />

            <div className={styles.modalScanlines} />

            <div className={styles.modalFooter}>
              <span>{activeModal.title.toUpperCase()}</span>
              <span className={styles.modalFooterIssuer}>▶ {activeModal.date}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}