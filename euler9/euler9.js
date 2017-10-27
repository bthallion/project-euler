const pythagSum = (n) => {
    let a;
    let b;
    let c = n - 2;
    for (c; c > 2; c--) {
        for (b = 1; Math.ceil(n - c - b) / 2 > 0; b++) {
            a = n - c - b;
            if (a ** 2 + b ** 2 === c ** 2) {
                console.log('triple:', [a, b, c]);
                return a * b * c;
            }
        }
    }
};

console.log(pythagSum(1000));
