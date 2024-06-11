import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AdminHome = () => {
    const axiosSecure = useAxiosSecure()
    const { data: stats = [] } = useQuery({
        queryKey: ['stats'],
        queryFn: async () => {
            const res = await axiosSecure('/admin-stats')
            return res.data
        }
    })
    return (
        <div>
            <h2 className="text-4xl">HI, Welcome</h2>
            <div className="lg:flex justify-between gap-6 mt-10 space-y-5 lg:space-y-0">
                <div className="border py-10 w-full rounded-md text-center bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF] text-white">
                    <p className="text-4xl font-bold">{stats.revenue}</p>
                    <p className="text-2xl">Revenue</p>
                </div>
                <div className="border py-10 w-full rounded-md text-center bg-gradient-to-r from-[#D3A256] to-[#FDE8C0] text-white">
                    <p className="text-4xl font-bold">{stats.users}</p>
                    <p className="text-2xl">Customers</p>
                </div>
                <div className="border py-10 w-full rounded-md text-center bg-gradient-to-r from-[#FE4880] to-[#FECDE9] text-white">
                    <p className="text-4xl font-bold">{stats.menus}</p>
                    <p className="text-2xl">Product</p>
                </div>
                <div className="border py-10 w-full rounded-md text-center bg-gradient-to-r from-[#6AAEFF] to-[#B6F7FF] text-white">
                    <p className="text-4xl font-bold">{stats.orders}</p>
                    <p className="text-2xl">Order</p>
                </div>


            </div>
        </div>
    );
};

export default AdminHome;