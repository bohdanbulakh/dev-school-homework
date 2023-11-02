function descendingOrder(inputNumber = 0) {

    let resultNumber = 0;
    let arrayFromNumber = [];

    for (let i = 0; true; i++) {
        if (inputNumber === 0) {
            break;
        }

        arrayFromNumber.push(inputNumber % 10);
        inputNumber = ((inputNumber - inputNumber % 10) / 10);
    }

    const arrayLength = arrayFromNumber.length;

    for (let i = 0; i < arrayLength; i++) {
        let min = arrayFromNumber[0];
        for (let j = 0; j < arrayFromNumber.length; j++) {
            if (arrayFromNumber[j] < min) {
                min = arrayFromNumber[j];
            }
        }

        resultNumber += min * 10 ** i;

        const indexOfMin = arrayFromNumber.indexOf(min);
        arrayFromNumber.splice(indexOfMin, 1);
    }

    return resultNumber;
}

console.log(descendingOrder(1203749038));