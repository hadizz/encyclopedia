import React from 'react';
import {
  Arrow,
  CPHeader,
  CPHeaderTitle,
  BackSearchBtn,
  BackSearchT,
} from '../Components';

const Header = () => {
  return (
    <CPHeader>
      <BackSearchBtn>
        <Arrow left />
        <BackSearchT>Search</BackSearchT>
      </BackSearchBtn>
      <CPHeaderTitle>Country Page</CPHeaderTitle>
    </CPHeader>
  );
};

export default Header;
