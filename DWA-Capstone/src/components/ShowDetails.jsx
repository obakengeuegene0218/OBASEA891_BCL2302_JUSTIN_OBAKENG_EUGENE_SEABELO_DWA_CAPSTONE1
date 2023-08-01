import React from 'react';

const ShowDetails = ({ show, onSeasonChange }) => {
  return (
    <div className="show-details">
      <h2>{show.title}</h2>
      <p>Seasons: {show.seasons}</p>
      <p>Last Updated: {formatDate(show.updated)}</p>
      <p>Genres: {show.genres.map((genreId) => genreTitleMapping[genreId]).join(', ')}</p>
      <button onClick={() => onSeasonChange(null)}>Back to Show List</button>
      <hr />
      <h3>Seasons:</h3>
      {show.seasons.map((season) => (
        <button key={season} onClick={() => onSeasonChange(season)}>
          Season {season}
        </button>
      ))}
    </div>
  );
};

export default ShowDetails;

