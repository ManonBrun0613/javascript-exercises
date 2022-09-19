const reverseString = function(string) {
    let reversedString='';
    let i=string.length-1;
    console.log(reversedString, string,i);
    let tempLetter = '';
    let j=0;
    while (j<=i) {
        tempLetter=string.charAt(i-j);
        reversedString=reversedString.concat(tempLetter)
        j++;
    }
    return reversedString
};

// Do not edit below this line
module.exports = reverseString;
