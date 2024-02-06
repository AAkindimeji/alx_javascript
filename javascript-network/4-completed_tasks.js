const request = require('request');

const apiUrl = process.argv[2]; // Get API URL from arguments
const completedTasksByUserId = {};

request(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else {
    const tasks = JSON.parse(body);

    for (const task of tasks) {
      if (task.completed) {
        const userId = task.userId;
        completedTasksByUserId[userId] = (completedTasksByUserId[userId] || 0) + 1;
      }
    }

    console.log(completedTasksByUserId);
  }
});
