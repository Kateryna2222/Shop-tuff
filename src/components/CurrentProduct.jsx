import { useEffect, useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { getProductById, changeCurrentImg } from "../store/productsSlice";
import { toggleLike } from '../store/likedSlice';
import { toggleBusket } from "../store/busketSlice";
import { Context } from "../pages/Layout";

const CurrentProduct = () => {

    const {id: currentId} = useParams()
    const {currentProduct, loading, currentImg} = useSelector(state => state.products)
    const dispatch = useDispatch()

    const sizes = [4.5, 5, 5.5]
    const [choosedSize, setChoosedSize] = useState(0);

    useEffect(()=>{
        dispatch(getProductById(currentId))
    },[dispatch,currentId])

    
    const {likedProducts} = useSelector(state => state.liked)
    const {productsInBusket} = useSelector(state => state.busket)
    const isLiked = currentProduct && likedProducts.some(product => product.id === currentProduct.id);
    const isInBusket = currentProduct && productsInBusket.some(product => product.id === currentProduct.id);


    const [setIsOpen] = useContext(Context);
    const {isUser} = useSelector(state => state.user)

    if (loading || !currentProduct) {
        return <div>Loading...</div>;
    }

    return (
        <section className="current">
            <div className="current-gallery">
                <ul className="current-imgs">
                    {currentProduct?.images?.map((img, i) => {
                        if(i > 4){
                            return null
                        }
                        return (
                            <li key={i} className={i === currentImg? "current-img-main" : ''}>
                                <img src={img} alt="not found" onClick={() => dispatch(changeCurrentImg(i))}/>
                            </li>)
                    })}
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
                        {
                            sizes.map((size, i) => {
                                return <li key={i}><button onClick={() => setChoosedSize(size)} className={choosedSize === size? "btn-active" : ""}>{size}</button></li>
                            })
                        }
                    </ul>
                </div>
                <div className="current-description">
                    {currentProduct.description}
                </div>
                <div className="current-btns">
                    <button onClick={()=>isUser? dispatch(toggleBusket({...currentProduct, count: 1})) : setIsOpen(true)}
                            className={isUser && isInBusket? "btn__disable" : "current-btn__cart"}>
                        {isInBusket? "Remove from busket" : "Add to busket"}
                    </button>
                    <button onClick={()=>isUser? dispatch(toggleLike(currentProduct)) : setIsOpen(true)} 
                            className={isUser && isLiked? "btn__disable" : "current-btn__like"}>
                        Add to favorites
                    </button> 
                </div>
                <div className="current-more">
                    <span className="card-purchased">19 people purchased</span>
                    <Link to={'/'} className="card-purchased">Return to store</Link>
                </div>
            </div>
        </section>
    );
};

export default CurrentProduct;