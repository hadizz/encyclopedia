import React from 'react';
import PropTypes from 'prop-types';

import {
  SectionWrapper,
  DataTableHeader,
  DataTable,
  DataBox,
  DataName,
  DataValue,
} from '../Components';

function Section({ header, data }) {
  console.log('in section data : ', data);
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
      </DataTable>
    </SectionWrapper>
  );
}
Section.propTypes = {
  header: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
};
export default Section;
