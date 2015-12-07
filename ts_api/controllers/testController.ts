/// <reference path="../../typings/tsd.d.ts"/>

declare var sails:any;
var TestModel: Sails.Model = sails.models.test;

 class TestController {
     test(req: Express.Request, res: Express.Response) {
        //
        return res.view('test1');

     }
 }
 
 //
 export = new TestController();