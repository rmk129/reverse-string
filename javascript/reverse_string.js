function reverseString(str) {
  newString=""
  for(let i = str.length -1; i >= 0; i--){
        newString = newString + str[i]
  }
  return newString
  // type your code here
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
