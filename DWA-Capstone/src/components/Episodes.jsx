import React from 'react';

const EpisodePreview = ({ episode }) => {
  return (
    <div>
      <p>{episode.title}</p>
      <p>{episode.duration}</p>
      {/* Add other episode details as needed */}
    </div>
  );
};

export default EpisodePreview;
