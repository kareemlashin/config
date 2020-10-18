let decimal: number = 6;
let color: string = "blue";
let isDone: boolean = false;
let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];
let looselyTyped: any = 4;
let u: undefined = undefined;
let n: null = null;

enum Color {
    Red,
    Green,
    Blue,
  }

  function warnUser(): void {
    console.log("This is my warning message");
  }
  interface LabeledValue {
    label: string;
  }

 export interface SquareConfig {
    color?: string;
    width?: number;
  }

function addToZ(x, y) {
  return x + y ;
}

class Greeter {
    greeting: string;
  
    constructor(message: string) {
      this.greeting = message;
    }
  
    greet() {
      return "Hello, " + this.greeting;
    }
  }
  
  let greeter = new Greeter("world");


  class Animal {
    move(distanceInMeters: number = 0) {
      console.log(`Animal moved ${distanceInMeters}m.`);
    }
  }
  
  class Dog extends Animal {
    bark() {
      console.log("Woof! Woof!");
    }
  }
  
  const dog = new Dog();
  dog.bark();
  dog.move(10);
  dog.bark();

function conv(a: number=5,s?:string){

};
function conv2(a: string | number) {
    
}