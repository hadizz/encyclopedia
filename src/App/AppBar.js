import React from 'react';
import { AppBarWrapper, AppBarBtn } from './Components';

function AppBar() {
  return (
    <AppBarWrapper>
      <AppBarBtn>
        <i className="fa fa-compass" aria-hidden="true" />
      </AppBarBtn>
      <AppBarBtn>
        <i className="fa fa-globe" aria-hidden="true" />
      </AppBarBtn>
    </AppBarWrapper>
  );
}

export default AppBar;
