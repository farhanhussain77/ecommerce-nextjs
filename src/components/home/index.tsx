import Category from "./category/Category";
import Hero from "./Hero";
import ProductTabs from "./product-tabs";

const Home = () => {
    return(
        <>
            <Hero />
            <Category />
            <ProductTabs />
        </>
    )
}

export default Home;