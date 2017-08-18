
function getNumber(arr,item){
	let result = item + '所在位置有：';
    let len = arr.length;
    let i = 0;
    while(i < len){
        if(arr[i] === item){
        	result += i + ',';
        } 
        i++; 
    }
    return result.slice(0,result.length - 1);
}

let arr = [1,5,3,7,1];
let item = 1;
console.log(getNumber(arr,item));
