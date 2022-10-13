
const timer = (start,end) =>{
    let currentNumber = start;
    //создаю переменную, которая будет увеличиваться каждый интервал и отображать текущее число
    const interval = setInterval(function () {
        console.log(currentNumber);
        currentNumber++;
        // каждый цикл будет увеличивать переменную на 1
        if (currentNumber>end){
            //когда текущее число выровняется с конечным, то очищает интервал
            clearInterval(interval)
        }
    },1000)
}
timer(9,15);