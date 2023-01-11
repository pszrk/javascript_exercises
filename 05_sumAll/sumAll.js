const sumAll = function(from, to) {

    if(Number.isInteger(from) && Number.isInteger(to) && from >= 0 && to >= 0){
        let sum = 0;
        for(let i = Math.min(from, to); i <= Math.max(from, to); i++){
            sum += i;
        }
        return sum;
    }
    return ('ERROR');
};

// Do not edit below this line
module.exports = sumAll;
