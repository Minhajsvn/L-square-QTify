import React, { useEffect } from 'react';
import styles from '../Carousel/Carousel.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSwiper } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import CarouselLeftNavigation from '../Carousel/CarouselLeftNavigation/CarouselLeftNavigation';
import CarouselRightNavigation from '../Carousel/CarouselRightNavigation/CarouselRightNavigation'
import 'swiper/css';


const Controls = ({ data }) => {
    const swiper = useSwiper();

    useEffect(() => {
        swiper.slideTo(0, 1);
    },[data]);

    return <></>
}

function Carousel({ data, renderComponent }){

    return (
        <div className={styles.wrapper}>
            <Swiper
                style={{ padding: "0px 20px" }}
                initialSlide={0}
                modules={[Navigation]}
                slidesPerView={7}
                spaceBetween={40}
                allowTouchMove
            >
                <Controls data={data} />
                <CarouselLeftNavigation />
                <CarouselRightNavigation/>
                {data.map((ele) => (
                    <SwiperSlide>{ renderComponent(ele) }</SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Carousel;