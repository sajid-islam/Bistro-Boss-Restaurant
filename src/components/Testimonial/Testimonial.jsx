import SectionTitle from "../SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonial = () => {
    const { data: reviews, isPending } = useQuery({
        queryKey: ["reviews"],
        queryFn: async () => {
            const res = await axios(
                "https://bistro-boss-server1.vercel.app/reviews"
            );
            return res.data;
        },
    });
    if (isPending) {
        return (
            <div className="flex justify-center items-center w-full h-screen">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        );
    }
    return (
        <section className="mx-5 md:mx-12 lg:w-1/2 lg:mx-auto mb-10">
            <SectionTitle
                subHeading={"What Our Clint Say"}
                heading={"Testimonial"}
            />
            <div>
                <Swiper
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    className="mySwiper"
                >
                    {!reviews ? (
                        <></>
                    ) : (
                        reviews.map((review) => (
                            <SwiperSlide key={review._id}>
                                <div className="flex flex-col text-center space-y-3 items-center py-5">
                                    <div>
                                        <Rating
                                            style={{ maxWidth: 180 }}
                                            value={3}
                                            readOnly
                                        />
                                    </div>
                                    <div>
                                        <FaQuoteLeft size={60} />
                                    </div>
                                    <p className="text-[#444444]">
                                        {review.details}
                                    </p>
                                    <h3 className="text-2xl text-[#CD9003] uppercase">
                                        {review.name}
                                    </h3>
                                </div>
                            </SwiperSlide>
                        ))
                    )}
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonial;
