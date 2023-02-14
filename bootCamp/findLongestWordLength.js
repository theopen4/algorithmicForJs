function findLongestWord(str){
    strArray = str.split(" ");
    let strLength = 0;
    strArray.forEach(element => {
        if(element.length > strLength){
            strLength = element.length;
        }
        
    });
    return strLength;
}

console.log(findLongestWord('the lives is very amazing because before i not undrestand javascript now i begin really understand this language'));

function findLongestWord2(str){
    strArray = str.split(" ");
    let strLength = 0;
    for(let i = 0; i < strArray.length; i++){
        if(strArray[i].length > strLength){
            strLength = strArray[i].length;
        }
    }
    return strLength;
}
  
console.log(findLongestWord('the lives is very amazing because before i not undrestand javascript now i begin really understand this language'));
