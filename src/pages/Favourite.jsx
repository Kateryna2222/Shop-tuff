import { useSelector } from 'react-redux';
import Cart from '../components/Cart'

const Favourite = () => {

    const {likedProducts} = useSelector(state => state.liked)

    return (
        <div className="favourite">
            <h3>Your favourite goods</h3>
            {
                likedProducts.length === 0? <div className="busket-empthy"><span>Threre are not liked items.</span></div> :
                <ul className="favourite-list">
                    {
                        likedProducts.map(item => {
                            return <Cart key={item.id} className="favourite-item" item={item}/>
                        })
                    }
                </ul>
            }
        </div>
    );
};

export default Favourite;