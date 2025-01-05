import Cart from "./Cart";

const Products = ({title, products=[], amount=5, link}) => {

    const limitedProducts = products.filter((_, i) => i < amount )

    return (
        <section className="items">
            {title && <h4>{title}</h4>}
            <ul className="cards">
                {limitedProducts.map((item) => {
                    return (
                        <Cart item={item}/>
                    );
                })}
            </ul>
            <button className="items-btn">See more</button> 
        </section>
    );
};

export default Products;