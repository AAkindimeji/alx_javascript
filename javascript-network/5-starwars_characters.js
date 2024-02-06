const request = require('request');

const filmId = process.argv[2]; // Get film ID from arguments
const swapiUrl = 'https://swapi-api.alx-tools.com/api/films/';

request(`${swapiUrl}${filmId}`, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else {
    const film = JSON.parse(body);

    for (const url of film.characters) {
      request(url, (error, response, characterBody) => {
        if (error) {
          console.error('Error:', error);
        } else {
          const character = JSON.parse(characterBody);
          console.log(character.name);
        }
      });
    }
  }
});
