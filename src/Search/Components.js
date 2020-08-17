import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Button = styled.button`
  background: #007afd;
  padding: 0.25em 1em;
  border: none;
  border-radius: 0 8px 8px 0;
  height: 35px;
  width: 15%;
`;

export const HeaderSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 0.75rem;
`;

export const H1 = styled.h1`
  font-weight: bolder;
  font-size: 36px;
  font-weight: 700;
  margin: 0;
`;

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

export const StyledLink = styled(Link)`
  color: #007afd;
  font-size: 20px;
  margin-bottom: 0.3rem;
`;

export default Button;
