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

export const CountryWrapper = styled.div`
  padding: 7px 7px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
  border-bottom: 1px solid grey;
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const FlagIcon = styled.img`
  width: 60px;
  padding: 5px;
  margin-right: 15px;
`;

export const Arrow = styled.div`
  border: solid rgba(0, 0, 0, 0.4);
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;

  ${(props) => {
    if (props.right) {
      return `
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    `;
    }
    return `
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
    `;
  }}
`;

export default Button;
