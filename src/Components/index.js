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
    height: 13px;
    width: 13px;
    border-color: #007afd;
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
    `;
  }}
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

export const ErrorHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const CloseIcon = styled.div`
  position: relative;
  width: 10px;
  height: 10px;

  &:before,
  &:after {
    position: absolute;
    content: ' ';
    height: 19px;
    width: 2px;
    background-color: #fff;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;

export const CountryPageWrapper = styled.div`
  background-color: #e5e5e5;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;

export const SectionWrapper = styled.div`
  margin-bottom: 2rem;
`;

export const DataTableHeader = styled.h2`
  font-size: 16px;
  font-weight: 400;
  color: rgb(0, 0, 0, 0.6);
  text-transform: uppercase;
  margin-left: 10px;
`;

export const Flag = styled.img`
  margin-top: 1rem;
  height: 180px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

export const DataTable = styled.div`
  background-color: white;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

export const DataBox = styled.div`
  padding: 10px 8px 10px 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  &:last-child {
    border-bottom: none;
  }
`;

export const DataName = styled.span`
  text-transform: capitalize;
  font-size: 14px;
  font-weight: 700;
`;

export const DataValue = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: rgb(0, 0, 0, 0.5);
`;

export const CPHeader = styled.div`
  display: flex;
  background-color: white;
  padding: 12px 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export const CPHeaderTitle = styled.div`
  font-weight: 500;
  font-size: 18px;
`;

export const BackSearchBtn = styled(Link)`
  margin-right: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #007afd;
  text-decoration: none;
`;
export const BackSearchT = styled.span`
  font-weight: 700;
  font-size: 16px;
  margin-left: 1px;
`;

export const EmptyT = styled.div`
  margin-left: auto;
  visibility: hidden;
`;

export default Button;
