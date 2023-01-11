const caesar = function(string, shift) {

    let encryptedString = '';

    for(let i = 0 ; i < string.length; i++){

        //  get unicode value of current letter in the string
        let unicode = string.charCodeAt(i);
        let newcode = unicode;

        //  if it is an uppercase letter
        if(unicode >= 65 && unicode <= 90){
            //  for positive shift
            if( shift > 0){
                for(let i = 0; i < shift; i++){
                    newcode++;
                    if (newcode > 90)
                        newcode = 65;
                }
            }
            //  for negative shift
            else if (shift < 0){
                for(let i = 0; i > shift; i--){
                    newcode--;
                    if (newcode < 65)
                        newcode = 90;
                }
            }
        }

        //  otherwise, if it is a lowercase letter
        else if(unicode >= 97 && unicode <= 122){
            //  for positive shift
            if( shift > 0){
                for(let i = 0; i < shift; i++){
                    newcode++;
                    if (newcode > 122)
                        newcode = 97;
                }
            }
            //  for negative shift
            else if (shift < 0){
                for(let i = 0; i > shift; i--){
                    newcode--;
                    if (newcode < 97)
                        newcode = 122;
                }
            }
        }

        encryptedString += String.fromCharCode(newcode);
    }

    return encryptedString;
};

module.exports = caesar;
