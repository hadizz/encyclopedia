import React from 'react';
import PropTypes from 'prop-types';
import {
  ErrorWrapper,
  ErrorH3,
  ErrorP,
  ErrorHeader,
  CloseIcon,
} from './Components';

const msg = (t) => {
  console.log('t is : ', t);
  switch (t) {
    case 'Empty Field':
      return 'Please Type Something';

    case '404':
      return "Can't find any Country";

    default:
      return 'Unknown Error';
  }
};

const ErrorBox = ({ errorType }) => {
  console.log('type in error box:', errorType);
  ErrorBox.propTypes = {
    errorType: PropTypes.string.isRequired,
  };

  return (
    <ErrorWrapper>
      <ErrorH3>
        Error:
        {` `}
        {errorType}
      </ErrorH3>
      <ErrorP>{msg(errorType)}</ErrorP>
    </ErrorWrapper>
  );
};

export default ErrorBox;
