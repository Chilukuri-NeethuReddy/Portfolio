import { motion } from 'framer-motion';
import { FaTrophy } from 'react-icons/fa';
import styles from "./AchievementsStyles.module.css";

function Achievements() {
  return (
    <section id="achievements" className={styles.container}>
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="sectionTitle"
      >
        Achievements
      </motion.h1>
      <div className={styles.achieveList}>
        <motion.div
          className={styles.achieveItem}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <FaTrophy className={styles.icon} />
          <h2>3rd place - Data Science using Python Hackathon</h2>
          <p>
            Secured 3rd place in a one-day data science hackathon organized by Brainovision Solutions India Pvt. Ltd.
          </p>
        </motion.div>
        <motion.div
          className={styles.achieveItem}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <FaTrophy className={styles.icon} />
          <h2>3rd place - Lakshya 2k25</h2>
          <p>
            Secured 3rd place in lakshya 2k25 at LBRCE.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Achievements;