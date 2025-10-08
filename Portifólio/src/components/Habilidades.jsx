import React from 'react'
import './Habilidades.css'



const Habilidades = () => {
  return (
    <section className='habilidades' id='habilidades'>
      
            <h1>Habilidades</h1>
            <span className='line-red'></span>
        <p className='habilidades-text'>
           Tecnologias e ferramentas 
        </p>

        <div className='habilidade-content'>
            <article className='habilidade-card'>
                <div className='habilidade-icon'>
                    <i className="fa-brands fa-html5"></i>
                </div>
                <div className='habilidade-text'>
                    <h3>HTML5</h3>
                    <p>Markup semântico e acessível</p>
                    <span className='nivel'>Avançado</span>
                </div>
            </article>

            <article className='habilidade-card'>
                <div className='habilidade-icon'>
                    <i className="fa-brands fa-css3-alt"></i>
                </div>
                <div className='habilidade-text'>
                    <h3>CSS3</h3>
                    <p>Styling moderno e responsivo</p>
                    <span className='nivel'>Avançado</span>
                </div>
            </article>

            <article className='habilidade-card'>
                <div className='habilidade-icon'>
                    <i className="fa-brands fa-js-square"></i>
                </div>
                <div className='habilidade-text'>
                    <h3>JavaScript</h3>
                    <p>ES6+ e programação funcional</p>
                    <span className='nivel'>Intermediário+</span>
                </div>
            </article>

            <article className='habilidade-card'>
                <div className='habilidade-icon'>
                    <i className="fa-brands fa-react"></i>
                </div>
                <div className='habilidade-text'>
                    <h3>React</h3>
                    <p>Componentes e hooks modernos</p>
                    <span className='nivel'>Intermediário+</span>
                </div>
            </article>

            <article className='habilidade-card'>
                <div className='habilidade-icon'>
                    <i className="fa-brands fa-php"></i>
                </div>
                <div className='habilidade-text'>
                    <h3>PHP</h3>
                    <p>Desenvolvimento server-side</p>
                    <span className='nivel'>Intermediário</span>
                </div>
            </article>

            <article className='habilidade-card'>
                <div className='habilidade-icon'>
                    <i className="fa-brands fa-laravel"></i>
                </div>
                <div className='habilidade-text'>
                    <h3>Laravel</h3>
                    <p>Framework PHP moderno</p>
                    <span className='nivel'>Intermediário</span>
                </div>
            </article>

            <article className='habilidade-card'>
                <div className='habilidade-icon'>
                    <i className="fa-brands fa-git-alt"></i>
                </div>
                <div className='habilidade-text'>
                    <h3>Git</h3>
                    <p>Controle de versão</p>
                    <span className='nivel'>Intermediário+</span>
                </div>
            </article>

            <article className='habilidade-card'>
                <div className='habilidade-icon'>
                    <i className="fa-brands fa-figma"></i>
                </div>
                <div className='habilidade-text'>
                    <h3>Figma</h3>
                    <p>Design e prototipagem</p>
                    <span className='nivel'>Intermediário+</span>
                </div>
            </article>

            <article className='habilidade-card'>
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