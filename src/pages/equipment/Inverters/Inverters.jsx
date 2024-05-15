import React from 'react'

import image1 from '../../../assets/equipments/inverters.png';
import BannerGallery from '../../../components/BannerGallery/BannerGallery';

const banners = [
  { id: 1, imageUrl: image1, title: 'Hybrid Inverter SUN - 3K', link: 'https://example.com/page1' },
  { id: 2, imageUrl: image1, title: 'Hybrid Inverter SUN - 5K', link: 'https://example.com/page2' },
  { id: 3, imageUrl: image1, title: 'Hybrid Inverter SUN - 6K', link: 'https://example.com/page3' },
  { id: 4, imageUrl: image1, title: 'Hybrid Inverter SUN - 8K', link: 'https://example.com/page4' },
  { id: 5, imageUrl: image1, title: 'Three Phase Hybrid Inverter - SUN - 10K', link: 'https://example.com/page5' },
  { id: 6, imageUrl: image1, title: 'Three Phase Hybrid Inverter - SUN - 12K', link: 'https://example.com/page6' }
];

const Inverters = () => {
    console.log('Rendering Inverters');
  return (
    <div>
        <h1>Inverters</h1>
        <BannerGallery banners={banners} />
    </div>
  )
}

export default Inverters