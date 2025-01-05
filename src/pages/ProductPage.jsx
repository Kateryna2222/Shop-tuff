import Products from '../components/Products';
import CurrentProduct from '../components/CurrentProduct'
import Top from '../components/Top';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { filterByCategory } from '../store/productsSlice';

const ProductPage = () => {

    const {currentProduct, relatedProducts} = useSelector(state => state.products)
    const dispatch = useDispatch()

    useEffect(()=>{
        currentProduct && dispatch(filterByCategory(currentProduct.category.name))
        },[dispatch,currentProduct])


    return (
        <>
            <Top sideComponent={CurrentProduct}/> 
            <Products title="Related products" products={relatedProducts} link={true}/>
        </>
    );
};

export default ProductPage;