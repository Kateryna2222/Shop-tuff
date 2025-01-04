const Cart = ({item}) => {
    
    return (
        <li key={item.id} className="card">
            <div className="card-img">
                <img src={item.images[1] || item.images[0] || item.image} alt="item"/>
            </div>
            <div className="card-info">
                <h6 className="card-title">{item.title}</h6>
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