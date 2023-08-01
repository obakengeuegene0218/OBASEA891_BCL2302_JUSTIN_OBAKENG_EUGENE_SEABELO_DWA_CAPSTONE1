import React from 'react';

const SeasonDetails = ({ show, season, onEpisodePlay }) => {
  const episodes = show.episodes.filter((episode) => episode.season === season);

  return (
    <div className="season-details">
      <h2>{show.title} - Season {season}</h2>
      {episodes.map((episode) => (
        <div key={episode.id}>
          <p>Episode: {episode.title}</p>
          <p>Description: {episode.description}</p>
          <button onClick={() => onEpisodePlay(episode)}>Play Episode</button>
        </div>
      ))}
      <button onClick={() => onEpisodePlay(null)}>Back to Show Details</button>
    </div>
  );
};

export default SeasonDetails;

