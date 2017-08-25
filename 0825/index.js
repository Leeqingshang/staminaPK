function getArr(arr,ele){
	arr.forEach((x,index) => {
		if(x === ele){
		  arr.push((arr.splice(index,1))[0]);	
		}
	});
	return arr;
}


module.exports = getArr;
