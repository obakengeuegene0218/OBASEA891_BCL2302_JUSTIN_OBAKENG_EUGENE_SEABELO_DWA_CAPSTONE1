// ShowList.js

// ShowList.js
// ShowList.js

import React, { useState } from 'react';
import SeasonView from './SeasonPreview';

const ShowList = ({ shows }) => {
  const [loading, setLoading] = useState(true);
  const [selectedShow, setSelectedShow] = useState(null);
  const [selectedSeason, setSelectedSeason] = useState(null);

  const handleShowClick = (show) => {
    setSelectedShow(show);
  };

  const handleSeasonClick = (seasonNumber) => {
    setSelectedSeason(seasonNumber);
  };

  // Function to render the list of shows
  const renderShowList = () => {
    return shows.map((show) => (
      <div key={show.id} className="show-preview">
        <img className="show-preview__image" src={show.image} alt={show.title} />
        <h2 className="show-preview__title">{show.title}</h2>
        <p className="show-preview__seasons">Seasons: {show.seasons.length}</p>
        <p className="show-preview__updated">Last Updated: {new Date(show.updated).toLocaleDateString()}</p>
        <p className="show-preview__genres">Genres: {show.genres.join(', ')}</p>
        <button onClick={() => handleShowClick(show)}>View Seasons</button>
      </div>
    ));
  };

  return (
    <div className="show-list">
      {loading ? (
        <p>Loading...</p>
      ) : selectedShow ? (
        <SeasonView
          show={selectedShow}
          selectedSeason={selectedSeason}
          onSeasonClick={handleSeasonClick}
          onBackClick={() => setSelectedShow(null)}
        />
      ) : (
        renderShowList()
      )}
    </div>
  );
};

export default ShowList;
