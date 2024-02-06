const request = require('request');

const apiUrl = process.argv[2]; // Get the API URL from command line arguments
const wedgeId = 18; // Character ID for Wedge Antilles
let count = 0;

function fetchFilms(url) {
  request(url, (error, response, body) => {
    if (error) {
      console.error('Error:', error);
    } else {
      const films = JSON.parse(body);

      for (const film of films.results) {
        if (film.characters.includes(wedgeId)) {
          count++;
        }

        if (films.next) {
          fetchFilms(films.next); // Recursively fetch next page if available
        } else {
          console.log(count); // Print the final count
        }
      }
    }
  });
}

fetchFilms(apiUrl); // Start fetching from the initial API URL
