import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

const CountryPage = () => {
  const history = useHistory();
  const { code } = useParams();
  const [details, setDetails] = React.useState(null);

  // get country details

  React.useEffect(() => {
    async function fetchCountryDetails() {
      try {
        const response = await axios.get(
          `https://restcountries.eu/rest/v2/alpha/${code}`
        );

        const json = await response.data;
        console.log('fetch data  ', json);

        let value;
        // eslint-disable-next-line
        for (var name in json) {
          value = json[name];
          console.log(name, value);
        }
        setDetails(json);
      } catch (error) {
        console.log('error in fetch data coiuntry page');
      }
    }

    fetchCountryDetails();
  }, [code]);

  return (
    <div>
      <button onClick={() => history.goBack()} type="button">
        go back
      </button>
      <span>country code is : </span>
      <h3>{code}</h3>
    </div>
  );
};

export default CountryPage;
