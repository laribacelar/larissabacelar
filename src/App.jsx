import React, { useState } from "react";
import "./App.css";
import avatar from "./assets/avatar.png";
import { certificados } from "./data/certificados";
import { projetos } from "./data/projects";
import curriculo from "./assets/CV-LARISSA.pdf";
import { N8n } from "@lobehub/icons";
import Slider from "react-slick";

function App() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  const [isPopupActive, setIsPopupActive] = useState(false);

  const handleEmailClick = (event) => {
    event.preventDefault();
    setIsPopupActive(true);

    const email = "lari.bacelar22@gmail.com";
    navigator.clipboard
      .writeText(email)
      .then(() => {
        console.log("Email copiado com sucesso!");
      })
      .catch((err) => {
        console.log("Falha ao copiar o email: ", err);
      });
  };

  const closePopup = () => {
    setIsPopupActive(false);
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="portfolio">
      <header className="header">
        <div className="header-content">
          <h1 className="name">Larissa Bacelar</h1>
          <button
            className={`hamburguer-button ${isMenuOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <i className="ri-menu-line"></i>
          </button>
          <nav className={`main-nav ${isMenuOpen ? "open" : ""}`}>
            <ul>
              <li>
                <a href="#apresentation" onClick={toggleMenu}>
                  Inicio
                </a>
              </li>
              <li>
                <a href="#about-me" onClick={toggleMenu}>
                  Sobre Mim
                </a>
              </li>
              <li>
                <a href="#technologies" onClick={toggleMenu}>
                  Tecnologias
                </a>
              </li>
              <li>
                <a href="#certifications" onClick={toggleMenu}>
                  Certificados
                </a>
              </li>
              <li>
                <a href="#work" onClick={toggleMenu}>
                  Projetos
                </a>
              </li>
              <li>
                <a href="#contact" onClick={toggleMenu}>
                  Contato
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="apresentation" id="apresentation">
        <div className="picture-content">
          <div className="text">
            <h1>
              Olá,
              <br /> Sou a Larissa!
            </h1>
            <h2>Engenheira de Software.</h2>
            <p>Transformo ideias em soluções digitais.</p>
          </div>
          <img
            src={avatar}
            alt="foto de Larissa Bacelar"
            className="profile-picture"
          />
        </div>
        <div className="information-button">
          <button className="button-portfolio">
            <a href={curriculo}>Currículo </a>
          </button>
          <button className="button-portfolio">
            <a href="#work">Projetos </a>
          </button>
        </div>
      </section>

      <main className="main-content">
        <section className="about-me" id="about-me">
          <h2>Sobre Mim</h2>
          <p>
            Sou uma engenheira de software apaixonada por traduzir ideias em
            interfaces digitais intuitivas. Com especialização em
            desenvolvimento frontend, sou focada na criação de soluções
            modernas, responsivas e com um olhar apurado para a experiência do
            usuário. Utilizo um conjunto de tecnologias como HTML, CSS e
            JavaScript, e estou em constante aprimoramento em React.js, Node.js
            e práticas de automação com n8n e inteligência artificial. Minha
            experiência prévia em atendimento ao cliente me equipou com uma
            escuta ativa e empatia, qualidades que aplico em cada projeto para
            garantir a criação de soluções limpas e funcionais. Estou sempre em
            busca de novos desafios e oportunidades para evoluir como
            profissional.
          </p>
        </section>

        <section className="technologies" id="technologies">
          <h2>Tecnologias</h2>
          <div className="tech-container">
            <div className="tech-item">
              <i className="ri-html5-line"></i>
              <span>HTML5</span>
            </div>
            <div className="tech-item">
              <i className="ri-css3-line"></i>
              <span>CSS3</span>
            </div>
            <div className="tech-item">
              <i className="ri-javascript-line"></i>
              <span>JavaScript</span>
            </div>
            <div className="tech-item">
              <N8n size={56} color="#ffc0cb" />
              <span>n8n</span>
            </div>
            <div className="tech-item">
              <i className="ri-tailwind-css-line"></i>
              <span>TailwindCSS</span>
            </div>
            <div className="tech-item">
              <i className="ri-reactjs-line"></i>
              <span>React.JS</span>
            </div>
            <div className="tech-item">
              <i className="ri-nodejs-line"></i>
              <span>Node.JS</span>
            </div>
          </div>
        </section>

        <section className="certifications" id="certifications">
          <h2>Certificados</h2>
          <div className="certifications-grid">
            {certificados.map((cert) => (
              <div key={cert.id} className="certificate-item">
                <img
                  src={cert.src}
                  alt={cert.src}
                  className="certificate-image"
                />
              </div>
            ))}
          </div>
        </section>

        <section className="work" id="work">
          <h2>Projetos</h2>
          <div className="projects-grid">
            {projetos.map((projeto, index) => (
              <div key={projeto.id} className="project-card">
                <h3>{projeto.titulo}</h3>
                <Slider {...sliderSettings}>
                  {projeto.midias.map((midia) => (
                    <div key={midia.id} className="project-midia">
                      {midia.type === "image" && (
                        <img
                          src={midia.src}
                          alt={midia.alt}
                          className="project-image"
                        />
                      )}
                      {midia.type === "video" && (
                        <video controls className="project-video">
                          <source src={midia.src} type="video/mp4" />
                        </video>
                      )}
                    </div>
                  ))}
                </Slider>
                <div className="project-description">
                  {projeto.descricao.map((paragrafo, index) => (
                    <p key={index}>{paragrafo}</p>
                  ))}
                </div>
                <div className="project-links">
                  {projeto.link && (
                    <a
                      href={projeto.link}
                      target="_brank"
                      rel="noopener noreferrer"
                      className="project-button live-demo"
                    >
                      <i className="ri-pages-line"></i>
                      Ver Projeto
                    </a>
                  )}
                  {projeto.github && (
                    <a
                      href={projeto.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-button github-link"
                    >
                      {index === 0 ? (
                        "Ver Repositório"
                      ) : (
                        <>
                          <i className="ri-github-fill"></i>
                        </>
                      )}
                      Repositório GitHub
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="contact" id="contact">
          <h2>Contato</h2>
          <div className="contact-card">
            <div className="contact-direct">
              <h3>Contato Direto</h3>
              <div className="contact-icons">
                <a
                  href="#"
                  onClick={handleEmailClick}
                  className="contact-link email-link"
                >
                  <i className="ri-mail-line"></i>
                </a>
                <div
                  id="email-popup"
                  className={`email-popup ${isPopupActive ? "active" : ""}`}
                >
                  {" "}
                  <div className="popup-content">
                    <p>Copie o e-mail abaixo:</p>
                    <input
                      type="text"
                      value="lari.bacelar22@gmail.com"
                      readOnly
                    />
                    <button onClick={closePopup}>Fechar</button>
                  </div>
                </div>
                <a
                  href="https://wa.me/5541984553094"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  <i className="ri-whatsapp-line"></i>
                </a>
              </div>
            </div>

            <div className="social-links">
              <h3>Redes Sociais</h3>
              <div className="contact-icons">
                <a
                  href="https://www.linkedin.com/in/laribacelar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <i className="ri-linkedin-box-fill"></i>
                </a>
                <a
                  href="https://github.com/laribacelar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <i className="ri-github-fill"></i>
                </a>
                <a
                  href="https://www.instagram.com/by.laribacelar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <i className="ri-instagram-line"></i>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>
          &copy; {new Date().getFullYear()} Larissa Bacelar. Todos os direitos
          reservados.
        </p>
      </footer>
    </div>
  );
}

export default App;
