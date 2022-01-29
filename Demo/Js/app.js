'use strict';

 var input0 = prompt(' Enter Your Name: ');
console.log('Your Name is : ', input0); 
//////////////////////////////////////////
var input1 = prompt(' Enter Your gender: ');
console.log('Your gender is : ', input1);

//var gender = ('male' , 'female');

var input3 = prompt(' Enter Your age: ');
if (input3 >=0) {

    console.log('Your age is : ', input3);
    
} else {
    
    alert('your age less than 0')
    
}
/////////////////////////////////////////////////////////////////////////////////////////
let result = confirm('Do you want to skip the Welcoming Message');

if (!result & (input1 =='male')) {

    alert (` Welcome Mr ${input0}`);

 } else if (!result && input1=='female'){

    alert (` Welcome Ms ${input0}`);
   
 }else{
     
   result = confirm('    ');

}

///////////////////////////////////////////////////////////////////////

/*

 let answer00 = prompt('Are you sure you want to proceed?')

    if (answer00 == "" || answer00 == null) {
        console.log(answer00);
        alert("invalid");

    }

//////////////////
 let answer01 = prompt('Are you Ok?')

  if (answer01 == "" || answer01 == null) {
    console.log(answer01);
    alert("invalid");
    
  }
/////////////////////////////

let answer02 = prompt('Are you over the age of 21?')

if (answer02 == "" || answer02 == null) {
    console.log(answer02);
    alert("invalid")
}
*/

let user00=prompt('Are you over the age of 21','Yes/No');

if (user00!= null ){
  let x00= user00 ;
  alert(x00)
}else {
    confirm('invalid');
}



let user01=prompt('Are you Ok?','Yes/No');

if (user01!= null ){
  let x01= user01 ;
  alert(x01)
}else {
    confirm('invalid');
}


let user02=prompt('Are you sure you want to proceed','Yes/No');

if (user02!= null ){
  let x02= user02 ;
  alert(x02)
}else {
    alert("invalid");
    
}

let array = [user00,user01,user02];
console.log(array)

//var array = new Array();// second way 
//var students = [];// first way