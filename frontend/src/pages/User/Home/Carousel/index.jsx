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
        {/* <Marquee>
          <MarqueeGroup2>
            {row2.map((el, index) => (
              <ImageGroup key={index}>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup2>
          <MarqueeGroup2>
            {row2.map((el, index) => (
              <ImageGroup key={index}>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup2>
        </Marquee> */}
      </Wrapper>
    </AppContainer>
  );
}

export default Carousel;

const AppContainer = styled.div`
  width: 100wv;
  height: 15vh;
  color: #000000;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px; 
  height: 15vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;



const Marquee = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px; /* Added for responsiveness */
  overflow: hidden;
  user-select: none;
  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
`;

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 30s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;
const MarqueeGroup2 = styled.div`
  ${common}
  animation-direction: reverse;
  animation-delay: -3s;
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: 100%; /* Modified for responsiveness */
  height: 15vh;
  max-width: 300px; /* Added for responsiveness */
  padding: 1vw; /* Changed to vw for responsiveness */
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 0.5vw; /* Changed to vw for responsiveness */
  aspect-ratio: 16/9;
  padding: 0.5vw 2vw; /* Changed to vw for responsiveness */
  box-shadow: rgba(99, 99, 99, 0.2) 0px 0.5vw 2vw 0px; /* Changed to vw for responsiveness */
`;

