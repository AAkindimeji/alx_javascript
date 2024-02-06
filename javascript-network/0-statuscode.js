const request = require('request');

const url = process.argv[2]; // Get the URL from the command line arguments

request(url, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else {
    console.log('code:', response.statusCode);
  }
});
