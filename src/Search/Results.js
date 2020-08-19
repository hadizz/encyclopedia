import React from 'react';
import PropTypes from 'prop-types';
import Country from './Country';
import ErrorBox from './ErrorBox';

const Results = ({ results, loading, error, errorData }) => {
  if (loading) return <p>++++++++++++++++++loading+++++++++++</p>;

  if (error) return <ErrorBox errorData={errorData} />;

  return (
    <div>
      {results.length === 0 ? (
        <p>
          You Can Easily Find Countries By Their Name
          <span role="img" aria-label="sparkles">
            ✨
          </span>
        </p>
      ) : (
        results.map((c) => <Country name={c.name} flag={c.flag} />)
      )}
    </div>
  );
};

Results.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  errorData: PropTypes.string.isRequired,
  results: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      flag: PropTypes.string,
    })
  ).isRequired,
};

export default Results;
