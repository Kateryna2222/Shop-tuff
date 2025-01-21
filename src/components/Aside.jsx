import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Aside = () => {

    const categories = useSelector(state => state.categories.categories)

    return (
        <aside>
            <h5>CATEGORIES</h5>
            <ul className="categories">
                {
                    categories.map(({id, name}) => {
                        return (<li key={id} className="category">
                            <NavLink to={`/categories/${id}`}>{name}</NavLink>
                        </li>)
                    })
                }
            </ul>
            <div className="aside-more">
                <a href="#">Help</a>
                <a href="#" className="conditions">Terms & Conditions</a>
            </div>
        </aside>
    );
};

export default Aside;