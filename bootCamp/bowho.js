function bowho(bool){
    if(typeof(bool) !== 'boolean'){
        return false;
    }

    return true;
}

console.log(bowho(true));