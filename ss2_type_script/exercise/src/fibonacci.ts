let sum: number = 0;
let arrFibonacci = [1, 1];

function showFibonacci(amount: number) {
    let count: number = arrFibonacci.length;
    for (let i = 1; count < amount; i++) {
        arrFibonacci.push(arrFibonacci[i] + arrFibonacci[i - 1]);
        count++;
    }
    return arrFibonacci;
}

let amount = 10;

let arr = showFibonacci(amount);
for (let number of arr) {
    sum += number;
}
document.writeln(arr.toString());
document.write("Tổng của " + amount + "  đầu tiền trong dãy fibonacci là: " + sum);