const Cart = ({item}) => {
    return (
        <li class="card">
            <div class="card-img">
                <img src="" alt="item"/>
            </div>
            <div class="card-info">
                <h6 class="card-title">Nike ZoomX 2023 lo</h6>
                <div class="card-category">Sneakers</div>
                <div class="card-info_about">
                    <div class="card-prices">
                        <span class="card-price">55$</span>
                        <span class="card-price_before">55$</span>
                    </div>
                    <span class="card-purchased">19 people purchased</span>
                </div>
            </div>                        
        </li>
    );
};

export default Cart;