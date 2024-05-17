import PropTypes from 'prop-types'
const MenuCard = ({item}) => {
    return (
        <div className='flex gap-6 '>
            <div>
                <img className='w-[118px] h-10 md:h-24 object-cover rounded-tr-[200px] rounded-b-[200px]' src={item.image} alt="" />
            </div>
            <div className='space-y-3'>
                <h5 className="md:text-xl font-cinzel uppercase text-[#151515]">{item.name}</h5>
                <p className="text-[#737373] text-xs md:text-[14px] ">{item.recipe}</p>
            </div>
            <div>
                <p className='text-[#BB8506]'>${item.price}</p>
            </div>
        </div>
    );
};

export default MenuCard;
MenuCard.propTypes={
    item:PropTypes.object,
}