import React from 'react';
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
              <DataBox>
                <DataName>{key}</DataName>
                <DataValue>{data[key]}</DataValue>
              </DataBox>
            );
          })}
      </DataTable>
    </SectionWrapper>
  );
}

export default Section;
