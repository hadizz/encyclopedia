import React from 'react';
import PropTypes from 'prop-types';
import { CountryWrapper, FlexRow, FlagIcon, Arrow } from './index';

const CountryItem = ({ name, flag }) => {
  return (
    <CountryWrapper>
      <FlexRow>
        <FlagIcon src={flag} alt={`flag of ${name}`} />
        <span>{name}</span>
      </FlexRow>
      <Arrow right />
    </CountryWrapper>
  );
};
CountryItem.propTypes = {
  name: PropTypes.string.isRequired,
  flag: PropTypes.string.isRequired,
};

export default CountryItem;
