 class name {
     namer;
     constructor(namer) {
         this.namer = namer;
     }
     go() {
         console.log(this.namer)
     }
 }
 let x = name('kareem');
 class user extends name {
     constructor(namer) {
         super(namer);
     }
 }