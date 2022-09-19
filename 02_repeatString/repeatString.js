const repeatString = function(string,num) {
    let i=0;
    strRepeated='';
    if (num==0) {
        return ''
    } else if (num<0){
        return 'ERROR'
    } else {
        while (i<num) {
            strRepeated=strRepeated +string;
            i++;
            }
        return strRepeated
    }
};


// Do not edit below this line
module.exports = repeatString;
