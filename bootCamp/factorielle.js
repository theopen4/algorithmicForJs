function factoriel (numb){
    if(numb === 0){
        return 1;

    }
    let numArr = [];
    while(numb > 0){
        numArr.push(numb);
        numb = numb - 1;
        
        
    }
    let resultFact = 1;
    numArr.forEach(element => {
        resultFact = resultFact * element;



        
    });

    return resultFact;


}


function factoriell (numb){
    if(numb === 0){
        return 1;

    }

    for(let i = numb- 1 ; i > 1; i--){
        numb*= i;

    }
    return numb;
}
console.log(factoriel(5))
console.log(factoriell(5))
let x = 1 + 2 + "3"
console.log(x)