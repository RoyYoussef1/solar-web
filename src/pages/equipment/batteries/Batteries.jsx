import React from 'react'
import './BatteryPage.css'
import BannerGallery from '../../../components/BannerGallery/BannerGallery';

import battery1 from '../../../assets/equipments/batteries/200/1651037948917039110.webp'
import battery2 from '../../../assets/equipments/batteries/250-300/3-f121.webp'
import battery3 from '../../../assets/equipments/batteries/250-300/1-8a90.webp'
import battery4 from '../../../assets/equipments/batteries/350/4-bed8.webp'
import battery5 from '../../../assets/equipments/batteries/24100/1-a1ed.webp'
import BatteryBanner from '../../../assets/equipments/batteries/featured-image-solar-battery.webp'
import Banner from '../../../components/banner/Banner';

const banners = [
  { id: 5, imageUrl: battery5, title: 'LPBF24100', link: 'https://example.com/page5' },
  { id: 1, imageUrl: battery1, title: 'LPBA48200', link: 'https://example.com/page1' },
  { id: 2, imageUrl: battery2, title: 'LPBA48250', link: 'https://example.com/page2' },
  { id: 3, imageUrl: battery3, title: 'LPBA48300', link: 'https://example.com/page3' },
  { id: 4, imageUrl: battery4, title: 'LPBA48350', link: 'https://example.com/page4' },
];

const Batteries = () => {
    console.log('Rendering Batteries');
  return (
    <div>
        <div className='inv-ban-wrap'>
          <Banner title={'Batteries'} image={BatteryBanner} />
        </div>
        <BannerGallery banners={banners} type={'Batteries'} />
    </div>
  )
}


export default Batteries
