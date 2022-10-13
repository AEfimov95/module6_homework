function calc (firstNumber) {
    return function (secondNumber){
        return firstNumber+secondNumber
    }
}
const result = calc(12);
console.log(result(7));
