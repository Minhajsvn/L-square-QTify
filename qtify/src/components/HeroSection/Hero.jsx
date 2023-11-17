import React from 'react'
import Headphone from '../../assets/vibratingHeadphone.png';
import styles from '../HeroSection/Hero.module.css';


function Hero() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.textWrapper}>
        <h4 className={styles.heroText}>100 Thousand Songs, ad-free</h4>
        <h4 className={styles.heroText}>Over thousands podcast episodes</h4>
      </div>
      <img className={styles.img} src={Headphone} alt="vibrating headphone" />
    </div>
  )
}

export default Hero