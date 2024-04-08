import '../styles/NavBar.css';
import { useState, useEffect } from 'react';

export const NavBar = () => {

    const[activeLink, setActiveLink] = useState('home');
    const[scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    }, [])

    const updateActiveLink = (value) => {
        setActiveLink(value);
    };
    
    return (
        <div className={scrolled ? 'navbar scrolled' : 'navbar' }>
            <div>
                <div className='name'>Nazar</div>
            </div>
            <div className='menu'>
                <a href='#home' className={activeLink === 'home' ? 'active' : ''} onClick={() => updateActiveLink('home')}>HOME</a>
                <a href='#skills' className={activeLink === 'skills' ? 'active' : ''} onClick={() => updateActiveLink('skills')}>SKILLS</a>
                <a href='#projects' className={activeLink === 'projects' ? 'active' : ''} onClick={() => updateActiveLink('projects')}>PROJECTS</a>
                <a href='#contact' className={activeLink === 'contact' ? 'active' : ''} onClick={() => updateActiveLink('contact')}>CONTACT</a>
                <button>HIRE ME</button>
            </div>
        </div>
    );
}