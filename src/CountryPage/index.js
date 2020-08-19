import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

import { CountryPageWrapper, Flag } from '../Components';
import Section from './Section';
import Header from './Header';

const CountryPage = () => {
  const history = useHistory();
  const { code } = useParams();
  const [details, setDetails] = useState(null);
  const [infoSectionData, setInfoSectionData] = useState(null);
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
      {/* <button onClick={() => history.goBack()} type="button">
        go back
      </button>
      <br /> */}
      {!loading && (
        <>
          <Header />
          <Flag src={details.flag} alt={`flag of ${details.name}`} />
          <Section header="information" data={infoSectionData} />
        </>
      )}
    </CountryPageWrapper>
  );
};

export default CountryPage;
