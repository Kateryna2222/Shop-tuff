import {ReactComponent as CloseIcon} from "../images/close.svg"
import { Link } from "react-router-dom";
import { removeFromBusket, increaseTotal, disreaseTotal } from "../store/busketSlice";
import { useDispatch, useSelector } from "react-redux";

const Busket = () => {

    const dispatch = useDispatch()
    const {productsInBusket, total} = useSelector(state => state.busket)

    return (
        <div className="busket">
            <h3>Your cart</h3>
            <ul className="busket-items">
                {
                    productsInBusket.length === 0? <div className="busket-empthy"><span>Your busket is empthy!</span></div> :
                    productsInBusket.map(product => {
                        return (
                            <li className="busket-item">
                                <div className="busket-product">
                                    <div className="busket-img"><img src={product.images[0] || product.image} alt="not found"/> </div>
                                    <Link to={`/products/${product.id}`} className="busket-product__title">{product.title}</Link>
                                </div>
                                <div className="busket-couner">
                                    <button onClick={()=>dispatch(disreaseTotal(product))}
                                            disabled={product.count===1? true : false}
                                            className={product.count === 1? "busket-couner__disabled" : "busket-couner-btn"}>
                                    -</button>
                                    <span>{product.count}</span>
                                    <button onClick={()=>dispatch(increaseTotal(product))} className="busket-couner-btn">+</button>
                                </div>
                                <div className="busket-price">
                                    {(product.price * product.count).toFixed(2)}$ 
                                </div>
                                <button onClick={()=>dispatch(removeFromBusket(product))} className="busket-delete-btn">
                                    <CloseIcon className="busket-delete__icon" />
                                </button>
                            </li>
                        )
                    })
                }
            </ul>
            <div className="busket-footer">
                <div className="busket-total">
                    TOTAL PRICE: <span>{total}$</span>
                </div>
                <Link to={'/'} className="busket-footer__link">return to home</Link>
            </div>
        </div>
    );
};

export default Busket;