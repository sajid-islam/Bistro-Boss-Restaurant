import { MdDeleteOutline } from "react-icons/md";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useMenu from "../../hooks/useMenu";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";

const ManageItem = () => {
    const { items, refetch } = useMenu()
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
                axiosSecure.delete(`/menu/${id}`)
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
        <div>
            <SectionTitle subHeading={'Harry up'} heading={'Manage all items'} />
            <div className="bg-white md:p-5 lg:mx-10">
                <div className="font-cinzel flex justify-between">
                    <h3 className="lg:text-3xl font-bold">Total Order: {items?.length}</h3>
                </div>
                <div>
                    <div className="overflow-x-auto mt-6 rounded-t-2xl">
                        <table className="table">
                            {/* head */}
                            <thead className="bg-[#D1A054]">
                                <tr className="uppercase">
                                    <th>No.</th>
                                    <th>Item image</th>
                                    <th>Name</th>
                                    <th>price</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    items.map((item, idx) => <tr key={idx}>
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
                                        <td className="font-medium">{item.price}</td>
                                        {/* Update Button */}
                                        <td>
                                            {item.role === 'admin' ? "Admin" : <Link to={`/dashboard/updateItem/${item._id}`}
                                                // onClick={() => handleSetAdmin(user)}
                                                className="btn bg-[#D1A054] text-white hover:bg-[#D1A054] btn-xs">
                                                <FiEdit size={20} />
                                            </Link >}
                                        </td>
                                        {/* Delete Button */}
                                        <td>
                                            <button
                                                onClick={() => handleDeleteItem(item._id)}
                                                className="btn bg-[#B91C1C] text-white hover:bg-red-600 btn-xs">
                                                <MdDeleteOutline size={20} />
                                            </button>
                                        </td>
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

export default ManageItem;