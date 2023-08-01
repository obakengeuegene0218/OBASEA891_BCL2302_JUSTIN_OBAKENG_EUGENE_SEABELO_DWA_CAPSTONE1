// import React, { useState } from 'react';

// const genreTitleMapping = {
//   1: 'Personal Growth',
//   2: 'True Crime and Investigative Journalism',
//   3: 'History',
//   4: 'Comedy',
//   5: 'Entertainment',
//   6: 'Business',
//   7: 'Fiction',
//   8: 'News',
//   9: 'Kids and Family',
// };

// const ShowPreview = ({ show }) => {
//   const [showDetails, setShowDetails] = useState(false);

//   const handleShowDetail = () => {
//     setShowDetails(!showDetails);
//   };

//   const formatDate = (dateString) => {
//     const options = { year: 'numeric', month: 'long', day: 'numeric' };
//     return new Date(dateString).toLocaleDateString(undefined, options);
//   };

//   return (
//     <div className="show-preview">
//       <img className="podcast-item" src={show.image} alt={show.title} onClick={handleShowDetail} />
//       <h2 className="podcast-item">{show.title}</h2>
//       <p className="podcast-item">Seasons: {show.seasons}</p>
//       <p className="podcast-item">Last Updated: {formatDate(show.updated)}</p>
//       <p className="podcast-item">Genres: {show.genres.map((genreId) => genreTitleMapping[genreId]).join(', ')}</p>
//       {/* Show More Details button */}
//       <button className="show-more-button" onClick={handleShowDetail}>
//         {showDetails ? 'Show Less Details' : 'Show More Details'}
//       </button>
//       {showDetails && <p className="podcast-item5">Description: {show.description}</p>}
//     </div>
//   );
// };

// export default ShowPreview;

// ShowPreview.jsx (Updated)
import React, { useState } from 'react';

const genreTitleMapping = {
  
  1: 'Personal Growth',
  2: 'True Crime and Investigative Journalism',
  3: 'History',
  4: 'Comedy',
  5: 'Entertainment',
  6: 'Business',
  7: 'Fiction',
  8: 'News',
  9: 'Kids and Family',

};

const ShowPreview = ({ show }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);


  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="show-preview">
      <img className="podcast-item" src={show.image} alt={show.title}  />
      <h2 className="podcast-item1">{show.title}</h2>
      <p className="podcast-item2">Seasons: {show.seasons}</p>
      <p className="podcast-item3">Last Updated: {formatDate(show.updated)}</p>
      <p className="podcast-item4">Genres: {show.genres.map((genreId) => genreTitleMapping[genreId]).join(', ')}</p>
      {showDetails && <p className="podcast-item5">Description: {show.description}</p>}
      <button className="favorite-button" onClick={handleFavoriteClick}>
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    </div>
  );
};

export default ShowPreview;


