const { __esModule } = require("@babel/generator");

function isPrime(num){
    let isprime = false ;
    if (num < 2){
    return isprime;
            }

    if (num === 2){
    return !isprime;
            }

    if(num % 2 == 0){
    return isprime;
            }
    for(let i = 3; i <= num / i; i +=2){
        if(num % i == 0){
            return isprime;
        }
    }
    return !isprime;

}

module.exports = {
    isPrime
}

