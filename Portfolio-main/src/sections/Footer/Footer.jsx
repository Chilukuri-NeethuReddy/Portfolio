import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import styles from "./FooterStyles.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={styles.content}
      >
        <p>&copy; 2025 Chilukuri Neethu Reddy. All rights reserved.</p>
        <div className={styles.socialLinks}>
          <a href="https://github.com/Chilukuri-NeethuReddy" target="_blank" rel="noopener noreferrer">
            <FaGithub className={styles.icon} />
          </a>
          <a href="www.linkedin.com/in/neethu-reddy-chilukuri-45528b28a" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className={styles.icon} />
          </a>
          <a href="mailto:chilukurineethureddy2004@gmail.com">
            <FaEnvelope className={styles.icon} />
          </a>
        </div>
      </motion.div>
    </footer>
  );
}

export default Footer;