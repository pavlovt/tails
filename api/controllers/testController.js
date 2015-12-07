/// <reference path="../../typings/tsd.d.ts"/>
var TestModel = sails.models.test;
var TestController = (function () {
    function TestController() {
    }
    TestController.prototype.test = function (req, res) {
        //
        return res.view('test1');
    };
    return TestController;
})();
module.exports = new TestController();
