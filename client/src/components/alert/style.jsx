import styled, { css } from 'styled-components';

const Success = css`
  background: #21c700;
  color: #fff;
  border-left: 5px solid #f4f4f4;
`;
const Error = css`
  background: #f8a0a7;
  color: #721c24;
  border-left: 5px solid #721c24;
`;

const getAlertStyle = (props) => {
  if (props.alert === 'success') {
    return Success;
  }

  return Error;
};

export const Alert = styled.div`
  position: absolute;
  top: 20px;
  right: 0;
  font-family: inherit;
  padding: 1rem;
  opacity: 0.9;
  border-radius: 5px;
  min-width: 350px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  transition: opacity 0.2s, top 0.2s, visiblity 0.2s;

  animation: show_slide 1s ease-out forwards;

  @keyframes show_slide {
    0% {
      transform: translateX(0%);
    }
    40% {
      transform: translateX(-10%);
    }
    80% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-10%);
    }
  }

  @media screen and (max-width: 768px) {
    @keyframes show_slide {
      0% {
        transform: translateX(0%);
      }
      40% {
        transform: translateX(-5%);
      }
      80% {
        transform: translateX(0%);
      }
      100% {
        transform: translateX(-5%);
      }
    }
  }

  ${getAlertStyle}
`;
