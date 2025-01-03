import Products from '../components/Products';
import CategorySection from '../components/CategorySection';
import SaleBanner from '../components/SaleBanner';
import Banner from '../components/Banner';
import Top from '../components/Top';

const HomePage = () => {
    return (
        <>
            <Top sideComponent={Banner}/>
            <Products title="Trending"/>
            <CategorySection/>
            <SaleBanner/>
            <Products title="Less than 100$"/>
        </>
    );
};

export default HomePage;