(function (module) {
    module.controller('firstModuleMainCtrl', function ($scope) {
        $scope.moduleName = "First Module"
    });

})(angular.module('testApp.firstModule'));