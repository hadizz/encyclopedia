import React from 'react';
import { useParams } from 'react-router-dom';

const CountryPage = () => {
  const { code } = useParams();
  return (
    <div>
      <span>country code is : </span>
      <h3>{code}</h3>
    </div>
  );
};

export default CountryPage;
