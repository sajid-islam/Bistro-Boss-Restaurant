import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../SectionTitle/SectionTitle";
import axios from 'axios'
import MenuCard from "../../MenuCard/MenuCard";
const PopularItem = () => {

    const {data:items,isPending}=useQuery({
        queryKey:['menu'],
        queryFn:async()=>{
            const res = await axios('menu.json')
            const popularItem = res.data.filter(item => item.category === 'popular')
            return popularItem
        }
    }) 
    if(isPending){
        return 'loading....'
    }
    return (
        <section>
            <SectionTitle subHeading={'Popular Item'} heading={"from our menu"}/>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
                {
                    items.map(item => <MenuCard key={item._id} item={item}></MenuCard>)
                }
            </div>
        </section>
    );
};

export default PopularItem;