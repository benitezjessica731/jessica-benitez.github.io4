
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(x) { //parameter required
  //declare triangle an empty string
  let triangle = '';
  //create a foor loop to iterate over
  for (let i = 0; i < x; i++) {
    //increase a # to each line
    triangle += '#';
    //log triangle to the console
    console.log(triangle);
  }
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
      //create a for loop to print out nubers 1-100
      for (let i = 1; i < 16; i++) {
        //create if statement to determine if i is divisible by 15
        if (i % 15 === 0) {
            //if true, log fizzbuzz to the console
            console.log("fizzbuzz");
        //create else if statement to determine if i is divisible by 3
        } else if (i % 3 === 0) {
            //if true, log fizz to the console
            console.log("fizz");
        //create else if statement to determine if i is divisible by 5
        } else if (i % 5 === 0) {
            //if true, log buzz to the console
            console.log("buzz")
        } else {
            //all else log i to the console
          console.log(i);
        }
      }
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(x) {
  //create array to store row of strings
  let board = [];
  //create loop to run x amount of times
  for (let i = 0; i < x; i++) {
  //create row variable
    let row = "";
    //iterate to create row
    for (let j = 0; j < x; j++){
      //determine if we add space or add hashtag
      if ((j + i) % 2 === 0){
        row += " ";
      } else {
        row += "#";
      }
    }
    //push row onto the board array
    board.push(row);
  }
    
  //log board joined into string to the console
  console.log(board.join("\n") + "\n");
}



////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
