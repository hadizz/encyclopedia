import React, { useState } from 'react';
import axios from 'axios';
import { useLocation, useHistory } from 'react-router-dom';
import { H1, HeaderSection } from '../Components';
import Button, { Input, Form } from './Components';
import ShowResults from './ShowResults';

const Search = () => {
  // #region states
  const location = useLocation();
  const history = useHistory();
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

  return (
    <div>
      <HeaderSection>
        <H1>Search</H1>
      </HeaderSection>
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          handleClick(event);
        }}
      >
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
      </Form>

      <ShowResults
        results={results}
        loading={loading}
        error={error}
        errorData={errorData}
        loc={location}
      />
    </div>
  );
};

export default Search;
