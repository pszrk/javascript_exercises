const palindromes = function (string) {

    //reverse the string, and convert to lowercase, letters only
    let reversed = '';
    let temp = string.split('');
    for(let i = temp.length - 1; i >= 0; i--)
        // check if it is a letter
        if(temp[i].toUpperCase() != temp[i].toLowerCase())
            reversed += temp[i].toLowerCase();

    //convert initial string to lowercase, letters only
    let forward = '';
    for(let i = 0; i < string.length; i++)
        //  check if it is a letter
        if(string.charAt(i).toLowerCase() != string.charAt(i).toUpperCase())
            forward += string.charAt(i).toLowerCase();

    //compare the forward string with the reversed string
    console.log(forward + '\n' +reversed);
    return (forward === reversed);
};

module.exports = palindromes;
