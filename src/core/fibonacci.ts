export function fibonacci(n: number): number {
    const partialFibonacci = (n: number): number => 
      n == 1
        ? 1
        : fibonacci(n - 1) + fibonacci(n - 2)
  
    return n == 0
      ? 0
      : partialFibonacci(n)
  }
  
// funcion de primer orden
export function fibo(n, a=0, b=1) {
        return new Array(n)
              .fill('demo fibo')
              .reduce((acc)=>{
                  const temp = a;
                  a = b;
                  b = temp + b;
                  acc.push(a);
                  return acc;
              }, [0]);
}

//or
// fibonacci
// 0,1,1,2,3,5,8,13,21,34,55,89,144,233
// const fibo = (n, a=0, b=1) => new Array(n)
//                                 .fill('demo fibo')
//                                 .reduce((acc)=>{
//                                     const temp = a;
//                                     a = b;
//                                     b = temp + b;
//                                     acc.push(a);
//                                     return acc;
//                                 }, [0]);

//module.exports = fibonacci;