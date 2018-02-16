// test function for tests.js
var testFunc = () => {
  return 'test function';
}

class Scorekeep {
  constructor() {
    this.score = 0;
    this.isFirstBowl = true;
    this.frame = 1;
    this.frames = [];
  }
  
  // keep for testing purposes
  testMethod() {
    return this.score;
  }
  
  getScore() {
    return this.score;
  }
  
  addBowl(value) {
    if (this.isFirstBowl) {
      if (value === 10) { // strike!!
        
      } else {
        
      }
    } else {
      
    }
    this.score += value;
    return this.score;
  }
  
  getNextFrame(frame) {
    if (!isFirstBowl) {
      frame++;
    }
    return frame;
  }
}



export default Scorekeep;