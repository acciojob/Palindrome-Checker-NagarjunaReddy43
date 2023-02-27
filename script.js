// complete the given function

function palindrome(string){
	const arrayValues = string.split('');

    // reverse the array values
    const reverseArrayValues = arrayValues.reverse();

    // convert array to string
    const reverseString = reverseArrayValues.join('');

    if(string == reverseString) {
        return true;
    }
    return false;
}
module.exports = palindrome
