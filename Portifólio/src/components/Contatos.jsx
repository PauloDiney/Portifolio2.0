import React, { useState, useRef, useEffect } from "react";
import "./Contatos.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Contatos = () => {
  const [formData, setFormData] = useState({
    name: "",
    contactMethod: "email",
    emailOrPhone: "",
    message: ""
  });

  const contatosRef = useRef(null);
  const titleRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animação do título
    if (titleRef.current) {
      gsap.fromTo(titleRef.current, 
        {
          opacity: 0,
          y: -50,
          scale: 0.8
        },
        {
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            toggleActions: "play none none none"
          },
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out"
        }
      );
    }

    // Animação do subtítulo
    const subtitle = document.querySelector(".contatos-subtitle");
    if (subtitle) {
      gsap.fromTo(subtitle,
        {
          opacity: 0,
          y: 30
        },
        {
          scrollTrigger: {
            trigger: subtitle,
            start: "top 85%",
            toggleActions: "play none none none"
          },
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2,
          ease: "power2.out"
        }
      );
    }

    // Animação do formulário
    if (formRef.current) {
      gsap.fromTo(formRef.current,
        {
          opacity: 0,
          y: 50
        },
        {
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 85%",
            toggleActions: "play none none none"
          },
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.4,
          ease: "power2.out"
        }
      );
    }

    // Animação dos campos do formulário
    const formGroups = document.querySelectorAll(".form-group");
    if (formGroups.length > 0) {
      gsap.fromTo(formGroups,
        {
          opacity: 0,
          x: -30
        },
        {
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 80%",
            toggleActions: "play none none none"
          },
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.1,
          delay: 0.6,
          ease: "power2.out"
        }
      );
    }

    // Animação do botão submit
    const submitBtn = document.querySelector(".submit-btn");
    if (submitBtn) {
      gsap.fromTo(submitBtn,
        {
          opacity: 0,
          scale: 0.9
        },
        {
          scrollTrigger: {
            trigger: submitBtn,
            start: "top 90%",
            toggleActions: "play none none none"
          },
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.7)"
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const { name, contactMethod, emailOrPhone, message } = formData;

    if (contactMethod === "email") {
      // Enviar por Email
      const subject = `Contato de ${name}`;
      const body = `Nome: ${name}%0D%0AEmail: ${emailOrPhone}%0D%0A%0D%0AMensagem:%0D%0A${message}`;
      window.location.href = `mailto:paulodiney@email.com?subject=${subject}&body=${body}`;
    } else {
      // Enviar por WhatsApp
      const whatsappMessage = `*Nome:* ${name}%0A*Mensagem:* ${message}`;
      const phoneNumber = "5511999999999"; // Coloque seu número aqui (com DDI e DDD)
      window.open(`https://wa.me/${phoneNumber}?text=${whatsappMessage}`, '_blank');
    }

    // Limpar formulário
    setFormData({
      name: "",
      contactMethod: "email",
      emailOrPhone: "",
      message: ""
    });
  };

  return (
    <section className="contatos" id="contatos" ref={contatosRef}>
      <div className="contatos-container">
        <h2 className="contatos-title" ref={titleRef}>
          Entre em Contato
        </h2>
        <p className="contatos-subtitle">
          Preencha o formulário abaixo e escolha como prefere receber minha resposta
        </p>

        <form className="contatos-form" ref={formRef} onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nome Completo</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Seu nome"
              required
            />
          </div>

          <div className="form-group contact-method-group">
            <label>Prefiro ser contatado por:</label>
            <div className="radio-group">
              <label className={`radio-label ${formData.contactMethod === 'email' ? 'active' : ''}`}>
                <input
                  type="radio"
                  name="contactMethod"
                  value="email"
                  checked={formData.contactMethod === "email"}
                  onChange={handleChange}
                />
                <span className="radio-icon">📧</span>
                <span className="radio-text">Email</span>
              </label>
              
              <label className={`radio-label ${formData.contactMethod === 'whatsapp' ? 'active' : ''}`}>
                <input
                  type="radio"
                  name="contactMethod"
                  value="whatsapp"
                  checked={formData.contactMethod === "whatsapp"}
                  onChange={handleChange}
                />
                <span className="radio-icon">📱</span>
                <span className="radio-text">WhatsApp</span>
              </label>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="emailOrPhone">
              {formData.contactMethod === "email" ? "Seu Email" : "Seu Telefone"}
            </label>
            <input
              type={formData.contactMethod === "email" ? "email" : "tel"}
              id="emailOrPhone"
              name="emailOrPhone"
              value={formData.emailOrPhone}
              onChange={handleChange}
              placeholder={formData.contactMethod === "email" ? "seu@email.com" : "(11) 99999-9999"}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Mensagem</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Escreva sua mensagem aqui..."
              rows="6"
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            <span className="btn-text">Enviar Mensagem</span>
            <span className="btn-icon">
              {formData.contactMethod === "email" ? "✉️" : "💬"}
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contatos;
