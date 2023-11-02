class Vector {
    constructor(components) {
        this.components = components;
    }

    toString(){
        return `(${this.components.join(",")})`
    }

    equals(vector){
        if(vector.components.length !== this.components.length){
            return false;
        }

        for(const index in this.components){
            if(this.components[+index] !== vector.components[+index]){
                return false;
            }
        }

        return true;
    }

    #checkLength(vector){
        if(vector.components.length !== this.components.length){
            throw Error('Vectors components lengths must be equal');
        }
    }

    add(vector){
        this.#checkLength(vector);
        const newComponents = [];

        for(const index in this.components){
            const componentOfCurrent = this.components[+index];
            const componentOfGiven = vector.components[+index];
            newComponents.push(componentOfCurrent + componentOfGiven);
        }

        return new Vector(newComponents);
    }

    subtract(vector){
        this.#checkLength(vector);
        const newComponents = [];

        for(const index in this.components){
            const componentOfCurrent = this.components[+index];
            const componentOfGiven = vector.components[+index];
            newComponents.push(componentOfCurrent - componentOfGiven);
        }

        return new Vector(newComponents);
    }

    dot(vector){
        this.#checkLength(vector);
        let dotProduct = 0;

        for(const index in this.components){
            const componentOfCurrent = this.components[+index];
            const componentOfGiven = vector.components[+index];
            dotProduct += componentOfCurrent * componentOfGiven;
        }

        return dotProduct;
    }

    norm(){
        let norm  = 0;

        for(const component of this.components){
            norm += component ** 2;
        }

        norm = Math.sqrt(norm);
        return norm;
    }
}

const a = new Vector([1, 2, 3]);
const b = new Vector([3, 4, 5]);
const c = new Vector([5, 6, 7, 8]);

console.log(a.add(b));
console.log(a.norm());
