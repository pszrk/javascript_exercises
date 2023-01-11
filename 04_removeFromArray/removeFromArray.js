const removeFromArray = function(array, ...args) {
    let theArray = array;

    for(const arg of args){
        let index = theArray.indexOf(arg);
        if( index >= 0 ){
            theArray.splice(index, 1);
        }
    }
    return theArray;
}; 

module.exports = removeFromArray;
