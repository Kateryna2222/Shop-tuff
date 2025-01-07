import logo from '../images/logo.svg';
import userIcon from '../images/user icon.png';
import searchIcon from '../images/search icon.svg';
import { Link, useLocation } from 'react-router-dom';
import {ReactComponent as FavoriteIcon} from '../images/favorite icon.svg';
import {ReactComponent as BusketIcon} from '../images/busket icon.svg';
import { useSelector } from 'react-redux';


const Header = () => {

    const busket = useSelector(state => state.busket.productsInBusket);
    const isBusketEmpthy = busket.length === 0;

    const location = useLocation()
    const isBusket = location.pathname === '/busket';
    const isFavourite = location.pathname === '/favourite';

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
                <Link to={isFavourite? '/' : '/favourite'}>
                    <FavoriteIcon className={isFavourite? "header-choosed__active" : "header-choosed"}/>
                </Link>

                <Link to={isBusket? '/' : '/busket'} className="busket-btn">
                    <BusketIcon className={isBusket && 'busket-active'}/>
                    {isBusketEmpthy || <div className="busket-btn__count">{busket.length}</div>}
                </Link>
            </div>
        </header>
    );
};

export default Header;
