import React, { useState } from 'react';
import Results from './Results';
import Button, { Input, H1, HeaderSection, StyledLink } from './Components';

const Search = () => {
  // #region states
  const [state, setState] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [results, setResults] = useState([]);
  const [errorType, setErrorType] = useState('');
  // #endregion

  // #region funcs
  const handleChange = (event) => {
    setState(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    setLoading(true);
    setError(false);
    setResults([]);

    if (state.trim() === '') {
      setState('');
      setLoading(false);
      setError(true);
      setErrorType('Empty Field');
    } else {
      fetch(`https://restcountries.eu/rest/v2/name/${state}?fields=name;flag`)
        .then((res) => {
          if (!res.ok) {
            setLoading(false);
            setError(true);
            setErrorType(`${res.status}`);
            throw new Error(`${res.status}`);
          }

          return res.json();
        })
        .then((data) => {
          console.log('[search] : inside fetch : ', data);
          setResults(data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  // #endregion

  return (
    <div>
      <HeaderSection>
        <H1>Search</H1>
        <StyledLink to="/countries">All Countries</StyledLink>
      </HeaderSection>
      <form>
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
      </form>

      <br />

      <Results
        results={results}
        loading={loading}
        error={error}
        errorType={errorType}
      />
    </div>
  );
};

export default Search;
