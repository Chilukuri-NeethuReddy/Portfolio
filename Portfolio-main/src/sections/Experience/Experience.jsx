import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';
import styles from "./ExperienceStyles.module.css";

function Experience() {
  return (
    <section id="experience" className={styles.container}>
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="sectionTitle"
      >
        Experience
      </motion.h1>
      <div className={styles.experienceList}>
        <motion.div
          className={styles.experienceItem}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <FaBriefcase className={styles.icon} />
          <h2>Web Developer Intern</h2>
          <h3>Biztron Softech | June, 2024 - July, 2024</h3>
          <p>
            Designed and implemented a Social Media Web Application. Developed and maintained full-stack web applications using MongoDB, Express.js, Angular, and Node.js, focusing on designing and implementing efficient RESTful APIs to ensure seamless integration between the front-end and back-end systems.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;