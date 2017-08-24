function getArr(arr){
	let result = [];
	arr.map(x => {
		if(Array.isArray(x)){
			result = result.concat(getArr(x));
		}else{
			result.push(x);
		}
	});
	return result;
}


let arr = [1,[2,3,[2,',',[6,7,'a']]]];

console.log(getArr(arr));
