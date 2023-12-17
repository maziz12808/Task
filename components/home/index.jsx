import Layout from "../shared/layout";
import Advertisement from "./advertisement"
import EShop from "./e-shop";
import MensaProducts from "./mensa-products"; 
import DiscountProducts from "./discount-product"
import ProductsCategories from "./products-Categories"
import MansaServices from "./mansa-services"
import RelatedCompanies from "./related-cpmpanies";
const Home = ()=>{
    return (
        <Layout title="Home">
            <Advertisement />
            <EShop />
            <MensaProducts />
            <DiscountProducts />
            <ProductsCategories />
            <MansaServices />
            <RelatedCompanies />
        </Layout>
    )
}

export default Home