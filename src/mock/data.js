import { nanoid } from 'nanoid';

// NAVBAR DATA
export const navbarData = {
  img: 'logo.png',
};

// HEAD DATA
export const headData = {
  title: 'Evan Walter | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
  // video: 'https://www.loom.com/embed/9adff46da46148b1b6e195795195fe3f',
};

// HERO DATA
export const heroData = {
  img: 'profile.png',
  title: '',
  name: 'Evan Walter',
  subtitle1: 'Shopify Development',
  subtitle2: 'Front End Development',
  subtitle3: 'App Development',
  subtitle4: 'I connect with people and build software.',
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne: `I specialize in Shopify development.  Whether store set-up, migration, front end, apps, or custom features, I aim to join my clients to serve their vision.`,
  paragraphTwo: `Prior to development, I obtained a Bachelor's of Science in Electrical Engineering and began a career in the field.  As I explored the software side of the field, I applied communication and problem solving skills I learned along the way.  I found opportunities to serve clients with fast websites and a seamless user experience.`,
  paragraphThree: ``,
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: 1,
    img: 'w3-1000.png',
    title: 'W3 Sales',
    info: `An Shopify website for a food services factory and distributor group with a large inventory of products`,
    tags: ['Shopify', 'Customization', 'HTML/CSS/JavaScript', 'Python'],
    url: '',
    video: 'https://www.loom.com/embed/3b0aa0cd448b4e41964e8e2cb5cffdf1',
    repo: '',
  },
  {
    id: 2,
    img: 'drummond-home-1000.png',
    videoImg: '',
    title: `Drummond's Clothing`,
    info: 'A dynamic clothing store with a mega menu and premium Shopify features',
    info2: 'Password: trends',
    tags: ['Store Setup', 'Premium Shopify Theme', 'Mega-Menu', 'Advanced Filter'],
    url: 'https://1vejgeqytc0pok6g-56525095117.shopifypreview.com',
    video: 'https://www.loom.com/embed/1398916cd8de47dc8f007ac9d19aa6ad',
    repo: '',
  },
  {
    id: 3,
    img: 'iuniverse-home-1000.png',
    videoImg: '',
    title: 'iUniverse',
    info: `A showcase for new electronics, featuring a customized product page built in Shopify liquid code`,
    info2: 'Password: newtech',
    tags: ['Store Setup', 'Theme Customization', 'Affiliate Functionality', 'HTML/CSS/Liquid'],
    url: 'https://1g56iv3d2f1qdbnx-57198936253.shopifypreview.com',
    video: 'https://www.loom.com/embed/425cb5c40eb44a1ab184030989719c62',
    repo: '',
  },
  {
    id: 4,
    img: 'wine-pairing-1000.png',
    // videoImg: '../images/wine-pairing.mp4',
    title: 'Wine Pairing App',
    info: `A custom API app to pair wines with popular dishes`,
    tags: ['API', 'Customization', 'HTML/CSS/JavaScript'],
    url: 'https://evan-walter.github.io/wine-pairing',
    video: 'https://www.loom.com/embed/8ca49e5e8fb64bf298be6d92c6187dcd',
    repo: 'https://github.com/Evan-Walter/wine-pairing',
  },
];

// TESTIMONIALS DATA
export const testimonialsData = {
  id: 1,
  body: `Evan is a hard worker and is extremely savvy. Even if he doesn't know how to do something, he is going to get creative and figure it out, which is one of the best qualities in a developer. He takes care with his work and is extremely communicative. I would highly recommend Evan for your projects.`,
  author: `Megan Spaulding`,
};

// CONTACT DATA
export const contactData = {
  cta: '', // Get in touch
  btn: 'Connect',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    /* {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    }, */
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Evan-Walter',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/evan-walter-101bb739',
    },
  ],
};
