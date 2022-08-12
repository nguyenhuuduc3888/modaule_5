var arrSample = [1, 1];
function getFibonacci(temp) {
    var count = arrSample.length;
    for (var i = 1; count < temp; i++) {
        arrSample.push(arrSample[i] + arrSample[i - 1]);
        count++;
    }
    return arrSample;
}
var sum = 0;
var amount = 10;
var arr = getFibonacci(amount);
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var number = arr_1[_i];
    sum += number;
}
document.write(arr.toString());
document.write("Tổng của " + amount + " số đầu tiền trong dãy fibonacci là: " + sum);
