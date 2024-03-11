#!/usr/bin/node

const process = require('process');
function add(a, b) {
  return parseInt(a) + parseInt(b);
}

// Check if there are two command-line arguments
if (process.argv.length !== 4) {
  console.log('Usage: integer1 integer2');
} else {
  // Parse command-line arguments
  const num1 = process.argv[2];
  const num2 = process.argv[3];

  // Check if arguments are valid integers
  if (!Number.isNaN(num1) && !Number.isNaN(num2)) {
    // Calculate and print the sum
    const result = add(num1, num2);
    console.log(result);
  } else {
    console.log('Both arguments must be valid integers.');
  }
}
