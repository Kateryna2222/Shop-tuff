import Top from "../components/Top";
import Banner from "../components/Banner";
import Cart from "../components/Cart";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getCategoriesById } from "../store/categoriesSlice";

const CategoryPage = () => {

    const {id: currentCategory} = useParams();
    const {categoryProducts, categoryProductsLoad, categories} = useSelector(state => state.categories);
    const dispatch = useDispatch()


    const [firstItemOnPage, setFirstItemOnPage] = useState(0);
    const [priceMin, setPriceMin] = useState('')
    const [priceMax, setPriceMax] = useState('')
    const [title, setTitle] = useState('')


    useEffect(()=>{
        dispatch(getCategoriesById(
            {
                id: currentCategory,
                offset: firstItemOnPage,
            }
        ))
    }, [dispatch, currentCategory, firstItemOnPage])


    const filter = () => {
        dispatch(getCategoriesById(
            {
                id: currentCategory,
                offset: firstItemOnPage,
                price_min: priceMin || 1,
                price_max: priceMax || 10000,
                title: title || ''
            }
        ))
    }

    const categoryName = categories.find(item => item.id === Number(currentCategory))

    return (
        <>
            <Top sideComponent={Banner}/>
            <section className="category-page">
                <h4 style={{paddingBottom: '30px'}}>{categoryName?.name || ''}</h4>
                <form className="filterProducts">
                    <input className="filterProducts-name" type="text" placeholder="Product name" value={title}
                           onChange={(e)=>setTitle(e.target.value)}/>
                    <input className="filterProducts-price" type="number" placeholder="Price min" min={1} value={priceMin}
                           onChange={e => setPriceMin(e.target.value)}/>
                    <input className="filterProducts-price" type="number" placeholder="Price max" min={1} value={priceMax}
                           onChange={e => setPriceMax(e.target.value)}/>
                    <button type="button" onClick={()=>{filter()}}>Filter</button>
                    {/* by default button has submit type which reload the page, in this case we can do:
                        1) change type to button
                        2) call function (e)=>e.preventDefault(); dont allow reload */}
                </form>
                {
                    categoryProductsLoad? <div>loading</div> :  
                    (
                        categoryProducts.length === 0? <div style={{fontSize: '22px', textAlign: 'center'}}>no results</div> :
                        <ul className="category-page__products">
                            {
                                categoryProducts.map(item => {
                                    return <Cart key={item.id} item={item}/>
                                })
                            }
                        </ul>
                    )
                }
                <div className="pagination">
                    <button className="previus-page" disabled={firstItemOnPage === 0} onClick={()=>setFirstItemOnPage(firstItemOnPage => firstItemOnPage-10)}>previous</button>
                    <button className="next-page" disabled={categoryProducts.length < 10} onClick={()=>setFirstItemOnPage(firstItemOnPage => firstItemOnPage+10)}>next</button>
                </div>
            </section>
        </>
    );
};

export default CategoryPage;