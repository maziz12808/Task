import Layout from "../shared/layout";
import Advertisement from "../home/advertisement"
import EShop from "./e-shop";
import MensaProducts from "./mensa-products";
const Home = ()=>{
    return (
        <Layout title="Home">
            <Advertisement />
            <EShop />
            <MensaProducts />
        </Layout>
    )
}

export default Home