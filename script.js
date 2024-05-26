// complete the given function

function palindrome(s){
         const normalizedStr = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
    
    // Compare the normalized string with its reversed version
    const reversedStr = normalizedStr.split('').reverse().join('');
    
    return normalizedStr === reversedStr;
}
module.exports = palindrome
