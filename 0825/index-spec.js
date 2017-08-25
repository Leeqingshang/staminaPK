let getArr = require('./index.js');

describe('get new arr',function(){
	it('test 1',function(){
		let result = getArr([0, 1, 0, 3, 12],0);
		let answer = [1, 3, 12, 0, 0];
		expect(result).toEqual(answer);
	});
	
	it('test 2',function(){
		let result = getArr(['1', 'a', 'b', 'c', 'a'],'a');
		let answer = ['1','b','c','a','a'];
		expect(result).toEqual(answer);
	});
});
