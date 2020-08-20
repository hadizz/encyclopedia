import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

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

  React.useEffect(() => {
    async function fetchCityWeather(id) {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${id}`
        );

        const json = await response.data;
        console.log('fetchCityWeather data  ', json);
        setStates(json.consolidated_weather);
      } catch (err) {
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

    fetchCityWoeid();
  }, [data]);

  const ShowWeatherStates = () => {
    if (loading) {
      return 'loading';
    }
    if (error) {
      return 'There was an erro in fetching data from server';
    }
    if (states === null) {
      return 'weather states are empty';
    }
    return states.map((state) =>
      Object.keys(state).map((key, index) => {
        return (
          <DataBox key={index}>
            <DataName>{key}</DataName>
            <DataValue>{state[key]}</DataValue>
          </DataBox>
        );
      })
    );
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
