import React, { useRef, useEffect } from 'react'
import './Projects.css'
import dancaImg from '../assets/img/danca.png'
import mainliImg from '../assets/img/mainli.png'
import projeto3dImg from '../assets/img/Projeto3d.png'
import sakuraImg from '../assets/img/sakura.png'
import serdigitalImg from '../assets/img/Serdigital.png'
import mountLand from '../assets/img/mount.png'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Projects = () => {
  const cardsRef = useRef([])

  useEffect(() => {
    // Animação dos cards de projeto com stagger
    gsap.fromTo(cardsRef.current,
      {
        y: 80,
        opacity: 0,
        scale: 0.9
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".projects-grid",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    )

    // Hover animations para cards
    cardsRef.current.forEach((card) => {
      if (card) {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            y: -10,
            scale: 1.02,
            duration: 0.3,
            ease: "power2.out"
          })
        })

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
          })
        })
      }
    })

  }, [])

  // Função para adicionar refs aos cards
  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el)
    }
  }
  const projects = [
    {
      id: 1,
      title: "Dança Studio",
      description: "Website moderno para estúdio de dança com design elegante e animações suaves",
      image: dancaImg,
      tags: ["React", "CSS", "Animation"],
      github: "https://github.com/PauloDiney/Danca",
      demo: "https://dancacla.netlify.app/"
    },
    {
      id: 2,
      title: "MainLi Platform",
      description: "Plataforma digital interativa com interface responsiva e experiência otimizada",
      image: mainliImg,
      tags: ["JavaScript", "HTML", "CSS"],
      github: "https://github.com/PauloDiney/MA.INLINE",
      demo: "https://mainli.netlify.app/"
    },
    {
      id: 3,
      title: "Projeto 3D",
      description: "Experiência imersiva em 3D com tecnologias modernas e design inovador",
      image: projeto3dImg,
      tags: ["Three.js", "Tailwind CSS", "React"],
      github: "https://github.com/PauloDiney/Projeto-3D",
      demo: "https://3dproje.netlify.app/"
    },
    {
      id: 4,
      title: "Sakura Theme",
      description: "Interface temática inspirada na cultura japonesa e sua culinária",
      image: sakuraImg,
      tags: ["UI/UX", "CSS", "Design"],
      github: "https://github.com/PauloDiney/Sakura",
      demo: "https://sakurajapanese.netlify.app/"
    },
    {
      id: 5,
      title: "SerDigital",
      description: "Solução digital completa para empresas com foco na transformação digital",
      image: serdigitalImg,
      tags: ["Responsividade", "HTML semântico", "CSS"],
      github: "https://github.com/PauloDiney/SerDigital",
      demo: "https://serdigitall.netlify.app/"
    },
    {
      id: 6,
      title: "Mount Land",
      description: "Site de turismo com foco em montanhas e trilhas",
      image: mountLand,
      tags: ["Responsividade", "HTML semântico", "CSS"],
      github: "https://github.com/PauloDiney/Mount.git",
      demo: "https://mountland.netlify.app/"
    }
  ]

  return (
    <div className='projects' id='projects'>
      <div className="projects-content">
        <h1>Meus Projetos</h1>
        <p>Aqui estão alguns dos meus projetos mais recentes. Cada um representa uma jornada única de desenvolvimento e criatividade.</p>
      </div>
      
      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.id} className="project-card" ref={addToRefs}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <div className="project-overlay">
                <div className="project-links">
                  <a href={project.github} className="btn-github" target="_blank" rel="noopener noreferrer">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a href={project.demo} className="btn-demo" target="_blank" rel="noopener noreferrer">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="project-content">
              <div className="project-header">
                <h3>{project.title}</h3>
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
              <p className="project-description">{project.description}</p>
            </div>
          </article>
        ))}

       <a className='btn-ver-mais' href="https://github.com/PauloDiney">Ver mais projetos</a>
      </div> 
      
    </div>
  )
}

export default Projects