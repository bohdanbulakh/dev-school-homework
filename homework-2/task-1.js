function getSumHonor(honors, leadersCount) {
    const honorSums = [];
    const step = honors.length / leadersCount;

    for (let i = 0; i < step; i++) {
        let sum = 0;

        for (let j = i; honors[j] !== undefined; j += step) {
            sum += honors[j];
        }

        honorSums.push(sum);
    }

    let max = honorSums[0];
    for (const sum of honorSums) {
        if (sum > max) {
            max = sum;
        }
    }

    return max;
}

console.log(getSumHonor([1, 5, 6, 3, 4, 2], 3));