import Banner from "../components/Banner/Banner";
import Category from "../components/Catrgory/Category";
import PopularItem from "../components/Catrgory/PopularItem/PopularItem";

const Home = () => {
    return (
        <div>
            <Banner />
            <div className="max-w-7xl mx-auto px-5 md:px-0">
                <Category />
                <PopularItem/>
            </div>
        </div>
    );
};

export default Home;