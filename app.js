// app.js
//
// Calories
//
// This code take an inventory of all food and calories you eat in a day.  Then it tells
// you how much weight you gained and what your final weight is.
//
//Z. Ames 7/10/14

var prompt = require('sync-prompt').prompt;
var chalk = require('chalk');

var weight = prompt('What is your weight (in pounds)? ');
var gender = prompt('what is your gender? (m/f) ');
weight = parseInt(weight);

var foods = [];
var calories =[];

var option = prompt(chalk.yellow('Would you like to add a food item? (y/n) '));
while(option!= 'n')
if (option === 'y'){
  var food =prompt (chalk.blue('What did you eat? '));
  foods.push(food);
  var calorie = prompt('How many calories are in '+chalk.bold.underline(food)+'? ');
  calories.push(parseInt(calorie));

  option = prompt(chalk.yellow('Would you like to add a food item? (y/n) '));
}else{
  break;
}


// add all calories together
var sumCal=0;
for (i=0; i<calories.length; i++){
sumCal = sumCal + calories[i]
}

//add weight
var finalWeight=weight;
finalWeight += gender === 'f' ? sumCal/3000 : sumCal/4000

console.log(chalk.green('You have eaten the following items today:'));
for (k=0; k<foods.length; k++){
  console.log(chalk.green('   *  '+foods[k]));
}

console.log('The total number of calories you consumed today is '+ chalk.bold.underline.white(sumCal));
console.log('Your final weight is '+chalk.bold.underline.white(finalWeight.toFixed(1))+' pounds.');

