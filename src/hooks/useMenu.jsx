import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useMenu = () => {
    const { data: items, isPending } = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
            const res = await axios('menu.json')
            return res.data
        }
    })
    return {items,isPending}
};

export default useMenu;