import styled from 'styled-components';
import { Link } from 'react-router-dom';
import media from 'styled-media-query';
import { NDLink } from '../Components';

const Wrapper = styled.section`
  width: 80%;
  margin: 2rem auto 4rem auto;

  ${media.greaterThan('large')`
    width: 50%;
  `}
`;

export const AppBarWrapper = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 45px;
  background-color: blue;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  ${media.greaterThan('large')`
    display: none;
  `}
`;

export const AppBarBtn = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 30px;
`;

export const NavWrapper = styled.ul`
  list-style-type: none;
  display: flex;
  background-color: white;
  padding: 12px 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  ${media.lessThan('large')`
    display: none;
  `}
`;

export const NavItem = styled(NDLink)`
  font-size: 18px;
  margin-right: 30px;

  &:hover {
    color: blue;
  }
`;

export default Wrapper;
