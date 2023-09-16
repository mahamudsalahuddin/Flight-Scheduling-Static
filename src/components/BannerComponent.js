import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import BannerBottomComponent from './BannerBottomComponent'

const BannerComponent = () => {
  return (
    <Box className='banner'
    sx={{
      position:"relative"
    }}>
    <Container sx={{
        height: 400
    }}>
        <Typography variant="h3" sx={{
            paddingTop:6,
            color:"#fff"
        }}>Let's make your adventure!</Typography>
        {/* <div className="bottomBanner"></div> */}
        <BannerBottomComponent/>
    </Container>
    </Box>
  )
}

export default BannerComponent