// iterating and array only once, remove: undefined, false, 0, null
export const removeFalsies = (arr: any[]) => arr.reduce((acc,el) => {
    if (el) {
        acc.push(el);
    }
    return acc;
}, []);

const arr = [1, undefined, null, 0, 2, 3, false];
//console.log(arr);
//console.log(removeFalsies(arr));
