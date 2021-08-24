const arr: any[] = [[1,2], [[3,4]], [1, []]  ];
//console.log(arr);

const flatten = (arr: any[]) => arr.reduce( (acc,el) => acc.concat(el), []);
// expected result: [1, 2, [3,4], 1, []]
const result = flatten(arr);
console.log(JSON.stringify(result));
