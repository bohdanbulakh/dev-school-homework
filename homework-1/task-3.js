function findNb(n) {
    let count = 0;
    for (let i = 1; n > 0; i++) {
        n -= i ** 3;
        count++;
    }
    if (n === 0) {
        return count;
    }

    return -1;
}

console.log(findNb(1071225));