class Fibonacci {
    constructor(n) {
        this.n = n;
        this.result = [];
    }

    calculateFibonacci = () => {
        if(this.n>=1) {
            this.result.push(0);
        }
        
        if(this.n>=2) {
            this.result.push(1);
        }

        if(this.n>=3) {
            for(let i = 2; i<this.n; i++) {
                this.result.push(this.result[i-1] + this.result[i-2]);
            }
        }
    }

    getResult = () => {
        this.calculateFibonacci();

        return this.result;
    }
}

module.exports = Fibonacci;