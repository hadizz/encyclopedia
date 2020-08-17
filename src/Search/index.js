import React, { useState } from 'react';
import Results from './Results';

const Search = () => {
  const [state, setState] = useState('');
  const [clicked, setClicked] = useState(false);
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState(null);
  const [message, setMessage] = useState('loading results for search');

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

  return (
    <div>
      <h1>search</h1>
      <input
        id="query"
        type="text"
        name="query"
        placeholder="Search Country Name"
        value={state}
        onChange={handleChange}
      />
      <button onClick={handleClick} type="button">
        search
      </button>
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
