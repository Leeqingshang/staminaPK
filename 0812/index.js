function getNumber(){
	let result = [];
	for(let i = 100 ;i < 1000;i++){
		let key = '' + i;
		let a = parseInt(key.slice(0,1));
		let b = parseInt(key.slice(1,2));
		let c = parseInt(key.slice(2,3));
		let pows = Math.pow(a,3) + Math.pow(b,3) + Math.pow(c,3);
		if(pows === i){
			result.push(i);
		}
	}
	return result;
};


console.log(getNumber());