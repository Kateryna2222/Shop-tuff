import logo from '../images/logo.svg';
import userIcon from '../images/user icon.png';
import searchIcon from '../images/search icon.svg';
import {ReactComponent as FavoriteIcon} from '../images/favorite icon.svg';
import {ReactComponent as BusketIcon} from '../images/busket icon.svg';
import Registration from "../Autorisation/Registration";

import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../pages/Layout';

const Header = () => {
    
    const busket = useSelector(state => state.busket.productsInBusket);
    const isBusketEmpthy = busket.length === 0;

    const {isUser, currentUser} = useSelector(state => state.user)

    const location = useLocation()
    const isBusket = location.pathname === '/busket';
    const isFavourite = location.pathname === '/favourite';

    const [isOpen, setIsOpen] = useContext(Context);


    const protect = (e)=>{
        if(isUser){return}
        
        !isUser && e.preventDefault();
        setIsOpen(true)
    }

    return (
        <header className="header">
            <Link to={'/'}><img src={logo} alt="loco" /></Link>
            <div className="header-user">
                <img src={userIcon} alt="user" />
                {!isUser? 
                    <button onClick={()=>setIsOpen(!isOpen)}>Log in</button>
                    : <Link to={'/profile'}>{currentUser.name}</Link>}
                <Registration/>
            </div>
            <div className="header-input">
                <img src={searchIcon} alt="Search" className="search-icon" />
                <input type="search" placeholder="Search for anything..." />
            </div>
            <div className="header-choosed">
                <Link to={isFavourite? '/' : (isUser && '/favourite')} onClick={protect}>
                    <FavoriteIcon className={isFavourite? "header-choosed__active" : "header-choosed"}/>
                </Link>

                <Link to={isBusket? '/' : (isUser && '/busket')} onClick={protect} className="busket-btn">
                    <BusketIcon className={isBusket? 'busket-active' : ''}/>
                    {(isBusketEmpthy || !isUser) || <div className="busket-btn__count">{busket.length}</div>}
                </Link>
            </div>
        </header>
    );
};

export default Header;
