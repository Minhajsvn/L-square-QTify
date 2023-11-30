import { Tab, Tabs, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react';
import styles from './Filter.module.css'

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

function Filter({ filters, selectedFilterIndex, setSelectedFilterIndex}) {
    const handleChange = (event, newValue) => {
        setSelectedFilterIndex(newValue);
    }


    function a11yProps(index){
        return {
            id: `simple-tab-${index}`,
            "aria-controls": `simple-tabpanel-${index}`
        }
    }

  return (
    <div>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs 
                value={selectedFilterIndex} 
                onChange={handleChange} 
                aria-label="basic tabs example"
                TabIndicatorProps={{ 
                    style:{
                        backgroundColor:"var(--primary-color)",
                    },
                 }}
                >
                    {filters.map((ele, index) => 
                        <Tab className={styles.tab} label={ele.label} {...a11yProps(index)} />
                    )}
                
            </Tabs>
        </Box>
    </div>
  )
}

export default Filter