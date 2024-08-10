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
