import React from 'react';
import { useState, useEffect } from 'react';
import { useSwiper, useSwiperSlide } from 'swiper/react';
import styles from './CarouselLeftNavigation.module.css';
import {ReactComponent as LeftArrow} from '../../../assets/leftArrow.svg';

export default function CarouselLeftNavigation(){
    const swiper = useSwiper();
    const [isBeginning, SetIsBeginning] = useState(swiper.isBeginning);

    useEffect(() => {
        swiper.on("slideChange", function(){
            SetIsBeginning(swiper.isBeginning)
        })
    },[])
    
    return (
    <div className={styles.leftNavigation}>
        {!isBeginning && <LeftArrow onClick={() => swiper.slidePrev()} />}
    </div>
    )
}

