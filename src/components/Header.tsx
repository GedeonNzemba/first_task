import React, { useContext, memo} from "react";
import { UserContext } from "../App";
import styled from "styled-components";
// import banner from '../../public/baner.png'


const Container = styled.header`
        position: relative;
        display: block;
        width: 100%;
        height: 45vh;
        background-size: cover;
        background-repeat: no-repeat;
        padding-bottom: 3rem;
    `;


const InnerWrapper = styled.div`
  position: absolute;
  bottom: 3rem;
  left: 3rem;
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 4px;
  filter: drop-shadow(2px 4px 6px black);

  @media (max-width: 599px) {
      flex-direction: column;
      right: 2rem;
      left: 2rem;
      padding: 1.5rem;
  }
`;

const Image = styled.picture`
  display: block;
  place-self: center;
`;

const Img = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  border: .5rem solid #cddc39;
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
  font-family: 'Roboto', sans-serif;
  font-weight: 900;
  color: #000;
`;

const Title = styled.p`
  font-size: 1.6rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  color: #000;
`;


const Header:React.FC = () => {

    const context = useContext(UserContext)
    console.log(context)

  return (
    <Container style={context?.bannerimage ? {backgroundImage: `url(${context.bannerimage})`} : {backgroundImage: 'url(https://static-cse.canva.com/blob/572643/2.Freephotos.jpg)'}}>
      <InnerWrapper>
        <Image>
          <Img src={context?.yourImage ? context.yourImage : "https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?b=1&k=20&m=1300972574&s=170667a&w=0&h=2nBGC7tr0kWIU8zRQ3dMg-C5JLo9H2sNUuDjQ5mlYfo="} alt="user portrait" />
        </Image>

        <Content>
          <Name>{context?.name ? context.name : "Gedeon Nzemba"}</Name>
          <Title>{context?.bannerTitle ? context.bannerTitle : "Street Fever Boys"}</Title>
        </Content>
      </InnerWrapper>
    </Container>
  );
};

export default memo(Header);
