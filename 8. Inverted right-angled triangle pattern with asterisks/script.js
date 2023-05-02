function printInvertedRightAngleTriangle(i) {
    let pattern = '';
    for (let row = i; row >= 1; row--) {
    for (let col = 1; col <= row; col++) {
      pattern += '* ';
    }
      pattern += '\n';
    }
      console.log(pattern);
  }
  
  printInvertedRightAngleTriangle(6);
  