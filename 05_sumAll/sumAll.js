const sumAll = function(a, b) {
    if (typeof(a) != 'number' ||  typeof(b) != 'number')
        return ('ERROR');
    if (a < 0 || b < 0)
        return ('ERROR');
    if (a > b) {
        let m = a;
        a = b;
        b = m;
    }
    let sum = 0;
    while (a <= b) {
        sum += a;
        a++;
    }
    return (sum);
};

// Do not edit below this line
module.exports = sumAll;
