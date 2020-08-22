import styled from 'styled-components';
import media from 'styled-media-query';

export const Form = styled.form`
  height: 35px;
`;

export const Input = styled.input`
  width: 85%;
  height: 100%;
  padding-left: 15px;
  color: rgba(0, 0, 0, 0.54);
  background: #ebebeb;
  border: none;
  border-radius: 8px 0 0 8px;
  font-size: 16px;

  ${media.greaterThan('medium')`
    width: 90%;
  `}
`;

const Button = styled.button`
  background: #007afd;
  height: 100%;
  border: none;
  border-radius: 0 8px 8px 0;
  width: 15%;

  ${media.greaterThan('medium')`
  width: 10%;
`}
`;

export const ErrorWrapper = styled.div`
  margin-top: 1rem;
  width: 100%;
  padding: 20px;
  background-color: rgba(255, 0, 0, 0.6);
  border-radius: 6px;
  color: white;
`;

export const ErrorH3 = styled.h3`
  margin: 0;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 10px;
`;

export const ErrorP = styled.p`
  margin: 0;
  font-size: 14px;
`;

export default Button;
