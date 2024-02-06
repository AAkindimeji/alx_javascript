module.exports = {
    addMeMaybe: function (number, theFunction) {
      const incrementedNumber = number + 1; // Increment the number
      theFunction(incrementedNumber); // Call the provided function with the incremented value
    }
  };
  