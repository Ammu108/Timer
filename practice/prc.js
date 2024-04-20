// let a = prompt("what is your name");
// let b = prompt("what is your age");
// let c = prompt("what is your favorite color");


// console.log(a + " is " + b + " years old and has " + c + " favurite color.");

// asynchronous 

// console.log("start")
// setTimeout(function(){
//     console.log("hey , i'am good");
// }, 3000);
// console.log("end")

// callbacks

// function loadscript(src , callback){
//     let script = document.createElement("script");
//     script.src = src;
//     script.onload = function(){
//         console.log("SRC is loaded :" + src);
//     callback(null,src);
//     }
//     script.onerror = function(){
//         console.log("SRC is loaded with error :" + src);
//         callback(new Error("src got some error"))
//     }
//     document.body.appendChild(script);
// }

// function hello (error , src){
//     if(error){
//         console.log(error);
//         return;
//     }
//     alert("hello world - " + src);
// }

// function hello2 (error , src){
//     if(error){
//         console.log(error);
//         return;
//     }
//     alert("hello AmenX - " + src);
// }

// loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",hello2);


// promises 

// const loadscript = (src) => {
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//         },5000)
//         let script = document.createElement("script");
//         script.src = src;
//         setTimeout(()=>{
//         document.body.appendChild(script);
//         },5000)
//         // document.body.appendChild(script);
//         script.onload = (script) => {
//             resolve("Great, script has been loaded sir!");
//         }
//         script.onerror = () => {
//             reject("src got some error");
//         }
//     })
// }

// let p1 = loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js");
// p1.then((value)=>{
//     console.log("Script has been pending ! ");
//     setTimeout(()=>{
//     console.log(value);
//     },5000)
//     // console.log(value);
// })
// p1.catch((error)=>{
//     console.log("we are very sorry for our inconvinience");
// })

// async function and wait

// async function aman(){
//     let delhiWeather = new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve("27 Deg")
//         }, 2000)
//     })
//     let bangloreWeather = new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve("21 Deg")
//         }, 7000)
//     })

//     console.log("fetching delhi weather please wait...");
//     let delhiW = await delhiWeather;
//     // console.log("fetched delhi weather : " + delhiW);
//     alert("fetched delhi weather : " + delhiW);

//     let bangloreW = await bangloreWeather;
//     console.log("fetching banglore weather please wait...");
//     // console.log("fetched banglore weather : " + bangloreW);
//     alert("fetched banglore weather : " + bangloreW);
// }

// const prashant = async () =>{
//     console.log("Hey i'am prashant function and i'am not waiting for the execution....");
// }

// const main1 = async () =>{{
//     console.log("welcome to weaher control room")
//     let a = await aman()
//     let b = await prashant()
// }}

// main1();







// fetching API using async and await


// const createToDo = async (toDo) => {
//     let options = {
//         method: "POST",
//         Headers: {
//             "content-type": "application/json"
//         },
//         body: JSON.stringify(toDo),
//         // body: JSON.stringify({
//         //     title: 'foo',
//         //     body: 'bar',
//         //     userId: 1,
//         // }),
//     }


//     let p = await fetch('https://jsonplaceholder.typicode.com/posts', options)
//     let response = await p.json()
//     return response
// }

// const getToDo = async (id) => {
//     let response = await fetch('https://jsonplaceholder.typicode.com/posts/1' + id)
//   let r = await response.json()
//   return r
// }

// const mainFunc = async () => {
//     let toDo = {
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//     }
//     let toDoC = await createToDo(toDo)
//     console.log(toDoC)
//     console.log(await getToDo(5));
// }

// mainFunc();



// Object orianted programming ( Oops )

// class railwayForm {
//     submit(){
//         alert(this.name + " : your form is submitted succefully for train number this - " + this.trianNo);
//     }
//     cancel(){
//         alert(this.name + " : This form is cancelled for train number this - " + this.trianNo);
//     }
//     fill(givenName, trianNo){
//         this.name = givenName;
//         this.trianNo = trianNo;
//     }
// }

// // create a form for aman
// let amanForm = new railwayForm()
// amanForm.fill("Aman", 123456)

// let prashant = new railwayForm()
// let prashant2 = new railwayForm()
// prashant.fill("prashant", 987123)
// prashant2.fill("prashant", 123000)

// amanForm.submit();
// prashant.submit();
// prashant2.submit();
// prashant2.cancel();


// class animal {
//     constructor(name, color){
//         this.name = name;
//         this.name = color;
//     }
//     run(){
//         console.log(this.name + " is running");
//     }shout(){
//         console.log(this.name + " is barkink ");
//     }
//     hide(){
//         console.log(this.name + " is hiding")
//     }
// }

// class monkey extends animal{
//     eatBanana(){
//         console.log(this.name + " is eating banana");
//     }
// }

// let ani = new animal("aman", "white");
// let monk = new monkey("prashant", "black");

// monk.hide()
// // i can't use like that

// ani.hide()


// IIFE function

const a = async(text, n=2)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(text);
        }, 1000 * n)
    })
}

(
    async () =>{
        let text = await a("hello",1);
        alert(text);
        text = await a("world",4);
        alert(text);
    }
)()