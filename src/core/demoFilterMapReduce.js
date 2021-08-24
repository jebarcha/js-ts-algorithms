//filter()
const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log('original array: ', JSON.stringify(myArray));

const filterArray = myArray.filter(n => n > 5);
//console.log(myArray);
console.log('(filter) greater than 5:',JSON.stringify(filterArray));

//equivalent in C#:
//var filterArray = myArray.Where(n => n > 5);
//Console.WriteLine(string.Join(", ", filterArray));

//-------------------------------------------------------
// map()
const mapArray = myArray.map(n => n*2);
console.log('(map) multiply by 2:',JSON.stringify(mapArray));

//equivalent in C#:
//var mapArray = myArray.Select(n => n * 2);

//-------------------------------------------------------
// reduce()
const sum = myArray.reduce((accum, current) => accum + current, 0);
console.log('(reduce), sum:',sum);

//equivalent in C#:
//var sumReduce = myArray.Aggregate(0, (accum, current) => accum + current);
