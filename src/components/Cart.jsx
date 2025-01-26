import {ReactComponent as Like} from '../images/favorite icon.svg'
import { Link } from 'react-router-dom';
import { toggleLike } from '../store/likedSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Context } from '../pages/Layout';
import { useContext } from 'react';

const Cart = ({item}) => {

    const {likedProducts} = useSelector(state => state.liked)
    const dispatch = useDispatch()

    const isLiked = likedProducts.some(product => product.id === item.id)

    const [setIsOpen] = useContext(Context)
    const {isUser} = useSelector(state => state.user)
    
    return (
        <li key={item.id} className="card">
            <div className="card-img">
                <img src={item.images[1] || item.images[0] || item.image} alt="not found"/>
                <button onClick={()=>isUser? dispatch(toggleLike(item)) : setIsOpen(true)}>
                    <Like className={isUser && isLiked?'card-liked' : 'card-like'}/>
                </button>
            </div>
            <div className="card-info">
                <Link to={`/products/${item.id}`} key={item.id}>
                    <h6 className="card-title">{item.title}</h6>
                </Link>
                <div className="card-category">{item.category.name}</div>
                <div className="card-info_about">
                    <div className="card-prices">
                        <span className="card-price">{item.price}$</span>
                        <span className="card-price_before">{Math.floor(item.price * 1.4)}$</span>
                    </div>
                    <span className="card-purchased">{Math.floor(Math.random() * 25)} people purchased</span>
                </div>
            </div>                        
        </li>
    );
};

export default Cart;