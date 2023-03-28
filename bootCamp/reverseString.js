#!/usr/bin/node
function reverseToString(str){
    str = [...str].reverse().join('');
	console.log(str);
	return str;
}

reverseToString("hello");

