//given a phrase, return the word that repeat the most

const repeated = (str: string) => {
    const lowered = str.toLowerCase();
    const splitted = lowered.split(' ');

    //key value parir
    //key is the word and value is the amount of times the word is repeated
    const reduced = splitted.reduce( (acc:any,el) => {
        if (acc[el]) {
            acc[el]++
        } else {
            acc[el] = 1;
        }
        return acc
    }, {})
    return Object.entries(reduced).reduce( (acc:any,el:any) => acc[1] > el [1] ? acc : el);
}

const result = repeated('This is a repeated word test this is a a');
console.log(result);