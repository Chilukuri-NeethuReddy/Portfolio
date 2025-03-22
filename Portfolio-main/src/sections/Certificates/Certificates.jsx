import { motion } from 'framer-motion';
import { FaCertificate } from 'react-icons/fa';
import styles from "./CertificatesStyles.module.css";
import aws from "../../assets/aws.png";
import nptel from "../../assets/nptel.png";
import cisco from "../../assets/cisco.png";
import infosys from "../../assets/infosys.png";
import capgemini from "../../assets/Capgemini.webp";
import smart from "../../assets/smart.jpeg";


const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    imageSrc: aws,
    issuer: "Amazon Web Services (AWS)",
    link: "https://drive.google.com/file/d/15XsABnMM6EwKY2GNDlmYj_P4NKO0E8jo/view?usp=sharing"
  },
  {
    title: "Salesforce AI Associate",
    imageSrc: nptel,
    issuer: "Salesforce",
    link: "https://drive.google.com/file/d/1CE1Eg6gQ9vP8eQ0NjkOqrUHPE4cCA0JQ/view?usp=sharing"
  },
  {
    title: "Programming Essentials in Python",
    imageSrc: cisco,
    issuer: "Cisco Networking Academy",
    link: "https://drive.google.com/file/d/174OFR839wVVy_bWgvKbDX3178c_01uvz/view?usp=sharing"
  },
  {
    title: "TechA MERN Stack Developer Certification",
    imageSrc: infosys,
    issuer: "Infosys Springboard",
    link: "https://drive.google.com/file/d/174wDCmBFe-K-k55m3lXKOjEtps3C4ZkK/view?usp=sharing"
  },
  {
    title: "Cyber Security Certificate",
    imageSrc: capgemini,
    issuer: "Capgemini",
    link: "https://drive.google.com/file/d/1tn7NTgAi_uRgRXaxXa-GXdfmlFkpCHTS/view?usp=drivesdk "
  }
];

function Certificates() {
  return (
    <section id="certifications" className={styles.container}>
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="sectionTitle"
      >
        Certifications
      </motion.h1>
      <div className={styles.certificates}>
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            className={styles.certCard}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <FaCertificate className={styles.icon} />
            <img src={cert.imageSrc} alt={cert.title} className={styles.certImage} />
            <h3 className={styles.certTitle}>{cert.title}</h3>
            <p className={styles.certIssuer}>{cert.issuer}</p>
            <a href={cert.link} className={styles.certLink}>
              View Certification
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Certificates;