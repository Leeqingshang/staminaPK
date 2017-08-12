function getLinkedList(ll,val){
   let arr = inputs.split('->');
   let newArr = arr.filter((x)=>{
       return x != val;
   });
   return newArr.join('->');
}

function del(str,val) {
    let spanded=str.split("->");
    let array=[val+""];
    return spanded.filter(function(item) {return array.indexOf(item) < 0;}).join("->");
}



let inputs = '1->2->3->3->4->5->3';
let val = 5;
let result = del(inputs,val);
console.log(result);