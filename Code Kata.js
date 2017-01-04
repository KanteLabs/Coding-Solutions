//Finds the smallest integer in an array. Works by using the sort function to sort the array from smallest to largest and returning the first value of the array.
//Time: 318ms Passed: 105 Failed: 0
findSmallestInt(args) {
    args = args.sort(function(min, max){
      return min - max;
    })
return args[0];

//Just Check for the first value of name to match R or r
//Time: 405ms Passed: 5 Failed: 0
function areYouPlayingBanjo(name) {
  // Implement me
  if(name.charAt(0) === "r" || name.charAt(0) === "R"){
    return name + " plays banjo";
  }else
  return name + " does not play banjo";
}
