// first triangle n (1+2+3+4+5....) with 500 divisors
// gotta be at least 2000

const findCompositeTriangle1 = () => {
    let triangleLevel = 1;
    let n = 0;
    
    for (; n < 2000; triangleLevel++) {
        n += triangleLevel;
    }

    let divisorCount;
    do {
        triangleLevel++;
        n += triangleLevel;
        divisorCount = 0;
        for (let divisor = 1; divisor < n / 2; divisor++) {
            if (n % divisor === 0) {
                divisorCount++;
            }
        }
    } while (divisorCount <= 500);

    return n;
};

const findHighlyComposite = (bound) => {
    const bitset = new Uint32Array(bound);
    bitset.fill(1);
    for (let factor = 2; factor < bound; factor++) {
        for (let multiple = factor; multiple < bound; multiple += factor) {
            bitset[multiple] += 1;                            
        }
    }
    const comps = [];
    for (let i = 1; i < bound; i++) {
        if (bitset[i] >= 500) {
            comps.push(i);
        }
    }
    return comps;
};

const findCompositeTriangle2 = () => {
    const nums = findHighlyComposite(80000000);
    const numCount = nums.length;
    let triLevel = 1;
    let triangle = 0;
    
    let compIndex = 0;
    while (compIndex < numCount) {
        let min = nums[compIndex];    
        while (triangle < min) {
            triangle += triLevel;
            triLevel++;
        }
        if (triangle === min) {
            return triangle;
        }
        compIndex++;
    }
};



const atkinPrimeSieve = (limit) => {
    const getSolutions = (exp, onlyGreaterX) => {
        const solutions = new Set();

        for (let x = 0; x <= Math.ceil(Math.sqrt(limit)); x++) {
            for (let y = 0; y <= onlyGreaterX ? x - 1 : Math.ceil(Math.sqrt(limit)); y++) {
                let value = exp(x, y);
                if (value > limit) {
                    break;
                }
                solutions.add(value);   
            }
        }

        return solutions;
    };
    const solutionRules = [
        {
            onlyGreaterX: false,
            exp: (x, y) => 4 * x ** 2 + y ** 2,
            remainders: [1, 13, 17, 29, 37, 41, 49, 53]
        },
        {
            onlyGreaterX: false,
            exp: (x, y) => 3 * x ** 2 + y ** 2,
            remainders: [7, 19, 31, 43]
        },
        {
            onlyGreaterX: true,
            exp: (x, y) => 3 * x ** 2 - y ** 2,
            remainders: [11, 23, 47, 59]
        }
    ];
    const results = [2, 3, 5];
    const sieve = new Uint8Array(n);

    solutionRules.forEach(({ onlyGreaterX, exp, remainders }) => {
        const solutions = getSolutions(exp, onlyGreaterX);
        solutions.forEach(solution => {
            const r = solution % 60;
            if (remainders.includes(r)) {
                
            }
        });
    });
};

const getDivisorCount = (n) => {

};


// n/2 * (n+1)
// find prime divisors 
const findCompositeTriangle3 = () => {

};

console.log(findCompositeTriangle2());
