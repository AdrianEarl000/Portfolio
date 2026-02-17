import Image from 'next/image';
import Link from 'next/link';
import styles from './Style/About.module.css';

const About = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        
        <div className={styles.row}>
          
          {/* Left Side: Image */}
          <div className={styles.imageColumn}>
            <div className={styles.imageWrapper}>
              {/* Using the file path seen in your screenshots */}
              <Image 
                src="/images/formalPicture.jpg" 
                alt="Adrian Earl Profile" 
                width={500} 
                height={600} 
                className={styles.profileImg} 
              />
              {/* Decorative Frame/Glow */}
              <div className={styles.frame}></div>
            </div>
          </div>

          {/* Right Side: Text Content */}
          <div className={styles.textColumn}>
            <h2 className={styles.heading}>About <span>Me</span></h2>
            
            <p className={styles.description}>
              I am a passionate <strong>Web Developer</strong> and IT student based in Davao City. 
              With a strong foundation in <strong>Next.js, Tailwind CSS, and React</strong>, I specialize in building 
              modern, responsive, and user-friendly web applications.
            </p>

            <p className={styles.description}>
              Currently, I am working on innovative projects like <em>CrackGuard</em> and <em>SMP Agency</em>, 
              focusing on creating seamless digital experiences. My goal is to leverage technology 
              to solve real-world problems while continuously learning and evolving as a developer.
            </p>

            <div className={styles.buttonGroup}>
              <Link href="/contact" className={styles.btnPrimary}>
                Hire Me
              </Link>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className={styles.btnSecondary}>
                Download CV
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;