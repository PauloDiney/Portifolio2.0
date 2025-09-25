import React, { useRef, useEffect } from 'react';
import './Header.css';
import { gsap } from 'gsap';
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';

const Header = () => {
    const scrambleRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrambleTextPlugin);
        gsap.to(scrambleRef.current, {
            duration: 3,
            scrambleText: {
                text: 'Paulo.Diney',
                chars: 'upperAndLowerCase',
                revealDelay: 1,
                tweenLength: false
            },
            ease: 'power1.inOut'
        });
    }, []);

    return (
        <header className="header">
            <nav className='navigation'>
                <div className='logo'>
                    <h1 ref={scrambleRef}>Paulo.Diney</h1>
                </div>
                <ul className='list'>
                    <li><a href="#home">Inicio</a></li>
                    <li><a href="#about">Sobre</a></li>
                    <li><a href="#projects">Projetos</a></li>
                    <li><a href="#contact">Contato</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;