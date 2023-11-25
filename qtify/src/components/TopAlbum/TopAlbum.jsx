import React from 'react';
import axios from "axios";
import { useEffect, useState } from 'react';
import Card from '../Card/Card'
import Grid from '@mui/system/Unstable_Grid/Grid';
import styles from '../TopAlbum/TopAlbum.module.css'

const fetchAlbum = async () => {
    try {
      const response = await axios.get("https://qtify-backend-labs.crio.do/albums/top");
  
      console.log(response)
      return response.data;
  
    } catch (error) {
      console.log(error)
    }
  }

function TopAlbum() {

const [result, setResult] = useState([]);

useEffect(() => { 
    const fetchData = async () => {
    const res = await fetchAlbum();
    setResult(res);
    }

    fetchData();
},[])

  return (
    <div>
        <div className={styles.titleWrapper}>
        <div>
        <h3>Top Albums</h3>
        </div>
        <div>
            <a href='.' className={styles.btn}>Collapse</a>
        </div>
        </div>
        <div className={styles.gridWrapper}>
            <Grid container columnSpacing={1} rowSpacing={2}>
        {result.map((cardData) => (
            <Grid item md={2}>
            <Card key={cardData.id} result={cardData} type="album"/>
            </Grid>
        ))}
        </Grid>
        </div>
    </div>
  )
}

export default TopAlbum