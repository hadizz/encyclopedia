import React, { useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import Results from './Results';
import Button, { Input, H1, HeaderSection, StyledLink } from './Components';

const Search = () => {
  // #region states
  const location = useLocation();
  const [state, setState] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [results, setResults] = useState([]);
  const [errorData, setErrorData] = useState('');
  // #endregion

  // #region funcs
  const handleChange = (event) => {
    setState(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    setLoading(true);
    setError(false);

    if (state.trim() === '') {
      setResults([]);
      setState('');
      setLoading(false);
      setError(true);
      setErrorData({ status: 'Empty Field', message: '' });
    } else {
      axios
        .get(
          `https://restcountries.eu/rest/v2/name/${state}?fields=name;flag;alpha2Code`
        )
        .then((res) => {
          if (res.status !== 200) {
            throw new Error(res.statusText);
          }

          return res.data;
        })
        .then((data) => {
          setResults(data);
          setLoading(false);
        })
        .catch((err) => {
          setResults([]);
          setLoading(false);
          setError(true);
          setErrorData({
            ...err.response.data,
            status: err.response.data.status.toString(),
          });
        });
    }
  };
  // #endregion

  React.useEffect(() => {
    console.log('hello, state : ', location.state);
    console.log(
      'location.state === undefined : ',
      location.state === undefined
    );
  }, []);

  React.useEffect(() => {
    console.log('--------------------');
    console.log('results called');
    console.log('results :', results);
    if (location.state !== undefined) {
      console.log('results changed ? ', results === location.state.seenResults);
      console.log('location.state.seenResults :', location.state.seenResults);
    }
  }, [results]);

  const ShowResults = () => {
    if (results.length !== 0) {
      return (
        <Results
          results={results}
          loading={loading}
          error={error}
          errorData={errorData}
          seen={false}
        />
      );
    }
    if (location.state !== undefined) {
      return (
        <Results
          results={location.state.seenResults}
          loading={loading}
          error={error}
          errorData={errorData}
          seen
        />
      );
    }
    return (
      <p>
        You Can Easily Find Countries By Their Name
        <span role="img" aria-label="sparkles">
          ✨
        </span>
      </p>
    );
  };

  return (
    <div>
      <HeaderSection>
        <H1>Search</H1>
        <StyledLink to="/country">All Countries</StyledLink>
      </HeaderSection>
      <div>
        <Input
          id="query"
          type="text"
          name="query"
          placeholder="Search Country Name"
          value={state}
          onChange={handleChange}
        />
        <Button onClick={handleClick} type="button">
          <i className="fa fa-search" style={{ color: 'white' }} />
        </Button>
      </div>

      <ShowResults />
    </div>
  );
};

export default Search;
