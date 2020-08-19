import React from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import CountryItem from '../Components/CountryItem';

const Results = ({ results, seen }) => {
  const history = useHistory();

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
            <CountryItem name={c.name} flag={c.flag} />
          </Link>
        ))}
      </div>
    </div>
  );
};

Results.propTypes = {
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
