const reverseString = function(string) {
    let letters = string.split('');
    let reversed = letters.reverse();
    return reversed.join('');
};

// Do not edit below this line
module.exports = reverseString;
