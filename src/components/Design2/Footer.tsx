"use client";
import { useEffect, useRef } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import styles from "./Style/Footer.module.css";

const NAV_LINKS = [
  { label: "Home",      href: "#hero" },
  { label: "About",     href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Certs",     href: "#certifications" },
  { label: "Resume",    href: "#resume" },
  { label: "Contact",   href: "#contact" },
];

const SOCIAL_LINKS = [
  { icon: <FaFacebookF />, href: "https://facebook.com",  label: "Facebook" },
  { icon: <FaTwitter />,   href: "https://twitter.com",   label: "Twitter"  },
  { icon: <FaInstagram />, href: "https://instagram.com", label: "Instagram" },
  { icon: <FaLinkedinIn />,href: "https://linkedin.com",  label: "LinkedIn" },
  { icon: <FaGithub />,    href: "https://github.com",    label: "GitHub"   },
];

export default function Footer() {
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
      ctx.fillStyle = "rgba(0,0,0,0.07)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      drops.forEach((y, i) => {
        const char = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillStyle = `rgba(${120 + Math.random() * 60},0,0,${0.25 + Math.random() * 0.3})`;
        ctx.font = '12px "Courier New",monospace';
        ctx.fillText(char, i * 18, y * 18);
        if (y * 18 > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      });
    }, 70);
    return () => { clearInterval(id); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <footer className={styles.footer}>
      <canvas ref={canvasRef} className={styles.canvas} />
      <div className={`${styles.bracket} ${styles.tl}`} />
      <div className={`${styles.bracket} ${styles.tr}`} />

      <div className={styles.container}>

        {/* Brand */}
        <div className={styles.brand}>
          <div className={styles.brandName}>
            ADRIAN EARL <span>ABADE</span>
          </div>
          <span className={styles.brandRole}>Web Developer // Davao City, PH</span>
        </div>

        {/* Divider */}
        <div className={styles.divider}>
          <div className={styles.dividerLine} />
          <span className={styles.dividerText}>// NODE_FOOTER</span>
          <div className={`${styles.dividerLine} ${styles.right}`} />
        </div>

        {/* Nav */}
        <nav className={styles.nav}>
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href} className={styles.navLink}>
              {link.label}
            </a>
          ))}
        </nav>

        {/* Socials */}
        <div className={styles.socialLinks}>
          {SOCIAL_LINKS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label={s.label}
            >
              {s.icon}
            </a>
          ))}
        </div>

        {/* Bottom bar */}
        <div className={styles.bottom}>
          <span className={styles.copyright}>
            COPYRIGHT &copy; 2026 // MADE WITH <span>♥</span> BY ADRIAN EARL ABADE
          </span>
          <div className={styles.status}>
            <div className={styles.statusDot} />
            ALL SYSTEMS ONLINE
          </div>
        </div>

      </div>
    </footer>
  );
}