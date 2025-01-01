import logo from '../images/logo.svg';
import userIcon from '../images/user icon.png';
import searchIcon from '../images/search icon.svg';
import favoriteIcon from '../images/favorite icon.svg';
import busketIcon from '../images/busket icon.svg';


const Header = () => {
    return (
        <header className="header">
            <img src={logo} alt="loco" />
            <div className="header-user">
                <img src={userIcon} alt="user" />
                <span>Roman Kateryna</span>
            </div>
            <div className="header-input">
                <img src={searchIcon} alt="Search" className="search-icon" />
                <input type="search" placeholder="Search for anything..." />
            </div>
            <div className="header-choosed">
                <button><img src={favoriteIcon} alt="liked" /></button>
                <button><img src={busketIcon} alt="busket" /></button>
            </div>
        </header>
    );
};

export default Header;
