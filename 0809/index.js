function getnumber(index){
   let result = [];
   for(let i = 0;result.length <= index;i++){
          if(i === 0 || i === 1){
          	result.push(i);
          }else{
          	result.push(result[i - 1] + result[i -2]);
          }
   } 
   let resultText = `斐波纳契数列第${index}个数是${result[index]}`;
   console.log(resultText);
}

getnumber(19);
