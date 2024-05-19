import inverter3KImage1 from "../assets/equipments/inverters/5kw-sg04.webp";
import inverter3KImage2 from "../assets/equipments/inverters/5kw-sg04 (1).webp";
import inverter5KImage3 from "../assets/equipments/inverters/5kw-sg04 (2).webp";
import inverter5KImage4 from "../assets/equipments/inverters/5kw-sg04 (3).webp";
import inverter5KImage5 from "../assets/equipments/inverters/5kw-sg04 (4).webp";

const inverters = [
  {
    id: 1,
    name: "Hybrid Inverter SUN - 3K",
    description:
      "The Hybrid Inverter SUN - 3K is designed for high efficiency and reliable performance in residential solar power systems. With a maximum input power of 3900W and a wide input voltage range up to 500V, it ensures optimal energy conversion. Its compact, IP65-rated design allows for outdoor installation, and it operates quietly with noise levels below 30 dB.",
    images: [
      inverter3KImage1,
      inverter3KImage2,
      inverter5KImage3,
      inverter5KImage4,
      inverter5KImage5,
    ],
    specifications: {
      MaxInputPower: "3900W",
      MaxInputVoltage: "500V",
      MaxACInputOutputApparentPower: "3300VA",
      MaxEffiency: "97.6%",
      Noise: "< 30",
      IPRating: "IP 65",
      CabinetSize: "330×433×229",
      Weight: "17kg",
      TypeCooling: "Natural Cooling",
      Warranty: "5 Years/10 Years",
    },
  },
  {
    id: 2,
    name: "Hybrid Inverter SUN - 5K",
    description: "Description for Hybrid Inverter SUN - 5K",
    images: [
      "https://via.placeholder.com/600x400.png?text=Image+1",
      "https://via.placeholder.com/600x400.png?text=Image+2",
    ],
    specifications: {
      power: "5kW",
      voltage: "230V",
      // Add more specifications here
    },
  },
  // Add more inverters here
];

export default inverters;
