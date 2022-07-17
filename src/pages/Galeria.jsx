import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Body } from '../Styles/Generals';

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];

export default function Galeria() {
  return (
    <Body heigth="100vh">
      <Header />
      <ImageGallery items={images} />
      <Footer position="absolute" />
    </Body>

  );
}
