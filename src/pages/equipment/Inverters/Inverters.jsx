import React from 'react'
import InverterBanner from '../../../assets/equipments/inverters/Inverter.jpg';
import inverter3KImage1 from "../../../assets/equipments/inverters/5kw-sg04.webp";
import inverter3KImage2 from "../../../assets/equipments/inverters/5kw-sg04 (3).webp";
import inverter5KImage3 from "../../../assets/equipments/inverters/5kw-sg04 (2).webp";
import LPUSImage1 from "../../../assets/equipments/inverters/sun-8k-1.webp";
import ThreePhaseImage1 from "../../../assets/equipments/inverters/sun-8-12k-1.webp";
import ThreePhaseImage2 from "../../../assets/equipments/inverters/sun-8-12k-2.webp";
import BannerGallery from '../../../components/BannerGallery/BannerGallery';
import Banner from '../../../components/banner/Banner';

const banners = [
  { id: 1, imageUrl: inverter3KImage1, title: 'Hybrid Inverter SUN - 3K', link: 'https://example.com/page1' },
  { id: 2, imageUrl: inverter3KImage2, title: 'Hybrid Inverter SUN - 5K', link: 'https://example.com/page2' },
  { id: 3, imageUrl: inverter5KImage3, title: 'Hybrid Inverter SUN - 6K', link: 'https://example.com/page3' },
  { id: 4, imageUrl: LPUSImage1, title: 'Hybrid Inverter SUN - 8K', link: 'https://example.com/page4' },
  { id: 5, imageUrl: ThreePhaseImage1, title: 'Three Phase Hybrid Inverter - SUN - 10K', link: 'https://example.com/page5' },
  { id: 6, imageUrl: ThreePhaseImage2, title: 'Three Phase Hybrid Inverter - SUN - 12K', link: 'https://example.com/page6' }
];

const Inverters = () => {
    console.log('Rendering Inverters');
  return (
    <div>
        <div className='inv-ban-wrap'>
          <Banner title={'Inverters'} image={InverterBanner} />
        </div>
        <BannerGallery banners={banners} type={'inverter'} />
    </div>
  )
}


export default Inverters
