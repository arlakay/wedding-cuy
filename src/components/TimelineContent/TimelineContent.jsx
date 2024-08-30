import React from 'react';
import { data } from './data';
import Timeline from '../Timeline/Timeline';

const TimelineContent = () => {
  return (
    <div>
      <Timeline data={data} />
    </div>
  );
}

export default TimelineContent;
