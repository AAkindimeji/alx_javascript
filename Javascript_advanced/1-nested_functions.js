// Global variable
let globalVariable = "Welcome";

function outer() {
  // Alert the global variable
  alert(globalVariable);

  // Variable within outer function
  let course = "Holberton";

  function inner() {
    // Alert globalVariable and course
    alert(globalVariable + " " + course);

    // Variable within inner function
    let exclamation = "!";

    function inception() {
      // Alert globalVariable, course, and exclamation
      alert(globalVariable + " " + course + exclamation);
    }

    // Call inception within inner
    inception();
  }

  // Call inner within outer
  inner();
}

// Call outer in the main code
outer();
