import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useLocation } from "react-router-dom";

const UpdateItem = () => {
    const axiosSecure = useAxiosSecure()
    const axiosPublic = useAxiosPublic()
    const { pathname } = useLocation()
    const id = pathname.split("/")[3]
    const { data: item = [],refetch } = useQuery({
        queryKey: ['item'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/menu/${id}`)
            return res.data
        }
    })
    const { register, handleSubmit, reset } = useForm()
    const onSubmit = async (data) => {

        const menuItem = {
            name: data.name,
            recipe: data.details,
            category: data.category,
            price: parseFloat(data.price)
        }
        try {
            const menuRes = await axiosSecure.patch(`/menu/${id}`, menuItem)
            if (menuRes.data.modifiedCount > 0) {
                refetch()
                reset()
                toast.success(`${data.name} Updated`)
                console.log(menuRes.data);
            }
        }
        catch (error) {
            toast.error(`Error Updating ${data.name}: ${error.message}`)
        }
    }
    return (
        <div>
            <SectionTitle heading={'update item'} />
            <div className="bg-white md:p-5 lg:mx-10">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    {/* Recipe name row */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Recipe Name *</span>
                        </label>
                        <input
                            defaultValue={item.name}
                            {...register('name', { required: true })}
                            type="text" placeholder="recipe name"
                            className="input input-bordered" />
                    </div>
                    {/* Category & Price row*/}
                    <div className='grid lg:grid-cols-2 gap-3'>
                        {/* C1 */}
                        <div>
                            <label className="label">
                                <span className="label-text font-semibold">Category *</span>
                            </label>
                            <select defaultValue={item.category} {...register('category', { required: true })} className="select select-bordered w-full">
                                <option disabled value="default">Select a category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Dessert</option>
                                <option value="drink">Drink</option>
                            </select>
                        </div>
                        {/* C2 */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Price *</span>
                            </label>
                            <input
                                defaultValue={item.price}
                                {...register('price', { required: true })}
                                type="number" min="0" step="0.01"
                                placeholder="price"
                                className="input input-bordered" />
                        </div>
                    </div>

                    {/* Recipe details row */}
                    <div>
                        <label className="label">
                            <span className="label-text font-semibold">Recipe Details *</span>
                        </label>
                        <textarea
                            defaultValue={item.recipe}
                            {...register('details', { required: true })}
                            rows={4}
                            className="textarea textarea-bordered w-full"
                            placeholder="Recipe Details"></textarea>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn w-fit text-white bg-gradient-to-tr from-[#835D23] to-[#B58130]">Update Item <GiForkKnifeSpoon /> </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateItem;