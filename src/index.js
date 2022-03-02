import React from 'react';
import WaveBase from './wave';

const defaults = {
  height: 20,
  amplitude: 20,
  speed: 0.15,
  points: 3,
};

const Wave = ({ options, ...rest }) => (
  <WaveBase {...defaults} {...options} {...rest} />
);

Wave.defaultProps = {
  paused: false,
  fill: '#fff',
};

export default Wave;
