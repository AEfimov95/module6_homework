const calc = (a,b) =>{
    if (a>=1 && b>=1 && Number.isInteger(a*b) && typeof a == 'number'&& typeof b == 'number') {
        //провожу проверку является ли полученные числа натуральными, целыми, относятся ли к типу данных число
        return Math.pow(a, b)
    } else {
        return 'Введите натуральное число от 1'
    }
}
console.log(calc(0,1))
console.log(calc(-5,-15))
console.log(calc(10,3))
console.log(calc(5,NaN))
console.log(calc('string','10'))
console.log(calc(5.3,2.2))
console.log(calc(5,2))