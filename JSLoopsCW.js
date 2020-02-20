//Javascript File Link Check
console.log("JavaScript file is linked.");

// ## For Loops
// ### Exercise 1:
// - Use a for loop to print numbers -3 through 8
for (forLoopStart=-3;forLoopStart<=8;forLoopStart++){
    console.log(forLoopStart);
}
console.log("**************************Look Below*************************");
// ## While/Do While Loops
// ### Exercise A:
// - Print -10 through 5 using a counter and while loop.
let counter=-10;
while (counter<=5) {
    console.log(counter);
    counter++;
}
console.log("**************************Look Below*************************");
// ### Exercise 2:
// // - Use a for loop to count from -5 to 5 three times in a row
for (loopToCount=1;loopToCount<=3;loopToCount++){
    for (forLoopStart=-5;forLoopStart<=5;forLoopStart++){
        console.log(forLoopStart);
    }
}
console.log("**************************Look Below*************************");
// ### Exercise B:
// - Write a While loop that counts backwards from 10 to 0
// - Log the current count at the end of each iteration EXCEPT if the current count is ```5```
let countBackwards=10;
while(countBackwards >=0) {
    if(countBackwards!=5){
        console.log(countBackwards);
        countBackwards--;
    }
    else if (countBackwards==5){
        countBackwards--;
    }
}
console.log("**************************Look Below*************************");
// ### Exercise 3:
// - Use a for loop to print only even numbers from -50 to 50
for (evenNum=-50;evenNum<=50;evenNum=evenNum+2) {
    console.log(evenNum);
}
console.log("**************************Look Below*************************");
// ### Exercise C:
// - Create an empty `name_array`
// - Ask the user ```Enter a word. Enter 'q' to quit.``` Add each word they enter to the array
// - Create a while loop that will keep asking for words to add to the array until they enter 'q'
// - When the user enters 'q' use a **for** loop to print each word from the array
let name_array=[];
let userInput=prompt("Enter a word. Enter 'q' to quit.");
name_array.length[userInput];

for (;userInput=='q';){
    console.log(name_array.indexOf[userInput]);
}
console.log("**************************Look Below*************************");
// ### Exercise 4:
// Start with the following array:
// `let high_scores = [2112, 1024, 9000, 9001, 7200, 2600, 10000]`
// - Use a for loop to print each score
// - If the score is greater than 9000 print the score and the text `OVER 9000!`
// Expected Output:
// HIGH SCORES
// 2112
// 1024
// 9000
// 9001 OVER 9000!
// 7200
// 2600
// 10000 OVER 9000!
let high_scores = [2112, 1024, 9000, 9001, 7200, 2600, 10000];
console.log("**************************Look Below*************************");
