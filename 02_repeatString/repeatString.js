const repeatString = function(text, numTimes) {
    let repetitions = parseInt(numTimes);

    if(repetitions < 0)
        return('ERROR');

    let output = '';
    for(let i = 0; i < repetitions; i++){
        output += text;
    }
    return output;
};

module.exports = repeatString;
