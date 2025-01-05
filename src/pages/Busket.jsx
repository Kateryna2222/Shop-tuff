import {ReactComponent as CloseIcon} from "../images/close.svg"
import { Link } from "react-router-dom";
import { removeFromBusket, increaseTotal, disreaseTotal } from "../store/busketSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const Busket = () => {

    const dispatch = useDispatch()
    const {productsInBusket, total} = useSelector(state => state.busket)

    return (
        <div className="busket">
            <h3>Your cart</h3>
            <ul className="busket-items">
                {
                    productsInBusket.map(product => {
                        return (
                            <li className="busket-item">
                                <div className="busket-product">
                                    <img src={product.images[0] || product.image} alt="not found"/> 
                                    <div className="busket-product__title">
                                        {product.name}
                                    </div>
                                </div>
                                <div className="busket-couner">
                                    <button onClick={()=>dispatch(disreaseTotal(product))}>-</button>
                                    <span>{product.count}</span>
                                    <button onClick={()=>dispatch(increaseTotal(product))}>+</button>
                                </div>
                                <div className="busket-price">
                                    {(product.price * product.count).toFixed(2)}$ 
                                </div>
                                <button onClick={()=>dispatch(removeFromBusket(product))} className="busket-delete-btn">
                                    <CloseIcon/>
                                </button>
                            </li>
                        )
                    })
                }
            </ul>
            <div className="busket-footer">
                <div className="busket-total">
                    TOTAL PRICE: {total}$
                </div>
                <Link to={'/'}>return to home</Link>
            </div>
        </div>
    );
};

export default Busket;