import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getProductById } from "../store/productsSlice";

const CurrentProduct = () => {

    const {id: currentId} = useParams()
    const {currentProduct, loading} = useSelector(state => state.products)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getProductById(currentId))
    },[dispatch,currentId])

    if (loading || !currentProduct) {
        return <div>Loading...</div>;
    }

    return (
        <section className="current">
            <div className="current-gallery">
                <div className="current-main-img">
                    <img src="" alt=""/>
                </div>
                <ul className="current-images">
                    <li><img className="current-img" src="" alt=""/></li>
                </ul>
            </div>
            <div className="current-info">
                <div className="current-title">
                    {currentProduct.title}
                </div>
                <div className="current-price">
                    {currentProduct.price}$
                </div>
                <div className="current-color">
                    Color: <span>Blanc</span>
                </div>
                <div className="current-size">
                    <span>Sizes:</span>
                    <ul>
                        <li><button>4.5</button></li>
                        <li><button className="btn-active">5</button></li>
                        <li><button>5.5</button></li>
                    </ul>
                </div>
                <div className="current-description">
                    {currentProduct.description}
                </div>
                <div className="current-btns">
                    <button className="current-btn__cart">Add to cart</button>
                    <button className="current-btn__like ">Add to favorites</button> 
                    {/*  btn__disable*/}
                </div>
                <div className="current-more">
                    <span className="card-purchased">19 people purchased</span>
                    <a href="#" className="card-purchased">Find in a store</a>
                </div>
            </div>
        </section>
    );
};

export default CurrentProduct;