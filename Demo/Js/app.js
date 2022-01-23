'use strict';



var input0 = prompt('Enter your Name : ');
console.log('Your Name is : ', input0);

var input1 = prompt('Enter your gender : ');
console.log('Your Gender is : ', input1);

var input2 = prompt('Enter your age : ');
console.log('Your Name is : ', input2);

if (input2 <=0)

alert('your age less than 0.');





// var result = confirm('are you Sure');
// console.log('Confirm result is : ', result);

// Conditional Statement;

var value=12; 

if (value % 2 == 0) {
  console.log('Even number');
} else {
  console.log('Odd number');
 

var color = prompt('What is your favorite color?');

if (color.toLocaleLowerCase()=='red') {

    console.log('his favorite color is red');

}else if (color.toLocaleLowerCase()=='blue'){
  
  console.log('blue');
}else{
    console.log(color);
};


var value1 = 12;
switch (value1 % 2) {
  case 0:
    console.log('Even number');
    break;
  case 1:
    console.log('Odd number');
    break;
  default:
    console.log('Invalid input');

}

// .... conditions and popup boxes
var person=prompt('Please enter your name','Harry Potter');

if (person!=null){
  var x='Hello ' + person + ' ! How are you today?';
  alert(x)
}else {
    prompt('please add a valid name ');
}


// sec example

var hour = 10;
if (hour >=6 && hour <12){
  alert ('good morning ');
}
else if (hour>=12 &&<18){
  alert ('good afternoon');
}
else {
  alert('good evening');
}