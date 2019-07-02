const stdin = process.stdin;

stdin.setRawMode(true);
stdin.setEncoding('utf8');

// on any input from stdin (standard input), output a "." to stdout
// \u0042 = b;

stdin.on('data', (key) => {
  if (key === '\u0003') {
    process.stdout.write("Thanks for using me, ciao!");
    process.exit();
  }
  if (key === 'b') {
    console.log(key);
    // process.stdout.write('\x99');
  }
  if (key > 0) {
    process.stdout.write(`setting timer for ${key} seconds`);
    setTimeout(() => {
      console.log(key);
      // process.stdout.write('\x99');  
    }, key*1000)
  }
});

console.log('after callback');

// function timer(timeInput) {
//   for (let number of timeInput) {

//     if(number > 0) {
//       setTimeout(() => {
//         console.log(number);
//         // process.stdout.write('\x99');
//       }, number * 1000)
//     }
//   };
// }