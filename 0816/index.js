function findRepetitionItem(collection){
	let result = [];
    collection.forEach((x) => {
    	if(collection.indexOf(x) != collection.lastIndexOf(x) && !result.includes(x)){
    		result.push(x);
    	}
    });
    return result;
}

let arr = ['a','b','c','a','s','s'];
console.log(findRepetitionItem(arr));