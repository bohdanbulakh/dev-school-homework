function maxMin(numbersString) {
    const numbersArray = numbersString.split(' ');
    let max = +numbersArray[0];
    let min = +numbersArray[0];

    for (const num of numbersArray) {
        if (+num > max) {
            max = +num;
        }

        if (+num < min) {
            min = +num;
        }
    }

    return max + " " + min;
}

console.log(maxMin("1 2 -3 4 5"));