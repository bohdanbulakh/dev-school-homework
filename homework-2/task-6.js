function getPerimeter(landMap) {
    let perimeter = 0;

    for (let i = 0; i < landMap.length; i++) {
        for (let j = 0; j < landMap[i].length; j++) {

            if (landMap[i][j] === 'X') {
                perimeter += 4;

                if (landMap[i][j + 1] === 'X') {
                    perimeter -= 2;
                }

                if (landMap[i + 1] && landMap[i + 1][j] === 'X') {
                    perimeter -= 2;
                }
            }
        }
    }

    return `Total land perimeter: ${perimeter}`;
}

console.log(getPerimeter([
    "X00X0",
    "X00X0",
    "000X0",
    "XX0X0",
    "0X000"]))