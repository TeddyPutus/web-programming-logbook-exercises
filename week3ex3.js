let precision = 1000;

function isNumber(value) {
  return !isNaN(value) && value !== null && value.trim() !== '';
}

function calculatePi(iterations){
  let pi = 0;
  let sign = 1;

  for (let i of Array(iterations).keys()) {
    pi += (4 / (2 * i + 1)) * sign;
    sign *= -1;
  }

  return pi;
}

if (process.argv.length > 2){
  // we have been given an argument, first two args are the node command and the filename
  if(!isNumber(process.argv[2])) {
    console.error("Please provide a valid number for precision.");
    process.exit(1);
  }
  console.log("Precision is set to: " + process.argv[2]);
  precision = parseInt(process.argv[2]);
}

console.log(`Pi to ${precision} iterations is: ${calculatePi(precision)}`);
