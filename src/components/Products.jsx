import Cart from "./Cart";

const Products = ({title}) => {
    return (
        <section class="items">
            {title && <h4>{title}</h4>}
            <ul class="cards">
                <Cart/>
            </ul>
            <button class="items-btn">See more</button>
        </section>
    );
};

export default Products;