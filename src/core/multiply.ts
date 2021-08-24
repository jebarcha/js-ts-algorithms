// Multipily 2 numbers without using the multiply symbol

export const multiply = (a: number, b:number): number => {
    let result: number = 0;
    const positive: boolean = Math.abs(b) == b;
    for (let i = 0; i < Math.abs(b); i++) {
        result = positive ? result + a : result - a;
    }

    return result;
}

let res = multiply(50, -50);
//console.log(res); //-2500

res = multiply(50, 50);
//console.log(res); //2500

