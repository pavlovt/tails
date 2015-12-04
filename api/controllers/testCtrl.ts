/// <reference path="../../typings/tsd.d.ts"/>

 class TestController{
     test(req: Express.Request, res: Express.Response) {
         return res.view('homepage');
     }
 }
 
 var controller = new TestController();
 
 export = controller;