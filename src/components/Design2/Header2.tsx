"use client";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { FaFacebookF, FaGithub } from "react-icons/fa6";
import styles from "./Style/Header.module.css";

const NAV_LINKS = [
  { id: "home",           label: "Home"          },
  { id: "about",          label: "About"         },
  { id: "portfolio",      label: "Portfolio"     },
  { id: "certifications", label: "Certs"         },
  { id: "resume",         label: "Resume"        },
  { id: "contact",        label: "Contact"       },
];

export default function Header() {
  const [isScrolled,   setIsScrolled]   = useState(false);
  const [activeSection,setActiveSection]= useState("home");
  const [menuOpen,     setMenuOpen]     = useState(false);

  const scrollTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
    setMenuOpen(false);
  };

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);
    const scrollPos = window.scrollY + window.innerHeight / 3;
    for (const { id } of NAV_LINKS) {
      const el = document.getElementById(id);
      if (el && scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
        setActiveSection(id);
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Lock scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
        {/* Logo */}
        <Link href="#home" onClick={(e) => scrollTo(e, "home")} className={styles.logo}>
          <div className={styles.logoIcon}>&lt;/&gt;</div>
          <span className={styles.logoText}>
            ADRIAN <span>EARL</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className={styles.nav}>
          <ul>
            {NAV_LINKS.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={(e) => scrollTo(e, id)}
                  className={activeSection === id ? styles.active : ""}
                >
                  <span>{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Icons */}
        <div className={styles.socialIcons}>
          <a href="https://www.facebook.com/iesinsins.yesudjdj" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="https://github.com/AdrianEarl000" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="GitHub">
            <FaGithub />
          </a>
        </div>

        {/* Hamburger */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </header>

      {/* Mobile overlay */}
      <div
        className={`${styles.overlay} ${menuOpen ? styles.overlayOpen : ""}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile menu */}
      <nav className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}>
        {NAV_LINKS.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={(e) => scrollTo(e, id)}
            className={activeSection === id ? styles.active : ""}
          >
            {label}
          </a>
        ))}
      </nav>
    </>
  );
}