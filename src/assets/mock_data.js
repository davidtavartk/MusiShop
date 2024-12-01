import p1 from "./Product_imgs/p1.jpg";
import p2 from "./Product_imgs/p2.jpg";
import p3 from "./Product_imgs/p3.jpg";
import p4 from "./Product_imgs/p4.jpg";
import p5 from "./Product_imgs/p5.jpg";
import p6 from "./Product_imgs/p6.jpg";
import p7 from "./Product_imgs/p7.jpg";
import p8 from "./Product_imgs/p8.jpg";
import p9 from "./Product_imgs/p9.png";
import p10 from "./Product_imgs/p10.webp";
import p11 from "./Product_imgs/p11.jpg";
import p12 from "./Product_imgs/p12.webp";
import p13 from "./Product_imgs/p13.jpg";
import p14 from "./Product_imgs/p14.jpg";
import p15 from "./Product_imgs/p15.jpeg";
import p16 from "./Product_imgs/p16.jpg";
import p17 from "./Product_imgs/p17.webp";
import p18 from "./Product_imgs/p18.webp";
import p19 from "./Product_imgs/p19.jpg";
import p20 from "./Product_imgs/p20.jpg";
import p21 from "./Product_imgs/p21.jpg";
import p22 from "./Product_imgs/p22.jpg";
import p23 from "./Product_imgs/p23.webp";
import p24 from "./Product_imgs/p24.jpg";
import p25 from "./Product_imgs/p25.webp";
import p26 from "./Product_imgs/p26.webp";
import p27 from "./Product_imgs/p27.webp";
import p28 from "./Product_imgs/p28.jpg";
import p29 from "./Product_imgs/p29.jpg";
import p30 from "./Product_imgs/p30.webp";
import p31 from "./Product_imgs/p31.jpg";
import p32 from "./Product_imgs/p32.webp";
import p33 from "./Product_imgs/p33.webp";

const imagePaths = {
  p1,
  p2,
  p3,
  p4,
  p5,
  p6,
  p7,
  p8,
  p9,
  p10,
  p11,
  p12,
  p13,
  p14,
  p15,
  p16,
  p17,
  p18,
  p19,
  p20,
  p21,
  p22,
  p23,
  p24,
  p25,
  p26,
  p27,
  p28,
  p29,
  p30,
  p31,
  p32,
  p33,
};

