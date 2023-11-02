function sausages(boxes) {
    const result = [];
    const displayCounter = [];

    for (const box of boxes) {
        for (const product of box) {
            if (product.length === 6 && product.startsWith('[') && product.endsWith(']')) {
                const unpackedProduct = product.slice(1, -1);
                const l = product[1];
                if (unpackedProduct === `${l + l + l + l}`) {
                    result.push(unpackedProduct.split('').join(' '));
                }
            }
        }
    }

    for (const index in result) {
        if ((+index + 1) % 5 !== 0) {
            displayCounter.push(result[+index]);
        }
    }

    return displayCounter.join(' ');
}

console.log(sausages([["(-)", "[IIII]", "[))))]"], ["IuI", "[llll]"], ["[@@@@]", "UwU", "[IlII]"], ["IuI", "[))))]", "x"], []]));