
const SaleBanner = () => {
    return (
        <section className="sale-banner">
            <div className="sale-banner__info">
                <p className="sale-banner__info-small">NEW YEAR</p>
                <p className="sale-banner__info-big">SALE</p>
                <button className="items-btn">See more</button>
            </div>
            <div className="sale-banner__img">
                <div className="sale-banner__text">
                    save up to <span>50%</span> off
                </div>
            </div>
        </section>
    );
};

export default SaleBanner;