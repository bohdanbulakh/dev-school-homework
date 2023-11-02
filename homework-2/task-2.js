function equalSums(array) {
    function getSum(array) {
        if (!array.length) return 0;
        let sum = 0;

        for (const num of array) {
            sum += num;
        }

        return sum;
    }
    for (const i in array) {
        const leftArray = array.slice(0, +i);
        const rightArray = array.slice(+i + 1, array.length);

        if (getSum(leftArray) === getSum(rightArray)) {
            return +i;
        }
    }
    return -1;
}

console.log(equalSums([1, 2, 3, 4, 3, 2, 1]))