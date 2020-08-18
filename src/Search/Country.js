import React from 'react';
import PropTypes from 'prop-types';
import { CountryWrapper, FlexRow, FlagIcon, Arrow } from './Components';

const Country = ({ name, flag }) => {
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
Country.propTypes = {
  name: PropTypes.string.isRequired,
  flag: PropTypes.string.isRequired,
};

export default Country;
