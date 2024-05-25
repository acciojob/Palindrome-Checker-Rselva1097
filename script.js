// complete the given function

function palindrome(str){
        const st=0;
     	const ed=str.length()-1;

	while(st < ed){
		if(str.toLowerCase().charAt(st) != str.toLowerCase().charAt(ed)){
			return false;
		}
		st++;
		ed--;
	}

	return true;
}
module.exports = palindrome
