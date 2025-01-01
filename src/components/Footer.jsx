import logo from '../images/logo.svg';
import youtubeIcon from '../images/youtube.svg';
import facebookIcon from '../images/facebook.svg';
import instagramIcon from '../images/instagram.svg';

const Footer = () => {
    return (
        <footer className="footer">
            <img src={logo} alt="logo" />
            <span>
                Developed by <span className="footer-text">Tomkovich</span>
            </span>
            <div className="footer-social-media">
                <a href="#"><img src={youtubeIcon} alt="youtube" /></a>
                <a href="#"><img src={facebookIcon} alt="facebook" /></a>
                <a href="#"><img src={instagramIcon} alt="instagram" /></a>
            </div>
        </footer>
    );
};

export default Footer;
