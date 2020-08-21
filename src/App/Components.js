import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.section`
  width: 80%;
  margin: 2rem auto;
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
`;

export const AppBarBtn = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 30px;
`;

export default Wrapper;
