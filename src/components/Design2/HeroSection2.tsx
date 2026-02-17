import Image from 'next/image';
import Link from 'next/link';
import styles from './Style/HeroSection.module.css'; // Importing from Style folder

const HeroSection2 = () => {
  return (
    <section className={styles.hero}>
      
      <div className={styles.content}>
        <p className={styles.subHeading}>WEB DEVELOPER</p>
        <h1 className={styles.heading}>ADRIAN EARL ABADE</h1>
        <Link href="/about" className={styles.ctaBtn}>SEE MORE ABOUT ME</Link>
      </div>

      <div className={styles.imageWrapper}>
        <Image 
          src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop" 
          alt="Web Development Setup"
          fill
          sizes="(max-width: 900px) 100vw, 45vw"
          className={styles.heroImage}
          priority
        />
      </div>

      {/* Pagination Counters */}
      <div className={styles.pagination}>
        <span className={styles.activePage}>01</span>
        <span>02</span>
        <span>03</span>
      </div>

      {/* Decorative Background */}
      <div className={styles.bgGraphic}></div>

    </section>
  );
};

export default HeroSection2;