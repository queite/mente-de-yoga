import React, { useState } from 'react';
import styled from 'styled-components';
import { AiFillCaretRight, AiFillCaretLeft } from 'react-icons/ai';
import { CarouselMain, CarouselContent, Div } from './Carousel.styles';

const insta = 'https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white';
const img1 = 'https://scontent.fpfb1-1.fna.fbcdn.net/v/t39.30808-6/304765483_589630179503136_3598616779223295274_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=55NMfTXHBqgAX9ZhhIQ&_nc_ht=scontent.fpfb1-1.fna&oh=00_AT_mZl4chhA829z0TCp28QYaI20zbSdAqVQvT1jtSptBIg&oe=631DE67B';
const img3 = 'https://scontent.fpfb1-1.fna.fbcdn.net/v/t39.30808-6/305569588_589630176169803_8606317284271146832_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=RsANVcTvagAAX8dbxBd&_nc_ht=scontent.fpfb1-1.fna&oh=00_AT___b1iCgLG2MvQjojPJil8K86kfKNfaIU4aGxbgTtf4A&oe=631EA081';
const img2 = 'https://scontent.fpfb1-1.fna.fbcdn.net/v/t39.30808-6/302309916_589630172836470_7926126337584589199_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=v_P2-1bLSdAAX8MyZ1I&_nc_ht=scontent.fpfb1-1.fna&oh=00_AT__9XP3VPNKbuUaFdNuSWk-ptaj6pkosvuPaTAP1wdaKw&oe=631E680D';
const images = [img1, img2, img3];

const Img = styled.img`
    width: 300px;
    border-radius: 8px;
`;
const ImgInsta = styled.img`
    width: 100px;
    border-radius: 8px;
    margin-top: 8px;
`;
const Avanca = styled(AiFillCaretRight)`
    width: 30px;
    height: 30px;
    /* background-color: red; */
    cursor: pointer;
`;
const Recua = styled(AiFillCaretLeft)`
    width: 30px;
    height: 30px;
    /* background-color: red; */
    cursor: pointer;
`;

function Carousel() {
  const [imageIndex, setIndex] = useState(0);
  const image = images[imageIndex];

  const handleImageAvanca = (index) => {
    if (index > 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const handleImageRecua = (index) => {
    if (index < 1) {
      setIndex(2);
    } else {
      setIndex(index - 1);
    }
  };

  return (
    <CarouselMain>
      <CarouselContent>
        <Div>
          <Recua onClick={() => handleImageRecua(imageIndex)} />
          <div>
            <Img src={image} alt="jupiter" />
            <ImgInsta src={insta} alt="insta" />
          </div>
          <Avanca onClick={() => handleImageAvanca(imageIndex)} />
        </Div>
      </CarouselContent>
    </CarouselMain>
  );
}

export default Carousel;
