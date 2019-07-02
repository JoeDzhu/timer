const args = process.argv;
timeInput = args.slice(2);

for (let number of timeInput) {

  if(number > 0) {
    setTimeout(() => {
      console.log(number);
      // process.stdout.write('\x99');
    }, number * 1000)
  }

};