import { imagesHero, imagesSquare } from '../data/imagesHero';
import tomas from '../img/tomas1.jpg';

const getImage = (page) => {
  if (page === 'sobre') return tomas;
  if (page === 'general') {
    const num = Math.floor(Math.random() * (5));
    const image = Object.values(imagesSquare)[num];
    return image;
  }
  const num = Math.floor(Math.random() * (3));
  const image = Object.values(imagesHero)[num];
  return image;
};

export default getImage;
