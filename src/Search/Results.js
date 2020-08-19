import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Country from './Country';
import ErrorBox from './ErrorBox';
import CountryPage from '../CountryPage';

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
        results.map((c) => (
          <Link to={`/country/${c.alpha2Code}`}>
            <Country name={c.name} flag={c.flag} />
          </Link>
        ))
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
