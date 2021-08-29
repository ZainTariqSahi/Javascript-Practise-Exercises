// Fizz Buzz
// function fizzBuzz(input){
//     if(typeof input!='number'){
//         console.log(NaN)
//     }else if((input%3===0) && (input%5===0)){
//         console.log('FizzBuzz');
//     }else if(input%3===0){
//         console.log('Fizz')
//     }else if(input%5===0){
//         console.log('Buzz')
//     }else{
//         console.log(input)
//     }
// }

// fizzBuzz(true);

// .................................................................................................................

// Speed limit
// limit==>70

// function speedLimit(speed){
//     const limit=70;
//     const pointPerKm=5;
//     if(speed<limit+pointPerKm){
//         console.log('ok');
//     }else{
//         const points=Math.floor((speed-limit)/pointPerKm);
//         if(points>=12){
//             console.log('License suspended')}else{
//                 console.log(`Points:${points}`)
//             }

//     }
// }

// speedLimit(76);

// ....................................................................................................................

// Even and Odd numbers

// function showNumbers(limit){
//     for(let i=0;i<=limit;i++){
//         if(i%2==0){
//             console.log(`${i}:Even`)
//         }else{
//             console.log(`${i}:Odd`)
//         }
//     }
// }
// showNumbers(5);

// ......................................................................................................................

// Count truthy

// function countTruthy(array){
//     let count=0;
//     for(let i of array)

//         if(i)
//             count++;

//     return count;
// }

// console.log(countTruthy([1,2,3,undefined]));

// ......................................................................................................................

// Object String Properties

// function showStringProperties(obj){
//     for(let key in obj){
//         if(typeof obj[key]==='string'){
//             console.log(`${key},${obj[key]}`);
//         }
//     }
// }

// let obj1={name:'inception',
// rating:9,
// actor:'leo'
// }
// showStringProperties(obj1);

// .......................................................................................................................

// Sum of multiples of 3 and 5

// function sum(limit) {
//   let sum = 0;
//   for (let i = 0; i <= limit; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//       sum = sum + i;
//     }
//   }
//   return sum;
// }
// console.log(sum(10));

// ......................................................................................................................

// Grades

// 1-59 F
// 60-69 D
// 70-79 C
// 80-89 B
// 90-100 A

// function calculateGrades(marks){
//     let sum=0;
//     for(let value of marks){
//         sum+=value;
//     }
//     let average=sum/marks.length

//     if(average<0 || average>100){
//         return;
//     }else if(average<60){
//         console.log('F')
//     }else if(average<70){
//         console.log('D')
//     }else if(average<80){
//         console.log('C')
//     }else if(average<90){
//         console.log('B')
//     }else{
//         console.log('A');
//     }

// }

// const marksArr=[60,8];
// calculateGrades(marksArr);

// .....................................................................................................................

// Stars

// function showStars(row){
//     for(let i=1;i<=row;i++){
//         let pattern='';
//         for(let star=0;star<i;star++){
//             pattern+='*';

//         }
//         console.log(pattern);
//     }
// }

// showStars(2);

// .....................................................................................................................

// Prime Numbers
// function getPrime(limit){
// for(let number=2;number<limit;number++){
//     let isprime=true;
//     for (let factor=2;factor<number;factor++){
//         if(number%factor===0){
//             isprime=false;
//             break;

//         }

//     }
//     if(isprime)console.log(number);
// }
// }

// getPrime(10);

// ....................................................................................................................

// Objects

// let address={
//     street:'22l',
//     city:'lahore',
//     zipcode:2234
// }

// function showAddress(address){
//     for(let key in address){
//         let value;
//         console.log(key,address[key])

//     }
// }

// showAddress(address);

// .......................................................................................................................

// Factory function

// function showAddress(street,city,zipcode){
//     return{
//         street,
//         city,
//         zipcode

//     }
// }

// console.log(showAddress(
//     '22l',
//     'lahore',
//     2234
// ))

// Constructor Function

// function ShowAddress(street,city,zipcode){
//     this.street=street;
//     this.city=city;
//     this.zipcode=zipcode;
// }

// const address=new ShowAddress('321','lhr',332);
// console.log(address)

// ......................................................................................................................

// Equal or same objects

// function ShowAddress(street, city, zipcode) {
//   this.street = street;
//   this.city = city;
//   this.zipcode = zipcode;
// }

// function areEqual(ad1, ad2) {
//   return (
//     ad1.street === ad2.street &&
//     ad1.city === ad2.city &&
//     ad1.zipcode === ad2.zipcode
//   );
// }

