let arr = [3,4,0,5,8,0,1,null,0,NaN,true,10,16];
let even = 0;
let odd = 0;
let zero = 0;
function evenOddCounter (array) {
    array.forEach(item => {
        if (item % 2 == 0 && item > 0 && typeof item == 'number') {
            even++
        } else if (item % 2 != 0 && item > 0 && typeof item == 'number') {
            odd++
        } else if (item == 0 && typeof item == 'number') {
            zero++
        }
    })
}
evenOddCounter(arr);
console.log(arr);
console.log('Количество четных = ' + even);
console.log('Количество нечетных = ' + odd);
console.log('Количество нулевых элементов = ' + zero);