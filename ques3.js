//3.
function isPrime(n) {
    var re = /^.?$|^(..+?)\1+$/;
    return !re.test('1'.repeat(n));
}

let str = Number("73")
let result = isPrime(str)
console.log(result)
