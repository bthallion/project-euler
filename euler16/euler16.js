// add digits of 2 ** 1000
const sumBinaryPower = (pow) => {
    const digits = [1];
    let digitCount = 1;
    
    for (let count = 0; count < pow; count++) {
        let carry = 0;

        for (let i = 0; i < digitCount; i++) {
            let product = digits[i] * 2 + carry;
            let digit = product % 10;
            digits[i] = digit;
            carry = product > 10;
        }

        if (carry) {
            digits[digitCount] = carry;
            digitCount++;            
        }
    }

    return digits.reduce((sum, n) => sum + n);
};

const start = new Date()
console.log(sumBinaryPower(1000));
console.log('time:', new Date() - start);
