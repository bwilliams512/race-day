/*
This a program that will register runners for the race and give them instructions on race day.

Here’s how our registration works. There are adult runners (over 18 years of age) and youth runners (under 18 years of age).
They can register early or late. Runners are assigned a race number and start time based on their age and registration.

Race number:
Early adults receive a race number at or above 1000.
All others receive a number below 1000.

Start time:
Adult registrants run at 9:30 am or 11:00 am.
Early adults run at 9:30 am.
Late adults run at 11:00 am.
Youth registrants run at 12:30 pm (regardless of registration).
*/

// Race numbers are assigned randomly
// Ensure we only have whole numbers from 0 to 999
let raceNumber = Math.floor(Math.random() * 1000);


// Create a variable that indicates whether a runner registered early or not
const registeredEarly = true;
// Uncomment below to test and comment above to test
//const registeredEarly = false;


// Create a variable for the runner's age
// Change to test
const age = 25;

// Create a control flow statement that checks whether the runner is an adult AND registered early
if (age > 18 && registeredEarly) {
  raceNumber += 1000;

}

// Creat a separate control floe statement that checks age and registration time
if (age > 18 && registeredEarly) {
  console.log(`Runner ${raceNumber}: Your race starts at 9:30.`);
} else if (age > 18 && !registeredEarly) {
  console.log(`Runner ${raceNumber}: Your race starts at 11:00.`);
} else if (age < 18) {
  console.log(`Runner ${raceNumber}: Your race starts at 12:30.`)
} else {
  console.log(`Runner ${raceNumber}: Please see the registration desk.`);
}
