import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const PaymentHistory = () => {
    const {user}= useAuth()
    const axiosSecure = useAxiosSecure()
    const {data: payments} = useQuery({
        queryKey:['payments'],
        queryFn: async()=>{
            const res = await axiosSecure(`/payments?email=${user?.email}`)
            return res.data
        }
    })
    console.log(payments);
    return (
        <div>
            <SectionTitle subHeading="At a Glance" heading="Payment History"/>
            <div className="bg-white md:p-5 lg:mx-10">
                <div className="font-cinzel flex justify-between">
                    <h3 className="lg:text-3xl font-bold">Total Payment: {payments?.length}</h3>
                </div>
                <div>
                    <div className="overflow-x-auto mt-6 rounded-t-2xl">
                        <table className="table">
                            {/* head */}
                            <thead className="bg-[#D1A054]">
                                <tr className="uppercase">
                                    <th>No.</th>
                                    <th>Email</th>
                                    <th>Status</th>
                                    <th>Total Price</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    payments?.map((payment, idx) => <tr key={idx}>
                                        <td>{idx + 1}</td>
                                        <td className="font-medium">{payment.email}</td>
                                        <td>{payment.status}</td>
                                        <td>{payment.price}</td>
                                        <td>{payment.date}</td>

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

export default PaymentHistory;