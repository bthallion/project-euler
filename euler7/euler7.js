const nthPrime = (n) => {
    let count = 0;
    let i = 1;
    while (count < n) {
        i++;        
        let isPrime = true;
        for (let factor = Math.floor(i / 2); factor > 1; factor--) {
            if (i % factor === 0) {
                isPrime = false;
                break;
            }
        };

        if (isPrime) {
            count++;
        }
    }
    return i;
};

console.log(nthPrime(10001));
