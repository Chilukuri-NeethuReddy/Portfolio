import { motion } from 'framer-motion';
import styles from './ProjectsStyles.module.css';
import x from '../../assets/x.avif';
import pet from '../../assets/pet.png';
import employee from '../../assets/employee.jpg';

const projects = [
  {
    src: pet,
    title: "PetFood Store Application",
    description: "Developed a responsive pet care platform with HTML, CSS, and JavaScript, featuring immersive visuals and intuitive navigation for a seamless shopping experience. Implemented user authentication to enable secure access, allowing registered users to browse and purchase pet care products. Integrated an Oracle database using JDBC to manage user data securely.",
    demoLink: "https://chilukuri-neethureddy.github.io/PetFoodShop/",
    codeLink: "https://github.com/Chilukuri-NeethuReddy/PetFoodShop",
    technologies: ["HTML", "CSS", "JavaScript", "Oracle DB", "JDBC"]
  },
  {
    src: employee,
    title: "Employee management system",
    description: "Developed an Employee Management System using MongoDB, Express.js, React.js, and Node.js, providing a modern and scalable architecture for seamless employee management. Implemented role-based access control for admins and employees, enabling secure login and profile management. Employees can view their personal details, salaries, experience, and skills, while admins have functionalities to register, update, and delete employee records.",
    demoLink: "https://employee-management-system-ay63.onrender.com",
    codeLink: "https://github.com/Chilukuri-NeethuReddy/Employee-Management-System",
    technologies: ["React.js", "Node.js", "Express", "MongoDB"]
  },
  {
    src: x,
    title: "Social Media Application (X Clone)",
    description: "Developed a Twitter-like social media application using the MERN stack, featuring secure user authentication, post creation, likes, comments, and a follower system. Implemented a real-time notification system to enhance user engagement. Designed and built the backend to handle authentication, user interactions, and post management, while developing the frontend for a seamless and interactive user experience.",
    /*demoLink: "https://hipsster-demo.com",*/
    codeLink: "https://github.com/Chilukuri-NeethuReddy/X-Clone-twitter-/tree/main/X-Clone-main",
    technologies: ["MongoDB", "Express", "React.js", "Node.js"]
  }
];

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={styles.projectCard}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <img src={project.src} alt={project.title} className={styles.projectImage} />
            <h3 className={styles.projectTitle}>{project.title}</h3>
            <p className={styles.projectDescription}>{project.description}</p>
            <div className={styles.technologies}>
              {project.technologies.map((tech, idx) => (
                <span key={idx} className={styles.techTag}>{tech}</span>
              ))}
            </div>
            <div className={styles.buttons}>
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className={styles.demoButton}>
                Live Demo
              </a>
              <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className={styles.codeButton}>
                View Code
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
