import React from 'react';
import PropTypes from 'prop-types';
import ReactMapGL from 'react-map-gl';
import { SectionWrapper, DataTableHeader, MapWrapper } from './Components';
import 'mapbox-gl/dist/mapbox-gl.css';

const MapSection = ({ header, data }) => {
  const [viewport, setViewport] = React.useState({
    latitude: data[0],
    longitude: data[1],
    width: 'null',
    height: '50vh',
    zoom: 4,
  });

  return (
    <SectionWrapper>
      <DataTableHeader>{header}</DataTableHeader>
      <MapWrapper>
        <ReactMapGL
          // eslint-disable-next-line
          {...viewport}
          mapStyle="mapbox://styles/mapbox/streets-v11"
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          onViewportChange={(nextViewport) => setViewport(nextViewport)}
        />
      </MapWrapper>
    </SectionWrapper>
  );
};
MapSection.propTypes = {
  header: PropTypes.string.isRequired,
  data: PropTypes.shape({
    0: PropTypes.number.isRequired,
    1: PropTypes.number.isRequired,
  }).isRequired,
};

export default MapSection;
