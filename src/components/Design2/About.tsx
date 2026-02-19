"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import styles from "./Style/About.module.css";

export default function About() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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
      drops = Array(Math.floor(canvas.width / 18)).fill(1);
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

  return (
    <section className={styles.about} id="about">
      <canvas ref={canvasRef} className={styles.canvas} />

      {/* Corner brackets */}
      <div className={`${styles.bracket} ${styles.tl}`} />
      <div className={`${styles.bracket} ${styles.tr}`} />
      <div className={`${styles.bracket} ${styles.bl}`} />
      <div className={`${styles.bracket} ${styles.br}`} />
      <div className={styles.vline} />

      <div className={styles.container}>
        <div className={styles.row}>

          {/* IMAGE */}
          <div className={styles.imageCol}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/formalPicture.jpg"
                alt="Adrian Earl Abade"
                width={500}
                height={600}
                className={styles.profileImg}
                priority
              />
              <div className={styles.frame} />
              <div className={styles.statusDot}>AVAILABLE</div>
              <div className={styles.imgHud}>
                <span>▶ ADRIAN_EARL_ABADE</span>
                <span>▶ WEB_DEVELOPER // DAVAO_CITY</span>
              </div>
            </div>
          </div>

          {/* TEXT */}
          <div className={styles.textCol}>
            <span className={styles.hudTag}>Profile</span>
            <h2 className={styles.heading}>
              About <span>Me</span>
            </h2>

            <div className={styles.divider}>
              <div className={styles.dividerLine} />
              <span className={styles.dividerText}>// NODE_ABOUT</span>
            </div>

            <p className={styles.description}>
              I am a passionate <strong>Web Developer</strong> and IT student based in Davao City.
              With a strong foundation in{" "}
              <strong>Next.js, Tailwind CSS, and React</strong>, I specialize in building modern,
              responsive, and user-friendly web applications.
            </p>
            <p className={styles.description}>
              Currently working on <strong>CrackGuard</strong> and{" "}
              <strong>SMP Agency</strong>, focusing on seamless digital experiences. My goal is to
              leverage technology to solve real-world problems while continuously evolving as a
              developer.
            </p>

            {/* Stats */}
            <div className={styles.stats}>
              <div className={styles.stat}>
                <span className={styles.statNum}>3+</span>
                <span className={styles.statLabel}>Projects Live</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNum}>2+</span>
                <span className={styles.statLabel}>Years Coding</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNum}>∞</span>
                <span className={styles.statLabel}>Lines Written</span>
              </div>
            </div>

            {/* Tech tags */}
            <div className={styles.tags}>
              {["Next.js","React","Tailwind CSS","TypeScript","Node.js",].map((t) => (
                <span key={t} className={styles.tag}>{t}</span>
              ))}
            </div>

            {/* Buttons */}
            <div className={styles.buttonGroup}>
              <Link href="/contact" className={styles.btnPrimary}>
                <span>▶ Hire Me</span>
              </Link>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnSecondary}
              >
                <span>↓ Download CV</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}