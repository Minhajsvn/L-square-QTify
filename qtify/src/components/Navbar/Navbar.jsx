import React from  "react";
import Logo from '../Logo/Logo';
import Search from '../Search/Search';
import Button from '../Button/Button';
import styles from '../Navbar/Navbar.module.css'
import { Link } from "react-router-dom";

export default function Navbar(){

    return (
        <nav className={styles.navbar}>
            <Link to={"/"}>
                <Logo />
            </Link>
            <Search placeholder="Search a album of your choice" />
            <Button>Give Feedback</Button>
        </nav>
    )
}