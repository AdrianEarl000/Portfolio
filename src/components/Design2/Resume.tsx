import styles from './Style/Resume.module.css';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa6';

const educationData = [
  {
    id: 1,
    school: "Holy Cross of Davao College",
    degree: "Bachelor of Science in Information Technology",
    date: "2022 - Present", // Assuming current, adjust if needed
    location: "Davao City, Davao Del Sur, 8000",
    description: "Focusing on software development, web technologies, and system administration."
  },
  {
    id: 2,
    school: "Daniel R. Aguinaldo National High School",
    degree: "Senior High School - ICT Strand",
    date: "2020 - 2022", // Approximate dates
    location: "Davao City, Davao Del Sur, 8000",
    description: "Specialized in Information and Communication Technology basics."
  },
  {
    id: 3,
    school: "Daniel R. Aguinaldo National High School",
    degree: "Junior High School",
    date: "2016 - 2020",
    location: "Davao City, Davao Del Sur, 8000",
    description: "Secondary education with a focus on academic foundation."
  },
  {
    id: 4,
    school: "Don Manuel Elementary School",
    degree: "Elementary Education",
    date: "2010 - 2016",
    location: "Davao City, Davao Del Sur, 8000",
    description: "Primary education foundation."
  }
];

const experienceData = [
  {
    id: 1,
    role: "Web Development Intern",
    company: "Staging Site",
    date: "Jan 2026 - Present",
    description: "Developing and maintaining a staging site using Next.js and Tailwind CSS. Managed code versions using GitHub and collaborated on UI layouts using Figma."
  },
  {
    id: 2,
    role: "Freelance Data Annotator",
    company: "Remotask",
    date: "Aug 2025 - Dec 2025",
    description: "Worked on computer vision projects annotating traffic lights and road lanes. Reviewed annotations for accuracy and coordinated with the team to meet quotas."
  },
  {
    id: 3,
    role: "Social Media & E-commerce Assistant",
    company: "Bella Apparels",
    date: "Jan 2023 - Dec 2023",
    description: "Assisted in managing online presence, responded to customer inquiries, uploaded products, and supported promotional efforts to boost engagement."
  }
];

const Resume = () => {
  return (
    <section className={styles.resumeSection}>
      <div className={styles.container}>
        
        {/* Section Header */}
        <div className={styles.header}>
          <h2>My <span>Resume</span></h2>
        </div>

        <div className={styles.row}>
          
          {/* Education Column */}
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>
              <FaGraduationCap className={styles.icon} /> Education
            </h3>
            
            <div className={styles.timeline}>
              {educationData.map((item) => (
                <div key={item.id} className={styles.card}>
                  <span className={styles.date}>{item.date}</span>
                  <h4>{item.degree}</h4>
                  <span className={styles.subtitle}>{item.school}</span>
                  <p>{item.description}</p>
                  <span className={styles.location}>{item.location}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Column */}
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>
              <FaBriefcase className={styles.icon} /> Experience
            </h3>
            
            <div className={styles.timeline}>
              {experienceData.map((item) => (
                <div key={item.id} className={styles.card}>
                  <span className={styles.date}>{item.date}</span>
                  <h4>{item.role}</h4>
                  <span className={styles.subtitle}>{item.company}</span>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Resume;