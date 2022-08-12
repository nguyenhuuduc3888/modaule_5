let money=10000;
const buyACar=(car:any)=>{
    return new Promise(((resolve,reject)=>{
        setTimeout(()=>{
            if(money>=10000){
                resolve("ok"+car)
            }else {
                reject("no ok")
            }
            },100);
    }))
}

money=11;
const promise=buyACar("VinFast").then(value => {
    console.log(value);
},error =>{
    console.log(error);
    })