import { imagesHero, imagesSquare } from '../data/imagesHero';
import tomas from '../img/tomas2.jpg';

const iH = imagesHero.length;
const iS = imagesSquare.length;

const getImage = (page) => {
  if (page === 'sobre') return tomas;
  if (page === 'general') {
    const num = Math.floor(Math.random() * (iS));
    const image = Object.values(imagesSquare)[num];
    return image;
  }
  const num = Math.floor(Math.random() * (iH));
  const image = Object.values(imagesHero)[num];
  return image;
};

export default getImage;
