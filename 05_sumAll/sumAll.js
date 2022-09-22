const sumAll = function(a,b) {
    let sum=0;
    let lowLimit=0;
    let highLimit=0;
    if (a>b) {
        lowLimit=b;
        highLimit=a;
    } else {
        lowLimit=a;
        highLimit=b;
    }
    if (a <0 || b<0 || typeof(a)!= 'number' || typeof(b)!='number') {
        return 'ERROR'
    } else {
        for (let i=lowLimit;i<=highLimit;i++) {
            sum=sum+i;
        }
    }
    return sum
};


// Do not edit below this line
module.exports = sumAll;
