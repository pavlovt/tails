/// <reference path="../../typings/tsd.d.ts"/>

declare var sails:any;
var TestModel: Sails.Model = sails.models.test;

 class TestController {
     test(req: Express.Request, res: Express.Response) {
        //return res.view('test1');
        TestModel
           .create({name:"alex",age:22})
           .then((created: Test) => {
             res.json(created);
           });
     }
 }
 
 //
 export = new TestController();