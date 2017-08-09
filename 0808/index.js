
function  getPrime(input){
   let result = [];
   let count = 0;
   let n = input;
   for(let i = 2;i <= n;i++){
       if(n%i === 0){
         	n /= i;
         	result.push(i);
         	i--;
       }  
   }
   let resultChar = `${input}=${result.join('*')}`;
   return resultChar;
}


document.getElementById("start").onclick = function(){
	let inputs = document.getElementById('inputs').value;
	if(/^[0-9]*$/g.test(inputs)){
       let text = getPrime(inputs);
       document.getElementsByTagName('textarea')[0].value = text;  
	}else{
	   alert("请输入数字");
	}
}