
export const isPalindrome = (str:string): boolean => {
    str = str.replace(/\s/g,'');  //remove blank spaces
    const lowered = str.toLowerCase();
    const splitted = lowered.split('');
    const reversed = splitted.reverse();
    const joined = reversed.join('');

    //const reverse = (str) => str.toLowerCase().split('').reverse().join('');

    return lowered === joined;
}

//console.log(isPalindrome('no es palindromo'));
//console.log(isPalindrome('ana lava lana'));

