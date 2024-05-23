import { useParams } from 'react-router-dom';
import ourShopCover from '../assets/shop/banner2.jpg'
import FoodsCard from '../components/FoodsCard';
import useMenu from '../hooks/useMenu';
import Cover from './../components/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const OurShop = () => {
    const {categoryId} = useParams()
    const categoryIdInt = parseFloat(categoryId)
    const {items,isPending} = useMenu()
    if(isPending){
        return 'loading...'
    } 
    const dessert = items.filter(item => item.category === 'dessert')
    const pizza = items.filter(item => item.category === 'pizza')
    const salad = items.filter(item => item.category === 'salad')
    const soup = items.filter(item => item.category === 'soup')
    const drinks = items.filter(item => item.category === 'drinks')
    return (
        <div >
            <Cover img={ourShopCover} title={'our shop'} />
            <div className='px-5 md:px-10 lg:px20'>
                <Tabs defaultIndex={categoryIdInt}>
                    <div className='flex justify-center uppercase'>
                        <TabList >
                            <Tab>Salad</Tab>
                            <Tab>Pizza</Tab>
                            <Tab>Soup</Tab>
                            <Tab>Dessert</Tab>
                            <Tab>Drinks</Tab>
                        </TabList>
                    </div>

                    <TabPanel>
                        <FoodsCard items={salad}/>
                    </TabPanel>
                    <TabPanel>
                        <FoodsCard items={pizza}/>
                    </TabPanel>
                    <TabPanel>
                        <FoodsCard items={soup}/>
                    </TabPanel>
                    <TabPanel>
                        <FoodsCard items={dessert}/>
                    </TabPanel>
                    <TabPanel>
                        <FoodsCard items={drinks}/>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default OurShop;