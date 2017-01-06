//Reverse a String. First I made sure to split the string by no spaces. Then I reverse the string and join it back together and return it. 

function reverseString(str) {
   str = str.split("").reverse().join("");
  return str;
}

reverseString("hello");

//Factor a number. While the number is greater than 0, I will decrease it by 1 and also multiply it by the sum and add that value back into the sum.

function factorialize(num) {
  var sum = 1;
    while(num > 0){
      sum = sum * num;
      num--;
    }return sum;
}

factorialize(5);

//Check for Palindromes. I used a regex formula that looks for any non alphanumeric charcter or special character and replaces it with an empty string. I then compared str to reverse to see if they are === to each other. 

function palindrome(str) {
  var reverse = "";
  var regex = /(\W*)(_*)/g;  
  str = str.toLowerCase();
  str = str.replace(regex, "");
  reverse = str.split("").reverse().join("");
  if(reverse===str){
    return true;
  }else 
  return false;
}

palindrome("_eye");

//Title Case a Sentence. First I lowercased the input str and split it up into an array. In a new array variable called string I pushed the first value in each nested array of str after it is capitalize. 

function titleCase(str) {
  str = str.toLowerCase().split(" ");
  var string = [];
  for(var i = 0; i < str.length; i++){
    string.push(str[i].charAt(0).toUpperCase() + str[i].slice(1));
  }
  return string.join(" ");
}

titleCase("I'm a little tea pot");

//Chop start of a sentence by value; I used a reduce function to go through and slice off the start of an array based on the howMany value;

function slasher(arr, howMany) {
  // it doesn't always pay to be first
  return arr.reduce(function(shorten){
    return arr.slice(howMany);
  });
}

slasher([1, 2, 3], 2);

//Removed null objects; Use the filter property to remove parts of an array that where consider null values


function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  return arr.filter(Boolean);
}

bouncer([7, "ate", "", false, 9]);

