import Cart from "./Cart";
import { Link } from "react-router-dom";

const Products = ({title, products=[], amount=5}) => {

    const limitedProducts = products.filter((_, i) => i < amount )

    return (
        <section className="items">
            {title && <h4>{title}</h4>}
            <ul className="cards">
                {limitedProducts.map((item) => {
                    return (
                        <Link to={`/products/${item.id}`} key={item.id}>
                            <Cart item={item}/>
                        </Link>
                    );
                })}
            </ul>
            <button className="items-btn">See more</button>
        </section>
    );
};

export default Products;