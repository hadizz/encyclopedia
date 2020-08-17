import React from 'react';
import PropTypes from 'prop-types';
import Country from './Country';

const Results = ({ loading, message, results }) => {
  return (
    <div>
      {loading ? (
        <p>{message}</p>
      ) : (
        results.map((c) => <Country name={c.name} flag={c.flag} />)
      )}
    </div>
  );
};
Results.propTypes = {
  loading: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  results: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      flag: PropTypes.string,
    })
  ).isRequired,
};

export default Results;
