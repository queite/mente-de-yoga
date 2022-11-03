import images from '../data/imagesHero';

const getImage = () => {
  const num = Math.floor(Math.random() * (6));
  const image = Object.values(images)[num];
  return image;
};

export default getImage;
