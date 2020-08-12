import styled from 'styled-components';

// const mainColor = '#08bb7a';

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: auto;
  max-width: 430px;
`;

export const Card = styled.div`
  display: flex;
  background-color: #f4f4f4;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(12, 16, 31, 0.4);
  padding: 50px;
  width: 500px;

  @media screen and (max-width: 768px) {
    width: 300px;
    padding: 20px;
    margin-bottom: 5rem;
  }
`;
