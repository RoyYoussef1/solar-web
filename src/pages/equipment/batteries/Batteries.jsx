import React from 'react'
import BannerGallery from '../../../components/BannerGallery/BannerGallery';

import battery1 from '../../../assets/equipments/batteries/200/1651037948917039110.webp'
import battery2 from '../../../assets/equipments/batteries/250-300/3-f121.webp'
import battery3 from '../../../assets/equipments/batteries/350/4-bed8.webp'
import battery4 from '../../../assets/equipments/batteries/24100/1-a1ed.webp'

const banners = [
  { id: 5, imageUrl: battery4, title: 'LPBF24100', link: 'https://example.com/page5' },
  { id: 1, imageUrl: battery1, title: 'LPBA48200', link: 'https://example.com/page1' },
  { id: 2, imageUrl: battery2, title: 'LPBA48250', link: 'https://example.com/page2' },
  { id: 3, imageUrl: battery2, title: 'LPBA48300', link: 'https://example.com/page3' },
  { id: 4, imageUrl: battery3, title: 'LPBA48350', link: 'https://example.com/page4' },
];

const Batteries = () => {
    console.log('Rendering Batteries');
  return (
    <div>
        <h1>Batteries</h1>
        <BannerGallery banners={banners} type={'Batteries'} />
    </div>
  )
}


export default Batteries
