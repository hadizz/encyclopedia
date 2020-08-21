import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import moment from 'moment';

import {
  SectionWrapper,
  DataTableHeader,
  DataTable,
  DataBox,
  DataName,
  DataValue,
} from '../Components';

function WeatherSection({ header, data }) {
  const [states, setStates] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  console.log('in WeatherSection data : ', data);

  function filterProps(d) {
    const d1 = (({ weather_state_abbr, applicable_date }) => ({
      applicable_date,
      weather_state_abbr,
    }))(d);
    return d1;
  }

  React.useEffect(() => {
    async function fetchCityWeather(id) {
      try {
        setLoading(true);
        setError(false);
        const response = await axios.get(
          `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${id}`
        );

        const json = await response.data;
        console.log('fetchCityWeather data  ', json);
        filterProps(json.consolidated_weather);
        setStates(json.consolidated_weather);
      } catch (err) {
        setError(true);
        console.log('error in fetchCityWeather : ', err);
      } finally {
        setLoading(false);
      }
    }

    async function fetchCityWoeid() {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${
            data.split(' ')[0]
          }`
        );

        const json = await response.data;
        console.log('fetchCityWoeid data  ', json);

        fetchCityWeather(json[0].woeid);
      } catch (err) {
        setError(true);
        console.log('error in fetchCityWoeid : ');
      } finally {
        setLoading(false);
      }
    }

    if (data !== '') {
      fetchCityWoeid();
    }
  }, [data]);

  const ShowWeatherStates = () => {
    if (data === '') {
      return "We can't show you because this country has no capital!";
    }
    if (loading) {
      return 'loading';
    }
    if (error) {
      return 'There was an error in fetching data from server';
    }
    if (states === null) {
      return 'loading weather states';
    }
    if (states.length === 0) {
      return 'No data found for this city';
    }
    return states.map((state) => {
      const fState = filterProps(state);
      console.log('fState', fState);
      return (
        <DataBox>
          <DataName>{moment(fState.applicable_date).format('dddd')}</DataName>
          <img
            src={`https://www.metaweather.com/static/img/weather/${fState.weather_state_abbr}.svg`}
            height="30"
            alt="weather icon"
          />
        </DataBox>
      );
    });
  };

  return (
    <SectionWrapper>
      <DataTableHeader>{header}</DataTableHeader>
      <DataTable>
        <DataBox>
          <DataName>Capital</DataName>
          <DataValue>{data}</DataValue>
        </DataBox>
        <ShowWeatherStates />
      </DataTable>
    </SectionWrapper>
  );
}
WeatherSection.propTypes = {
  header: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
};
export default WeatherSection;
