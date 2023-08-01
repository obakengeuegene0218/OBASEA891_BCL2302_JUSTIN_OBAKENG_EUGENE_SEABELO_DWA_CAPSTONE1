
import React, { useState, useEffect } from 'react';
import { fetchShowPreviews } from './data';
import ShowPreview from './components/Showpreview';
import FavoritesList from './components/Favourates';
import './App.css';
import AudioPlayer from './components/Audio';

const App = () => {
  const [showPreviews, setShowPreviews] = React.useState([]);
  const [favorites, setFavorites] = useState([]);
  const [sortBy, setSortBy] = useState('');
  const [searchQuery, setSearchQuery] = useState('');


  const handleSearch = () => {
    // Filter the showPreviews based on the searchQuery
    const filteredShows = showPreviews.filter((show) => {
      const title = show.title.toLowerCase();
      const description = show.description.toLowerCase();
      const genres = show.genres.map((genre) => genre.toLowerCase());

      return title.includes(searchQuery.toLowerCase()) || description.includes(searchQuery.toLowerCase()) || genres.includes(searchQuery.toLowerCase());
    });

    // Update the showPreviews state with the filtered shows
    setShowPreviews(filteredShows);
  };

  
  useEffect(() => {
    const getShowPreviews = async () => {
      try {
        const previews = await fetchShowPreviews();
        setShowPreviews(previews);
      } catch (error) {
        console.error('Error fetching show previews:', error);
      }
    };
    getShowPreviews();
  }, []);

  const sortShows = (criteria) => {
    setSortBy(criteria);
    let sortedShows = [...showPreviews];

    switch (criteria) {
      case 'titleAZ':
        sortedShows.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'titleZA':
        sortedShows.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case 'dateUpdatedAscending':
        sortedShows.sort((a, b) => new Date(a.updated) - new Date(b.updated));
        break;
      case 'dateUpdatedDescending':
        sortedShows.sort((a, b) => new Date(b.updated) - new Date(a.updated));
        break;
      default:
        break;
    }

    setShowPreviews(sortedShows);
  };

  const removeFromFavorites = (episodeId) => {
    setFavorites(favorites.filter((id) => id !== episodeId));
  };

  return (
    <div className="app">
      <header>
        <h1 className="head">Podcast App</h1>
        <div>
          <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search Podcasts" />
          <button onClick={handleSearch}>Search</button>
        </div>
      </header>
      <main>
        <div>
          <h2>Shows</h2>
          <div>
            <button onClick={() => sortShows('titleAZ')}>Sort by Title A-Z</button>
            <button onClick={() => sortShows('titleZA')}>Sort by Title Z-A</button>
            <button onClick={() => sortShows('dateUpdatedAscending')}>Sort by Date Updated (Ascending)</button>
            <button onClick={() => sortShows('dateUpdatedDescending')}>Sort by Date Updated (Descending)</button>
          </div>
          {showPreviews.map((show) => (
            <ShowPreview key={show.id} show={show} favorites={favorites} setFavorites={setFavorites} />
          ))}
        </div>
        <FavoritesList
          favorites={favorites}
          showPreviews={showPreviews}
          removeFromFavorites={removeFromFavorites}
        />
      </main>
    </div>
  );
};

export default App;



