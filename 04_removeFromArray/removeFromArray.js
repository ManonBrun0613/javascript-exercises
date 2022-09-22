const removeFromArray = function(array,element1,element2,element3,element4) {
    resultArray=[]
    for (i of array) {
        if (i ===element1  || i === element2|| i === element3|| i === element4) {
            continue
        } else {
            resultArray = resultArray.concat(i)
        }
    }
    return resultArray
};

// Do not edit below this line
module.exports = removeFromArray;
