let getString = require('./index.js');

describe('get new string',function(){
	it('test 1',function(){
		let result = getString('hello',20,'1');
		let answer = '111111111111111hello';
		expect(result).toEqual(answer);
	});
	
	it('test 1',function(){
		let result = getString('hello',10,'222222');
		let answer = '222222hello';
		expect(result).toEqual(answer);
	});
	
	it('test 1',function(){
		let result = getString('hello',4,'1');
		let answer = 'hello';
		expect(result).toEqual(answer);
	});
});
