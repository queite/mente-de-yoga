import styled from 'styled-components';

const Card = styled.div`
  align-self: center;
  border-radius: 8px;
  width: 270px;
  height: 162px;
  transition: 1s;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin: 8px;

  div {
    border-radius: 8px;
    display: flex;
    position: absolute;
    width: 270px;
    height: 162px;
    background: linear-gradient(transparent 35%, white);
    z-index: 1;
    @media (min-width: 1024px) {
      width: 500px;
      height: 500px
    }
  }

  img {
    border-radius: 8px;
    position: absolute;
    object-fit: cover;
    width: 270px;
    height: 162px;
  }

  p {
    position: absolute;
    z-index: 2;
    font-size: 1.5em;
    font-family: 'score';
  }

  @media (min-width: 1024px) {
    width: 500px;
    height: 500px
  }
`;

export default Card;
