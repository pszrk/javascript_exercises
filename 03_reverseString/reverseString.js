const reverseString = function(message) {
    let stringArray = message.split('');

    let reversedString = '';
    while(stringArray.length > 0)
        reversedString += stringArray.pop();

    return reversedString;
};

module.exports = reverseString;
