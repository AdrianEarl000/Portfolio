import Image from 'next/image';
import Link from 'next/link';
import styles from './Style/Portfolio.module.css';

const projects = [
  {
    id: 1,
    title: "SMP Agency",
    category: "WEB DEVELOPMENT",
    image: "/images/THUMNAIL-SMP.png", 
    link: "https://smpagency.co.uk/",
    status: "Live"
  },
  {
    id: 2,
    title: "CrackGuard",
    category: "MOBILE APP",
    image: "/images/thumbnailcrack.png", 
    link: "https://www.youtube.com/shorts/lLsLMK97pE0", 
    status: "Live"
  },
  {
    id: 3,
    title: "SMP Course",
    category: "MENTORSHIP PLATFORM",
    image: "/images/thumb.png", 
    link: "#",
    status: "Coming Soon"
  }
];

const Portfolio = () => {
  return (
    <section className={styles.portfolioSection}>
      <div className={styles.container}>
        
        <div className={styles.header}>
          <h2>Featured <span>Portfolio</span></h2>
          <div className={styles.filters}>
            <span className={styles.activeFilter}>All</span>
            <span>Web Dev</span>
            <span>Mobile Apps</span>
            <span>Mentorship</span>
          </div>
        </div>

        <div className={styles.grid}>
          {projects.map((project) => (
            <div key={project.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                
                {/* LOGIC UPDATE: Conditionally wrap Image in anchor tag */}
                {project.link !== "#" ? (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ display: 'block', width: '100%', height: '100%' }} // Ensures clickable area fills wrapper
                  >
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      width={400} 
                      height={300} 
                      className={styles.projectImg} 
                    />
                  </a>
                ) : (
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    width={400} 
                    height={300} 
                    className={styles.projectImg} 
                  />
                )}
                
                {project.status === "Coming Soon" && (
                    <span className={styles.badge}>In Progress</span>
                )}
              </div>

              <div className={styles.cardContent}>
                <h3>
                    {project.link !== "#" ? (
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            {project.title}
                        </a>
                    ) : (
                        <span>{project.title}</span>
                    )}
                </h3>
                <p>{project.category}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Portfolio;