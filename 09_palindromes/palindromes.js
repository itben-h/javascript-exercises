const palindromes = function (str) {
    const isAlphaNumeric = (str) => /[a-z0-9]/.test(str);

    str = str
        .toLowerCase()
        .split('')
        .filter((e) => isAlphaNumeric(e))
        .join('')

    const revStr = str.split('').reverse().join('');
    return (str == revStr);
};

// Do not edit below this line
module.exports = palindromes;
