import PropTypes from 'prop-types'
import useAxiosSecure from './../hooks/useAxiosSecure';
import useAuth from '../hooks/useAuth';
import Swal from 'sweetalert2'
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import useItemCart from '../hooks/useItemCart';

const FoodsCard = ({ items }) => {
    const {refetch}=useItemCart()
    const { user } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const axiosSecure = useAxiosSecure()
    const handleAddToCart = (food) => {
        if (user && user.email) {
            //send food item to database
            const addedItem = {
                foodId: food._id,
                name:food.name,
                image:food.image,
                price:food.price,
                email: user?.email
            }
            axiosSecure.post('/cart', addedItem)
                .then(res => {
                    if (res.data.insertedId) {
                        toast.success(`${food.name} Added to cart`)
                        refetch()
                    }
                })
                .catch(error => {
                    console.error(error)
                    toast.error(error.message)
                })
        }
        else {
            Swal.fire({
                title: "Your are not logged in ",
                text: "Login in first then add to cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    }
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
                                <button
                                    onClick={() => handleAddToCart(item)}
                                    className="py-2 px-4 rounded-lg bg-[#E8E8E8] border-0 border-b-2 border-[#BB8506] text-[#BB8506] hover:bg-[#111827]">
                                    Add to Cart
                                </button>
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