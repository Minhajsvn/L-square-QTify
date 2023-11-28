import React from 'react';
import { useState, useEffect } from 'react';
import { useSwiper, useSwiperSlide } from 'swiper/react';
import styles from './CarouselRightNavigation.module.css';
import {ReactComponent as RightArrow} from '../../../assets/rightArrow.svg';

export default function CarouselRightNavigation(){
    const swiper = useSwiper();
    const [isEnd, SetIsEnd] = useState(swiper.isEnd);

    useEffect(() => {
        swiper.on("slideChange", function(){
            SetIsEnd(swiper.isEnd)
        })
    },  )

    return (
    <div className={styles.rightNavigation}>
        {!isEnd && <RightArrow onClick={() => swiper.slideNext()} />}
    </div>
    )
}

