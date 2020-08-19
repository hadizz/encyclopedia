import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

const CountryPage = () => {
  const history = useHistory();

  const { code } = useParams();
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
