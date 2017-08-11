function getLinkedList(ll,val){
   let arr = inputs.split('->');
   let newArr = arr.filter((x)=>{
       return x != val;
   });
   return newArr.join('->');
}

let inputs = '1->2->3->3->4->5->3';
let val = 5;
let result = getLinkedList(inputs,val);
console.log(result);