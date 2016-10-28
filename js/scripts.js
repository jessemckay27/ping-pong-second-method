// (6) define a variable that represents a function being passed user input
var makeArray = function(userInput) {

// (7)declare a new empty array to hold the results
  var filledArray = [];

// (8) start a loop, beginning with 1 and ending with the user input
  for (i = 1; i <= userInput; i++) {

// (9) if number modulus 15 is equal to zero, target our empty array and push string into it, else keept going
    if (i % 15 === 0) {
      filledArray.push("Ping-Pong");

// (10) if number modulus 5 is equal to zero, target our emptry array and push string into it, else keep going
    } else if (i % 5 === 0) {
      filledArray.push("Pong");

// (11) if number modulus 5 is equal to zero, target our emptry array and push string into it, else keep going
    } else if (i % 3 === 0) {
      filledArray.push("Ping");

// (12) if number doesn't check, then pass on original number to empty array
    } else {
      filledArray.push(i)
    }

// (13) for loop ends
  }

// (14) the function with the userInput parameter passed into it now becomes the new result (important!)
  return filledArray;
}

//  Starting Point !!!!!
//  Frond end logic
//
// (1) jquery loads after HTML is finished loading
$(document).ready(function() {

// (2) when method .submit(); is called on form, run a function with a paramater (event);
  $("form").submit(function(event) {

//  (3) prevent default behavior of form. (can also go at end of front end logic)
    event.preventDefault();

//  (4)fetch the form input and make it a variable
    var userInput = parseInt($("input").val());

//  (5) make a variable that represents a function that is being passed the user input (aka the result of the function) !!!head to top of page!!!
    var finishedArray = makeArray(userInput);

//  (15) we now take the finished or "filled" array and loop through each (number) inside of it.
    finishedArray.forEach(function(number) {

//  (16) as the loop progresses, we target where we want our ouput to go, then append a div filled with each array element, ending by a closing div.  Could also be li's, or whatever you want.
      $("#output").append("<div>" + number + "</div>");

//  (17) The results now show up on the page, you are free to style them how you like!
    });
  });
});
