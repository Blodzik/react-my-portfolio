import '../styles/Banner.css';
import shisui from '../assets/shisui.webp';

export const Banner = () => {

    return (
        <div className='banner'>
            <div className="information">
                <div className="hey">
                    Hey, I'm Nazar Tsokalo
                </div>
                <div className="proffesion">
                    Web Developer
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