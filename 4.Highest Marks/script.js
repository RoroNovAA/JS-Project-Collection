let marks = [58, 51, 64, 89, 14];

let highestMarks = marks.reduce((a, b) => (a > b ? a : b));

console.log(highestMarks);