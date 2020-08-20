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
  CurrencyDataBox,
  ExchangeBox,
  ExchangeInnerBox,
  Select,
  Option,
} from '../Components';

function WeatherSection({ header, data }) {
  const [rates, setRates] = useState(null);
  const [loading, setLoading] = useState(true);

  console.log('in WeatherSection data : ', data);

  return (
    <SectionWrapper>
      <DataTableHeader>{header}</DataTableHeader>
      <DataTable>
        <DataBox>
          <DataName>Capital</DataName>
          <DataValue>{data}</DataValue>
        </DataBox>
      </DataTable>
    </SectionWrapper>
  );
}
WeatherSection.propTypes = {
  header: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
};
export default WeatherSection;
