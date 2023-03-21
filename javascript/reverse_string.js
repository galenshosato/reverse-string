
//Function that I created
function reverseString(str) {
  let newString = []
  let splitString = str.split('')
  let ittSplitString = [...splitString]
  i = 0
  while (i <= splitString.length) {
    letter = ittSplitString.pop()
    newString.push(letter)
    i = i + 1
  }
  let string = newString.join('')
  return string
}

//Function that ChatGPT created
function reverseString(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution
