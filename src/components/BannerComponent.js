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
        height: { xs: "700px", sm: "620px", md: 400 },
    }}>
        <Typography variant="h3" sx={{
            paddingTop:6,
            color:"#fff"
        }}>Let's make your adventure!</Typography>
        <BannerBottomComponent/>
    </Container>
    </Box>
  )
}

export default BannerComponent