import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { StyledEngineProvider } from '@mui/system';
import { fetchTopAlbums, fetchNewAlbums, fetchSongs } from './api/api';


export default function App() {
  const [data, setData] = useState({})
  const generateData = (key, source) => {
    source().then((data) =>{
      setData((prevState) => {
        return  {...prevState, [key]: data }
      })
    })
  }

  useEffect(() => {
    generateData("topAlbums", fetchTopAlbums);
    generateData("newAlbums", fetchNewAlbums);
    generateData("songs", fetchSongs);


  }, [])

  const { topAlbums= [], newAlbums= [], songs=[]} = data;

  return (
    <>
    <StyledEngineProvider injectFirst>
        <Navbar />
        <Outlet context={{data: {topAlbums, newAlbums, songs}}}/>
    </StyledEngineProvider>
    </>
  )
}


