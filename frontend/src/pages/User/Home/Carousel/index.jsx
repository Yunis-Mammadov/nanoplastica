import React from "react";
import styled, { keyframes, css } from "styled-components";

function Carousel() {
  const row1 = [
    "https://res.cloudinary.com/dsb3j1ozv/image/upload/v1697284936/WhatsApp_Image_2023-08-09_at_20.17.02_jlf4ya.jpg",
    "https://res.cloudinary.com/dsb3j1ozv/image/upload/v1697285347/WhatsApp_Image_2023-08-09_at_20.17.00_1_xwcqqj.jpg",
    "https://res.cloudinary.com/dsb3j1ozv/image/upload/v1697285545/WhatsApp_Image_2023-08-09_at_20.17.01_1_ogem5i.jpg",
    "https://res.cloudinary.com/dsb3j1ozv/image/upload/v1697287066/WhatsApp_Image_2023-08-09_at_20.16.56_gmkcpy.jpg",
    "https://res.cloudinary.com/dsb3j1ozv/image/upload/v1696479956/keratin2_bsvzdo.jpg",
    "https://res.cloudinary.com/dsb3j1ozv/image/upload/v1697287066/WhatsApp_Image_2023-08-09_at_20.16.56_gmkcpy.jpg",
  ];

  return (
    <AppContainer>
      <Wrapper>
        <Marquee>
          <MarqueeGroup>
            {row1.map((el, index) => (
              <ImageGroup key={index}>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {row1.map((el, index) => (
              <ImageGroup key={index}>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
        </Marquee>
      </Wrapper>
    </AppContainer>
  );
}

export default Carousel;



const AppContainer = styled.div`
  width: 100%;
  color: #000000;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
`;

const Marquee = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  user-select: none;
  mask-image: linear-gradient(
    to right,
    hsla(0, 0%, 0%, 0) 0%,
    hsla(0, 0%, 0%, 1) 5%,
    hsla(0, 0%, 0%, 1) 90%,
    hsla(0, 0%, 0%, 0) 95%
  );
`;

const scrollX = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  animation: ${scrollX} 20s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: nowrap;
`;

const ImageGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 190px;
  padding: 1vw;
`;

const Image = styled.img`
  object-fit: contain;
  max-width: 100%;
  height: auto;
  border-radius: 0.5vw;
  padding: 0.5vw 2vw;
`;