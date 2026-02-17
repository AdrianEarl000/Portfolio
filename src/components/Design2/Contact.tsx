import styles from './Style/Contact.module.css';
import { FaPaperPlane, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className={styles.contactSection} id="contact">
      <div className={styles.container}>
        
        {/* Header */}
        <div className={styles.header}>
          <h2>Get <span>In Touch</span></h2>
        </div>

        <div className={styles.row}>
          
          {/* Left Column: Contact Form */}
          <div className={styles.formColumn}>
            <h3 className={styles.columnTitle}>Message Me</h3>
            <form className={styles.form}>
              <div className={styles.inputGroup}>
                <input type="text" placeholder="Your Name" className={styles.input} required />
              </div>
              <div className={styles.inputGroup}>
                <input type="email" placeholder="Your Email" className={styles.input} required />
              </div>
              <div className={styles.inputGroup}>
                <input type="tel" placeholder="Your Phone" className={styles.input} />
              </div>
              <div className={styles.inputGroup}>
                <textarea placeholder="Write a Message" rows={5} className={styles.textarea} required></textarea>
              </div>
              
              <button type="submit" className={styles.submitBtn}>
                Send Message <FaPaperPlane />
              </button>
            </form>
          </div>

          {/* Right Column: Contact Details */}
          <div className={styles.infoColumn}>
            <h3 className={styles.columnTitle}>My Contact Details</h3>
            
            <div className={styles.infoItem}>
              <div className={styles.iconBox}>
                <FaEnvelope />
              </div>
              <div className={styles.infoContent}>
                <h4>Email</h4>
                <p>adrianearl@gmail.com</p> {/* Replace with your email */}
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.iconBox}>
                <FaPhone />
              </div>
              <div className={styles.infoContent}>
                <h4>Phone</h4>
                <p>+63 900 000 0000</p> {/* Replace with your phone */}
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.iconBox}>
                <FaMapMarkerAlt />
              </div>
              <div className={styles.infoContent}>
                <h4>Address</h4>
                <p>Davao City, Davao Del Sur, 8000</p>
                <p>Philippines</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;