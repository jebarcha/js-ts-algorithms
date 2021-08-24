// get greater number in an array iterating the array only once

export const getBiggest = (arr: number[]) => arr.reduce((acc, el) => acc > el ? acc : el);

const b = getBiggest([50, -500, 1000, 0, 1, 54]);
//console.log(b);

