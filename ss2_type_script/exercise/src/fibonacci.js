function getFibonacci(temp) {
    if (temp == 0) {
        return 0;
    }
    else if (temp == 1 || temp == 2) {
        return 1;
    }
    else {
        return getFibonacci(temp - 1) + getFibonacci(temp - 2);
    }
}
var sum = 0;
var amount = 10;
for (var i = 0; i < amount; i++) {
    sum += getFibonacci(i);
}

console.log("Tổng của " + amount + " số đầu tiền trong dãy fibonacci là: " + sum);
