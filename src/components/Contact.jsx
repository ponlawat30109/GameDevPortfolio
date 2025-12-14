import React from 'react';
import styles from './Contact.module.css';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <div className={styles.content}>
          <p className={styles.text}>
            I'm currently interested in new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div className={styles.infoGrid}>
            <div className={styles.infoItem}>
              <Mail className={styles.icon} />
              <div className={styles.details}>
                <span className={styles.label}>Email</span>
                <a href="mailto:ponlawat.suwa@gmail.com" className={styles.value}>ponlawat.suwa@gmail.com</a>
              </div>
            </div>
            
            <div className={styles.infoItem}>
              <Phone className={styles.icon} />
              <div className={styles.details}>
                <span className={styles.label}>Phone</span>
                <span className={styles.value}>+66 98 272 7210</span>
              </div>
            </div>
            
            <div className={styles.infoItem}>
              <MapPin className={styles.icon} />
              <div className={styles.details}>
                <span className={styles.label}>Location</span>
                <span className={styles.value}>Ratchathewi, Bangkok</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
