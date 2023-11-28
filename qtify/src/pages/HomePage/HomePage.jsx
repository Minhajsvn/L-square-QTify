import React   from "react";
import { useOutletContext } from "react-router-dom";
import Hero from "../../components/HeroSection/Hero";
import Section from '../../components/Section/Section';
import styles from '../HomePage/HomePage.module.css'

function HomePage({props}){

    const { data } = useOutletContext();
    const {topAlbums, newAlbums} = data;

    return (
        <>
            <Hero/>
            <div className={styles.wrapper}>
                <Section title="Top Albums" data={topAlbums} type="album" />
                <Section title="New Albums" data={newAlbums} type="album" />
            </div>
        </>
    )
}

export default HomePage;