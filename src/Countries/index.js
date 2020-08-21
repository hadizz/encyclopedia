import React, { useState, useEffect } from 'react';
import CountryItem from '../Components/CountryItem';
import { HeaderSection, H1, NDLink } from '../Components';
import LoadingCountryItem from '../Components/LoadingCountryItem';

function Countries() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cachedCountries = localStorage.getItem('allCountries');
    if (cachedCountries) {
      console.log('we have countires, dont need to fetch it again');
      setCountries(JSON.parse(cachedCountries));
    } else {
      console.log('fetching countries');

      fetch('https://restcountries.eu/rest/v2/all?fields=name;flag;alpha2Code')
        .then((res) => res.json())
        .then((data) => {
          let i = 0;
          const newData = data.map((obj) => ({ ...obj, id: i++ }));
          setCountries(newData);
          localStorage.setItem('allCountries', JSON.stringify(newData));
        })
        .catch((err) => alert('error in fetching : ', err));
    }
    setLoading(false);
  }, []);

  return (
    <div>
      <HeaderSection>
        <H1>Countries</H1>
      </HeaderSection>
      {loading ? (
        <LoadingCountryItem />
      ) : (
        countries.map((c) => (
          <NDLink
            to={`/country/${c.alpha2Code}`}
            key={c.id}
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
