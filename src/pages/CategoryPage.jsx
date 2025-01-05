import Top from "../components/Top";
import Banner from "../components/Banner";
import Cart from "../components/Cart";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { filterByCategory } from "../store/productsSlice";
import { useEffect } from "react";

const CategoryPage = () => {

    const {name: currentCategory} = useParams();
    const products = useSelector(state => state.products.relatedProducts);
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(filterByCategory(currentCategory))
    }, [dispatch, currentCategory])

    return (
        <>
            <Top sideComponent={Banner}/>
            <section className="category-page">
                <h4>{currentCategory}</h4>
                <form className="filterProducts">
                    <input className="filterProducts-name" type="text" placeholder="Product name"/>
                    <input className="filterProducts-price" type="number" placeholder="Price from"/>
                </form>
                <ul className="category-page__products">
                    {
                        products.map(item => {
                            return <li><Cart item={item}/></li>
                        })
                    }
                </ul>
            </section>
        </>
    );
};

export default CategoryPage;