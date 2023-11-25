import React from "react";
import styles from './Card.module.css';
import { Tooltip, Chip } from "@mui/material";


function Card({result, type}){
    const getCard = (type) => {     
        switch (type) {
            case "album" : {
                const { image, follows, title, slug, songs} = result;
                
                return (
                <Tooltip title={`${songs.length}`} placement="top" arrow>
                    <div className={styles.wrapper}>
                        <a href={`/album/${slug}`}>
                            <div className={styles.card}>
                            <img className={styles.img} src={image} alt="" />
                                <div className={styles.banner}>
                                    <Chip className={styles.chip} label={`${follows} Followers`} size="small" />
                                </div>
                            </div>
                            <div className={styles.titleWrapper}>
                                <p>{title}</p>
                            </div>
                        </a>
                    </div>
                </Tooltip>
                )
            }
            case "song" : {
                const { image, likes, title} = result;
                            
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