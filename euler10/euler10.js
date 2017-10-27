const sumPrimes1 = (n) => {
    let sum = 2;
    for (let i = 3; i < n; i += 2) {
        let isPrime = true;
        for (let factor = 2; factor < Math.ceil(i / 2); factor++) {
            if (i % factor === 0) {
                isPrime = false;
                break;
            }
        };

        if (isPrime) {
            sum += i;
            console.log('factor:', i);
        }
    }
    return sum;
};

// sieve of eratosthenes
// slow
const sumPrimes2 = (bound) => {
    let numbers = [...new Array(bound + 1).keys()].slice(2);
    let i = 0;
    while (i < numbers.length) {
        const factor = numbers[i];
        numbers = numbers.filter((n) => {
            return n % factor !== 0;
        });
        i++
    }
    return numbers.reduce((sum, n) => sum + n);
};

// way better sieve
const sumPrimes3 = (bound) => {
    const bitset = new Uint8Array(bound);
    bitset.fill(1);
    bitset[0] = 0;
    bitset[1] = 0;
    for (let factor = 2; factor < bound; factor++) {
        if (!bitset[factor]) {
            continue;
        }
        for (let multiple = factor * 2; multiple < bound; multiple += factor) {
            if (bitset[multiple]) {
                bitset[multiple] = 0;                
            }
        }
    }
    let sum = 0;
    for (let i = 1; i < bound; i += 2) {
        if (bitset[i]) {
            sum += i;
        }
    }
    return sum;
};
const start = new Date();
console.log(sumPrimes3(2000000));
console.log('time:', new Date() - start);
