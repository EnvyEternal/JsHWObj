//Level 2 
//#1
/*
let arr = [0,1,2,3,0,4,5,6,0,7,8,0,9];
function ans(arr){
let array = arr.filter(elem => elem >= 1);
return array.toString();
}
*/
//#2
/*
let map = new Map();
map.set(1,{name:"Tom",surname:"Fox",})
console.log(map.get(1))
*/
//#3
/*
 let words = "Hello World world"
 function camel(words){
   return  words.toLowerCase().split(' ').map(    
     (up, i) => i == 0 ? up : up[0].toUpperCase() + up.slice(1)
   ).join('');  
}
console.log(camel(words));
*/
//#4
/*
let pal = "abcddcba"

 function palindrome(pal) {
    return pal === pal.split("").reverse().join("");
}

console.log(palindrome(pal))
*/
//№5
/*
const worker = {
    name: 'Jack',
    surname: 'Frod',
    expiriance: 9,
    salary: 8000,
    greet: function (){
        console.log(`I, ${this.name} ${this.surname}`)

    },
    sall: function (){
        if(this.expiriance>=5 && this.expiriance <= 7){
           console.log(("Bonus:")+((this.salary/100)*5))
        }else if(this.expiriance<=8){
            console.log(("Bonus:")+((this.salary/100)*8))
        }else{console.log("You doesn`t have some bonus")}
    },
}
worker.greet();
worker.sall();
*/
//6
/*
class work {
    constructor(name, surname, expiriance, salary){
    this.name = name;
    this.surname = surname;
    this.expiriance = expiriance;
    this.salary = salary
    }
    greet(){
        console.log(`I, ${this.name} ${this.surname}`)}
    sall(){
        if(this.expiriance>=5 && this.expiriance <= 7){
           console.log(("Bonus:")+((this.salary/100)*5))
        }else if(this.expiriance>=8){
            console.log(("Bonus:")+((this.salary/100)*8))
        }else{console.log("You doesn`t have some bonus")}
    }

}
const work1 = new work('Tom', 'Fox', 14, 9000);
console.log(work1.sall())
*/
