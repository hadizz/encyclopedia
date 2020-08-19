import React from 'react';
import PropTypes from 'prop-types';
import ErrorBox from './ErrorBox';
import Results from './Results';

const ShowResults = ({ loading, error, results, loc, errorData }) => {
  if (loading) return <p>++++++++++++++++++loading+++++++++++</p>;

  if (error) return <ErrorBox errorData={errorData} />;

  if (results.length === 0) {
    if (loc.state !== undefined) {
      // show previous
      return (
        <Results
          results={loc.state.seenResults}
          loading={loading}
          error={error}
          errorData={errorData}
          seen
        />
      );
    }
    return (
      // first visit site
      <p>
        You Can Easily Find Countries By Their Name
        <span role="img" aria-label="sparkles">
          ✨
        </span>
      </p>
    );
  }

  // show results for search
  return (
    <Results
      results={results}
      loading={loading}
      error={error}
      errorData={errorData}
      seen={false}
    />
  );
};

ShowResults.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  errorData: PropTypes.string.isRequired,
  //    eslint-disable-next-line
  loc: PropTypes.object.isRequired,
  results: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      flag: PropTypes.string,
    })
  ).isRequired,
};

export default ShowResults;
