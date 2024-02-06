const fs = require('fs');
const request = require('request');

// Extract command line arguments
const [,, url, filePath] = process.argv;

// Function to get contents of webpage and store in a file
function getRequestAndStore(url, filePath) {
  request(url, (error, response, body) => {
    if (error) {
      console.error('Error:', error);
      return;
    }
    if (response && response.statusCode !== 200) {
      console.error('Failed to fetch webpage. Status code:', response.statusCode);
      return;
    }

    // Write body content to file
    fs.writeFile(filePath, body, { encoding: 'utf-8' }, (err) => {
      if (err) {
        console.error('Error writing to file:', err);
        return;
      }
      console.log(`Webpage content successfully stored in '${filePath}'.`);
    });
  });
}

// Execute function
getRequestAndStore(url, filePath);
