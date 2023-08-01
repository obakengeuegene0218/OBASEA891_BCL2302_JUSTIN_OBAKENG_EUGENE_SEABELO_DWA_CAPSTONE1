// FavoritesList.jsx
// FavoritesList.jsx
import React from 'react';
import ShowPreview from './Showpreview';

const FavoritesList = ({ favoriteShows, genreTitleMapping, onAudioClick }) => {
  return (
    <div className="favorites-list">
      {favoriteShows.map((show) => (
        <div key={show.id} className="favorite-show-preview-container">
          <ShowPreview show={show} genreTitleMapping={genreTitleMapping} />
          <button onClick={() => onAudioClick(show)}>Play Audio</button>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;


