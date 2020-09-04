import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 5rem auto;
  padding: 20px;
  max-width: 700px;
  width: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
