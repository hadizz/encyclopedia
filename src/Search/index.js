import React, { useState } from 'react';
import Results from './Results';
import Button, { Input, H1, HeaderSection, StyledLink } from './Components';

const Search = () => {
  // #region states
  const [state, setState] = useState('');
  const [clicked, setClicked] = useState(false);
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState(null);
  const [message, setMessage] = useState('loading results for search');
  // #endregion

  // #region funcs
  const handleChange = (event) => {
    setState(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    setClicked(true);
    setLoading(true);
    fetch(`https://restcountries.eu/rest/v2/name/${state}?fields=name;flag`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(
            `${res.status} : ${
              res.status === 404
                ? 'cant find any country with the given query '
                : 'something went wrong'
            }`
          );
        }
        return res.json();
      })
      .then((data) => {
        console.log('[search] : inside fetch : ', data);
        setResults(data);
        setLoading(false);
      })
      .catch((err) => setMessage(`${err}`));
  };
  // #endregion

  return (
    <div>
      <HeaderSection>
        <H1>Search</H1>
        <StyledLink to="/countries">All Countries</StyledLink>
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
      <br />
      <small>
        {clicked ? `searching results for "${state}"` : 'type something'}
      </small>

      <br />

      {clicked && (
        <Results results={results} loading={loading} message={message} />
      )}
    </div>
  );
};

export default Search;
