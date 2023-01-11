const fibonacci = function(index) {
    let number = parseInt(index);
    if (number < 1)
        return ('OOPS');
    
    let fiboArray = [1, 1];
    let length = fiboArray.length;
    while(length < index){
        fiboArray.push(fiboArray[length - 1] + fiboArray[length - 2]);
        length = fiboArray.length;
    }
    return fiboArray[length - 1];
};

console.log(fibonacci(-3));

module.exports = fibonacci;
