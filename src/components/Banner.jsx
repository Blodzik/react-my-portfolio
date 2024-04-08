import '../styles/Banner.css';
import shisui from '../assets/shisui.webp';
import React, { useState, useEffect } from 'react';

export const Banner = () => {

    const[delta, setDelta] = useState(300 - Math.random() * 100);
    const[loopNum, setLoopNum] = useState(0);
    const[text, setText] = useState('');
    const[isDeleting, setIsDeleting] = useState(false);

    const toRotate = [ 'Web Developer', 'Web Designer', 'Freelancer' ];

    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)
        return () => { clearInterval(ticker) };
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(d => d / 2);
        };

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <div className='banner'>
            <div className="information">
                <div className="hey">
                    Hey, I'm Nazar Tsokalo
                </div>
                <div className="proffesion">
                    {text}
                </div>
                <div className="education">
                    Still in highschool
                </div>
                <div className="buttons">
                    <button className='hire-me'>Hire Me</button>
                    <button className='resume'>Resume<span><i class="bi-download"></i></span></button>
                </div>
                <div className="links">
                    <i class="bi bi-telegram"></i>
                    <i class="bi bi-github"></i>
                    <i class="bi bi-linkedin"></i>
                    <i class="bi bi-instagram"></i>
                </div>
            </div>
            <div className="logo">
            <img className='header-image' src={shisui} alt="Header Image" />
            </div>
        </div>
    );
};