import React from 'react';
import PropTypes from 'prop-types';

const Country = ({ name, flag }) => {
  return (
    <div>
      <img src={flag} alt={`flag of ${name}`} width="50" />
      <span>{name}</span>
    </div>
  );
};
Country.propTypes = {
  name: PropTypes.string.isRequired,
  flag: PropTypes.string.isRequired,
};

export default Country;
