import React from 'react';
import {
  Arrow,
  CPHeader,
  CPHeaderTitle,
  BackSearchBtn,
  BackSearchT,
  EmptyT,
} from '../Components';

const Header = () => {
  return (
    <CPHeader>
      <BackSearchBtn>
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
