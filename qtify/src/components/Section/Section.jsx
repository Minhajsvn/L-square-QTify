import React, { useEffect } from 'react';
import { CircularProgress } from '@mui/material';
import { useState } from 'react';
import Card from '../Card/Card'
import styles from '../Section/Section.module.css';
import Carousel from '../Carousel/Carousel';
import Filter from '../Filter/Filter';


function Section({ title, data, filterSource, type}) {

  const [filters, setFilters] = useState([{key:"all", label:"All"}]);
  const [selectedFilterIndex, setSelectedFilterIndex] = useState(0);
  const [carouselToggle, setCarouselToggle] = useState(true);

  useEffect(() => {
    if(filterSource){
      filterSource().then((response) => {
        const {data} = response;
        setFilters([...filters, ...data]);

      })
    }
  },[]);

  const showFilters = filters.length > 1;
  const cardsToRender = data.filter((card) => 
    showFilters && selectedFilterIndex !== 0
    ? card.genre.key === filters[selectedFilterIndex].key: card
  )
  
  const handleToggle = () => {
    setCarouselToggle((prevState) => !prevState)
  }

  return (
    <div>
        <div className={styles.titleWrapper}>
          <div>
            <h3>{title}</h3>
          </div>
          {!showFilters && (
            <div onClick={handleToggle} className={styles.toggleText}>
              {!carouselToggle ? "Collapse All" : "Show All"}
            </div>
          )}
        </div>
          {showFilters && (
            <div className={styles.filterWrapper}>
              <Filter 
                filters={filters}
                selectedFilterIndex={selectedFilterIndex}
                setSelectedFilterIndex={setSelectedFilterIndex}
              />
            </div>
          )}
          {data.length === 0 ? 
          (
            <CircularProgress />
          ) :(
            <div className={styles.cardWrapper}>
              {!carouselToggle ? 
              (<div 
                  className={styles.wrapper}>
                   {cardsToRender.map((cardData) => (
                      <Card key={cardData.id} data={cardData} type={type}/>
                  ))}
                </div>  
              ) :(
                <Carousel 
                  data={cardsToRender}
                  renderComponent={(data) => <Card data={data} type={type}/>}
                />
              )}
            </div>
            
          )}
    </div>
  )
}

export default Section;