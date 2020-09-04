import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f4f4f4;
  border-radius: 10px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.4);
  padding: 50px;
  margin-right: 2rem;

  @media screen and (max-width: 768px) {
    width: 320px;
    padding: 20px;
  }
`;
