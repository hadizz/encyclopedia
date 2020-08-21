import React, { useState, useEffect } from 'react';
import CountryItem from '../Components/CountryItem';
import { NDLink } from '../Components';

function Countries() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

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
