import Swal from "sweetalert2";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useItemCart from "../../hooks/useItemCart";
import { MdDeleteOutline } from "react-icons/md";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Cart = () => {
    const { cartItem, refetch } = useItemCart()
    const totalPrice = cartItem.reduce((acc, item) => acc + item.price, 0);
    const axiosSecure = useAxiosSecure()

    const handleDeleteItem = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/cart/${id}`)
                    .then(res => {
                        if (res.data.deletedCount) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    return (
        <div className="">
            <SectionTitle subHeading={'My Cart'} heading={'wanna add more'} />
            <div className="bg-white md:p-5 lg:mx-10">
                <div className="font-cinzel flex justify-between">
                    <h3 className="lg:text-3xl font-bold">Total Order: {cartItem?.length}</h3>
                    <h3 className="lg:text-3xl font-bold">Total Price: {totalPrice}</h3>
                    <button className="btn bg-[#D1A054] text-white">Pay</button>
                </div>
                <div>
                    <div className="overflow-x-auto mt-6 rounded-t-2xl">
                        <table className="table">
                            {/* head */}
                            <thead className="bg-[#D1A054]">
                                <tr className="uppercase">
                                    <th>No.</th>
                                    <th>Item Image</th>
                                    <th>Item Name</th>
                                    <th>Price</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    cartItem.map((item, idx) => <tr key={idx}>
                                        <td>{idx + 1}</td>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="font-medium">{item.name}</td>
                                        <td>{item.price}</td>
                                        <th>
                                            <button
                                                onClick={() => handleDeleteItem(item._id)}
                                                className="btn bg-[#B91C1C] text-white hover:bg-red-600 btn-xs">
                                                <MdDeleteOutline size={20} />
                                            </button>
                                        </th>
                                    </tr>)
                                }

                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;