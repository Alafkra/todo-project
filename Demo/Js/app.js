'use strict';

var input0 = prompt(' Enter Your Name: ');
console.log('Your Name is : ', input0);

var input1 = prompt(' Enter Your gender: ');
console.log('Your gender is : ', input1);
var gender = ('male' , 'female');

var input3 = prompt(' Enter Your age: ');

if (input3 >=0) {

    console.log('Your age is : ', input3);
    
} else {
    
    alert('your age less than 0')
    
}

var result = prompt('Do you want to skip the Welcoming Message');

if (result!=null && input1=='male') {

    alert (` Welcome Mr ${input0}`);

 } else if (result!=null && input1=='female'){

    alert (` Welcome Ms ${input0}`);
   
 }else{
     
  var result = confirm('    ');
  console.log('Confirm result is : ', result);

}


/*if (input1='male') {

    alert (` Welcome Mr ${input0}`);

 } else if (input1=='female'){

    alert (` Welcome Ms ${input0}`);
   
 }else{
     
  var result = confirm('Do you want to skip the Welcoming Message');
  console.log('Confirm result is : ', result);

}*/