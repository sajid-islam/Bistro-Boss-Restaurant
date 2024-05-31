import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { MdDeleteOutline } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi2";
import Swal from "sweetalert2";

const AllUsers = () => {
    const axiosSecure = useAxiosSecure()
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data
        }
    })

    const handleSetAdmin = user => {
        Swal.fire({
            title: "Are you sure?",
            text: `You won't be set admin to ${user.name}`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Set Admin"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/users/admin/${user._id}`)
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: `${user.name} is admin now`,
                                text: "The user is admin now",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    const handleDeleteUser = id => {
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
                axiosSecure.delete(`/users/${id}`)
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
            <SectionTitle subHeading="Manage all users" heading="How Many?" />
            <div className="bg-white md:p-5 lg:mx-10">
                <div className="font-cinzel flex justify-between">
                    <h3 className="lg:text-3xl font-bold">Total Order: {users?.length}</h3>
                </div>
                <div>
                    <div className="overflow-x-auto mt-6 rounded-t-2xl">
                        <table className="table">
                            {/* head */}
                            <thead className="bg-[#D1A054]">
                                <tr className="uppercase">
                                    <th>No.</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    users.map((user, idx) => <tr key={idx}>
                                        <td>{idx + 1}</td>
                                        <td className="font-medium">{user.name}</td>
                                        <td className="font-medium">{user.email}</td>
                                        {/* Role */}
                                        <td>
                                            {user.role === 'admin'? "Admin" :<button
                                                onClick={() => handleSetAdmin(user)}
                                                className="btn bg-[#D1A054] text-white hover:bg-[#D1A054] btn-xs">
                                                <HiUserGroup size={20} />
                                            </button>}
                                        </td>
                                        {/* Delete Button */}
                                        <td>
                                            <button
                                                onClick={() => handleDeleteUser(user._id)}
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

export default AllUsers;