const product_data = [
  {
    id: 1,
    name: "Gibson Electric Guitar",
    category: "guitar",
    image: imagePaths.p1,
    description:
      "A versatile electric guitar suitable for various music genres.",
    price: 599.99,
  },
  {
    id: 2,
    name: "Burst Fender Stratocaster",
    category: "guitar",
    image: imagePaths.p2,
    description:
      "A classic burst finish Fender Stratocaster with vintage tones.",
    price: 899.99,
  },
  {
    id: 3,
    name: "Precision Bass",
    category: "bass",
    image: imagePaths.p3,
    description: "A solid and reliable bass guitar for groovy basslines.",
    price: 449.99,
  },
  {
    id: 4,
    name: "Active PA Speaker System",
    category: "speaker",
    image: imagePaths.p4,
    description: "High-quality active speaker system for live performances.",
    price: 299.99,
  },
  {
    id: 5,
    name: "Guitar Pick Set (10-pack)",
    category: "accessories",
    image: imagePaths.p5,
    description: "A set of 10 durable guitar picks in assorted colors.",
    price: 9.99,
  },
  {
    id: 6,
    name: "Classic Acoustic Guitar",
    category: "guitar",
    image: imagePaths.p6,
    description: "A beautifully crafted acoustic guitar with warm tones.",
    price: 399.99,
  },
  {
    id: 7,
    name: "5-String Bass Guitar",
    category: "bass",
    image: imagePaths.p7,
    description:
      "Perfect for bassists who want extended range and versatility.",
    price: 549.99,
  },
  {
    id: 8,
    name: "Portable Bluetooth Speaker",
    category: "speaker",
    image: imagePaths.p8,
    description:
      "Take your music anywhere with this compact Bluetooth speaker.",
    price: 79.99,
  },
  {
    id: 9,
    name: "Guitar Strap",
    category: "accessories",
    image: imagePaths.p9,
    description: "Comfortable and adjustable strap for guitar players.",
    price: 14.99,
  },
  {
    id: 10,
    name: "Hollow Body E-Guitar",
    category: "guitar",
    image: imagePaths.p10,
    description: "A semi-acoustic guitar with a warm tone and elegant design.",
    price: 749.99,
  },
  {
    id: 11,
    name: "5-String Jazz Bass",
    category: "bass",
    image: imagePaths.p11,
    description: "Ideal for slap bass techniques and modern basslines.",
    price: 699.99,
  },
  {
    id: 12,
    name: "Powered PA Speaker Pair",
    category: "speaker",
    image: imagePaths.p12,
    description: "Two high-powered speakers for live events and DJ setups.",
    price: 999.99,
  },
  {
    id: 13,
    name: "Guitar Capo",
    category: "accessories",
    image: imagePaths.p13,
    description: "Clamps onto the guitar neck to change the pitch easily.",
    price: 19.99,
  },
  {
    id: 14,
    name: "Solid Body Electric Guitar",
    category: "guitar",
    image: imagePaths.p14,
    description: "A classic solid-body electric guitar with versatile tones.",
    price: 549.99,
  },
  {
    id: 15,
    name: "5-String Active Bass",
    category: "bass",
    image: imagePaths.p15,
    description:
      "Designed for modern bassists who need extended low-end range.",
    price: 599.99,
  },
  {
    id: 16,
    name: "KRK G4 7 Studio Monitors",
    category: "speaker",
    image: imagePaths.p16,
    description:
      "High-fidelity studio monitors for accurate audio playback. 7 inch speakers 4th generation",
    price: 349.99,
  },
  {
    id: 17,
    name: "Guitar Strings (6-pack)",
    category: "accessories",
    image: imagePaths.p17,
    description: "Durable and bright-sounding strings for your guitar.",
    price: 24.99,
  },
  {
    id: 18,
    name: "Semi-Hollow Electric Guitar",
    category: "guitar",
    image: imagePaths.p18,
    description:
      "Combines the warmth of an acoustic guitar with the versatility of an electric.",
    price: 699.99,
  },
  {
    id: 19,
    name: "5-String Fretless Bass",
    category: "bass",
    image: imagePaths.p19,
    description:
      "Perfect for smooth fretless bass playing and expressive slides.",
    price: 799.99,
  },
  {
    id: 20,
    name: "Portable PA System",
    category: "speaker",
    image: imagePaths.p20,
    description:
      "All-in-one PA system for small gigs, presentations, and outdoor events.",
    price: 349.99,
  },
  {
    id: 21,
    name: "Guitar Tuner",
    category: "accessories",
    image: imagePaths.p21,
    description: "Clip-on tuner for accurate tuning of your guitar strings.",
    price: 14.99,
  },
  {
    id: 22,
    name: "Solid Mahogany A-Guitar",
    category: "guitar",
    image: imagePaths.p22,
    description: "Crafted from high-quality mahogany wood for rich tones.",
    price: 799.99,
  },
  {
    id: 23,
    name: "6-String Jazz Bass",
    category: "bass",
    image: imagePaths.p23,
    description:
      "A versatile bass with active electronics for tonal flexibility.",
    price: 749.99,
  },
  {
    id: 24,
    name: "Wireless Bluetooth Speaker",
    category: "speaker",
    image: imagePaths.p24,
    description: "Compact and portable speaker with wireless connectivity.",
    price: 59.99,
  },
  {
    id: 25,
    name: "Guitar Stand",
    category: "accessories",
    image: imagePaths.p25,
    description: "Sturdy stand to display and protect your guitar.",
    price: 29.99,
  },
  {
    id: 26,
    name: "Solid Spruce Acoustic Guitar",
    category: "guitar",
    image: imagePaths.p26,
    description:
      "Crafted with a solid spruce top for clear and resonant acoustic tones.",
    price: 699.99,
  },
  {
    id: 27,
    name: "4-String Short Scale Bass",
    category: "bass",
    image: imagePaths.p27,
    description:
      "Compact bass with a shorter scale length for comfortable playability.",
    price: 399.99,
  },
  {
    id: 28,
    name: "Bluetooth Speaker (Waterproof)",
    category: "speaker",
    image: imagePaths.p28,
    description:
      "Take your music poolside or to the beach with this waterproof speaker.",
    price: 89.99,
  },
  {
    id: 29,
    name: "Guitar Slide",
    category: "accessories",
    image: imagePaths.p29,
    description: "Slide for creating unique slide guitar sounds.",
    price: 12.99,
  },
  {
    id: 30,
    name: "Nylon String Guitar",
    category: "guitar",
    image: imagePaths.p30,
    description: "Traditional classical guitar with a warm and mellow sound.",
    price: 299.99,
  },
  {
    id: 31,
    name: "5-String Music Man Bass",
    category: "bass",
    image: imagePaths.p31,
    description:
      "High-end bass with versatile electronics and ergonomic design.",
    price: 1299.99,
  },
  {
    id: 32,
    name: "Portable PA Mixer",
    category: "speaker",
    image: imagePaths.p32,
    description:
      "Compact mixer for combining multiple audio sources in live setups.",
    price: 199.99,
  },
  {
    id: 33,
    name: "Guitar Wall Mount",
    category: "accessories",
    image: imagePaths.p33,
    description:
      "Securely hang your guitar on the wall for display and easy access.",
    price: 19.99,
  },
];

export default product_data;
