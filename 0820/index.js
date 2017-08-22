
function includes(arr,item){
	for(let i of arr){
		if(i.key === item){
			return i;
		}
	}
	return false;
};
function getNewArr(arr){
	let result = [];
	for(let i = 0;i < arr.length;i++){
	   let temp = arr[i];
	   let cobj = includes(result,temp);
	   if(cobj){
		   cobj.count++;
	   }else{
		   result.push({key:temp,count:1});
	   }
    }
	return result;
}
function getNumber(string){
   let arr = string.split('');
   let newArr = getNewArr(arr); 
   newArr.sort((x,y) => {
	   return x.count < y.count;
   });
   let max = newArr[0].count;
   let maxArr = newArr.filter(x => x.count === max);
   return maxArr.reduce((result, item)=>{
        result[item.key] = item.count;
        return result;
    }, {});
   	
}

let arr = 'aaaaabbdbdbb';
console.log(getNumber(arr));
