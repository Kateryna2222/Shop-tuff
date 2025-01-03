import Products from '../components/Products';
import CurrentProduct from '../components/CurrentProduct'
import Top from '../components/Top';

const ProductPage = () => {
    return (
        <>
            <Top sideComponent={CurrentProduct}/>
            <Products title="Related products"/>
        </>
    );
};

export default ProductPage;