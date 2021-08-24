import { match } from "x-match-expression";


export function fizzBuzz(n: number): number | string {

    const divisibleBy = (divider: any) => (n:any) => n % divider === 0;
    
    return match(n)
        .case(divisibleBy(15), "fizzbuzz")
        .case(divisibleBy(5), "buzz")
        .case(divisibleBy(3), "fizz")
        .default(n);
}


export function fizzBuzz_2(n: number): number | string {

    const divisibleBy: Function = (divider: number, n: number) => n % divider == 0;

    if (divisibleBy(15, n)) {
        return 'fizzbuzz';
    }

    if (divisibleBy(3, n)) {
        return 'fizz';
    }

    if (divisibleBy(5, n)) {
        return 'buzz';
    }

    return n;
}

export function fizzBuzz_1(n: number): number | string {
    if (n % 15 === 0) {
        return 'fizzbuzz';
    }

    if (n % 3 === 0) {
        return 'fizz';
    }

    if (n % 5 === 0) {
        return 'buzz'
    }

    return n;
}