class Square extends Rectangle {
    constructor(size) {
      super(size, size);
    }
  
    charPrint(c = 'X') { // Default to 'X' if c is not provided
      this.print(c); // Reuse inherited print() method
    }
  }
  
  module.exports = Square;
  