import React, { useRef, useEffect } from "react";
import "./Main.css";
import fogueteGif from "../assets/Videos/fogute.gif";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import WaveDown from "../assets/img/waveDown.svg";

const Main = () => {
  const h1Ref = useRef(null);
  const pRef = useRef(null);
  const fogueteRef = useRef(null);
  const mainRef = useRef(null);
  let animation = useRef(null);
  let paragraphAnimation = useRef(null);

  useEffect(() => {
    const h1Element = h1Ref.current;
    const pElement = pRef.current;

    if (!h1Element || !pElement) return;

    // Configurar animação do H1
    const text = h1Element.textContent;
    const words = text.split(" ");

    h1Element.innerHTML = words
      .map(
        (word) =>
          `<span style="display: inline-block; opacity: 0; transform: rotateX(-100deg);">${word}</span>`
      )
      .join(" ");

    const wordSpans = h1Element.querySelectorAll("span");

    // Configurar animação do parágrafo
    const pText = pElement.textContent;
    const pWords = pText.split(" ");

    pElement.innerHTML = pWords
      .map(
        (word) =>
          `<span style="display: inline-block; opacity: 0; transform: translateY(-100px) rotate(${
            Math.random() * 160 - 80
          }deg);">${word}</span>`
      )
      .join(" ");

    const pWordSpans = pElement.querySelectorAll("span");

    // Função para executar a animação do H1
    const handleH1Animation = () => {
      if (animation.current) {
        animation.current.kill();
      }

      animation.current = gsap.to(wordSpans, {
        rotationX: 0,
        transformOrigin: "50% 50% -160px",
        opacity: 1,
        duration: 0.8,
        ease: "power3",
        stagger: 0.25,
      });
    };

    // Função para executar a animação do parágrafo
    const handleParagraphAnimation = () => {
      if (paragraphAnimation.current) {
        paragraphAnimation.current.kill();
      }

      paragraphAnimation.current = gsap.to(pWordSpans, {
        y: 0,
        opacity: 1,
        rotation: 0,
        duration: 0.2,
        ease: "back",
        stagger: 0.15,
        delay: 0.5, // Atraso para começar após o H1
      });
    };

    // Criar Intersection Observer para detectar quando o elemento entra na tela
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            handleH1Animation();
            handleParagraphAnimation();
            // Opcional: parar de observar após a primeira animação
            observer.unobserve(h1Element);
          }
        });
      },
      {
        threshold: 0.1, // Executa quando 10% do elemento está visível
        rootMargin: "0px 0px -100px 0px", // Margem para ajustar quando triggerar
      }
    );

    // Começar a observar o elemento
    observer.observe(h1Element);

    // Cleanup
    return () => {
      observer.unobserve(h1Element);
      if (animation.current) {
        animation.current.kill();
      }
      if (paragraphAnimation.current) {
        paragraphAnimation.current.kill();
      }
    };
  }, []);

  // Animação de scroll do foguete (removida, agora usando useGSAP)
  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);



  // Animação otimizada com timeline
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Setup inicial - esconde Projects e configura máscara
    gsap.set('#projects', { 
      opacity: 0, 
      visibility: 'hidden' 
    });
    
    gsap.set('.mask-clip-path', {
      opacity: 0,
      scale: 0,
      zIndex: 1
    });

    // Timeline master com labels e controle avançado
    const masterTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: mainRef.current,
        start: 'bottom 80%',
        end: 'bottom 20%',
        scrub: 1.5,
        ease: "none", // Deixa o ease para as animações individuais
        markers: false,
        anticipatePin: 1,
        refreshPriority: -1,
        onStart: () => console.log('🚀 Transição iniciada'),
        onComplete: () => console.log('✅ Transição completa')
      }
    });

    // Usando labels para melhor organização
    masterTimeline
      // LABEL: Preparação
      .addLabel("prep", 0)
      .to('.mask-clip-path', {
        opacity: 1,
        scale: 1,
        zIndex: 5,
        duration: 0.15,
        ease: "back.out(1.7)"
      }, "prep")
      
      // LABEL: Expansão Principal
      .addLabel("expand", 0.15)
      .to('.mask-clip-path', {
        width: '100vw',
        height: '100vh',
        borderRadius: '0%',
        top: 0,
        left: 0,
        transform: 'translate(0, 0) scale(1)',
        duration: 0.6,
        ease: "power4.inOut"
      }, "expand")
      
      // Movimento sincronizado do foguete
      .to(fogueteRef.current, {
        scale: 2.2,
        x: -70,
        y: -130,
        rotation: 0,
        duration: 0.6,
        ease: "power4.out"
      }, "expand")
      
      // LABEL: Revelação
      .addLabel("reveal", 0.65)
      .to('#projects', {
        opacity: 1,
        visibility: 'visible',
        duration: 0.25,
        ease: "power3.out"
      }, "reveal")
      
      // LABEL: Finalização
      .addLabel("finish", 0.9)
      .to('.mask-clip-path', {
        zIndex: 1,
        duration: 0.1,
        ease: "none"
      }, "finish");

    // Cleanup function para performance
    return () => {
      masterTimeline.kill();
      ScrollTrigger.refresh();
    };
  });

  return (
    <main className="main"  id="about"ref={mainRef}>
      <div className="main-container">
        <div className="main-title">
          <h1 ref={h1Ref} id="lines">
            Sobre Mim
          </h1>
        </div>
        <div className="main-text">
          <p ref={pRef}>
            Sou Paulo Diney, desenvolvedor front-end com atenção especial ao
            design e à experiência do usuário. Acredito que uma boa interface
            vai além da estética: deve ser funcional, intuitiva e transmitir a
            identidade certa. Tenho experiência em criar layouts modernos,
            responsivos e alinhados às melhores práticas de usabilidade, sempre
            buscando unir criatividade e clareza. Meu objetivo é transformar
            ideias em projetos digitais que sejam ao mesmo tempo agradáveis e
            eficientes.
          </p>
        </div>
      </div>
      <div className="main-content">
        <div className="base"></div>
        <img 
          src={fogueteGif} 
          alt="Foguete animado" 
          className="gif-animation"
          ref={fogueteRef}
        />
      </div>
      
      {/* Máscara de clip-path para transição */}
      <div className="mask-clip-path"></div>
      
      <img src={WaveDown} alt="Wave Down" className="wave-down" />
    </main>
    
    
  );
};

export default Main;
