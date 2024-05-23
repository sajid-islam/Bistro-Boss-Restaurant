import PropTypes from 'prop-types'

const FoodsCard = ({ items }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10'>
            {
                items.map(item =>
                    <div key={item._id} className="card  bg-[#F3F3F3]  rounded-none ">
                        <figure><img src={item.image} alt={item.name} className='w-full' /></figure>
                        <div className="card-body text-center">
                            <h2 className="text-2xl font-semibold">{item.name}</h2>
                            <p className='text-[#737373]'>{item.recipe}</p>
                            <div className="card-actions justify-center mt-2">
                                <button className="py-2 px-4 rounded-lg bg-[#E8E8E8] border-0 border-b-2 border-[#BB8506] text-[#BB8506] hover:bg-[#111827]">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default FoodsCard;
FoodsCard.propTypes = {
    items: PropTypes.array
}