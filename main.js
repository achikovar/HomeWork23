// Შექმენით მასივი რომელშიც ჩაწერთ ყველა 3 ის ჯერად რიცხვს 0 დან 100-მდე.


// let arr = []
// for(let i = 0; i <= 100; i++){
//     if(i % 3 === 0){
//         arr.push(i)
//     }
// }

// console.log(arr)




// Შექმენით მასივი რომელშიც ჩაწერთ თქვენი მეგობრების სახელებს და დაბეჭდეთ console-ში ყველა ის სახელი რომელიც იწყება სიმბოლო a- ზე.


// let friends = ["ნიკო", "როინი", "ხვიჩა", "ალეკო", "ავთო"];


// for (let index = 0; index < friends.length; index++) {
//     if (typeof friends[index] === "number") {
//         continue;
//     }
//     if (friends[index].startsWith("ა")) {
//       console.log(friends[index])
//     }
    
// }



// Შექმენით მასივი რომელშიც შეინახავთ ყველა 0-დან --- 50-მდე ყველა 2 ის ჯერად ან 5 ის ჯერად რიცხვებს მაგრამ 
// არავითარ შემთხვევაში ერთდროულად 2-ის და 5 -ის ჯერად რიცხვებს.


// let arr = []
// for(let i = 0; i <= 50; i++){
//   if((i % 2 === 0 )&&(i % 5 !== 0)||(i % 2 !== 0 && i % 5 === 0)){

//   arr.push(i)
// }
// }
// console.log(arr)


// Შექმენით მასივი რომელშიც იქნება შენახული რიცხვები 2, 121, 4341, 242, 562, 43, 182, 55, 32, 98, 326 , 
// გადაიარეთ მასივზე ციკლის მეშვეობით და დაბეჭდეთ კონსოლის ფანჯარაში თითოეული რიცხვის გამოყოფების რაოდენობა.



// let numbers = [2, 121, 4341, 242, 562, 43, 182, 55, 32, 98, 326]
// let counts = {}
// for(i = 0; i <= numbers.length; i++){
//    let num = numbers[i]
//    let divCount = 0
   
//    for(let j = 1; j <= num; j++){
//     if(num % j === 0) {
//       divCount++
//     }
//    }
//    counts[num] = divCount
//   }
//   console.log(counts)



// Თხოვეთ მომხმარებელს შემოიტანოს რიცხვი 100 დან 200 მდე და შეავსეთ მასივი 0 დან მომხმარებლის მიერ შემოტანილ
//  რიცხვამდე მოთავსებული ყველა რიცხვით რომელიც იყოფა 5 ზე უნაშთოდ.

// let num = parseInt(prompt('შეიყვანეთ ციფრი 100-დან 200-მდე'))

// for(let i = 1; i <= num; i++){
//     if(i % 5 === 0){
//        console.log(i) 
//     }
// }


// Შექმენით მასივი შეავსეთ ის 10 ცალი რენდომული რიცხვით ციკლის გამოყენებით, შემდგომ დაბეჭდეთ ყველა რიცხვი ამ მასივიდან რომელიც 3 ის ჯერადია.    

// var array = []
// for(let i = 0; i <= 10; i++){
//    let rndNumber = Math.floor(Math.random()*50)+1
//    array.push(rndNumber)

// }
// console.log(array)

// for(let i = 0; i <= array.length; i++){
//     if(array[i] % 3 === 0){
//         console.log(array[i])
//     }
    
// }



// Შეავსეთ მასივი 0 დან 100 მდე მოთავსებული ყველა მარტივი რიცხვით, შემდგომ დაბეჭდეთ მასივი კონსოლში.   =========

// for (var counter = 0; counter <= 100; counter++) {

//     var notPrime = false;
//     for (var i = 2; i <= counter; i++) {
//         if (counter%i===0 && i!==counter) {
//             notPrime = true;
//         }
//     }
//     if (notPrime === false) {
//                 console.log(counter);
//     }
// }



// Შექმენით მასივი რომელიც შეივსება 20 ცალი რენდომული რიცხვით, ამოარჩიეთ ამ რიცხვებიდან 5 ის ჯერადი რიცხვები და გადაიტანეთ მეორე მასივში.

// let array = [];
// let div5 = []
// for (let i = 0; i < 20; i++) {

// x = (Math.round((Math.random() * 100) + 1));
// array.push(x)
//     if(x % 5 ===0){
//         div5.push(x)
//     }
// }
// console.log(array);
// console.log(div5)



