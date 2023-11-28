import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { StyledEngineProvider } from '@mui/system';
import { fetchTopAlbums, fetchNewAlbums } from './api/api';


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

  }, [])

  const { topAlbums= [], newAlbums= []} = data;

  return (
    <>
    <StyledEngineProvider>
        <Navbar />
        <Outlet context={{data: {topAlbums, newAlbums}}}/>
    </StyledEngineProvider>
    </>
  )
}


