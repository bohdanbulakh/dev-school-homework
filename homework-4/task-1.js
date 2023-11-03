class VigenèreCipher{
    constructor(key, alphabet) {
        this.key = key;
        this.alphabet = alphabet;
    }

    #checkIndexes(index, str){
        const strIndexInAlphabet = this.alphabet.indexOf(str[index]);
        if(strIndexInAlphabet === -1){
            return -1;
        }

        if(index >= this.key.length){
            index -= this.key.length * Math.floor(index / this.key.length);
        }
        const keyIndexInAlphabet = this.alphabet.indexOf(this.key[index]);

        return {strIndexInAlphabet , keyIndexInAlphabet}
    }

    encode(str){
        let result = '';

        for(const index in str){
            const indexes = this.#checkIndexes(+index, str);
            if(indexes === -1){
                result += str[+index];
                continue;
            }

            const {strIndexInAlphabet, keyIndexInAlphabet} = indexes;

            let newLetterIndex = strIndexInAlphabet + keyIndexInAlphabet;
            if(newLetterIndex >= this.alphabet.length){
                newLetterIndex -= this.alphabet.length;
            }

            result += this.alphabet[newLetterIndex];
        }
        return result;
    }

    decode(str){
        let result = '';

        for(const index in str){
            const indexes = this.#checkIndexes(+index, str);
            if(indexes === -1){
                result += str[+index];
                continue;
            }

            const {strIndexInAlphabet, keyIndexInAlphabet} = indexes;

            let newLetterIndex = strIndexInAlphabet - keyIndexInAlphabet;
            if(newLetterIndex < 0){
                newLetterIndex += this.alphabet.length;
            }

            result += this.alphabet[newLetterIndex];
        }
        return result;
    }
}


const helper = new VigenèreCipher('password', 'abcdefghijklmnopqrstuvwxyz');
console.log(helper.encode('codewars'));
