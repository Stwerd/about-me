'use strict';

/*
= assigns a value
=== checks for a value
&& the logical or
allows me to list two conditionals and both have to be true to run
|| the logical or
allows me to list two conditionals and either or have to be true to run
! the logical not, often called ("Bang") reverses a true to a false
*/
console.log('hello');

let livesInSeattle = prompt('Do I live in Seattle?').toLowerCase();

if(livesInSeattle === 'yes'||livesInSeattle === 'y'){
  console.log('Yes I do Live in Seattle');
}else if (livesInSeattle === 'no'|| livesInSeattle === 'n'){
  console.log('Sorry you are wrong I do live in Seattle');
}
else{
  console.log('You need to answer a \'yes\' or a \'no\'');
}
