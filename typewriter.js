const sentence = "hello there from lighthouse labs";

for (let i in sentence) {
  setTimeout(() => {
    process.stdout.write(sentence[i]);
  }, 50 * i);
  if (i == sentence.length - 1) {
    setTimeout(() => {
      console.log();
    }, 50 * i);
  }
}
