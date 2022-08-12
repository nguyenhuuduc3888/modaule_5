var money = 10000;
var buyACar = function (car) {
    return new Promise((function (resolve, reject) {
        setTimeout(function () {
            if (money >= 10000) {
                resolve("ok" + car);
            }
            else {
                reject("no ok");
            }
        }, 100);
    }));
};
money =100 ;
var promise = buyACar("VinFast").then(function (value) {
    console.log(value);
}, function (error) {
    console.log(error);
});
