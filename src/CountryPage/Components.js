import styled from 'styled-components';
import media from 'styled-media-query';

export const CountryPageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #e5e5e5;

  ${media.greaterThan('large')`
    background-color: white;
  `}
`;

export const Flag = styled.img`
  margin-top: 1rem;
  height: 180px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid grey;
  border-radius: 10px;
`;

export const CountryPageInner = styled.div`
  ${media.greaterThan('large')`
    width: 50%;
    margin: 0 auto;
  `}
`;

export const SectionWrapper = styled.div`
  margin: 3rem 0;
`;

export const DataTableHeader = styled.h2`
  font-size: 16px;
  font-weight: 400;
  color: rgb(0, 0, 0, 0.6);
  text-transform: uppercase;
  margin-left: 10px;
`;

export const DataTable = styled.div`
  background-color: white;
  padding: 10px;
  display: flex;
  flex-direction: column;

  ${media.greaterThan('large')`
    border-radius: 10px;
    border: 1px solid #f5f5f5;
    box-shadow: rgb(0,0,0,0.1) 0px 2px 4px 0px
  `}
`;

export const MapWrapper = styled.div`
  ${media.greaterThan('large')`
    border-radius: 10px;
    border: 1px solid #f5f5f5;
    box-shadow: rgb(0,0,0,0.1) 0px 2px 4px 0px
  `}
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

export const CurrencyDataBox = styled.div`
  padding: 10px 8px 10px 8px;
  display: flex;
  flex-direction: column;
`;

export const ExchangeBox = styled.div`
  padding: 10px 8px 10px 8px;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const ExchangeInnerBox = styled.div`
  height: 100%;
  width: 150px;
  border: 1px solid rgb(0, 0, 0, 0.1);
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 24px;
`;

export const Select = styled.select`
  font-size: 14px;
  width: 90%;
  border: 1px #fff solid;
  background-color: white;
  padding: 0.6em 1.4em 0.5em 0.8em;
  box-sizing: border-box;
  margin: 0;

  &:hover {
    background-color: #f0f0f0;
    cursor: pointer;
  }
`;

export const Option = styled.option``;

export const CPHeader = styled.div`
  display: flex;
  background-color: white;
  padding: 12px 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  ${media.greaterThan('large')`
  `}
`;

export const CPHeaderTitle = styled.div`
  font-weight: 500;
  font-size: 18px;
`;

export const BackSearchBtn = styled.button`
  margin-right: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #007afd;
  text-decoration: none;
  background: white;
  border: none;
  cursor: pointer;
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
