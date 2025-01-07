import logo from '../images/logo.svg';
import {ReactComponent as YoutubeIcon} from '../images/youtube.svg';
import {ReactComponent as FacebookIcon} from '../images/facebook.svg';
import {ReactComponent as InstagramIcon} from '../images/instagram.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <Link to={'/'}><img src={logo} alt="logo" /></Link>
            <span>
                Made by <span className="footer-text">Katya</span>
            </span>
            <div className="footer-social-media">
                <a href="#"><YoutubeIcon className='social-media__icon'/></a>
                <a href="#"><FacebookIcon className='social-media__icon'/></a>
                <a href="#"><InstagramIcon className='social-media__icon'/></a>
            </div>
        </footer>
    );
};

export default Footer;
