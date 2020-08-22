import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { CountryPageWrapper, Flag, CountryPageInner } from './Components';
import Section from './Section';
import Header from './Header';
import CurrencySection from './CurrencySection';
import WeatherSection from './WeatherSection';

import LoadingCountryItem from '../Components/LoadingCountryItem';
import MapSection from './MapSection';

const CountryPage = () => {
  const { code } = useParams();
  const [details, setDetails] = useState(null);
  const [infoSectionData, setInfoSectionData] = useState(null);
  const [currencyData, setCurrencyData] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [mapData, setMapData] = useState(null);
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
    setWeatherData(d.capital);
    setMapData(d.latlng);
  }

  React.useEffect(() => {
    async function fetchCountryDetails() {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://restcountries.eu/rest/v2/alpha/${code}`
        );

        const json = await response.data;

        setDetails(json);
        init(json);
      } catch (error) {
        console.log('error in fetch data country page');
      } finally {
        setLoading(false);
      }
    }

    fetchCountryDetails();
  }, [code]);

  return (
    <CountryPageWrapper>
      <CountryPageInner>
        <Header />
        {loading ? (
          <LoadingCountryItem />
        ) : (
          <>
            <Flag src={details.flag} alt={`flag of ${details.name}`} />
            <Section header="information" data={infoSectionData} />
            <MapSection header="map" data={mapData} />
            <CurrencySection header="currency" data={currencyData} />
            <WeatherSection header="weather" data={weatherData} />
          </>
        )}
      </CountryPageInner>
    </CountryPageWrapper>
  );
};

export default CountryPage;
