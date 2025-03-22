import { motion } from 'framer-motion';
import { useTheme } from '../../common/ThemeContext';
import styles from './SkillsStyles.module.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaAngular, FaNodeJs, FaGitAlt, FaDatabase } from 'react-icons/fa';
import { SiExpress, SiOracle, SiMysql } from 'react-icons/si';

const skills = [
  { name: 'HTML', icon: FaHtml5, color: '#E34F26' },
  { name: 'CSS', icon: FaCss3Alt, color: '#1572B6' },
  { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
  { name: 'Node.js', icon: FaNodeJs, color: '#68A063' },
  { name: 'React', icon: FaReact, color: '#61DAFB' },
  /*{ name: 'Angular', icon: FaAngular, color: '#DD0031' },*/
  { name: 'Express.js', icon: SiExpress, color: '#000000' }, // Added Express.js
  { name: 'Git', icon: FaGitAlt, color: '#F05032' },
  { name: 'Oracle', icon: SiOracle, color: '#F80000' }, // Added Oracle
  { name: 'SQL', icon: SiMysql, color: '#4479A1' }, // Added SQL
  { name: 'MongoDB', icon: FaDatabase, color: '#47A248' }
];

function Skills() {
  const { theme } = useTheme();
  const isLightTheme = theme === 'light';

  return (
    <section id="skills" className={`${styles.container} ${isLightTheme ? styles.light : styles.dark}`}>
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={styles.title}
      >
        My Skills
      </motion.h1>
      <div className={styles.skillsGrid}>
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className={styles.skillItem}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
          >
            <skill.icon className={styles.icon} style={{ color: skill.color, fontSize: '6rem' }} />
            <p className={styles.skillName}>{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;