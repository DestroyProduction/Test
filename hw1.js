//5.
function WordCount(str) { 
    return str.split(" ").length;
  }  
  console.log(WordCount("Hello"));
  console.log(WordCount("hello world"));
  console.log(WordCount("Oops, something goes wrong while loading page"));
//8.
function Reverse(str) {
    return str.split("").reverse().join("");
}
console.log(reverseStr("Welcome to JavaScript!"));