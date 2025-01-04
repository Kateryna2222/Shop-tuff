import logo from '../images/logo.svg';
import userIcon from '../images/user icon.png';
import searchIcon from '../images/search icon.svg';
import { Link } from 'react-router-dom';
import {ReactComponent as FavoriteIcon} from '../images/favorite icon.svg';
import {ReactComponent as BusketIcon} from '../images/busket icon.svg';


const Header = () => {
    return (
        <header className="header">
            <Link to={'/'}><img src={logo} alt="loco" /></Link>
            <div className="header-user">
                <img src={userIcon} alt="user" />
                <span>Roman Kateryna</span>
            </div>
            <div className="header-input">
                <img src={searchIcon} alt="Search" className="search-icon" />
                <input type="search" placeholder="Search for anything..." />
            </div>
            <div className="header-choosed">
                <button><FavoriteIcon className="header-choosed__active"/></button>
                <button className="busket-btn">
                    <BusketIcon/>
                    <div className="busket-btn__count">
                        1
                    </div>
                </button>
            </div>
        </header>
    );
};

export default Header;
