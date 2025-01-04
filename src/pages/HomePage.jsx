import Products from '../components/Products';
import CategorySection from '../components/CategorySection';
import SaleBanner from '../components/SaleBanner';
import Banner from '../components/Banner';
import Top from '../components/Top';

import { useDispatch, useSelector } from 'react-redux';
import { filterByPrice } from '../store/productsSlice';
import { useEffect } from 'react';

const HomePage = () => {

    const {products, filteredProduct} = useSelector(state => state.products)
    const {categories} = useSelector(state => state.categories)
    const dispatch = useDispatch()

    useEffect(()=>{
        if(products.length > 0){
            dispatch(filterByPrice(50))
        }
    },[dispatch, products.length])

    return (
        <>
            <Top sideComponent={Banner}/>
            <Products title="Trending" products={products}/>
            <CategorySection categories={categories}/>
            <SaleBanner/>
            <Products title="Less than 50$" products={filteredProduct}/>
        </>
    );
};

export default HomePage;