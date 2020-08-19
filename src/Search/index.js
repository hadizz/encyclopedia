import React, { useState } from 'react';
import axios from 'axios';
import Results from './Results';
import Button, { Input, H1, HeaderSection, StyledLink } from './Components';

const Search = () => {
  // #region states
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
    setResults([]);

    if (state.trim() === '') {
      setState('');
      setLoading(false);
      setError(true);
      setErrorData({ status: 'Empty Field', message: '' });
    } else {
      axios
        .get(`https://restcountries.eu/rest/v2/name/${state}?fields=name;flag`)
        .then((res) => {
          console.log('[axios/ then res] response is : ', res);

          if (res.status !== 200) {
            throw new Error(res.statusText);
          }

          return res.data;
        })
        .then((data) => {
          console.log('[axios/ then data] : inside fetch : ', data);
          setResults(data);
          setLoading(false);
        })
        .catch((err) => {
          console.log('[axios/ then err] : ', err.response);
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
        errorData={errorData}
      />
    </div>
  );
};

export default Search;
