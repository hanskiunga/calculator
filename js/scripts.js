//function to add
var add=function(number1, number2){
    return number1+number2;
  };
  var number1=parseInt(prompt("Enter a number:"));
  var number2=parseInt(prompt("Enter another number:"));;
  var result= add(number1, number2);
  alert(result);

  //function to subtract
var subtract= function(number1, number2){
  return number1-number2;
};
var number1=parseInt(prompt("Enter number:"));
var number2=parseInt(prompt("Enter another number:"));
var result= subtract(number1,number2);
alert(result);

//function to divide
var divide=function(number1,number2){
  return number1/number2;
};
var number1=parseInt(prompt("Enter number:"));
var number3=parseInt(prompt("Enter another number:"));
var result=divide(number1,number2);
alert(result);

//function to multiply
var multiply=function(number1,number2,number3){
  return number1*number2*number3;
}
var number1=parseInt(prompt('Enter a number:'));
var number2=parseInt(prompt("Enter a second number:"));
var number3=parseInt(prompt("Enter a third number:"));
var result=multiply(number1, number2, number3);
alert(result);