import React from 'react';
import PropTypes from 'prop-types';
import { ErrorWrapper, ErrorH3, ErrorP } from './Components';

const msg = (data) => {
  switch (data.status) {
    case 'Empty Field':
      return 'Please Type Something';

    case '404':
      return "Can't find any Country";

    default:
      return data.message;
  }
};

const ErrorBox = ({ errorData }) => {
  ErrorBox.propTypes = {
    errorData: PropTypes.arrayOf(
      PropTypes.shape({
        status: PropTypes.string,
        message: PropTypes.string,
      })
    ).isRequired,
  };

  return (
    <ErrorWrapper>
      <ErrorH3>
        Error:
        {` `}
        {errorData.status}
      </ErrorH3>
      <ErrorP>{msg(errorData)}</ErrorP>
    </ErrorWrapper>
  );
};

export default ErrorBox;
