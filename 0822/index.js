function intersection(a,b){
	let intersection = a.filter(v => b.includes(v));
	return intersection;
}


module.exports = intersection;
