let sentence = "hello there from lighthouse labs";

sentence += "\n";

for (const i in sentence) {
  setTimeout(() => {
    process.stdout.write(sentence[i]);
  }, 50 * i);
}
