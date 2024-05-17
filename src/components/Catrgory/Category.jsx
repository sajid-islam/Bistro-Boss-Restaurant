import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import slide1 from '../../assets/home/slide1.jpg'
import slide2 from '../../assets/home/slide2.jpg'
import slide3 from '../../assets/home/slide3.jpg'
import slide4 from '../../assets/home/slide4.jpg'
import slide5 from '../../assets/home/slide5.jpg'
import SectionTitle from '../SectionTitle/SectionTitle';

const Category = () => {
    return (
        <section className='my-10'>
            <SectionTitle subHeading={'From 11.00am to 10.00pm'} heading={'order online'}/>
            <Swiper
                slidesPerView={4}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper px-20"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h3 className="text-xl md:text-3xl font-cinzel text-white text-center relative bottom-10 md:bottom-14 uppercase ">Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h3 className="text-xl md:text-3xl font-cinzel text-white text-center relative bottom-10 md:bottom-14 uppercase ">Pizzas</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h3 className="text-xl md:text-3xl font-cinzel text-white text-center relative bottom-10 md:bottom-14 uppercase ">soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h3 className="text-xl md:text-3xl font-cinzel text-white text-center relative bottom-10 md:bottom-14 uppercase ">Desserts</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h3 className="text-xl md:text-3xl font-cinzel text-white text-center relative bottom-10 md:bottom-14 uppercase ">Salads</h3>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Category;