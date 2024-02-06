function welcome(firstName, lastName) {
    // Construct the full name within the function's scope
    const fullName = firstName + " " + lastName;
   
    function displayFullName() {
      alert("Welcome " + fullName + "!");
    }
   
    // Call the displayFullName function to show the greeting
    displayFullName();
   }
   
   // Example usage:
   welcome('Holberton', 'School'); // Should prompt an alert with "Welcome Holberton School!"
   
   // Attempting to access fullName outside the function will result in a reference error
   alert(fullName); // Will produce a reference error: "fullName is not defined"
   