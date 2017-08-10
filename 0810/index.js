function findOnly(arr){
		      let result = [];
			  for(let i = 0;i < arr.length;i++){
			     var temp = arr[i];
				 var count = 0;
				 for(let j = 0;j < arr.length;j++ ){
				     if(temp == arr[j]){
					     count++;
                         arr[j] = -1;						 
					 }
				 }
				 if(count > 1){continue}
				 result.push(temp);
			  }
			  return result;
		   }
		   
		   
		   let arrs = [1,2,3,2,1,4,3,5,5,4,7];
		   console.log(findOnly(arrs));