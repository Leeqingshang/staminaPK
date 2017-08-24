function getString(str1,len,str2){
	if(len <= str1.length){return str1};
	if(str2.length > (len - str1.length)){return str2 + str1};
	let addLen = len - str1.length;
	let multiple = Math.floor(addLen/str2.length);
	let remainder = addLen%str2.length;
	let result = '';
	for(let i = 0;i < multiple;i++){
		result += str2;
	}
	result += str2.substr(0,remainder);
	return result + str1;
}


module.exports = getString;
