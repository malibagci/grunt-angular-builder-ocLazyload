(function (module) {
    module.controller('secondModuleMainCtrl', function ($scope) {
        $scope.moduleName = "Second Module"
    });

})(angular.module('testApp.secondModule'));