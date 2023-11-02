function movesNumber(n) {
    let movesNumber = 0;

    for (let i = 0; i < n; i++) {
        movesNumber = 2 * movesNumber + 1;
    }

    return movesNumber;
}

console.log(movesNumber(6));