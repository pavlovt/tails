class Test {
     attributes:Object;
     constructor(attr:Object) {
         this.attributes = attr;
     }
 }
 
 var model:Test = new Test({
     name:"string",
     age:"integer"
 });
  
 export = model;