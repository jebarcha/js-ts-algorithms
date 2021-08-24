// convert any integer number into an array of digits

// const digitize = (n:number) => [...`${n}`].map((i) => parseInt(i));
// const result = digitize(123);
// console.log(JSON.stringify(result));

// const digitize = (n:number) => String(n).split('');
// const result = digitize(123);
// console.log(JSON.stringify(result));

const numToSeparate = 12345;
const arrayOfDigits = Array.from(String(numToSeparate), Number);
console.log(JSON.stringify(arrayOfDigits));   //[1,2,3,4,5]