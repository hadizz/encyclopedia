import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { CountryPageWrapper, Flag } from '../Components';
import Section from './Section';
import Header from './Header';
import CurrencySection from './CurrencySection';
import WeatherSection from './WeatherSection';

import LoadingCountryItem from '../Components/LoadingCountryItem';

const CountryPage = () => {
  const { code } = useParams();
  const [details, setDetails] = useState(null);
  const [infoSectionData, setInfoSectionData] = useState(null);
  const [currencyData, setCurrencyData] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  // get country details

  async function init(d) {
    const d1 = (({
      name,
      nativeName,
      capital,
      region,
      subregion,
      population,
      alpha2Code,
    }) => ({
      name,
      nativeName,
      capital,
      region,
      subregion,
      population,
      alpha2Code,
    }))(d);

    setInfoSectionData(d1);
    setCurrencyData(d.currencies[0]);
    console.log('d.capital', d.capital);
    setWeatherData(d.capital);
  }

  React.useEffect(() => {
    async function fetchCountryDetails() {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://restcountries.eu/rest/v2/alpha/${code}`
        );

        const json = await response.data;
        console.log('fetch data  ', json);

        setDetails(json);
        init(json);
      } catch (error) {
        console.log('error in fetch data coiuntry page');
      } finally {
        setLoading(false);
      }
    }

    fetchCountryDetails();
  }, [code]);

  return (
    <CountryPageWrapper>
      {loading ? (
        <LoadingCountryItem />
      ) : (
        <>
          <Header />
          <Flag src={details.flag} alt={`flag of ${details.name}`} />
          <Section header="information" data={infoSectionData} />
          <CurrencySection header="currency" data={currencyData} />
          <WeatherSection header="weather" data={weatherData} />
        </>
      )}
    </CountryPageWrapper>
  );
};

export default CountryPage;