// function areSame(ad1, ad2) {
//   return ad1 === ad2;
// }
// const address1 = new ShowAddress("a", "b", "c");
// const address2 = new ShowAddress("a", "b", "c");

// console.log(areSame(address1, address2));
// console.log(areEqual(address1, address2));

// ......................................................................................................................

// Blog Post Object

// const blogPost={
//     title:'Technology',
//     body:'Lorem ipsum',
//     author:'Waseem',
//     views:2,
//     comments:[{
//         author:'great',
//         body:'fine'
//     }],
//     islive:true

// }

// console.log(blogPost);

// ....................................................................................................................

// Creating constructor for blog post object

// function BlogPost(title,body,author){
//     this.title=title;
//     this.body=body;
//     this.author=author;
//     this.views=0;
//     this.comments=[];
//     this.isLive=false;
// }

// const blogPost=new BlogPost('a','b','c');
// console.log(blogPost);

// .....................................................................................................................

// Array From Range

// function arrayFromRange(min,max){
//     let arrOfNum=[];
//     for(let i=min;i<=max;i++){
    
//         arrOfNum.push(i);
//     }
//     return arrOfNum
// }

// console.log(arrayFromRange(1,10));

// .....................................................................................................................

// Includes 

// const numbers=[1,2,3,4];

// function includes(array,searchElement){
//     for(let el of array){
//         if(el===searchElement){
//             return true;
//         }
//     }
//     return false
    
// }

// console.log(includes(numbers,9));

// .....................................................................................................................

// Except

// function Except(arr1,arr2){
//     const output=[];
//     arr1.forEach(element => {
//         if(!arr2.includes(element)){
//             output.push(element);
//         }
//     });
//     return output;
// }

// console.log(Except([1,2,3],[3]));

// .......................................................................................................................

// Move an element in an array
// let arr=[1,2,3,4,5];
// function moveElement(array,index,offset){
//     const position=index+offset;
//     if(position>array.length||position<0){
//         console.error('Invalid Offset');
//         return;
//     }
// let output=[...array];
// let element=output.splice(index,1)[0]; 
// output.splice(position,0,element);
// return output;
// }

// console.log(moveElement(arr,0,-9));

// ......................................................................................................................

// Count Occurences
// let arr=[1,2,1,3,4,5];
// function countOccurence(array,element){
//     // let count=0;
//     // arr.forEach((el)=>{
//     //     if(el===element){
//     //         count++
            
//     //     }
        
//     // })
//     // return count;
//    return array.reduce((accumulator,current)=>{
//         const occurence= current===element?1:0;
//         return accumulator+occurence;

//     },0)

// }

// console.log(countOccurence(arr,1));

// ....................................................................................................................

// function getMax(arr){
//     if(arr.length===0)return undefined;
//     // let max=arr[0];
//     // arr.forEach((el)=>{
//     //     if(el>max);
//     //     max=el;
//     // })
//     // return max;
//    return arr.reduce((a,b)=>(a>b)?a:b);

    
// }

// let array=[1,2,3,4,5];
// console.log(getMax(array));

// ......................................................................................................................

// Movies

// const movies=[
//     {title:'a',year:2018,rating:4.5},
//     {title:'b',year:2018,rating:4.7},
//     {title:'c',year:2018,rating:3},
//     {title:'d',year:2017,rating:4.5}
// ]

// const output=movies.filter(m=>m.year===2018&&m.rating>=4).sort((a,b)=>a.rating-b.rating).reverse().map(m=>m.title);

// console.log(output);

// .......................................................................................................................

// const arr=[1,2,3];
// arr.map((m)=>console.log(m));

// .....................................................................................................................

// Functions
// sum

// function getSum(...items){                       
//     if(items.length===1&&Array.isArray(items[0])){
//         items=[...items[0]];    //reduce return an array and if we pass an array in it it will have an array within array at index 0
//     }
//     return items.reduce((a,b)=>a+b)
    
// }

// console.log(getSum([1,2,3]));

// .....................................................................................................................

// const circle={
//     radius:1,
//    get area(){
//         return Math.PI*this.radius*this.radius;
//     }
// }

// console.log(circle.area);
// ......................................................................................................................

// Error Handling


// function countOccurence(array,element){
//      if(!Array.isArray(array)){
//          throw new Error("Invalid entry")
//      }
//    return array.reduce((accumulator,current)=>{
//         const occurence= current===element?1:0;
//         return accumulator+occurence;

//     },0)

// }
// try{
//     let arr=true;
// console.log(countOccurence(arr,1));
// }catch(e){
// console.log(e);
// }

// ...................The End.........................................................................................

