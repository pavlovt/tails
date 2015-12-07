/// <reference path="../../typings/tsd.d.ts"/>
var TestModel = sails.models.test;
var TestController = (function () {
    function TestController() {
    }
    TestController.prototype.test = function (req, res) {
        //return res.view('test1');
        TestModel
            .create({ name: "alex", age: 22 })
            .then(function (created) {
            res.json(created);
        });
    };
    return TestController;
})();
module.exports = new TestController();
