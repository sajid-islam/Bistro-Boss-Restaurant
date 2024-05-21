import Cover from "../components/Cover/Cover";
import menuBanner from '../assets/menu/banner3.jpg'
import { Helmet } from 'react-helmet-async';
import useMenu from './../hooks/useMenu';
import SectionTitle from './../components/SectionTitle/SectionTitle';
import MenuCategory from "../components/MenuCategory/MenuCategory";
import dessertImg from '../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../assets/menu/pizza-bg.jpg'
import saladImg from '../assets/menu/pizza-bg.jpg'
import soupImg from '../assets/menu/soup-bg.jpg'

const OurMenu = () => {
    const {items,isPending}=useMenu()
    if(isPending){
        return 'loading...'
    }
    const dessert = items.filter(item => item.category === 'dessert')
    const pizza = items.filter(item => item.category === 'pizza')
    const salad = items.filter(item => item.category === 'salad')
    const soup = items.filter(item => item.category === 'soup')
    const offered = items.filter(item => item.category === 'offered')
    return (
        <div >
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuBanner} title={'our menu'} description={'Would you like to try a dish?'}/>
            <SectionTitle subHeading={"Don't Miss"} heading={"Today's offer"}/>
            <MenuCategory items={offered} btnTxt={'order your favorite food'}></MenuCategory>
            {/* Desserts section */}
            <MenuCategory items={dessert} title={'Desserts'} description='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' img={dessertImg} btnTxt={'order your favorite food'} />

            {/* Pizzas section */}
            <MenuCategory items={pizza} title={'Pizzas'} description='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' img={pizzaImg} btnTxt={'order your favorite food'} />

            {/* Salads section */}
            <MenuCategory items={salad} title={'Salads'} description='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' img={saladImg} btnTxt={'order your favorite food'} />

            {/* Soups section */}
            <MenuCategory items={soup} title={'Soups'} description='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' img={soupImg} btnTxt={'order your favorite food'} />
        </div>
    );
};

export default OurMenu;