function anagrams(words) {
    const check = (arr1, arr2) => !arr1.filter(letter => !arr2.includes(letter)).length
    const result = [];

    while (words.length) {
        const mainWordLetters = words[0].split('');
        const anagrams = [words[0]];
        words.splice(0, 1);

        for (let i = 0; i < words.length; i++) {
            const currentWordLetters = words[i].split('');

            if (check(mainWordLetters, currentWordLetters) && check(currentWordLetters, mainWordLetters)) {
                anagrams.push(words[i]);
                words.splice(i, 1);
                i--;
            }
        }

        result.push(anagrams);
    }

    return result;
}

console.log(anagrams(["tsar", "rat", "tar", "star", "tars", "cheese", "art"]))