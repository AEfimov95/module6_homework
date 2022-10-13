const primeNumberValidation = (number) => {
    if (typeof number != 'number' || number > 1000) {
        return 'Данные неверны'
    }
    if(number<2)  return 'Не является простым'
        //0,1 не являются простыми
    for (i = 2; i < number; i++){
        if (number % i == 0){
            //если число поделится без остатка на отличное от самого себя, то оно уже не является простым
            return 'Не является простым'
        }
    }
    return 'Простое'
}
console.log(primeNumberValidation(1));
console.log(primeNumberValidation(3));
console.log(primeNumberValidation(4));
console.log(primeNumberValidation(5));
console.log(primeNumberValidation(6));
console.log(primeNumberValidation(7));





