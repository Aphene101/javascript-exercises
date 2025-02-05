const sumAll = function(start, end) {
    let sum = 0;
    if (start < 0 || end < 0 ||
         !Number.isInteger(start) || !Number.isInteger(end) ||
        typeof start === 'string' || typeof end === 'string') {
        return 'ERROR';
    }
    if (start > end) {
        for (let i = end; i < start + 1; i++) {
        sum += i;
        }
        return sum;
    }
    if (end > start) {
        for (let i = start; i < end + 1; i++) {
        sum += i;
        }
        return sum;
    }
    
};

// Do not edit below this line
module.exports = sumAll;
