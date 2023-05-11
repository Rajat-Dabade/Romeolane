import React from 'react'
import { Box, ImageList, ImageListItem } from '@mui/material'

import Header from '../../element/header/Header'
import MakeAppointment from '../make-appointment/MakeAppointment'
import Footer from '../footer/Footer'

import { galleryImageData } from '../../data/galleryImageData'
import GalleryImg from '../../assets/aboutHero.jpg'

import './Gallery.css'

const Gallery = () => {
  return (
    <div className="Gallery">
      <div className="Gallery__header">
        <Header
          backgroundImage={GalleryImg}
          heading="Gallery"
        />
      </div>
      <div className="Gallery__content">
        <Box>
          <ImageList variant="woven" gap={20} sx={{ width: '90%', height: 'auto' }} cols={3} >
            {galleryImageData.map((image, index) => (
              <ImageListItem key={index}>
                <img src={image} alt="Gallery" loading="lazy" />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </div>
      <MakeAppointment />
      <Footer />
    </div>
  )
}

export default Gallery
