"use client";
import { useEffect, useRef, useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import styles from "./Style/Contact.module.css";

export default function Contact() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    // Wire up to your email service (e.g. EmailJS, Resend, Formspree) here
    setTimeout(() => {
      setSending(false);
      setSent(true);
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setSent(false), 4000);
    }, 1500);
  };

  return (
    <section className={styles.contact} id="contact">
      <canvas ref={canvasRef} className={styles.canvas} />
      <div className={`${styles.bracket} ${styles.tl}`} />
      <div className={`${styles.bracket} ${styles.tr}`} />
      <div className={`${styles.bracket} ${styles.bl}`} />
      <div className={`${styles.bracket} ${styles.br}`} />

      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <p className={styles.hudTag}>Communication</p>
          <h2>Get <span>In Touch</span></h2>
          <div className={styles.headerBar}>
            <span /><em>// NODE_CONTACT</em><span />
          </div>
        </div>

        <div className={styles.row}>

          {/* FORM */}
          <div className={styles.formCol}>
            <span className={styles.colLabel}>Send a Message</span>
            <h3 className={styles.colTitle}>Message Me</h3>

            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.inputGroup}>
                <label className={styles.fieldLabel}>Your Name</label>
                <div className={styles.inputWrap}>
                  <input type="text" placeholder="ENTER YOUR NAME" className={styles.input} required />
                </div>
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.fieldLabel}>Email Address</label>
                <div className={styles.inputWrap}>
                  <input type="email" placeholder="ENTER YOUR EMAIL" className={styles.input} required />
                </div>
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.fieldLabel}>Phone (Optional)</label>
                <div className={styles.inputWrap}>
                  <input type="tel" placeholder="ENTER YOUR PHONE" className={styles.input} />
                </div>
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.fieldLabel}>Message</label>
                <div className={styles.inputWrap}>
                  <textarea placeholder="WRITE YOUR MESSAGE HERE..." rows={5} className={styles.textarea} required />
                </div>
              </div>

              <button
                type="submit"
                className={`${styles.submitBtn} ${sending ? styles.sending : ""}`}
                disabled={sending}
              >
                <span>{sending ? "▶ Transmitting..." : "▶ Send Message"}</span>
                <FaPaperPlane />
              </button>

              {sent && (
                <div className={styles.successMsg}>
                  MESSAGE TRANSMITTED SUCCESSFULLY
                </div>
              )}
            </form>
          </div>

          {/* INFO */}
          <div className={styles.infoCol}>
            <span className={styles.colLabel}>Contact Details</span>
            <h3 className={styles.colTitle}>My Info</h3>

            <div className={styles.infoItem}>
              <div className={styles.iconBox}><FaEnvelope /></div>
              <div className={styles.infoContent}>
                <h4>Email</h4>
                <p>adrianearl@gmail.com</p>
              </div>
              <div className={styles.infoLine} />
            </div>

            <div className={styles.infoItem}>
              <div className={styles.iconBox}><FaPhone /></div>
              <div className={styles.infoContent}>
                <h4>Phone</h4>
                <p>+63 900 000 0000</p>
              </div>
              <div className={styles.infoLine} />
            </div>

            <div className={styles.infoItem}>
              <div className={styles.iconBox}><FaMapMarkerAlt /></div>
              <div className={styles.infoContent}>
                <h4>Address</h4>
                <p>Davao City, Davao Del Sur, 8000</p>
                <p>Philippines</p>
              </div>
              <div className={styles.infoLine} />
            </div>

            {/* Social links */}
            <div className={styles.socialWrap}>
              <span className={styles.socialLabel}>Find Me Online</span>
              <div className={styles.socialLinks}>
                <a href="#" className={styles.socialLink}>⬡ GitHub</a>
                <a href="#" className={styles.socialLink}>⬡ LinkedIn</a>
                <a href="#" className={styles.socialLink}>⬡ Facebook</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}