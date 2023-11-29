import React from "react";
import styles from './Card.module.css';
import { Tooltip, Chip } from "@mui/material";
import { Link } from "react-router-dom";


function Card({data, type}){
    const getCard = (type) => {     
        switch (type) {
            case "album" : {
                const { image, follows, title, slug, songs} = data;
                
                return (
                <Tooltip title={`${songs.length}`} placement="top" arrow>
                    <div className={styles.wrapper}>
                        <Link to={`/album/${slug}`} className={styles.link}>
                            <div className={styles.card}>
                              <img className={styles.img} src={image} alt="" />
                                <div className={styles.banner}>
                                    <Chip className={styles.chip} label={`${follows} Followers`} size="small" />
                                </div>
                            </div>
                            <div className={styles.titleWrapper}>
                                <p>{title}</p>
                            </div>
                        </Link>
                    </div>
                </Tooltip>
                )
            }
            case "song" : {
                const { image, likes, title} = data;
                            
                return (
                    <div className={styles.wrapper}>
                        <div className={styles.card}>
                            <img className={styles.img} src={image} alt="" />
                                <div className={styles.banner}>
                                    <Chip className={styles.chip} label={`${likes} Likes`} size="small" />
                                </div>
                            </div>
                            <div className={styles.titleWrapper}>
                                <p>{title}</p>
                            </div>
                    </div>
                )
            }
            default : 
                    return <></>;
        } 
    }

    return getCard(type);
}

export default Card;