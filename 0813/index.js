function getNumber(collections){
	let result = [];
	let arr = collections.sort((x,y) => {
		return x - y; 
	});
	let len = collections.length;
	if(len%2 === 0){
		let index = len/2;
		result = (arr[index] + arr[index - 1])/2;
	}else{
		let index = Math.floor(len/2);
		result = arr[index];
	}
	return result;
};


console.log(getNumber([21,35,11,1]));