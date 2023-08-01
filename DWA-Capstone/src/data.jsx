
const API_BASE_URL = 'https://podcast-api.netlify.app';

export const fetchShows = async () => {
  const response = await fetch(`${API_BASE_URL}/shows`);
  const data = await response.json();
  return data;
};

export const fetchShowDetails = async (showId) => {
  const response = await fetch(`${API_BASE_URL}/id/${showId}`);
  const data = await response.json();
  return data;
};
// data.js

// export const fetchShows = async () => {
//   try {
//     const response = await fetch('https://podcast-api.netlify.app/shows');
//     const data = await response.json();
//     // Format the data to include genres as title arrays
//     const formattedData = data.map((show) => ({
//       ...show,
//       genres: show.genres.map((genreId) => genreTitleMapping[genreId]),
//     }));
//     return formattedData;
//   } catch (error) {
//     throw new Error('Error fetching shows:', error);
//   }
// };
