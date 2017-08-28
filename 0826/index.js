function fizzBuzz(number){
	for(let i = 0;i <= number;i++){
		if(!(i%3) && i%5){console.log('fizz\n');}
		if(!(i%5) && i%3){console.log('buzz\n')}
		if(!(i%3) && !(i%5)){console.log('fizzBuzz\n')}
	}
}


fizzBuzz(16)