// Შეავსეთ მასივი 10 ცალი რენდომული რიცხვით რომელიც მოთავსებული იქნება 0 დან 20 მდე შუალედში, 
// აუცილებელი პირობაა რომ ამ მასივში 2 ერთი და იგივე რიცხვი არ იყოს ჩაწერილი.


// let arr = [];
// while(arr.length < 10){
//     let r = Math.floor(Math.random() * 20) + 1;
//     if(arr.indexOf(r) === -1) 
//     arr.push(r);
// }
// console.log(arr);





// Შექმენით 20 ცალი ღილაკის ელემენტი , თითოეული მათგანი ამოიღეთ js ში და მიაბით ფუნქცია რომელიც გამოიძახება მათზე დაჭერის შემთხვევაში,
//  ფუნქციამ უნდა შეუცვალოთ ღილაკებს background ფერი და უნდა მიანიჭოს რენდომული background ფერი.


// function rndFunction(){
//     let comb = "01234567890ABCDEF"
//     let hash = '#'
//     for(let i = 0; i < 6; i++){
//         hash += comb[Math.floor(Math.random() * 16)]
//     }
//     return hash;
// }

// console.log(rndFunction())

// function myFunction (){
//     let divBtn = document.getElementById('buttons')
//     for(let i = 0; i <= 20; i++){
//         let newButton = document.createElement('button');
//         newButton.textContent = i;
//         divBtn.appendChild(newButton);
//       newButton.addEventListener("click", function() {
//     let rndColor = rndFunction();
//     this.style.backgroundColor = rndColor;
// })
//     }
// }

// window.onload = myFunction




// Შექმენით 20 ცალი ღილაკი , ამოიღეთ ღილაკები js ში და მიანიჭეთ მათ ტექსტის მნიშვნელობად რენდომული რიცხვითი მნიშნელობები, 
// ღილაკებს მიანიჭეთ ფუნქცია რომელიც გამოიძახება მათზე დაჭერის შემთხვევაში 
// და ეს ფუფნქცია გამოიტანს alert დიალოგური ფანჯრის მეშვეობით თითოეულ ღილაკში ჩაწერილი რიცხვის გამყოფების რაოდენობას.


// function myFunction (){
//     let divBtn = document.getElementById('buttons')
//     for(let i = 0; i <= 20; i++){
//         let newButton = document.createElement('button');
//         let rndNumb = Math.floor(Math.random() * 100) + 1;
//         newButton.textContent = rndNumb
//         divBtn.appendChild(newButton);
        
//       newButton.addEventListener("click", function() {
//       let count = 0
//       for(let j = 1; j <= rndNumb; j++) {
//         if(rndNumb % j === 0){
//             count++
//         }
//       } 
//       alert(count)
//     }
//       )
//     }
// }

// window.onload = myFunction


// Შექმენით 6 ცალი ღილაკის ელემენტი რომლებიც იქნებიან დასტილული შემდეგნაირად , 
// width:300px; height:300px; border:1px solid steelblue; background-color:steelblue, 
// ასევე დაამატეთ ერთი ღილაკი ამ ღილაკების ზემოთ რომელზე დაჭერის შემთხვევაშიც მიენიჭებათ ქვემოთ მოცემულ ღილაკებს რენდომული background ფერები.


// function btnAction (){
//     let mainBtn = document.getElementById('buttons')
//     let btn = document.createElement('button');
//     btn.style.width = '200px'
//     btn.style.height = '200px'
//     mainBtn.appendChild(btn)
//     // newButton.addEventListener("click", function() {
//     //         let rndColor = rndFunction();
//     //         newButton.style.backgroundColor = rndColor;
//     //     })
//     //     newButton.style.background = 'steelblue'; // setting the background color to teal
//       }


// function rndFunction(){
//     let comb = "01234567890ABCDEF"
//     let hash = '#'
//     for(let i = 0; i < 6; i++){
//         hash += comb[Math.floor(Math.random() * 16)]
//     }
//     return hash;
// }


// function myFunction (){
//     let divBtn = document.getElementById('buttons')
//     for(let i = 1; i <= 6; i++){
//         let newButton = document.createElement('button');
//         newButton.textContent = i;
//         divBtn.appendChild(newButton);
//         newButton.style.width = '300px'; 
//         newButton.style.height = '300px'; 
//         newButton.style.background = 'steelblue'; 
//         newButton.style.color = 'white';
//         newButton.style.fontSize = '30px';
//       }
// }

// function clickBtn(){
//     let divBtn = document.getElementById('buttons').getElementsByTagName('button')
//     for(let i = 1; i <= divBtn.length; i++){
//         let colorchng = rndFunction()
//         divBtn[i].style.backgroundColor = colorchng 
//     }
// }        

// window.onload = myFunction


