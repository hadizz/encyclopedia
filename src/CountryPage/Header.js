import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Arrow,
  CPHeader,
  CPHeaderTitle,
  BackSearchBtn,
  BackSearchT,
  EmptyT,
} from '../Components';

const Header = () => {
  const history = useHistory();
  return (
    <CPHeader>
      <BackSearchBtn onClick={() => history.goBack()} type="button">
        <Arrow left />
        <BackSearchT>Search</BackSearchT>
      </BackSearchBtn>
      <CPHeaderTitle>Country Page</CPHeaderTitle>
      <EmptyT>
        <BackSearchBtn>
          <Arrow left />
          <BackSearchT>Search</BackSearchT>
        </BackSearchBtn>
      </EmptyT>
    </CPHeader>
  );
};

export default Header;
