// create a matrix
let num = 0;
const matrix = new Array(10).fill("")
                    .map(() => new Array(10)
                                .fill(0)
                                .map(() => new Array(10)
                                            .fill("")
                                            .map(() => num++)));
console.log(matrix);
console.log(matrix[9][9][9]);