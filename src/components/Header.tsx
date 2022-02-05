import React from "react";
import styled from "styled-components";

const Container = styled.header`
        position: relative;
        display: block;
        width: 100%;
        height: 40vh;
        background-image: url(https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg);
        background-size: cover;
        background-repeat: no-repeat;
    `;

const InnerWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 3rem;
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 4px;
`;

const Image = styled.picture`
  display: block;
  place-self: center;
`;

const Img = styled.img`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  border: .5rem solid #000;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.2;
  padding: 1rem;
  place-self: center;
`;

const Name = styled.h3`
  font-size: 2rem;
  font-family: roboto bold;
  font-weight: 900;
  color: #000;
`;

const Title = styled.p`
  font-size: 1.6rem;
  font-family: roboto;
  font-weight: 400;
  color: #000;
`;

const Header = () => {
  return (
    <Container>
      <InnerWrapper>
        <Image>
          <Img src="https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?b=1&k=20&m=1300972574&s=170667a&w=0&h=2nBGC7tr0kWIU8zRQ3dMg-C5JLo9H2sNUuDjQ5mlYfo=" alt="user portrait" />
        </Image>

        <Content>
          <Name>Gedeon Nzemba</Name>
          <Title>Street Fever Boys</Title>
        </Content>
      </InnerWrapper>
    </Container>
  );
};

export default Header;
