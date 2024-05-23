import Cover from "../Cover/Cover";
import MenuCard from "../MenuCard/MenuCard";
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
const MenuCategory = ({ items, btnTxt, title, img, description ,id }) => {
    return (
        <div>
            {title && <Cover title={title} img={img} description={description} />}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10 px-5 md:px-10 lg:px-20">
                {
                    items.map((item,idx) => <MenuCard key={idx} item={item}></MenuCard>)
                }
            </div>
            <div className="flex justify-center mb-10">
                <Link to={`/our-shop/${id}`}>
                    <button className="btn bg-transparent border-0 border-b-2 border-[#151515] uppercase">{btnTxt}</button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;
MenuCategory.propTypes = {
    items: PropTypes.array,
    btnTxt: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    img: PropTypes.any,
    id:PropTypes.number
}