const numbers = [-2, -1, 0, 1, 2];
let c = 0;
let j = 0;

for(let i = 0; i < numbers.length; i++) {
	for (let j = i; j < numbers.length; j++) {
  	if(Math.log2(numbers[i]+numbers[j]) % 1 === 0) c++;
  }
}

console.log(c);
