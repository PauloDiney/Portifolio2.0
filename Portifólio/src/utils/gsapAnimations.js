import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'

gsap.registerPlugin(ScrollTrigger, TextPlugin)

// Animação de texto com efeito de digitação
export const typewriterAnimation = (element, text, duration = 2) => {
  if (!element) return
  
  const tl = gsap.timeline()
  
  tl.to(element, {
    text: text,
    duration: duration,
    ease: "power1.inOut",
    onStart: () => {
      element.textContent = ""
    }
  })
  
  return tl
}

// Animação de fade in com movimento
export const fadeInUp = (elements, delay = 0, stagger = 0.1) => {
  return gsap.fromTo(elements, 
    {
      y: 50,
      opacity: 0
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power2.out",
      delay: delay,
      stagger: stagger
    }
  )
}

// Animação de cards com hover
export const cardHoverAnimation = (card) => {
  if (!card) return
  
  card.addEventListener('mouseenter', () => {
    gsap.to(card, {
      y: -10,
      scale: 1.03,
      duration: 0.3,
      ease: "power2.out",
      boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
    })
  })
  
  card.addEventListener('mouseleave', () => {
    gsap.to(card, {
      y: 0,
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
      boxShadow: "0 10px 30px rgba(0,0,0,0.05)"
    })
  })
}

// Animação de scroll reveal
export const scrollReveal = (elements, trigger, start = "top 80%") => {
  return gsap.fromTo(elements,
    {
      y: 80,
      opacity: 0,
      scale: 0.8
    },
    {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: "power3.out",
      stagger: 0.1,
      scrollTrigger: {
        trigger: trigger,
        start: start,
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    }
  )
}

// Animação de título com linha
export const titleWithLine = (titleElement, lineElement) => {
  const tl = gsap.timeline()
  
  tl.fromTo(titleElement, 
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
      ease: "power3.out"
    }
  )
  .fromTo(lineElement,
    {
      width: 0,
      opacity: 0
    },
    {
      width: "100px",
      opacity: 1,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.3"
  )
  
  return tl
}

// Animação de flutuação contínua
export const floatingAnimation = (element, intensity = 15, duration = 3) => {
  if (!element) return
  
  return gsap.to(element, {
    y: intensity,
    duration: duration,
    ease: "sine.inOut",
    yoyo: true,
    repeat: -1
  })
}

// Animação de rotação das estrelas
export const starRotation = (stars) => {
  stars.forEach((star, index) => {
    if (star) {
      gsap.fromTo(star,
        {
          scale: 0,
          rotation: 0,
          opacity: 0
        },
        {
          scale: 1,
          rotation: 360,
          opacity: 0.7,
          duration: 2 + index * 0.5,
          delay: index * 0.2,
          ease: "power2.out",
          repeat: -1,
          yoyo: true,
          repeatDelay: 1
        }
      )
    }
  })
}

// Animação de parallax suave
export const parallaxScroll = (element, speed = 0.5) => {
  if (!element) return
  
  gsap.to(element, {
    yPercent: -100 * speed,
    ease: "none",
    scrollTrigger: {
      trigger: element,
      start: "top bottom",
      end: "bottom top",
      scrub: true
    }
  })
}