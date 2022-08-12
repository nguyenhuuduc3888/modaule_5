
let arrSample = [1, 1];

function getFibonacci(temp: number) {
    let count: number = arrSample.length;
    for (let i = 1; count < temp; i++) {
        arrSample.push(arrSample[i] + arrSample[i - 1]);
        count++;
    }
    return arrSample;
}

let sum: number = 0;
let amount = 10;

let arr = getFibonacci(amount);
for (let number of arr) {
    sum += number;
}
document.write(arr.toString());
document.write("Tổng của " + amount + " số đầu tiền trong dãy fibonacci là: " + sum);