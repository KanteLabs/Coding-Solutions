//Reverse a String. First I made sure to split the string by no spaces. Then I reverse the string and join it back together and return it. 
function reverseString(str) {
   return str.split('').reverse().join('');
}

reverseString("hello");

//Factor a number. While the number is greater than 0, I will decrease it by 1 and also multiply it by the sum and add that value back into the sum.
function factorialize(num) {
  var sum = 1;
    while(num > 0){
      sum*=num;
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

//Find the longest word in a sentence
function findLongestWord(str) {
  str = str.split(' ').sort(function(a,b){
    return b.length - a.length;
  });
  return str[0].length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");

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

//Return the Largest Numbers in Arrays. Apply function applies Math.max each time to arr[large]
function largestOfFour(arr) {
  return arr.map((large)=>{
    return Math.max.apply(null, large);
  });
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

//Confirm the ending. Works by extracting a value in str that is the length of target.
function confirmEnding(str, target) {
  var str_end = "";
  str_end = str.substr(str.length - target.length);
  if(str_end===target){
    return true;
  }else{
    return false;
  }
}
confirmEnding("Bastian", "n");


//Repeat a string by the vaule of num
function repeatStringNumTimes(str, num) {
  var str_holder = [];
  if(num<0){
    return '';
  }else{
    for(var i =0; i<num;i++){
      str_holder.push(str);
    }
  }
  return str_holder.join('');
}

repeatStringNumTimes("*", 3);

//Cut a sting based on the value of num
function truncateString(str, num) {
  var str_holder = [];
  if(str.length>num && num>3){
   str_holder = str.slice(0, num-3);
    return str_holder + '...';
  }else if(num<=3){
    str_holder = str.slice(0, num);
    return str_holder + '...';
  }else{
    return str;
  }
}
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2);

//Chunky Monkey
function chunkArrayInGroups(arr, size) {
  var newArr = [];  
  for(var i=0;i<arr.length;){
    newArr.push(arr.slice(i, i+size));
    i+=size;
  }  
  return newArr;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2);

//Chop start of a sentence by value; I used a reduce function to go through and slice off the start of an array based on the howMany value;
function slasher(arr, howMany) {
 return arr.slice(howMany);
}

slasher([1, 2, 3], 2);

//Mutations
function mutation(arr) {
  var arr1 = arr[0].toLowerCase();
  var arr2 = arr[1].toLowerCase();
  
  for(var i = 0; i<arr2.length;i++){
    if(arr1.indexOf(arr2[i]) < 0){
      return false;
    }
  }return true;
  
}

mutation(["hello", "hey"]);

//Removed null objects; Use the filter property to remove parts of an array that where consider null values
function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  return arr.filter(Boolean);
}

bouncer([7, "ate", "", false, 9]);

//Seek and destroy
function destroyer(arr) {
  // Remove all the values
  var args = Array.from(arguments);
  args.splice(0,1);
  
  return arr.filter(function(val){
    return args.indexOf(val) === -1;
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

//Where do I belong
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  function sorted(a, b){
    return a -b;
  }
  arr = arr.sort(sorted);
  
  for(var i = 0; i<arr.length; i++){
    if(arr[i]===num){
      return arr.indexOf(arr[i]);
    }else if(arr[i] != num){
      arr.push(num);
      arr = arr.sort(sorted);
      return arr.indexOf(num);
    }
  }
}

getIndexToIns([40, 60], 50);

//Ceasers Cipher
function rot13(str) { // LBH QVQ VG!
  var strHolder = [];
  var string;
  
  for(var i = 0; i <str.length; i++){
    if(str.charCodeAt(i) === 32){
       strHolder.push(' ');
    }else if(str.charCodeAt(i) <= 90 && str.charCodeAt(i)>77){
      strHolder.push(String.fromCharCode(str.charCodeAt(i) - 13));
    }else if(str.charCodeAt(i)<=77 && str.charCodeAt(i)>64)
    strHolder.push(String.fromCharCode(str.charCodeAt(i) + 13));
    else{
    strHolder.push(String.fromCharCode(str.charCodeAt(i)));
    }
  }
  return strHolder.join('');
}

// Change the inputs below to test
rot13("SERR CVMMN!");
