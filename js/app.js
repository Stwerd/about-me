'use strict';

let num = 0;
let username = prompt('Welcome to Jackson\'s Website! First things first, what is your name?');
alert('Well howdy ' + username + ', welcome to my quiz!');
alert('Lets take the Jackson quiz to find out how well you can commit idenity fraud on me!');

let questions = ['Do I live in Seattle?', 'Is my dogs name Hugo?', 'Is there a raccoon in my backyard I feed fried bread?', 'Does jackson wear glasses?', 'What color hair do I have? is it brown? '];
let answers = ['y', 'y', 'n', 'y', 'y'];
let outcome = ['Yes, you got it right!', 'Nope, you are wrong', 'Please type yes or no! You\'ll be given another chance.'];

function yesno() {
  for (let z = 0; z <= 4; z++) {
    let input = prompt(questions[z]);
    let firstLetter = input.charAt(0);
    if (firstLetter.toLowerCase() === answers[z]) {
      alert(outcome[0]);
      num++;
    }
    else if (firstLetter !== 'y' && firstLetter !== 'n') {
      alert(outcome[2]);
    }
    else {
      alert(outcome[1]);
    }
  }
}

yesno();

function func6() {
  let secret = Math.floor(Math.random() * 15);
  let attempts = 4;
  while (attempts) {
    let input1 = prompt('What number am I thinking off. ( Hint, its between 0 and 15)');
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
}
func6();
alert('Time to play the pet guessing game!');

function func7() {
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
      else if (i++ === myPets.length) {
        alert('That was not any of my pets names, try again!');
      }
    }
    if (guesses === 0 && gotitRight === num) {
      alert('You ran out of guesses!');
      alert(`Here is the rest of my pets names ${myPets}`);
    }
  }
}
func7();

alert('Alright ' + username + ' lets see how you did!');
if (num === 7) {
  alert('Wow ' + username + num + ' out of 7. You know me pretty well, or youre a good guesser!');
}
else if (num === 5 || num === 6) {
  alert(num + 'out of 7. You aren\'tthat good a guessing huh ' + username);
}
else {
  alert('Yikes maybe refresh this page and try again bub.');
}

