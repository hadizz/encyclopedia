import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  color: #007afd;
  font-size: 20px;
  margin-bottom: 0.3rem;
`;

export const HeaderSection = styled.section`
  margin-bottom: 0.75rem;
`;

export const H1 = styled.h1`
  font-weight: bolder;
  font-size: 36px;
  font-weight: 700;
  margin: 0;
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
    height: 13px;
    width: 13px;
    border-color: #007afd;
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
    `;
  }}
`;

export const NDLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

// export const ErrorHeader = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
// `;

// export const CloseIcon = styled.div`
//   position: relative;
//   width: 10px;
//   height: 10px;

//   &:before,
//   &:after {
//     position: absolute;
//     content: ' ';
//     height: 19px;
//     width: 2px;
//     background-color: #fff;
//   }
//   &:before {
//     transform: rotate(45deg);
//   }
//   &:after {
//     transform: rotate(-45deg);
//   }
// `;

export const CountryWrapper = styled.div`
  padding: 7px 7px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
  border-bottom: 1px solid grey;
`;
