'use strict';

/*
= assigns a value
=== checks for a value
&& the logical and
allows me to list two conditionals and both have to be true to run
|| the logical or
allows me to list two conditionals and either or have to be true to run
! the logical not, often called ("Bang") reverses a true to a false
*/
let num = 0;
let username = prompt('Welcome to Jackson\'s Website! First things first, what is your name?');
alert('Well howdy ' + username + ', welcome to my quiz!');
alert('Lets take the Jackson quiz to find out how well you can commit idenity fraud on me!');

function func1() {
  let livesInSeattle = prompt('Do I live in Seattle?').toLowerCase();
  if (livesInSeattle === 'yes' || livesInSeattle === 'y') {
    //console.log('Yes I do Live in Seattle');
    alert('Yes I do Live in Seattle');
    num++;
  } else if (livesInSeattle === 'no' || livesInSeattle === 'n') {
    //console.log('Sorry you are wrong I do live in Seattle');
    alert('Sorry you are wrong I do live in Seattle');
  }
  else {
    alert('You need to answer a \'yes\' or a \'no\'');
    //console.log('You need to answer a \'yes\' or a \'no\'');
  }
}
func1();

function func2() {
  let Dogname = prompt('Is my dogs name Hugo?').toLowerCase();
  if (Dogname === 'yes' || Dogname === 'y') {
    //console.log('You are right I do have a cute doxie named Hugo');
    alert('You are right I do have a cute doxie named Hugo');
    num++;
  }
  else if (Dogname === 'no' || Dogname === 'n') {
    alert('Its like u dont even know me :(');
    //console.log('Its like u dont even know me :(');
  }
  else {
    //console.log('Please take this quiz srs, it will be on the final exam');
    alert('Please take this quiz srs, it will be on the final exam');
  }
}
func2();

let raccoon = prompt('Is there a raccoon in my backyard I feed fried bread?').toLowerCase();
if (raccoon === 'yes' || raccoon === 'y') {
  //console.log('I wish :( I dont have any pets with thumbs');
  alert('I wish :( I dont have any pets with thumbs');
}
else if (raccoon === 'no' || raccoon === 'n') {
  //console.log('You are right i dont have any raccoon pets sadly ;(');
  alert('You are right i dont have any raccoon pets sadly ;(');
  num++;
}
else {
  //console.log('if u hate raccoons just say it bastard');
  alert('if u hate raccoons just say it bastard');
}

let glasses = prompt('Does jackso wear glasses?').toLowerCase();
if (glasses === 'yes' || glasses === 'y') {
  //console.log('Correct I am a nerd');
  alert('Correct I am a nerd');
  num++;
}
else if (glasses === 'no' || glasses === 'n') {
  //console.log('You are so wrong I am blind as hell boi');
  alert('You are so wrong I am blind as hell boi');
}
else {
  alert('Please take this quiz srs, or i will execute this connection');
  //console.log('Please take this quiz srs, or i will execute this connection');
}

let hair = prompt('What color hair do I have? is it brown?(Y/n)').toLowerCase();
if (hair === 'yes' || hair === 'y') {
  //console.log('Thats right my hair is the colour brown!');
  alert('Thats right my hair is the colour brown!');
  num++;
}
else if (hair === 'no' || hair === 'n') {
  alert('No silly, my hairs the colour brown!');
  //console.log('No silly, my hairs the colour brown!');
}
else if (hair === 'blond') {
  //console.log('Its not blond, its brown wow!');
  alert('Its not blond, its brown wow!');
}
else {
  //console.log('Thats it, we are done');
  alert('Thats it, we are done');
}


let secret = 20;
let attempts = 4;
while (attempts) {
  let input1 = prompt('What number am I thinking off. ( Hint, its between 0 and 25)');
  let guess = parseInt(input1);
  attempts--;
  alert(`You have ${attempts} attemps remaining!`);
  if (guess === secret) {
    alert('You got it right!');
    num++;
    break;
  } else if (guess > secret) {
    alert('Your guess was a little too high');
  } else if (guess < secret) {
    alert('You guess was a little too low!');
  }
  else {
    alert('Please put in a number!');
  }
  if (attempts === 0) {
    alert(`All out of guesses, it should have been ${secret}!`);
  }
}

alert('Time to play the pet guessing game!');
let myPets = ['Hugo', 'Indy', 'Lily', 'Hazelnut', 'Olive'];
let guesses = 6;
let gotitRight = num;
while (guesses) {
  alert(`You have ${guesses} attempts remaining!`);
  let userResponse = prompt('What is one name that belongs to one of my pets?');
  guesses--;
  for (let i = 0; i < myPets.length; i++) {
    if (userResponse === myPets[i]) {
      alert(`You guessed correctly, I do have a pet named ${userResponse}`);
      num++;
      alert(`Here is the rest of my pets names ${myPets}`);
      guesses = 0;
      break;
    }
    else if (i === myPets.length) {
      alert('That was not any of my pets names, try again!');
    }
  }
  if (guesses === 0 && gotitRight === num) {
    alert('You ran out of guesses!');
    alert(`Here is the rest of my pets names ${myPets}`);
  }
}

alert('Alright ' + username + ' lets see how you did!');
if (num >= 5) {
  alert('Wow ' + username + num + ' out of 7. You know me pretty well, or youre a good guesser!');
}
else if (num === 3 || num === 4) {
  alert(num + 'out of 7. You aren\'tthat good a guessing huh ' + username);
}
else {
  alert('Yikes maybe refresh this page and try again bub.');
}
