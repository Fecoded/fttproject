import styled from 'styled-components';

export const Container = styled.div`
  background: #d9d9d9;
`;

export const Card = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 1rem;
  max-width: 1000px;
  padding: 20px;

  img {
    width: 800px;
    height: 350px;
  }
`;

export const SideCard = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;

  img {
    width: 220px;
    height: 165px;
  }
`;
