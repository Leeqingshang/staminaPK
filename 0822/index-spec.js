let intersection = require('./index.js');


describe('get arr1 arr2 intersection', function () {

  it('选出给定两个数组的交集', function() {
    let a = [1,2,2,1];
	let b = [2,2];
	let collection_b = [2,2];
    let result = intersection(a,b);
    expect(result).toEqual(collection_b);
  });
  
  it('选出给定两个数组的交集', function() {
    let a = [1,2];
	let b = [1,2,2];
	let collection_b = [1,2];
    let result = intersection(a,b);
    expect(result).toEqual(collection_b);
  });
  
  it('选出给定两个数组的交集', function() {
    let b = [1,1,2,1,2,2];
	let a = [1,2,2];
	let collection_b = [1,2,2];
    let result = intersection(a,b);
    expect(result).toEqual(collection_b);
  });
  
   it('选出给定两个数组的交集', function() {
    let b = [1,2,3,4,0,0,6,7,8,9];
	let a = [1,2,3,4,5,6,7,8,9];
	let collection_b = [1,2,3,4,6,7,8,9];
    let result = intersection(a,b);
    expect(result).toEqual(collection_b);
  });
  
});
