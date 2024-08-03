function countCharOccurrences(str) {
  let charCount = {};
  for (let char of str) {
    charCount[char] = charCount[char] + 1 || 1;
  }
  console.log("Character Count:", charCount);
}

countCharOccurrences("character");
