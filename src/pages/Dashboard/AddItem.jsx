import { useForm } from 'react-hook-form';
import SectionTitle from './../../components/SectionTitle/SectionTitle';
import { GiForkKnifeSpoon } from 'react-icons/gi';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import toast from 'react-hot-toast';
import axios from 'axios';

const imageHostingApiKey = import.meta.env.VITE_IMAGE_HOSTING_APIKEY
const AddItem = () => {
    const axiosSecure = useAxiosSecure()
    const { register, handleSubmit ,reset} = useForm()
    const onSubmit = async (data) => {
        try {
            const imageFile = { image: data.image[0] }
            const res = await axios.post(`https://api.imgbb.com/1/upload?key=${imageHostingApiKey}`, imageFile,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            )
            if (res.data.success) {
                const menuItem = {
                    name: data.name,
                    recipe: data.details,
                    image: res.data.data.display_url,
                    category: data.category,
                    price: parseFloat(data.price)
                }
                try {
                    const menuRes = await axiosSecure.post('/menu', menuItem)
                    if (menuRes.data.insertedId) {
                        reset()
                        toast.success(`${data.name} Added`)
                    }
                }
                catch (error) {
                    toast.error(`Error adding ${data.name}: ${error.message}`)
                }
            }
        }
        catch (error) {
            toast.error(`Error uploading image: ${error.message}`);
        }

    }
    return (
        <div>
            <SectionTitle subHeading="What's new" heading="Add an item" />
            <div className="bg-white md:p-5 lg:mx-10">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    {/* Recipe name row */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Recipe Name *</span>
                        </label>
                        <input {...register('name', { required: true })} type="text" placeholder="recipe name" className="input input-bordered" />
                    </div>
                    {/* Category & Price row*/}
                    <div className='grid lg:grid-cols-2 gap-3'>
                        {/* C1 */}
                        <div>
                            <label className="label">
                                <span className="label-text font-semibold">Category *</span>
                            </label>
                            <select defaultValue="default" {...register('category', { required: true })} className="select select-bordered w-full">
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
                            <input {...register('price', { required: true })} type="number" min="0" step="0.01" placeholder="price" className="input input-bordered" />
                        </div>
                    </div>

                    {/* Recipe details row */}
                    <div>
                        <label className="label">
                            <span className="label-text font-semibold">Recipe Details *</span>
                        </label>
                        <textarea {...register('details', { required: true })} rows={4} className="textarea textarea-bordered w-full" placeholder="Recipe Details"></textarea>
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text font-semibold">Recipe Image *</span>
                        </label>
                        <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs file:border-0 file:bg-[#E8E8E8] file:text-black" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn w-fit text-white bg-gradient-to-tr from-[#835D23] to-[#B58130]">Add Item <GiForkKnifeSpoon /> </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddItem;