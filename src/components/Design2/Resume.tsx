"use client";
import { useEffect, useRef } from "react";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa6";
import styles from "./Style/Resume.module.css";

const educationData = [
  {
    id: 1,
    school: "Holy Cross of Davao College",
    degree: "BS Information Technology",
    date: "2022 – Present",
    location: "Davao City, Davao Del Sur, 8000",
    description: "Focusing on software development, web technologies, and system administration.",
    node: "EDU_01",
  },
  {
    id: 2,
    school: "Daniel R. Aguinaldo National High School",
    degree: "Senior High School – ICT Strand",
    date: "2020 – 2022",
    location: "Davao City, Davao Del Sur, 8000",
    description: "Specialized in Information and Communication Technology basics.",
    node: "EDU_02",
  },
  {
    id: 3,
    school: "Daniel R. Aguinaldo National High School",
    degree: "Junior High School",
    date: "2016 – 2020",
    location: "Davao City, Davao Del Sur, 8000",
    description: "Secondary education with a focus on academic foundation.",
    node: "EDU_03",
  },
  {
    id: 4,
    school: "Don Manuel Elementary School",
    degree: "Elementary Education",
    date: "2010 – 2016",
    location: "Davao City, Davao Del Sur, 8000",
    description: "Primary education foundation.",
    node: "EDU_04",
  },
];

const experienceData = [
  {
    id: 1,
    role: "Web Development Intern",
    company: "Staging Site",
    date: "Jan 2026 – Present",
    description:
      "Developing and maintaining a staging site using Next.js and Tailwind CSS. Managed code versions using GitHub and collaborated on UI layouts using Figma.",
    node: "EXP_01",
  },
  {
    id: 2,
    role: "Freelance Data Annotator",
    company: "Remotask",
    date: "Aug 2025 – Dec 2025",
    description:
      "Worked on computer vision projects annotating traffic lights and road lanes. Reviewed annotations for accuracy and coordinated with the team to meet quotas.",
    node: "EXP_02",
  },
  {
    id: 3,
    role: "Social Media & E-commerce Assistant",
    company: "Bella Apparels",
    date: "Jan 2023 – Dec 2023",
    description:
      "Assisted in managing online presence, responded to customer inquiries, uploaded products, and supported promotional efforts to boost engagement.",
    node: "EXP_03",
  },
];

export default function Resume() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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
    <section className={styles.resume} id="resume">
      <canvas ref={canvasRef} className={styles.canvas} />
      <div className={`${styles.bracket} ${styles.tl}`} />
      <div className={`${styles.bracket} ${styles.tr}`} />
      <div className={`${styles.bracket} ${styles.bl}`} />
      <div className={`${styles.bracket} ${styles.br}`} />

      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <p className={styles.hudTag}>Background</p>
          <h2>My <span>Resume</span></h2>
          <div className={styles.headerBar}>
            <span /><em>// NODE_RESUME</em><span />
          </div>
        </div>

        <div className={styles.row}>
          {/* Education */}
          <div className={styles.column}>
            <div className={styles.colTitle}>
              <div className={styles.colTitleIcon}><FaGraduationCap /></div>
              <h3>Education</h3>
            </div>
            <div className={styles.timeline}>
              {educationData.map((item) => (
                <div key={item.id} className={styles.card}>
                  <div className={styles.cardInner}>
                    <span className={styles.nodeId}>{item.node}</span>
                    <span className={styles.date}>{item.date}</span>
                    <h4>{item.degree}</h4>
                    <span className={styles.subtitle}>{item.school}</span>
                    <p>{item.description}</p>
                    <span className={styles.location}>{item.location}</span>
                    <div className={styles.cardLine} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className={styles.column}>
            <div className={styles.colTitle}>
              <div className={styles.colTitleIcon}><FaBriefcase /></div>
              <h3>Experience</h3>
            </div>
            <div className={styles.timeline}>
              {experienceData.map((item) => (
                <div key={item.id} className={styles.card}>
                  <div className={styles.cardInner}>
                    <span className={styles.nodeId}>{item.node}</span>
                    <span className={styles.date}>{item.date}</span>
                    <h4>{item.role}</h4>
                    <span className={styles.subtitle}>{item.company}</span>
                    <p>{item.description}</p>
                    <div className={styles.cardLine} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}