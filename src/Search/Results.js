import React from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import Country from './Country';
import ErrorBox from './ErrorBox';

const Results = ({ results, loading, error, errorData, seen }) => {
  const history = useHistory();

  if (loading) return <p>++++++++++++++++++loading+++++++++++</p>;

  if (error) return <ErrorBox errorData={errorData} />;

  return (
    <div>
      <br />
      {seen && <h4>showing previous results</h4>}
      <div>
        {results.map((c) => (
          <Link
            to={`/country/${c.alpha2Code}`}
            onClick={() => {
              history.push({
                pathName: '/',
                state: { seenResults: results },
              });
            }}
          >
            <Country name={c.name} flag={c.flag} />
          </Link>
        ))}
      </div>
    </div>
  );
};

Results.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  errorData: PropTypes.string.isRequired,
  seen: PropTypes.bool.isRequired,
  results: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      flag: PropTypes.string,
    })
  ).isRequired,
};

export default Results;
