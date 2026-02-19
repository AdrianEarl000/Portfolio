"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./Style/HeroSection.module.css";

const SLIDES = [
  { 
    id: 0, 
    label: "// Full Stack", 
    node: "01",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1400&auto=format&fit=crop"
  },
  { 
    id: 1, 
    label: "// Security",   
    node: "02",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1400&auto=format&fit=crop"
  },
  { 
    id: 2, 
    label: "// DevOps",     
    node: "03",
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1400&auto=format&fit=crop"
  },
];

const HeroSection2 = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [active, setActive] = useState(0);
  const [isFlashing, setIsFlashing] = useState(false);
  const [textVisible, setTextVisible] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン01234567890ABCDEF{}[]<>/\\|';
    
    const initDrops = () => {
      const cols = Math.floor(canvas.width / 16);
      return Array(cols).fill(1);
    };

    let drops = initDrops();

    const resize = () => {
      canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight;
      drops = initDrops();
    };

    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const isHead = Math.random() > 0.96;
        ctx.fillStyle = isHead 
          ? '#ff5555' 
          : `rgba(${160 + Math.random()*60},0,0,${0.5 + Math.random()*0.5})`;
        ctx.font = `${isHead ? 'bold ' : ''}14px "Courier New", monospace`;
        ctx.fillText(char, i * 16, drops[i] * 16);
        if (drops[i] * 16 > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      }
      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const handleSlideChange = (index: number) => {
    if (index === active) return;
    setIsFlashing(true);
    setTimeout(() => setIsFlashing(false), 150);
    setTextVisible(false);
    setTimeout(() => {
      setActive(index);
      setTextVisible(true);
    }, 280);
  };

  const handleScrollToAbout = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className={styles.hero}>
      
      {SLIDES.map((slide, i) => (
        <div 
          key={slide.id} 
          className={`${styles.bgLayer} ${i === active ? styles.activeBg : ''}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={slide.image} alt={slide.label} className={styles.bgImage} />
        </div>
      ))}

      <canvas ref={canvasRef} className={styles.canvas} />
      <div className={`${styles.flashOverlay} ${isFlashing ? styles.flash : ''}`} />
      <div className={styles.vignette} />
      <div className={styles.scanlines} />

      <div className={`${styles.bracket} ${styles.tl}`} />
      <div className={`${styles.bracket} ${styles.tr}`} />
      <div className={`${styles.bracket} ${styles.bl}`} />
      <div className={`${styles.bracket} ${styles.br}`} />
      <div className={styles.vline} />

      <div className={styles.hud}>
        <span>▶ SYS_ONLINE</span>
        <span>▶ SEC_LEVEL: MAX</span>
        <span>▶ NODE_{SLIDES[active].node}</span>
      </div>

      <div className={styles.content}>
        <p className={styles.sub}>Web Developer</p>

        {/* 
          KEY FIX: Split into two lines so each line has its own
          data-text attribute — this is what the CSS glitch uses
          to show the duplicated text in ::before / ::after
        */}
        <h1 className={styles.heading}>
          <span
            className={styles.glitch}
            data-text="ADRIAN EARL"
          >
            ADRIAN EARL
          </span>
          <br />
          <span
            className={styles.glitch}
            data-text="ABADE"
          >
            ABADE
          </span>
        </h1>
        
        <p className={`${styles.slideLabel} ${textVisible ? styles.visible : styles.hidden}`}>
          {SLIDES[active].label}
        </p>

        <a href="#about" onClick={handleScrollToAbout} className={styles.cta}>
          See More About Me
        </a>
      </div>

      <div className={styles.pagination}>
        {SLIDES.map((slide, i) => (
          <button 
            key={slide.id}
            className={`${styles.pageBtn} ${i === active ? styles.activePage : ''}`}
            onClick={() => handleSlideChange(i)}
          >
            0{slide.id + 1}
          </button>
        ))}
      </div>

    </section>
  );
};

export default HeroSection2;