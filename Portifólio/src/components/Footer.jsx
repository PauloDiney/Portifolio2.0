import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Footer.css';

function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (footerRef.current) {
      gsap.fromTo(footerRef.current,
        {
          opacity: 0,
          y: 50
        },
        {
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
            toggleActions: "play none none none"
          },
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out"
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <footer className="footer" ref={footerRef}>
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-title">Paulo Diney</h3>
          <p className="footer-description">
            Desenvolvedor Full Stack apaixonado por criar experiências digitais incríveis.
          </p>
        </div>

        <div className="footer-section">
          <h4 className="footer-subtitle">Links Rápidos</h4>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#projetos">Projetos</a></li>
            <li><a href="#habilidades">Habilidades</a></li>
            <li><a href="#contatos">Contatos</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-subtitle">Redes Sociais</h4>
          <div className="footer-social">
            <a href="https://github.com/PauloDiney" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/seu-perfil" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://instagram.com/seu-perfil" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="mailto:paulodiney@email.com" className="social-link">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Paulo Diney. Todos os direitos reservados.</p>
        <p className="footer-love">Feito com <span className="heart">❤️</span> e muito código</p>
      </div>
    </footer>
  );
}

export default Footer;
