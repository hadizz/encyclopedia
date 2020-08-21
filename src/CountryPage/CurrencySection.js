import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import LaodingItem from '../Components/LaodingItem';

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
} from './Components';

function CurrencySection({ header, data }) {
  const [rates, setRates] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currency, setCurrency] = useState(null);

  console.log('in CurrencySection data : ', data);
  console.log('in CurrencySection rates : ', rates);

  React.useEffect(() => {
    async function fetchCountryDetails() {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://api.exchangeratesapi.io/latest?base=${data.code}`
        );

        const json = await response.data;
        console.log('fetch data  ', json);

        setRates(json.rates);
        setCurrency(data.code);
      } catch (error) {
        console.log('error in fetch data coiuntry page');
      } finally {
        setLoading(false);
      }
    }

    fetchCountryDetails();
  }, [data]);

  function handleOnchange(event) {
    event.preventDefault();
    setCurrency(event.target.value);
  }

  const ShowCurrency = () => {
    if (loading) {
      return <LaodingItem />;
    }
    if (rates === null) {
      return <div>This currency is not supported with our api.</div>;
    }
    return (
      <ExchangeBox>
        <ExchangeInnerBox>
          {currency === 'EUR'
            ? rates[Object.keys(rates)[0]].toFixed(2)
            : rates[currency].toFixed(2)}
        </ExchangeInnerBox>
        <ExchangeInnerBox>
          <Select onChange={handleOnchange}>
            {rates &&
              Object.keys(rates).map((key, index) => {
                return (
                  <Option value={key} selected={key === currency}>
                    {key}
                  </Option>
                );
              })}
          </Select>
        </ExchangeInnerBox>
      </ExchangeBox>
    );
  };

  return (
    <SectionWrapper>
      <DataTableHeader>{header}</DataTableHeader>
      <DataTable>
        {data &&
          Object.keys(data).map((key, index) => {
            return (
              <DataBox key={index}>
                <DataName>{key}</DataName>
                <DataValue>{data[key]}</DataValue>
              </DataBox>
            );
          })}
        <CurrencyDataBox>
          <DataName>Exchange</DataName>
          <DataValue style={{ marginTop: 7, marginBottom: 5 }}>
            {`1 ${data.name} equals`}
          </DataValue>
          <ShowCurrency />
        </CurrencyDataBox>
      </DataTable>
    </SectionWrapper>
  );
}
CurrencySection.propTypes = {
  header: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
};
export default CurrencySection;
