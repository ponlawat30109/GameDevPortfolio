import React from 'react';
import { motion } from 'framer-motion';
import styles from './Intro.module.css';

const Intro = () => {
  return (
    <section id="intro" className={styles.intro}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.content}
        >
          <h2 className={styles.greeting}>Hi, I'm <span className={styles.name}>Ponlawat</span>.</h2>
          <h1 className={styles.headline}>
            I develop <span className={styles.highlight}>Multiplayer Games</span>.
          </h1>
          <p className={styles.subheadline}>
            Passionate Game Developer with 3+ years of experience. I specialize in bridging the gap between gameplay and server architecture to create seamless multiplayer experiences.
          </p>
          <div className={styles.actions}>
            <a href="#experience" className={styles.ctaPrimary}>View Projects</a>
            <a href="#contact" className={styles.ctaSecondary}>Contact Me</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Intro;
