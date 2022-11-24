
const spinnerImages = "|/-\|/-\|" 
let time = 100;
for (const char of spinnerImages) {
  setTimeout(() => {
    process.stdout.write(`\r${char}      `);
  }, time);
  time += 200;
}

