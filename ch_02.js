function getAverage(scores) {
  if (scores.length === 0) {
    return 0;
  } else {
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
      sum += scores[i]; // Fix: Access the current element, not the whole array
    }
    return sum / scores.length; // What if scores.length is 0?
  }
}

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));
