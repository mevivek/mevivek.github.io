import React, { useState } from 'react';
import './App.css';
import './assets/css/style.css';

const App: React.FC = () => {
  const [isSidebarActive, setIsSidebarActive] = useState(false);
  const [isModalActive, setIsModalActive] = useState(false);
  const [modalContent, setModalContent] = useState({
    imgSrc: '',
    imgAlt: '',
    title: '',
    text: '',
  });

  const toggleSidebar = () => {
    setIsSidebarActive(!isSidebarActive);
  };

  const openModal = (imgSrc: string, imgAlt: string, title: string, text: string) => {
    setModalContent({ imgSrc, imgAlt, title, text });
    setIsModalActive(true);
  };

  const closeModal = () => {
    setIsModalActive(false);
  };

  return (
    <main>
      <aside className={`sidebar ${isSidebarActive ? 'active' : ''}`} data-sidebar>
        <div className="sidebar-info">
          <figure className="avatar-box">
            <img src="assets/images/my-avatar.png" alt="Vivek Kumar" width="80" />
          </figure>
          <div className="info-content">
            <h1 className="name" title="Vivek Kumar">Vivek Kumar</h1>
            <p className="title">Software Developer</p>
          </div>
          <button className="info_more-btn" data-sidebar-btn onClick={toggleSidebar}>
            <span>Show Contacts</span>
            <ion-icon name="chevron-down"></ion-icon>
          </button>
        </div>
        <div className="sidebar-info_more">
          <div className="separator"></div>
          <ul className="contacts-list">
            <li className="contact-item">
              <div className="icon-box">
                <ion-icon name="mail-outline"></ion-icon>
              </div>
              <div className="contact-info">
                <p className="contact-title">Email</p>
                <a href="mailto:developer.vivekkumar@gmail.com" className="contact-link">developer.vivekkumar@gmail.com</a>
              </div>
            </li>
            <li className="contact-item">
              <div className="icon-box">
                <ion-icon name="phone-portrait-outline"></ion-icon>
              </div>
              <div className="contact-info">
                <p className="contact-title">Phone</p>
                <a href="tel:+919999412535" className="contact-link">+91 9999 412535</a>
              </div>
            </li>
            <li className="contact-item">
              <div className="icon-box">
                <ion-icon name="location-outline"></ion-icon>
              </div>
              <div className="contact-info">
                <p className="contact-title">Location</p>
                <address>New Delhi, India</address>
              </div>
            </li>
          </ul>
          <div className="separator"></div>
          <ul className="social-list">
            <li className="social-item">
              <a href="https://github.com/mevivek" className="social-link">
                <ion-icon name="logo-github"></ion-icon>
              </a>
            </li>
            <li className="social-item">
              <a href="https://linkedin.com/in/mevivek" className="social-link">
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
            </li>
          </ul>
        </div>
      </aside>
      <div className="main-content">
        <nav className="navbar">
          <ul className="navbar-list">
            <li className="navbar-item">
              <button className="navbar-link active" data-nav-link>About</button>
            </li>
            <li className="navbar-item">
              <button className="navbar-link" data-nav-link>Resume</button>
            </li>
            <li className="navbar-item">
              <button className="navbar-link" data-nav-link>Portfolio</button>
            </li>
            <li className="navbar-item">
              <button className="navbar-link" data-nav-link>Blog</button>
            </li>
            <li className="navbar-item">
              <button className="navbar-link" data-nav-link>Contact</button>
            </li>
          </ul>
        </nav>
        <article className="about active" data-page="about">
          <header>
            <h2 className="h2 article-title">About me</h2>
          </header>
          <section className="about-text">
            <p>
              Highly motivated and results-driven software engineer with 3+ years of experience developing innovative and user-centric mobile and web applications for Ed-tech and Food Delivery startups. Proven expertise in Flutter, Android (Java & Kotlin), and ReactJS, coupled with strong understanding of backend technologies like Node.js. Passionate about delivering high-quality solutions that address real-world problems and contribute to team success. Fluent in English and Hindi, thrives in collaborative environments.
            </p>
          </section>
          <section className="service">
            <h3 className="h3 service-title">What I'm doing</h3>
            <ul className="service-list">
              <li className="service-item">
                <div className="service-icon-box">
                  <img src="assets/images/icon-app.svg" alt="mobile app icon" width="40" />
                </div>
                <div className="service-content-box">
                  <h4 className="h4 service-item-title">Mobile apps</h4>
                  <p className="service-item-text">
                    Professional development of applications for iOS and Android.
                  </p>
                </div>
              </li>
            </ul>
          </section>
          <section className="testimonials">
            <h3 className="h3 testimonials-title">Testimonials</h3>
            <ul className="testimonials-list has-scrollbar">
              <li className="testimonials-item">
                <div className="content-card" data-testimonials-item onClick={() => openModal('assets/images/avatar-1.png', 'Daniel lewis', 'Daniel lewis', 'Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.')}>
                  <figure className="testimonials-avatar-box">
                    <img src="assets/images/avatar-1.png" alt="Daniel lewis" width="60" data-testimonials-avatar />
                  </figure>
                  <h4 className="h4 testimonials-item-title" data-testimonials-title>Daniel lewis</h4>
                  <div className="testimonials-text" data-testimonials-text>
                    <p>
                      Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
                    </p>
                  </div>
                </div>
              </li>
              <li className="testimonials-item">
                <div className="content-card" data-testimonials-item onClick={() => openModal('assets/images/avatar-2.png', 'Jessica miller', 'Jessica miller', 'Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.')}>
                  <figure className="testimonials-avatar-box">
                    <img src="assets/images/avatar-2.png" alt="Jessica miller" width="60" data-testimonials-avatar />
                  </figure>
                  <h4 className="h4 testimonials-item-title" data-testimonials-title>Jessica miller</h4>
                  <div className="testimonials-text" data-testimonials-text>
                    <p>
                      Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
                    </p>
                  </div>
                </div>
              </li>
              <li className="testimonials-item">
                <div className="content-card" data-testimonials-item onClick={() => openModal('assets/images/avatar-3.png', 'Emily evans', 'Emily evans', 'Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.')}>
                  <figure className="testimonials-avatar-box">
                    <img src="assets/images/avatar-3.png" alt="Emily evans" width="60" data-testimonials-avatar />
                  </figure>
                  <h4 className="h4 testimonials-item-title" data-testimonials-title>Emily evans</h4>
                  <div className="testimonials-text" data-testimonials-text>
                    <p>
                      Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
                    </p>
                  </div>
                </div>
              </li>
              <li className="testimonials-item">
                <div className="content-card" data-testimonials-item onClick={() => openModal('assets/images/avatar-4.png', 'Henry william', 'Henry william', 'Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.')}>
                  <figure className="testimonials-avatar-box">
                    <img src="assets/images/avatar-4.png" alt="Henry william" width="60" data-testimonials-avatar />
                  </figure>
                  <h4 className="h4 testimonials-item-title" data-testimonials-title>Henry william</h4>
                  <div className="testimonials-text" data-testimonials-text>
                    <p>
                      Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </section>
          <div className={`modal-container ${isModalActive ? 'active' : ''}`} data-modal-container>
            <div className={`overlay ${isModalActive ? 'active' : ''}`} data-overlay onClick={closeModal}></div>
            <section className="testimonials-modal">
              <button className="modal-close-btn" data-modal-close-btn onClick={closeModal}>
                <ion-icon name="close-outline"></ion-icon>
              </button>
              <div className="modal-img-wrapper">
                <figure className="modal-avatar-box">
                  <img src={modalContent.imgSrc} alt={modalContent.imgAlt} width="80" data-modal-img />
                </figure>
                <img src="assets/images/icon-quote.svg" alt="quote icon" />
              </div>
              <div className="modal-content">
                <h4 className="h3 modal-title" data-modal-title>{modalContent.title}</h4>
                <time dateTime="2021-06-14">14 June, 2021</time>
                <div data-modal-text>
                  <p>{modalContent.text}</p>
                </div>
              </div>
            </section>
          </div>
          <section className="clients">
            <h3 className="h3 clients-title">Clients</h3>
            <ul className="clients-list has-scrollbar">
              <li className="clients-item">
                <a href="#">
                  <img src="assets/images/logo-1-color.png" alt="client logo" />
                </a>
              </li>
              <li className="clients-item">
                <a href="#">
                  <img src="assets/images/logo-2-color.png" alt="client logo" />
                </a>
              </li>
              <li className="clients-item">
                <a href="#">
                  <img src="assets/images/logo-3-color.png" alt="client logo" />
                </a>
              </li>
              <li className="clients-item">
                <a href="#">
                  <img src="assets/images/logo-4-color.png" alt="client logo" />
                </a>
              </li>
              <li className="clients-item">
                <a href="#">
                  <img src="assets/images/logo-5-color.png" alt="client logo" />
                </a>
              </li>
              <li className="clients-item">
                <a href="#">
                  <img src="assets/images/logo-6-color.png" alt="client logo" />
                </a>
              </li>
            </ul>
          </section>
        </article>
        <article className="resume" data-page="resume">
          <header>
            <h2 className="h2 article-title">Resume</h2>
          </header>
          <section className="timeline">
            <div className="title-wrapper">
              <div className="icon-box">
                <ion-icon name="book-outline"></ion-icon>
              </div>
              <h3 className="h3">Education</h3>
            </div>
            <ol className="timeline-list">
              <li className="timeline-item">
                <h4 className="h4 timeline-item-title">
                  Bachelor of Technology, Computer Science | Dr. Akhilesh Das Gupta Institute of Technology & Management
                </h4>
                <span>2016 — 2020</span>
                <p className="timeline-text">
                  Completed Bachelor of Technology in Computer Science, gaining foundational and advanced knowledge in software development, data structures, and algorithms.
                </p>
              </li>
            </ol>
          </section>
          <section className="timeline">
            <div className="title-wrapper">
              <div className="icon-box">
                <ion-icon name="book-outline"></ion-icon>
              </div>
              <h3 className="h3">Experience</h3>
            </div>
            <ol className="timeline-list">
              <li className="timeline-item">
                <h4 className="h4 timeline-item-title">Software Development Engineer | Filo Edtech</h4>
                <span>May 2022 — Oct 2023</span>
                <p className="timeline-text">
                  Developed cross-platform mobile applications using Flutter, contributing to [mention specific features or projects].<br />
                  Built responsive web applications using ReactJS, enhancing user experience and functionality.<br />
                  Collaborated with UI/UX designers to ensure user-centered design and seamless user flow.<br />
                  Implemented robust backend systems using Node.js and integrated with third-party APIs.
                </p>
              </li>
              <li className="timeline-item">
                <h4 className="h4 timeline-item-title">Software Developer | Fastor7 Technologies</h4>
                <span>Jul 2020 — May 2022</span>
                <p className="timeline-text">
                  Developed multiple native Android applications using Java and Kotlin, focusing on [mention specific functionalities or app types].<br />
                  Utilized React Native to build cross-platform mobile applications, streamlining development and ensuring consistency across platforms.<br />
                  Developed responsive web applications using ReactJS, delivering engaging user experiences across various devices.
                </p>
              </li>
              <li className="timeline-item">
                <h4 className="h4 timeline-item-title">Software Engineer Trainee | MyEduGate</h4>
                <span>Nov 2019 - Jul 2020</span>
                <p className="timeline-text">
                  Designed and implemented Android applications using Java, gaining hands-on experience in native Android development.
                </p>
              </li>
            </ol>
          </section>
          <section className="skill">
            <h3 className="h3 skills-title">My skills</h3>
            <ul className="skills-list content-card">
              <li className="skills-item">
                <div className="title-wrapper">
                  <h5 className="h5">Java, Kotlin</h5>
                  <data value="90">Expert</data>
                </div>
                <div className="skill-progress-bg">
                  <div className="skill-progress-fill" style={{ width: '90%' }}></div>
                </div>
              </li>
              <li className="skills-item">
                <div className="title-wrapper">
                  <h5 className="h5">Dart</h5>
                  <data value="80">Advanced</data>
                </div>
                <div className="skill-progress-bg">
                  <div className="skill-progress-fill" style={{ width: '80%' }}></div>
                </div>
              </li>
              <li className="skills-item">
                <div className="title-wrapper">
                  <h5 className="h5">JavaScript, TypeScript</h5>
                  <data value="85">Advanced</data>
                </div>
                <div className="skill-progress-bg">
                  <div className="skill-progress-fill" style={{ width: '85%' }}></div>
                </div>
              </li>
              <li className="skills-item">
                <div className="title-wrapper">
                  <h5 className="h5">Flutter</h5>
                  <data value="80">Advanced</data>
                </div>
                <div className="skill-progress-bg">
                  <div className="skill-progress-fill" style={{ width: '80%' }}></div>
                </div>
              </li>
              <li className="skills-item">
                <div className="title-wrapper">
                  <h5 className="h5">ReactJS</h5>
                  <data value="75">Intermediate</data>
                </div>
                <div className="skill-progress-bg">
                  <div className="skill-progress-fill" style={{ width: '75%' }}></div>
                </div>
              </li>
              <li className="skills-item">
                <div className="title-wrapper">
                  <h5 className="h5">Node.js</h5>
                  <data value="70">Intermediate</data>
                </div>
                <div className="skill-progress-bg">
                  <div className="skill-progress-fill" style={{ width: '70%' }}></div>
                </div>
              </li>
            </ul>
          </section>
          <section className="timeline">
            <div className="title-wrapper">
              <div className="icon-box">
                <ion-icon name="book-outline"></ion-icon>
              </div>
              <h3 className="h3">Key Projects</h3>
            </div>
            <ol className="timeline-list">
              <li className="timeline-item">
                <h4 className="h4 timeline-item-title">NPTEL Engineering Courses (Google Play Store)</h4>
                <span>Key Developer</span>
                <p className="timeline-text">
                  Architect and developer of a robust Android application with over 100,000+ users.<br />
                  Developed a Node.js backend hosted on Google Cloud to manage data fetched from YouTube using the YouTube API.<br />
                  Designed and implemented the application lifecycle, including backend deployment and Play Store updates.
                </p>
              </li>
            </ol>
          </section>
        </article>
        <article className="portfolio" data-page="portfolio">
          <header>
            <h2 className="h2 article-title">Portfolio</h2>
          </header>
          <section className="projects">
            <ul className="filter-list">
              <li className="filter-item">
                <button className="active" data-filter-btn>All</button>
              </li>
              <li className="filter-item">
                <button data-filter-btn>Web design</button>
              </li>
              <li className="filter-item">
                <button data-filter-btn>Applications</button>
              </li>
              <li className="filter-item">
                <button data-filter-btn>Web development</button>
              </li>
            </ul>
            <div className="filter-select-box">
              <button className="filter-select" data-select>
                <div className="select-value" data-selecct-value>Select category</div>
                <div className="select-icon">
                  <ion-icon name="chevron-down"></ion-icon>
                </div>
              </button>
              <ul className="select-list">
                <li className="select-item">
                  <button data-select-item>All</button>
                </li>
                <li className="select-item">
                  <button data-select-item>Web design</button>
                </li>
                <li className="select-item">
                  <button data-select-item>Applications</button>
                </li>
                <li className="select-item">
                  <button data-select-item>Web development</button>
                </li>
              </ul>
            </div>
            <ul className="project-list">
              <li className="project-item active" data-filter-item data-category="web development">
                <a href="#">
                  <figure className="project-img">
                    <div className="project-item-icon-box">
                      <ion-icon name="eye-outline"></ion-icon>
                    </div>
                    <img src="assets/images/project-1.jpg" alt="finance" loading="lazy" />
                  </figure>
                  <h3 className="project-title">Finance</h3>
                  <p className="project-category">Web development</p>
                </a>
              </li>
              <li className="project-item active" data-filter-item data-category="web development">
                <a href="#">
                  <figure className="project-img">
                    <div className="project-item-icon-box">
                      <ion-icon name="eye-outline"></ion-icon>
                    </div>
                    <img src="assets/images/project-2.png" alt="orizon" loading="lazy" />
                  </figure>
                  <h3 className="project-title">Orizon</h3>
                  <p className="project-category">Web development</p>
                </a>
              </li>
              <li className="project-item active" data-filter-item data-category="web design">
                <a href="#">
                  <figure className="project-img">
                    <div className="project-item-icon-box">
                      <ion-icon name="eye-outline"></ion-icon>
                    </div>
                    <img src="assets/images/project-3.jpg" alt="fundo" loading="lazy" />
                  </figure>
                  <h3 className="project-title">Fundo</h3>
                  <p className="project-category">Web design</p>
                </a>
              </li>
              <li className="project-item active" data-filter-item data-category="applications">
                <a href="#">
                  <figure className="project-img">
                    <div className="project-item-icon-box">
                      <ion-icon name="eye-outline"></ion-icon>
                    </div>
                    <img src="assets/images/project-4.png" alt="brawlhalla" loading="lazy" />
                  </figure>
                  <h3 className="project-title">Brawlhalla</h3>
                  <p className="project-category">Applications</p>
                </a>
              </li>
              <li className="project-item active" data-filter-item data-category="web design">
                <a href="#">
                  <figure className="project-img">
                    <div className="project-item-icon-box">
                      <ion-icon name="eye-outline"></ion-icon>
                    </div>
                    <img src="assets/images/project-5.png" alt="dsm." loading="lazy" />
                  </figure>
                  <h3 className="project-title">DSM.</h3>
                  <p className="project-category">Web design</p>
                </a>
              </li>
              <li className="project-item active" data-filter-item data-category="web design">
                <a href="#">
                  <figure className="project-img">
                    <div className="project-item-icon-box">
                      <ion-icon name="eye-outline"></ion-icon>
                    </div>
                    <img src="assets/images/project-6.png" alt="metaspark" loading="lazy" />
                  </figure>
                  <h3 className="project-title">MetaSpark</h3>
                  <p className="project-category">Web design</p>
                </a>
              </li>
              <li className="project-item active" data-filter-item data-category="web development">
                <a href="#">
                  <figure className="project-img">
                    <div className="project-item-icon-box">
                      <ion-icon name="eye-outline"></ion-icon>
                    </div>
                    <img src="assets/images/project-7.png" alt="summary" loading="lazy" />
                  </figure>
                  <h3 className="project-title">Summary</h3>
                  <p className="project-category">Web development</p>
                </a>
              </li>
              <li className="project-item active" data-filter-item data-category="applications">
                <a href="#">
                  <figure className="project-img">
                    <div className="project-item-icon-box">
                      <ion-icon name="eye-outline"></ion-icon>
                    </div>
                    <img src="assets/images/project-8.jpg" alt="task manager" loading="lazy" />
                  </figure>
                  <h3 className="project-title">Task Manager</h3>
                  <p className="project-category">Applications</p>
                </a>
              </li>
              <li className="project-item active" data-filter-item data-category="web development">
                <a href="#">
                  <figure className="project-img">
                    <div className="project-item-icon-box">
                      <ion-icon name="eye-outline"></ion-icon>
                    </div>
                    <img src="assets/images/project-9.png" alt="arrival" loading="lazy" />
                  </figure>
                  <h3 className="project-title">Arrival</h3>
                  <p className="project-category">Web development</p>
                </a>
              </li>
            </ul>
          </section>
        </article>
        <article className="blog" data-page="blog">
          <header>
            <h2 className="h2 article-title">Blog</h2>
          </header>
          <section className="blog-posts">
            <ul className="blog-posts-list">
              <li className="blog-post-item">
                <a href="#">
                  <figure className="blog-banner-box">
                    <img src="assets/images/blog-1.jpg" alt="Design conferences in 2022" loading="lazy" />
                  </figure>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <p className="blog-category">Design</p>
                      <span className="dot"></span>
                      <time dateTime="2022-02-23">Feb 23, 2022</time>
                    </div>
                    <h3 className="h3 blog-item-title">Design conferences in 2022</h3>
                    <p className="blog-text">
                      Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.
                    </p>
                  </div>
                </a>
              </li>
              <li className="blog-post-item">
                <a href="#">
                  <figure className="blog-banner-box">
                    <img src="assets/images/blog-2.jpg" alt="Best fonts every designer" loading="lazy" />
                  </figure>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <p className="blog-category">Design</p>
                      <span className="dot"></span>
                      <time dateTime="2022-02-23">Feb 23, 2022</time>
                    </div>
                    <h3 className="h3 blog-item-title">Best fonts every designer</h3>
                    <p className="blog-text">
                      Sed ut perspiciatis, nam libero tempore, cum soluta nobis est eligendi.
                    </p>
                  </div>
                </a>
              </li>
              <li className="blog-post-item">
                <a href="#">
                  <figure className="blog-banner-box">
                    <img src="assets/images/blog-3.jpg" alt="Design digest #80" loading="lazy" />
                  </figure>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <p className="blog-category">Design</p>
                      <span className="dot"></span>
                      <time dateTime="2022-02-23">Feb 23, 2022</time>
                    </div>
                    <h3 className="h3 blog-item-title">Design digest #80</h3>
                    <p className="blog-text">
                      Excepteur sint occaecat cupidatat no proident, quis nostrum exercitationem ullam corporis suscipit.
                    </p>
                  </div>
                </a>
              </li>
              <li className="blog-post-item">
                <a href="#">
                  <figure className="blog-banner-box">
                    <img src="assets/images/blog-4.jpg" alt="UI interactions of the week" loading="lazy" />
                  </figure>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <p className="blog-category">Design</p>
                      <span className="dot"></span>
                      <time dateTime="2022-02-23">Feb 23, 2022</time>
                    </div>
                    <h3 className="h3 blog-item-title">UI interactions of the week</h3>
                    <p className="blog-text">
                      Enim ad minim veniam, consectetur adipiscing elit, quis nostrud exercitation ullamco laboris nisi.
                    </p>
                  </div>
                </a>
              </li>
              <li className="blog-post-item">
                <a href="#">
                  <figure className="blog-banner-box">
                    <img src="assets/images/blog-5.jpg" alt="The forgotten art of spacing" loading="lazy" />
                  </figure>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <p className="blog-category">Design</p>
                      <span className="dot"></span>
                      <time dateTime="2022-02-23">Feb 23, 2022</time>
                    </div>
                    <h3 className="h3 blog-item-title">The forgotten art of spacing</h3>
                    <p className="blog-text">
                      Maxime placeat, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                </a>
              </li>
              <li className="blog-post-item">
                <a href="#">
                  <figure className="blog-banner-box">
                    <img src="assets/images/blog-6.jpg" alt="Design digest #79" loading="lazy" />
                  </figure>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <p className="blog-category">Design</p>
                      <span className="dot"></span>
                      <time dateTime="2022-02-23">Feb 23, 2022</time>
                    </div>
                    <h3 className="h3 blog-item-title">Design digest #79</h3>
                    <p className="blog-text">
                      Optio cumque nihil impedit uo minus quod maxime placeat, velit esse cillum.
                    </p>
                  </div>
                </a>
              </li>
            </ul>
          </section>
        </article>
        <article className="contact" data-page="contact">
          <header>
            <h2 className="h2 article-title">Contact</h2>
          </header>
          <section className="mapbox" data-mapbox>
            <figure>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448196.52633258584!2d76.76357436215979!3d28.64368462633545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1704731427966!5m2!1sen!2sin"
                width="400"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </figure>
          </section>
          <section className="contact-form">
            <h3 className="h3 form-title">Contact Form</h3>
            <form action="#" className="form" data-form>
              <div className="input-wrapper">
                <input type="text" name="fullname" className="form-input" placeholder="Full name" required data-form-input />
                <input type="email" name="email" className="form-input" placeholder="Email address" required data-form-input />
              </div>
              <textarea name="message" className="form-input" placeholder="Your Message" required data-form-input></textarea>
              <button className="form-btn" type="submit" disabled data-form-btn>
                <ion-icon name="paper-plane"></ion-icon>
                <span>Send Message</span>
              </button>
            </form>
          </section>
        </article>
      </div>
    </main>
  );
};

export default App;
