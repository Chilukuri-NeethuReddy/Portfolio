import { useState } from "react";
import styles from "./HeroStyles.module.css";
import img from "../../assets/img.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const themeIcon = theme === "light" ? sun : moon;
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <>
      {/* Desktop Navigation */}
      <nav className={`${styles.desktopNav} ${theme === "light" ? styles.lightText : styles.darkText}`}>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#certifications">Certifications</a>
        <a href="#achievements">Achievements</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* Mobile Menu */}
      <div className={styles.menuIcon} onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
      {menuOpen && (
        <div className={`${styles.mobileNav} ${theme === "light" ? styles.lightText : styles.darkText}`}>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
          <a href="#certifications" onClick={() => setMenuOpen(false)}>Certificates</a>
          <a href="#achievements" onClick={() => setMenuOpen(false)}>Achievements</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
      )}

      {/* Hero Section */}
      <section id="hero" className={styles.container}>
        <div className={styles.colorModeContainer}>
          <img src={img} className={styles.hero} alt="Profile picture" />
          <img className={styles.colorMode} src={themeIcon} alt="Color mode icon" onClick={toggleTheme} />
        </div>
        <div className={styles.info}>
          <h1>Hi, I'm <br /> Chilukuri Neethu Reddy</h1>
          {/*<h2>Frontend Developer</h2>*/}
          <span className={styles.socialIcons}>
            <a href="https://github.com/Chilukuri-NeethuReddy" target="_blank">
              <img src={githubIcon} alt="GitHub" className={styles.socialIcon} />
            </a>
            <a href="www.linkedin.com/in/neethu-reddy-chilukuri-45528b28a" target="_blank">
              <img src={linkedinIcon} alt="LinkedIn" className={styles.socialIcon} />
            </a>
          </span>
          <p className={styles.description}>
          I'm a Computer Science student who thrives on crafting cutting-edge web applications that not only enhance user experiences but also fuel innovation and growth for forward-thinking organizations.
          </p>
          {/*<a href={CV} download>*/}
          <a href="https://drive.google.com/file/d/1BFRQYmZhBH60fToNns7Pb4IYB5s5Ey7L/view?usp=sharing" target="_blank">
            <button className="hover">Resume</button>
          </a>
        </div>
      </section>
    </>
  );
}

export default Hero;