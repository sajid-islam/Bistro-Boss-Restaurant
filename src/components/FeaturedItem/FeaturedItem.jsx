import featuredImg from '../../assets/home/featured.jpg'
import SectionTitle from '../SectionTitle/SectionTitle';
import './featuredItem.css'
const FeaturedItem = () => {
    return (
        <div className='mb-10 featured-item text-white bg-fixed '>
            <SectionTitle  subHeading={'Featured Item'} heading={'from our menu'} />
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 items-center max-w-7xl mx-auto'>
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div>
                    <h3 className="text-2xl uppercase">March 20, 2023 <br /> WHERE CAN I GET SOME?</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore soluta magnam adipisci eligendi nesciunt fugiat ipsum iusto possimus similique. Obcaecati autem doloremque quidem suscipit illo animi at dolor, itaque neque id, quas a ratione impedit iusto maxime saepe! Consectetur pariatur sapiente labore eligendi cum nostrum laborum sit officia suscipit neque.</p>
                    <button className="border-b-2 border-white py-2 px-4 rounded-lg mt-2 ">Read more</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedItem;