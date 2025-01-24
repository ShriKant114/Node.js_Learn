// asyncronous languae h ye

let a=5;
let b=6;

let waitigdata = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(30)//send
    },2000)
})

waitigdata.then((data)=>{
   
    console.log(a+data+b);
})