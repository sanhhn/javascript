/*
https://codesignal.com/blog/interview-prep/example-codesignal-questions/

Two-Dimensional Array Traversal 
You are given a matrix of integers field of size height × width representing a game field, and also a matrix of integers figure of size 3 × 3 representing a figure. Both matrices contain only 0s and 1s, where 1 means that the cell is occupied, and 0 means that the cell is free.

You choose a position at the top of the game field where you put the figure and then drop it down. The figure falls down until it either reaches the ground (bottom of the field) or lands on an occupied cell, which blocks it from falling further. After the figure has stopped falling, some of the rows in the field may become fully occupied.

demonstration

Your task is to find the dropping position such that at least one full row is formed. As a dropping position, you should return the column index of the cell in the game field which matches the top left corner of the figure’s 3 × 3 matrix. If there are multiple dropping positions satisfying the condition, feel free to return any of them. If there are no such dropping positions, return -1.

Note: The figure must be dropped so that its entire 3 × 3 matrix fits inside the field, even if part of the matrix is empty. 

Example

For
field = [[0, 0, 0],
         [0, 0, 0],
         [0, 0, 0],
         [1, 0, 0],
         [1, 1, 0]]
and
figure = [[0, 0, 1],
         [0, 1, 1],
         [0, 0, 1]]

the output should be solution(field, figure) = 0.

Because the field is a 3 x 3 matrix, the figure can be dropped only from position 0. When the figure stops falling, two fully occupied rows are formed, so dropping position 0 satisfies the condition.

example 1

For
field =  [[0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [1, 1, 0, 1, 0],
          [1, 0, 1, 0, 1]]

and
figure = [[1, 1, 1],
          [1, 0, 1],
          [1, 0, 1]]

the output should be solution(field, figure) = 2.

The figure can be dropped from three positions: 0, 1, and 2. As you can see below, a fully occupied row will be formed only when dropping from position 2:

example 2

For
field =  [[0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [1, 0, 0, 1],
          [1, 1, 0, 1]]

and
figure = [[1, 1, 0],
          [1, 0, 0],
          [1, 0, 0]]

the output should be solution(field, figure) = -1.

The figure can be dropped from two positions, 0 and 1, and in both cases, a fully occupied row won’t be obtained:

example 3

Note that the figure could technically form a full row if it was dropped one position further to the right, but that is not a valid dropping position, because the 3 x 3 figure matrix wouldn’t be fully contained within the field.
This Tetris-inspired question is challenging. Candidates will have to traverse and manipulate two-dimensional arrays in a non-conventional way. As it’s an advanced question, it tests how well an engineer can understand a complex set of constraints and proceed with a non-trivial implementation.
*/

const figure = 	 [[1, 1, 0],
          [1, 0, 0],
          [1, 0, 0]];

const field = 	[[0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [1, 0, 0, 1],
          [1, 1, 0, 1]];
         

const lf = field[0].length;
const lfg = figure[0].length;

let fill = false;
let i = 0;
while(!fill && i <= lf-lfg) {
	let d = 0;
	while(!fill && d <= field.length-figure.length) {
  	let r=d;
    while(!fill && r < d+figure.length) {
    	
      let rf = true;
      let c = 0;
      while(rf && c < lf) {      	
      	
      	rf = field[r][c] === 1;
        //console.log(r, c, field[r][c],rf)
        if (r-d >= 0 && r-d < figure.length && c-i>=0 && c-i < lfg){
        	if (!rf){
        		rf = figure[r-d][c-i] === 1;
            //console.log('fg: ', r-d, c-i, figure[r-d][c-i]);
          } else if (figure[r-d][c-i] === 1){          	
          	//console.log('stop: ', i, d, r);
            // stop down
            c = lf;
            r = d+figure.length;
            d = field.length-figure.length;
            rf=false;
            
          }
          
        }
        c++;
        
      }

      //console.log(d, r, rf);

      r++;
      fill = rf;
    }
    
    d++;
  }
  i++;
    	//console.log(i, d);
}

console.log(i-1, fill);
