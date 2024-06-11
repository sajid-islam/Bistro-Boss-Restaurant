
import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useItemCart = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()

    //Get Cart from database
    const { data: cartItem = [], refetch,isPending } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/cart?email=${user?.email}`)
            return res.data

        }
    })

    return { cartItem, refetch,isPending }
};

export default useItemCart;