
// grades papers

function grades(grade) {
  if (grade === 100) {
    return "A+";
  } else if (grade >= 93) {
    return "A";
  } else if (grade >= 85) {
    return "B";
  } else if (grade >= 80) {
    return "C";
  } else if (grade >= 70) {
    return "D";
  } else {
    return "F";
  }
}

console.log(grades(85));
console.log(grades(100));
console.log(grades(77));
console.log(grades(93));

// get the area
function calculateArea(radius) {
    return Math.PI * radius * radius;
}

let area = calculateArea(5);
console.log("The area is: " + area); 