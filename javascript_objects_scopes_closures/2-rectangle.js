class Rectangle {
    constructor(w, h) {
      if (w <= 0 || h <= 0 || !Number.isInteger(w) || !Number.isInteger(h)) {
        return {}; // Create empty object for invalid inputs
      }
  
      this.width = w;
      this.height = h;
    }
  }
  
  module.exports = Rectangle;
  