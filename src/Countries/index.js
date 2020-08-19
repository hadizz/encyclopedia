import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import CountryItem from '../Components/CountryItem';
import { NDLink } from '../Components';

function Countries() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all?fields=name;flag;alpha2Code')
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
        setLoading(false);
      })
      .catch((err) => alert('error in fetching : ', err));
  }, []);

  const Loading = () => <p>loading</p>;

  return (
    <div>
      <button onClick={() => history.goBack()} type="button">
        go back to search page
      </button>
      {loading ? (
        <Loading />
      ) : (
        countries.map((c) => (
          <NDLink
            to={`/country/${c.alpha2Code}`}
            // onClick={() => history.push({ pathName: '/country' })}
          >
            <CountryItem name={c.name} flag={c.flag} />
          </NDLink>
        ))
      )}
    </div>
  );
}

export default Countries;
