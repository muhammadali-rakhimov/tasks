function findLongestWord() {
  const sentence =
  "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers";
  
  const vowels = ["a", "i", "o", "e", "u", "y"];

  const words = sentence.split(/[, ]+/);
  let max = "";

  for (let i = 0; i < words.length; i++) {
    let currentWord = words[i];
    if (currentWord.length > max.length) {
      max = currentWord;
    } else if (currentWord.length == max.length) {
      let counterCurrent = 0;
      let counterMax = 0;

      for (let letter of currentWord) {
        if (vowels.includes(letter)) {
          counterCurrent++;
        }
      }

      for (let letter of max) {
        if (vowels.includes(letter)) {
          counterMax++;
        }
      }

      if(counterCurrent > counterMax) {
        max = currentWord
      }
    }
  }

  console.log(words);

  return console.log(max);
}

findLongestWord();
