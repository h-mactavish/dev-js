//Intro To JavaScript

console.log("Hello World")

let book={
    topic:"JavaScript",
    edition:7
};

console.log(book.topic);
console.log(book["edition"]);

book.author="Flagan";
book.contents={key:"Pg 1-100"};
console.log(book.contents?.key);


let numbers=[1,23,4,5,56,76];
console.log(numbers)
console.log("===========")

let points=[{x:0,y:10},{x:1,y:0}];

console.log(points[0]?.y)

let data={
    trial1:[[1,2],[3,4]],
    trial2:[[5,6],[7,8]]
};

console.log(data);
console.log(data?.trial2);

const square=x=>x*x;

console.log(square(4));

function sum(array){
    let sum=0;
    for(let x of array){
        sum+=x;
    }
    return sum;
}

let primes=[1,2,3,5,7,11];
console.log(sum(primes))
//console.log(sum(4))

class Point{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }

    distance(){
        return Math.sqrt(this.x*this.x+this.y+this.y);
    }
}
let p=new Point(2,3);
console.log(p.distance());
