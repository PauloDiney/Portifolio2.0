import React, { useRef, useEffect } from 'react'
import './Habilidades.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Habilidades = () => {
  const titleRef = useRef(null)
  const lineRef = useRef(null)
  const textRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    // Animação do título
    gsap.fromTo(titleRef.current, 
      {
        y: 50,
        opacity: 0,
        scale: 0.8
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    )

    // Animação da linha vermelha
    gsap.fromTo(lineRef.current,
      {
        width: 0,
        opacity: 0
      },
      {
        width: "20rem",
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
        delay: 0.3,
        scrollTrigger: {
          trigger: lineRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    )

    // Animação do texto descritivo
    gsap.fromTo(textRef.current,
      {
        y: 30,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.6,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    )

    // Animação dos cards com entrada suave e stagger
    gsap.fromTo(cardsRef.current,
      {
        y: 60,
        opacity: 0,
        scale: 0.9
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.15,
        delay: 1, // Delay para começar após os textos
        scrollTrigger: {
          trigger: ".habilidade-content",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    )

    // Animações de hover para cada card
    cardsRef.current.forEach((card) => {
      if (card) {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            y: -10,
            scale: 1.05,
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
  return (
    <section className='habilidades' id='habilidades'>
      
            <h1 ref={titleRef}>Habilidades</h1>
            <span className='line-red' ref={lineRef}></span>
        <p className='habilidades-text' ref={textRef}>
           Tecnologias e ferramentas 
        </p>

        <div className='habilidade-content'>
            <article className='habilidade-card' ref={addToRefs}>
                <div className='habilidade-icon'>
                    <i className="fa-brands fa-html5"></i>
                </div>
                <div className='habilidade-text'>
                    <h3>HTML5</h3>
                    <p>Markup semântico e acessível</p>
                    <span className='nivel'>Avançado</span>
                </div>
            </article>

            <article className='habilidade-card' ref={addToRefs}>
                <div className='habilidade-icon'>
                    <i className="fa-brands fa-css3-alt"></i>
                </div>
                <div className='habilidade-text'>
                    <h3>CSS3</h3>
                    <p>Styling moderno e responsivo</p>
                    <span className='nivel'>Avançado</span>
                </div>
            </article>

            <article className='habilidade-card' ref={addToRefs}>
                <div className='habilidade-icon'>
                    <i className="fa-brands fa-js-square"></i>
                </div>
                <div className='habilidade-text'>
                    <h3>JavaScript</h3>
                    <p>ES6+ e programação funcional</p>
                    <span className='nivel'>Intermediário+</span>
                </div>
            </article>

            <article className='habilidade-card' ref={addToRefs}>
                <div className='habilidade-icon'>
                    <i className="fa-brands fa-react"></i>
                </div>
                <div className='habilidade-text'>
                    <h3>React</h3>
                    <p>Componentes e hooks modernos</p>
                    <span className='nivel'>Intermediário+</span>
                </div>
            </article>

            <article className='habilidade-card' ref={addToRefs}>
                <div className='habilidade-icon'>
                    <i className="fa-brands fa-php"></i>
                </div>
                <div className='habilidade-text'>
                    <h3>PHP</h3>
                    <p>Desenvolvimento server-side</p>
                    <span className='nivel'>Intermediário</span>
                </div>
            </article>

            <article className='habilidade-card' ref={addToRefs}>
                <div className='habilidade-icon'>
                    <i className="fa-brands fa-laravel"></i>
                </div>
                <div className='habilidade-text'>
                    <h3>Laravel</h3>
                    <p>Framework PHP moderno</p>
                    <span className='nivel'>Intermediário</span>
                </div>
            </article>

            <article className='habilidade-card' ref={addToRefs}>
                <div className='habilidade-icon'>
                    <i className="fa-brands fa-git-alt"></i>
                </div>
                <div className='habilidade-text'>
                    <h3>Git</h3>
                    <p>Controle de versão</p>
                    <span className='nivel'>Intermediário+</span>
                </div>
            </article>

            <article className='habilidade-card' ref={addToRefs}>
                <div className='habilidade-icon'>
                    <i className="fa-brands fa-figma"></i>
                </div>
                <div className='habilidade-text'>
                    <h3>Figma</h3>
                    <p>Design e prototipagem</p>
                    <span className='nivel'>Intermediário+</span>
                </div>
            </article>

            <article className='habilidade-card' ref={addToRefs}>
                <div className='habilidade-icon'>
                    <i className="fa-brands fa-bootstrap"></i>
                </div>
                <div className='habilidade-text'>
                    <h3>Bootstrap</h3>
                    <p>Framework CSS</p>
                    <span className='nivel'>Avançado</span>
                </div>
            </article>

        </div>
    </section>
  )
}

export default Habilidades