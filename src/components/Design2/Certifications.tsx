import styles from './Style/Certifications.module.css';
import { FaTrophy, FaCertificate, FaAward } from 'react-icons/fa6';

const certificationsData = [
  {
    id: 1,
    title: "Build Complete CMS Blog in PHP MySQL Bootstrap & PDO",
    issuer: "Udemy",
    date: "Dec 13, 2024",
    description: "Comprehensive course on building a Content Management System from scratch using PHP and MySQL.",
    icon: <FaCertificate />
  },
  {
    id: 2,
    title: "Introduction to SQL",
    issuer: "Simplilearn",
    date: "Aug 18, 2024",
    description: "Verified certification covering the fundamentals of SQL queries, database management, and data manipulation.",
    icon: <FaAward />
  },
  {
    id: 3,
    title: "Dean's Lister / Academic Excellence",
    issuer: "Holy Cross of Davao College",
    date: "2024", 
    description: "Recognized for outstanding academic performance in the Bachelor of Science in Information Technology program.",
    icon: <FaTrophy />
  }
];

const Certifications = () => {
  return (
    <section className={styles.certSection}>
      <div className={styles.container}>
        
        {/* Header */}
        <div className={styles.header}>
          <h2>Certifications & <span>Awards</span></h2>
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          {certificationsData.map((item) => (
            <div key={item.id} className={styles.card}>
              <div className={styles.iconWrapper}>
                {item.icon}
              </div>
              
              <span className={styles.date}>{item.date}</span>
              <h3>{item.title}</h3>
              <span className={styles.issuer}>{item.issuer}</span>
              <p>{item.description}</p>
              
              {/* Decorative Red Line */}
              <div className={styles.line}></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;