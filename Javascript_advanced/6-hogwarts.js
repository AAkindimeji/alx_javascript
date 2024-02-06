// Module studentHogwarts
const studentHogwarts = (() => {
    let privateScore = 0;
    let name = null;
  
    const changeScoreBy = (points) => {
      privateScore += points;
    };
  
    return {
      setName: (newName) => {
        name = newName;
      },
      rewardStudent: () => {
        changeScoreBy(1);
      },
      penalizeStudent: () => {
        changeScoreBy(-1);
      },
      getScore: () => {
        return `${name}: ${privateScore}`;
      }
    };
  })();
  
  // Create instances and interact with them
  const harry = studentHogwarts();
  harry.setName("Harry");
  harry.rewardStudent();
  harry.rewardStudent();
  harry.rewardStudent();
  harry.rewardStudent();
  console.log(harry.getScore()); // Output: Harry: 4
  
  const draco = studentHogwarts();
  draco.setName("Draco");
  draco.rewardStudent();
  draco.penalizeStudent();
  draco.penalizeStudent();
  draco.penalizeStudent();
  console.log(draco.getScore()); // Output: Draco: -2
  