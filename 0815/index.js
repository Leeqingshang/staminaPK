function getNumberTimes(arr,item){
    let result = item + '在数组中出现的次数是:';
    let count = 0;
    arr.forEach((x) => {
        if(x === item){
        	count++;
        }
    });

    return result + count;
}

let arr = [2,4,4,6,4,2,4,7,9,8,0];
let item = 0;
console.log(getNumberTimes(arr,item));