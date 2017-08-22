
function getNumber(arr){
	let result = [];
	arr.forEach(x =>{
		if(!result.includes(x)){
		   result.push(x);
		}
	})
	return result;
}

let arr = ['s','a','s','b','a',1,'1',1];
console.log(getNumber(arr));
