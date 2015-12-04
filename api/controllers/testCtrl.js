/// <reference path="../../typings/tsd.d.ts"/>
var TestController = (function () {
    function TestController() {
    }
    TestController.prototype.test = function (req, res) {
        return res.view('homepage');
    };
    return TestController;
})();
var controller = new TestController();
module.exports = controller;
