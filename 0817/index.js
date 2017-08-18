function getQuadratic(arr){
   let result = [];	
   let i = 0;
   let len = arr.length;
   while(i < len){
   	  result.push(Math.pow(arr[i],2));
   	  i++;
   }
   return result;   
}

function getNumber(arr){

    return arr.map((elem) => Math.pow(elem,2))

}

let arr = [5,3,7,1];
//console.log(getQuadratic(arr));
console.log(getNumber(arr));
