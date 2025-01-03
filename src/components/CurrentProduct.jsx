
const CurrentProduct = () => {
    return (
        <section class="current">
            <div class="current-gallery">
                <div class="current-main-img">
                    <img src="" alt=""/>
                </div>
                <ul class="current-images">
                    <li><img class="current-img" src="" alt=""/></li>
                </ul>
            </div>
            <div class="current-info">
                <div class="current-title">
                    Bouncing sneaker Hermès
                </div>
                <div class="current-price">
                    599$
                </div>
                <div class="current-color">
                    Color: <span>Blanc</span>
                </div>
                <div class="current-size">
                    <span>Sizes:</span>
                    <ul>
                        <li><button>4.5</button></li>
                        <li><button class="btn-active">5</button></li>
                        <li><button>5.5</button></li>
                    </ul>
                </div>
                <div class="current-description">
                    Sneaker in air mesh and suede goatskin.
                    Light sole with contrasting design for a versatile and modern look.
                </div>
                <div class="current-btns">
                    <button class="current-btn__cart">Add to cart</button>
                    <button class="btn__disable">Add to favorites</button> 
                    {/* current-btn__like  */}
                </div>
                <div class="current-more">
                    <span class="card-purchased">19 people purchased</span>
                    <a href="#" class="card-purchased">Find in a store</a>
                </div>
            </div>
        </section>
    );
};

export default CurrentProduct;