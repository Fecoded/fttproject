import styled from 'styled-components';

export const Container = styled.div`
  background: #d9d9d9;

  @media screen and (max-width: 1300px) {
    display: none;
  }
`;

export const Card = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 1rem;
  max-width: 1000px;
  padding: 20px;

  img {
    object-fit: cover;
    width: 900px;
    height: 350px;
  }
`;

export const SideCard = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;

  img {
    object-fit: cover;
    width: 280px;
    height: 167px;
  }

  // @media screen and (max-width: 1308px) {
  //   img {
  //     width: 230px;
  //   }
  // }

  // @media screen and (max-width: 768px) {
  //   img {
  //     width: 305px;
  //   }
  // }
`;
