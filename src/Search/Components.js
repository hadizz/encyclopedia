import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Input = styled.input`
  height: 35px;
  width: 85%;
  padding-left: 15px;
  color: rgba(0, 0, 0, 0.54);
  background: #ebebeb;
  border: none;
  border-radius: 8px 0 0 8px;
  font-size: 16px;
`;

const Button = styled.button`
  background: #007afd;
  padding: 0.25em 1em;
  border: none;
  border-radius: 0 8px 8px 0;
  height: 35px;
  width: 15%;
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
