import SectionTitle from "../SectionTitle/SectionTitle";
import useMenu from "../../hooks/useMenu";
import MenuCategory from "../MenuCategory/MenuCategory";
const PopularItem = () => {
    const { items, isPending } = useMenu()
    if (isPending) {
        return 'loading....'
    }
    const popular = items.filter(item => item.category === 'popular')
    console.log(popular);
    return (
        <section>
            <SectionTitle subHeading={'Popular Item'} heading={"from our menu"} />
            <MenuCategory items={popular}  btnTxt={'View full menu'}/>
        </section>
    );
};

export default PopularItem;