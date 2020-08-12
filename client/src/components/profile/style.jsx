import styled from 'styled-components';

export const Container = styled.div`
  background-color: #f4f4f4;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(12, 16, 31, 0.4);
  padding: 50px;
  max-width: 100%;
  width: 800px;
`;

export const Card = styled.div`
  background-color: #fff;
  border: 3px solid #dce7ff;
  border-radius: 3px;
  width: 1000px;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 768px) {
    width: 300px;
    margin-bottom: 10rem;
  }
`;

export const Form = styled.form`
  border-right: 1px solid #ecf2ff;
  align-items: center;
  justify-content: center;
  padding: 40px;
`;

export const FormWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
