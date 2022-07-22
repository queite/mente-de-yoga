import React from 'react';
import imgTomas from '../img/TomasPe.jpg';
import { Img } from './Hero.styles';

export default function Hero() {
  return (
    <div>
      <Img>
        <img src={imgTomas} alt="tomas em janusirshasana" />
      </Img>
      <h1> विरामप्रत्ययाभ्यासपूर्वः संस्कारशेषोऽन्यः</h1>
      <h2>virāmapratyayābhyāsapūrvaḥ saṃskāraśeṣonyaḥ</h2>
    </div>
  );
}
