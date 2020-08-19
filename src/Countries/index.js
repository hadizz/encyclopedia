import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

function Countries() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all?fields=name;flag')
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
        setLoading(false);
      })
      .catch((err) => alert('error in fetching : ', err));
  }, []);

  const Country = ({ name, flag }) => {
    return (
      <div>
        <img src={flag} alt={`flag of ${name}`} width="50" />
        <span>{name}</span>
      </div>
    );
  };
  Country.propTypes = {
    name: PropTypes.string.isRequired,
    flag: PropTypes.string.isRequired,
  };

  const Loading = () => <p>loading</p>;

  return (
    <div>
      <button onClick={() => history.goBack()} type="button">
        go back to search page
      </button>
      {loading ? (
        <Loading />
      ) : (
        countries.map((c) => <Country name={c.name} flag={c.flag} />)
      )}
    </div>
  );
}

export default Countries;
