function welcomeMessage(fullName) {
    // Closure: Return a function that captures the fullName variable
    return function() {
      alert("Welcome " + fullName + "!");
    };
   }
   
   // Create variables that store the returned functions with specific names
   const guillaume = welcomeMessage("Guillaume");
   const alex = welcomeMessage("Alex");
   const fred = welcomeMessage("Fred");
   
   // Call the functions to trigger the alerts
   guillaume(); // Alerts "Welcome Guillaume!"
   alex();      // Alerts "Welcome Alex!"
   fred();      // Alerts "Welcome Fred!"
   