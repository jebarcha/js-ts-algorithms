const factorial = (n, a=1) => new Array(n)
                                .fill("demofac")
                                .map(() => a++)
                                .reduce((acc,num) => acc * num, 1);
console.log('factorial', factorial(5));
