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

//Check for Palindromes. 