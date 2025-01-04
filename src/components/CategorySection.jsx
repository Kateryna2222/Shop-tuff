import { Link } from "react-router-dom";

const CategorySection = ({categories, amount = 5}) => {

    return (
        <section className="items">
            <h4>Worth seeing</h4>
            <ul className="cards">
                {
                    categories.map((category)=>{
                        return (
                            <li key={category.id} className="card-trending">
                                <Link to={`categories/${category.name.toLowerCase()}`}>
                                    <div className="card-trending__img">
                                        <img src={category.image} alt="item"/>
                                    </div>
                                </Link>                     
                                <h6 className="card-title">
                                    <Link to={`categories/${category.name.toLowerCase()}`}>
                                        {category.name} 
                                    </Link>  
                                </h6>                   
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    );
};

export default CategorySection;