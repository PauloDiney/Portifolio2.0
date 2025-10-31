import React, { useRef, useEffect } from 'react'
import './HeroBanner.css'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import pauloImg from '../assets/img/paulo.png';
import wave from '../assets/img/wave.svg';
import { gsap } from 'gsap';

const HeroBanner = () => {
    const h1Ref = useRef(null);
    const imgRef = useRef(null);
    const textRef = useRef(null);
    const waveRef = useRef(null);

    useEffect(() => {
        // Timeline para coordenar as animações
        const tl = gsap.timeline();

        // Animação da imagem - entrada da esquerda com rotação
        tl.fromTo(imgRef.current,
            {
                x: -200,
                opacity: 0,
                rotation: -15,
                scale: 0.8
            },
            {
                x: 0,
                opacity: 1,
                rotation: 0,
                scale: 1,
                duration: 1.2,
                ease: "power2.out"
            }
        )
            // Animação do h1 - entrada de baixo com efeito de digitação
            .fromTo(h1Ref.current,
                {
                    y: 50,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power2.out"
                }, "-=0.5"
            )
            // Animação do texto restante
            .fromTo(textRef.current,
                {
                    y: 30,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    ease: "power2.out"
                }, "-=0.3"
            );
        // Animação da onda - movimento contínuo e suave
        if (waveRef.current) {
            gsap.fromTo(waveRef.current,
                {
                    x: -50,
                    y: 0
                },
                {
                    x: 50,
                    y: 15,
                    duration: 3,
                    ease: "sine.inOut",
                    yoyo: true,
                    repeat: -1
                }
            );
        }

    }, []);

    return (
        <div className="hero-banner">
            <svg className='star' xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs" viewBox="0 0 2000 2000"><g><g fill="#fa3d3d" id="star"><path d="M 500 500 C 1000 1000 1000 1000 1587.2905033528277 437.1508375859639 C 1000 1000 1000 1000 1500 1500 C 1000 1000 1000 1000 405.7262563789459 1545.3910617434706 C 1000 1000 1000 1000 500 500" stroke-linecap="round" stroke-linejoin="round"></path></g></g></svg>
            <svg className='star2' xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs" viewBox="0 0 2000 2000"><g><g fill="hsl(356, 77%, 50%)" id="star"><path d="M 500 500 C 1000 1000 1000 1000 1587.2905033528277 437.1508375859639 C 1000 1000 1000 1000 1500 1500 C 1000 1000 1000 1000 405.7262563789459 1545.3910617434706 C 1000 1000 1000 1000 500 500" stroke-linecap="round" stroke-linejoin="round"></path></g></g></svg>
            <svg className='star3' xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs" viewBox="0 0 2000 2000"><g><g fill="hsl(356, 77%, 50%)" id="star"><path d="M 500 500 C 1000 1000 1000 1000 1587.2905033528277 437.1508375859639 C 1000 1000 1000 1000 1500 1500 C 1000 1000 1000 1000 405.7262563789459 1545.3910617434706 C 1000 1000 1000 1000 500 500" stroke-linecap="round" stroke-linejoin="round"></path></g></g></svg>
            <svg className='star4' xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs" viewBox="0 0 2000 2000"><g><g fill="hsl(356, 77%, 50%)" id="star"><path d="M 500 500 C 1000 1000 1000 1000 1587.2905033528277 437.1508375859639 C 1000 1000 1000 1000 1500 1500 C 1000 1000 1000 1000 405.7262563789459 1545.3910617434706 C 1000 1000 1000 1000 500 500" stroke-linecap="round" stroke-linejoin="round"></path></g></g></svg>

            <div className='img-container' ref={imgRef}>
                <img src={pauloImg} alt="Paulo Diney" />
            </div>
            <div className='hero-text'>
                <h1 ref={h1Ref}>Olá, eu sou o Paulo</h1>
                <div ref={textRef}>
                    <div className='hero-subtext'>
                        <p>Desenvolvedor Web e UI/UX Designer </p>
                    </div>
                    <div className='social-icons'>
                        <ul>
                            <li>
                                <a href="https://github.com/PauloDiney" target="_blank" rel="noopener noreferrer">
                                    <FaGithub className="icon" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/paulodiney/" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin className="icon" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/paulodiney/?next=%2F" target="_blank" rel="noopener noreferrer">
                                    <FaInstagram className="icon" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className='hero-buttons'>
                        <a href="#projects" className="btn">Meus Projetos</a>
                        <a
                            href="../assets/Paulo Diney.docx"
                            className="btn"
                            download
                        >
                            Baixar Portfólio
                        </a>
                    </div>
                </div>

            </div>
            <img src={wave} alt="Wave" className="wave" ref={waveRef} />
        </div>
    )
}

export default HeroBanner