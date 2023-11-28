import React from 'react';
import { CircularProgress } from '@mui/material';
import { useState } from 'react';
import Card from '../Card/Card'
import styles from '../Section/Section.module.css';
import Carousel from '../Carousel/Carousel';



function Section({ title, data, type}) {

  const [carouselToggle, setCarouselToggle] = useState(true)

  const handleToggle = () => {
    setCarouselToggle((prevState) => !prevState)
  }

// useEffect(() => { 
//     const fetchData = async () => {
//     const res = await fetchTopAlbum();
//     setResult(res);
//     }

//     fetchData();
// },[])

  return (
    <div>
        <div className={styles.titleWrapper}>
          <div>
            <h3>{title}</h3>
          </div>
          <div onClick={handleToggle} className={styles.toggleText}>
              {!carouselToggle ? "Collapse All" : "Show All"}
              {/* <a href='.' className={styles.btn}>Collapse</a>  */}
          </div>
        </div>
          {data.length === 0 ? 
          (
            <CircularProgress />
          ) :(
            <div className={styles.cardWrapper}>
              {!carouselToggle ? 
              (<div 
                  className={styles.wrapper}>
                   {data.map((cardData) => (
                      <Card key={cardData.id} data={cardData} type={type}/>
                  ))}
                </div>  
              ) :(
                <Carousel 
                  data={data}
                  renderComponent={(data) => <Card data={data} type={type}/>}
                />
              )}
            </div>
            
          )}
    </div>
  )
}

export default Section;